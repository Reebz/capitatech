---
title: "Notion CRM — Capita Leads setup runbook"
status: ready
created: 2026-05-21
plan: docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
unit: U13
---

# Notion CRM — Capita Leads setup runbook

Notion backs the lightweight Capita Leads CRM. Form submissions and Cal.com bookings both flow through the `/api/notion-lead-webhook` Vercel function and land as rows in the Notion database.

Per plan KD5, this is intentionally lightweight. When volume justifies, migrate to HubSpot or Customer.io — the webhook endpoint is the only place to swap the destination.

## One-time setup

### 1. Create the Notion database

In the user's Notion workspace, create a database called `Capita Leads` with these properties:

| Property | Type | Notes |
|---|---|---|
| **Name** | Title | The lead's name. |
| **Email** | Email | Required; unique key for dedupe (with `Created at` window). |
| **Company** | Text | Required for form submissions; optional for Cal.com bookings. |
| **Role** | Text | Required for form submissions; optional for Cal.com bookings. |
| **Source** | Select | Options: `form`, `cal-com`. |
| **Package** | Select | Options: `not-sure`, `om-and-a`, `diagnosis`, `roadmap`, `measurement`, `bespoke`. |
| **Phone** | Phone | Optional. |
| **Message** | Text | Form free-text or Cal.com booking question response. |
| **Status** | Select | Options: `New`, `Awaiting discovery`, `Proposal sent`, `Closed-won`, `Closed-lost`. Default `New`. |
| **Created at** | Created time | Auto. |
| **Updated at** | Last edited time | Auto. |
| **SOW reference** | Text | Filled in manually when a SOW is signed. |
| **Stripe invoice** | URL | Manual paste of the Stripe invoice URL once issued. |

### 2. Create a Notion integration

1. Go to <https://www.notion.so/my-integrations> and create an internal integration named `Capita Leads Webhook`.
2. Copy the **Internal Integration Token**.
3. In the `Capita Leads` database, click `...` → `Add connections` → select `Capita Leads Webhook`. Without this, the integration cannot write to the database.

### 3. Capture the database ID

The database ID is in the URL after `notion.so/`, before the `?v=`. It is a 32-character hex string.

### 4. Vercel environment variables

In the Vercel project settings, add (Production + Preview + Development):

```bash
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_WEBHOOK_SHARED_SECRET=<random-string>  # used by Formspree + Cal.com to authenticate
```

Generate the shared secret with `openssl rand -hex 32`.

Set the same `NOTION_WEBHOOK_SHARED_SECRET` value on the Formspree webhook config (or Cal.com webhook header) so the receiving function can verify.

### 5. Configure Formspree to webhook the endpoint

In the Formspree project settings (paid plan required for webhooks), add a webhook:

- **URL:** `https://capitatech.com.au/api/notion-lead-webhook`
- **Custom header:** `x-webhook-secret: <NOTION_WEBHOOK_SHARED_SECRET>`
- **Source flag:** the function defaults to `form` when no `source` field is in the body.

If Formspree webhooks are unavailable (free tier), the fallback is a daily polling cron that reads Formspree submissions via API and writes to Notion. Documented for future implementation; not required for v1.

### 6. Configure Cal.com to webhook the endpoint

See `docs/operational/cal-com-setup.md` step 4.

## Saved views in Notion

Create the following Notion database views to operate from:

| View name | Filter | Sort |
|---|---|---|
| **New leads** | Status = New | Created at, desc |
| **Awaiting discovery** | Status = Awaiting discovery | Created at, asc |
| **Proposal sent** | Status = Proposal sent | Updated at, desc |
| **Closed-won** | Status = Closed-won | Updated at, desc |
| **Closed-lost** | Status = Closed-lost | Updated at, desc |

## Dedupe behaviour

The webhook function dedupes on `email + created-within-24h` so a single lead submitting twice in quick succession does not create two rows. After 24 hours, a fresh submission from the same email creates a new row (could be a renewed inquiry months later).

## Failure mode

If the Notion API errors (5xx, rate limit, token revoked), the webhook returns 500 to the source (Formspree / Cal.com). Both Formspree and Cal.com retry failed webhooks; the lead is not lost.

If Formspree retry budget is exhausted and the Notion write still fails, the lead remains in the Formspree dashboard for manual reprocessing — this is the safety net per plan KD5.

## Audit checklist

- [ ] `Capita Leads` database created with all properties.
- [ ] Internal integration created and connected to the database.
- [ ] Database ID captured and stored in Vercel env.
- [ ] `NOTION_TOKEN`, `NOTION_DATABASE_ID`, `NOTION_WEBHOOK_SHARED_SECRET` set in Vercel.
- [ ] Formspree webhook registered with shared secret header.
- [ ] Cal.com webhook registered with shared secret.
- [ ] Test form submission → Notion row appears with `Source = form`.
- [ ] Test Cal.com booking → Notion row appears with `Source = cal-com`.
- [ ] Duplicate test (same email twice within 24h) → only one row.
- [ ] Notion saved views in place.
