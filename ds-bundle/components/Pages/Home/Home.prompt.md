# Home — the full capitatech.com.au page

The complete shipped homepage (single-page site), verbatim from the production build, with asset paths rewritten to this bundle. This is the page to edit when the ask is "change the site" rather than "use a component": every section in order — header, blue hero, kinetic phrase, logo grid, outcomes, engagement quad, Growth Method (dark), founder/pricing rationale, commitment band, services + prices, FAQ, contact form, footer.

Ground rules when editing:
- All styling comes from the design-system stylesheet (`styles.css` → `_ds_bundle.css`). Edit copy and structure here; edit *style* through the tokens and classes, not new inline CSS.
- The inline scripts (nav toggle, FAQ accordion, form validation, ASCII spotlight) are production code — preserve them unless the change is about them.
- Real founder photo and client logos live under `images/`.
- Source of truth is the git repo (`src/pages/index.astro` + `src/layouts/Layout.astro`); changes made here need to be carried back to the repo to ship.
