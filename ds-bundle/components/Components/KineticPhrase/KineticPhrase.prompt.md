# KineticPhrase

Group: Components

A full-bleed rhythmic interruption that runs once between sections. The phrase is large, `nowrap`, and intentionally bleeds past the page container — it escapes the layout via a `50%`-of-`50vw` offset, the same full-bleed mechanism the hero uses.

## Markup

```html
<div class="kinetic-phrase" aria-hidden="true">
  <div class="kinetic-phrase-track">
    <span>Operators, not consultants.</span>
  </div>
</div>
```

- `.kinetic-phrase` — the full-bleed band.
- `.kinetic-phrase-track` — the inner track that receives the scroll-driven `translateX` via a `--kinetic-progress` custom property.
- `aria-hidden="true"` — the phrase is decorative theatre, not content for assistive tech.

## Behavior (not included in card)

In production an IntersectionObserver attaches a scroll handler when the band enters the viewport, computing band-center vs viewport-center as a `-1..+1` value written to `--kinetic-progress`; CSS reads it to slide the track horizontally. Reduced-motion gates the attach, so no scroll listener fires and the phrase stays still. The card omits the script and shows the resting state.

The card wrapper adds `padding-block` so the band is not flush against the card edges.
