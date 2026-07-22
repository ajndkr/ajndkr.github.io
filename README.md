# ajndkr.com

**A personal blog and site, built to look like a TUI and work like a web app.** React 18 + TypeScript, Vite, Tailwind CSS + shadcn/ui, TanStack Router, MDX. Deploys to GitHub Pages on every push to `main`.

## Quick start

```bash
pnpm install
pnpm dev       # local dev server
pnpm build     # tsc -b && vite build -> dist/
pnpm preview   # serve the production build
pnpm lint      # eslint .
```

## Structure

```
src/
├── routes/       # File-based routing (TanStack Router)
├── components/   # UI components (shadcn/ui in components/ui/)
└── content/      # MDX blog posts
```

## Deploy

Push to `main` triggers `.github/workflows/deploy.yaml`, which builds and publishes `dist/` to GitHub Pages (custom domain via `public/CNAME`).
