---
date: 2026-05-04
topic: capita-editorial-redesign
---

# Capita Technology editorial redesign

## Summary

Restructure capitatech.com.au into a single long-scroll landing page modeled on humanlyagile.com's editorial layout (asymmetric staggered sections, generous whitespace, dramatic type scale, kinetic typography). The page opens with a short manifesto in the hero, then a method-led body — assessment, strategy, roadmap, measurement — each as an asymmetric block with a placeholder for a custom illustration the founder will source later. Adds a founder profile section. Built on Astro, matching the stack used in the recent Cavaro.ai project. Existing color palette retained.

---

## Problem Frame

The current capitatech.com.au is a single-page advisory site that performs the basic lead-gen job (CTAs, contact form with country picker, FAQ, logo wall) but reads as generic B2B advisory. Capita serves senior execs in regulated industries — telco, banking, insurance, property, SaaS — where buying decisions are made on perceived craft, seniority, and depth. The current site's restraint is conservative rather than premium: it does not signal that this is a senior-operator advisory practice rather than a generic consultancy. Competitors at this tier — boutique strategy firms, ex-BCG/McKinsey practices — present with editorial polish and visual confidence the current site does not match.

---

## Actors

- A1. **Prospect**: Senior exec or sponsor at a target firm (telco, banking, insurance, property, SaaS) who lands on the page (cold, referred, or via outbound). Evaluates Capita's seniority and fit in under a minute, then either books a discovery call, contacts directly, or leaves.

---

## Requirements

**Layout and editorial system**

- R1. Single long-scroll landing page; no other pages introduced.
- R2. Layout follows humanlyagile.com's editorial idiom: asymmetric, staggered section composition; generous whitespace; alternating left/right alignment; magazine-style pacing.
- R3. Type scale is dramatic — large display for headlines, confident weight contrasts, restrained body type. Inter remains the type family unless planning recommends a paired display face.
- R4. Kinetic typography: at least one recurring oversized phrase (a manifesto fragment or signature claim) repeats as a kinetic motif at section breaks; treatment may be on-scroll motion, marquee, or display animation, chosen during planning.
- R5. Existing color palette preserved exactly — `--bg #ffffff`, `--text #0b0b0d`, `--muted #4b4b57`, `--accent #0078f0`, plus existing border/shadow tokens. No new accent colors.
- R6. Buttons and form controls retain the existing rounded-pill / 12px-radius idiom; restyle only as needed for the new type scale.
- R7. Sticky header with backdrop-blur retained; nav restyled to match the editorial type scale.

**Content sections (top-to-bottom order)**

- R8. Hero — eyebrow, oversized H1, short manifesto paragraph (1–3 sentences declaring how Capita thinks about AI-powered customer/retention work), primary + secondary CTAs.
- R9. Method body — four asymmetric sections: assessment, strategy/architecture, roadmap, measurement/governance. Each section pairs a heading and prose with a placeholder block for a custom illustration the founder will source later. Placeholder treatment is consistent across all four sections and clearly labeled as awaiting artwork.
- R10. Founder profile — a section introducing the founder: photo placeholder, short bio prose, signed manifesto line. Sized to feel deliberate, not a sidebar.
- R11. Outcomes — preserved from the current site (retention lift, revenue protection, AI that performs); restyled into the editorial layout.
- R12. FAQ — preserved content and single-open accordion behavior; restyled for the new type scale; full keyboard and ARIA support.
- R13. Logo grid — preserved; restyled with editorial spacing.
- R14. Contact — preserved form, country picker, validation, and Formspree submission; restyled within the editorial layout.
- R15. Footer — preserved structure (contact / services / industries tiles, copyright, anchor links); restyled.

**Stack and engineering**

- R16. Astro framework, matching the stack and conventions used in the recent Cavaro.ai project. Planning to inspect the Cavaro.ai repo and inherit its Astro version, component conventions, styling approach, and deployment target.
- R17. Existing JavaScript behaviors preserved and ported to Astro idioms: HTTPS redirect, FAQ accordion (single-open), country code picker (type-ahead, defaults to AU +61), lead form validation (name, email, optional phone), and submission to the existing Formspree endpoint at `https://formspree.io/f/xojdzarv`.
- R18. Build output deployable as static; no server runtime introduced.

**Accessibility, responsive, and performance**

- R19. Skip link, ARIA landmarks, keyboard FAQ, and accessible form labels — all preserved or improved relative to the current site.
- R20. Single-column responsive collapse at mobile breakpoints; kinetic typography and asymmetric layouts degrade gracefully (no horizontal scroll, motion respects `prefers-reduced-motion`).
- R21. Lighthouse performance score on the home page should not regress versus the current site; specifically, Largest Contentful Paint must not exceed the current build's LCP by more than 10%.
- R22. Custom-illustration placeholder blocks must not block page render; they load lazily so a missing or unsourced asset does not affect performance.

---

## Acceptance Examples

