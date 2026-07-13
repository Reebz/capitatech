---
date: 2026-06-03
topic: browserbase-benchmark-improvements
extends: docs/brainstorms/2026-05-14-capita-cavaro-visual-redesign-requirements.md
---

# Capita Technology — Browserbase-benchmark improvement pass

## Summary

A targeted improvement pass on the existing Cavaro-idiom redesign on capitatech-web at the `feat/two-brand-launch` branch tip. The brief proposes 26 requirements filtered through three adversarial premium-brand lenses, organized around four core moves (demote the ASCII grid to background atmosphere; preserve the cursor spotlight as the one interactive playful flourish with the *idle* Lissajous orbit cut; build an editorial type-and-color foreground on top; run a palette utilization study to resolve magenta usage by visual evaluation) plus supporting work on typography consolidation, CTA hierarchy, identity surfaces (wordmark, OG card, favicon), section rhythm and footer, accessibility, shipping discipline, and the performance gate. The OG share card and the palette utilization study are the two artifacts that get dedicated treatment.

---

## Problem Frame

The current branch tip on `feat/two-brand-launch` shipped through an iterative design session on 2026-05-26 (preview at `https://capitatech-763tjyzbx-reebz.vercel.app/`). Compared against browserbase.com — which the founder identified as clear, legible, and on-trend with pixel artwork that works on desktop and mobile — three structural weaknesses surfaced in the comparative analysis.

First, the page has two competing identities and neither commits. The Cavaro ASCII-grid texture works as ambient atmosphere, and a Stripe-Press editorial type system tries to do the executive register work. The grid is the loudest signal above the fold and codes "dev tool" to a CFO before the H1 has a chance to land. Second, the OG share card is the largest distinctiveness leak on the property. It is words on a grid with zero rendering vocabulary shared with the page, and the majority of senior-exec impressions form there before page load when the URL is pasted into LinkedIn, Slack, or email. Third, the color system fires in non-reinforcing places. Capita blue carries roughly four structural roles (CTA, brand, price eyebrow, focus) and magenta fires as a second saturated event inside the page's largest texture, so the eye splits and the brand reads as decorative tint rather than meaning.

Critically: the agents that ran the comparative analysis initially imported several specific browserbase moves — chunky offset shadows on CTAs, marker-block H1 highlights, edge-cropped wordmark, monospace numerals at display scale, a separate monogram. Three adversarial premium-brand lenses (a CFO at a $2B regulated firm reading on mobile, a brand-standards guardian holding the canonical palette and type stack, and a cohesion-and-craft reviewer checking system coherence) all returned `ship-with-revisions` and rejected those specific moves as SaaS-landing-page vocabulary that reads cheap on a $35k–$120k advisory page. This doc proposes the moves that *survived* the adversarial filter.

---

## Key Decisions

- **Extend the Cavaro idiom, do not shift away from it.** The ASCII grid + cursor spotlight is the only piece of distinctive material identity the property has. The problem is not the idiom; the problem is the idiom is currently the loudest thing on the page and fights the editorial type system instead of supporting it. The path is restraint plus editorial foreground, not deletion. Cavaro-as-substrate plus Stripe-Press-as-foreground.
- **Cursor spotlight stays as the one interactive playful flourish.** The user explicitly carved this out of the texture-reduction. The mechanism — cursor reveals ASCII texture against a spotlight gradient — IS the brand's pixel-art equivalent for an executive register. The *idle* Lissajous orbit (the spotlight moving on its own when no cursor is present, currently firing on touch devices and after `mouseleave`) is cut as zero-semantic ornament. Cursor-tracking on `(hover: hover) and (pointer: fine)` stays.
- **ASCII grid is a managed liability with a phased reduction path, not a permanent feature.** ≤3% above-the-fold tint now (the deliberate change in this brief); ≤5% page-wide in a follow-up pass; quiet authored texture (laid-paper grain or nothing) as the eventual destination if the texture continues to leak the dev-tool signal at thumbnail and mobile scale. Demote, measure, then reassess.
- **Reject the SaaS-landing-page vocabulary that the analysis kept proposing.** No chunky offset shadows on CTAs (the Vercel / Linear / Gumroad indie-hacker tell). No marker-block background highlights on H1 nouns (the 2022–2024 B2B SaaS landing signature). No edge-cropped wordmark in the footer — amputating the signature contradicts "principal-signed deliverables." No monospace numerals at display scale (codes fintech pricing page, not engagement schedule). No separate monogram next to the wordmark. The Capita Technology wordmark already carries identity weight at every page surface; introducing a second mark would split equity rather than concentrate it.
- **Palette utilization moves from "fixed rule" to "shown options for visual evaluation."** The prior brief locked magenta to spotlight hot center + one H1 word + ::selection. This brief opens palette utilization as a shown-options decision: rendered prototypes at desktop and mobile across three or four variants, user picks one after seeing them. The canonical three-location rule is one of the candidate variants, not the only outcome.
- **Stack shift is permitted; default is no shift.** Astro 6.2 + Tailwind 4 on Vercel stays as the baseline. Any specific recommendation that materially benefits from a different framework (Next.js Cache Components for OG card revalidation, etc.) surfaces during planning as a flagged option for user decision. Most of the proposed changes are CSS / asset / structure-level and framework-agnostic, so the stack decision likely affects 0–2 items rather than the whole list. Vercel hosting is preserved either way.
- **The OG share card is the highest-leverage single asset on the property and earns dedicated treatment.** Static 1200×630 export, built at build time, monogram-free per the CFO lens. Wordmark + one declarative sentence with Capita-blue ink on the operative noun + one substance line below carrying sectors and engagement floor and principal-signed deliverables. Possibly one ASCII-derived element threads identity continuity with the page; the palette study resolves whether.
- **Sequencing constraint: cuts and adds ship in the same deploy.** The page must never exist in a "stripped editorial template without distinctiveness" interim state. The motion + texture cuts and the new identity adds are coupled at the release boundary.
- **Geist Variable preservation stays.** The canonical Inter + Geist pairing was not re-opened by the user. The comparative analysis recommended dropping Geist for LCP reasons; the brand-guardian lens correctly identified this as a performance argument dressed as a typography argument. Fix the preload, not the face. No third font family is introduced.

---

## Requirements

**ASCII grid and spotlight motion budget**

- R1. Reduce the ASCII grid resting tint above the fold to ≤3% black. The grid below the hero stays at the current 10% in this pass; a follow-up may reduce page-wide to ≤5%. The two thresholds are separate gates and may ship together or staggered.
- R2. Preserve the cursor-tracking spotlight on `(hover: hover) and (pointer: fine)` devices. The spotlight gradient and the spotlight-clipped-to-ASCII-glyphs mechanism are retained as the page's one interactive playful flourish.
- R3. Remove the Lissajous idle orbit. The spotlight does not animate when no cursor is present — on touch-only devices, on `mouseleave`, and when the cursor is outside the spotlight-eligible region. `prefers-reduced-motion: reduce` continues to suppress all spotlight motion (this was already in the prior brief and is preserved).
- R4. Constrain the cursor-tracking spotlight to the hero region on desktop. Below the hero, the page presents no ambient motion. The containment mechanism (CSS containment, region clipping, or scoped event listener) is a planning decision.
- R5. Remove the kinetic-phrase horizontal-translate scroll transform. The phrase renders static at its current type scale, or — if planning identifies a stronger payoff — the phrase demotes to body-pullquote scale and the display slot it occupies reassigns to a magnitude moment (the promoted prices per R6 or a single climactic numeral). Either outcome is acceptable; the constraint is that two concurrent ambient motion systems is the anti-pattern. The motion-budget Success Criterion (one playful interactive flourish + reactive state changes) is satisfied by either outcome — the phrase contributes no ambient motion in either case, so the SC is independent of which R5 path planning picks.

