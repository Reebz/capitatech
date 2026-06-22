# Footer

Group: Layout

The site footer for Capita Technology. Elevated above the page grid via `.layer-fg`. Opens with an oversized wordmark band, then the copyright/links row, then three detail tiles, closing on the NDA line.

## Anatomy

- `.footer-band` — the full-bleed decorative wordmark (`aria-hidden`). `.footer-mark` renders the big "Capita" lettering.
- `.footer-inner` — the copyright line and `.footer-links`.
  - The copyright `<p>` reads `© 2026 Capita Technology. Advisory by ex-operators.` In production the year is injected into `<span id="y">` by script; for this static card it is hardcoded to `2026`.
  - `.footer-links` — Top, Services, Outcomes, FAQ, Talk to us.
- A visually-hidden `<h2>` ("Capita Technology details") gives the tile `<h3>`s a parent in the document outline. The clip pattern is inlined on the element (no `sr-only` utility exists in the stylesheet).
- `.footer-tiles` — three `.tile` blocks, each an `<h3>` over `.micro` lines:
  - **Contact** — email and Sydney/region line.
  - **Engagements** — the engagement types.
  - **Industries** — the served industries.
- `.footer-nda` — the closing "All work delivered under mutual NDA." line.

## Card adaptation

All hrefs are `#`. The year is hardcoded `2026` in place of the script-filled `<span id="y">`. All copy is verbatim from the production footer.
