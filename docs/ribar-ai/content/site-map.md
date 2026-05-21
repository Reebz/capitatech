---
title: "Ribar.ai — site map and page outlines"
status: draft
created: 2026-05-21
plan: docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
unit: U16
---

# Ribar.ai — site map and page outlines

## Topology decision

**Single-page layout, scroll-anchored navigation.** Mirrors the Capita Advisory site so the brand sibling architecture is consistent and the operating cost of maintaining two sites stays low.

### Rationale

- The Ribar.ai buyer (40+ exec, considering a 12-week personal program) decides in one sitting. Multi-page navigation creates dropout points without paying for itself.
- A single canonical scroll path lets the operator-credential (top), emotional acknowledgment (middle), and program structure (bottom) land in the order the brainstorm specified.
- Founding-cohort outreach drops people on `ribar.ai` and expects them to convert in that session. Single page minimises friction.

### Alternative considered

Multi-page (Home / Tracks / About / Contact). Rejected: redundant for a single-product site with three SKUs. Each "page" would have to repeat the founder credential anchor, fragmenting the proof.

## Section order (top to bottom)

| # | Section | Purpose | Anchor |
|---|---|---|---|
| 1 | Hero | News-led positioning, operator + credential anchor, primary CTA into tracks | `#top` (implicit) |
| 2 | Operator credential block | One-line statements that ladder the emotional acknowledgment beneath the Operator + Credential headline. Acknowledge "left behind" without patronising | (continuous, no nav anchor) |
| 3 | Three tracks | Catalyst / Construct / Command — outcome-named cards with full Ladder A pricing, anchored highest-first (Command, Construct, Catalyst) | `#tracks` |
| 4 | How it works | Program structure: 4-week Foundation + 8-week Specialization, 1:1 only, 12-week container, weekly cadence | `#how` |
| 5 | 90-day commitment | Risk-reversal mirror of Capita's `Our 90-day commitment`. Adapted to first-person: `My 90-day commitment.` | `#commitment` |
| 6 | Founder letter | Long-copy first-person letter, signed. Anchor for the personal-brand register | `#founder` |
| 7 | FAQ | Buyer-objection handling. Six to eight questions. Includes "is this for me" / "what if I'm a beginner" / cost transparency / how is this different / what about after | `#faq` |
| 8 | Contact | Form (name, email, role, company optional, track interest, what prompted this) + Cal.com discovery embed | `#contact` |

Nav labels (header): `Tracks / How it works / Founder / FAQ / Talk to Mitch`.

## Per-section copy hooks

### 1. Hero
- Eyebrow: `For senior leaders activating with AI.`
- H1: per `docs/ribar-ai/content/hero-and-positioning.md`.
- Lede: emotional acknowledgment from the brainstorm middle layer.
- CTAs: primary `See the three tracks.`, secondary `Talk to Mitch.`

### 2. Operator credential block
- Headline (small): `Why this is run by an operator.`
- Two or three sentences from the Ribar.ai voice variant in `docs/shared/bio.md`.

### 3. Three tracks
- Section H2: `Three tracks. Twelve weeks each. 1:1 throughout.`
- Order: Command (`$100k`) → Construct (`$50k`) → Catalyst (`$25k`). Highest-first anchor.
- Each card: name, one-line promise, full pricing, duration, 5–6 inclusion bullets, CTA.
- Bolt-on note beneath each card: "Graduates of [previous track] can continue to [this track] for $X."

### 4. How it works
- Section H2: `How twelve weeks together is structured.`
- 4-week shared Foundation (adapts to skill level via 1:1) + 8-week track-specific Specialization.
- Weekly 1:1, ~1 hour each, light curriculum between sessions.
- Post-program: optional ongoing support via monthly retainer.

### 5. 90-day commitment
- Headline: `My 90-day commitment.`
- Body: `If, at the 90-day mark after your program closes, the indicators we defined together have not moved, I return for a no-fee follow-up week to find out why. Written into every statement of work.`

### 6. Founder letter
- Section label: `From Mitch.`
- H2: `Why I built this.`
- Long-copy per `docs/ribar-ai/content/founder-letter.md`.
- Signed by Mitch, signature image reuses `public/founder-signature.svg` (shared with Capita Advisory).

### 7. FAQ
- Section H2: `What execs ask me before they sign.`
- Six to eight Q/A per `docs/ribar-ai/content/faq.md`.

### 8. Contact
- Section H2: per `docs/ribar-ai/content/contact.md`.
- Form fields and Cal.com embed inheriting the Capita technical pattern (`PUBLIC_CAL_BOOKING_URL` env var gates the embed).

## Asset slots per section

| Section | Asset | Status |
|---|---|---|
| 1 | Hero illustration or photo of Mitch | TBD per `docs/ribar-ai/brand/asset-list.md` |
| 2 | (none — text only) | n/a |
| 3 | Three track illustration glyphs (optional, can ship without) | TBD |
| 4 | Foundation + Specialization diagram | TBD |
| 5 | (none — text only) | n/a |
| 6 | Founder portrait (high-res) | TBD |
| 6 | Founder signature SVG | reuse `public/founder-signature.svg` when Capita supplies |
| 7 | (none — text only) | n/a |
| 8 | (none — text only) | n/a |

## Footer

Quiet, single line:

> Ribar.ai is a one-to-one AI executive program by Mitch Ribar. Mitch is principal of Capita Technology, an independent advisory firm for telco, banking, financial services, and SaaS leadership teams.

Plus: links back to Capita Technology (`https://capitatech.com.au`), social handles when ready, NDA line if any.

## Open decisions for site-build follow-up plan

- Domain confirmation (`ribar.ai` vs alternative — handled in site-build plan).
- Light vs dark register (current draft assumes light; brand identity v1 may shift).
- Whether the Cal.com embed sits inside contact (default) or also above-the-fold near the hero (test on first cohort).
- Whether to render the bolt-on pricing as a row beneath the tracks or inside each track card (lean: inside each card, so the LTV pathway reads in one glance).
