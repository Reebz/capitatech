---
title: "feat: Capita Cavaro-idiom visual reskin — chunky controls, ASCII spotlight, Geist display"
type: feat
status: active
date: 2026-05-14
origin: docs/brainstorms/2026-05-14-capita-cavaro-visual-redesign-requirements.md
supersedes: docs/plans/2026-05-04-001-feat-capita-editorial-redesign-plan.md
---

# feat: Capita Cavaro-idiom visual reskin

## Summary

Implementation plan for the Cavaro-idiom visual reskin of capitatech.com.au on the existing Astro 6.2 + Tailwind 4 + Vercel stack. Seven units repaint the existing site with a chunky-control idiom + full-bleed cursor-spotlight ASCII grid + Inter/Geist type pairing + white/black/Capita-blue palette with magenta as a select highlight, plus a complete social-meta surface and a back-to-top control. Content is preserved verbatim from the current branch; only presentation changes.

---

## Problem Frame

The current `feat/capita-editorial-redesign` branch shipped an editorial-magazine direction (humanlyagile-inspired, asymmetric, restrained type) that the founder rejects on look-and-feel grounds. This plan replaces that direction in place with a chunky-control + ASCII-spotlight system borrowed from the Cavaro coming-soon page, while preserving all current-branch content (hero, method, outcomes, FAQ, contact, logo grid; founder section flagged off) and the existing Formspree contact-form contract.

See origin: `docs/brainstorms/2026-05-14-capita-cavaro-visual-redesign-requirements.md`.

---

## Plan-Time Concerns (FYI)

Document review of the origin brainstorm surfaced premise-level concerns the user routed to plan-level review rather than acting on at brainstorm time. They are not blockers for this plan but should inform pre-merge validation and post-merge review. Re-engage `ce-brainstorm` if any of these warrants revisiting before implementation.

- **Pivot premise rests on founder-feel; no buyer signal cited.** The pivot from the editorial direction (~10 commits) is grounded in founder reaction, not buyer interviews or analytics. The same "founder feels accurately represented" gate reappears as Success Criterion #1 in the origin. Without an external validation step before merge, the falsification pattern that rejected the editorial direction could repeat — a third full redesign within 30 days is structurally possible. **Recommended:** 1–3 read-aloud sessions with past prospects or peers shown the Vercel preview before main-merge.
- **"Distinctive" as the buying axis is asserted, not defended.** The prior plan's FYI flagged that senior execs in regulated industries typically screen for operator credibility, domain fit, social proof, and thesis specificity, treating visual polish as hygiene. This plan implements visual distinctiveness as the bet; the content-level levers (anonymized vignettes, named operator credibility, thesis specificity) remain out of scope per origin Scope Boundaries.
- **Cavaro is a coming-soon page; its system is imported whole onto a 5-section advisory page.** Origin R3/R4 already concede the imported mechanism doesn't fit unmodified (calmed-intensity body, translucent white plates). The plan resolves these as concrete units, but the broader fit-risk persists. The magenta-as-felt thesis is also weakened by dropping Coral Pixels — Cavaro's gradient is blue-dominant (magenta only 0–35% of the spot radius), and without Coral Pixels' pixel-display "WHY" mark, magenta lands less visibly. The plan accepts this and provides re-tuning levers (gradient stops, mark word, mark size) as implementation knobs.
- **Mobile-first premise rests on founder hunch; no analytics cited.** R18 (mobile-first) + R24 (LCP mobile-p75 ≤ 2.5s gate) anchor on "I expect a lot of clients will start there." If analytics on capitatech.com.au shows desktop-dominant, the gate is anchored to the wrong target. **Recommended:** pull traffic split before merge.
- **The signature mechanic is richest on desktop while the doc names mobile primary.** The cursor-spotlight only fires on `(hover: hover) and (pointer: fine)`. Mobile gets ambient idle-drift, not a user-driven mechanic. Flagged as Risk in the relevant unit; consider a touch-bloom follow-up if post-deploy review finds the mobile signature flat.
- **Contact-form completion criterion has no baseline.** Origin Success Criterion #3 ("contact-form completion rate does not regress") is unfalsifiable without a baseline. Verification Strategy below records a baseline-capture step.

---

## Requirements Trace

| Origin ID | Where addressed | Notes |
|---|---|---|
| R1 (stack) | Pre-existing | No migration unit; Astro 6.2 + Tailwind 4 + Vercel in place |
| R2 (content preserved) | U3, U4, U5, U7 | Markup ports content verbatim |
| R3 (ASCII grid full-bleed; intensity tiers) | U2 | Body-class toggle via IntersectionObserver on hero/footer sentinels |
| R4 (translucent white plates) | U4 | `rgba(255,255,255,0.96)` + `backdrop-filter: blur(2px)` + `@supports` fallback |
| R5 (spotlight mechanism) | U2 | Cavaro pattern + mid-session matchMedia listener |
| R6 (reduced-motion suppression) | U2 | Full static fallback; no rAF loop |
| R7 (palette restricted) | U1 | `--bg`, `--text`, `--accent`, `--muted`, `--highlight` |
| R8 (magenta rule) | U1 (tokens), U3 (hero mark), Layout.astro (::selection) | Three-when-motion-allowed, two-under-reduced-motion |
| R9 (Inter + Geist) | U1 | `@fontsource-variable/inter` (existing) + `@fontsource-variable/geist` (new) |
| R10 (chunky idiom) | U1, U5, U7 | Buttons, inputs, country picker, FAQ, back-to-top |
| R11 (contact form preserved) | U5 | Field shape + Formspree endpoint unchanged; reset fix + per-field aria-describedby |
| R12 (section order; founder flagged off) | U3, U4, U5 | Single-route long-scroll preserved |
| R13 (sticky header + backdrop-blur) | U7 | Restyled; nav-CTA preserved on mobile |
| R14 (kinetic phrase) | U5 | Scroll-driven horizontal translate via IntersectionObserver |
| R15 (back-to-top button) | U7 | IntersectionObserver sentinel + JS smooth-scroll with reduced-motion guard |
| R16 (animation budget) | All units | Reactive states + spotlight + one kinetic moment |
| R17 (reduced-motion) | All units | Honored throughout |
| R18 (mobile-first) | All units | Single-column collapse, 44px touch targets, clamp-scaled chunky |
| R19 (back-to-top mobile clearance) | U7 | Clamp offsets clear footer band |
| R20 (OG image) | U6 | Static 1200×630 PNG, externally produced |
| R21 (OG + Twitter meta) | U6 | Full tag block in Layout.astro `<head>` |
| R22 (favicon set) | U6 | SVG + 32×32 PNG + 180×180 apple-touch + manifest.json |
| R23 (a11y floor) | All units; especially U5 | Skip link, ARIA, focus-visible, WCAG AA over actual backgrounds, per-field error attribution |
| R24 (LCP ≤ 2.5s) | Verification Strategy | Lighthouse mobile p75 of 5 runs; server-rendered ASCII grid only |
| A1 (Prospect), A2 (Sharer) | F1–F3 flows | Both addressed across units |
| F1 (cold mobile share) | U3, U7, U6 | Hero idle-drift + back-to-top + OG card |
| F2 (desktop cursor) | U2 | Cursor tracking + idle resume |
| F3 (contact submission) | U5 | Formspree-preserving |
| AE1–AE8 | Test scenarios in units | Linked via `Covers AE<N>` |