**Editorial foreground — typography**

- R6. Promote the four package prices to display scale in Geist Variable (the canonical display face) with OpenType tabular and lining numerals enabled via `font-feature-settings: 'tnum', 'lnum'`. Target scale: `clamp(40px, 5vw, 64px)` above the package name. No monospace face is introduced; tabular figures come from the OpenType feature, not from a third font family.
- R7. Remove the "FROM" uppercase eyebrow above package prices. Replace with an inline "from" at the same family, roughly half price-scale, full color. The numeral leads.
- R8. Raise the mobile H1 floor and tighten the lede measure. Hero H1 scale becomes `clamp(48px, 11vw, 88px)` (current floor is 40px). The hero lede measure tightens to roughly 28ch at viewports under 720px so it wraps two lines instead of three. The CTAs lift from roughly 70% viewport position into the 55–65% thumb-zone band with no copy change.
- R9. Consolidate the live typography to four tiers across the page: Display (hero H1, prices, the full-bleed band), Section (section headings, package names), Body (lede, paragraph, form labels), Micro (eyebrows, the trust strip, footer legal). Retire `--type-lede`, `--type-h3`, `--type-signature`, `--type-kinetic` as distinct tokens by folding their usages into the four tiers. Inter + Geist remains the canonical pairing; no surface uses Geist Mono or any third family.

**Editorial foreground — color**

- R10. Restrict Capita blue to the structural role-count chosen in the palette utilization study (R20). The current page uses blue across at least four roles (CTA fill, brand wordmark, price eyebrow, focus rings); every candidate palette variant demotes at least one. Final role-count and placement resolves in the rendered prototypes, not in this doc.
- R11. The operative noun in the hero H1 is emphasized via colored *ink*, not a solid background block. The candidate emphasis colors (Capita-blue ink, magenta ink, magenta retained as-is, or no inline emphasis with the burden carried by the H1 scale and weight) are tested in R20. Box-decoration-break to fill a noun shape is rejected — that is the marker-block treatment explicitly out of scope.
- R12. CTAs use a flat fill. No chunky offset shadow, no double-pixel hard shadow, no Browserbase-style stacked-rect treatment. Primary CTA = solid fill, single hairline border allowed, full opacity, generous internal padding. Press state = single-pixel `translateY` on `:active` only. The chunky-control border-plus-offset-shadow vocabulary inherited from Cavaro is replaced on CTAs specifically; non-CTA chunky-control treatments (form inputs, country picker, FAQ caret) stay per the prior brief and may be re-evaluated against the selected palette variant in planning.
- R13. Demote four of six CTAs by removing them. The package-card CTAs come off the page entirely — the price IS the CTA; the user scrolls to the single contact form. The hero CTA pair and the form submit are the only filled buttons on the page. Wayfinding to packages happens via the existing anchor link in the header navigation.

**Identity — wordmark, OG card, favicon**

- R14. The Capita Technology wordmark stays as the property's primary identity mark. No separate monogram is introduced — no "C" or "CT" lockup adjacent to the wordmark in the header, hero, OG card, or favicon. The wordmark may receive typographic refinement (kerning, optical adjustment of the dot between "Capita" and "Technology", weight balance) as a planning decision; it is not redrawn.
- R15. Rebuild the OG share card as a static 1200×630 asset, generated at build time, exported as a PNG (or SVG plus rasterization step). Composition: Capita wordmark upper-left, the hero H1 set at display type with the operative noun in the emphasis color chosen in R20 (ink only, no marker block), one line of substance below the H1 carrying sector list + engagement floor + principal-signed deliverables, and one optional ASCII-derived typographic mark (a hairline rule or a single 8×12 ASCII dot cluster — the palette study decides whether and which) lower-right. No ASCII grid texture on the OG card itself, no cursor spotlight, no photograph, no gradient background, no monogram, no decorative typographic ornaments (no `✦`, `❋`, or similar glyph filler).

  **Build ordering against R20.** R15 is parameterized on the emphasis color chosen in R20. The OG card builds *once* after R20 selects a variant — it is not rendered four times in the palette study itself. The palette study renders the four candidate variants on the page surfaces (hero, prices, contact band, footer); the OG card uses the winning variant's emphasis color and ships in the same release per R22.
- R16. The favicon set ships in standard formats: SVG favicon, 32×32 PNG, 180×180 apple-touch-icon, `manifest.json` with `theme-color` set to Capita blue, `<meta name="theme-color">` matching. The favicon mark is derived from the existing wordmark (typically the "C" form rendered at favicon scale), not from a separately designed monogram. This R supersedes the prior brief's R22 with one substantive delta: the prior R22 specified the format set only; this R adds the wordmark-derived-mark constraint as a follow-on to R14's monogram rejection.

**Identity — section rhythm and footer**

