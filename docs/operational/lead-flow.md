---
title: "Capita Advisory — lead-to-engagement flow"
status: ready
created: 2026-05-21
plan: ../ribar-ai-web/docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
unit: U14
---

# Capita Advisory — lead-to-engagement flow

End-to-end runbook from lead capture through engagement kickoff. Operational SLAs match the public commitments on `capitatech.com.au`: two business days to a response (truth-gate C9), 90-day commitment to indicators (truth-gate C8 / C11 / U8).

## The flow

```
[ form / Cal.com booking ]
        │
        ▼
[ /api/notion-lead-webhook ]
        │
        ▼
[ Notion: Capita Leads ]  ──►  Status = New
        │
        ▼
[ Mitch reviews within 2 business days ]
        │
        ▼
[ Discovery call (Cal.com) ]
        │
        ▼
[ SOW drafted from template ]
        │
        ▼
[ SOW signed by both parties ]
        │
        ▼
[ Stripe invoice issued ]
        │
        ▼
[ Payment cleared ]
        │
        ▼
[ Engagement kickoff scheduled ]
        │
        ▼
[ 90-day post-engagement check-in scheduled at kickoff ]
```

## Step-by-step

### Step 1 — Lead lands

A row appears in Notion's `Capita Leads` database. Mitch is notified by Notion mobile and a Stripe-side notification email (configured separately).

### Step 2 — Acknowledgement (within two business days)

If the lead arrived via the form, reply within two business days with the acknowledgement template (below). If the lead came via Cal.com, the booking confirmation IS the acknowledgement — no second email needed unless the call is more than 48 hours out, in which case send a quick confirm.

**Acknowledgement template:**

> Subject: Capita Technology — re: your enquiry
>
> [Name],
>
> Thanks for the note. I've pulled up [package they selected, or "the problem you described"] and I'd like to scope this with you on a call.
>
> [Cal.com booking link, or two-three time slot proposals]
>
> If the call surfaces something that fits one of the four packages on the site, I'll have a draft scope and price in your inbox the next business day. If it's bespoke, you'll have a scoped proposal within five business days.
>
> Mitch

Move the Notion row to `Status = Awaiting discovery`.

### Step 3 — Discovery call

30 minutes via Cal.com. The session is about scope, not selling.

Confirm:
- The number they need to move and the deadline.
- The package that fits (or that it's bespoke).
- Stakeholders on their side.
- Constraints (regulatory, vendor, internal political).
- Decision authority and timing.

If you and the prospect agree the next step is a proposal, move the Notion row to `Status = Proposal sent` and continue. If not, move to `Status = Closed-lost` with a note in `Message`.

### Step 4 — SOW

Draft the SOW from the Capita Advisory SOW template (kept outside the public repo).

Include:
- Engagement scope (pulled from the package definition; modified per the discovery call).
- Schedule and milestones.
- Fees and payment terms (matching the Stripe invoice template).
- Leading indicators that define the 90-day commitment.
- Confidentiality, IP, termination, governing law.

Send for signature. SLA target: SOW drafted within five business days of the discovery call.

### Step 5 — Stripe invoice

After the SOW is signed by both parties:

1. Duplicate the relevant Stripe Invoice Item (per `docs/operational/stripe-setup.md`).
2. Set the actual price (≥ from-price), attach the SOW reference number to the memo.
3. Issue.
4. Paste the Stripe invoice URL into the Notion row's `Stripe invoice` property.

Move the row to `Status = Proposal sent` if it isn't already.

### Step 6 — Payment clears

Stripe notification email confirms. Mark the Notion row `Status = Closed-won` and book the kickoff session.

### Step 7 — Kickoff + 90-day check-in

At kickoff:

- Confirm the leading indicators defined in the SOW.
- Schedule the 90-day post-engagement check-in date in Cal.com.
- Set up the shared workspace (Notion page, Google Drive folder — whatever the client prefers).
- First weekly session lands within five business days of payment.

## SLAs

| Event | SLA |
|---|---|
| First-touch acknowledgement | Two business days |
| Discovery call booked | Within ten business days of acknowledgement |
| SOW drafted | Five business days from discovery call |
| Stripe invoice issued | Same business day as SOW signing |
| Kickoff session | Within five business days of payment clearing |
| 90-day check-in | Booked at kickoff; held at the 90-day mark |

## Lifecycle states (Notion `Status`)

- **New** — just-landed lead, awaiting review.
- **Awaiting discovery** — discovery call booked or proposed.
- **Proposal sent** — SOW drafted and sent for signature.
- **Closed-won** — SOW signed, invoice paid, engagement live.
- **Closed-lost** — disqualified or declined. Include a one-line `Message` note for retrospective.

## Test the flow

When everything is wired:

1. Submit a test form as if from a prospect (use mitchell.ribar+test@gmail.com so the lead is distinguishable).
2. Confirm a Notion row appears with the right fields.
3. Walk the row through every status from `New` → `Closed-won` to verify the workflow.
4. Issue a $1 Stripe invoice to the test email, pay it, confirm the URL lands in Notion.
5. Delete the test lead and void the test invoice when done.

## Failure modes and recovery

- **Lead in Formspree but no Notion row.** Webhook failed silently. Check Vercel logs at `/api/notion-lead-webhook` for the error. Re-trigger from the Formspree dashboard.
- **Notion API rate-limited.** Webhook returns 500; Formspree retries automatically up to its retry budget. Manual reprocess from Formspree if budget is exhausted.
- **Lead lost (no Formspree, no Notion).** Should not happen — both have independent storage. If it does, check Cloudflare / Vercel edge logs.

## Audit checklist

- [ ] Notion `Capita Leads` set up per `notion-crm-setup.md`.
- [ ] Stripe Invoicing live per `stripe-setup.md`.
- [ ] Cal.com discovery-call event live per `cal-com-setup.md`.
- [ ] `/api/notion-lead-webhook` deployed and responding 200 on test.
- [ ] Acknowledgement template saved as a Mitch-local snippet (email signature, Notes app, etc.).
- [ ] First real lead processed end-to-end and SLA hit at each step.
