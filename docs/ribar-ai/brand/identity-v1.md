---
title: "Ribar.ai — brand identity v1"
status: draft
created: 2026-05-21
plan: docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
unit: U22
---

# Ribar.ai — brand identity v1

Brand identity for the Ribar.ai personal-brand AI executive program. v1 = directional decisions captured. Full design system (logo files, illustration system, brand book) is deferred to a follow-up engagement.

The goals of v1 are:

1. Distinguish Ribar.ai visually from Capita Advisory while keeping bio-level consistency (the operator is the same; the brands are not).
2. Avoid AI-cliché imagery (neural nets, glowing brains, robot iconography) that would undercut the operator credibility.
3. Land a tech-flavoured premium register without slipping into "Silicon Valley pitch deck" generic.

---

## Palette — primary recommendation

**Name:** *Operator Indigo + Signal Amber.*

| Role | Hex | Notes |
|---|---|---|
| Primary | `#1E1B4B` | Deep indigo — premium, considered, distinct from Capita's `#0078f0` brand blue. Operator-night register. |
| Primary tint | `#3730A3` | Mid-indigo — for hover states, secondary accents, and inline link colour. |
| Accent | `#F59E0B` | Signal amber — warm, urgent without being alarming. Use SPARINGLY: CTA highlights, kinetic phrase emphasis, key callouts. |
| Surface | `#FAFAF8` | Off-white with a hint of warmth so the page does not feel sterile against the indigo. |
| Surface deep | `#0F0E27` | Near-black indigo — for the footer band and high-contrast moments. |
| Text | `#0F0E27` | Same as Surface deep; high contrast on Surface. |
| Muted text | `#4B4869` | Indigo-tinted gray. Used for `--muted` body copy. |
| Border | `rgba(15, 14, 39, 0.12)` | Indigo-tinted hairline borders. |

**Why this works:** Indigo + amber is the operator/founder register (think well-built engineering tools, premium B2B SaaS landing pages) without being a Stripe / Linear clone. Amber as the single accent gives the brand a "signal" colour that earns attention because it is used sparingly.

---

## Palette — alternative (use if user prefers a darker, more "command" register)

**Name:** *Charcoal Operator + Emerald Signal.*

| Role | Hex | Notes |
|---|---|---|
| Primary | `#111827` | Near-black charcoal. Operator-grade weight. |
| Primary tint | `#1F2937` | One step lighter for hover and secondary. |
| Accent | `#10B981` | Emerald — alert, premium, distinctive against charcoal. |
| Surface | `#F9FAFB` | Cool off-white. |
| Surface deep | `#030712` | Pure near-black for footer band. |
| Text | `#030712` | High contrast. |
| Muted text | `#4B5563` | Neutral gray. |
| Border | `rgba(3, 7, 18, 0.12)` | Neutral hairline. |

**Why this works:** charcoal + emerald reads as command-level seriousness. Less warm than the indigo option; more "executive briefing" than "operator workshop." If the user is leaning into the Command track as the brand's halo product, this register supports that better.

---

## Typography

**Recommended:** keep Inter (body) + Geist (display), matching Capita Advisory's font pairing, but shift the type scale and weighting to feel distinct.

### Why share Inter + Geist with Capita

- Bio-level consistency: the same operator is the source of both brands; visual whiplash undermines the cross-brand trust.
- Cost: the WOFF2 subsets and preload optimisation done for Capita transfer directly. The Ribar.ai site does not need to re-tune font loading.

### What shifts to distinguish