- R17. Introduce one full-bleed contrast band on the page's strongest single declarative sentence (the candidate is the 90-day commitment line currently rendered in the contact-aside region). Flat ground color (black or Capita blue — R20 decides), white type, edge-to-edge, no border, no card chrome. The band is a rhythm break against the eight equal-weight white plates the page currently presents, not "the page's center of gravity" — the strongest single line on the page remains the H1 or the engagement floor.
- R18. Reorder the footer so the contact tiles sit above the wordmark band. The page terminates on the brand stamp, not on legal microcopy. The double-rule-with-centered-wordmark "banner" treatment from the prior brief is reordered into a final wordmark plate.
- R19. The footer wordmark renders complete. The wordmark is NOT edge-cropped or bled past the viewport right or left edge. Alignment (left-anchored vs centered) is resolved against the rendered visual in planning. The footer ground color is decided in R20 such that there is at most one saturated full-bleed plate per scroll (either the R17 band and the footer share a color, or one is black and the other carries the page's accent treatment without full saturation).

**Palette utilization study and trust strip**

- R20. Produce four rendered palette utilization variants for visual evaluation, each covering the hero, the prices section, the contact band per R17, and the footer per R18–R19, at both 1440 desktop and 390 mobile:

  - **Variant A — magenta canonical.** Spotlight hot center carries magenta; one operative noun in the H1 is magenta; ::selection is magenta. Capita blue carries CTA + brand + focus. This is the prior brief's rule, re-tested under the new typographic foreground.
  - **Variant B — Capita-blue spotlight, magenta surgical.** Spotlight gradient is blue → ink → transparent (no magenta in the gradient). Magenta retained as ::selection only, or as a single hairline accent in one specific location. The H1 operative noun is Capita-blue ink. Capita blue carries spotlight + H1 emphasis + brand; CTA goes black-fill (flat, no shadow per R12).
  - **Variant C — Capita-blue spotlight, magenta retired.** Spotlight is blue → ink → transparent. No magenta on the page anywhere. The H1 operative noun is Capita-blue ink. Capita blue carries all emphasis under a strict restraint discipline (at most three structural roles).
  - **Variant D — planning's choice.** A fourth variant chosen by planning to stress-test the magenta-utilization decision. Candidates: blue spotlight + magenta as a single-surface ground color (e.g., the R17 band only), a black-and-blue-only system with magenta deferred to a future seasonal pass, or a magenta-as-spotlight variant where magenta carries the spotlight and Capita blue is held back to the H1 emphasis and the brand wordmark. **Selection rule:** after Variants A–C render, planning identifies the magenta-utilization question that A–C leave least resolved (e.g., "is magenta-as-saturated-plate a legitimate option we haven't tested?" or "does a no-magenta system feel under-anchored at thumbnail scale?") and picks the candidate whose render most directly answers that residual question. Variant D MUST be implementation-compatible with A–C (CSS-variable-level overrides, no structural layout changes) so the user's pick-and-retire operation stays a swap, not a rebuild.

  Variants are produced as a `/palette-study` route on a Vercel preview deployment, or as a side-by-side rendered comparison sheet, or both. The user selects one variant; that variant becomes the shipped state. The variant decision retires the others.

- R21. Add a typographic trust strip directly under the hero CTAs. One line of body Inter at 14–15px, tracked letter-spacing (`letter-spacing: 0.04em`), 60% opacity, separated by middots (`·`). Content: sector list (Telco · Banking · Insurance · Property · SaaS) + engagement floor ($35,000) + principal-signed deliverables. The 60% opacity reads as deliberate, considered context rather than primary content; it pulls the eye to the H1 and CTAs above and the trust signal below them. No monospace treatment. No logo grid. No icons. No "trusted by" framing. Every token is a concrete noun, sector, or number — no adjectives, no "industry-leading," no "proven."

**Sequencing and shipping discipline**

- R22. The motion and texture cuts (R1, R3, R4, R5), the display-scale price promotion (R6, R7), the mobile H1 scale (R8), the OG card rebuild (R15), and the selected palette variant (R20) ship in the same production deployment. The page must never deploy to production with the distinctiveness cuts applied and the new identity adds missing. Planning bundles these into a single release boundary.

**Performance and accessibility**

- R23. The LCP gate from the prior brief is preserved: LCP ≤ 2.5s on Lighthouse mobile p75 of 5 runs against a Vercel preview deployment. Any change that risks the gate (additional preloads, larger image assets, JS additions for the OG card build step) requires explicit measurement before merge. The motion cuts (R3, R5) and the grid reduction (R1) should reclaim budget; the OG card asset and any additional preload are the candidate additions to measure against.
- R24. WCAG AA contrast and the accessibility floor from the prior brief are preserved. The colored-ink H1 emphasis (R11) and the trust strip (R21, at 60% opacity per the revised spec) must meet AA contrast over their actual background. The full-bleed band (R17) must meet AA contrast for white type over its chosen ground color. The selected palette variant in R20 is verified for AA contrast on every typographic surface before shipping.
- R25. The ASCII grid backdrop (the `<pre>` rendered in the page DOM that holds the pre-computed ASCII glyphs) carries `aria-hidden="true"` and `role="presentation"`. The cursor-spotlight is implemented as a gradient layered into that same element's `background-image` via `background-clip: text` — it does not exist as a separate DOM node, so a single aria-hidden on the grid element covers both surfaces. Neither the grid nor the spotlight receives focus on keyboard navigation; tab order skips both. The spotlight script touches only inline-style values (`--mx`, `--my` CSS custom properties) inside the aria-hidden subtree, so style mutations are not announced. AE11 verifies the aria contract via a DOM proxy (axe-core scan: grid element has `aria-hidden="true"`; accessibility tree shows no text content for the grid; no descendant is in the focus order) rather than as an AT-only screen-reader test.
- R26. FAQ accordion animation respects the page's motion budget. Open/close transition is ≤ 200ms total perceived duration, with `ease-out` easing applied uniformly across every CSS property that participates in the transition (typically `transform` on the open/close indicator + `max-height` or `grid-template-rows` on the panel for height; if opacity is added, it is folded into the same 200ms budget — not staged after height). Implementation must replace the current `panel.hidden = true/false` toggle with a CSS-transitionable mechanism (`max-height: 0` ↔ `max-height: 100vh`, or `grid-template-rows: 0fr` ↔ `1fr`), since `hidden` is binary and cannot be transitioned. The existing FAQ caret control treatment (`+`/`−` text swap via `::after`) is preserved per R12 — the transition envelope applies to whatever indicator the caret resolves to (a rotation on a glyph or an opacity cross-fade on text content, planning picks consistent with the caret's current rendering). Under `prefers-reduced-motion: reduce`, the transition becomes `transition: none` (or `transition-duration: 0ms`) — not "10ms effectively instant," which still produces a visible flash on composited layers. The accordion's keyboard contract and single-open behavior from the prior brief are not touched.

---

## Acceptance Examples

- AE1. **Covers R3.** Given a touch-only device that fails `(hover: hover) and (pointer: fine)`, when the page loads, no spotlight animation runs. No `requestAnimationFrame` loop starts for the spotlight. Page animation is limited to state changes (button press, FAQ accordion, form focus, back-to-top reveal).
- AE2. **Covers R3, R4.** Given a desktop browser with cursor and `prefers-reduced-motion: no-preference`, when the cursor exits the hero region or the viewport via `mouseleave`, the spotlight does not begin an idle drift, orbit, or autonomous motion. The spotlight gradient remains at its last position, fades to rest, or freezes; what is NOT acceptable is continued autonomous motion.
- AE3. **Covers R12, R13.** Given a screenshot of the rendered page at 1440 desktop and at 390 mobile, the count of filled CTA buttons returns exactly two: the hero primary CTA and the contact-form submit. No solid-fill CTAs render on package cards, on the bespoke section, or in the founder area. The package-card region offers no button; the price is the wayfinding affordance.
- AE4. **Covers R6, R7.** Given the rendered prices section, each package price (`$35,000`, `$45,000`, `$85,000`, `$120,000`) renders in Geist Variable at the R6 scale with tabular figures (digits aligned in a fixed-width column). The string "FROM" in uppercase eyebrow does not appear anywhere on the page; the word "from" may appear inline at roughly half price-scale.
- AE5. **Covers R15.** Given a sharer pastes the production URL into LinkedIn, Slack, or X, when the platform fetches the OG image, the rendered 1200×630 card shows the Capita wordmark upper-left, the hero H1 at display scale with one operative noun in the chosen emphasis color (ink only, not a solid background block), one substance line beneath, no ASCII grid texture, no cursor spotlight, no photograph, and no separately-designed monogram.
- AE6. **Covers R14.** Given any rendered page surface (header, hero, OG card, favicon, footer), no monogram lockup ("C" alone or "CT" alone) appears as a separate identity mark adjacent to the wordmark. The header carries the wordmark only.
- AE7. **Covers R20.** Given the palette utilization study deliverable, the user can compare all four rendered variants of (hero + prices section + contact band + footer) side-by-side at both 1440 desktop and 390 mobile. The user selects one variant; that variant becomes the shipped state and the others retire.
- AE8. **Covers R22.** Given the deploy pipeline, the texture reductions (R1, R3, R4), the kinetic-phrase change (R5), the price promotion (R6, R7), the mobile H1 scale (R8), the OG card (R15), and the selected palette variant (R20) all land in the same production deployment. There is no preview window in production where the cuts are applied without the adds.
- AE9. **Covers R19.** Given the rendered footer at any viewport width from 320px to 2560px, the Capita Technology wordmark renders complete — neither edge of the wordmark is clipped by the viewport edge, and no `transform: translateX` or negative-margin edge-bleed treatment is applied to crop the wordmark.
- AE10. **Covers R21.** Given the rendered hero at any viewport width, immediately below the CTA pair the page renders one line of body Inter at the R21 scale containing the sector list, the engagement floor numeral, and the principal-signed deliverables phrase, separated by middots. The strip renders at 60% opacity. No icons, no logos, no monospace treatment.
- AE11. **Covers R25.** Given an axe-core or equivalent accessibility-tree scan of the rendered page, the ASCII grid element renders `aria-hidden="true"` and `role="presentation"`, the accessibility tree exposes no text content for the grid element or its descendants, and no descendant element appears in the keyboard focus order. The cursor-spotlight, being a `background-image` gradient on the grid element rather than a separate DOM node, is covered by the grid's aria-hidden — the rendered DOM contains no separate "spotlight overlay" node to verify against.
- AE12. **Covers R26.** Given a user activates a FAQ question on a desktop browser with `prefers-reduced-motion: no-preference`, the panel opens with a total perceived transition ≤ 200ms across every transitioned property. Given the same user with `prefers-reduced-motion: reduce`, the panel opens with `transition: none` — no measurable animation duration, no composited-layer flash.

