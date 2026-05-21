---
title: "Ribar.ai — founding-cohort onboarding flow"
status: draft
created: 2026-05-21
plan: docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
unit: U31
---

# Ribar.ai — founding-cohort onboarding flow

What happens after a founding-cohort client says yes. Twelve weeks of well-run delivery starts with a clean onboarding sequence — the difference between a programme that compounds and one that drifts.

---

## The flow

```
[ Warm yes from discovery call ]
        │
        ▼
[ 30-min scoping call (within 5 business days) ]
        │
        ▼
[ SOW drafted + sent (within 5 business days of scoping call) ]
        │
        ▼
[ SOW signed by both parties ]
        │
        ▼
[ Stripe invoice issued + paid (net 14) ]
        │
        ▼
[ Kickoff session scheduled (Cal.com) ]
        │
        ▼
[ Pre-kickoff intake completed by client ]
        │
        ▼
[ Kickoff session (week 1 of 12) ]
        │
        ▼
[ Weekly sessions 2–12 ]
        │
        ▼
[ Program closing (week 12) ]
        │
        ▼
[ Testimonial collection (60-day window) ]
        │
        ▼
[ 90-day check-in ]
```

---

## Step-by-step

### Step 1 — Warm yes from discovery call

At the end of the discovery call (per `cadence.md` step), the prospect has confirmed:

- The track that fits (Catalyst / Construct / Command, or bespoke).
- Their authority to commit budget and twelve weeks of calendar.
- Their willingness to provide a testimonial under the founding-cohort terms.
- A preferred start date.

Move Notion `Ribar.ai Founding Targets` row from `Discovery call done` → `Awaiting scoping`.

### Step 2 — 30-min scoping call (within 5 business days of warm yes)

The scoping call is shorter and more specific than discovery. Purpose:

- Confirm track and start date.
- Surface track-specific scope details (which problem in Catalyst, which tool in Construct, which board engagement in Command).
- Draft the 90-day indicators that will go into the SOW Annex B.
- Confirm payment terms (net 14) and invoicing contact.

Outcome: scope brief written and approved by the client over email within one business day of the call.

### Step 3 — SOW drafted (within 5 business days of scoping call)

Use `sow-template.md` as the base. Customise:

- Track name and fee.
- Start and end dates.
- Annex A (deliverables) per the track's curriculum file.
- Annex B (90-day indicators) per the scoping call.

Send for signature via DocuSign (or equivalent). SLA: signed within 5 business days; if not signed, follow up with the client representative.

### Step 4 — Stripe invoice issued (same day as SOW signing)

- Duplicate the relevant Stripe Invoice Item (per `docs/operational/stripe-setup.md`, founding-cohort item codes).
- Override the price to the founding-cohort fee.
- Attach the SOW reference number to the memo.
- Send invoice. Payment terms: net 14.
- Paste the Stripe invoice URL into the Notion row.

Move Notion row to `Status = Awaiting payment`.

### Step 5 — Payment clears, kickoff scheduled

When the Stripe payment notification fires:

- Move Notion row to `Status = Signed — kickoff pending`.
- Email the client with: a thank-you, a link to the pre-kickoff intake form, and the Cal.com booking link for the kickoff session.

### Step 6 — Pre-kickoff intake

The client completes the intake form before the kickoff session. The intake covers:

| Field | Purpose |
|---|---|
| **AI experience level** | Beginner / Intermediate / Advanced (calibrates Foundation depth) |
| **Tools currently used** | Claude / ChatGPT / Gemini / Copilot / other |
| **Workflow context** | Day-in-the-life — when do they have time for AI work? |
| **Goal articulation** | In one paragraph, what does success at week 12 look like? |
| **Stakeholder map** | Who else in their org needs to know about / approve this work? |
| **Constraints** | Regulatory, vendor-relationship, time-of-day, energy, anything that affects delivery |
| **Confidentiality posture** | What CAN be shared in case studies, even anonymised? |

The intake feeds into Mitch's kickoff session prep. Without it, the kickoff session burns time on questions that should have been answered in writing.

### Step 7 — Kickoff session (week 1 of 12)

90 minutes (longer than standard sessions). Agenda:

1. Read-back of the SOW deliverables and the 90-day indicators (5 min).
2. Confirm cadence: day of week + time, async-messaging norms, session prep expectations (5 min).
3. Calibrate Foundation depth based on pre-kickoff intake (10 min).
4. Walk through weeks 1–4 of Foundation per the relevant curriculum file (30 min).
5. Define the personal AI workflow doc target (Foundation deliverable) and the track-specific specialization plan (30 min).
6. Schedule sessions 2–12 (Cal.com block-booked at kickoff to lock the cadence) (5 min).
7. Schedule the 90-day post-program check-in (5 min — this is locked in NOW, not deferred).

Outcome: signed program plan delivered to the client within 24 hours of the kickoff session.

### Step 8 — Weekly sessions 2–12

Per the curriculum files. Each session:

