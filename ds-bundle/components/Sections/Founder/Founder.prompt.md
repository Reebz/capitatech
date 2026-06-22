# Founder

Group: Sections

The "from the founder" section — a personal note from the principal explaining why Capita publishes prices and stays advisory only. On the page it is gated behind `SHOW_FOUNDER` in `src/pages/index.astro`; this card renders it unconditionally.

## Structure

- `.founder-section.section-plate` wrapper with a `.section-head` carrying the `h2.display`.
- `.founder-grid` lays out a `<figure class="founder-photo">` against the `.founder-bio` column.
- The bio column holds two body `<p>`, a `.founder-signed` paragraph (closing with the `.founder-signed-name` span), and a quiet single-line `.founder-crosslink` to the sibling brand.

## Notes

- The real portrait is `/founder.jpg` (`<img class="founder-img">`, 760×950, alt "Mitch Ribar, Principal of Capita Technology"). In this preview card it is replaced with a `.founder-img` placeholder div ("PHOTO", 4/5 aspect) so the card is self-contained.
- The crosslink `<a>` points to `https://ribar.ai` on the live page; here it is `href="#"`.
- All copy is materialized verbatim from the founder block in `src/pages/index.astro`.