---

## Success Criteria

- The founder feels the page accurately represents Capita at the executive register, would paste the URL to a CFO without caveat, and would screenshot the OG card into a sales conversation as proof rather than as scaffolding.
- A senior exec landing on mobile from a shared LinkedIn URL forms a "premium, distinctive, considered" impression in the first viewport — and crucially does NOT form a "this looks like a 2024 B2B SaaS landing page" impression at any point through scroll.
- The mobile share-card thumbnail (the OG image rendered at LinkedIn / Slack scale) carries enough rendering vocabulary that a recipient could identify it as Capita from a glance, without reading the wordmark.
- The cumulative motion budget reads as calm and considered, not as decorated or fidgety, on first viewport at both desktop and mobile. One playful interactive flourish (the cursor spotlight) plus reactive state changes, no ambient motion competing for attention.
- The page reads as performance-respecting on mid-tier mobile (a 3-year-old Android on simulated slow-4G), not just as compliant with the LCP numeric gate. A senior exec on a flight does not experience the page as heavy.
- **Accessibility as a stated goal.** A keyboard-only user reaches every interactive surface (header CTA, hero CTA pair, FAQ accordion, contact form fields and submit) in source order with visible focus, and a screen-reader user is not announced any decorative content (the ASCII grid, the cursor spotlight) as text or as focusable surface. The accessibility floor is observable as a property of the shipped page, not as an inheritance from the prior brief.
- Contact-form completion rate does not regress versus the current branch tip.
- LCP on Lighthouse mobile p75 stays ≤ 2.5s on a Vercel preview deployment.
- `ce-plan` can produce an implementation plan from this document without inventing visual rules, palette decisions, motion behavior, or scope boundaries. The palette utilization study (R20) is the one decision deliberately deferred to visual prototyping; the doc names that fork explicitly and constrains its inputs.

---

## Scope Boundaries

### Deferred for later

- Real founder photo and bio copy. The founder section ships under its existing flag, gated until copy and photo are ready in a future change. (Inherited from the prior brief.)
- Case studies, named or anonymized or composite.
- Blog or insights content stream.
- CMS introduction.
- Dynamic OG image generation (Vercel/og, satori) — the OG card per R15 is a static build-time export.
- Per-section OG variants — one OG image serves the property.
- Page-wide grid reduction to ≤5% (this brief reduces above-the-fold to ≤3%; page-wide is a follow-up gate).
- A potential quiet-authored-texture replacement for the ASCII grid (laid-paper grain, faint engraved rule pattern) if the post-deploy read still leaks the dev-tool signal. The phased-reduction path names this as a downstream possibility, not as part of this brief.

### Outside this redesign's identity

- Pixel art mascots, hero illustrations, or commissioned static playful artwork. The cursor spotlight against the ASCII grid is the founder's *current* maximum playful flourish — additional restrained, interactive pixel-art moments (a small interactive element, a footer signature glyph, a section-divider motif) are permissible during planning if they preserve the executive register. The boundary is mascot-and-hero-illustration, not interactive pixel art as a category.
- Chunky offset-shadow CTAs (the Cavaro / Browserbase / Linear / Resend vocabulary). Explicitly rejected per Key Decision; replaced by flat fills per R12.
- Marker-block / solid-background-fill H1 noun highlights. Explicitly rejected per Key Decision; replaced by colored ink per R11.
- Edge-cropped or amputated wordmark in the footer or elsewhere. Explicitly rejected per Key Decision; the signature stays complete per R19.
- Monospace numerals at display scale, and monospace-as-decoration for sector or label text. Explicitly rejected; OpenType tabular figures on Geist serve the magnitude case without importing dev-vernacular type per R6.
- A separate monogram identity atom adjacent to the wordmark. Explicitly rejected per R14 to keep identity equity concentrated on the wordmark rather than split across two marks.
- Multi-page architecture, route-level navigation, additional routes (`/work`, `/about`, `/insights`, `/contact`). The page stays single-route long-scroll.
- Copy rewrites. Content is locked at the current branch tip. Treatment, hierarchy, scale, color usage, and emphasis target may change; the strings themselves do not. (Inherited from the prior brief; reaffirmed here.)
- Changes to the contact form's API contract, Formspree endpoint, anti-spam mechanisms, or country-code data. (Inherited from the prior brief.)
- Changes to the FAQ accordion's single-open behavior or keyboard contract. (Inherited from the prior brief.)
- New font families. Inter Variable + Geist Variable stays canonical. No mono face, no display alternative, no third sans.
- Re-litigating the editorial-vs-Cavaro premise debate from the prior brief — Cavaro stays as the substrate; the foreground is what this brief refines.

---

## Dependencies / Assumptions

- The prior brief at `docs/brainstorms/2026-05-14-capita-cavaro-visual-redesign-requirements.md` and the session handoff at `docs/operational/session-handoff-2026-05-26.md` remain load-bearing context. This doc extends the prior brief; it does not supersede it. Where this brief explicitly relaxes a prior constraint (palette utilization per R20, kinetic-phrase per R5), the relaxation is named in Key Decisions.
- The current `feat/two-brand-launch` branch tip is the baseline. All requirement deltas are stated against the branch tip, not against the live production site.
- The production preview URL referenced in the session handoff is SSO-gated. Agents, planners, and reviewers verify behavior against a local dev server (`pnpm dev`) or against a fresh public preview deploy with SSO disabled for that deployment.
- Vercel hosting continues. The Vercel project is the production deploy target; stack-shift permission preserves Vercel as the host regardless of which framework hosts the application.
- The 90-day commitment line (the candidate for the R17 full-bleed band) exists in `src/pages/index.astro` and can carry display-scale rendering without copy change. Planning verifies the exact string and its current location.
- The wordmark SVG asset in the current header is the source the OG card and the favicon both derive from. Planning verifies the wordmark has the optical weight and proportion to serve OG-card scale (target wordmark height roughly 60–80px in the 1200×630 frame) without redrawing; if not, the OG card uses a rasterized render of the wordmark at the necessary scale.
- The user's stack-shift permission (Astro → potentially another framework on Vercel) is real but not exercised by default. Planning surfaces the question only if a specific recommendation materially benefits from a different framework.
- The palette utilization study (R20) is a visual-prototyping deliverable. The production mechanism (preview-route, side-by-side comparison sheet, both) is a planning decision. The selected variant is committed back to the canonical surfaces; the other variants and the `/palette-study` route are removed before the production deploy that ships R22.
- The cursor spotlight mechanism inherited from Cavaro continues to function on the existing implementation surface. The spotlight gradient and the `background-clip: text` glyph-clipping technique are preserved; only the idle-orbit JS loop and the magenta gradient stop change.
- **Process discipline for the performance gate.** Every preload, image asset, and JS addition introduced by this brief (the OG card asset, any additional font preloads, the palette study route, the FAQ accordion mechanism change per R26) is named, measured against the LCP budget, and traded off against the existing budget headroom rather than added speculatively. This is a planning-process expectation, not an observable property of the shipped page; the observable property is the performance-respecting Success Criterion above.

---

## Outstanding Questions

### Deferred to planning

- [Affects R20] Variant D specifics. Planning picks the fourth palette variant from the candidate set in R20 once Variants A–C are rendered and the gaps the first three leave visible are clearer.

