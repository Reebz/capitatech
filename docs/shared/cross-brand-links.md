---
title: "Cross-brand link strategy — Capita Advisory ↔ Ribar.ai"
status: draft
created: 2026-05-21
plan: docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
unit: U32
---

# Cross-brand link strategy — Capita Advisory ↔ Ribar.ai

Both brands share the same operator (Mitch Ribar). The two sites cross-link at the bio level only — quiet, single-line addendums beneath the founder section — so the buyer can self-route without being cross-sold.

The principle (per plan + brainstorm): each site's primary CTA serves its own buyer. The cross-brand link is informational. No cross-sell language. No comparison framing.

---

## Capita Advisory → Ribar.ai (live)

**Placement:** Founder section of `src/pages/index.astro`, beneath the signed founder letter, rendered as `.founder-crosslink`.

**Copy (verbatim):**

> Mitch also runs Ribar.ai, a 12-week 1:1 AI executive program for senior leaders.

**Link target:** `https://ribar.ai`.

**Status:** Live in the Capita site as of the Section A commit on `feat/two-brand-launch`. Domain `ribar.ai` does not yet resolve to a working site — the link is intentionally forward-pointing.

### Interim handling for the broken link

Until `ribar.ai` resolves to a real site, the link 404s when clicked. Options to handle:

1. **Accept the 404 (recommended for the launch window).** The link primes the cross-brand context. Buyers who click learn there is a second brand; the missing site is a small cost in exchange for the cleaner footprint at launch.
2. **Replace `https://ribar.ai` with `mailto:mitchell.ribar@gmail.com?subject=Ribar.ai%20enquiry`.** Routes the curious to a direct email. Trade: a `mailto:` link is more friction for the casual click but solves the broken-link concern.
3. **Set up a coming-soon page at `ribar.ai`.** Cheapest defensible option. Static one-page HTML on Vercel or Cloudflare Pages: "Ribar.ai launches soon. Mitch is principal of Capita Technology. Email mitchell.ribar@gmail.com for early conversations." Add to founding-cohort outreach as the landing surface.

**Recommendation:** option 3 once the founding-cohort outreach starts. Until then, option 1 is acceptable.

---

## Ribar.ai → Capita Advisory (deferred; renders when Ribar.ai site ships)

**Placement (future):** Footer of the Ribar.ai site, beneath the contact section or in the standard footer block.

**Copy (verbatim):**

> Mitch is principal of Capita Technology, an independent advisory firm for telco, banking, financial services, and SaaS leadership teams.

**Link target:** `https://capitatech.com.au`.

**Render trigger:** When the Ribar.ai site-build follow-up plan ships and the site is live.

---

## What the cross-brand link is NOT

- Not a cross-sell. The Capita buyer is not being sold Ribar.ai; the Ribar.ai buyer is not being sold Capita advisory.
- Not a comparison. Do not write "for executive teams choose Capita; for individual leaders choose Ribar.ai." That is sales-pitch comparison framing and dilutes both pitches.
- Not a brand-family announcement. No "Capita Group" or "the Ribar family of companies" framing. Each brand stands on its own.
- Not part of the main nav. The cross-brand mention belongs in the founder section / footer, not in the header nav.

---

## What both sites DO share

- The same canonical bio (`docs/shared/bio.md`).
- The same signature SVG when produced (`public/founder-signature.svg`, shared across both brands).
- The same operator name and credential set.
- The same 90-day commitment mechanism.
- The same "two business day response" SLA.

What they intentionally do NOT share (per brainstorm + plan):

- Visual identity (Capita = ASCII grid + Capita blue + Geist/Inter at one scale; Ribar.ai = Operator Indigo + Signal Amber + Geist/Inter at a different scale).
- Audience and pricing (Capita = leadership teams at $35k–$120k+; Ribar.ai = individual senior leaders at $25k–$100k).
- Voice register (Capita = third-person, regulated tone; Ribar.ai = first-person, more direct).
- Sales motion (Capita = considered B2B with proposals; Ribar.ai = direct-to-exec with published pricing).

---

## Operational maintenance

Quarterly: both sites' founder sections should be reviewed for:

- Bio consistency — the credential statements must match `docs/shared/bio.md`.
- Link integrity — both cross-brand links must be live and pointing to the right destinations.
- Tone register — Capita's third-person remains third-person; Ribar.ai's first-person remains first-person.

If the operator details ever diverge (new credential, change of employer roles in the bio), update `docs/shared/bio.md` first; both sites pull from it.

---

## Future considerations

If a third brand or a sub-product emerges (e.g., a Capita Advisory community, a Ribar.ai alumni network), the cross-brand model extends the same way: quiet, founder-section level, no cross-sell, shared canonical bio.

If at some future point the two brands consolidate (one of the brands is wound down), the consolidated brand inherits the canonical bio and the cross-brand-links artifact is archived with a date-stamped note explaining the consolidation rationale.
