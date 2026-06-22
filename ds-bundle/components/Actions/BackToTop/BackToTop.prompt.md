# BackToTop

Group: Actions

The floating back-to-top control. In production it is `position: fixed` bottom-right, `hidden` by default, and revealed (`.visible`) once the user scrolls past the hero (driven by the `#grid-calm-sentinel` IntersectionObserver). Click scrolls to top — smoothly by default, instantly under `prefers-reduced-motion` — then returns focus to the brand link.

## Card adaptation

To make the control visible and in-flow for preview:

- Added `.visible` to the class list.
- Removed the `hidden` attribute.
- Added inline `position: static` so it sits centered in the card instead of pinning to the viewport corner.

The wrapper centers it with flex; none of these changes belong to the component itself.

## Markup

```html
<button id="back-to-top" class="back-to-top" type="button" aria-label="Back to top" hidden>
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path d="M 10 4 L 4 11 M 10 4 L 16 11 M 10 4 L 10 17" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>
```

The arrow is an inline SVG up-chevron-plus-stem; it inherits color via `currentColor`.
