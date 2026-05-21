---
title: "feat: Launch Ribar.ai content + productise Capita Advisory"
status: active
depth: deep
type: feat
created: 2026-05-21
origin: docs/brainstorms/ribar-ai-pitch-2026-05-21.md
---

# feat: Launch Ribar.ai content + productise Capita Advisory

## Summary

Implement the two-brand pitch synthesized in `docs/brainstorms/ribar-ai-pitch-2026-05-21.md`. The plan ships two parallel workstreams plus shared scaffolding:

1. **Capita Advisory site update** — apply the Ogilvy-resolved copy direction from `qa/copy-review/conflicts-and-resolution.md` to the existing `capitatech-web` Astro site. Publish four productised packages with pricing, restructure nav, add founder letter, rewrite Method/Outcomes/FAQ/Contact, replace anonymous logo wall with named testimonials, cut SEO-stuffing in footer.
2. **Ribar.ai content + brand artifacts** — write the full copy, define brand identity v1, design the curriculum at structural level, and prepare an asset list for when the user is ready to build the Ribar.ai site (site build itself is deferred). Founding-cohort offer copy is included as outreach-only material, not website public copy.
3. **Operational integrations on Capita Advisory** — wire up Stripe (invoicing for high-ticket advisory engagements), Cal.com (discovery-call scheduling), and lightweight CRM hand-off (Notion-backed) so the productised packages can convert end-to-end.
4. **Founding-cohort outreach mechanics** — Statement-of-Work template with contractual testimonial clause, target-list criteria, cadence/channel plan, message templates, onboarding flow.

This is a Deep plan with phased delivery. The Capita Advisory site update is the shipping-priority phase (immediate value). Ribar.ai content artifacts are durable inputs to the deferred site build. Operational integrations sit between (Capita needs them, Ribar.ai will inherit them later).

---

## Problem frame

(See origin: `docs/brainstorms/ribar-ai-pitch-2026-05-21.md`.)

Mitch Ribar runs two related but psychologically distinct sales motions:

- **Capita Advisory** sells fixed-scope advisory engagements to leadership teams in telco, banking, insurance, and SaaS who are solving team-level retention, AI delivery, or operating-model problems. The current site treats the firm as a generic "independent executive advisory" without published prices, named clients, or specific outcomes — leaving prospects to assume a long McKinsey-style procurement cycle.

- **Ribar.ai** does not yet exist. It will sell a 12-week 1:1 AI executive program to individual leaders 40+ who feel left behind by AI but want to activate. Three tracks (Catalyst → Construct → Command) with a shared 4-week Foundation. Personal brand with operator-credential anchor.

Both brands depend on the same Mitch Ribar bio (MIT MBA, Optus Project Loyal, JPMorgan Chase AI Personalization, Brand Networks SaaS scale-up). Each brand serves a buyer whose psychology mixing on one site would dilute.

The Capita Advisory site update is shipping-ready: copy direction is resolved per the Ogilvy review, current Astro stack is sound, the existing `methodBlocks`/`outcomes`/`faqs`/`logos` data-driven pattern in `src/pages/index.astro` is the right shape to extend with a `packages` array. The Ribar.ai content can be produced as Markdown + design specs and held until site build kicks off.

---

## Scope boundaries

### Stated (in this plan)

- Capita Advisory full copy update per `qa/copy-review/conflicts-and-resolution.md` (Ogilvy-prevailing direction).
- Four productised packages on Capita Advisory with bare prices and "from $X" semantics.
- Contact form extension: Company, Role, package selector fields.
- Founder letter content slot activation on Capita Advisory.
- Named testimonials section (placeholder structure; real testimonials are truth-gated).
- Risk-reversal section on Capita Advisory ("Our 90-day commitment").
- Footer rewrite (cut SEO keyword tiles).
- Kinetic phrase collapse from twice to once with new copy.
- Stripe integration for Capita Advisory advisory-engagement invoicing.
- Cal.com integration for discovery-call scheduling (Capita Advisory primary; portable to Ribar.ai later).
- CRM hand-off — Notion database backing form submissions and lifecycle tracking.
- Ribar.ai content artifacts: site map, full page copy, founding-cohort outreach copy, founder letter, FAQ, contact section.
- Ribar.ai brand identity v1: color palette, typography selection, voice/tone notes, logo direction (decisions captured; not implemented as site assets in this plan).
- Ribar.ai curriculum at structural level: 28 modules (4 Foundation + 8 × 3 Specializations) with titles, one-line learning outcomes, and sequencing.
- Founding-cohort outreach mechanics: Statement-of-Work template with contractual testimonial clause, target-list criteria, cadence + channel plan, message templates, onboarding flow.
- Cross-brand bio shared between Capita Advisory and Ribar.ai.
- Capita Advisory cross-link addendum forward-referencing Ribar.ai.
- Truth-gate verification (or removal) of every claim-bearing line before site goes live.

### Inferred (proceeding without further user confirmation; documented as assumptions)

- Domain for Ribar.ai is `ribar.ai`. If the user discovers it's unavailable, this is a single-string find/replace; not a planning blocker.
- Stripe is the payment processor (most credible at premium B2B price points; broad integration support).
- Cal.com is the scheduling tool (premium UX, embeddable, founder-friendly; Calendly is the fallback if Cal.com self-host adds friction).
- Notion is the lightweight CRM (low setup cost, can upgrade to HubSpot/Customer.io later; user already operates Notion).
- "Founding cohort" pricing remains outreach-only — does NOT appear on the Capita Advisory live site or on the future Ribar.ai public site. Lives in outreach assets only.
- Ribar.ai content is written in Markdown and saved under `docs/ribar-ai/` in this repo until the user is ready to migrate to a Ribar.ai repo. This keeps everything together and version-controlled until the cutover.
- The Capita Advisory site update preserves the existing visual register (ASCII grid, kinetic phrase, chunky idiom, Inter/Geist pairing). Tone calibration is correct; redesign is not in scope.
- LCP budget of ≤2.5s mobile p75 (per `README.md`) is preserved. Pricing cards and founder letter must not regress this.

### Out of scope (explicitly NOT in this plan)

- **Ribar.ai site build.** Site implementation (repo bootstrap, Astro scaffold, components, deployment, domain wiring) is deferred to a follow-up plan once user is ready. This plan produces the content + design artifacts that feed that follow-up.
- **Actual founding-cohort target list.** Plan produces the *criteria* for sourcing; the user populates the list outside this plan.
- **Actual outreach sends.** Plan produces templates and cadence; the user executes the outreach.
- **Paid acquisition / marketing channel buys.** Not in scope.
- **Brand identity full design system.** Plan produces v1 direction (palette, type, voice). Full design system (logo files, illustration style, component library) is deferred.
- **Ribar.ai community platform.** Deferred per brainstorm — opt-in community fires only when client volume justifies.
- **Module-by-module curriculum authoring.** Per the user's structural-only answer, this plan ships the curriculum skeleton, not session-by-session content.
- **Migration of Capita Advisory to a different framework or CMS.** Stays on Astro 6.2.1 / Tailwind 4.2.4 / Vercel.
- **Capita Advisory visual redesign.** Visual register stays. (See the recently-shipped `docs/plans/2026-05-14-001-feat-capita-cavaro-visual-reskin-plan.md` — the visual redesign is already complete and stable.)

### Deferred to follow-up work

- **Ribar.ai site build** — new plan to scaffold the Ribar.ai Astro site using the content artifacts produced here.
- **Curriculum content authoring** — separate plan per track (Catalyst / Construct / Command) once founding cohort has shaped real exec needs.
- **Founding-cohort target list population + outreach execution** — operational work, not planning work.
- **Brand identity full design system** — expand v1 into a complete design language with logo files, illustration style, brand book.
- **CRM upgrade path** — when Notion outgrows the use case, migrate to HubSpot/Customer.io.
- **Affiliate or referral program** — not in scope; consider after founding cohort delivers.