- AE1. **Covers R4.** Given the page is loaded on a desktop browser, when the user scrolls past the hero, the recurring kinetic phrase appears at least twice as a section divider with motion treatment (scroll-driven or animated), reinforcing the manifesto without distracting from the body content.
- AE2. **Covers R9, R22.** Given a method section is rendered, when the custom illustration for that section has not yet been sourced, the placeholder block displays a clearly-labeled "illustration TBD" treatment matching the editorial design, and the section continues to render and lay out correctly.
- AE3. **Covers R12, R19.** Given the FAQ is interacted with via keyboard only, when the user activates a question, the corresponding panel expands and any previously open panel collapses (single-open behavior preserved); focus remains visible and ARIA `aria-expanded` updates accordingly.
- AE4. **Covers R14, R17.** Given a prospect submits a valid contact form, when the submission completes, the existing Formspree endpoint receives the payload, the form resets, and the same success message displays as on the current site.
- AE5. **Covers R20.** Given a user has `prefers-reduced-motion: reduce` set, when the kinetic typography section is reached, the recurring phrase displays in a static treatment (no marquee, no scroll-driven motion).

---

## Success Criteria

- A senior exec landing on the page reads the hero, scans the method, and forms an impression of "premium, considered, senior advisory" within the first scroll — distinct from generic-advisory perception.
- The site converts at least as well as the current page on the existing primary CTA (discovery meeting requests via the contact form), with no regression in form completion rate.
- The founder feels the page accurately represents the firm's seniority and would willingly send the URL to a CFO or COO without caveat.
- ce-plan can produce an implementation plan from this document without inventing product behavior, section content, or scope boundaries.

---

## Scope Boundaries

- Color palette changes — explicitly out of scope; current palette is preserved exactly.
- Multi-page architecture — no `/work`, `/about`, `/insights`, or `/contact` pages.
- Case studies — named, anonymized, or composite — explicitly excluded.
- Real custom illustration artwork — placeholders only; the founder sources final artwork separately, after the redesign ships.
- Founder photography sourcing — placeholder only; the real photo is added later.
- Blog or insights content stream.
- Lead-gen logic rebuild (form behavior, country picker logic, Formspree endpoint stay as-is — only ported to Astro idioms).
- Hosting, domain, or DNS changes.
- CMS introduction.
- Analytics rebuild — out of scope unless current setup is broken.
- Reverse-engineering humanlyagile.com's exact CSS — the reference is the editorial idiom, not a clone.

---

## Key Decisions

- **Reference is humanlyagile.com narrowed to its editorial layout idiom.** The asymmetric, staggered, magazine-pacing pattern is what is being lifted. Whimsical illustration tone and casual coaching voice are not.
- **Premium feel is the primary success axis.** Visual quality and editorial restraint are the message. Other axes (case studies, sector insights, manifesto-only) were considered and ruled out.
- **Method-led body with manifesto opener (D + B).** Substance carries the body; positioning carries the hero. Pure manifesto and pure restraint were considered and rejected.
- **Kinetic typography included.** A recurring oversized phrase as a kinetic motif at section breaks is the chosen editorial signature.
- **Custom illustrations included with placeholders.** v1 ships with consistent placeholder blocks; the founder sources real artwork afterwards.
- **Founder profile included.** Senior-operator visibility serves the premium-feel goal.
- **Astro framework matching the Cavaro.ai project.** Decision is the framework choice; specifics (version, dependencies, styling approach) inherit from the Cavaro.ai repo at planning time.
- **Single page retained.** Longer scroll, more sections, but architecturally still one route.

---

## Dependencies / Assumptions

- The Cavaro.ai project repo is accessible to the planner so its Astro setup, conventions, and component patterns can be inherited. If not, planning falls back to current Astro defaults and flags the divergence.
- The Formspree endpoint `https://formspree.io/f/xojdzarv` continues to operate; submission contract unchanged.
- Existing logo assets at `logos/logo-01.png` … `logos/logo-08.png` are reused; no new logos needed for v1.
- Inter is sufficient for the editorial type scale, or planning may propose a paired display face after visual prototyping.
- Founder copy for the hero manifesto, method sections, founder bio, and recurring kinetic phrase will be drafted as part of planning or implementation; it is not blocking this brainstorm.
- Existing form validation hardening (control-character stripping, length caps, honeypot, Formspree POST contract) is treated as correct and is preserved in the port.

---

## Outstanding Questions

### Deferred to Planning

- [Affects R3][Technical] Is Inter alone sufficient for the dramatic editorial type scale, or should planning propose a paired display face? Decide during visual prototyping.
- [Affects R4][Technical] Specific kinetic typography technique — scroll-driven CSS animation, native View Timeline API, or JS-based marquee — resolved against Astro idioms, browser support, and the `prefers-reduced-motion` requirement.
- [Affects R9, R10][Needs research] Custom-illustration placeholder style — solid block, dashed outline, low-fidelity wireframe, or skeleton with caption — chosen to match overall editorial restraint.
- [Affects R16][Needs research] Exact Cavaro.ai stack details — Astro version, component conventions, styling approach (vanilla CSS, Tailwind, or other), deployment target. Planner to inspect the Cavaro.ai repo and inherit its choices.
- [Affects R8, R10][User decision] Specific founder name, bio copy, manifesto wording, and recurring kinetic phrase. Treated as content authoring during implementation, not a planning blocker.