---

## Output Structure

```
src/
  layouts/Layout.astro            [modified — head/meta, fonts, ASCII grid, scripts, header, footer]
  pages/index.astro               [modified — hero, sections, kinetic divider, contact, back-to-top]
  styles/global.css               [modified — tokens, chunky controls, type, plates, grid, components]
public/
  og-image.png                    [new — 1200×630 static OG asset]
  favicon.svg                     [new]
  favicon-32.png                  [new]
  apple-touch-icon.png            [new — 180×180]
  manifest.json                   [new]
docs/
  plans/2026-05-14-001-feat-capita-cavaro-visual-reskin-plan.md   [new — this plan]
  plans/2026-05-04-001-feat-capita-editorial-redesign-plan.md     [modified — frontmatter status: superseded]
package.json                      [modified — add @fontsource-variable/geist]
```

Root-level `index.html`, `styles.css`, `CNAME` are not touched here — see `Deferred to Follow-Up Work`.

---

## Implementation Units

### U1. Foundation — tokens, type system, chunky-control idiom

**Goal:** Establish the design system primitives the rest of the plan builds on — chunky-control tokens, magenta highlight token, the Inter + Geist type pairing, and base button restyle from pill to chunky.

**Requirements:** R7, R8 (tokens), R9, R10, R16

**Dependencies:** None

**Files:**
- `package.json`
- `src/layouts/Layout.astro` (font imports)
- `src/styles/global.css` (token block, chunky-control rules, button restyle, type rules)

**Approach:**
- Add the Cavaro chunky token block to `:root` in `global.css`: `--chunky-border-width: clamp(1.8px, 0.225vw, 2.7px)`, `--chunky-radius: clamp(10.8px, 1.44vw, 14.4px)`, `--chunky-shadow-offset: clamp(2.7px, 0.36vw, 3.6px)`, plus compound tokens `--chunky-border`, `--chunky-shadow`, `--chunky-shadow-accent`, `--chunky-shadow-highlight`.
- Add highlight tokens: `--highlight: #d946ef`, `--highlight-fg: #ffffff`. Keep existing `--bg`, `--text`, `--accent`, `--muted`. Remove any unused accent-adjacent variables.
- Replace `.btn`, `.btn-primary`, `.btn-secondary` with chunky idiom: thick border (`var(--chunky-border)`), radius (`var(--chunky-radius)`), hard offset shadow (`var(--chunky-shadow)`), `transform: scale(0.98)` on `:active`. Primary fills with `var(--accent)`; secondary on white with foreground border. Focus uses `var(--chunky-shadow-accent)` (Capita blue) — never magenta, per R8.
- Add `::selection { background: var(--highlight); color: var(--highlight-fg); }` — the third magenta place.
- Add type roles: `--font-sans` set to `"Inter Variable", system-ui, sans-serif`; `--font-display` set to `"Geist Variable", ui-sans-serif, system-ui, sans-serif`. Body inherits `--font-sans`; a `.display` utility class applies `--font-display` to H1/H2 and the kinetic phrase.
- Install `@fontsource-variable/geist` and import the variable family in Layout.astro alongside `@fontsource-variable/inter`. The Next-specific `geist` npm package is NOT compatible with Astro (peer-dep `next: >=13.2.0`).

**Patterns to follow:**
- Cavaro `src/styles/global.css` chunky token block + chunky-control rules
- Capita Layout.astro existing `@fontsource-variable/inter` import pattern

**Technical design (directional):**

```css
/* New tokens (added to :root) */
--chunky-border-width: clamp(1.8px, 0.225vw, 2.7px);
--chunky-border: var(--chunky-border-width) solid var(--text);
--chunky-radius: clamp(10.8px, 1.44vw, 14.4px);
--chunky-shadow-offset: clamp(2.7px, 0.36vw, 3.6px);
--chunky-shadow: var(--chunky-shadow-offset) var(--chunky-shadow-offset) 0 var(--text);
--chunky-shadow-accent: var(--chunky-shadow-offset) var(--chunky-shadow-offset) 0 var(--accent);
--highlight: #d946ef;
--highlight-fg: #ffffff;
```

*Directional only — exact stops and shadow vectors may be re-tuned for Capita's default root font size.*

**Test scenarios:**
- Primary button visible thick border + hard offset shadow; `:active` triggers scale(0.98) transform within one frame
- Secondary button: same idiom on white background with foreground border
- Selecting any text → magenta `::selection` background appears
- DevTools Computed font-family for body element → Inter Variable resolves before fallbacks; for `.display` → Geist Variable resolves
- Reduced-motion on → `:active` scale transition reduces to ≤0.01ms (no perceptible animation)

**Verification:** Buttons match the Cavaro chunky pattern at desktop and mobile widths. Lighthouse a11y score equals or exceeds the current branch tip.

---

### U2. ASCII grid + cursor-spotlight + idle-drift + reduced-motion

**Goal:** Server-render the deterministic ASCII grid as a full-bleed fixed layer behind the page, and wire the cursor-spotlight + Lissajous idle-drift script with full reduced-motion + mid-session media-query coverage.

**Requirements:** R3, R5, R6, R16, R17, R24

**Dependencies:** U1

**Files:**
- `src/layouts/Layout.astro` — front-matter ASCII generation, `<pre id="ascii-grid">` block, inline spotlight `<script is:inline>`, sentinel elements for the body-class toggle
- `src/styles/global.css` — `.ascii-grid`, `.layer-fg` stacking, `.grid-calm` body-class rules