---

## Requirements traceability

(R-IDs are plan-local. Origin requirements come from the brainstorm synthesis.)

- **R1.** Capita Advisory site publishes four productised packages with bare-anchored pricing (highest-first), each with inclusions, duration, CTA. Per Ogilvy direction.
- **R2.** Capita Advisory hero leads with the productisation news per Ogilvy review (`docs/brainstorms/ribar-ai-pitch-2026-05-21.md` and `qa/copy-review/ogilvy-review.md`).
- **R3.** Capita Advisory replaces anonymous logo wall with named, titled testimonials (or labels section as "More on request" when fewer than two named testimonials are available).
- **R4.** Capita Advisory adds a signed founder letter section between packages and FAQ.
- **R5.** Capita Advisory FAQ is rewritten as buyer-objection handling per Ogilvy direction; adds price question.
- **R6.** Capita Advisory contact form captures Company, Role, and package selector in addition to existing fields.
- **R7.** Capita Advisory submission flows hand off to Notion (CRM), Stripe (invoicing), and Cal.com (scheduling) where appropriate.
- **R8.** Capita Advisory carries a risk-reversal commitment ("Our 90-day commitment") after the packages section.
- **R9.** Capita Advisory footer drops the keyword-soup Services/Industries tiles in favor of the leaner Ogilvy-direction footer.
- **R10.** Kinetic phrase appears once (not twice) with text "Operators, not consultants."
- **R11.** Capita Advisory bio surfaces a forward-link to Ribar.ai (one line, low-emphasis).
- **R12.** Ribar.ai content artifacts include full page copy, brand identity v1 specifications, asset list for site build.
- **R13.** Ribar.ai curriculum is documented at 28-module structural level: 4 Foundation modules + 8 × 3 specialization modules, each with title, one-line learning outcome, and sequencing within track.
- **R14.** Founding-cohort outreach mechanics include a Statement-of-Work template with contractual testimonial clause, target-list criteria, cadence/channel plan, message templates, and onboarding flow.
- **R15.** Every truth-gated claim on Capita Advisory is verified or removed before publishing. See "Truth-gate verification" in Risks below.
- **R16.** LCP mobile p75 stays ≤ 2.5s after Capita Advisory updates ship.
- **R17.** Capita Advisory and Ribar.ai share a single canonical Mitch Ribar bio that lives in `docs/shared/bio.md` and is referenced from both brands' assets.

---

## Key technical decisions

### KD1. Capita Advisory stays on existing Astro stack; extends data-driven section pattern
The current `src/pages/index.astro` renders sections from local `const` arrays (`methodBlocks`, `outcomes`, `faqs`, `logos`). Add a `packages` array of four entries, render through a new `Package` card block using existing `.chunky-*` CSS tokens. No new framework dependencies. No component extraction needed for this scope.

### KD2. Layout.astro stays monolithic for this plan
The repo researcher flagged `Layout.astro` (937 lines) as a refactor candidate. Out of scope. Continue extending inline. A future Ribar.ai-site-build plan may take on the extraction.

### KD3. Stripe = Invoicing, not Checkout
Capita Advisory packages start at $35k and run to $120k+ bespoke. These are not e-commerce transactions. Use Stripe Invoicing via API: the form submission triggers a Notion record + an internal email; Mitch reviews and sends a Stripe invoice from the admin panel manually. No customer-facing payment UI on the website itself. This avoids treating six-figure engagements like checkout flows.

### KD4. Cal.com = discovery calls, not deep program sessions
Cal.com handles initial 30-minute discovery calls embedded on the Capita Advisory contact section (and later, Ribar.ai's site). Deep 1:1 program sessions (for Ribar.ai's Catalyst/Construct/Command tracks) are scheduled directly between Mitch and the client via Cal.com but not exposed as a self-service booking widget — those bookings are intentionally curated.

### KD5. CRM = Notion database backing the Formspree submission
Formspree continues handling form delivery. Add a Notion integration via Notion API: a serverless function (Vercel Edge Function) receives the Formspree webhook (or polls Formspree) and creates a row in a Notion "Leads" database. This is lightweight and lets Mitch operate from a tool he already knows. Replaceable later.

### KD6. Ribar.ai content stays in `docs/ribar-ai/` of this repo until the site-build plan
Drafting the Ribar.ai copy + design v1 + curriculum in this repo means version-controlled, reviewable, mempalace-discoverable, and trivially exportable when the user is ready to scaffold the Ribar.ai site. A fresh `ribar-web` repo will pull this content in at scaffold time.

### KD7. Founding-cohort pricing lives in outreach assets only
Per the brainstorm and Ogilvy direction: founding-cohort pricing (60% off list) must NOT appear on either brand's public website. It lives in:
- `docs/ribar-ai/outreach/sow-template.md` (the contractual SOW)
- `docs/ribar-ai/outreach/messages/` (the outreach message templates)
- `docs/ribar-ai/outreach/cadence.md` (the cadence plan)

The website lists only Ladder A pricing for Ribar.ai. Founding clients are referred in via direct message; the discount applies at SOW signing.

### KD8. Truth-gate verification is a hard gate before Capita Advisory deploys
Every claim-bearing line on Capita Advisory must be verified before merge to `main`. The verification produces a checklist artifact (`qa/truth-gates-2026-05-21.md`) referenced by the PR description. Unverified claims either get verified copy or get rewritten to avoid the claim.

---

## High-level technical design

**Two-brand architecture.** Shared founder bio anchors both. Single canonical bio in `docs/shared/bio.md`. Capita Advisory renders the relevant Capita-flavored bio in its founder section. Ribar.ai will render the Ribar.ai-flavored bio when its site ships.

```text
                              docs/shared/bio.md
                              (canonical Mitch Ribar credentials)
                                       │
                            ┌──────────┴──────────┐
                            │                     │
                  Capita Advisory          Ribar.ai (deferred)
                  (capitatech.com.au)      (ribar.ai)
                  - Astro 6.2.1            - Future repo
                  - In this repo           - Content in
                  - SHIPS NOW                docs/ribar-ai/
                            │                     │
                            │              [site build = deferred plan]
                            │
                            ▼
                  Lead capture flow:
                  Form (Formspree) → Webhook
                                       │
                                       ├──► Notion CRM (KD5)
                                       │
                                       ├──► Internal email to Mitch
                                       │
                                       └──► (manual review) ──► Stripe Invoice (KD3)
                                                              └─► Cal.com discovery call (KD4)
```

This illustrates the intended approach and is directional guidance for review, not implementation specification. The implementing agent should treat it as context, not architecture to reproduce literally.

---

## Output structure

New directories created or extensively populated by this plan:

