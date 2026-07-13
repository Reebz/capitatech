---
date: 2026-06-03
type: operational
title: LCP measurements — R23 verification record
plan: docs/plans/2026-06-03-001-feat-browserbase-benchmark-improvements-plan.md
unit: U-15
---

# LCP measurements — R23 verification

This file records the three Lighthouse mobile p75 measurement gates U-15 defines for the browserbase-benchmark plan. R23's hard requirement: LCP ≤ 2.5 s on Lighthouse mobile p75 of 5 runs against a Vercel preview. KTD-3 adds: confirm the H1 stays the LCP element after the U-6 price promotion, not the prices block.

## Harness

A `PerformanceObserver` for `largest-contentful-paint` ships in `Layout.astro` and logs every LCP candidate to the browser console with `startTime`, `size`, `url`, and `element`. The observer skips on `capitatech.com.au` and `www.capitatech.com.au` to keep the production payload clean; the founder can opt in on a production host by appending `?lcp=1` to the URL.

## Gate 1 — baseline on `main`

Establishes the LCP p75 the bundled change must hold or beat.

- **When:** before merging this plan's units back to `main`.
- **How:** 5-run Lighthouse mobile (Moto G4 profile, slow-4G via `--throttling-method=simulate`) against the Vercel preview for the current `main` HEAD.
- **Outputs:** copy each run's JSON into `docs/operational/lcp/baseline-main-<run>.json` (gitignored) and record the table below.

| Run | LCP element | startTime (ms) | LCP value (ms) | CLS |
| --- | ----------- | -------------- | -------------- | --- |
| 1   |             |                |                |     |
| 2   |             |                |                |     |
| 3   |             |                |                |     |
| 4   |             |                |                |     |
| 5   |             |                |                |     |
| **p75** | | | | |

## Gate 2 — post-U-6 element-identity check

Confirms the hero H1 remains the LCP element after the prices section promotes to display scale. R-RISK-6 + R-RISK-7 motivated this gate: the prices block is a second display-scale element below the hero and could plausibly enter LCP candidacy on certain viewports.

- **When:** immediately after U-6 merges, on a Vercel preview for the U-1 .. U-6 stack.
- **How:** open the preview in Chrome DevTools at 390 mobile (Moto G4 emulation) and 1440 desktop; record the value the LCP observer logs in the console. A single Lighthouse 5-run is optional if the console output already confirms the H1.

| Viewport     | LCP element observed | startTime (ms) |
| ------------ | -------------------- | -------------- |
| 390 mobile   |                      |                |
| 1440 desktop |                      |                |

If the LCP element is not the H1, stop and re-plan before merging downstream units.

## Gate 3 — pre-R22 final gate

The hard pass/fail gate. The bundle preview with every plan unit applied must hold LCP ≤ 2.5 s at p75 on Lighthouse mobile.

- **When:** immediately before the R22 production deploy.
- **How:** 5-run Lighthouse mobile (Moto G4 profile, slow-4G) against the final bundle Vercel preview.
- **If it regresses past 2.5 s:** the first action is to disable the `font-subset` integration in `astro.config.mjs` so the external Geist stylesheet ships and `font-display: swap` carries the cold-cache experience (U-14's documented fallback). Re-run the 5 Lighthouse passes. If still regressing, block R22 and return to planning.

| Run | LCP value (ms) | CLS | INP (ms) | LCP element |
| --- | -------------- | --- | -------- | ----------- |
| 1   |                |     |          |             |
| 2   |                |     |          |             |
| 3   |                |     |          |             |
| 4   |                |     |          |             |
| 5   |                |     |          |             |
| **p75** | | | | |

| Gate              | Pass criterion                | Result |
| ----------------- | ----------------------------- | ------ |
| LCP p75 ≤ 2.5 s   |                               |        |
| CLS = 0           |                               |        |
| LCP element = H1  |                               |        |

## Notes

- The `PerformanceObserver` snippet itself runs in production with `?lcp=1` so on-call founder measurement is possible without a redeploy.
- Lighthouse JSON archives go under `docs/operational/lcp/` if you want them retained; that directory is gitignored to keep the repo lean.
