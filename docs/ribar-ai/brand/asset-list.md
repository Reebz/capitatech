---
title: "Ribar.ai — asset list for site build"
status: draft
created: 2026-05-21
plan: docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
unit: U23
---

# Ribar.ai — asset list for site build

Inventory of every asset the future Ribar.ai site build needs, with source, status, and the section it lands in. Plan-level intent: when the site-build follow-up plan kicks off, the gap analysis is one read of this file.

---

## Status legend

- ✓ **In hand** — asset exists; ready to ingest.
- ⏳ **TBD** — asset not yet created; commission, capture, or generate.
- 🔒 **Blocked** — asset depends on a third-party deliverable (designer, photographer, accountant) and cannot ship until the dependency clears.
- ♻️ **Reuse** — asset already exists elsewhere (typically Capita Advisory) and can be carried over.

---

## Brand assets

| Asset | Section | Status | Source |
|---|---|---|---|
| Logo (wordmark) | header, footer, favicon | ⏳ TBD | Designer commission per `logo-direction.md`. v1 candidate: pure-typography wordmark in Geist Variable 900. |
| Logo (mark) | favicon, social cards | ⏳ TBD | Designer; may pair with wordmark or use signature as mark. |
| Logo (reverse) | dark sections | ⏳ TBD | Designer (white version of primary). |
| Mitch's signature SVG | founder letter | ♻️ Reuse from Capita Advisory once supplied | Currently TBD on both brands (see Capita truth-gate C13). |
| Favicon SVG | `<link rel="icon">` | ⏳ TBD | Logo deliverable. |
| Favicon 32×32 PNG | legacy fallback | ⏳ TBD | Raster of favicon SVG. |
| Apple touch icon (180×180) | iOS home screen | ⏳ TBD | Logo raster. |
| Manifest.json | PWA | ⏳ TBD | Mirror Capita's `public/manifest.json` pattern; swap colors per `identity-v1.md`. |
| OG image (1200×630) | social cards | ⏳ TBD | Design from wordmark + tagline; reuse Capita's pattern. |
| Twitter card image (same as OG) | X / Twitter | ⏳ TBD | Reuse OG image. |

## Photography

| Asset | Section | Status | Source |
|---|---|---|---|
| Mitch portrait — hero/founder | founder letter section | ⏳ TBD | Professional photographer session. Brief: considered lighting, neutral background, not a stock headshot pose. Captured at min 3000×3000 so it can crop for hero + portrait + social. |
| Mitch portrait — small (header avatar) | optional brand mark | ⏳ TBD | Crop of the founder portrait. |
| Hero image / illustration (if going visual at hero) | hero | ⏳ TBD | Choice between (a) typography-only hero (no image required), (b) photographic hero (Mitch portrait at scale), (c) abstract editorial illustration. Recommend (a) for v1; (b) for v2 once portrait shoot is done. |

## Section-specific illustration (optional)

| Asset | Section | Status | Source |
|---|---|---|---|
| Three-track glyphs (Catalyst / Construct / Command) | tracks section | ⏳ TBD | Optional. Ships fine without — cards can carry typography only. Commission only if designer engagement happens for v2. |
| Foundation + Specialization diagram | how-it-works section | ⏳ TBD | Optional. v1 can use typography-only structural diagram (numbered list + dividers). |

## Content assets (already drafted in this plan)

| Asset | Section | Status | Source |
|---|---|---|---|
| Hero copy (3 variants) | hero | ✓ In hand | `docs/ribar-ai/content/hero-and-positioning.md` |
| Three-track copy | tracks | ✓ In hand | `docs/ribar-ai/content/tracks/{catalyst,construct,command}.md` |
| Founder letter | founder | ✓ In hand | `docs/ribar-ai/content/founder-letter.md` |
| FAQ (8 entries) | FAQ | ✓ In hand | `docs/ribar-ai/content/faq.md` |
| Contact section copy | contact | ✓ In hand | `docs/ribar-ai/content/contact.md` |
| Canonical bio (Capita + Ribar.ai voice variants) | founder, footer | ✓ In hand | `docs/shared/bio.md` |
| Site map and section order | site-wide | ✓ In hand | `docs/ribar-ai/content/site-map.md` |