- [Affects R5] Whether the kinetic-phrase reassignment frees a display-scale slot for a single climactic numeral (a stat block) or simply collapses the section to body-pullquote scale. Resolved by planning visual prototyping against the rendered hero and prices section.
- [Affects R15, R17, R19] Whether the OG card threads one ASCII-derived element (an 8×12 dot cluster lower-right, per the craft-cohesion lens) or terminates cleanly without it. Resolved in the palette study renders.
- [Affects R17, R19] Whether the full-bleed band (R17) and the footer flood (R19) both land on black, both on Capita blue, or split. The constraint is at most one saturated full-bleed plate per scroll; the palette study renders the candidate combinations.
- [Affects R10] Final count of structural roles for Capita blue. Resolved when the palette variant in R20 is selected.
- [Affects R19] Footer wordmark alignment: left-anchored vs centered. Resolved against the rendered visual in planning.
- [Affects R23] Whether dropping the kinetic-phrase scroll transform (R5), removing the Lissajous idle loop (R3), and reducing grid render cost (R1) is sufficient to reclaim LCP budget for any preload changes the palette study introduces. Measured by planning.
- [Affects R12] Whether non-CTA chunky-control treatments (form inputs, country picker, FAQ caret) need re-evaluation against the selected palette variant, or stay as-shipped per the prior brief. Default: stay as-shipped.
- [Affects various] Whether any specific recommendation materially benefits from a Next.js or other framework shift on Vercel (per Key Decision on stack-shift permission). Default: no shift. Planning surfaces the decision per-recommendation if any triggers it.

---

## Deferred / Open Questions

### From 2026-06-03 review

- **Contact form interaction states unspecified: loading, error, success, disabled** — R12, R13, Scope Boundaries (P0, design-lens, confidence 100)

  The doc locks the form's API contract but says nothing about what the submit button does while the request is in flight, what renders when Formspree returns an error, or what the success state looks like. R12 defines CTA press mechanics (single-pixel translateY on :active) but that covers the click moment only. A planner building the contact band will invent four states independently, producing outcomes that may contradict the "flat fill, no ornament" discipline or the typographic tier system in R9. Contact-form completion rate is a named success criterion, making this directly load-bearing.

  <!-- dedup-key: section="r12 r13 scope boundaries" title="contact form interaction states unspecified loading error success disabled" evidence="R12: \"Press state = single-pixel translateY on :active only.\" — covers :active only, silent on loading/error/success." -->

- **Managed liability framing of ASCII grid is internally contradictory (root)** — Key Decisions (P1, product-lens, adversarial, confidence 100, +1 anchor)

  Key Decision 1 names the ASCII grid as the only piece of distinctive material identity the property has. Key Decision 3 simultaneously names it a managed liability with a phased-reduction path whose eventual destination is "quiet authored texture or nothing." A rendered product cannot commit to a distinctive identity and treat that identity as something to phase out without the audience reading the ambivalence as a lack of conviction. Resolution paths: (a) commit fully and stop apologising, (b) replace with the quiet-texture target now, (c) accept the phased reduction as deliberate and name what triggers the next step.

  <!-- dedup-key: section="key decisions" title="managed liability framing of ascii grid is internally contradictory" evidence="Line 27: \"The ASCII grid + cursor spotlight is the only piece of distinctive material identity the property has.\"" -->

- **Cavaro-substrate + Stripe-Press-foreground stacks two identity grammars without naming the resolution (dependent of managed liability)** — Key Decisions (P1, product-lens, confidence 75)

  The brief commits Cavaro (ASCII texture, cursor spotlight, chunky form-input vocabulary per R12) as substrate and Stripe-Press (editorial type, flat CTAs, restrained palette) as foreground. These are two distinct visual identities with different reading registers. The brief's own Problem Frame names the symptom: "the page has two competing identities and neither commits." The proposed resolution is to keep both and assign each a layer — which is a positioning statement an audience may or may not be able to reconcile. The brief does not test whether the layered combination resolves into one identity at thumbnail and mobile scale.

  <!-- dedup-key: section="key decisions" title="cavaroassubstrate stripepressasforeground stacks two identity grammars without naming the resolution" evidence="Line 27: \"Cavaro-as-substrate plus Stripe-Press-as-foreground.\"" -->

- **"Extend, do not shift" verdict may not survive the founder's explicit re-opening (dependent of managed liability)** — Key Decisions, Scope Boundaries (P1, adversarial, confidence 75)

  The Phase 0.3 question placed the Cavaro idiom on the table. The brief lands on "extend the Cavaro idiom, do not shift away from it" then closes the question entirely via Scope Boundaries' "Re-litigating the editorial-vs-Cavaro premise debate from the prior brief — Cavaro stays as the substrate." If the founder opened the idiom and the brief closes it on the grounds that the prior brief was not formally re-opened, the doc is enforcing inertia. A founder reading this brief cannot opt for "shift to quiet authored texture now" within its frame.

  <!-- dedup-key: section="key decisions cavaro extension bullet scope boundaries outside this redesigns identity last bullet" title="extend do not shift verdict on the cavaro idiom may not survive the founders explicit reopening of it" evidence="Key Decisions: \"Extend the Cavaro idiom, do not shift away from it. The ASCII grid + cursor spotlight is the only piece of distinctive material identity the property has.\"" -->

- **R22 couples 9 independent changes at a single release boundary** — Requirements (R22), Key Decisions (sequencing) (P1, scope-guardian, adversarial, confidence 100, +1 anchor)

  R22 names R1, R3, R4, R5, R6, R7, R8, R15, R20 as a mandatory co-deploy set. The cuts-and-adds pairing (R1/R3/R4/R5 with R6/R7/R8) is sound, but R15 (OG card) and R20 (palette study) have no logical dependency on the motion or typography changes — they can ship before or after without creating an aesthetically incoherent interim state on the live page. The coupling extends to a 9-item all-or-nothing gate without justification for the OG card and palette study inclusions. The cuts (texture reductions, motion removal) do not strip distinctiveness; they reduce volume. The cursor spotlight, the ASCII grid (still present at ≤3% above fold, 10% below), the brand wordmark, the price tiers, the editorial type system all remain.

  <!-- dedup-key: section="requirements sequencing and shipping discipline" title="r22 couples 9 independent changes at a single release boundary the coupling is stated as discipline but functions as shipping risk amplification" evidence="R22: \"The motion and texture cuts (R1, R3, R4, R5), the display-scale price promotion (R6, R7), the mobile H1 scale (R8), the OG card rebuild (R15), and the selected palette variant (R20) ship in the same production deployment.\"" -->

- **R20 palette study is disproportionate to the decision it serves** — Requirements (R20) (P1, scope-guardian, confidence 75)

  R20 specifies four variants × (hero + prices + contact band + footer) × (1440 + 390) = 32 rendered surfaces, plus a dedicated `/palette-study` route. The decision the study resolves is one binary: which magenta-utilization pattern ships. The 32-surface study is disproportionate to that decision. A two-variant compare (canonical magenta vs blue-only) at one viewport would resolve the same question at one-eighth the rendering work. R22 also gates production ship on R20's outcome, so the study is on the critical path for every other change in this brief.

  <!-- dedup-key: section="requirements palette utilization study and trust strip" title="r20 palette study is a 32surface rendered deliverable that dwarfs the decision it serves the study has become a subproject not a decision gate" evidence="R20: \"Produce four rendered palette utilization variants for visual evaluation, each covering the hero, the prices section, the contact band per R17, and the footer per R18–R19, at both 1440 desktop and 390 mobile\"" -->

