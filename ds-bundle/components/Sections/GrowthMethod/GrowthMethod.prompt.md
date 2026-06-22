# GrowthMethod

Group: Sections

The Capita Growth Method — the full-bleed dark "engine-room" centerpiece that sits between Outcomes and FAQ on the page. It presents the five-step delivery loop the firm runs on every engagement.

## Structure

- The `.growth-method` wrapper self-grounds: it is intentionally full-bleed and dark, carrying its own background and inverted type. It does not use the `.section` / `.section-plate` framing the ordinary page sections use.
- `.section-head` holds the `h2.display` ("The Capita Growth Method.") and a `.lede.gm-lede` intro.
- `<ol class="gm-steps">` carries the real 01–05 ordering for assistive tech; each `<li class="gm-step">` has:
  - `.gm-num` — the big decorative numeral (`aria-hidden`). 05 is the loop-back accent.
  - `.gm-name`, `.gm-tagline`, `.gm-prose`.
  - `.gm-outcome` — a labelled row pairing the literal "Outcome" label with the step's outcome text.
- `.gm-loop` closes the section with a `.gm-loop-chain` (the five step names joined by `→` arrows and a trailing `↻` repeat glyph, `aria-hidden`) and a `.gm-loop-thesis` paragraph.

## Notes

- Numbered markers (01–05) are intentional and project-sanctioned here: this is the one step-sequence the numbered mono idiom is reserved for, distinct from the "Four principles" engagement section. The numerals are decorative; the `<ol>` carries the semantic order.
- All copy is materialized verbatim from the `growthMethod` data array in `src/pages/index.astro`.
