---
date: 2026-05-14
topic: capita-cavaro-visual-redesign
supersedes: docs/brainstorms/2026-05-04-capita-editorial-redesign-requirements.md
---

# Capita Technology — Cavaro-idiom visual redesign

## Summary

Redesign the existing Capita advisory landing page on its current Astro 6.2 + Tailwind 4 + Vercel stack. Same five-section content shape (hero → method → outcomes → FAQ → contact, plus logo grid; founder section flagged off), repainted with a chunky-control + full-bleed cursor-spotlight ASCII grid system borrowed from the Cavaro landing page. White-black-Capita-blue dominant; magenta reserved for the spotlight hot center and one hero word. Inter for body, Geist for display and the recurring kinetic phrase.

---

## Problem Frame

The current `feat/capita-editorial-redesign` branch was modeled on humanlyagile.com's editorial-magazine idiom — asymmetric staggered sections, generous whitespace, restrained type. The branch shipped through U10 (kinetic phrase dividers), a P0/P1 fix pass, and a final color restoration that pulled blue + magenta back as accents. The founder rejects the editorial framing as the underlying bet: the result reads as conservative rather than confident, and the design hypothesis no longer matches the founder's sense of how the firm should present.

Capita serves senior execs in regulated industries (telco, banking, insurance, property, SaaS) where buying decisions form in seconds against perceived seriousness, craft, and distinctiveness. Mobile is the stated primary entry surface ("a lot of clients will start there"). The URL will be shared on socials, so OG/meta artifacts are first impressions in their own right, not afterthoughts. Content has been refined across the prior brainstorm cycle and is treated as correct; only the visual system is in motion.

---

## Actors

- A1. Prospect: senior exec or sponsor at a target firm. Lands on the page via a shared social link, search, or referral. Evaluates Capita's seriousness and fit in under a minute, then either books a discovery call via the contact form, leaves, or pockets the URL.
- A2. Sharer: the founder or anyone amplifying Capita's reach by pasting the URL into LinkedIn, X, Slack, or email. Their share *is* the OG image; the prospect's first impression is the thumbnail, not the page.

---

## Key Flows

- F1. Cold mobile prospect via social share
  - **Trigger:** A2 shares URL on LinkedIn or X; A1 taps the preview card on mobile
  - **Actors:** A1, A2
  - **Steps:** OG card renders in the feed → A1 taps → page loads on mobile → hero renders with ASCII grid + idle-drift spotlight → A1 reads manifesto and scans method → scrolls through outcomes/FAQ → either taps a CTA, taps back-to-top, or leaves
  - **Outcome:** A1 forms a "premium, distinctive, considered" impression in under a minute and either acts or leaves with the URL retained
  - **Covered by:** R3, R5, R7, R15, R18, R20, R21

- F2. Desktop prospect, cursor-engaged
  - **Trigger:** A1 lands on desktop browser with a cursor present
  - **Actors:** A1
  - **Steps:** Page loads → idle-drift spotlight starts → A1 moves cursor → spotlight tracks the cursor → cursor leaves the viewport → idle drift resumes within one frame → A1 scrolls through body → grid calms to ambient texture, body copy renders crisply over white plates → kinetic phrase signature appears at the section break
  - **Outcome:** A1 experiences the cursor-driven spotlight signature without it competing with body reading
  - **Covered by:** R3, R4, R5, R14

- F3. Contact submission
  - **Trigger:** A1 decides to engage and reaches the contact section
  - **Actors:** A1
  - **Steps:** A1 fills name, email, country (defaults to AU +61), optional phone, optional message → submits → existing Formspree endpoint receives the payload → success message displays → form resets
  - **Outcome:** A1's enquiry reaches the founder via the existing Formspree contract
  - **Covered by:** R11

---

## Requirements

**Stack and content inheritance**

- R1. The redesign ships on the existing Astro 6.2 + Tailwind 4 + Vercel stack. No framework, package-manager, or hosting migration is performed.
- R2. The current branch's content is preserved verbatim: hero copy, four method blocks, three outcomes, five FAQ entries, contact form fields and behavior, eight logo PNGs, and the founder section (flagged off). Only presentation changes.

**ASCII grid and spotlight**

