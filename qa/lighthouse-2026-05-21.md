---
title: "Lighthouse notes — Capita Advisory copy + packages update 2026-05-21"
status: draft
plan: ../ribar-ai-web/docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
unit: U10
---

# Lighthouse notes — Capita Advisory copy + packages update 2026-05-21

## Shipping gate

Per `README.md` and plan R16: median mobile p75 LCP must stay ≤ 2.5s.

## Build verification

- `npm run build` clean (0 errors, 0 warnings).
- `npm run check` clean (0 errors, 0 warnings, 0 hints).
- Static output: `dist/index.html` + extracted CSS at `dist/_astro/index@_@astro.*.css`.

## Pre-deploy Lighthouse plan

Before merge:

1. Build (`npm run build`) and preview (`npm run preview`).
2. Run Lighthouse 5× mobile (Moto G Power / Slow 4G throttling presets) against the preview URL.
3. Record the LCP for each run; report median.
4. If median LCP > 2.5s, do not deploy. Investigate the regression source. Likely suspects:
   - Founder section image asset (currently a tonal-placeholder div, no `<img>` until `public/founder-signature.svg` lands).
   - New packages section content weight (4 cards with inclusion lists).
   - Inline kinetic-phrase + grid script overhead.

## Known asset gaps (truth-gate pending)

- Founder signature SVG (`public/founder-signature.svg`) — not yet supplied. Founder section renders a typed sign-off only. When the asset lands, the signature `<img>` slots in beneath `.founder-signed` and must use `loading="lazy"` to keep LCP intact.

## Observed during this session

- Page-render behaviour at 390 × 844 and 1440 × 900 verified via Playwright. Layouts correct. See `qa/screenshots/2026-05-21-post/`.
- Package selector pre-fill confirmed working at the HTML and JS level via the new inline package-prefill IIFE in `src/layouts/Layout.astro`.
- 2×2 package grid on desktop, 1-column on mobile (≤ 720px). The mobile single-column override is forced via `#packages .package-stack` to win over the default rule regardless of Astro+Tailwind bundle ordering.

## Open items for the user before publish

- Supply `public/founder-signature.svg` (see C13 in `qa/truth-gates-2026-05-21.md`).
- Run Lighthouse 5× on the deployed preview URL and record median LCP here.
- Confirm operational SLAs honoured: two business day response (C9), $120k bespoke floor (C8), 90-day commitment follow-up week.
