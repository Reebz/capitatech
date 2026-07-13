---
date: 2026-06-05
type: operational
title: Session handoff — browserbase-mimic redesign, pre-variant-selection
---

# Session handoff — pre-variant-selection

This doc captures everything load-bearing from the 2026-06-03 → 2026-06-05 session so the next session can pick up cold. Read this first.

## TL;DR

A previous browserbase-benchmark redesign attempt on `feat/two-brand-launch` produced a result a multi-agent investigation called *"99% identical to the baseline"* — the brief itself rejected every distinctive browserbase move on agent-modeled premium-advisory grounds and shipped the conservative spec faithfully. That attempt was reverted. A fresh prototype-first attempt landed three rendered design variants on isolated branches. The user has not yet picked a variant. The next move is founder review of the three preview URLs.

## Current repo state

- **Branch checked out:** `feat/browserbase-mimic` at `cb9bb5b chore(brand): rebaseline copy + tokens to feat/two-brand-launch tip`. This branch carries no commits beyond the rebaseline — the three variants live on separate sibling branches (see below).
- **Uncommitted on `feat/browserbase-mimic`:** `package.json` + `pnpm-lock.yaml` carry `@fontsource-variable/geist-mono@5.2.8` installed during workflow setup. Not yet committed. Worth committing if any variant is extended (all three variants use Geist Mono); discard if pivoting elsewhere.
- **`feat/two-brand-launch` (origin):** still carries the 18 abandoned commits from the previous attempt. Local was hard-reset to `cb9bb5b`, but the remote was not force-pushed. Decision deferred.

## The three variants

All built via a dynamic workflow on 2026-06-03 in isolated git worktrees, each committed to its own branch and pushed to origin, each deployed to a Vercel preview. Shared baseline moves across all three: H1 rewritten to *"We unleash your AI, customer growth, and productivity."* with a magenta marker block on a phrase; pill CTAs (`border-radius: 9999px`) with hover morph to 12px; Geist Mono on every label tier (eyebrow, section-label, package-eyebrow, micro, footer h3); warm-gray-50 page ground.

### v1 — Blue Poster

- **Preview:** https://capitatech-eyv8tmdn4-reebz.vercel.app
- **Branch:** `worktree-wf_c5863679-6cb-2` (pushed to origin)
- **Worktree:** `.claude/worktrees/wf_c5863679-6cb-2`
- **Distinct moves:** full-bleed Capita-blue (`#0078f0`) hero plate; H1 white at clamp(56–120px); commitment band full-bleed magenta; footer full-bleed Capita blue. Bookended in brand color.
- **Review for:** does saturated blue at editorial-poster scale read as Capita-confident or as overshoot.

### v2 — Magenta Marker Editorial

- **Preview:** https://capitatech-o0iuflh9k-reebz.vercel.app
- **Branch:** `worktree-wf_c5863679-6cb-3` (pushed to origin)
- **Worktree:** `.claude/worktrees/wf_c5863679-6cb-3`
- **Distinct moves:** neutral hero ground; H1 at clamp(56–128px) with marker wrapping "unleash your AI"; commitment band promoted to the page's saturated-magenta visual peak mid-page; footer Capita blue. Method anchor numerals converted to circular magenta pills.
- **Review for:** does the mid-page magenta slab eclipse the hero or balance it.

### v3 — Quilted Multi-Band

- **Preview:** https://wfc5863679-6cb-4-5zwcx9gj6-reebz.vercel.app (may require Vercel SSO)
- **Branch:** `v3-quilted-multi-band` (pushed to origin)
- **Worktree:** `.claude/worktrees/wf_c5863679-6cb-4`
- **Distinct moves:** every section has its own ground color (cream → pale blue → warm gray → SATURATED Capita blue commitment → pale magenta → cream → pale blue → white → SATURATED Capita blue footer). Most ambitious.
- **Review for:** does the rhythm feel editorial or noisy.

### Worktree caveat

Each variant lives in `.claude/worktrees/<branch>/`. To inspect a variant locally:

```bash
cd .claude/worktrees/wf_c5863679-6cb-2   # or -3 or -4
pnpm dev
```

Worktree cleanup if abandoning any: `git worktree remove <path>` then `git branch -d <branch>`. Do not delete worktrees while a process inside them is running.

## The pending decision

The synthesizer offered three next-step paths. Picking one resumes the work:

1. **"I like variant N — extend it."** Take that variant as the spine; apply the same idiom to packages, outcomes, FAQ, contact. The variants currently lead with hero + commitment + footer treatment; downstream sections inherit tokens but are not hand-tuned.
2. **"Merge N and M."** Spin a v4 that synthesizes (e.g., v3's quilted rhythm + v2's magenta-led centerpiece).
3. **"None of these — pivot."** Less browserbase, more Capita-original; or a different reference entirely.

