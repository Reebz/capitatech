# LogoGrid

Group: Sections

The operator track-record band: organisations the Capita principals have worked at and with (not "clients" — several are prior employers, which is why the eyebrow reads "worked at and with"). Source: the `<section class="trusted">` block in `src/pages/index.astro`, expanded from the `clientLogos` array (9 entries).

## Real usage

In the live site each `.logo-cell` holds an `<img>` logo, not text:

```html
<div class="logo-cell">
  <img src="/logos/logo-01.png" alt="American Express" loading="lazy" decoding="async" />
</div>
```

The logos render grayscale at `opacity: 0.6` and return to full color on hover. Because those image paths do not resolve inside the card frame, each `<img>` is replaced here with a placeholder display-font wordmark (`var(--font-display)`, weight 700, `var(--muted)`) carrying the image's real `alt` text.

The grid is a symmetrical bordered layout so the wall reads as an even printed grid with no ragged whitespace; it grows by whole rows as logos are added to `clientLogos`.

## Cells (verbatim alt text)

American Express · JPMorgan Chase · PwC · Macy's · The New York Times · Marriott · Wells Fargo · Optus · Mirvac
