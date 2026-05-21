---
title: "Stripe Invoicing — Capita Technology setup runbook"
status: ready
created: 2026-05-21
plan: ../ribar-ai-web/docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
unit: U11
---

# Stripe Invoicing — Capita Technology setup runbook

Stripe is the payment processor for high-ticket advisory engagements. Per plan KD3, Capita does NOT use Stripe Checkout — these are not e-commerce transactions. Invoices are issued manually after scoping.

## Why Stripe Invoicing, not Checkout

Capita Advisory engagements start at $35,000 and run to $120,000+ bespoke. Treating them like a checkout flow:

- Misrepresents the sales motion (boards do not "buy" advisory the way they buy a SaaS seat).
- Creates an attack surface for accidental underpriced bespoke purchases.
- Removes the scoping step that protects both sides — Mitch and the client.

Stripe Invoicing keeps the deal flow at: lead → discovery call → SOW → invoice. No customer-facing payment UI exists on the website itself.

## One-time setup

### 1. Stripe account

- Create or claim the `Capita Technology` Stripe account.
- Set the business profile to a registered Australian entity.
- Set the support email to `consulting@capitatech.com.au`.
- Set the public-facing business name shown on invoices and emails to `Capita Technology`.

### 2. Tax registration

- Register for GST in Australia (if not already done) and add the GST registration to Stripe's tax settings.
- Tax treatment of international clients (NZ, SEA): consult the accountant before issuing the first international invoice. GST may apply to AU-based services regardless of buyer location, depending on the engagement.
- Add tax IDs of buyer companies on each invoice where they apply.

### 3. Invoice template

- Configure the Stripe-side invoice template with the Capita logo (PDF logo upload).
- Default payment terms: net 14 (or net 30 if the client requests; document in SOW).
- Default currency: AUD; allow USD for North American clients on a per-invoice basis.
- Default memo: a one-line summary of the engagement and the SOW reference number.

### 4. Reusable invoice items

Create Stripe Invoice Items as reusable templates so each invoice is a one-click draft:

| Item code | Description | Default price |
|---|---|---|
| `pkg-om-and-a` | Operating Model and Architecture — fixed-scope advisory engagement | A$85,000 |
| `pkg-diagnosis` | 90-Day Diagnosis — fixed-scope advisory engagement | A$45,000 |
| `pkg-roadmap` | Roadmap — fixed-scope advisory engagement | A$35,000 |
| `pkg-measurement` | Measurement and Governance — fixed-scope advisory engagement | A$35,000 |
| `pkg-bespoke-floor` | Bespoke advisory — scoped per SOW | A$120,000 (adjust per SOW) |

When invoicing, duplicate the relevant item, set the actual price (≥ from-price), and attach the SOW reference number.

### 5. Payment confirmation flow

- Set Stripe to notify `consulting@capitatech.com.au` on each invoice payment.
- The engagement kickoff (Cal.com booking) only fires after the invoice clears.

## Test invoice (do this before the first real invoice)

1. Create a $1 invoice in test mode, addressed to `mitchell.ribar@gmail.com`.
2. Walk the invoice through end-to-end — email delivery, the hosted invoice URL, the receipt PDF, and the refund flow.
3. Confirm the invoice template renders with the Capita logo and the right payment terms.
4. Delete the test invoice or mark void.

## Operational workflow (referenced from `docs/operational/lead-flow.md`)

1. Lead lands in Notion (form submission or Cal.com booking).
2. Mitch reviews within two business days, books or accepts a discovery call.
3. Discovery call produces the SOW (drafted from the template).
4. SOW signed by both parties.
5. Stripe invoice issued from the relevant package template, with the SOW reference attached.
6. Payment cleared → engagement kickoff scheduled.

## Refund and cancellation

- If a client cancels before kickoff, refund minus any non-recoverable costs already incurred.
- If a client cancels mid-engagement, the SOW termination clause governs the refund. Default: pro-rated to the work delivered to date.
- All refunds processed via Stripe's refund flow on the original invoice.

## Risks and mitigations

- **Australian GST registration mismatch.** Mitigation: get accountant input before the first real invoice. Do not bypass.
- **International tax treatment uncertainty.** Mitigation: same. Do not assume the rules for one jurisdiction apply to another.
- **Invoice template inconsistency.** Mitigation: every invoice is duplicated from the saved Stripe Invoice Items; do not create from scratch.

## Audit checklist

- [ ] Stripe account live, business profile complete.
- [ ] GST registered and recorded in Stripe.
- [ ] Invoice template has the Capita logo and the right payment terms.
- [ ] Five reusable Invoice Items exist with the package starting prices.
- [ ] Test invoice ran end-to-end and was voided/refunded.
- [ ] Notification email routing confirmed.
- [ ] First real invoice issued and cleared.