- Pre-session: Mitch reviews the prior week's deliverables and prepares the current week's anchor question + key concepts.
- Session: 60 minutes via Cal.com / video.
- Post-session: notes captured to a shared workspace (Notion page or Google Doc per client preference) within 24 hours.

Async between sessions: capped at reasonable use; typically 2–3 short exchanges per week.

### Step 9 — Program closing (week 12)

The closing session is the second longest of the program (~75 minutes). Agenda:

1. Review of end-of-track deliverables against the SOW (15 min).
2. The 90-day forward plan: what is the client committing to? (20 min)
3. Optional graduation path conversation: bolt-on, monthly retainer, or step out clean (10 min).
4. Testimonial-collection conversation: shape, timing, drafting process (15 min).
5. Confirm the 90-day check-in date and what indicators will define success (15 min).

Outcome: final program write-up (Mitch-authored, ~3-5 pages), forward plan signed, 90-day check-in on the calendar.

### Step 10 — Testimonial collection (60-day window)

Per SOW clause 4 (`sow-template.md`), the testimonial is contractually due within 60 days of program completion.

- Day 14 post-completion: light reminder; share the testimonial brief (one paragraph: what shape, what length, what to include).
- Day 30 post-completion: if no draft yet, schedule a 15-minute call to talk it through.
- Day 45 post-completion: send a draft for the client to edit and sign (this is the highest-yield approach — most clients prefer to edit than to author).
- Day 60: signed testimonial in hand. If not, SOW clause 4.5 fee differential applies.

### Step 11 — 90-day check-in

Scheduled at kickoff (step 7); held at the 90-day mark post-completion.

- 30 minutes via Cal.com / video.
- Review the 90-day indicators against actual outcomes.
- Capture lessons learned for the next cohort.
- If indicators have not moved: trigger the no-fee follow-up week per SOW clause 5.3.

---

## SLAs

| Event | SLA |
|---|---|
| First-touch acknowledgement (after warm yes) | 1 business day |
| Scoping call booked | Within 5 business days of warm yes |
| SOW drafted | Within 5 business days of scoping call |
| SOW signed | Within 5 business days of SOW sent |
| Stripe invoice | Same business day as SOW signing |
| Payment cleared | Net 14 |
| Kickoff session | Within 5 business days of payment |
| Session 2 | Within 7 days of kickoff |
| Weekly cadence | One session per week, same day + time, locked at kickoff |
| Notes from each session | Within 24 hours |
| Testimonial collection | Within 60 days of program completion |
| 90-day check-in | At the 90-day post-completion mark |

---

## Failure-mode handling

- **Client misses a session without notice.** Reschedule once within the same week if possible. Two missed sessions in a row triggers a written check-in: is this still the right timing?
- **Client wants to defer mid-program.** Per SOW clause 2.5: medical, bereavement, major business event are accommodated. Voluntary pause for convenience is not the model — discuss explicitly.
- **Scope creep emerges.** Surface in the next session; add to the program plan as an explicit change with the client's agreement. Do not silently expand scope.
- **Indicators are clearly not moving by week 8.** Surface in week 8. Either recalibrate the indicators (with the client's agreement) or commit to triggering the no-fee follow-up week at the 90-day mark.
- **Client cancels mid-program.** Per SOW clause 8.2: pro-rated fee + wind-down. Notion row to `Status = Closed-cancelled-mid`.

---

## Notion row state through the lifecycle

| Phase | Notion Status |
|---|---|
| Outreach sent | `Outreach sent` |
| Reply received | `Replied` |
| Discovery call booked | `Discovery call booked` |
| Discovery call done — warm yes | `Awaiting scoping` |
| Scoping call done | `Awaiting SOW` |
| SOW sent | `Awaiting signature` |
| SOW signed | `Awaiting payment` |
| Payment received | `Signed — kickoff pending` |
| Kickoff complete | `Active — week 1` |
| Weekly progression | `Active — week N` |
| Week 12 complete | `Closing — testimonial pending` |
| Testimonial received | `Closed-won` |
| 90-day check-in held | `Closed-won — alumni` |

---

## Audit checklist for the first founding-cohort client

When the first signed founding-cohort client moves through this flow:

- [ ] Acknowledgement sent within 1 business day of warm yes.
- [ ] Scoping call booked and held within 5 business days.
- [ ] SOW (signed by Mitch's lawyer first) sent within 5 business days of scoping.
- [ ] SOW signed by both parties.
- [ ] Stripe invoice issued on signing day.
- [ ] Payment cleared within 14 days.
- [ ] Kickoff session held within 5 business days of payment.
- [ ] Pre-kickoff intake completed before kickoff.
- [ ] All 12 weekly sessions held on cadence.
- [ ] Session notes shared within 24 hours of each session.
- [ ] Program closing held; final write-up delivered.
- [ ] Testimonial collected within 60 days.
- [ ] 90-day check-in held; indicators reviewed.

If any item is missed, capture the cause in Notion and use it as input for the second cohort's onboarding revisions.
