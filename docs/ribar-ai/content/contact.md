---
title: "Ribar.ai — contact section copy"
status: draft
created: 2026-05-21
plan: docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
unit: U21
---

# Ribar.ai — contact section copy

Sits at the end of the page. Form + Cal.com embed, mirroring Capita Advisory's contact pattern but with first-person voice and Ribar.ai field shape.

---

## Section label

> Talk to Mitch.

## H2 (verbatim)

> Tell me what you are trying to activate. I respond within two business days.

## Lede (verbatim)

> The form asks for context I need to know whether one of the three tracks fits or whether we should talk through something bespoke. If you would rather skip the form and put a 30-minute discovery call on the calendar, the booking button is on the right.

---

## Form fields

| Field | Required | Type | Notes |
|---|---|---|---|
| **Name** | Required | text, 2–60 chars | per Capita validation pattern |
| **Work email** | Required | email | RFC + sanity validation |
| **Role** | Required | text, 2–120 chars | "Chief Customer Officer", "Independent NED", etc. |
| **Company** | Optional | text, 2–120 chars | Optional because independent consultants and board-only execs are valid buyers |
| **Which track interests you** | Required | select | Options: Command / Construct / Catalyst / Not sure — let's discuss |
| **What is prompting this** | Required | textarea, max 2000 chars | Placeholder: "e.g. My board just asked me to define our AI strategy. I have 90 days." |

## Submit button

> Send this to Mitch.

## Success message

> Received. You will hear from me within two business days.

## Pending state

> Sending…

## Aside (replaces the Capita "pain points" aside; first-person framing)

**H3:**

> If any of these are true, the conversation will be short.

**Lede:**

> A few examples of what the discovery call is built to clarify:

**List:**

- You have a strategic AI decision in front of you and the deck you would present is not yet the deck you would defend.
- You have been doing AI courses for a year and you still cannot point to one tangible thing you have built.
- Your team is using AI tools and you are the executive accountable for the outcomes — but you are not yet using the tools yourself.
- Your board has asked you a direct question about AI and you answered it diplomatically. You want to answer it cleanly next time.
- You have signed off on AI spend that you do not yet understand the basis for, and you are uncomfortable with that gap.

## Cal.com embed (optional, env-var gated like Capita)

When `PUBLIC_CAL_BOOKING_URL` is set in the Ribar.ai project's env, render a popup-trigger button beneath the aside list:

> Or skip the form and put a 30-minute discovery call on the calendar:
>
> `[Book a discovery call]` (Cal.com popup trigger)

---

## Truth-gate notes

- "I respond within two business days" — operational SLA. Must be honoured.
- "30-minute discovery call" — matches Cal.com event type defined in `docs/operational/cal-com-setup.md`.
- "free" is implied by "no charge" — not stated. The discovery call is free per operational policy; if that ever changes, this copy must change too.
- No specific numbers or named entities — safe.