- R3. A full-bleed, viewport-fixed ASCII grid renders behind the entire page. Grid contrast is full intensity behind the hero and footer; low-contrast / ambient texture behind body sections (logo grid, method, outcomes, FAQ, contact).
- R4. Body sections sit on translucent white plates that keep copy crisply legible over the ambient grid. The plate treatment is consistent across all body sections.
- R5. Spotlight mechanism mirrors Cavaro: a radial gradient (magenta hot center → Capita blue → foreground ink → transparent) is clipped to the grid glyphs via `background-clip: text`. `(hover: hover) and (pointer: fine)` gates cursor tracking. On touch-only devices and on `mouseleave`, the spotlight uses a Lissajous-orbit idle drift (X full period ≈ 4500ms, Y at 0.7× frequency and 0.65× amplitude, radius `min(width, height) * 0.42`, center at viewport center).
- R6. Under `prefers-reduced-motion: reduce`, the spotlight is fully suppressed — the grid renders as a static dot tint with no gradient and no animation loop.

**Color and type**

- R7. Color palette is restricted to white (`#ffffff`), black/ink (`#0b0b0d`), Capita blue (`#0078f0`), and magenta (`#d946ef`). No other accent colors are introduced.
- R8. Magenta is used in exactly three places on the page: the spotlight gradient's hot center, exactly one chosen word in the hero H1 (marked treatment, mirroring Cavaro's `<mark class="why-mark">`), and `::selection`. Magenta does not appear as a focus ring, button fill, brand mark, link color, or section punctuation.
- R9. Type system pairs Inter Variable (body, eyebrows, UI, form labels) with Geist (display headlines and the recurring kinetic phrase). Inter is loaded via `@fontsource-variable/inter` (already a dependency); Geist is loaded via the official `geist` npm package. Coral Pixels and Stack Sans Notch Variable (Cavaro's typefaces) are not used.

**Controls, forms, and chunky idiom**

- R10. Buttons, inputs, the country picker, and form controls use the Cavaro chunky idiom: thick border (`clamp(1.8px, 0.225vw, 2.7px)` as a starting reference), 10–14px radius, hard offset shadow (`clamp(2.7px, 0.36vw, 3.6px)`), scale-on-active (`scale(0.98)`), focus ring uses Capita blue. The pill-rounded buttons and soft-shadow cards from the current branch are replaced.
- R11. The existing contact form behavior is preserved exactly — name, email, country picker with type-ahead defaulting to AU +61, phone validation, optional message, honeypot, control-character stripping, length caps, and POST to `https://formspree.io/f/xojdzarv`. Only the visual treatment changes: every field and the submit button adopt the chunky idiom.

**Page structure**

- R12. Single-route long-scroll page. Section order from top to bottom: sticky header → hero → logo grid → method (4 blocks) → kinetic-phrase divider → outcomes → FAQ → contact → footer. The founder section is wired but flagged off; the flag flips when copy and photo land in a future change.
- R13. The sticky header is preserved (with backdrop-blur) and restyled to the new type and color system. The brand mark in the header uses the Capita wordmark in Capita blue. On narrow widths the header collapses to brand-mark only if nav links don't fit.
- R14. A recurring kinetic-phrase signature appears between hero and contact as at least one section break. The phrase is rendered in Geist with a real motion treatment (scroll-driven horizontal travel or slow marquee — planning resolves which). Under `prefers-reduced-motion: reduce`, the phrase renders static.
- R15. A back-to-top button appears in the bottom-right after the user scrolls past the first viewport. The button uses the chunky idiom (thick border + hard offset shadow), is icon-led ("↑" or equivalent), white background with Capita-blue accent on hover/focus. Click smoothly scrolls to top; under `prefers-reduced-motion: reduce`, scroll is instant.

**Animation and motion budget**

- R16. Animations are limited to: state changes (button press, FAQ accordion open/close, form focus and validation, back-to-top reveal), the spotlight (per R5–R6), and the kinetic-phrase signature (per R14). Scroll-triggered section reveals, page-load hero entrances, parallax, and decorative hover-region effects are not introduced.
- R17. Every animation respects `prefers-reduced-motion: reduce`. Transitions reduce to ≤ 0.01ms duration; loops do not start.

**Mobile and responsiveness**

- R18. The page is mobile-first. Single-column collapse across all sections at narrow widths. Touch targets meet a ≥ 44 × 44 px minimum. Chunky-control border and shadow scale gracefully via `clamp` so the system does not feel fat on small screens or thin on ultrawide.
- R19. The back-to-top button positions clear of the footer band and content padding on mobile. The kinetic phrase remains readable on narrow widths (no off-canvas truncation on the static fallback; if marquee motion overflows, it does so deliberately).

**Social meta and OG**

- R20. The page ships with a static 1200 × 630 PNG OG image. Composition: white background, Capita's black-ink ASCII texture, "Capita" wordmark centered in Capita blue. A subtle magenta glow may sit behind the wordmark only if it does not compromise wordmark contrast. Treatment is monochrome-confident with one blue hit.
- R21. Open Graph and Twitter Card meta tags are present and correct: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`, `twitter:card` = `summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`. The same OG PNG is used for both surfaces.
- R22. Favicon set ships in standard formats: SVG favicon, 32 × 32 PNG, 180 × 180 apple-touch-icon, `manifest.json` with `theme-color` set to Capita blue. `<meta name="theme-color">` matches.

**Accessibility and performance**

- R23. Accessibility floor: skip link, ARIA landmarks, keyboard-accessible FAQ accordion (single-open behavior preserved from the current branch), accessible form labels and live regions, focus-visible across all interactive elements, all text meeting WCAG AA contrast over its actual background — including over the translucent white plates and the calmed ASCII grid.
- R24. Performance gate: LCP ≤ 2.5s on Lighthouse mobile p75 of 5 runs against a Vercel preview deployment. The ASCII grid is server-rendered text (no client-side grid generation); fonts are self-hosted as variable files; no client-side JS framework is introduced.

---

## Acceptance Examples

- AE1. **Covers R5, R6.** Given a user has `prefers-reduced-motion: reduce` set, when the page loads on any device, the ASCII grid renders as a static dot tint with no gradient drawn and no `requestAnimationFrame` loop running.
- AE2. **Covers R5.** Given a touch-only device (the page fails the `(hover: hover) and (pointer: fine)` match) and motion is not reduced, when the page loads, the spotlight starts a Lissajous idle drift centered on the viewport center and continues indefinitely. No `mousemove` listener is attached.
- AE3. **Covers R5.** Given a desktop browser with a cursor and motion is not reduced, when the user moves the mouse over the page, the spotlight tracks the cursor; when the cursor exits the viewport via `mouseleave`, the idle drift resumes within one frame.
- AE4. **Covers R8.** Given the page renders and the cursor is parked off-canvas, when a screenshot is taken, magenta is visible in at most two places: the marked word in the hero H1 and (when motion is allowed) the hot center of the idle-drift spotlight. No other element on the page is magenta.
- AE5. **Covers R11.** Given a prospect submits a valid contact form, when the request resolves, the existing Formspree endpoint receives the payload with the same field names and shape as the current branch; the success message displays; the form resets.
- AE6. **Covers R15.** Given a user has scrolled past the first viewport, when they look at the bottom-right area, the back-to-top button is visible and tappable; when they activate it, the page scrolls smoothly to the top under default settings, or instantly under `prefers-reduced-motion: reduce`.
- AE7. **Covers R20, R21.** Given a sharer pastes the URL into a LinkedIn or X post, when the platform fetches the metadata, the rendered preview shows the 1200 × 630 OG image (white + ASCII texture + blue wordmark) with the configured title and description; both LinkedIn (large card) and X (`summary_large_image`) render correctly.
- AE8. **Covers R23.** Given a user navigates the FAQ using only the keyboard, when they activate any question with Enter or Space, the corresponding panel expands, any previously open panel collapses, `aria-expanded` updates, and focus remains visible.

---

## Success Criteria

- The founder feels the redesign accurately represents Capita's positioning and would unhesitatingly paste the URL into LinkedIn or send it to a CFO without caveat.
- A senior exec landing on the page on mobile forms a "premium, distinctive, considered" impression within the first viewport and first scroll — distinct from generic-advisory perception.
- Contact-form completion rate does not regress versus the current branch.
- LCP on Lighthouse mobile p75 stays at or below 2.5s on a Vercel preview deployment.
- `ce-plan` can produce an implementation plan from this document without inventing product behavior, section content, scope boundaries, or visual rules.

---

## Scope Boundaries

- Multi-page architecture — no `/work`, `/about`, `/insights`, `/contact`, or similar routes.
- Case studies (named, anonymized, or composite).
- Real founder photo and bio copy — the section ships under its existing flag, gated until copy and photo are ready in a future change.
- Custom illustration commissioning or sourcing.
- CMS introduction.
- Blog or insights content stream.
- Stack migration — already on Astro 6.2 + Tailwind 4 + Vercel; framework, package manager, and hosting are not in motion.
- New colors beyond white, black, Capita blue, and magenta.
- Coral Pixels and Stack Sans Notch Variable (Cavaro's typefaces).
- Cavaro's `html { font-size: 144% }` rem-multiplier rule — Capita renders at default root font size.
- Dynamic OG image generation (Vercel/og, satori) and per-section OG variants.
- Page-load hero entrance animations, scroll-triggered section reveals, parallax, and decorative hover-region motion.
- Changes to the contact form's API contract, Formspree endpoint, anti-spam mechanisms, or country-code data.
- Changes to the FAQ accordion's single-open behavior or its keyboard contract.
- Re-litigating the previous brainstorm's premise debates (founder voice, anonymized vignettes, positioning rework, single-page architecture trade-off).

---

## Key Decisions

- **Visual reskin, content unchanged.** The content has been refined across the prior cycle; the visual direction is the bet that needs to land.
- **Cavaro idiom imported as a system, not cloned.** Chunky controls, cursor-spotlight ASCII grid, and the white/black/blue/magenta palette come across whole. Cavaro's typefaces, root font-size doubling, and single-screen architecture do not.
- **Geist replaces Coral Pixels as the display face.** Pixel-display reads as Cavaro-specific; a clean geometric sans pairs with Inter and avoids visual mimicry while staying inside the same modern-confident family.
- **Magenta is felt, not seen on a static screenshot.** Spotlight hot center + one hero word + selection mirrors Cavaro's restraint and keeps magenta from drifting into a "system color" role.
- **ASCII grid is full-bleed and fixed across the whole page, calmed in body sections.** Keeps the signature present without sacrificing legibility on a long-form advisory landing page; body copy sits on translucent white plates.
- **Animation budget is reactive states + one kinetic-phrase signature.** Senior-exec audiences read excess motion as startup-y; one signature moment is enough to land identity.
- **OG image is static and visual-first.** A single-route site does not justify dynamic OG; one designed thumbnail does the share-surface job across LinkedIn, X, Slack, and email.
- **Sticky header preserved.** The page is long-scroll; the reader needs an anchor.
- **This brainstorm supersedes the 2026-05-04 editorial-redesign requirements doc.** Visual direction is reset; prior content decisions stand, but the editorial-magazine visual hypothesis is rejected.

---

## Dependencies / Assumptions

- The existing Formspree endpoint `https://formspree.io/f/xojdzarv` continues to operate; submission contract unchanged.
- Existing logo assets at `public/logos/logo-01.png` … `public/logos/logo-08.png` are reused; no new logos sourced.
- The Cavaro landing page repo at `/Users/mitch/Documents/GitHub/cavaro-landingpage-web` remains accessible during planning so the spotlight mechanism, chunky-control tokens, and animation timings can be inspected. The mechanism is borrowed; exact gradient stops, shadow values, and clamp ranges may be re-tuned for Capita's palette and default root font size.
- The `geist` npm package ships variable sans + mono under a permissive license suitable for production use. If a version pin or subset is required, planning resolves it.
- Capita's content is treated as correct at the current branch tip — hero, method blocks, outcomes, FAQ entries, contact form copy, logo set. Copy edits are out of scope for this redesign.
- The hero word chosen for the magenta-mark treatment is a content decision resolved during implementation by the founder once the rendered hero is visible.
- The LCP ≤ 2.5s target is achievable on Vercel with self-hosted variable fonts (Inter + Geist), server-rendered ASCII grid markup, and no client-side JS framework.
- A claim of "no client-side grid generation" (R24) assumes the current Cavaro pattern — ASCII grid is built at render time in the Astro front-matter and emitted as a `<pre>` — translates directly to Capita; planning verifies this matches the existing `index.astro` pattern in Capita as well.

---

## Outstanding Questions

### Deferred to Planning

- [Affects R14][Technical] Kinetic phrase motion type — scroll-driven horizontal translate (driven by IntersectionObserver or scroll-timeline / View Timeline API) vs CSS marquee animation. Both are in-scope; planning picks one against browser-support, performance, and reduced-motion behavior.
- [Affects R15][Technical] Back-to-top button — icon-only vs short-label, exact offset values from viewport edges across breakpoints, smooth-scroll implementation (CSS `scroll-behavior: smooth` on the document vs JS `window.scrollTo({ behavior: 'smooth' })` from a click handler).
- [Affects R20][Needs research] OG image production — designed in a vector tool and exported as a static PNG, or generated once via a build-time Node script using satori/sharp. Either is acceptable; planning picks based on iteration cost.
- [Affects R8][User decision] Which word in the hero H1 carries the magenta mark. Resolved during implementation by the founder when reviewing the rendered hero on real type.
- [Affects R3, R4][Technical] Translucent white plate treatment under body sections — opacity, optional backdrop-blur, border, padding, and how the plate edges meet adjacent sections. Resolved during planning visual prototyping against the calmed-grid contrast.
- [Affects R7, R10][Technical] Whether the Tailwind 4 `@theme inline` tokens get refactored to align with Cavaro's `--chunky-*` and `--accent`/`--highlight` naming, or stay with the current Capita token names. Naming-only decision; resolved by planning.
- [Affects R12][Technical] Whether the logo grid keeps its current `#experience` section id and structure or is restyled in place with the same id retained for anchor-link compatibility.