**Approach:**
- **Server-side grid generation**: in the Astro Layout front-matter, generate 320 cols × 80 rows of deterministically-hashed characters (mix of `·`, `∙`, `+`, `*`, space) using the same hash pattern as Cavaro (`(r * 73856093) ^ (c * 19349663) ^ (r * c * 83492791)`, modulo bucketing). Emit the result as `<pre id="ascii-grid" class="ascii-grid" aria-hidden="true">{ascii}</pre>` placed inside `<body>` before any layered foreground content.
- **CSS**: `.ascii-grid` is `position: fixed; inset: 0; z-index: 0; margin: 0; padding: 0; pointer-events: none; overflow: hidden; user-select: none; font-family: ui-monospace, ...; font-size: clamp(8.1px, 0.99vw, 12.6px); line-height: 1.45; letter-spacing: 0.04em; white-space: pre; will-change: background-image;`. Background is a stack: a radial gradient from `var(--highlight)` 0% → `var(--accent)` 35% → `var(--text)` 75% → transparent 100%, positioned at `var(--mx) var(--my)` with size `var(--spot, clamp(140px, 16vw, 260px))`, layered over a flat `var(--grid-dot-default)` tint (`color-mix(in srgb, var(--text) 8%, transparent)`). Use `background-clip: text; color: transparent; -webkit-text-fill-color: transparent;` to clip the gradient to glyph shapes.
- **Two-tier intensity** (full at hero/footer, calm in body) per R3: maintain a single grid layer; toggle a body class via two IntersectionObservers — one on a sentinel just below the hero, another on a sentinel at the start of the footer. When the hero sentinel exits the top of the viewport AND the footer sentinel has not yet entered from the bottom, the body element gets `.grid-calm`. In CSS, `.grid-calm .ascii-grid` reduces `--grid-dot-default` opacity and dims gradient stops (e.g., `color-mix(in srgb, var(--text) 3%, transparent)` for the dot tint; gradient unchanged because it's only visible at the spotlight position, but its perceived brightness is reduced by the dimmed text-fill color).
- **Foreground stacking**: add `.layer-fg { position: relative; z-index: 1; }` to header, main, footer wrappers.
- **Spotlight script** (`is:inline` so Astro emits verbatim): detect `(hover: hover) and (pointer: fine)` via `window.matchMedia` for cursor-presence, and `prefers-reduced-motion: reduce` for motion. Initial state: idle drift active on touch-only; cursor tracking + idle-fallback active on cursor devices; fully suppressed when reduced-motion.
  - Idle loop: `requestAnimationFrame` updates `--mx`, `--my` along a Lissajous orbit — center at viewport center, X full period ≈ 4500ms, Y at 0.7× frequency and 0.65× amplitude, radius `Math.min(innerWidth, innerHeight) * 0.42`.
  - Cursor mode: `mousemove` updates `--mx`, `--my` directly (throttled to one rAF per frame). `mouseleave` on `document` resumes idle drift within one frame.
  - **Mid-session reactivity** (per ce-doc-review DL2): attach `addEventListener('change', ...)` on both the `(hover: hover) and (pointer: fine)` MediaQueryList AND the `(prefers-reduced-motion: reduce)` MediaQueryList. Toggling either at runtime (OS preference change without reload) updates behavior immediately — cancel rAF, swap mode, redraw.

**Patterns to follow:**
- Cavaro `src/pages/index.astro` lines 9–22 (ASCII generation)
- Cavaro `src/styles/global.css` `.ascii-grid` rules
- Cavaro inline script lines 120–175 (cursor detection + Lissajous) — **augmented** with mid-session matchMedia listeners absent in Cavaro

**Technical design (directional):**

```
[Layout.astro body]
  <pre id="ascii-grid">…(server-rendered text)…</pre>
  <div id="hero-end-sentinel" aria-hidden="true"></div>
  <header class="layer-fg">…</header>
  <main class="layer-fg">…</main>
  <div id="footer-start-sentinel" aria-hidden="true"></div>
  <footer class="layer-fg">…</footer>
  <script is:inline>
    // detect hasMouse, reducedMotion via matchMedia
    // attach 'change' listeners on both
    // idleLoop using rAF + Lissajous
    // mousemove + mouseleave handlers
    // IntersectionObserver on sentinels → toggle body.grid-calm
  </script>
```

*Directional only — actual variable names, observer thresholds, and gradient stops are an implementation concern.*

**Test scenarios:**
- *Covers AE1, R6.* Reduced-motion on at load → grid renders as static dot tint (no gradient drawn); no `requestAnimationFrame` is registered (verify via `performance.timing` and DevTools Performance recording — no animation frame work)
- *Covers AE2, R5.* Touch-only device emulation → idle Lissajous orbit starts at page load; `getEventListeners(window)` shows no `mousemove` listener attached
- *Covers AE3, R5.* Desktop browser with cursor → `mousemove` updates `--mx`, `--my` within one frame; `mouseleave` resumes idle drift within one frame
- Toggle OS reduced-motion preference while page is open (macOS Accessibility settings) → rAF loop stops; gradient disappears within one frame. Toggle off → animation resumes
- Connect a cursor to a previously touch-only device (rare; e.g., iPad keyboard) → mid-session capability change triggers cursor mode; idle drift cancels on first `mousemove`
- Body sections (logo grid through contact) → `.grid-calm` class present on body; gradient + tint perceived as ambient; body text contrast remains WCAG AA over the calmed grid
- Long scroll on desktop Chrome → 60fps maintained per Performance panel (no jank from spotlight loop)

**Verification:** Side-by-side with Cavaro on desktop: spotlight behavior matches. Mobile preview: continuous idle drift. Reduced-motion in DevTools rendering → fully static.

---

### U3. Hero restyle + magenta mark + display type

**Goal:** Restyle the hero section to the new visual idiom: Geist display H1, Inter eyebrow, chunky CTA pair, and a `<mark class="why-mark">` on the chosen hero word.

**Requirements:** R8, R9, R10, R12 (hero), R23

**Dependencies:** U1, U2

**Files:**
- `src/pages/index.astro` (hero block)
- `src/styles/global.css` (`.hero`, `.eyebrow`, `.display`, `.lede`, `.why-mark` rules)

**Approach:**
- Hero markup: `<section class="hero layer-fg">` containing eyebrow (`<p class="eyebrow">AI · Data · Customer Growth</p>`), `<h1 class="display">` with one wrapped word in `<mark class="why-mark">…</mark>`, lede paragraph, and the chunky CTA pair (primary → `#contact`, secondary → `#method`).
- Default mark word: `durable` in "Turn AI, data, and customers into a durable growth system." Founder retains override (origin Outstanding Question on R8).
- `.why-mark` styles (Geist italic, not Coral Pixels):
  - `background: transparent`
  - `color: var(--highlight)`
  - `font-family: var(--font-display)`
  - `font-style: italic`
  - `font-size: 1.06em`
  - `letter-spacing: 0.005em`
  - `padding: 0 0.04em`
  - `text-shadow: 0 0 1px var(--bg), 0 0 2px var(--bg)` — halo for spotlight pass-under separation
- `.display` H1 sized via `clamp(2rem, 5vw, 4rem)`, `line-height: 1.05`, `letter-spacing: -0.015em`.
- `.eyebrow`: Inter, uppercase, `font-size: 0.625rem`, `letter-spacing: 0.2em`, muted color.
- Hero sits on the hot-intensity grid region (no white plate — the grid is the hero background).

**Patterns to follow:**
- Cavaro `mark.why-mark` style — substitute Geist for Coral Pixels
- Current index.astro hero structure (eyebrow → display → lede → actions)

**Test scenarios:**
- *Covers AE4, R8.* Page loaded, cursor parked off-canvas → screenshot shows magenta only on the marked word (idle-drift spotlight invisible at the cursor position). Cursor moves into viewport → magenta hot center appears at cursor position. **Visible magenta at rest:** two when motion allowed (mark + idle-drift spotlight position), one under reduced-motion (mark only — spotlight suppressed; ::selection inactive until the user selects text). This matches origin AE4's "at most two places" framing; the Key Technical Decision's "three places" count includes ::selection as a defined location regardless of whether the user has selected text
- Hero H1 wraps without overflow at 375px viewport
- Tab from page top → reaches primary CTA, then secondary CTA, with visible focus ring (Capita blue, `var(--chunky-shadow-accent)`)
- FOUT check: Geist Variable loads before fallback renders (DevTools Network throttling at Slow 4G — verify fontsource preload mitigates)
- Spotlight passes under the marked word → halo (`text-shadow` to `--bg`) prevents visual merge of mark color with spotlight gradient

**Verification:** Lighthouse a11y on hero passes (focus visible, contrast, accessible name on CTAs). Founder review of the rendered hero with the default mark word confirms acceptable.

---

### U4. Body sections — translucent white plates + section restyle

**Goal:** Wrap body sections (logo grid, method, outcomes) in translucent white plate containers and restyle their content to the chunky idiom + Geist headings. Drops the editorial-direction asymmetric staggered layout.

**Requirements:** R4, R12 (body sections), R18 (mobile), R23

**Dependencies:** U1, U2

**Files:**
- `src/pages/index.astro` (logo grid, method, outcomes markup)
- `src/styles/global.css` (`.section-plate`, restyled `.method-block`, `.outcome-col`, `.logo-grid`)

**Approach:**
- **Plate wrapper**: each body section becomes `<section class="section section-plate">`. Plate CSS:
  ```css
  .section-plate {
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    padding-block: var(--pad-y);
  }
  @supports not (backdrop-filter: blur(2px)) {
    .section-plate { background: rgba(255, 255, 255, 0.99); }
  }
  ```
  Slight transparency lets the calmed grid texture peek through without compromising body contrast. Edges are implicit (white on white); no border.
- **Method blocks**: drop the editorial-direction asymmetric staggered layout. New shape: vertical stack on mobile, 2×2 grid on desktop (`grid-template-columns: repeat(2, 1fr)` at ≥840px). Each block: a chunky number badge (e.g., `01` in a Geist display weight, framed with `var(--chunky-border)` and `var(--chunky-shadow)`), eyebrow (Inter micro-cap), heading (Geist display), prose (Inter).
- **Outcomes**: 3-column grid on desktop, single column on mobile. Each column: eyebrow + heading (Geist) + prose (Inter). Optional chunky-bordered card if visual weight is needed.
- **Logo grid**: preserve `#experience` section id. 2 columns × 4 rows on mobile, 4 columns × 2 rows on desktop. Restyle eyebrow only — keep logos as plain `<img loading="lazy">` for now.

**Patterns to follow:**
- Current `.method-block`, `.outcome-col`, `.logo-grid` markup
- Chunky-control border/shadow tokens from U1

**Test scenarios:**
- Body section plates render visibly above the calmed-intensity grid; body text contrast meets WCAG AA over the plate (Lighthouse a11y + manual contrast verification on rendered colors)
- Method blocks at 375px viewport → single column, comfortable read width, no horizontal scroll
- Outcomes grid → 3-column desktop, single-column mobile; no overflow
- Logo grid → 2×4 mobile, 4×2 desktop; logos load lazily
- Backdrop-blur fallback path: simulate older Safari (or test `@supports not` with DevTools toggle) → plate background renders at 0.99 opacity instead of 0.96

**Verification:** Body sections render crisply on top of the ASCII texture. No mobile horizontal scroll. Visual restraint matches Cavaro's pacing.

---

### U5. FAQ + kinetic phrase + contact form chunky port

**Goal:** Port the FAQ accordion to chunky styling while preserving keyboard behavior, implement the kinetic-phrase scroll-driven motion treatment, port the contact form to chunky controls with the country-picker reset fix and per-field error attribution.

**Requirements:** R10, R11, R12 (kinetic-phrase divider position), R14, R16, R17, R23

**Dependencies:** U1, U2, U4 (plate context)

**Files:**
- `src/pages/index.astro` (FAQ markup, kinetic phrase divider, contact form markup)
- `src/styles/global.css` (`.faq-card`, `.faq-q`, `.faq-a`, `.field-input`, `.field-textarea`, `.field-label`, `.field-error`, `.kinetic-phrase`, `.kinetic-phrase-track`, `.cc-list`, `.cc-options`, `.role-chip` if reused)
- `src/layouts/Layout.astro` — augment the existing inline form-handler script with the reset fix + per-field error attribution + kinetic-phrase IntersectionObserver

**Approach:**
- **FAQ accordion**: restyle `.faq-card` with `var(--chunky-border)` + `var(--chunky-shadow)`; `.faq-q` button uses chunky-control idiom. On expand, panel slides down via a 220ms `max-height` + `opacity` transition (reactive state, allowed by R16). **Preserve** single-open behavior, keyboard support (Enter/Space activate), `aria-expanded`, `aria-controls`, `aria-labelledby`, focus visibility. Under reduced-motion, transitions reduce to ≤0.01ms per R17.
- **Kinetic phrase divider**: fixed-height band (`min-height: 7rem`) placed between the method and outcomes sections. Markup:
  ```html
  <div class="kinetic-phrase" aria-hidden="true">
    <div class="kinetic-phrase-track">
      <span class="display">Operator-grade clarity.</span>
    </div>
  </div>
  ```
  Phrase styled in Geist display (`var(--font-display)`), uppercase, `clamp(1.5rem, 6vw, 4rem)`, foreground color, letter-spacing -0.02em.
  - **Motion** (scroll-driven, per ce-doc-review DL6 and origin R14): use `IntersectionObserver` on the `.kinetic-phrase` band. When it enters the viewport, add `.in-view` class. A `scroll` event handler (debounced via rAF) computes the band's position-within-viewport (-1 to +1) and writes it to a CSS custom property `--kinetic-progress` on the band. The `.kinetic-phrase-track` uses `transform: translateX(calc(var(--kinetic-progress, 0) * -25%))` so the phrase translates horizontally as the band moves through the viewport. Readable at rest (when user pauses scrolling); never loops.
  - **Reduced-motion**: under `prefers-reduced-motion: reduce`, `.kinetic-phrase-track` ignores `--kinetic-progress` and stays at `transform: translateX(0)`. No scroll listener attached.
  - **Mobile**: clamp() handles size; if the phrase overflows the band horizontally at extreme widths, it does so deliberately (per origin R19).
- **Contact form chunky port**: every field (`name`, `email`, country picker search, phone, message, submit) extends `.chunky-control` with field-specific overrides. Country picker dropdown gets a chunky popup border + shadow.
- **Country picker reset fix** (per ce-doc-review DL4): on successful form submission, the existing inline form-handler script — which currently calls `form.reset()` — additionally restores the picker display value to `defaultDisplay` ("Australia (+61)") and rewrites hidden `ccDial`/`ccISO2`/`ccISO3` inputs to AU defaults. Add this as a single extra block after `form.reset()` is called.
- **Per-field error attribution** (per ce-doc-review DL10): for each field, add a sibling `<p id="error-<field>" class="field-error" hidden></p>`. Each input gets `aria-describedby="error-<field>"`. On validation failure, the inline script populates the per-field `<p>`, sets `aria-invalid="true"` on the input, and unhides the error. The existing global `#formError` summary div is retained for backwards compat (some screen readers prefer summary-style live regions); the per-field error provides programmatic association.

**Patterns to follow:**
- Existing FAQ accordion behavior (preserved verbatim; only visuals change)
- Existing country-picker inline script (augment, don't rewrite)
- Cavaro `.chunky-control` for buttons/inputs (extend for textarea + combobox)

**Execution note:** The contact form port touches a load-bearing behavior. Verify Formspree receipt on the Vercel preview before claiming this unit complete — submit at least one test entry and confirm the configured inbox receives it with the same field shape.

**Test scenarios:**
- *Covers AE8, R23.* Keyboard-only FAQ navigation → Tab to a question, Enter expands the panel, prior panel collapses, `aria-expanded` flips correctly on both, focus remains on the activated button
- *Covers AE5, R11.* Submit a valid form on Vercel preview → Formspree inbox receives payload with `name`, `email`, `ccDial`, `ccISO3`, `ccISO2`, `phone`, `message` fields; success message displays; form resets
- Country picker after successful reset → search input shows `Australia (+61)` (not blank); hidden fields restored to AU defaults
- Empty-name submission → per-field error appears below name input; `aria-invalid="true"` set; `aria-describedby` resolves to the error slot; global `#formError` summary populated for backward compat
- Kinetic phrase: scroll the band through the viewport → text translates horizontally proportionally to scroll position; stops at viewport-exit; readable when scrolling pauses mid-band
- Reduced-motion on → kinetic phrase renders fully static; no `--kinetic-progress` updates; no scroll listener attached
- FAQ at 375px viewport → questions wrap on multiple lines without truncation; tap targets ≥44×44px

**Verification:** Manual keyboard FAQ pass. Formspree test entry receipt confirmed. Reduced-motion kinetic phrase confirmed static. Per-field aria-describedby verified with VoiceOver or NVDA on at least one field.

---

### U6. Social meta + OG image + favicons + manifest

**Goal:** Ship the complete social-meta surface — designed static OG PNG, Open Graph + Twitter Card meta tags, favicon set, manifest.json with theme-color.

**Requirements:** R20, R21, R22

**Dependencies:** U1 (color tokens for theme-color)

**Files:**
- `public/og-image.png` (new — 1200×630)
- `public/favicon.svg` (new)
- `public/favicon-32.png` (new — 32×32)
- `public/apple-touch-icon.png` (new — 180×180)
- `public/manifest.json` (new)
- `src/layouts/Layout.astro` — `<head>` meta tag block

**Approach:**
- **OG image production** (external design work, committed as static asset per origin R20):
  - Canvas: 1200 × 630, white background
  - Foreground: black-ink ASCII texture (same `·`/`∙`/`+`/`*` mix as the page, but at lower density to keep the wordmark dominant)
  - Centerpiece: "Capita" wordmark in Geist Variable Display weight 600, Capita blue (`#0078f0`), centered
  - Optional: subtle radial magenta glow (12–20% opacity at center, falling to 0%) behind the wordmark — **only kept if the produced PNG passes a contrast check** at the wordmark edge. Default: omit unless founder review approves
  - Export PNG, place at `public/og-image.png`
- **Favicon set** (external design work):
  - `public/favicon.svg` — small "C" mark or asterisk-glyph in Capita blue on transparent
  - `public/favicon-32.png` — 32×32 raster derived from the SVG
  - `public/apple-touch-icon.png` — 180×180 raster with white background (iOS applies the rounded mask)
- **manifest.json**:
  ```json
  {
    "name": "Capita Technology",
    "short_name": "Capita",
    "theme_color": "#0078f0",
    "background_color": "#ffffff",
    "display": "browser",
    "icons": [
      { "src": "/favicon-32.png", "sizes": "32x32", "type": "image/png" },
      { "src": "/apple-touch-icon.png", "sizes": "180x180", "type": "image/png" }
    ]
  }
  ```
- **Layout.astro `<head>` block** appended:
  - `<meta name="theme-color" content="#0078f0">`
  - `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`
  - `<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">`
  - `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`
  - `<link rel="manifest" href="/manifest.json">`
  - `<meta property="og:type" content="website">`
  - `<meta property="og:site_name" content="Capita Technology">`
  - `<meta property="og:title" content="Capita Technology — AI, data, and customer advisory">`
  - `<meta property="og:description" content="Independent executive advisory on operating models, platforms, and decisions that compound lifetime value.">`
  - `<meta property="og:image" content="https://capitatech.com.au/og-image.png">` (absolute URL per OG protocol)
  - `<meta property="og:url" content="https://capitatech.com.au/">`
  - `<meta name="twitter:card" content="summary_large_image">`
  - `<meta name="twitter:title" content="Capita Technology — AI, data, and customer advisory">`
  - `<meta name="twitter:description" content="Independent executive advisory on operating models, platforms, and decisions that compound lifetime value.">`
  - `<meta name="twitter:image" content="https://capitatech.com.au/og-image.png">`

**Patterns to follow:**
- Cavaro `public/favicon.svg` + `favicon.png` scaffolding pattern
- Open Graph protocol (ogp.me) for tag completeness

**Test scenarios:**
- *Covers AE7, R20, R21.* Vercel preview URL pasted into LinkedIn Post Inspector → 1200×630 OG renders with white + ASCII texture + blue wordmark, correct title and description
- Same URL in Twitter Card Validator → `summary_large_image` renders correctly
- DevTools Application tab → theme-color = Capita blue; PWA install prompt shows configured icons
- Favicon visible in browser tab on Chrome desktop, Safari desktop, Firefox; correct size
- iOS Safari → Add to Home Screen uses apple-touch-icon.png at correct size with proper mask
- `manifest.json` passes a W3C web app manifest validator

**Verification:** All three major social debuggers (LinkedIn, Twitter, generic OG) render correctly. Manifest validates. Theme-color applied on supported browsers.

---

### U7. Header + footer + back-to-top + plan supersession

**Goal:** Restyle the sticky header (Capita-blue wordmark + backdrop-blur, mobile-CTA preserved), implement the back-to-top button, add the footer band with oversized wordmark, mark the prior editorial-redesign plan as superseded.

**Requirements:** R13, R15, R19, R23

**Dependencies:** U1, U2

**Files:**
- `src/layouts/Layout.astro` (header markup, back-to-top button + sentinel, footer markup, inline back-to-top script — may share with U2's script or be separate)
- `src/styles/global.css` (`.site-header`, `.brand`, `.nav-cta`, `.back-to-top`, `.site-footer`, `.footer-band`, `.footer-mark` rules)
- `docs/plans/2026-05-04-001-feat-capita-editorial-redesign-plan.md` — frontmatter only: set `status: superseded`; add `superseded_by: docs/plans/2026-05-14-001-feat-capita-cavaro-visual-reskin-plan.md`

**Approach:**
- **Sticky header**: `<header class="site-header layer-fg">` with `position: sticky; top: 0; z-index: 50; background: rgba(255, 255, 255, 0.82); backdrop-filter: blur(10px);` preserved. Brand wordmark "Capita" in Geist Variable, Capita blue, links to `/`. Nav links (`Method`, `Outcomes`, `FAQ`) in Inter micro-cap. Nav CTA `Request intro` → `#contact`, chunky-styled compact button.
- **Mobile header behavior** (per ce-doc-review DL7): at <840px, the text nav links can collapse to a single icon trigger OR be removed entirely (relying on scroll to reach sections). **The CTA `Request intro` always stays visible** — never collapsed at any width. Brand wordmark + CTA fit on a 320px viewport. The exact pattern (icon vs nothing for nav links) is an implementation choice; the constraint is CTA preservation.
- **Back-to-top button**:
  ```html
  <button class="back-to-top" type="button" aria-label="Back to top" hidden>↑</button>
  <div id="back-to-top-sentinel" aria-hidden="true"></div>
  ```
  - Position: `position: fixed; right: clamp(16px, 3vw, 32px); bottom: clamp(16px, 3vw, 32px); z-index: 40;`
  - Size: `clamp(44px, 8vw, 56px)` square — meets 44px minimum touch target at all widths
  - Visual: chunky idiom (`var(--chunky-border)`, `var(--chunky-radius)`, `var(--chunky-shadow)`), white background, foreground arrow glyph. Hover/focus → Capita-blue border + `var(--chunky-shadow-accent)` shadow swap
  - The sentinel `<div id="back-to-top-sentinel">` is placed inside the `<main>` element at the bottom of the hero section, height 1px, `aria-hidden="true"`
- **Back-to-top script** (`is:inline`):
  - `IntersectionObserver` on the sentinel: when it exits the top of the viewport, remove `hidden` on the button and add `.visible` class (180ms `opacity` + `transform` transition for fade-in). When it re-enters, hide the button.
  - Click handler: `window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })`. Re-read `prefersReducedMotion` from `matchMedia` at click time so mid-session toggle is respected.
- **Footer**: `<footer class="site-footer layer-fg">` containing a `.footer-band` with oversized Capita wordmark in Geist Variable, Capita blue, `font-size: clamp(1.5rem, 8vw, 7rem)`, `line-height: 0.86`, centered, no overflow. Below the band: thin foreground top border, copyright line, brief firm descriptor. Mirrors Cavaro's footer-band pattern.
- **Supersession**: edit the prior plan's frontmatter only — set `status: superseded` and add `superseded_by` line. Do not delete the prior plan file or modify its body.

**Patterns to follow:**
- Cavaro `footer.footer-band` and `.footer-mark` styles
- Current `.site-header` sticky + backdrop-blur pattern in Capita styles.css

**Test scenarios:**
- *Covers AE6, R15.* Scroll past first viewport → back-to-top button fades in within 180ms; click/tap → page scrolls smoothly to top in ≤500ms under default motion
- Reduced-motion on → click back-to-top → page jumps to top instantly (no smooth animation); button transition still ≤0.01ms
- Back-to-top hit area on mobile = 44×44 minimum; never overlaps footer band or content padding at any viewport
- Mobile (375px viewport) → header renders brand wordmark + Request intro CTA both visible and tappable; nav text links may be hidden but the CTA is never hidden
- Tab navigation from top of page → reaches brand link → nav links (if visible) → Request intro CTA → enters main content; focus visible at each stop
- Sticky header `z-index: 50` reads above the ASCII grid `z-index: 0` but below any focus-visible outlines from form fields
- Footer wordmark scales across breakpoints; no overflow at 320px, no awkward truncation at ultrawide
- Prior plan file: frontmatter `status: superseded` and `superseded_by` field present; body unchanged (verified via git diff)

**Verification:** Mobile manual test confirms CTA always visible. Back-to-top smooth on desktop, instant under reduced-motion. Footer wordmark fills horizontally without overflow at all breakpoints. Prior plan file's git diff shows frontmatter-only changes.

---

## Key Technical Decisions

- **Geist npm package = `@fontsource-variable/geist`, NOT the Vercel `geist` package.** The Vercel `geist@1.x` package has `peerDependencies: { "next": ">=13.2.0" }` and exports only `NextFontWithVariable` — there is no CSS file Astro can consume. `@fontsource-variable/geist` ships the same SIL OFL font files via the fontsource pattern already in use for Inter. *(Origin R9 + Dependencies referenced the wrong package; corrected here per ce-doc-review feasibility finding.)*
- **Magenta count is motion-conditional.** Origin R8 said "exactly three places." With the spotlight suppressed under reduced-motion, the count drops to two (mark + ::selection). Plan honors both states; the rule is "three when motion is allowed, two under reduced-motion." *(Per ce-doc-review C1.)*
- **Kinetic phrase motion: scroll-driven horizontal translate via IntersectionObserver + transform.** Chosen over CSS marquee because (a) the phrase is readable at rest when scrolling pauses, (b) reduced-motion is trivial to honor by not attaching the scroll listener, and (c) IntersectionObserver works on every target browser today, whereas CSS scroll-timeline is Safari 17+ / Firefox 121+ only. *(Resolves origin R14 deferred question.)*
- **Back-to-top: JS `window.scrollTo({ behavior })`, NOT CSS `scroll-behavior: smooth`.** The JS path lets reduced-motion override cleanly per-click; CSS `scroll-behavior: smooth` applies site-wide and is harder to disable conditionally. *(Resolves origin R15 deferred question.)*
- **Two-tier grid intensity: body-class toggle via IntersectionObserver on hero/footer sentinels.** Chosen over a dual-grid-layer approach (cheaper) and over scroll-driven CSS opacity (would still need JS for sentinel detection). The single `.ascii-grid` layer renders at one perceived intensity at any moment; CSS reads `.grid-calm` on body to dim the dot tint without touching the radial gradient. *(Resolves the implementation ambiguity flagged by ce-doc-review DL9.)*
- **Plate treatment: `rgba(255,255,255,0.96)` + `backdrop-filter: blur(2px)`, with `@supports not (backdrop-filter)` fallback to `rgba(255,255,255,0.99)`.** Slight transparency lets the calmed grid peek through without compromising contrast; backdrop-blur softens the grid texture behind copy. Fallback raises opacity for older Safari. *(Resolves origin R3/R4 deferred question.)*
- **Token strategy: keep Capita names, add Cavaro names alongside.** No mass rename of existing tokens. `--bg`, `--text`, `--accent`, `--muted` persist; new `--highlight`, `--chunky-*` join them. Lower risk than renaming; preserves anchor-link compatibility in any existing CSS references. *(Resolves origin R7/R10 deferred question.)*
- **Logo grid: preserve `#experience` section id.** Keeps anchor-link compatibility with any external references. Restyle in place. *(Resolves origin R12 deferred question.)*
- **OG image: static PNG produced externally, committed to `public/`.** No build-time generation. A single-route site doesn't justify dynamic OG; one designed thumbnail does the job. *(Resolves origin R20 deferred question.)*
- **Hero magenta-mark word default = `durable`.** Sits in "Turn AI, data, and customers into a durable growth system" as the value-proposition word. Founder retains override. *(Resolves origin R8 deferred question with a default; founder decision preserved.)*
- **Spotlight script ships with mid-session `matchMedia` change listeners.** Both `(hover: hover) and (pointer: fine)` and `(prefers-reduced-motion: reduce)` reactivity are wired so OS preference toggles during a session update behavior immediately. Goes beyond Cavaro's one-time check. *(Per ce-doc-review DL2.)*
- **Form validation gains per-field aria-describedby.** Each input attributes its error to a per-field `<p class="field-error">`; the global `#formError` summary is retained for backward compat. *(Per ce-doc-review DL10.)*
- **Header nav CTA preserved at all viewports.** Text nav links may collapse on narrow widths; the Request intro CTA never disappears. *(Per ce-doc-review DL7; supports the cold-mobile-share flow F1.)*

---

## System-Wide Impact

- **DNS / hosting:** No changes. Vercel auto-deploy from `main` continues.
- **Existing contact form contract:** Formspree endpoint `https://formspree.io/f/xojdzarv` unchanged; field names preserved. Inbound integrations on the Formspree side require no update.
- **GitHub Pages safety net** (`index.html`, `styles.css`, `CNAME` at repo root): per the current README, these were retained as a quick-revert net through the editorial cutover. Not touched in this plan; cleanup is deferred to follow-up.
- **Branch strategy:** This plan can ship on `feat/capita-editorial-redesign` (replacing the editorial work in place) or on a fresh branch off it. `ce-work` decides during execution.
- **Prior plan supersession:** Status flipped to `superseded` in U7; file content preserved.
- **Bundle size:** Adding `@fontsource-variable/geist` increases bundled font weight by ~20–40KB compressed (variable font axis). Within mobile-LCP budget.
- **SEO / search indexing:** OG image, manifest, and theme-color are net additions. No `<meta name="robots">` change.

---

## Risks & Dependencies

- **`@fontsource-variable/geist` availability:** confirmed published; if package version drift makes it unsuitable at install time, fall back to `@fontsource/geist-sans` + `@fontsource/geist-mono` (non-variable cousins). Visual delta is minimal.
- **ASCII grid performance:** 320×80 = 25,600 characters in a single `<pre>` in the initial HTML. Server-rendered text; no DOM updates after load. Spotlight loop touches two CSS custom properties at 60Hz rAF. Performance budget assumes desktop Chrome holds 60fps. If LCP regresses past 2.5s on Vercel preview, reduce grid density (cols × rows by ~50%) before reaching for harder fixes.
- **Magenta gradient is blue-dominant** (per ce-doc-review AD4): Cavaro's stops are `highlight 0% → accent 35% → foreground 75%` — magenta occupies only the inner third of the spot. Capita drops Coral Pixels (Cavaro's pixel-display brand carrier), so the marked hero word + ::selection do more work to land magenta as a brand signal. If founder review finds magenta too invisible, the gradient stops can be re-tuned (e.g., `highlight 0–18% → accent 40%`) without touching the rest of the system.
- **Mobile signature mechanic is ambient, not user-driven** (per ce-doc-review PL4): cursor tracking only fires on `(hover: hover) and (pointer: fine)`. Mobile gets idle drift. If post-deploy review finds the mobile signature flat, consider a touch-bloom variant (spotlight blooms on tap) as a follow-up — out of scope for this plan.
- **Content tuned for editorial idiom** (per ce-doc-review AD8): existing copy was authored against asymmetric staggered blocks. The chunky idiom + plates may make method-block prose feel off-tempo. Origin R2 + Scope Boundaries forbid copy edits in this plan. If review finds copy off-rhythm, route to a follow-up content edit, not a plan revision.
- **OG image and favicon design work:** sits outside the codebase (one designed PNG + SVG mark + 2 raster sizes). Could become a bottleneck if the founder is the designer; budget time externally.
- **Backdrop-filter compatibility:** the `@supports not` fallback covers older Safari without backdrop-blur support. Worth a manual check on at least Safari 14.
- **Inline scripts in Astro 6.2:** must use `is:inline` to ensure verbatim emission (matches the current branch's pattern for the form-handler script).
- **Reduced-motion compliance:** the page now has multiple motion sources (spotlight idle drift, cursor tracking, kinetic phrase, back-to-top scroll, FAQ accordion, button :active). Each must honor `prefers-reduced-motion: reduce`. Verification Strategy below has a dedicated reduced-motion pass.

---

## Verification Strategy

- **Visual / behavioral parity per unit:** each unit's test scenarios verified on the Vercel preview deployment (not local-only).
- **Lighthouse mobile p75 of 5 runs**, against the Vercel preview:
  - LCP ≤ 2.5s (origin R24 gate)
  - CLS ≈ 0
  - Performance score ≥ 90
  - Accessibility ≥ 95
- **Manual accessibility pass:**
  - Keyboard-only navigation reaches every interactive element with visible focus
  - Screen reader (VoiceOver on macOS, NVDA on Windows) announces section landmarks, button purposes, and form field labels correctly
  - FAQ accordion keyboard contract preserved (Tab to question → Enter/Space to expand → focus retained)
  - Per-field form errors announced when triggered
- **Reduced-motion pass:** enable OS reduced-motion, reload the Vercel preview, verify:
  - ASCII grid renders fully static; no rAF loop running
  - Kinetic phrase static (no transform)
  - Back-to-top click jumps instantly (no smooth scroll)
  - Button `:active` transition ≤0.01ms
  - FAQ accordion transitions ≤0.01ms
- **Cross-browser:** Chrome desktop, Safari desktop, Firefox desktop, iOS Safari, Chrome Android. Verify cursor-detection logic per platform.
- **Social-meta debuggers:**
  - LinkedIn Post Inspector
  - Twitter Card Validator
  - A generic OG debugger (e.g., opengraph.xyz)
  - All three render the preview correctly before merge
- **Form submission:** submit a test entry on the Vercel preview; confirm Formspree inbox receives it with the same field shape as the current branch.
- **Contact-form completion baseline** (per ce-doc-review PL6): before merge, pull current completion rate from analytics or Formspree's submission count (any window with sufficient volume — e.g., last 90 days). Record baseline so post-merge regression detection is possible.
- **Mid-session preference toggles:** during manual test, toggle OS reduced-motion and OS cursor preference while the preview page is open; verify behavior updates within one frame.
- **Founder review gate:** founder reviews the Vercel preview and confirms (a) the redesign represents Capita's positioning, (b) the default magenta-marked hero word (`durable`) is correct or specifies a replacement, (c) the OG image renders well on a real LinkedIn share.
- **Optional external read sessions** (per ce-doc-review root A, recommended not required): 1–3 read-aloud sessions with past prospects or peers shown the Vercel preview. Goal: gather independent first-impression signal before main-merge.

---

## Scope Boundaries

(Carried verbatim from origin Scope Boundaries; no plan-time additions to scope.)

- Multi-page architecture — no `/work`, `/about`, `/insights`, `/contact` routes
- Case studies (named, anonymized, or composite)
- Real founder photo and bio copy — section ships under its existing flag
- Custom illustration commissioning or sourcing
- CMS introduction
- Blog or insights content stream
- Stack migration — already on Astro + Tailwind 4 + Vercel
- New colors beyond white, black, Capita blue, magenta
- Coral Pixels and Stack Sans Notch Variable
- Cavaro's `html { font-size: 144% }` rem-multiplier rule
- Dynamic OG image generation; per-section OG variants
- Page-load hero animations, scroll-triggered section reveals, parallax, decorative hover motion beyond reactive states
- Changes to contact form's API contract, Formspree endpoint, anti-spam mechanisms, country-code data
- Changes to FAQ accordion's single-open behavior or keyboard contract
- Re-litigating the previous brainstorm's premise debates (founder voice, anonymized vignettes, positioning rework, single-page architecture trade-off)

### Deferred to Follow-Up Work

- Cleanup of root-level `index.html`, `styles.css`, `CNAME` (GitHub Pages safety net; remove after stable Vercel-served period per current README's 7-day note)
- Founder section content (real photo + bio + signed manifesto line) — wired but flagged off; flip when content is ready
- Test infrastructure bootstrap (Astro static site has no formal test harness today; consider Playwright or Vitest if behavior coverage warrants)
- External read sessions on the Vercel preview before main-merge — recommended (per ce-doc-review root A) but not a plan-time blocker
- Mobile touch-bloom spotlight variant — consider if post-deploy review finds the mobile signature flat
- Re-tuning of the magenta gradient stops if founder review finds magenta too invisible against blue-dominant spotlight

---

## Deferred Questions (Implementation-Time)

- Exact CSS custom-property values for the two-tier grid intensity (full vs. calm contrast ratios) — refine during U2 visual prototyping against actual Vercel preview output
- Whether to keep a faint magenta glow behind the wordmark on the OG image — depends on contrast check of the produced PNG (default: omit unless founder review approves)
- Font preload strategy: which Inter and Geist weights to preload — refine after U1 reveals actual variant usage
- Whether to bundle Inter and Geist into a single CSS file or let fontsource emit separate stylesheets — Astro/Vite default behavior is likely fine; verify network waterfall on the Vercel preview before merge
- Whether mobile nav text links collapse to a hamburger trigger or simply disappear (CTA remains visible either way) — choose during U7 visual prototyping