- **CFO-on-mobile audience model is load-bearing but unevidenced (root)** — Problem Frame, Success Criteria, Sources/Research (P1, adversarial, confidence 75)

  Three of the brief's most consequential moves — OG card as "highest-leverage single asset," mobile H1 floor raise and lede tightening, CTA thumb-zone band shift — derive their priority from the premise that senior execs at AU-regulated firms form first impressions on mobile from LinkedIn-pasted URLs. The brief itself names the failure mode: "the adversarial premium-brand lenses run during the comparative analysis WERE THEMSELVES AGENTS modeling a CFO — there is no actual CFO ground truth here." If the actual primary arrival mode is a board-sponsor desktop demo from a personal referral, or a procurement vendor evaluation, the dedicated OG-card treatment and the mobile-thumb-zone optimization are both over-built for the wrong shape.

  <!-- dedup-key: section="problem frame success criteria 2nd bullet sourcesresearch" title="cfoonmobile audience model is loadbearing but unevidenced and was generated by agents modeling a cfo not by a cfo" evidence="Problem Frame: \"the majority of senior-exec impressions form there before page load when the URL is pasted into LinkedIn, Slack, or email\" — stated without citation." -->

- **OG card "highest-leverage" claim is unsupported against actual sales motion (dependent of CFO audience model)** — Problem Frame, Key Decisions (OG card), R15 (P1, product-lens, adversarial, confidence 100, +1 anchor)

  Premium advisory at $35k–$120k+ is overwhelmingly driven by founder-led 1:1 outreach, referrals, AU regulated-industry events, and warm introductions — not by URL-paste impressions into LinkedIn. The doc asserts the OG card is the highest-leverage single asset and earns dedicated treatment (R15, full Success Criterion bullet, dedicated deferred questions), but provides no evidence that paste-into-LinkedIn is in fact how senior execs first encounter Capita. The brief does not name (a) the volume of inbound URL-pastes the site currently receives, (b) the conversion ratio from share-impression to engaged exec, or (c) whether any closed engagement traced first contact to a shared URL versus to direct outreach.

  <!-- dedup-key: section="key decisions key decisions og card problem frame r15" title="og share card highestleverage single asset is unsupported against the actual sales motion" evidence="Line 33: \"The OG share card is the highest-leverage single asset on the property and earns dedicated treatment.\"" -->

- **OG card typeface, substance-line content, and fallback are not pinned (dependent of CFO audience model)** — R15 (P1, design-lens, confidence 100)

  R15 describes OG card composition structurally but omits: (1) which typeface renders the hero H1 on the card (Geist Variable at what weight? Inter?), (2) the exact string for the substance line — the planner must compose this string from sector list + engagement floor + principal-signed deliverables, which is brand-copy authoring inside an implementation requirement, (3) what happens if the static build step fails or produces a corrupt PNG — is there a fallback OG tag, and if so what does it point to. The brief calls the OG card "the highest-leverage single asset on the property"; leaving its copy and typeface unspecified contradicts that priority claim.

  <!-- dedup-key: section="requirements identity wordmark og card favicon r15" title="og card typeface choices and substanceline exact content not pinned planner will invent both" evidence="R15: \"one line of substance below the H1 carrying sector list + engagement floor + principal-signed deliverables\" — no exact string given; three content tokens with no assembly instruction." -->

- **Package-card wayfinding to contact form unspecified on mobile after CTA removal** — R13 (P1, design-lens, confidence 100)

  R13 removes four of six CTAs from package cards with the stated rationale "the price IS the CTA; the user scrolls to the single contact form." Wayfinding is delegated to "the existing anchor link in the header navigation." On mobile, the header nav link is a single tap target at the top of the page. After the user has scrolled past the packages section, there is no affordance that directs them to the contact form. The mobile full screenshot shows the packages section is well above the contact form with no visible connective element. The doc provides no alternative affordance to replace the removed package-card CTAs on the device class that dominates shared-URL traffic.

  <!-- dedup-key: section="requirements editorial foreground color r13" title="package card wayfinding on mobile after cta removal is underspecified" evidence="R13: \"The package-card CTAs come off the page entirely — the price IS the CTA; the user scrolls to the single contact form. Wayfinding to packages happens via the existing anchor link in the header navigation.\"" -->

- **Header scroll behavior unspecified — affects spotlight containment and CTA count** — R4 (and broader page IA) (P1, design-lens, confidence 100)

  R4 constrains the spotlight to the hero region but defers the containment mechanism to planning. The doc does not state whether the header is sticky, auto-hiding, or static — a decision that directly determines how the hero region boundary is defined for R4's containment, and whether the "Talk to us" CTA in the header competes with the hero CTA pair at scroll positions between the hero and the packages section. On mobile the header CTA is already the only above-fold button; if the header becomes sticky on scroll the CTA-count invariant in AE3 may fire unexpectedly.

  <!-- dedup-key: section="requirements ascii grid and spotlight motion budget" title="header scroll behavior not specified sticky hideonscrolldown blur and spotlight containment interaction with it" evidence="R4: \"Constrain the cursor-tracking spotlight to the hero region on desktop. The containment mechanism (CSS containment, region clipping, or scoped event listener) is a planning decision.\"" -->

- **R17 band position in page flow not specified** — R17 (P1, design-lens, confidence 75)

  R17 introduces the band as "a rhythm break against the eight equal-weight white plates" but does not name which plate it follows or precedes. The "candidate is the 90-day commitment line currently rendered in the contact-aside region" means the band's scroll position depends on where that line currently lives, which a planner must read from source. On mobile the band is full-viewport-width with no surrounding context specified; the plates above and below it are unnamed. R19's "at most one saturated full-bleed plate per scroll" constraint depends on the band's actual page position.

  <!-- dedup-key: section="requirements identity section rhythm and footer r17" title="fullbleed band r17 position in page flow and what is immediately above and below it not specified" evidence="R17: \"the candidate is the 90-day commitment line currently rendered in the contact-aside region\" — candidate, not confirmed; and the current rendered position is not stated in the doc." -->

- **R20 mobile comparison surface unviable as side-by-side at 390px** — R20 (P1, design-lens, confidence 75)

  R20 specifies four rendered variants at 1440 desktop and 390 mobile. It names three delivery mechanisms (preview route, side-by-side sheet, or both) but does not decide which. At 390 mobile, a side-by-side rendered comparison of four variants across hero + prices + contact band + footer produces a 4-column layout that is unusable on mobile. If the comparison is a `/palette-study` route, the user must navigate between four URLs. The doc defers "the production mechanism" to planning without specifying what makes one acceptable over another or what the user's evaluation surface looks like.

  <!-- dedup-key: section="requirements palette utilization study and trust strip r20" title="palette study mobile comparison surface decision missing r20 defers it without bounding it" evidence="R20: \"Variants are produced as a /palette-study route on a Vercel preview deployment, or as a side-by-side rendered comparison sheet, or both. The user selects one variant; that variant becomes the shipped state.\" — three options, no decision criterion." -->

- **R15 mark sub-options punted to R20, but R20 doesn't cover OG card** — R15 (P2, scope-guardian, confidence 75)

  R15 (after the ✦ strip) still describes the lower-right mark as "optional ASCII-derived typographic mark (a hairline rule or a single 8×12 ASCII dot cluster — the palette study decides whether and which)." This is two sub-options inside one R, with the decision deferred to a different R (R20). R20's scope (per the variant descriptions) covers hero + prices + contact band + footer — the OG card is not listed as a surface in R20's coverage, yet R15 delegates the mark decision to R20. Either R15 resolves the mark choice in-doc, or R20's scope expands to include the OG card mark.

  <!-- dedup-key: section="requirements identity wordmark og card favicon" title="r15s three suboptions for the optional lowerright mark punt to r20 without constraining the decision optionality inside r15 is unresolved scope" evidence="R15: optional ASCII-derived typographic mark a hairline rule or a single 8x12 ASCII dot cluster the palette study decides whether and which lower-right" -->

