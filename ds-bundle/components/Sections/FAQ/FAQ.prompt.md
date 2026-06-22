# FAQ

Group: Sections

The procurement-grade FAQ section for Capita Technology. A `.section-head` with one `.display` h2 ("What boards ask us before they sign.") over a `.faq-stack` of six `.faq-card` accordion items, each a buyer-objection handler boards raise before signing.

## Anatomy

- `.faq-stack` — the vertical stack of cards.
- `.faq-card` — one question/answer pair.
  - `.faq-q` — the toggle `<button>`. Carries `aria-expanded`, `aria-controls` (points at its panel id), and an `id` the panel references back via `aria-labelledby`.
    - `.faq-q-num` — the `Q01`–`Q06` ordinal (`aria-hidden`, decorative).
    - `.faq-q-text` — the question.
  - `.faq-a` — the answer panel. `role="region"`, `aria-labelledby` its question button. `hidden` when collapsed.

## Card state (static)

The production accordion is JS-driven (single-open). For this static card the **first item is shown open** and the other five closed, so the card displays both states at once:

- Q01: `aria-expanded="true"`, its `.faq-a` has **no** `hidden` attribute (panel visible).
- Q02–Q06: `aria-expanded="false"`, each `.faq-a` carries `hidden` (panel collapsed).

## Behavior (not included in card)

In production an inline script (`initFAQ`) wires each `.faq-q` so a click toggles its own `aria-expanded` and its panel's `hidden`. Opening one panel closes all others — the accordion is single-open. The card omits the script and freezes the open/closed states described above.