```text
capitatech-web/
├── docs/
│   ├── ribar-ai/                                  [NEW]
│   │   ├── brand/
│   │   │   ├── identity-v1.md                     # palette, typography, voice/tone
│   │   │   ├── logo-direction.md                  # logo brief, references, what NOT
│   │   │   └── asset-list.md                      # what site build needs
│   │   ├── content/
│   │   │   ├── site-map.md                        # IA + page outlines
│   │   │   ├── hero-and-positioning.md            # copy for top of site
│   │   │   ├── tracks/
│   │   │   │   ├── catalyst.md                    # Catalyst track copy
│   │   │   │   ├── construct.md                   # Construct track copy
│   │   │   │   └── command.md                     # Command track copy
│   │   │   ├── founder-letter.md                  # signed long-copy letter
│   │   │   ├── faq.md                             # buyer-objection FAQ
│   │   │   └── contact.md                         # contact section copy
│   │   ├── curriculum/
│   │   │   ├── foundation.md                      # 4-module shared Foundation
│   │   │   ├── catalyst-specialization.md         # 8 modules
│   │   │   ├── construct-specialization.md        # 8 modules
│   │   │   └── command-specialization.md          # 8 modules
│   │   └── outreach/
│   │       ├── sow-template.md                    # SOW with testimonial clause
│   │       ├── target-list-criteria.md            # who to target, sourcing
│   │       ├── cadence.md                         # outreach cadence + channels
│   │       ├── messages/
│   │       │   ├── intro-cold.md
│   │       │   ├── intro-warm.md
│   │       │   └── follow-up.md
│   │       └── onboarding-flow.md                 # founding-client onboarding
│   └── shared/                                    [NEW]
│       └── bio.md                                 # canonical Mitch Ribar bio
├── qa/
│   └── truth-gates-2026-05-21.md                  [NEW] # verification checklist
├── src/
│   ├── pages/
│   │   └── index.astro                            # extended (R1–R10)
│   ├── layouts/
│   │   └── Layout.astro                           # nav + footer updates
│   └── styles/
│       └── global.css                             # minor token additions if needed
└── api/                                            [NEW; only if KD5 webhook]
    └── notion-lead-webhook.ts                      # serverless Notion sync
```

The tree is a scope declaration. Per-unit `**Files:**` sections below are authoritative for what each unit creates or modifies. The implementing agent may adjust naming or layout if implementation reveals a better shape.

---

## Implementation units

Organized into six phases. Phase 1 (Capita Advisory copy) is highest priority — ship value first. Subsequent phases proceed in parallel where dependencies allow.

### Phase 1 — Capita Advisory copy + packages (immediate visible launch)

### U1. Update meta, hero, and nav per Ogilvy direction
**Goal:** Replace meta description, hero eyebrow/H1/lede/CTAs, and nav labels with the Ogilvy-resolved direction.
**Requirements:** R2, R10.
**Dependencies:** None.
**Files:**
- `src/pages/index.astro` (hero block, KINETIC_PHRASE const)
- `src/layouts/Layout.astro` (nav links, meta description, title)
**Approach:**
- Set `description` in `Layout.astro` per `qa/copy-review/ogilvy-review.md` ("Capita Technology is the advisory firm ex-operators run...").
- Replace hero eyebrow with `Independent. Operator-led. Advisory only — never the implementer.`
- Replace H1 with the productisation-news lead.
- Replace lede with the trimmed Ogilvy lede.
- Replace CTAs: primary → `See the four packages and prices.`, secondary → `Discuss a bespoke engagement.`
- Update `KINETIC_PHRASE` to `Operators, not consultants.` Render only the first kinetic-phrase band; delete the second one.
- Update nav: `Packages / Bespoke / Outcomes / FAQ / Talk to us`.
**Patterns to follow:** existing hero section pattern in `src/pages/index.astro` lines 96–110.
**Test scenarios:**
- Render `/` and visually confirm hero H1, lede, eyebrow match Ogilvy direction exactly.
- Click "See the four packages and prices." — anchor scrolls to `#packages` (added in U2).
- Click each nav link — anchors to the correct section.
- Kinetic phrase appears once in the section flow, not twice.
- Lighthouse run: LCP stays ≤ 2.5s mobile p75.
**Verification:** Page-render diff against the Ogilvy direction is line-for-line; manual cross-reference against `qa/copy-review/ogilvy-review.md`.

### U2. Add four-package pricing section
**Goal:** Render four productised packages with "from $X" pricing and CTA anchors, highest-priced first.
**Requirements:** R1.
**Dependencies:** U1.
**Files:**
- `src/pages/index.astro` (new `packages` const + new section markup + new card block)
- `src/styles/global.css` (only if a new `.package-card` token is needed — reuse `.chunky-*` first)
**Approach:**
- Add `const packages` array with four entries: Operating Model & Architecture (from $85k, 8–12 weeks), 90-Day Diagnosis (from $45k, 6–8 weeks), Roadmap (from $35k, 4 weeks), Measurement & Governance (from $35k, 4 weeks).
- Each entry has: name, eyebrow ("from $X"), duration, 4–6 inclusion bullets, CTA text.
- Render in a new `<section class="section section-plate" id="packages">` between Method and Outcomes (or wherever the visual flow lands best — defer to implementation review).
- Reuse `.eyebrow`, `.section-head`, `.faq-card` chunky idiom for visual consistency.
- Add a "Bespoke advisory" footer band beneath the four cards: `From $120k, scoped within 5 business days.` with CTA `Discuss a bespoke engagement.`
**Patterns to follow:** the `methodBlocks` / `faq-stack` rendering patterns in `src/pages/index.astro`.
**Test scenarios:**
- Render `/` and confirm four package cards display in highest-first order with correct prices.
- Each CTA anchor-scrolls to `#contact` and pre-fills the package selector (U6 dependency).
- Cards are keyboard-tabbable; CTAs are focusable in DOM order.
- Mobile breakpoints: cards stack vertically below 768px, side-by-side above.
- `Bespoke advisory` band appears beneath the cards with its own CTA.
**Verification:** Visual screenshot against Ogilvy-direction sketch; package data matches `qa/copy-review/ogilvy-review.md` lines exactly.

### U3. Update Method blocks per Ogilvy direction
**Goal:** Rewrite the four `methodBlocks` entries with Ogilvy-direction prose that names specific artifacts.
**Requirements:** R2.
**Dependencies:** None (parallel-safe with U1/U2).
**Files:**
- `src/pages/index.astro` (`methodBlocks` const)
**Approach:** Replace each block's heading + prose per the Ogilvy direction. Each block names the artifact the engagement produces (problem definition, target-architecture document, sequenced roadmap, measurement framework). Replace H2 with `Four engagements. Each one ends with a written plan your teams ship against.`
**Patterns to follow:** existing structure of `methodBlocks` rendering.
**Test scenarios:**
- Each block displays the new heading + prose.
- Block numbers remain 01–04.
- No layout shift; LCP unchanged.
**Verification:** Copy diff against `qa/copy-review/ogilvy-review.md` Method section.

### U4. Update Outcomes section with proof-driven framing
**Goal:** Replace the Outcomes H2, lede, and three column entries with the Ogilvy-direction proof-driven version (named numbers; e.g., `180–320 basis points`). Mark every number in this section as truth-gated.
**Requirements:** R2, R15.
**Dependencies:** None (parallel-safe).
**Files:**
- `src/pages/index.astro` (`outcomes` const + section H2 + lede)
**Approach:**
- Replace H2 with `Three outcomes our last forty engagements have moved: retention, revenue, and AI delivery.` BUT only if "forty engagements" is verifiable; otherwise rewrite to the verifiable count.
- Replace lede per Ogilvy direction.
- Replace each column's heading + body with the Ogilvy-direction proof-driven copy.
- Every claim-bearing line gets a `<!-- TRUTH-GATE: verify before publish -->` HTML comment for grep-ability.
**Patterns to follow:** existing `outcomes.map` render loop.
**Test scenarios:**
- Section renders three columns with proof-driven copy.
- All numbers either match the truth-gate verified value OR the copy is rewritten without the number.
- `qa/truth-gates-2026-05-21.md` lists every claim in this section.
**Verification:** Truth-gate checklist signed off before merge.

### U5. Rewrite FAQ per Ogilvy buyer-objection direction
**Goal:** Replace the five-question `faqs` array with the Ogilvy-direction six-question rewrite (procurement-grade buyer-objection handlers + price question).
**Requirements:** R5.
**Dependencies:** U2 (the price-question answer references the four packages from U2).
**Files:**
- `src/pages/index.astro` (`faqs` const + section H2)
**Approach:**
- Replace H2 with `What boards ask us before they sign.`
- Replace each Q/A pair per the Ogilvy direction. Six entries total (existing five rewritten + new "Why do you publish prices" question).
- Q6 answer references the four packages from U2 and the bespoke from-$120k floor.
**Patterns to follow:** existing `faqs` array and `faq-card` rendering.
**Test scenarios:**
- FAQ section renders six entries.
- Accordion behavior continues to work (single-open).
- Q6 displays the four packages and bespoke price reference accurately.
- Keyboard navigation: Tab focuses each `.faq-q`; Enter toggles.
**Verification:** Copy diff against `qa/copy-review/ogilvy-review.md` FAQ section; accordion smoke test.