- **Asymmetric treatment: palette opened, type stack closed without stated rationale** — Key Decisions (P2, adversarial, confidence 75)

  The brief opens palette utilization to a 4-variant study because "the prior brief locked magenta to spotlight hot center + one H1 word + ::selection" and the founder wanted to revisit. It closes type-stack with: "The canonical Inter + Geist pairing was not re-opened by the user." The user's stated stance is permission to shift the stack and to revisit the broader visual decisions — the absence of an explicit "re-open Geist" utterance is treated as ratification of preservation. This is inertia framed as discipline. If the LCP gate is genuinely tight, and Geist Variable is the largest font payload, the "fix the preload, not the face" framing forecloses the cheapest possible LCP win on the grounds that an agent persona objected.

  <!-- dedup-key: section="key decisions palette utilization bullet vs geist preservation bullet" title="asymmetric treatment of priorbrief constraints palette opened type stack closed without stated rationale" evidence="Key Decisions: \"Palette utilization moves from \\\"fixed rule\\\" to \\\"shown options for visual evaluation.\\\"\" — the prior brief's lock is reopened." -->

- **Trust strip sector list is new copy that may need founder approval** — R21 (P2, design-lens, confidence 75)

  R21 hard-codes "Telco · Banking · Insurance · Property · SaaS" as the sector list content. Scope Boundaries locks copy ("Content is locked at the current branch tip... the strings themselves do not change"). But R21 is introducing new copy that does not exist in the current branch tip — it is new trust-strip content. A planner implementing R21 will treat those sector names as authoritative and ship them. If the founder's actual client mix differs or if the ordering carries signal (Telco first, SaaS last) that the founder hasn't approved, this is a brand-copy decision made inside a requirements doc without a confirmation step.

  <!-- dedup-key: section="requirements palette utilization study and trust strip r21" title="trust strip sector list authoritativeness not confirmed implementer will treat it as final copy" evidence="R21: \"Content: sector list (Telco · Banking · Insurance · Property · SaaS) + engagement floor ($35,000) + principal-signed deliverables.\" — new copy, not inherited from the existing page." -->

### From 2026-06-03 round 2 review

- **R21 60% opacity fails WCAG AA contrast on white hero background** — R21, R24 (P0, design-lens, confidence 100)

  The round-1 fix that set the trust strip opacity to 60% created a hard WCAG AA failure inside the same doc that requires AA compliance. `#0b0b0d` text at 60% opacity over `#ffffff` composites to approximately `#9a9a9c`, yielding a contrast ratio of roughly 3.0:1. WCAG AA requires 4.5:1 for normal-weight text at 14–15px. R24 explicitly names the trust strip at 60% opacity as needing AA compliance — the requirement is internally contradictory. Resolution paths the founder picks from: (a) raise the opacity to ~85% (yields ~5.3:1 — clear AA pass, retains the muted reading), (b) keep 60% opacity but use a darker token like a hypothetical `--muted: #4b4b57` at full opacity over the white hero (~7.4:1), (c) move the trust strip to a contrast band where 60%-opacity ink reads adequately, (d) accept the muted appearance and tighten the WCAG floor on the strip specifically to AA Large Text (3:1) by raising the strip size to 18px+ (changes hierarchy). The math is airtight; the choice is visual.

  <!-- dedup-key: section="r21 r24" title="r21 60 opacity fails wcag aa contrast on white hero background" evidence="R21: \"One line of body Inter at 14-15px... 60% opacity\" — text #0b0b0d at 60% opacity over #ffffff yields ~3.0:1 contrast, AA requires 4.5:1 for normal text." -->

- **Pixel-art rewording opens contradiction with the "one playful flourish" Success Criterion (root)** — Scope Boundaries, Success Criteria (P1, product-lens, adversarial, scope-guardian, confidence 100, +1 anchor)

  The round-1 fix to the pixel-art scope boundary now reads: "additional restrained, interactive pixel-art moments (a small interactive element, a footer signature glyph, a section-divider motif) are permissible during planning if they preserve the executive register." This contradicts two pre-existing Success Criteria: "The cumulative motion budget of the page reads as one playful interactive flourish (the cursor spotlight) plus reactive state changes," and "every animation on the page either responds to a deliberate user action ... or is the one named playful flourish." If planning takes the new permission and adds a footer signature glyph that responds to interaction, the page carries two interactive flourishes and the SC is violated by a decision the brief explicitly permits. The brief needs the founder to resolve which holds: (a) tighten the SC to count only the cursor spotlight as the canonical flourish, with other restrained moments permitted but not counted against the flourish budget; (b) close the scope boundary again to forbid additional interactive pixel-art moments; (c) accept the contradiction as a planning-time judgment call with the SC re-cast as advisory rather than hard.

  <!-- dedup-key: section="scope boundaries success criteria" title="pixelart rewording opens contradiction with the one playful flourish success criterion" evidence="Scope Boundaries: \"additional restrained, interactive pixel-art moments... are permissible during planning if they preserve the executive register.\" Success Criteria: \"one playful interactive flourish (the cursor spotlight) plus reactive state changes.\"" -->

- **Pixel-art rewording shifts identity bet from "minimal" to "curated multi-touchpoint" without naming the bet (dependent)** — Scope Boundaries (P2, product-lens, adversarial, confidence 75)

  The original boundary was unambiguous (cursor spotlight + ASCII grid IS the equivalent). The revised boundary opens a category — interactive pixel-art moments permissible during planning — that changes the brief's identity bet from "one carefully-named playful surface against an otherwise restrained executive register" to "a small constellation of restrained interactive playful surfaces." This is a meaningful positioning shift with downstream implications the doc doesn't name: maintenance surface grows; the Cavaro-substrate-plus-Stripe-Press-foreground identity bet now has a third layer; the brief lets planning decide without naming the criterion for "preserves the executive register." If the founder's intent was a real concession, the brief should name a pre-approved exemplar so planning applies the same intent rather than improvising. If the intent was rhetorical softening, the boundary should reflect the narrower permission.

  <!-- dedup-key: section="scope boundaries outside this redesigns identity" title="pixelart rewording shifts identity bet from minimal to curated multitouchpoint without naming the bet" evidence="Scope Boundaries: \"The cursor spotlight against the ASCII grid is the founder's current maximum playful flourish - additional restrained interactive pixel-art moments... are permissible during planning if they preserve the executive register.\"" -->

- **Pixel-art permissibility is a scope boundary that does not bound (dependent)** — Scope Boundaries (P1, scope-guardian, confidence 75)

  "Permissible during planning if they preserve the executive register" is a permission with no testable criterion. The same brand-guardian lens that rejected the SaaS-vocabulary moves in the original comparative analysis will reject any concrete pixel-art proposal that lands on a planner's desk under the same "preserves the executive register" bar — the practical ceiling is unchanged. If the rewording is real, the brief needs a pre-approved exemplar (a specific footer glyph or section-divider motif that is pre-cleared as in-bounds) or a named arbiter distinct from the brand-guardian lens.

  <!-- dedup-key: section="scope boundaries outside this redesigns identity" title="pixelart permissibility unbounded by testable criterion" evidence="Scope Boundaries: \"additional restrained, interactive pixel-art moments... are permissible during planning if they preserve the executive register.\"" -->

