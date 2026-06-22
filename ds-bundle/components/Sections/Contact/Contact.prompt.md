# Contact

Group: Sections

The lead-capture section for Capita Technology. A `.section-head` with one long `.display` h2 over a two-column `.contact-grid`: the lead `<form>` on the left, the `.contact-pains` aside on the right.

## Anatomy

- `.contact-grid` — the two-column layout.
- `form#leadForm` — the contact form.
  - `.field-row` — a row of one or two `.field-label` blocks. `.field-row.single` is a full-width row.
  - `.field-label` — wraps a `<span class="micro">` field label, the control, and (for text inputs) a `<p class="field-error" hidden>` slot the validation script reveals.
  - `.field-input` — text inputs and the `<select>`. `.field-textarea` — the message box.
  - `.actions` — the submit `<button class="btn btn-primary">` and the `.btn-magenta` LinkedIn link.
  - `.form-reassurance` — the closing reassurance line (NDA, reply window, no list).
- `.contact-pains` aside — h3, an intro `<p>`, a five-item `<ul>` of board worries, and a closing `.micro` line ("straight to Mitch Ribar, Principal").

## Card adaptation

To make this a self-contained, non-submitting preview:

- `action="#"` (production posts to a Formspree endpoint).
- The off-screen honeypot `<div>` (a hidden `website` field used for spam defense) is dropped.
- The env-gated Cal.com booking block (`.contact-cal`, rendered only when a booking URL is set) is dropped.
- The LinkedIn link `href` is `#`.

All field labels, placeholders, option text, aside copy, and the reassurance line are verbatim. The per-field `<p class="field-error" hidden>` slots are kept so the empty error layout is represented.

## Behavior (not included in card)

In production an inline script validates each field (on blur and on submit), persists a localStorage draft, and POSTs JSON to Formspree with success/error messaging. None of that runs in the card — the form is inert.
