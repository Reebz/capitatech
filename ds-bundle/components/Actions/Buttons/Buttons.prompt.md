# Buttons

Group: Actions

The full `.btn` family for Capita Technology. Buttons are pill-shaped (`--pill` tokens) and the saturated fill carries the visual weight — there is no thick border on the `.btn` family.

## Variants

Row A sits on the page ground (light `--bg`):

- `.btn.btn-primary` — saturated blue fill, the dominant call to action.
- `.btn.btn-secondary` — quieter companion to primary.
- `.btn.btn-magenta` — the LinkedIn / off-channel accent.

Row B demonstrates the **hero-scoped inversion**. Inside `.hero`, the `.hero .btn-primary` and `.hero .btn-secondary` selectors win over the base declarations: primary becomes a white fill with blue (`--blue-ink`) label on the blue band, and secondary becomes a fuchsia fill (the founder-call accent, `--highlight-hover`). These styles only apply inside `.hero`, so the row is wrapped in a `.hero` element. The inline `margin/width/max-width` neutralises the hero's full-bleed escape so it fits inside the card frame.

## Usage

```html
<a class="btn btn-primary" href="#">See services and prices.</a>
<a class="btn btn-secondary" href="#">Talk to us.</a>
<a class="btn btn-magenta" href="#">Chat on LinkedIn</a>
```

Focus is an outline ring only (no offset shift). Disabled state is supported via `:disabled` on `<button>` elements.
