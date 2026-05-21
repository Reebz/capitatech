---
title: "Cal.com — Capita Technology setup runbook"
status: ready
created: 2026-05-21
plan: docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
unit: U12
---

# Cal.com — Capita Technology setup runbook

Cal.com handles the 30-minute discovery-call booking embedded on the Capita Advisory contact section. Deep program sessions (for Ribar.ai's Catalyst/Construct/Command tracks) are scheduled directly between Mitch and the client via Cal.com but NOT exposed as a self-service booking widget — those bookings are intentionally curated.

## One-time setup

### 1. Cal.com account

- Create or claim the `Mitchell Ribar` Cal.com account.
- Recommended plan: free tier first; upgrade to Teams when Ribar.ai starts taking founding-cohort bookings if features are needed.
- Calendly remains the documented fallback if Cal.com's setup creates friction (per plan A4).

### 2. Event type — discovery call

| Field | Value |
|---|---|
| **Title** | Discovery call with Capita Technology |
| **URL slug** | `mitch/capita-discovery` |
| **Duration** | 30 minutes |
| **Buffer before / after** | 15 minutes each side |
| **Minimum notice** | 24 hours |
| **Future bookings** | 30 days |
| **Time slot increments** | 30 minutes |
| **Availability** | Mitch's working hours, Sydney TZ |
| **Confirmation** | Auto-confirmed; client gets calendar invite |

### 3. Booking question

Add one custom question on the booking flow:

> What package or problem are you looking at?

Options: Operating Model and Architecture / 90-Day Diagnosis / Roadmap / Measurement and Governance / Bespoke — tell us more / Not sure yet — let's discuss.

### 4. Webhook to Notion

Configure Cal.com to send a webhook on `BOOKING_CREATED`:

- **URL:** `https://capitatech.com.au/api/notion-lead-webhook`
- **Payload template:** include `email`, `name`, `bookingTitle`, the custom question response, and a `source: "cal-com"` flag.
- **Secret:** generate a shared secret; store as `CAL_WEBHOOK_SECRET` in Vercel env vars; the webhook endpoint validates the signature.

See `docs/operational/notion-crm-setup.md` for the receiving side.

### 5. Embed configuration

The website renders the Cal.com embed only when `PUBLIC_CAL_BOOKING_URL` env var is set. Until then, the contact section shows only the form — no broken embed.

To enable:

```bash
# In Vercel (project-level env var, all environments):
PUBLIC_CAL_BOOKING_URL=https://cal.com/mitch/capita-discovery
```

Redeploy. The contact section will render the inline Cal.com embed beside the form.

## Test booking

1. Once the env var lands and the embed renders, book a test call from a separate browser session.
2. Confirm:
   - The calendar invite arrives in Mitch's calendar.
   - A Notion row appears in the Capita Leads database (per `notion-crm-setup.md`).
   - The booking source is recorded as `cal-com`, not `form`.
   - The embedded widget passes keyboard navigation (Tab order through date / time slots).
3. Cancel the test booking to keep the calendar clean.

## LCP guard

The Cal.com embed script is loaded via the `<cal-embed>` tag. Cal.com's loader is lazy by default — the iframe paints only after user interaction or scroll-into-view. Run Lighthouse after enabling the embed and verify median mobile LCP stays ≤ 2.5s per `qa/lighthouse-2026-05-21.md`. If it regresses:

- Move the embed below the form, not adjacent.
- Or replace the inline embed with a popup-trigger button (Cal.com supports `data-cal-link` on a regular button).

## Audit checklist

- [ ] Cal.com account live, profile set.
- [ ] Discovery-call event type configured.
- [ ] Booking question added.
- [ ] Webhook → Notion endpoint registered with a shared secret.
- [ ] `PUBLIC_CAL_BOOKING_URL` set in Vercel.
- [ ] Test booking completed end-to-end and Notion row verified.
- [ ] Lighthouse re-run; LCP within budget.