### U6. Extend contact form with Company, Role, and package selector
**Goal:** Add three new fields to the contact form, update the submission payload, refresh the H2, lede, submit button text, and aside copy.
**Requirements:** R6.
**Dependencies:** U2 (package selector options come from U2's four packages).
**Files:**
- `src/pages/index.astro` (contact section markup)
- `src/layouts/Layout.astro` (form submit handler in inline script — extend `payload` object)
**Approach:**
- Add `<input name="company">` (text, required for Capita Advisory inquiries).
- Add `<input name="role">` (text, required).
- Add `<select name="package">` with options for each of the four packages + "Bespoke — tell us more" + "Not sure yet — let's discuss."
- Update H2 to `Tell us the number you need to move in the next 90 days. We reply within two business days with a scoped proposal and a price.`
- Update submit button to `Send this to Capita`.
- Replace textarea placeholder with `The number you need to move and the deadline you're working to.`
- Update aside H3 + lede + bullets per Ogilvy direction (executive-voice).
- Extend `payload` object in `Layout.astro` inline script to include `company`, `role`, `package`.
- URL-anchor-based package pre-fill: if the user clicks `#contact?package=om-and-a`, the package selector defaults to that option (small inline script).
**Patterns to follow:** existing field-row structure in `src/pages/index.astro` lines 318–358.
**Test scenarios:**
- Submit form with all fields valid → Formspree receives payload including company, role, package.
- Submit without company or role → field-level error displays.
- Click "Book the Roadmap" CTA on a package card (U2) → form scrolls into view with package selector pre-set to Roadmap.
- Submit with package selector value "Bespoke — tell us more" → payload contains "bespoke" string.
- Honeypot still works (existing).
- Country picker still works.
- Success message: `Received. You will hear from us within two business days.`
**Verification:** Submit a test inquiry; verify Formspree payload contains all new fields; verify success state and pending state both display.

### U7. Activate founder letter section
**Goal:** Flip `SHOW_FOUNDER` to `true` and replace the placeholder copy with the signed founder letter from the Ogilvy direction. Add signature image asset.
**Requirements:** R4.
**Dependencies:** R15 truth-gating (founder year, prior role).
**Files:**
- `src/pages/index.astro` (`SHOW_FOUNDER` const + founder block markup)
- `public/founder-signature.svg` (NEW asset — Mitch's signature image)
**Approach:**
- Replace placeholder founder bio paragraphs with the Ogilvy-direction signed letter ("I am Mitchell Ribar. I started Capita Technology in [year]..."). Truth-gate the year and prior-role claims.
- Replace signed manifesto line with the actual closing sentence from the Ogilvy direction.
- Add `<img src="/founder-signature.svg" alt="Mitchell Ribar signature">` beneath the signed line.
- Set `SHOW_FOUNDER = true`.
- Position the founder section between Packages (U2) and Outcomes (U4), per Ogilvy direction.
**Patterns to follow:** existing `founder-section` markup in `src/pages/index.astro` lines 160–197.
**Test scenarios:**
- Founder section renders with copy + signature.
- Signature image loads; alt text reads "Mitchell Ribar signature."
- Section position is between Packages and Outcomes.
- Mobile breakpoint: photo stacks above bio.
- Truth-gate check: year and prior role match `qa/truth-gates-2026-05-21.md`.
**Verification:** Visual rendering + truth-gate sign-off.

### U8. Add risk-reversal section ("Our 90-day commitment")
**Goal:** Add a small section after the Packages section that articulates the no-fee follow-up-week commitment.
**Requirements:** R8.
**Dependencies:** U2 (positioned beneath Packages).
**Files:**
- `src/pages/index.astro` (new section markup)
**Approach:**
- New `<section>` immediately after the Packages section.
- Copy: `Our 90-day commitment. If, at the 90-day mark after your engagement closes, the leading indicators we defined together have not moved, we return for a no-fee follow-up week to find out why. This is written into every statement of work. It applies to every package on this page and to bespoke engagements.`
- Use eyebrow-weight or small-caps typography to keep it visually quiet but unmistakable.
**Patterns to follow:** existing chunky-but-quiet bands like the "Bespoke advisory" footer band.
**Test scenarios:**
- Section renders immediately after Packages.
- Copy matches Ogilvy direction exactly.
- Visually distinct but not loud.
**Verification:** Copy diff; visual spot-check.

### U9. Update footer
**Goal:** Cut keyword-stuffing Services/Industries tiles. Replace with the leaner Ogilvy-direction footer.
**Requirements:** R9.
**Dependencies:** None (parallel-safe).
**Files:**
- `src/layouts/Layout.astro` (footer markup, footer-tiles section)
**Approach:**
- Replace Services tile with `What we do: Strategy, target-architecture review, operating-model design, 90-day roadmaps, executive workshops, requirements definition, decision frameworks, AI governance, measurement design.` (or the Ogilvy-direction version if different).
- Replace Industries tile with `Where we work: Telco, banking, insurance, property, SaaS, and subscription businesses operating in regulated environments.`
- Add bottom-of-footer line: `All work delivered under mutual NDA.`
- Update Contact tile per Ogilvy direction.
- Add `Independent of these vendors:` section per the Ogilvy review (named non-affiliation list — only if truth-gate verified).
**Patterns to follow:** existing `.footer-tiles` grid.
**Test scenarios:**
- Footer renders three tiles with new copy.
- Vendor non-affiliation list either appears (truth-gated) or is excluded.
- Mobile breakpoint: tiles stack.
**Verification:** Copy diff; truth-gate sign-off on vendor list.

### U10. Test for visual regression and performance budget
**Goal:** Capture before/after screenshots for each updated section; run Lighthouse to verify LCP budget.
**Requirements:** R16.
**Dependencies:** U1–U9 complete.
**Files:**
- `qa/screenshots/2026-05-21-pre/` (existing baseline)
- `qa/screenshots/2026-05-21-post/` (NEW — capture after copy updates)
- `qa/lighthouse-2026-05-21.md` (NEW — Lighthouse run notes)
**Approach:**
- Capture full-page screenshots at desktop (1440x900) and mobile (390x844) widths.
- Run Lighthouse 5x and report median LCP per `README.md` shipping gate.
- If LCP regresses above 2.5s, investigate (likely the founder signature image — defer ship until resolved).
- Compare screenshots to Ogilvy direction sketches.
**Patterns to follow:** existing `qa/screenshots/` directory.
**Test scenarios:**
- Lighthouse median LCP ≤ 2.5s mobile p75.
- All sections render correctly across desktop + mobile breakpoints.
- Founder signature SVG loads without delaying first paint.
**Verification:** LCP within budget; visual diffs reviewed.

---

### Phase 2 — Capita Advisory operational integrations

### U11. Stripe Invoicing wiring (manual-trigger)
**Goal:** Add Stripe Invoicing capability so Mitch can issue invoices from the admin panel after reviewing a lead. No customer-facing checkout UI.
**Requirements:** R7.
**Dependencies:** U6 (lead capture provides the data Stripe needs).
**Files:**
- `docs/operational/stripe-setup.md` (NEW — setup runbook)
- (No code in `src/` for this — Mitch operates Stripe directly via dashboard or `stripe-cli`)
**Approach:**
- Document the Stripe account setup, customer creation flow, invoice template setup, and tax registration.
- Configure Stripe to use Capita Technology's business details (post-GST registration if applicable).
- Create reusable invoice templates per package ($35k, $45k, $85k, $120k bespoke).
- Define the manual workflow: lead → Notion → discovery call → SOW → Stripe invoice sent → payment confirmation → engagement kickoff.
- No Astro code change required for this unit — Stripe is operated outside the site.
**Patterns to follow:** N/A.
**Test scenarios:**
- Test invoice ($1 amount, sent to mitchell.ribar@gmail.com) confirms Stripe setup is functional.
- Invoice template renders with Capita branding (PDF logo).
- Test refund flow (in case of cancellation).
**Verification:** Test invoice clears end-to-end including payment receipt.

### U12. Cal.com embedded scheduling
**Goal:** Embed Cal.com discovery-call booking on Capita Advisory contact section as an alternative to the form.
**Requirements:** R7.
**Dependencies:** None.
**Files:**
- `docs/operational/cal-com-setup.md` (NEW — setup runbook)
- `src/pages/index.astro` (contact section — add Cal.com embed block)
**Approach:**
- Configure Cal.com booking page: 30-minute "Discovery call with Capita Technology" event type. Mitch's calendar availability.
- Embed Cal.com inline iframe or popup on the contact section, adjacent to the form. Use Cal.com's `<cal-embed>` script tag.
- Question on the booking flow: "What package or problem are you looking at?"
- Confirmation email from Cal.com triggers a Notion row in Leads (KD5).
**Patterns to follow:** N/A (new integration).
**Test scenarios:**
- Visit `/#contact` — Cal.com embed renders.
- Book a discovery call as a test user — calendar invite arrives in Mitch's calendar.
- Booking creates a row in Notion Leads database.
- Confirm Cal.com embed does not regress LCP (≤2.5s).
- Embedded widget is keyboard-accessible.
**Verification:** End-to-end test booking; LCP check.

### U13. Notion CRM webhook
**Goal:** Sync lead form submissions and Cal.com bookings to a Notion "Leads" database.
**Requirements:** R7.
**Dependencies:** U6 (form submissions), U12 (Cal.com bookings).
**Files:**
- `api/notion-lead-webhook.ts` (NEW — Vercel serverless function)
- `astro.config.mjs` (add `@astrojs/vercel` adapter if not already present — verify before changing)
- `docs/operational/notion-crm-setup.md` (NEW — setup runbook)
**Approach:**
- Create a Notion "Capita Leads" database with columns: Name, Company, Email, Role, Source (form or calendar), Package, Message, Created At, Status (lifecycle).
- Generate Notion integration token; add to Vercel environment variables.
- Build serverless function at `api/notion-lead-webhook.ts` that accepts POST: validates the signature (Formspree's webhook signature or a shared secret), creates a Notion row.
- Configure Formspree to send webhook POSTs to `/api/notion-lead-webhook` on submission. (Formspree supports webhooks on paid tiers; verify before relying on this — fallback: poll Formspree API daily.)
- Configure Cal.com to webhook on bookings; route through the same `/api/notion-lead-webhook` endpoint with a `source: "cal-com"` flag.
- The endpoint dedupes by email + created-at-window so the same lead doesn't double-up.
**Patterns to follow:** N/A (greenfield serverless function).
**Test scenarios:**
- Submit form → Notion row created with correct field mapping.
- Book Cal.com call → Notion row created (different source).
- Submit form with same email twice → only one Notion row (dedupe).
- Webhook receives invalid signature → 401, no Notion write.
- Notion API errors → log to Vercel logs, return 500, lead is preserved in Formspree for manual reprocessing.
**Verification:** Test lead end-to-end; check Notion database.

### U14. Lead intake operational runbook
**Goal:** Document the end-to-end lead-to-engagement flow so Mitch operates consistently.
**Requirements:** R7.
**Dependencies:** U11, U12, U13.
**Files:**
- `docs/operational/lead-flow.md` (NEW)
**Approach:**
- Document the canonical flow: form/Cal.com → Notion → Mitch reviews within 2 business days → discovery call → proposal (SOW template) → Stripe invoice → engagement kickoff.
- SLAs for each step (matching the public "two business days" commitment).
- Template emails for: acknowledgment, scheduling confirmation, proposal delivery, invoice delivery.
- Notion saved views for: New Leads, Awaiting Discovery, Proposal Sent, Closed-Won, Closed-Lost.
- Test expectation: none — this is documentation.
**Patterns to follow:** N/A.
**Verification:** Documentation reviewed; first real lead processed end-to-end.

---

### Phase 3 — Ribar.ai content + brand artifacts (saved for future site build)

### U15. Mitch Ribar shared bio (canonical)
**Goal:** Write the canonical Mitch Ribar bio that both brands reference. Single source of truth.
**Requirements:** R17.
**Dependencies:** None.
**Files:**
- `docs/shared/bio.md` (NEW)
**Approach:**
- Draft the bio with MIT MBA, 20+ years experience, Optus (Project Loyal — 310%, $110M GM), JPMC (5-year AI Personalization, $60M budget), Brand Networks (10x SaaS), Quantium, PwC.
- Include two voice variants: (a) Capita Advisory voice (operator-credentialed, third-person, regulated tone), (b) Ribar.ai voice (operator-credentialed, first-person, more direct, emotional acknowledgment of the 40+ activator).
- Each variant ~150–250 words.
- Truth-gate every numeric claim.
- Note: this file is the canonical input for U7 (Capita founder letter) and for Ribar.ai's founder section (U21).
**Test scenarios:** none — this is reference content.
**Verification:** Reviewed by Mitch; truth-gated.

### U16. Ribar.ai site map and page outlines
**Goal:** Document the IA for the future Ribar.ai site.
**Requirements:** R12.
**Dependencies:** U15 (bio referenced from outline).
**Files:**
- `docs/ribar-ai/content/site-map.md` (NEW)
**Approach:**
- Single-page or multi-page decision (default: single-page like Capita, but document the rationale + alternative).
- Sections in order: Hero / 3 Tracks / Founder Letter / How it Works (program structure) / FAQ / Contact.
- Per-section: position, purpose, headline, key copy hooks.
- Asset list per section (placeholder images, illustrations needed).
**Test scenarios:** none.
**Verification:** Mitch confirms IA matches mental model.

### U17. Ribar.ai hero + positioning copy
**Goal:** Write the Ribar.ai hero (eyebrow, H1, lede, CTAs) using the layered positioning from the brainstorm.
**Requirements:** R12.
**Dependencies:** U16.
**Files:**
- `docs/ribar-ai/content/hero-and-positioning.md` (NEW)
**Approach:**
- Apply layered AIDA positioning from the brainstorm: top (Operator + Credential), middle (Emotional), bottom (Structure deferred).
- Hero H1 anchors on Operator + Credential: e.g., `MIT-trained operator. Production AI at JPMorgan Chase and Optus. Now coaching senior leaders through the AI shift.`
- Lede lands the emotional angle: e.g., `I've navigated this shift inside two of the largest AI programs in banking and telco. If you're a senior leader feeling left behind — or sensing your role being reshaped — I'll help you activate.`
- Primary CTA: `See the three tracks.`
- Secondary CTA: `Talk to Mitch.`
- Acknowledge "left behind" in the lede subhead or first paragraph below the hero.
- Write 3 alternative versions for A/B reference.
**Test scenarios:** none.
**Verification:** Copy reviewed; passes Ogilvy four tests (specific, believable, important, exclusive).

### U18. Ribar.ai three-track section copy
**Goal:** Write the Catalyst, Construct, and Command track section copy with full pricing structure.
**Requirements:** R12.
**Dependencies:** U16.
**Files:**
- `docs/ribar-ai/content/tracks/catalyst.md` (NEW)
- `docs/ribar-ai/content/tracks/construct.md` (NEW)
- `docs/ribar-ai/content/tracks/command.md` (NEW)
**Approach:**
- For each track: name, one-line promise, outcome description (Comfort → Capability → Command emotional ladder, but using the new names), inclusion bullets (5–6 each), price (Catalyst $25k / Construct $50k / Command $100k), duration (12 weeks), CTA.
- Highest-first ordering on the site (Command, Construct, Catalyst) per Ogilvy anchoring.
- Bolt-on note beneath each: e.g., "Graduates of Catalyst can continue to Construct for $30k." (presented as a graduate benefit, not a discount).
- Risk-reversal language adapted: `My 90-day commitment. If, at the 90-day mark, the indicators we defined together haven't moved, I return for a no-fee follow-up week.`
**Test scenarios:** none.
**Verification:** Copy reviewed; pricing matches brainstorm.

### U19. Ribar.ai founder letter
**Goal:** Write the long-form signed founder letter for Ribar.ai.
**Requirements:** R12, R17.
**Dependencies:** U15.
**Files:**
- `docs/ribar-ai/content/founder-letter.md` (NEW)
**Approach:**
- First-person, signed, ~400–600 words.
- Opens with the personal experience of navigating AI as a senior leader.
- Names MIT + JPMC + Optus credentials in context (not bragging — as evidence of having walked the path).
- Acknowledges the "40+ feeling left behind" buyer state directly.
- States the philosophy: not a teacher, an operator-guide; not a one-size-fits-all curriculum, a 1:1 partnership.
- Closes with a signed line + signature image reference (reuse `/founder-signature.svg` from U7).
**Test scenarios:** none.
**Verification:** Mitch confirms voice; truth-gated.

### U20. Ribar.ai FAQ
**Goal:** Write the buyer-objection FAQ for Ribar.ai.
**Requirements:** R12.
**Dependencies:** U18.
**Files:**
- `docs/ribar-ai/content/faq.md` (NEW)
**Approach:**
- 6–8 questions covering:
  - Who is this for? (the 40+ activator, cross-functional)
  - What if I'm a complete beginner vs. already using Claude Code? (Foundation adapts via 1:1)
  - What does the cost cover? (full pricing transparency)
  - How is this different from generic AI coaching? (operator anchor)
  - What if I want to start later or pause? (12-week container)
  - Do you do group programs? (1:1 only for now)
  - What happens after the program ends? (optional ongoing support; bolt-on to next track)
  - How do I know this will work for me? (90-day commitment + free 30-min discovery call)
**Test scenarios:** none.
**Verification:** Copy reviewed.

### U21. Ribar.ai contact section copy
**Goal:** Write the contact section copy — H2, lede, form labels, success state.
**Requirements:** R12.
**Dependencies:** U18.
**Files:**
- `docs/ribar-ai/content/contact.md` (NEW)
**Approach:**
- H2: e.g., `Tell me what you're trying to activate. I reply within two business days.`
- Lede: brief framing; option to book a 30-minute discovery call directly via Cal.com embed.
- Form fields: Name, Email, Role, Company (optional), Which track interests you (Catalyst / Construct / Command / Not sure), What's prompting this (textarea).
- Submit button: `Send this to Mitch.`
- Success: `Received. I'll get back to you within two business days.`
**Test scenarios:** none.
**Verification:** Copy reviewed.

### U22. Ribar.ai brand identity v1
**Goal:** Document the brand identity decisions for Ribar.ai v1: palette, typography, voice/tone, logo direction.
**Requirements:** R12.
**Dependencies:** None.
**Files:**
- `docs/ribar-ai/brand/identity-v1.md` (NEW)
- `docs/ribar-ai/brand/logo-direction.md` (NEW)
**Approach:**
- **Palette:** propose a modern, tech-flavored palette that distinguishes from Capita's blue+magenta. Options: muted indigo + amber accent (warm, modern); or charcoal + emerald (premium, alert). Document with hex codes and usage rules.
- **Typography:** propose using Inter + Geist (same as Capita) for visual consistency at the bio level, but with different weighting / scale to feel distinct. Document type scale.
- **Voice/Tone:** first-person, direct, emotionally acknowledging but never patronizing. Examples and counter-examples.
- **Logo direction:** brief for a future logo design. Reference inspiration. State what NOT to do (no swooshes, no robot iconography, no AI-cliché brain imagery).
- This file is the input to a future design engagement; not a finished design system.
**Test scenarios:** none.
**Verification:** Mitch confirms direction; ready for designer brief.

### U23. Ribar.ai asset list
**Goal:** Enumerate the assets needed when Ribar.ai site build kicks off.
**Requirements:** R12.
**Dependencies:** U16–U22.
**Files:**
- `docs/ribar-ai/brand/asset-list.md` (NEW)
**Approach:**
- List every asset the future site build will need: hero illustration or photo, founder portrait (high-res), signature SVG (reuse), package card icons (optional), OG image (1200×630), favicon, manifest, etc.
- For each: source (created, licensed, existing), status (TBD, in-hand, blocked), notes.
**Test scenarios:** none.
**Verification:** Asset gap clear; readiness to build.

---

### Phase 4 — Ribar.ai curriculum (structural)

### U24. Foundation curriculum (4 modules)
**Goal:** Document the shared 4-week Foundation curriculum at structural level.
**Requirements:** R13.
**Dependencies:** None.
**Files:**
- `docs/ribar-ai/curriculum/foundation.md` (NEW)
**Approach:**
- Four modules, one per week. Each with: module name, one-line learning outcome, key concepts covered (3–5 bullets), session anchor question, exec deliverable for the week.
- Foundation covers: (1) AI mental models + vocabulary, (2) Claude and core tool usage, (3) Common pitfalls / what AI is and isn't, (4) Personal AI workflow setup.
- Note: foundation adapts to skill level via 1:1 — beginners go deeper on basics, advanced execs go deeper on edge cases of the same topics.
**Test scenarios:** none — this is curriculum scaffolding, not executable code.
**Verification:** Curriculum coherence reviewed.

### U25. Catalyst specialization curriculum (8 modules)
**Goal:** Document the Catalyst track's 8-week specialization curriculum.
**Requirements:** R13.
**Dependencies:** U24.
**Files:**
- `docs/ribar-ai/curriculum/catalyst-specialization.md` (NEW)
**Approach:**
- Eight modules, one per week. Same shape as Foundation: name, outcome, concepts, anchor question, exec deliverable.
- Catalyst focus: personal AI activation. Daily fluency. Personal productivity. Building a sustainable personal AI practice.
- End-of-track deliverable: the exec has a personal AI playbook + an active daily practice.
**Test scenarios:** none.
**Verification:** Reviewed.

### U26. Construct specialization curriculum (8 modules)
**Goal:** Document the Construct track's 8-week specialization curriculum.
**Requirements:** R13.
**Dependencies:** U24.
**Files:**
- `docs/ribar-ai/curriculum/construct-specialization.md` (NEW)
**Approach:**
- Eight modules. Construct focus: building apps and tools with AI (Claude Code analogy). Hands-on as a maker.
- End-of-track deliverable: the exec has shipped at least one AI-built tool that solves a real problem in their work.
**Test scenarios:** none.
**Verification:** Reviewed.

### U27. Command specialization curriculum (8 modules)
**Goal:** Document the Command track's 8-week specialization curriculum.
**Requirements:** R13.
**Dependencies:** U24.
**Files:**
- `docs/ribar-ai/curriculum/command-specialization.md` (NEW)
**Approach:**
- Eight modules. Command focus: strategic AI leadership. AI architecture decisions, transformation, governance, board engagement.
- End-of-track deliverable: the exec presents an AI strategy + governance framework to their actual board (rehearsed in the program).
**Test scenarios:** none.
**Verification:** Reviewed.

---

### Phase 5 — Founding-cohort outreach mechanics

### U28. Statement of Work template with testimonial clause
**Goal:** Draft the SOW template that founding-cohort clients will sign.
**Requirements:** R14.
**Dependencies:** U18 (track definitions).
**Files:**
- `docs/ribar-ai/outreach/sow-template.md` (NEW)
**Approach:**
- Sections: parties, scope of work (per-track inserts), schedule (12 weeks, weekly cadence), fees (founding-cohort pricing), payment terms, deliverables, **testimonial clause** (contractual obligation to provide written, named testimonial within 60 days of program completion, with right to use in Ribar.ai marketing), confidentiality, IP, termination, governing law.
- Testimonial clause language: explicit, granted-permission, named-and-titled-required. References Ogilvy's named-testimonial principle.
- Founding-cohort price line and "founding cohort pricing — not a public discount" framing.
- Annex: success criteria template (the leading indicators that anchor the 90-day commitment).
**Test scenarios:** none — legal/contractual template.
**Verification:** Reviewed; ideally vetted by lawyer before first signing.

### U29. Founding-cohort target-list criteria
**Goal:** Define the criteria for who Mitch reaches out to in the founding cohort.
**Requirements:** R14.
**Dependencies:** None.
**Files:**
- `docs/ribar-ai/outreach/target-list-criteria.md` (NEW)
**Approach:**
- Persona definition: 40+, in a role being shaped by AI, has decision authority, can self-fund or get company sponsorship at the founding-cohort price.
- Sourcing channels: LinkedIn 1st-degree connections, MIT Sloan alumni network, past Optus/JPMC/Brand Networks colleagues, conference attendees.
- Disqualifiers: anyone Mitch wouldn't want to publicly attach as a testimonial.
- The plan does NOT include the actual list — that's user-owned PII.
**Test scenarios:** none.
**Verification:** Reviewed; readiness to populate list.

### U30. Outreach cadence + channel plan + message templates
**Goal:** Document the outreach cadence and write the message templates.
**Requirements:** R14.
**Dependencies:** U29.
**Files:**
- `docs/ribar-ai/outreach/cadence.md` (NEW)
- `docs/ribar-ai/outreach/messages/intro-cold.md` (NEW)
- `docs/ribar-ai/outreach/messages/intro-warm.md` (NEW)
- `docs/ribar-ai/outreach/messages/follow-up.md` (NEW)
**Approach:**
- Cadence: 5–10 outreach attempts per week (sustainable, no spray-and-pray). Mix of cold + warm + referral.
- Channels: LinkedIn DM, email, in-person at events.
- Message templates: cold intro (no prior relationship), warm intro (prior connection), follow-up (after no response). Each template is 80–150 words, names the target's specific role/context (custom-fill bracketed), references the founding-cohort offer (60% off, first 10 only).
- Track responses in Notion (extend the same Leads database with a `source: "ribar-ai-outreach"` flag).
**Test scenarios:** none — content templates.
**Verification:** Templates reviewed; cadence is sustainable for Mitch.

### U31. Founding-cohort onboarding flow
**Goal:** Document what happens after a founding-cohort client says yes.
**Requirements:** R14.
**Dependencies:** U28, U30.
**Files:**
- `docs/ribar-ai/outreach/onboarding-flow.md` (NEW)
**Approach:**
- Step-by-step: warm yes → 30-min scoping call → SOW signed → Stripe invoice → Kickoff session scheduled (Cal.com) → Foundation begins.
- Pre-engagement intake: skill diagnostic (so Foundation can adapt depth), goal articulation, success-criteria template signed off.
- Communication norms: email cadence, session prep expectations, async messaging rules.
- 90-day post-program check-in scheduled at kickoff.
- Testimonial collection workflow at month 3 (60-day deadline per SOW).
**Test scenarios:** none.
**Verification:** Reviewed; ready to execute on first signed client.

---

### Phase 6 — Cross-brand strategy

### U32. Cross-brand link strategy (forward link from Capita)
**Goal:** Add a low-emphasis forward link from Capita Advisory bio area to Ribar.ai.
**Requirements:** R11.
**Dependencies:** U7 (founder section is where the link sits).
**Files:**
- `src/pages/index.astro` (founder section addendum)
- `docs/shared/cross-brand-links.md` (NEW — placement strategy)
**Approach:**
- Add a single-line addendum below the Capita founder letter or in the footer Contact tile: `Mitch also runs Ribar.ai, a 12-week AI executive program for senior leaders. [link]`
- For now, link is to a placeholder `ribar.ai` (or a coming-soon page) until the Ribar.ai site is built.
- Document the reverse-link plan in `docs/shared/cross-brand-links.md` for when Ribar.ai ships.
**Test scenarios:**
- Link renders; click → external navigation to Ribar.ai placeholder or coming-soon page.
- Link is visually quiet (no CTA-button styling); placement does not distract from primary Capita CTA.
**Verification:** Visual + link click.

---

## System-wide impact

- **Capita Advisory production site (`capitatech.com.au`)** is materially changed: nav, hero, packages section (new), founder section (newly active), outcomes, FAQ, contact form, footer all updated. Visitors entering before deploy see the old site; after deploy see productised packages with prices. Existing search-result snippets and shared social links may lose context as title/description change.
- **Lead operational workflow** changes from "form → email" to "form/Cal.com → Notion CRM → Stripe Invoicing." Mitch must operate from Notion as primary inbox.
- **`docs/` repo structure** grows substantially: `docs/ribar-ai/` and `docs/shared/` are net-new and contain dozens of files of content + curriculum + outreach material.
- **Deployment surface** grows: existing Astro static build PLUS a new Vercel serverless function (`api/notion-lead-webhook.ts`). Astro config may need `@astrojs/vercel` adapter; verify current state before changing.
- **External dependencies added:** Stripe account (operational), Cal.com account (operational), Notion workspace + integration (operational), Cal.com embed script on the live site.
- **Existing audience:** anyone with the current `capitatech.com.au` site bookmarked or linked will see a substantial copy change at next visit. No URL changes (single-page site), so no redirects needed.

---

## Verification (plan-wide)

A successful plan execution looks like:

- `capitatech.com.au` ships the Ogilvy-resolved direction at production. Lighthouse mobile p75 LCP ≤ 2.5s. Truth-gates 100% verified.
- Form submissions land in Notion within seconds of submit.
- Cal.com bookings land in Notion the same way.
- Stripe test invoice flow has been validated end-to-end.
- `docs/ribar-ai/` is fully populated: site content, brand identity v1, 28-module curriculum, outreach mechanics, SOW template.
- `docs/shared/bio.md` is canonical and referenced from Capita Advisory copy + Ribar.ai material.
- First founding-cohort outreach message has been drafted (template ready, target list ready, send not in scope of this plan).

---

## Risks and mitigations

### Risk 1. Truth-gate failures delay Capita Advisory launch
Several claims-bearing lines (forty engagements, 180–320 bps, since 2019, vendor non-affiliations) may not be verifiable as written. **Mitigation:** treat truth-gating as a blocking gate (KD8). Build the truth-gates checklist (`qa/truth-gates-2026-05-21.md`) in U1 and update as each unit lands. Where claims can't be verified, rewrite copy to remove the claim rather than ship false signals.

### Risk 2. Cal.com or Notion API change mid-build
Both are third-party SaaS APIs that may evolve. **Mitigation:** prefer official SDKs; pin SDK versions; add error handling that fails open (lead is preserved in Formspree even if Notion write fails). Document the fallback in U13.

### Risk 3. Stripe Invoicing setup hits regulatory friction
Australian GST registration, tax treatment of international clients, payment terms for high-ticket B2B. **Mitigation:** treat Stripe setup as an operational task with its own SLA. Get accountant input before first real invoice.

### Risk 4. LCP regression from new sections + founder image
Pricing cards, founder letter (with signature SVG) all add content weight. **Mitigation:** SVG signature (no PNG), lazy-load below-fold images, run Lighthouse 5x at each phase milestone, hold deploy if median LCP regresses above 2.5s.

### Risk 5. Ribar.ai content writes go stale before site build kicks off
If the site build takes 6+ months to start, copy may need refresh. **Mitigation:** date-stamp every file in `docs/ribar-ai/`. Plan a content audit when site build kicks off as the first activity in that follow-up plan.

### Risk 6. Founding-cohort pricing leaks publicly
If the founding rate is shared on social or seen by future prospects, it could anchor future expectations. **Mitigation:** KD7 — never publish on either site. Outreach materials marked "confidential." Discuss with each founding client at signing.

### Risk 7. Multi-brand divergence over time
Same operator running two distinct brands with separate sites is operationally heavier than one. **Mitigation:** the shared canonical bio (R17) and `docs/shared/` directory are the single sources of truth for cross-brand content. Quarterly review to ensure brands stay synchronized in operator details + credential claims.

### Risk 8. Curriculum at structural-only is too thin to defend Ladder A pricing
A buyer who asks "what's actually in week 5 of Construct?" needs more than a one-line outcome. **Mitigation:** the structural curriculum is plan deliverable; per-module authoring is deferred (Phase 4 scope). For first 1–2 founding cohorts, Mitch develops module content live (week-by-week) and feeds back into a v2 curriculum doc.

---

## Success metrics

- **Capita Advisory copy update shipped:** Phase 1 PR merged within 2–3 weeks of plan start.
- **Truth-gates 100% verified or rewritten:** no unverified claim on the live site at deploy.
- **Lead capture working end-to-end:** test lead reaches Notion within 60 seconds of submit; Stripe test invoice confirmed; Cal.com booking flow verified.
- **Ribar.ai content artifacts complete:** all files under `docs/ribar-ai/` populated and reviewed.
- **Curriculum at structural level:** 28 modules documented with titles + outcomes + sequencing.
- **Outreach mechanics ready:** SOW template + cadence + 3 message templates + onboarding flow all reviewed and tagged as "ready."
- **First founding-cohort outreach send:** out of scope, but the plan should leave Mitch one click away from sending.

---

## Dependencies / prerequisites

- Stripe account setup (Mitch operational task).
- Cal.com account setup (Mitch operational task).
- Notion workspace + integration token (Mitch operational task).
- Vercel environment variables configured (Mitch operational task).
- Mitch's signature scanned + converted to SVG.
- Founder bio details confirmed (year founded, prior roles, MIT Sloan dates).
- Optus Project Loyal numbers confirmed against public press releases.
- JPMC AI Personalization details confirmed against public/professional bio.

---

## Alternative approaches considered

### A1. Single brand with persona-routed homepage
Considered: one `capitatech.com.au` site that splits at the homepage into "I'm a business leader → advisory" vs. "I'm an individual leader → coaching." Rejected during brainstorm — the two buyers are psychologically too different; the coaching audience needs personal-brand trust signals (`Ribar.ai`, first-person voice) that dilute the advisory pitch.

### A2. Shared component library extracted before Ribar.ai content
Considered: extract Capita's `Layout.astro` mechanisms into reusable Astro components in a private package before producing Ribar.ai content. Rejected per user input — Ribar.ai site is deferred, so the user wants content artifacts first and will build a custom site later (potentially with a different framework or different visual register).

### A3. Stripe Checkout instead of Stripe Invoicing
Considered: render a Buy button on each Capita package card that takes a deposit via Stripe Checkout. Rejected — high-ticket advisory engagements need scoping before invoicing; treating them like e-commerce checkout misrepresents the sales motion and risks underpriced bespoke work being picked up as a "checkout" purchase.

### A4. Calendly instead of Cal.com
Considered: Calendly has wider brand recognition. Rejected — Cal.com offers better embedding UX, open-source story, and Mitch already has stronger fit (per planning context). Calendly remains the fallback if Cal.com setup creates friction (documented in U12).

### A5. Curriculum authored in full this plan
Considered: produce per-module session-by-session curriculum content in this plan. Rejected per user input (structural-only). The argument: full curriculum authoring is expensive and benefits from real founding-cohort feedback before locking in. Structural-only is enough to sell with; per-module authoring happens during execution.

---

## Phased delivery

| Phase | Focus | Duration estimate | Blocks downstream? |
|---|---|---|---|
| **1. Capita Advisory copy + packages** | Public-facing site update; immediate visible launch | 2–3 weeks | No (Phase 2 can start in parallel after U6) |
| **2. Capita Advisory operational integrations** | Stripe + Cal.com + Notion CRM | 1–2 weeks | Phase 1 lead-capture forms depend on Phase 2 to fully function |
| **3. Ribar.ai content artifacts** | Copy + brand identity v1 + asset list | 2–3 weeks | Required input for the deferred Ribar.ai site build |
| **4. Ribar.ai curriculum (structural)** | 28-module skeleton | 1–2 weeks | Parallel-safe with Phase 3 |
| **5. Founding-cohort outreach mechanics** | SOW template + cadence + messages + onboarding | 1 week | Depends on Phase 3 (track copy) and Phase 4 (curriculum sequence) |
| **6. Cross-brand strategy** | Forward link, shared bio | 1 week | Depends on Phase 1 (Capita ships first) and Phase 3 (Ribar.ai content ready) |

Total wall-clock: 6–10 weeks if delivered serially. With parallelization (Phase 3+4 in parallel with Phase 2; Phase 5+6 in parallel after Phase 3), 5–7 weeks is realistic. None of this is hard schedule — it's planning scope, not a project timeline. Execution rate depends on Mitch's availability.

---

## Documentation plan

- **Update `README.md`** at the close of Phase 1 with the new packaged-offering positioning. README's audience is technical (engineer reading the repo); add one paragraph on the productised packages + lead flow.
- **Add `docs/operational/`** directory for runbooks (Stripe, Cal.com, Notion, lead-flow). This is operational knowledge Mitch needs to consult on every new lead until habituated.
- **Update `mempalace.yaml`** to add new wing rooms: `brand_ribar_ai`, `operational`, `curriculum`, `outreach`, `truth_gates`. So MemPalace searches surface these correctly.
- **Add a `STRATEGY.md`** at the repo root capturing the two-brand strategy (currently only in the brainstorm). Future planning agents and humans benefit from a top-level strategy artifact.

---

## Operational notes

- The Capita Advisory copy update should be merged as a single PR (atomic switch from old positioning to productised positioning). Phasing the copy update across multiple PRs would leave the site in a confusing in-between state.
- The Vercel preview deploys for the copy PR are the right review surface — share preview URLs with Mitch for final review before merge.
- Truth-gate verification happens BEFORE the PR is opened, not in PR review. A claim that fails verification gets rewritten as part of the PR, not deferred.
- The `docs/ribar-ai/` content can be reviewed in PRs or as standalone documents. No urgency to merge in a single PR — incremental landing is fine.
- Founding-cohort outreach starts only AFTER Phase 1 (Capita Advisory) is live, so the bio + credentials are publicly consistent at the moment of outreach. Outreach with mismatched bio/site = trust erosion.

---

## Origin reference

Brainstorm synthesis: `docs/brainstorms/ribar-ai-pitch-2026-05-21.md`
Copy reviews: `qa/copy-review/conflicts-and-resolution.md`, `qa/copy-review/ogilvy-review.md`, `qa/copy-review/marketing-psychology-review.md`
Prior visual-redesign plan (now shipped): `docs/plans/2026-05-14-001-feat-capita-cavaro-visual-reskin-plan.md`

---
