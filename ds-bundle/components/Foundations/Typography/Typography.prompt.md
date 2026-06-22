# Typography

A vertical type specimen showing each Capita Technology tier with its real class, each preceded by a tiny mono caption naming the class. Three faces carry the system: Inter (`--font-sans`, body), Geist (`--font-display`, headings + signature), Geist Mono (`--font-mono`, every small-caps tier).

## Tiers (in order)

| Class / token | Tier | Face / notes |
| --- | --- | --- |
| `.eyebrow` | Mono small-caps kicker | Geist Mono, uppercase, 13px, `--muted-strong` |
| `h1.display` | Display H1 | Geist 700, `--type-h1` clamp(56–120px) |
| `mark.why-mark` | Marker phrase inside H1 | Fuchsia `--highlight` block, white text, `box-decoration-break: clone` |
| `h2.display` | Display H2 | Geist 700, `--type-h2` |
| `.method-cell h3` | Subhead H3 | Geist 600, `--type-h3` (replicated inline) |
| `.lede` | Lede intro | Inter 400, muted, `--type-lede` |
| `--type-body` | Body | Inter, `--type-body` clamp(16–18px) |
| `.section-label` | Section label | Mono small-caps + magenta `::after` rule motif |
| `.micro` | Micro caption | Geist Mono, 13px, default case |
| `.founder-signed` | Signature | Geist italic, `--type-signature` |

## Snippet

```html
<p style="font-family:var(--font-mono);font-size:12px;color:var(--muted)">h1.display</p>
<h1 class="display">Display H1 with a <mark class="why-mark">marker</mark></h1>
```

## Notes

- The display tier is 700 to widen the gulf against the 400 Inter body/prose tier so the pairing reads as a real type relationship.
- `.section-label` paints a short fixed-width magenta rule beneath via `::after` — the editorial second-register motif.
- H3 has no standalone display class; replicate `.method-cell h3` inline (`font-family:var(--font-display);font-size:var(--type-h3);font-weight:600`) or nest in `<article class="method-cell">`.
- Specimen sample text is representative — type specimens are the one place invented sample text is fine.
