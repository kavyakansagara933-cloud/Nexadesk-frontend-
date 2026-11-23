# Nexadesk — frontend

Marketing/landing page for **Nexadesk**, a WebRTC remote desktop project: an Electron host app streams a Windows screen directly to a browser and accepts remote mouse input back over the same peer connection.

This repo is the frontend only — it documents and presents the project. The actual host app, signaling server, and control pipeline live in their own repos.

## Stack

- React 19 + Vite
- Plain CSS with a small custom design-token system (no UI framework) — see `src/index.css`
- No external animation libraries — the hero's cursor-travel animation is hand-written in CSS keyframes and respects `prefers-reduced-motion`

## Structure

```
src/
  App.jsx              assembles the page from sections
  index.css            design tokens, resets, shared button/section styles
  components/
    Nav.jsx / .css      sticky nav with mobile sheet menu
    Hero.jsx / .css     headline + the client→host cursor animation
    SpecStrip.jsx       real transport/host/client tech readout
    HowItWorks.jsx      the actual 4-step data flow (capture → stream → control channel → input)
    Status.jsx          honest "working today" vs "not built yet" list
    CTA.jsx             link out to source
    Footer.jsx
```

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Deploying to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and deploys automatically
on every push to `main`. One-time setup after pushing this repo to GitHub:

1. In the repo, go to **Settings → Pages** and set **Source** to "GitHub Actions".
2. If your repo name isn't `nexadesk-frontend`, edit `VITE_BASE_PATH` in the
   workflow file (and nowhere else — Vite reads it at build time) to match.
3. Push to `main` — the site builds and deploys automatically after that.

## Design notes

- Palette: cool graphite paper (`#F1F1EC`) and near-black ink, with a single loud accent (`#FF3E7F`) reserved for the live cursor/CTA — deliberately not the blue that most remote-desktop tools default to.
- Type: a strict four-font system, self-hosted as static `.woff2` files (no Google Fonts CDN, no variable fonts) — `Bricolage Grotesque` (600/700) for the hero and major headings, `Hanken Grotesk` (400–700) as the default body/UI font everywhere else, `IBM Plex Mono` (400/500) reserved for technical labels (transport, host, status), and `Instrument Serif` italic used on exactly two words site-wide as a deliberate editorial accent. Roles are enforced via `--font-display` / `--font-body` / `--font-mono` / `--font-accent` in `src/index.css`, with font files in `src/assets/fonts/` and declarations in `src/fonts.css`.
- Dark mode is a designed counterpart, not an inverted filter — light represents the paper/editorial side, dark represents the machine/runtime side. Toggle lives in the nav, persists via `localStorage`, and respects `prefers-color-scheme` on first visit. All theme values are CSS custom properties in `src/index.css` under `:root[data-theme='dark']`.
- The "Status" section is not marketing copy — it's a real list of what the underlying project can and can't do yet, updated as the project progresses.