- **Type scale:** Ribar.ai uses a more aggressive display scale at the hero (start the H1 floor higher than Capita's 56px floor — try 64–72px floor on mobile, scaling to 160–180px on desktop). This signals personal-brand confidence vs. Capita's institutional restraint.
- **Display weight:** Capita uses Geist Variable at 700–800 for display headings. Ribar.ai uses Geist at 900 (max bold) for H1 and 700 for H2. The maximalist H1 weight reads as personal-brand voice.
- **Body weight:** Ribar.ai sits Inter at 450 (slightly heavier than Capita's default 400) for body, so first-person voice has weight.
- **Letter spacing:** tighter on Ribar.ai display headings (e.g., `-0.025em`) to feel more dense and considered. Capita uses neutral spacing.
- **Line height:** display headings on Ribar.ai run at 1.0–1.05 (very tight); body at 1.6–1.65. The tight display + airy body is the personal-brand signature.

### Type scale (proposed)

| Token | Value | Notes |
|---|---|---|
| `--type-h1` | `clamp(64px, 12vw, 168px)` | Maximalist hero. |
| `--type-h2` | `clamp(36px, 4.8vw, 64px)` | Section heads. |
| `--type-h3` | `clamp(22px, 2.0vw, 32px)` | Card heads. |
| `--type-lede` | `clamp(20px, 1.8vw, 28px)` | Lede paragraphs. |
| `--type-body` | `clamp(16px, 1.1vw, 18px)` | Body. |
| `--type-eyebrow` | `clamp(11px, 0.78vw, 13px)` | Same as Capita; uppercase + tracked. |
| `--type-kinetic` | `clamp(56px, 12vw, 168px)` | Same as Capita kinetic, for visual rhythm reference. |

---

## Voice and tone

**Principles:**

1. **First-person, always.** "I will help you activate" — never "Mitch will help you" or "We will help you."
2. **Direct, never patronising.** The reader is more senior than the writer in most domains. The writer's authority is on the AI activation problem specifically.
3. **Concrete verbs.** Build, ship, lead, navigate, run. Not enable, empower, transform, leverage.
4. **Acknowledge the emotional state once per page.** Repeat acknowledgments read as therapeutic copy, not exec copy.
5. **No hedging.** "If it fits" not "If you feel it might be worth exploring whether…"
6. **Specifics over adjectives.** "$25,000, twelve weeks, 1:1, weekly sessions of about 60 minutes" beats "premium intensive coaching engagement."

**Example — what to do:**

> I built Ribar.ai because senior leaders my age are watching AI reshape their roles in real time, and most of what is on offer to them is either generic upskilling or vendor sales motion dressed up as education.

**Example — what NOT to do:**

> Ribar.ai was thoughtfully crafted to empower a new generation of executive leaders embracing the transformative potential of AI.

(The bad example uses generic verbs, third-person remove, and a "transformative potential" cliché the senior buyer has heard 500 times.)

### Sentence rhythm

- Opening sentence of any major block: short, declarative, specific.
- Middle: longer, complex sentences are fine if they carry argument.
- Closing of any major block: short, declarative.
- Never end a paragraph on a question, except in the FAQ section.

### Banned phrases

- "Transformative."
- "Empower."
- "Leverage."
- "Best-in-class."
- "Cutting-edge."
- "AI-powered" as a modifier (just "AI").
- "Embracing AI" / "AI-ready" / "AI-first" without specifics.
- "Game-changer."
- Em-dashes used as substitute for proper punctuation. Use them sparingly and intentionally.

---

## Imagery direction

**Use:**

- Operator photography: photo of Mitch (high-res, considered lighting, not a stock headshot pose). The founder portrait is the anchor visual.
- Editorial grid backgrounds — match Capita's ASCII-grid mechanism if a similar texture suits. Optional.
- Type-as-image: large kinetic phrases that read as positioning, not decoration.

**Do NOT use:**

- Neural networks, mesh networks, glowing data streams.
- Robot hands, robot heads, anthropomorphic AI.
- Brains lit up like circuit boards.
- "Person looking thoughtfully at a screen" stock photography.
- Generic geometric AI motifs (concentric circles, hex grids, the "AI" / "ML" badge cliché).

---

## Cross-brand link addenda

See `docs/shared/bio.md` for the canonical bio. Each brand renders the addendum in the founder section.

---

## v1 → v2 path

When the founding cohort has run and Mitch has feedback from real first sessions:

1. Test palette against actual founding-cohort buyers (which register made them more or less likely to engage).
2. Commission logo design from a freelancer or studio using `docs/ribar-ai/brand/logo-direction.md` as brief.
3. Decide between live photography of Mitch vs. illustration-led hero.
4. Build the full brand book (logo files, illustration system, type tokens, motion, voice guide expansion).

v1 is enough to ship the site. v2 happens after the brand has real customers.
