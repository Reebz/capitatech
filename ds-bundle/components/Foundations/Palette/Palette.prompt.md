# Palette

The refreshed Capita Technology brand palette as a swatch grid. Blue is primary; fuchsia is the rare second register. Colored text on light grounds uses `--blue-ink` so it clears WCAG AA — keep the bright `--accent` / `--highlight` for fills, bars, icons, markers, and large type.

## Tokens

| Token | Hex | Role |
| --- | --- | --- |
| `--accent` | `#0a6fe0` | Capita blue: fills, bars, icons, large display, focus rings |
| `--accent-hover` | `#0856c2` | Blue ground carrying white text (hero, nav-cta, buttons); white = 6.7:1 |
| `--blue-ink` | `#0a55ad` | Small colored TEXT/links on light grounds (AA: 6.65:1 on page ground) |
| `--highlight` | `#c61c79` / `oklch(0.55 0.205 352)` | Fuchsia second register: markers, bars, `::selection` |
| `--highlight-hover` | `#a81765` | Fuchsia ground carrying white text (commitment band); white = 7.1:1 |
| `--text` | `#0b0b0d` | Near-black ink |
| `--muted` | `#4b4b57` | Body-muted prose |
| `--muted-strong` | `#3a3a44` | Small-caps eyebrows on white (AA) |
| `--bg` | `#f6f6f3` | Page ground (warm gray-50) |

## Snippet

```html
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px">
  <div>
    <div style="height:72px;border-radius:var(--radius-md);background:var(--accent)"></div>
    <p class="eyebrow">--accent</p>
    <p style="font-family:var(--font-mono)">#0a6fe0</p>
  </div>
  <!-- repeat per token -->
</div>
```

## Notes

- Reference each chip's background via the `var()`, never the raw hex, e.g. `background: var(--accent)`.
- Chips that carry white text in real use (`--accent-hover`, `--highlight`, `--highlight-hover` grounds) show a white "Aa" centered to demonstrate. Only the `-hover` grounds are AA for white body text; bright `--highlight` is large-text only.
- `--bg` gets a `1px var(--border)` outline so the warm-gray chip is visible against the page ground.
- Chip radius is `var(--radius-md)` (12px). Token-name caption uses the `eyebrow` class (mono, uppercase, small caps); hex is inline `var(--font-mono)`.
