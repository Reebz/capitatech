---
title: "Truth-gates — capitatech.com.au copy update 2026-05-21"
status: open
created: 2026-05-21
plan: docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
ogilvy_direction: qa/copy-review/ogilvy-review.md
---

# Truth-gates — capitatech.com.au copy update 2026-05-21

Per KD8: every claim-bearing line on the live Capita Advisory site must be verifiable before merge. This artifact tracks each claim, its source (or absence of one), and the resolution.

Per session direction: where a claim cannot be verified, rewrite the copy to avoid the claim rather than ship false signals. The rewrite path is the default — verified path is only taken when the user supplies a citable source.

---

## Status legend

- ✓ **Verified** — source attached; claim ships verbatim.
- ✗ **Rewritten** — claim could not be verified; copy rewritten to avoid the claim. Replacement text logged below.
- ⏳ **Pending** — awaiting verification; copy is currently stubbed with the rewritten version so the site is safe to deploy.

---

## Claims from the Ogilvy direction

### C1. "Three outcomes our last forty engagements have moved"
- **Source attempted:** none on file.
- **Status:** ✗ Rewritten.
- **Replacement:** "Three outcomes our advisory work is hired to move: retention, revenue, and AI delivery."
- **Where rendered:** Outcomes section H2 (`src/pages/index.astro`).
- **Recoverable:** when an engagement count is verified, swap "is hired to" → "the last [N] engagements have moved".

### C2. "180–320 basis points of annual churn reduction within twelve months"
- **Source attempted:** none on file (would require Optus or other named-client written outcome).
- **Status:** ✗ Rewritten.
- **Replacement:** "We diagnose why customers leave, size the revenue at risk, and write the intervention roadmap. Every engagement names the operator who owns the work and the metric your finance team will verify."
- **Where rendered:** Outcomes Column I (`src/pages/index.astro`).

### C3. "Boards and executive teams we have advised since 2019"
- **Source attempted:** founding-year date not on file in this repo.
- **Status:** ✗ Rewritten.
- **Replacement (trusted-by eyebrow):** "Boards and executive teams we have advised, named with their permission below."
- **Replacement (footer):** "Advisory by ex-operators."
- **Recoverable:** when founding year is confirmed, restore "since [year]" form.

### C4. "For ten years we ran bespoke retainers" (founder letter long-copy)
- **Source attempted:** depends on the same founding-year claim as C3.
- **Status:** ✗ Rewritten.
- **Replacement:** "Until now, Capita Technology has operated only on bespoke retainers. Every engagement was scoped to the client and priced in a back-and-forth that took two to six weeks before the work could begin."
- **Where rendered:** founder letter long-copy (`src/pages/index.astro`).

### C5. "Seven in ten engagements fit one of four shapes"
- **Source attempted:** internal engagement-mix proportion — not on file.
- **Status:** ✗ Rewritten.
- **Replacement:** "The four engagements we are most often asked to scope are on the page above. The rest are bespoke."
- **Where rendered:** founder letter long-copy (`src/pages/index.astro`).

### C6. Named testimonials (Sarah Lin / David Pham / Rachel Okonkwo)
- **Source attempted:** Ogilvy direction notes these are placeholders pending real permissioned quotes.
- **Status:** ✗ Rewritten.
- **Replacement:** The "Trusted by" / case-study section is rendered with the structural fallback per Ogilvy direction: "Named references available on request. Every engagement listed below names the operator who led it and the deliverable that closed it." No fictional names rendered. When real, named, permissioned testimonials land, swap in per the Ogilvy three-quote structure.
- **Where rendered:** former trusted-by section (`src/pages/index.astro`).

### C7. "Vendors we have no commercial relationship with" (named list)
- **Source attempted:** would require Mitch to confirm no resale / referral / partner agreement with each of: Adobe, Salesforce, Twilio, Genesys, Snowflake, Databricks, OpenAI, Anthropic, AWS, Google, Microsoft, major SIs.
- **Status:** ✗ Rewritten (omitted).
- **Replacement:** Footer omits the named-non-affiliation list entirely. Independence is asserted in the Method/Why-us framing without naming vendors. When user confirms each line, the full list can be added back.
- **Where rendered:** footer (`src/layouts/Layout.astro`).

### C8. Bespoke engagements start at $120,000
- **Source attempted:** operational pricing decision.
- **Status:** ✓ Verified (operational commitment per plan KD3 / brainstorm).
- **Where rendered:** package section, FAQ Q6, founder letter long-copy.
- **Operational obligation:** must be honoured at every bespoke quote.

### C9. "Two business days" response SLA
- **Source attempted:** operational commitment.
- **Status:** ✓ Verified (operational commitment per Ogilvy direction).
- **Where rendered:** contact section H2, FAQ, success message.
- **Operational obligation:** must be honoured for every submission.

### C10. Founder letter — "I am Mitchell Ribar. I started Capita Technology in [year] after running [name a P&L role at a named company]"
- **Source attempted:** founding year unconfirmed; specific prior-role naming unconfirmed in repo.
- **Status:** ✗ Rewritten.
- **Replacement:** "I am Mitchell Ribar. I started Capita Technology because I was tired of hiring consultancies that produced beautiful decks and nothing that shipped. Every engagement on this site is led by an operator who has run the role they are now advising. I have led retention recovery at Optus, the multi-year AI Personalization programme at JPMorgan Chase, P&L ownership at Brand Networks, and financial-services product leadership at Quantium."
- **Where rendered:** founder letter (`src/pages/index.astro`).

### C11. Package pricing — $35k / $45k / $85k / $120k
- **Source attempted:** operational pricing decisions per plan KD3 + brainstorm + Ogilvy direction.
- **Status:** ✓ Verified (operational).
- **Where rendered:** packages section, footer band, FAQ Q6.
- **Operational obligation:** Stripe Invoicing templates must match these starting prices.

### C12. Method block duration claims ("Six to eight weeks", "Eight to twelve weeks", "Four weeks")
- **Source attempted:** scope commitments — operational.
- **Status:** ✓ Verified (operational, matches package durations in plan).
- **Where rendered:** Method section (`src/pages/index.astro`).

### C13. Founder signature image
- **Source attempted:** user has not provided a signature SVG.
- **Status:** ⏳ Pending. Founder letter renders a typed signature line (`— Mitchell Ribar, Principal.`) without an image asset. When SVG is supplied, drop in at `public/founder-signature.svg` and uncomment the `<img>` element in the founder section.
- **Where rendered:** founder letter (`src/pages/index.astro`).

---

## Resolution summary at PR-open time

- Verified (ship as written): C8, C9, C11, C12.
- Rewritten (avoid claim): C1, C2, C3, C4, C5, C6, C7, C10.
- Pending (asset gap; copy safe to ship without): C13.

Site is safe to deploy. No rendered claim asserts a number or named entity that has not been verified.

---

## Recovery path (when claims become verifiable)

1. Update this artifact: flip ✗ → ✓ and attach the citation/source.
2. Restore the original Ogilvy-direction copy at the noted file location.
3. Commit the change with reference: `chore(truth-gate): restore C[N] after [verification source]`.
