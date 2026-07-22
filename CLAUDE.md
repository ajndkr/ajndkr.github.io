# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal blog/site: React 18 + TypeScript on Vite, TanStack Router (file-based), Tailwind CSS + shadcn/ui, blog posts authored as MDX.

## Commands

- `pnpm dev` - start the local dev server
- `pnpm build` - `tsc -b && vite build`, output to `dist/`
- `pnpm preview` - serve the production build locally
- `pnpm lint` - `eslint .`

There is no test suite. Verify changes with `pnpm dev` and a visual check in the browser, and run `pnpm lint` + `pnpm build` before considering a change done.

### Commits

Subject format `type: description`, description starts with an action verb (`add`, `fix`, `update`...). Types: `feat`, `fix`, `refactor`, `chore`. Single-package repo, so no scope.

## Architecture

- `src/routes/` - file-based routes (TanStack Router); `routeTree.gen.ts` is generated, don't hand-edit it
- `src/content/posts/` - MDX blog posts, rendered via `src/routes/posts/$slug.tsx`
- `src/components/ui/` - shadcn/ui primitives; other components live directly under `src/components/`
- `src/config.ts` - site-wide config (name, links, metadata)

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yaml`: `pnpm build` then publish `dist/` to GitHub Pages. Custom domain is set via `public/CNAME`.
