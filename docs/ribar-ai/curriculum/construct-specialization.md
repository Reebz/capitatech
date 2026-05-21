---
title: "Ribar.ai — Construct specialization curriculum (weeks 5–12)"
status: draft
created: 2026-05-21
plan: docs/plans/2026-05-21-001-feat-two-brand-launch-plan.md
unit: U26
---

# Ribar.ai — Construct specialization curriculum (weeks 5–12)

Construct is the building track. The end-of-track deliverable is **at least one shipped AI-built tool** that solves a real problem in the exec's work — in production, defensible to their team, owned by them.

Eight modules, one per week. The cadence is week-of-build with weekly 1:1 supervision; Mitch is the senior reviewer, not the implementer. The exec is hands-on with AI as the second pair of hands.

---

## Module B1 (week 5) — Problem selection and scoping

**Learning outcome:** The exec has chosen the tool they will ship, scoped it tight enough to ship in 7–8 weeks, and written a one-page spec.

**Key concepts:**

- Picking a problem with a defined success criterion (not "explore AI for marketing").
- The minimum viable build: what is the smallest tool that delivers value end-to-end?
- Build vs. buy vs. configure decisions for week-5-you.
- Spec format: problem, user, success criterion, anti-success criterion, constraints.

**Session anchor question:** *What is the smallest tool you could ship in 7 weeks that would actually be used by someone — including you?*

**Exec deliverable:** A one-page tool spec, signed by both exec and Mitch.

---

## Module B2 (week 6) — Architecture and tool selection

**Learning outcome:** The exec has chosen the build stack, understands the trade-offs they have made, and can defend the architecture decision.

**Key concepts:**

- The basic build stack for AI-augmented apps in 2026: a runtime (Node / Bun / Python), a framework (Next.js / FastAPI / etc.), an LLM provider (Anthropic / OpenAI / Vercel AI Gateway), a deployment target (Vercel / Cloudflare / Modal).
- Claude Code (or equivalent) as the building copilot.
- Why an MVP does not need a database (and when it does).
- Vector stores: when needed, when overkill.
- Cost projection: rough $/month for the build at expected usage.

**Session anchor question:** *Walking into a room of senior engineers, can you defend each of the three or four architecture choices you have just made?*

**Exec deliverable:** Architecture brief — what stack, why, alternatives considered, what you would change if you were running the build a year from now.

---

## Module B3 (week 7) — Build session one: scaffolding

**Learning outcome:** The exec has scaffolded the tool — initial repo, deploy pipeline, basic UI shell, basic AI call working end-to-end.

**Key concepts:**

- Greenfield project setup with Claude Code or equivalent.
- Repo conventions: branches, commits, the discipline of small commits.
- Continuous deployment: first deploy on day one, every commit thereafter.
- Working with AI as your pair: prompt patterns for code generation that produce maintainable output.
- Reading the code Claude wrote, not just trusting it.

**Session anchor question:** *If I sat at your keyboard right now and said "explain this commit," what would you say?*

**Exec deliverable:** A working tool stub deployed to a real URL. Even if the AI logic is a stub, the round-trip works.

---

## Module B4 (week 8) — Build session two: the AI layer

**Learning outcome:** The exec has the real AI logic working. Prompts are versioned, evaluations are running, errors are handled.

**Key concepts:**

- Prompt engineering at the code level (system prompts, few-shot examples, output structure).
- Streaming vs. non-streaming responses.
- Error handling: model failures, timeouts, malformed output.
- Cost monitoring at the call level.
- Why structured output (JSON mode, tool use) usually beats free-text parsing.
- Evaluation: how do you know the AI layer is doing what you want?

**Session anchor question:** *What does a failed AI call look like in your tool, and what does your user see when it happens?*

**Exec deliverable:** AI layer wired in. At least one passing eval. Cost-per-call tracked.

---

## Module B5 (week 9) — Build session three: real users

**Learning outcome:** At least one real user (the exec, a teammate, a customer) is using the tool. Feedback is captured. Iteration begins.

**Key concepts:**

- Putting the tool in front of one real user with appropriate caveats.
- Capturing structured feedback without a 10-question survey.
- The first ten things you will change after one user touches the tool.
- Privacy and access control: who else CAN see the data, and is that the right answer?

**Session anchor question:** *What is the moment, this week, when the tool stops being yours and becomes useful?*

**Exec deliverable:** At least one real user has used the tool. Three concrete improvements identified from their use.

---

## Module B6 (week 10) — Build session four: hardening

**Learning outcome:** The tool is robust enough for real use — handles errors, has reasonable performance, does not break under typical inputs.

**Key concepts:**

- Edge cases that emerge after one user: long inputs, weird inputs, retries.
- Performance: where is the latency coming from, and what is acceptable?
- Logging and observability at MVP scale.
- Security hygiene: secrets in env, no secrets in client, no leaking PII into logs.
- The 80-20 of production hardening at this scale.

**Session anchor question:** *If the tool went down right now, would you know? Would the user know?*

**Exec deliverable:** Tool hardened. Two or more error cases handled deliberately. Logging in place.

---

## Module B7 (week 11) — Build session five: real shipping

**Learning outcome:** The tool is in production. More than one real user is using it. The exec owns the operational story.

**Key concepts:**

- Production checklists: domain, SSL, error monitoring, uptime monitoring.
- Onboarding: how does a new user discover and start using the tool?
- The handoff story: what happens when the exec is on vacation?
- Documentation: README, prompt rationale, troubleshooting notes.
- Sunset criteria: when would you turn this tool off?

**Session anchor question:** *Who knows this tool exists, and what is the next step for them to use it without your help?*

**Exec deliverable:** Tool in production. README done. At least two real users.

---

## Module B8 (week 12) — Wrap and forward plan

**Learning outcome:** The exec finalises the build story, captures lessons learned, and commits to a 90-days-from-now forward plan.

**Key concepts:**

- Project retro: what worked, what surprised you, what you would change.
- The shippable story: how do you talk about this tool when someone asks "what have you built with AI?"
- Maintenance cost: what does keeping this alive cost in time / money / attention?
- Optional graduation path: Command bolt-on for strategic AI work, monthly retainer, step out clean.
- The 90-day check-in: indicators of "the tool still works," scheduling.

**Session anchor question:** *Three months from now, is this tool still running — and what determined whether it did?*

**Exec deliverable:** Final write-up: what was built, why, what was learned, forward plan. The tool itself remains live (or is intentionally retired with notes on why).

---

## End-of-track deliverables

By the end of week 12, the Construct graduate has:

1. **A shipped AI-built tool** in production, used by at least one real user.
2. **The codebase** — owned by the exec, with the architecture decisions documented.
3. **A written project story** — problem, solution, what was learned. Defensible to engineering peers.
4. **A 90-day operational plan** — what keeps the tool alive, who maintains it, when to revisit.