## The meta-lesson — why the previous attempt failed

Captured from the 2026-06-03 visual-gap investigation workflow (11 agents across capture → diagnose → synthesize). Worth carrying forward to avoid repeating.

**Root cause (primary):** the brainstorm executed a six-step closed self-cancellation. The comparative analysis imported the distinctive browserbase moves (chunky offset shadows on CTAs, marker-block H1 highlights, edge-cropped wordmark, monospace numerals at display scale, separate monogram). Three adversarial "premium-brand lenses" — themselves agents in the same pipeline — rejected all five as "SaaS-landing-page vocabulary that reads cheap on a $35k–$120k advisory page." The brief converted each rejection into a permanent Scope Boundaries prohibition. The brief then preemptively forbade re-litigating the editorial-vs-Cavaro premise. The 26 requirements that survived describe restraint refinements on the existing page, not a reorientation around browserbase. The brief diagnosed its own self-sabotage in Deferred Questions and shipped the requirements anyway.

**Root cause (secondary):** the plan's `KTD-8` made the production default render pixel-identical to the current branch tip until a founder toggled a palette variant. The brief did not require pixel-identical default; the plan chose it on sequencing-safety grounds.

**Code execution was NOT the failure point.** Every unit shipped at spec.

**ce-doc-review ran twice and caught internal inconsistencies but missed the meta-issue.** The skill's subagent template explicitly suppresses *"strength-of-argument concerns"* (motivation thin, premise unconvincing) as advisory-only unless tied to a concrete downstream consequence. *"This brief won't deliver the founder's stated goal"* is precisely the kind of strength-of-argument claim the rubric discounts. The skill caught what it was designed to catch and missed what it was designed to miss.

**ce-code-review did not run.** It would not have caught this anyway — its charter is fidelity-to-plan, not fidelity-to-founder-goal.

**Process changes that would catch this earlier next time:**

1. Add an external-consistency lens to `ce-doc-review`: *"Given the founder's stated reference, if the brief is implemented faithfully, does the rendered result move toward that reference?"* — not subject to the anchor-50 suppression. Premise-level failures land as P0/P1 findings, not confidence-75 advisories in Deferred Questions.
2. Insert a rendered-prototype gate between brainstorm and plan. When a brief invokes a visual reference (a URL, screenshot, "looks like X"), the brainstorm cannot be marked complete until 2–3 rendered hero variants exist and the founder has selected one.
3. Add a comparative-screenshot diff step to `ce-code-review`. When implementation touches CSS or page identity, render before/after at thumbnail scale; if the diff is below a threshold and the brief invoked a visual reference, surface as a P0 finding before merge.

## Artifacts

- **Abandoned planning docs (restored for review):** `docs/abandoned/2026-06-03-browserbase-benchmark-improvements-requirements.md`, `docs/abandoned/2026-06-03-001-feat-browserbase-benchmark-improvements-plan.md`, `docs/abandoned/2026-06-03-lcp-measurements.md`. These are untracked on the working tree — review only, not staged.
- **Backup copies on disk:** `$TMPDIR/capita-archive/` (resolves to `/tmp/claude-501/capita-archive/`).
- **Live brainstorms still in scope:** `docs/brainstorms/2026-05-14-capita-cavaro-visual-redesign-requirements.md` (the prior Cavaro brief — supersedes the 2026-05-04 editorial brief, which is retained for history only).

## Quick commands for the next session

```bash
# Inspect any variant locally
cd /Users/mitch/Documents/GitHub/capitatech-web/.claude/worktrees/wf_c5863679-6cb-2 && pnpm dev
cd /Users/mitch/Documents/GitHub/capitatech-web/.claude/worktrees/wf_c5863679-6cb-3 && pnpm dev
cd /Users/mitch/Documents/GitHub/capitatech-web/.claude/worktrees/wf_c5863679-6cb-4 && pnpm dev

# Switch the primary checkout between branches
cd /Users/mitch/Documents/GitHub/capitatech-web
git checkout worktree-wf_c5863679-6cb-2   # v1
git checkout worktree-wf_c5863679-6cb-3   # v2
git checkout v3-quilted-multi-band         # v3

# Or check out a clean copy of any variant into a new branch
git checkout -b feat/extend-v1 worktree-wf_c5863679-6cb-2
```

## What the next session should ask first

*"Which variant did you pick — v1, v2, v3, a merge of two, or pivot entirely? Then we resume from there."*
