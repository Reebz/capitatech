# Header

Group: Navigation

The site header for Capita Technology. Sticky (`.site-header`, `position: sticky`) and elevated above page content via `.layer-fg`.

## Anatomy

- `.brand` — the wordmark `Capita.Technology`. The middle dot is tinted with `var(--text)` so the period reads as a deliberate separator.
- `.header-right` — the right cluster holding three siblings:
  - `#primaryNav` (`.nav`) — the primary link list: Services, Bespoke, Outcomes, Method, FAQ. Collapses to `display: none` at `<= 840px`, where the hamburger reveals it as a dropdown panel.
  - `.nav-cta` — the always-visible "Talk to us" pill. It is a **sibling** of `#primaryNav`, not a child, so it stays in the bar when the panel collapses.
  - `.nav-toggle` — the mobile hamburger button (`☰` glyph), hidden above 840px.

## Behavior (not included in card)

The production header is driven by an inline script that flips a `data-nav-open` attribute on the `<header>` to open the mobile panel, keeps `aria-expanded` in sync, and closes on Escape, link tap, or outside click. The card omits the script — it shows static structure only.

In the card the header sits at the top of the frame rather than sticking; that is expected.
