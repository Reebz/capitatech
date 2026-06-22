# Capita Technology — design system

A hand-authored **CSS design system** (not a React/JSX component library). You build with
it by writing plain HTML/JSX that uses these **class names** and **CSS custom properties**.
There are no importable components and no props — the look comes entirely from the stylesheet.

## Setup (required)

Load the one stylesheet — its `@import` closure is the whole system:

```html
<link rel="stylesheet" href="styles.css" />   <!-- imports _ds_bundle.css -> fonts/*.woff2 -->
<html style="color-scheme: light">             <!-- light-only; there is no dark theme -->
<body style="background: var(--bg)">            <!-- page ground is warm gray #f6f6f3, NOT white -->
```

No provider/wrapper component is needed. Fonts (Geist, Geist Mono, Inter — all variable)
are declared inside `_ds_bundle.css`. Center page content in `.container` (caps at 1120px).

## Styling idiom — use the tokens and class names below

**Color.** Blue is the primary brand; the fuchsia `--highlight` is a *rare* second register
(markers, a thin rule under a label, one saturated band). Colored text/links on a light
ground use `--blue-ink` so they clear WCAG AA — keep bright `--accent`/`--highlight` for
fills, bars, icons, and large display only.

- `--accent` #0a6fe0 · `--accent-hover` #0856c2 (blue ground for white text) · `--blue-ink` #0a55ad (small colored text on light)
- `--highlight` oklch(0.55 0.205 352)/#c61c79 · `--highlight-hover` #a81765 · `--accent-fg`/`--highlight-fg` #fff
- `--text` #0b0b0d · `--muted` #4b4b57 · `--muted-strong` #3a3a44 · `--bg` #f6f6f3 · `--border`, `--border-strong`

**Type.** `--font-display` (Geist, headings), `--font-sans` (Inter, body), `--font-mono`
(Geist Mono, every small-caps tier). Scale: `--type-h1/-h2/-h3/-lede/-body/-eyebrow/-micro/-kinetic/-signature`.

**Layout / idiom.** `--pad-x` `--pad-y` `--radius-sm/-md/-lg`; the *chunky* idiom
(`--chunky-border` `--chunky-radius` `--chunky-shadow`) for fields, FAQ cards, package cards,
back-to-top; the *pill* idiom (`--pill-radius` `--pill-padding-x/-y`) for the `.btn` family.

**Full-bleed** sections (`.hero`, `.commitment-band`, `.growth-method`, `.footer-band`)
escape the container via `margin-inline: calc(50% - 50vw)` — place them outside narrow wrappers.

## Where the truth lives

`styles.css` (entry) → `_ds_bundle.css` (the real compiled site CSS — every token + class).
`tokens/tokens.css` is a readable token map. Read these before styling, and read the
per-component `<Name>.prompt.md` next to each card before composing that component.

## Idiomatic example

```html
<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="section-label">Services</p>
      <h2 class="display">Four services, <mark class="why-mark">with prices</mark>.</h2>
      <p class="lede">Each engagement is dated, scoped, and priced.</p>
    </div>
    <a class="btn btn-primary" href="#contact">Talk to us.</a>
  </div>
</section>
```

## Component index

Each component is a card under `components/<Group>/<Name>/` with a preview `.html` and a
`.prompt.md` usage reference.

**Foundations** — `Palette` (the brand palette + roles), `Typography` (the type tiers).

**Actions** — `Buttons` (`.btn` primary/secondary/magenta + hero-scoped inversion), `BackToTop`.

**Navigation** — `Header` (sticky bar: brand, nav, `.nav-cta`, mobile toggle).

**Components** — `KineticPhrase` (full-bleed scroll-driven divider phrase), `DiagramNode` (chunky-outline node idiom for flow diagrams: row/card variants, active + horizon states).

**Sections** — `Hero` (blue poster band), `LogoGrid` (bordered logo wall), `Outcomes`
(three columns), `MethodQuad` (2×2 principles), `GrowthMethod` (dark numbered loop),
`Founder` (photo + letter), `CommitmentBand` (full-bleed fuchsia), `Packages` (chunky
priced cards + bespoke band), `FAQ` (chunky accordion), `Contact` (form + pains aside).

**Layout** — `Footer` (wordmark band + tiles).
