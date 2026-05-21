// Vercel serverless function: receives lead-capture webhooks from
// Formspree (contact form) and Cal.com (discovery-call bookings),
// dedupes against the Notion Capita Leads database on email +
// created-within-24h, and writes a row.
//
// Env vars (required, all set in Vercel project settings):
// - NOTION_TOKEN: internal-integration token for the Capita Leads DB
// - NOTION_DATABASE_ID: 32-char hex ID for the Capita Leads database
// - NOTION_WEBHOOK_SHARED_SECRET: shared secret asserted on the
//   `x-webhook-secret` header by Formspree + Cal.com
//
// Failure mode: returns 5xx so the calling webhook (Formspree, Cal.com)
// retries automatically. Lead survives in the upstream source even if
// Notion is down. See docs/operational/notion-crm-setup.md.

interface NormalizedLead {
  name: string;
  email: string;
  company: string;
  role: string;
  source: "form" | "cal-com";
  package: string;
  phone: string;
  message: string;
}

const NOTION_API = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";
const PACKAGE_SLUGS = new Set([
  "not-sure", "om-and-a", "diagnosis", "roadmap", "measurement", "bespoke",
]);

function cleanText(value: unknown, max = 2000): string {
  if (value == null) return "";
  return String(value)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u200B-\u200F\u202A-\u202E\u2028-\u2029\u2060\uFEFF]/g, "")
    .trim()
    .slice(0, max);
}

function normalizePackage(value: unknown): string {
  const v = cleanText(value, 32);
  return PACKAGE_SLUGS.has(v) ? v : "not-sure";
}

// Map either a Formspree payload (form submission) or a Cal.com payload
// (booking) into a single shape. Unknown fields are tolerated and
// dropped; missing fields default to empty so the Notion write does not
// fail on the type level.
function normalizeBody(raw: Record<string, unknown>): NormalizedLead {
  const sourceClaim = cleanText(raw.source, 16);
  const source: "form" | "cal-com" = sourceClaim === "cal-com" ? "cal-com" : "form";

  if (source === "cal-com") {
    // Cal.com BOOKING_CREATED webhook shape (responses.* carries the
    // custom question; attendees[0] carries the booker).
    const payload = (raw.payload ?? raw) as Record<string, unknown>;
    const attendees = (payload.attendees ?? []) as Array<Record<string, unknown>>;
    const attendee = attendees[0] ?? {};
    const responses = (payload.responses ?? {}) as Record<string, unknown>;
    return {
      name: cleanText(attendee.name, 120),
      email: cleanText(attendee.email, 254),
      company: "",
      role: "",
      source: "cal-com",
      package: normalizePackage(responses.package ?? responses["package-or-problem"]),
      phone: "",
      message: cleanText(payload.title ?? responses.notes, 2000),
    };
  }

  // Formspree payload (POSTed as JSON; the website submits a
  // `payload` object with these exact field names).
  return {
    name: cleanText(raw.name, 120),
    email: cleanText(raw.email, 254),
    company: cleanText(raw.company, 120),
    role: cleanText(raw.role, 120),
    source: "form",
    package: normalizePackage(raw.package),
    phone: cleanText(raw.phone, 64),
    message: cleanText(raw.message, 2000),
  };
}

// Query the database for any existing row with the same email in the
// last 24h. Returns the page ID if found, or null. The dedupe window
// guards against accidental double-submits without merging a renewed
// inquiry that arrives months later.
async function findRecentDuplicate(
  databaseId: string,
  token: string,
  email: string,
): Promise<string | null> {
  if (!email) return null;
  const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const res = await fetch(`${NOTION_API}/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filter: {
        and: [
          { property: "Email", email: { equals: email } },
          { property: "Created at", created_time: { on_or_after: cutoff } },
        ],
      },
      page_size: 1,
    }),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { results?: Array<{ id: string }> };
  const first = data.results?.[0];
  return first?.id ?? null;
}

async function createLeadRow(
  databaseId: string,
  token: string,
  lead: NormalizedLead,
): Promise<string> {
  const properties: Record<string, unknown> = {
    Name: { title: [{ text: { content: lead.name || "(no name)" } }] },
    Email: { email: lead.email || null },
    Company: { rich_text: [{ text: { content: lead.company } }] },
    Role: { rich_text: [{ text: { content: lead.role } }] },
    Source: { select: { name: lead.source } },
    Package: { select: { name: lead.package } },
    Phone: { phone_number: lead.phone || null },
    Message: { rich_text: [{ text: { content: lead.message } }] },
    Status: { select: { name: "New" } },
  };

  const res = await fetch(`${NOTION_API}/pages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Notion create failed (${res.status}): ${text.slice(0, 400)}`);
  }
  const data = (await res.json()) as { id: string };
  return data.id;
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;
  const secret = process.env.NOTION_WEBHOOK_SHARED_SECRET;

  if (!token || !databaseId || !secret) {
    // Missing env vars — fail closed so a misconfigured deploy does
    // not silently drop leads on the floor.
    return new Response("Server not configured", { status: 500 });
  }

  const headerSecret = req.headers.get("x-webhook-secret") ?? "";
  if (headerSecret !== secret) {
    return new Response("Unauthorized", { status: 401 });
  }

  let raw: Record<string, unknown>;
  try {
    raw = (await req.json()) as Record<string, unknown>;
  } catch {
    return new Response("Invalid JSON body", { status: 400 });
  }

  const lead = normalizeBody(raw);
  if (!lead.email) {
    return new Response("Missing email", { status: 400 });
  }

  try {
    const existing = await findRecentDuplicate(databaseId, token, lead.email);
    if (existing) {
      return new Response(
        JSON.stringify({ status: "duplicate", id: existing }),
        { status: 200, headers: { "content-type": "application/json" } },
      );
    }

    const id = await createLeadRow(databaseId, token, lead);
    return new Response(
      JSON.stringify({ status: "created", id }),
      { status: 200, headers: { "content-type": "application/json" } },
    );
  } catch (err) {
    // Returning 500 triggers the caller's retry. Do not echo the error
    // text in production; log it on Vercel and return a generic message.
    console.error("[notion-lead-webhook] failed", err);
    return new Response("Notion write failed", { status: 500 });
  }
}