## Brand decision assets

| Asset | Section | Status | Source |
|---|---|---|---|
| Palette (Operator Indigo + Signal Amber primary) | site-wide tokens | ✓ In hand | `docs/ribar-ai/brand/identity-v1.md` |
| Type scale | site-wide tokens | ✓ In hand | `docs/ribar-ai/brand/identity-v1.md` |
| Voice and tone notes | copy across the site | ✓ In hand | `docs/ribar-ai/brand/identity-v1.md` |
| Logo direction brief | designer commission | ✓ In hand | `docs/ribar-ai/brand/logo-direction.md` |

## Curriculum assets (referenced from the site copy)

| Asset | Section | Status | Source |
|---|---|---|---|
| Foundation 4-module skeleton | how-it-works (optional surface) | ✓ In hand | `docs/ribar-ai/curriculum/foundation.md` |
| Catalyst specialization 8 modules | how-it-works (optional surface) | ✓ In hand | `docs/ribar-ai/curriculum/catalyst-specialization.md` |
| Construct specialization 8 modules | how-it-works (optional surface) | ✓ In hand | `docs/ribar-ai/curriculum/construct-specialization.md` |
| Command specialization 8 modules | how-it-works (optional surface) | ✓ In hand | `docs/ribar-ai/curriculum/command-specialization.md` |

## Outreach assets (NOT on the public site; outreach-only)

| Asset | Status | Source |
|---|---|---|
| SOW template (with testimonial clause) | ✓ In hand | `docs/ribar-ai/outreach/sow-template.md` |
| Target-list criteria | ✓ In hand | `docs/ribar-ai/outreach/target-list-criteria.md` |
| Cadence plan | ✓ In hand | `docs/ribar-ai/outreach/cadence.md` |
| Intro-cold message | ✓ In hand | `docs/ribar-ai/outreach/messages/intro-cold.md` |
| Intro-warm message | ✓ In hand | `docs/ribar-ai/outreach/messages/intro-warm.md` |
| Follow-up message | ✓ In hand | `docs/ribar-ai/outreach/messages/follow-up.md` |
| Onboarding flow | ✓ In hand | `docs/ribar-ai/outreach/onboarding-flow.md` |

---

## Critical-path gaps before site build can start

1. **Logo (wordmark, mark, favicon set).** No site can ship without this. Commission as soon as v1 brand identity is approved.
2. **Mitch portrait.** Founder letter section without a photo reads as placeholder. Even if hero is type-only, the founder portrait carries the page's credibility.
3. **Signature SVG.** Shared with Capita Advisory; unblocks both founder letters.
4. **OG image and favicon set.** Trivial to derive once logo is in hand.

The site can ship without:

- Track illustration glyphs (text-only cards work).
- How-it-works diagram (text-only structural list works).
- Hero illustration (typography-only hero works for v1; in fact is recommended).

---

## Estimated commission cost (planning rough order of magnitude)

| Item | ROM | Notes |
|---|---|---|
| Logo design (v1 wordmark + favicon set) | $2,000–$5,000 AUD | Mid-tier freelance designer, 1–2 weeks. |
| Mitch portrait session | $1,500–$3,000 AUD | Local Sydney photographer, half-day. |
| Signature SVG | $0–$500 AUD | Either Mitch supplies a high-res scan and Capita post-processes it, or freelance SVG cleanup. |
| OG / social image | included in logo commission | Designer can deliver alongside logo. |
| **Total** | **$3,500–$8,500 AUD** | Excludes designer revision rounds and any video assets. |

This is a v1 estimate. v2 (full brand book, illustration system, motion guidelines) would be a multiple of this.

---

## Site-build follow-up plan trigger

When this list is updated to show ⏳ TBD → ✓ In hand on the four critical-path assets above, the site-build follow-up plan can kick off. That plan scaffolds the Ribar.ai Astro site, pulls in the content from `docs/ribar-ai/content/`, and adapts the Capita technical patterns (font preload, ASCII grid, kinetic phrase, chunky idiom, Cal.com embed wiring, Notion CRM webhook).
