# CommitmentBand

Group: Sections

The 90-day commitment — a risk-reversal band that sits just ahead of the priced Services so the guarantee primes the offer. Source: the `<section class="commitment-band section-plate" id="commitment">` block in `src/pages/index.astro`.

## Note on classes

Unlike the other Section cards, this one keeps **both** `commitment-band` and `section-plate`. The band is intentionally full-bleed fuchsia and self-grounded: the `.commitment-band.section-plate` compound selector is what paints the band, so dropping `section-plate` here would lose the fill. It is not wrapped in the generic `.section`/`.container` framing.

## Structure

- `.commitment-band.section-plate` with a `.container`.
- An `.eyebrow` ("Our 90-day commitment") and a `.commitment-body` paragraph.

Visually quiet (small-caps eyebrow, constrained width) but unmistakable. All copy is verbatim. The guarantee applies to every service on the page and to bespoke engagements; it is written into every statement of work.
