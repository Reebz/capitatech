# Hero

Group: Sections

The blue-poster hero band that opens the page. A full-bleed saturated blue plate (`--accent-hover` ground so white copy clears WCAG AA) carrying an oversized display H1, a marker phrase, a lede, the CTA pair, and two mono trust lines.

## Anatomy

- `.hero` — the band. It is intentionally full-bleed (`width: 100vw; margin-inline: calc(50% - 50vw)`), so place it outside any narrow wrapper. Ground is the darker blue `--accent-hover` (#0856c2), text is white.
- `.hero > .container` — re-centres the content to `--container` width.
- `h1.display` — the headline at the top of the type scale (`--type-h1`, Geist display 700).
- `mark.why-mark` — wraps a 1–3 word phrase in a fuchsia marker box (`--highlight`); `box-decoration-break: clone` so a wrapped phrase paints adjoining boxes.
- `.lede` — the supporting line, opaque white on the band.
- `.actions` + `.btn` — the CTA row. Inside `.hero`, `.btn-primary` flips to a white fill with `--blue-ink` label and `.btn-secondary` becomes a fuchsia fill (see the Buttons card).
- `.hero-credential` — mono small-caps trust line under the CTAs.
- `.hero-proof` — one measure-capped sentence of named operator proof.

## Usage

```html
<section class="hero" aria-label="Hero">
  <div class="container">
    <h1 class="display">We <mark class="why-mark">unlock</mark> your AI, customer growth, and productivity.</h1>
    <p class="lede">Every engagement ends with a written plan signed by the principal.</p>
    <div class="actions">
      <a class="btn btn-primary" href="#packages">See services and prices.</a>
      <a class="btn btn-secondary" href="#contact">Talk to us.</a>
    </div>
    <p class="hero-credential">Independent. Run by ex-operators. Advisory only.</p>
    <p class="hero-proof">Led by the operator who rebuilt customer growth at Optus…</p>
  </div>
</section>
```

Notes: the live site also paints an ASCII-spotlight layer (`.hero-ascii`) behind the copy that only darkens the blue under the cursor — omitted here as it is decorative and JS-driven. `.hero ::selection` inverts to white-on-blue.
