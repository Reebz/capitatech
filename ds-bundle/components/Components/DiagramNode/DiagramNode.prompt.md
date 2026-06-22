# DiagramNode

Group: Components

The **chunky-outline node** idiom for flow diagrams — the box that makes up a
sources → hub → outputs diagram. A deliberately *lighter* relative of the
`.package-card` / FAQ chunky idiom: a bolder `1.5px` ink outline, a `~10px`
radius, and a **hard offset shadow** (never a soft blur) so each box reads as a
confident lift off the page. Born on the Cavaro Vision slide and promoted here
so every future diagram shares one weight.

## When to use

- Any boxes-and-arrows diagram: systems of record, pipelines, a platform hub,
  output/distribution lanes, a roadmap of capabilities.
- Reach for the existing heavier `--chunky-*` idiom (`.package-card`, FAQ cards,
  fields) when the element is an interactive control, not a diagram node. Nodes
  sit one weight *below* controls so a dense diagram doesn't read as noisy.

## Tokens (NEW — add to `tokens/tokens.css` and the compiled `:root`)

```css
/* ── Diagram-node idiom — lighter chunky weight for diagram boxes ───────── */
--node-border-width: 1.5px;
--node-border: var(--node-border-width) solid var(--text);
--node-radius: 10px;
--node-shadow-offset: 3px;
--node-shadow: var(--node-shadow-offset) var(--node-shadow-offset) 0
  color-mix(in srgb, var(--text) 16%, transparent);   /* default resting lift */
--node-shadow-accent: 5px 5px 0 var(--accent);          /* active / "shipping now" */
--node-shadow-highlight: 5px 5px 0 var(--highlight);    /* rare second register */
```

## Classes

- `.diagram-node` — base box: `--node-border`, `--node-radius`, white fill,
  `--node-shadow`.
- `.diagram-node.is-active` — the *you-are-here / shipping-now* node. Swaps the
  ink ghost for a solid blue `--node-shadow-accent`; pair with a blue-filled
  `.node-tag`.
- `.diagram-node.is-future` — a *horizon* node. Border goes `dashed`, shadow
  drops to none; pair with a fuchsia-outlined `.node-tag`.
- `.node-row` — compact variant for a source/record (name + optional mono
  `.node-sub`).
- `.node-card` — richer output variant (2-col grid: name + `.node-tag`, with a
  full-width `.node-desc` blurb beneath).
- `.node-tag` — the small mono status pill (`Today` / `Next` / `Horizon`).

## Rules

- **Hard shadow only.** The lift is a solid offset (`Npx Npx 0`), never a blurred
  drop shadow. Default nodes use the 16%-ink ghost; only the single active node
  earns the saturated blue.
- **One active node per diagram.** `is-active` is the focal point — promoting two
  flattens the hierarchy.
- Blue is primary; reserve `--node-shadow-highlight` (fuchsia) for the one moment
  a diagram needs a second register, matching the palette rule elsewhere.
- Arrows/connectors between nodes use `--accent`.

## Provenance

Materialized from the Cavaro pitch deck Vision slide (`.s-vision .src`,
`.s-vision .out`, `.out.today` / `.out.horizon`), where the pattern was tuned by
hand. The magic numbers there (1.5px / 9–11px / 3px / 5px) are now the
`--node-*` tokens above — use the tokens, not the literals, going forward.