- **Monogram rationale contradicted by R16 favicon AND Success Criterion bullet 3** — Key Decisions, R14, R16, Success Criteria, Scope Boundaries (P1, product-lens, adversarial, confidence 100, +1 anchor)

  The round-1-revised monogram rejection rationale ("introducing a second mark would split equity rather than concentrate it") fails its own internal consistency. R16 mandates a favicon mark derived from the wordmark — specifically "the 'C' form rendered at favicon scale" — which IS a monogram in functional terms: a reduced identity atom for surfaces the wordmark won't fit. Success Criterion bullet 3 says "a recipient could identify it as Capita from a glance, without reading the wordmark" — which requires a non-wordmark identity atom (the canonical monogram function). The doc simultaneously rejects monograms on split-equity grounds, mandates building a wordmark-derived monogram for favicon, and names monogram-function as a success criterion. Counter-evidence to the strategic claim: monogram-plus-wordmark systems at peer firms (Goldman Sachs square, HSBC hexagon, LV, Chanel CC) concentrate equity by repeating the same identity at different scales — brand-strategy literature treats this as reinforcement, not dilution. Resolution paths: (a) acknowledge the favicon mark IS a monogram and revise R14's rationale, (b) drop SC bullet 3, (c) introduce a wordmark-derived form mark in scope for thumbnail surfaces specifically (distinct from a separately-designed identity atom).

  <!-- dedup-key: section="key decisions r14 r16 success criteria scope boundaries" title="monogram rationale contradicted by r16 favicon and og card glance recognition sc" evidence="Key Decisions: \"introducing a second mark would split equity rather than concentrate it.\" R16: \"The favicon mark is derived from the existing wordmark (typically the 'C' form rendered at favicon scale)\" Success Criteria: \"a recipient could identify it as Capita from a glance, without reading the wordmark.\"" -->

---

## Sources / Research

- Comparative analysis workflow `capita-vs-browserbase`, executed 2026-06-03. 34 agents across a 10-dimension pipeline (Extract browserbase principles → Audit capita against principles → Translate to advisory context) + a synthesis pass + three adversarial premium-brand lenses (CFO trust, brand-rules guardian, cohesion-and-craft). Inputs: full-page and viewport-top screenshots of capitatech-web at the `feat/two-brand-launch` branch tip and browserbase.com, at 1440 desktop and 390 mobile, plus the implementation surface files below.
- Browserbase reference site: `https://www.browserbase.com/`
- Prior brief: `docs/brainstorms/2026-05-14-capita-cavaro-visual-redesign-requirements.md` (Cavaro-idiom visual redesign).
- Editorial-redesign brief that the Cavaro brief superseded: `docs/brainstorms/2026-05-04-capita-editorial-redesign-requirements.md` (retained for context only; not load-bearing).
- 2026-05-26 design-session handoff: `docs/operational/session-handoff-2026-05-26.md`.
- Implementation surface: `src/pages/index.astro` (page content + ASCII grid pre-render), `src/styles/global.css` (design tokens, plates, controls), `src/layouts/Layout.astro` (head, OG meta, font loading, spotlight script).

---

## Plan-time resolutions (2026-06-03, U-16)

These resolutions land via the implementation plan at `docs/plans/2026-06-03-001-feat-browserbase-benchmark-improvements-plan.md`. Each entry below carries the resolution and the plan section that holds the authoritative form. The original requirement and acceptance-example text above stays as the historical record; the plan is the source of truth where the two disagree.

### Requirements — resolution deltas

- **R10 — Capita blue role-count.** Hard invariant adopted: blue retains brand wordmark + focus rings across every palette variant. Per-variant role counts: Default/A = 5, B = 4, C = 4, D = 4. Authoritative table in plan **KTD-8**.
- **R14 — Wordmark surface scoping.** Surface scoping resolves the round-2 monogram contradiction: favicon, apple-touch-icon, and PWA manifest icons render a wordmark-derived reduction (the "C" form at icon scale) and are not a "separately-designed monogram" for R14's purposes; header, hero, footer plate, R17 band, trust-strip context, and OG-card composition area all render the wordmark complete. Authoritative form in plan **KTD-8 + Scope Boundaries (revised) + AE6 (revised)**.
- **R15 — OG card mark clause.** The "optional ASCII-derived typographic mark (hairline rule or 8×12 dot cluster)" sub-option is struck. The OG card carries wordmark + H1 + substance line and terminates without a corner mark. Authoritative form in plan **KTD-1 + AE5 (revised) + U-12 composition**.
- **R21 — Trust-strip ink and ratio.** The 60%-opacity composite (which round-2 flagged as a ~3.0:1 AA failure) is replaced by `color: color-mix(in srgb, var(--text) 60%, var(--bg))`. Computed value `#6d6d6e`. Contrast against white hero plate = 5.17:1. WCAG AA pass at 14–15px. Authoritative form in plan **KTD-4 + AE10 (revised)**.
- **R22 — Dependency graph.** R22 names the co-deploy set; the plan's "Build sequence (R22 dependency graph)" section enumerates the unit-level order (U-1 → U-3/U-4/U-5 → U-6 → U-7 → U-8 → U-9 → U-10/U-11/U-13/U-14 → U-12 → U-2 → U-15 → founder selection + ratification → U-16 → R22 production deploy). Authoritative form in plan **Build sequence**.
- **R25 — ASCII grid ARIA contract.** `role="presentation"` is dropped per WAI-ARIA 1.2 conflict resolution + axe-core's `presentation-role-conflict` rule. The grid ships `aria-hidden="true"` alone, with `inert` as a belt-and-braces addition. Authoritative form in plan **KTD-6 + AE11 (revised)**.

### Acceptance Examples — revisions

- **AE3 (revised).** Hero region at 1440 desktop and 390 mobile renders exactly two filled CTAs (`.btn-primary` + `.btn-secondary`). The header `.nav-cta` demotes to a plain-text tertiary control outside the hero region. Form submit is a third filled CTA in the contact section, outside the hero. Authoritative form in plan **AE3 (revised)**.
- **AE5 (revised).** OG card composition: wordmark upper-left, hero H1 at display scale with `unleash` in the variant's emphasis colour (default + B + C = `tokens.accent` blue; A + D = `tokens.highlight` magenta), one substance line beneath. No ASCII-derived corner mark, no hairline rule, no dot cluster, no ASCII grid texture, no cursor spotlight, no photograph, no gradient, no separately-designed monogram, no decorative typographic glyphs.
- **AE7 (revised).** Founder evaluates the four palette variants via the in-page `PaletteToggle` component on a Vercel preview, at 1440 desktop + 390 mobile. Selection persists across navigation via `localStorage`; `?palette=a|b|c|d` URL query lets the founder share a preview link with a specific variant pre-selected. Selection retires unused variants and the toggle component in the same commit ahead of R22.
- **AE7a (new).** R22 production deploy contains no `PaletteToggle`, `palette-toggle`, or `data-palette=` references in `dist/index.html` or bundled JS. Variant CSS rules for the winning variant survive in the bundled stylesheet; rejected variants' override blocks delete alongside the toggle.
- **AE10 (revised).** Trust strip ink renders at `#6d6d6e` (`color-mix(in srgb, var(--text) 60%, var(--bg))`) over the white hero plate. Contrast 5.17:1, AA pass for normal text at 14–15px. Mobile wrap-gate at ≤480px caps `max-width` at 36ch so the strip wraps to ≤2 lines.
- **AE11 (revised).** axe-core scan returns no `presentation-role-conflict` warning. The grid ships `aria-hidden="true"` (and `inert`); `role="presentation"` is absent. Accessibility tree exposes no text content for the grid element or its descendants.

### Scope Boundaries — closure

- **Pixel-art permissibility (round-2 question closed).** The original boundary is restored: the cursor spotlight against the ASCII grid is the founder's maximum playful flourish for this pass. Additional restrained interactive pixel-art moments are not permitted in this pass; future candidates surface as planning questions for subsequent passes. Closes the round-2 "preserves the executive register" permissibility gap; consistent with the Success Criteria one-flourish budget.

### Round-2 outstanding question — struck

- **R21 60% opacity AA failure.** Resolved by KTD-4. The 60% opacity formulation in R21 is superseded by the `color-mix` form. The outstanding-question entry stays in the historical record above; the operative implementation follows the plan.
