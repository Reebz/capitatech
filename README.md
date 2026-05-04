# capitatech-web

Source for [capitatech.com.au](https://capitatech.com.au) — the Capita Technology advisory firm landing page.

## Stack

Astro 6.2 + Tailwind 4 single-page editorial layout. Static output, no SSR. Self-hosted Inter via `@fontsource-variable/inter`. Hosting on Vercel (auto-deploy from `main`). pnpm + Node ≥22.12.

## Local development

```bash
pnpm install
pnpm dev      # dev server (use `portless capita pnpm dev` to give it a stable https://capita.local URL; otherwise the port prints to stdout)
pnpm build    # static build → dist/
pnpm preview  # serve dist/ locally
pnpm check    # Astro typecheck
```

## Repository layout

```
src/
  layouts/Layout.astro      # <head>, fontsource imports, HTTPS redirect, slot
  pages/index.astro         # single-page landing
  styles/global.css         # @theme inline tokens + design system
  types.d.ts                # fontsource module declarations
public/
  logos/                    # client logos served from /logos/...
docs/
  brainstorms/              # requirements docs
  plans/                    # implementation plans
astro.config.mjs            # Tailwind via @tailwindcss/vite, no adapter
```

## Performance baseline (pre-redesign)

Captured 2026-05-04 against the live `https://capitatech.com.au` (vanilla HTML build on GitHub Pages) via:

```bash
npx lighthouse https://capitatech.com.au --only-categories=performance --form-factor=mobile --quiet --output=json --output-path=/tmp/capita-lcp-baseline.json --chrome-flags="--headless=new"
```

Single-run results (Lighthouse mobile, simulated slow 4G, 4× CPU throttle):

| Metric | Value |
| --- | --- |
| LCP | 2.9 s |
| FCP | 2.9 s |
| TBT | 0 ms |
| CLS | 0 |
| Speed Index | 2.9 s |
| Performance score | 0.89 |

Reference number only. The shipping gate per plan R21 is **LCP ≤ 2.5 s on Lighthouse mobile p75 of 5 runs** — an absolute Web Vitals "good" threshold, not a relative budget against this baseline. Note the current build's 2.9 s is already above the 2.5 s threshold, so the redesign has a tight performance budget. Vercel edge CDN, self-hosted Inter, and Tailwind 4's tree-shaken CSS together should close the gap.

## Deploy

Production deployment runs on Vercel via git-push auto-build. Push to `main` triggers a production deploy; push to any other branch triggers a preview deploy at a Vercel-assigned URL.

### Vercel project setup (one-time)

1. Create a Vercel project linked to this repo.
2. Verify Vercel auto-detects: Astro framework preset, `pnpm install`, Node ≥22.12 (from `package.json` `engines`).
3. If auto-detect picks the wrong package manager or Node version, create `vercel.json` with explicit `installCommand: "pnpm install --frozen-lockfile"` and configure Node version in the project's General settings.
4. Add `capitatech.com.au` (and `www.capitatech.com.au` if used) as production domains.

### DNS migration (one-time, GitHub Pages → Vercel)

Pre-cutover snapshot (replace placeholders with actual `dig` output before the cutover):

```
A     capitatech.com.au.       → <pre-Vercel A record>
MX    capitatech.com.au.       → <existing MX records — must NOT be changed>
TXT   capitatech.com.au.       → <existing TXT records — domain verification etc.>
NS    capitatech.com.au.       → <authoritative nameservers>
```

Cutover steps:

1. `dig capitatech.com.au A`, `dig … MX`, `dig … TXT`, `dig … NS` against the live domain. Capture above.
2. Send a test email to `consulting@capitatech.com.au`. Confirm receipt.
3. At the registrar, update the apex `A` record to Vercel's IP per the Vercel domain dashboard. **Do not touch MX or TXT.**
4. Wait for DNS propagation (`dig capitatech.com.au` returns Vercel's IPs).
5. Send a second test email to `consulting@capitatech.com.au`. If it arrives, cutover is complete. If it doesn't, execute rollback.

### DNS rollback (if email or content delivery breaks)

1. At the registrar, restore the pre-migration `A` record from the snapshot above.
2. Re-add the `CNAME` file at the repo root (one line: `capitatech.com.au`), commit, push to `main`.
3. Wait for DNS propagation (up to 48 h depending on TTL).
4. Confirm `capitatech.com.au` resolves to GitHub Pages and serves the original site.
5. Diagnose what broke before retrying the Vercel migration.

The original `index.html`, `styles.css`, and `CNAME` files remain at the repo root for 7 days post-cutover as a quick-revert safety net. After 7 days of stable Vercel-served traffic, they may be deleted (this happens in a follow-up commit, not in U2).

## Plan and brainstorm docs

- Brainstorm (requirements): [docs/brainstorms/2026-05-04-capita-editorial-redesign-requirements.md](docs/brainstorms/2026-05-04-capita-editorial-redesign-requirements.md)
- Plan: [docs/plans/2026-05-04-001-feat-capita-editorial-redesign-plan.md](docs/plans/2026-05-04-001-feat-capita-editorial-redesign-plan.md)
