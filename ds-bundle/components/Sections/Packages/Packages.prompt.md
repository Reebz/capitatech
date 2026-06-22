# Packages

Group: Sections

The Services section — four scoped, dated, priced engagements stacked highest-price-first (Ogilvy anchoring), with a bespoke advisory band beneath.

## Structure

- `.section` wrapper with a `.section-head`: `.section-label` ("Services"), `h2.display` carrying a `<mark class="why-mark">with prices</mark>`, and a `.lede`.
- `.package-stack` holds four `<article class="package-card">`, each with:
  - `.package-eyebrow` — a `.from-prefix` ("From") plus the amount in `.from-amount`.
  - `.package-name`, `.package-duration`, and a `.package-promise` (italic `<em>`).
  - `.package-inclusions` `<ul>` of line items.
  - `.package-cta` with a `.btn.btn-primary` (carries a `data-package` slug on the live page).
- `.bespoke-band` closes the section: an `.eyebrow` ("Bespoke advisory"), a `.bespoke-body` with a closing `<strong>`, and a `.btn.btn-secondary` CTA.

## Notes

- Prices and durations are operationally committed and map one-for-one to the Method block durations on the live page.
- On the live page each CTA links to `#contact` and carries a `data-package` slug; here the hrefs are `#` and the slugs are preserved.
- All copy is materialized verbatim from the `packages` array and the bespoke band in `src/pages/index.astro`.
