# Copilot Instructions for `nicolas-com-ar`

This is a small Next.js 13 **app router** project that serves a personal website with
several static pages and a simple blog-like "insights" section powered by MDX files.
Copilot should become productive by knowing how the app is structured and where data
comes from.

---
## Architecture & Big picture

* Root of the application lives in the `app/` directory (Next 13+ app router).  Every
  folder beneath `app` that contains a `page.tsx` (or `.tsx`/`.mdx`) becomes a route.
  Layouts are in `app/layout.tsx` (global) and can be added to sub‑folders if
  needed.
* Global styles are imported in `app/globals.css`.  Tailwind CSS is used everywhere;
  utility classes are applied directly in JSX.
* The only custom React components are under `components/` (`Navbar.tsx`, `Footer.tsx`).
* Pages are simple functional components returning JSX.  There is no server-side
  logic beyond what you see in the files; data fetching is synchronous in the
  examples (e.g. `getAllPosts()` reads the filesystem).

## Content & data flow

* `src/content/insights/` contains `.mdx` files with frontmatter metadata.  Example:
  `ia-day-argentina-2025.mdx` has YAML keys for `title`, `slug`, `date`, etc.
* `lib/posts.ts` exposes `getAllPosts()` which:
  1. reads `src/content/insights` directory
  2. filters for `.mdx` files
  3. parses frontmatter with `gray-matter` and types it as `PostMeta`
  4. sorts by date descending

  This is the only place where the MDX frontmatter is consumed; pages import it
  to render lists or individual posts.
* The dynamic route `app/insights/[slug]/page.tsx` is currently a stub that
  destructures `params` and renders the slug.  The intended pattern is to
  re‑use `getAllPosts()` to locate the matching file and render its MDX content
  (e.g. using `@next/mdx` or `@mdx-js/react`).
* `next.config.ts` enables MDX support via `@next/mdx` and extends `pageExtensions`
  to include `md`, `mdx` alongside `ts`/`tsx`.

## Conventions & tools

* Path alias `@/*` maps to the project root (see `tsconfig.json`).  Imports use
  `@/components/...` or `@/lib/...`.
* No API routes, database, or state management library – the site is entirely
  static/SSR with Next.js defaults.
* Tailwind CSS v4 is configured via `postcss.config.mjs` and `tailwind.config.cjs`.
  Use existing class patterns when adding new pages or components.
* ESLint is set up (`eslint.config.mjs`); run `npm run lint` to check/auto‑fix.
* Scripts in `package.json` are standard Next commands (`dev`, `build`,
  `start`, `lint`).  Development uses `npm run dev` on port 3000.
* There is currently no test suite – adding one would be a project decision.

## Developer workflows & debugging

* To preview changes, simply edit a file under `app/` and the Next.js dev server
  hot‑reloads.  The console shows build errors and the browser overlay reports
  runtime exceptions.
* When working with blog posts, remember to run `npm run dev` after adding a new
  `.mdx` file; the `lib/posts` helper will automatically include it.
* Build output is generated in `.next/` by `npm run build`; deploys are assumed
  to target Vercel or any static/Node environment.  There are no custom
  environment variables or build hooks.

## Project‑specific patterns

* The `InsightsPage` (see `app/insights/page.tsx`) renders a grid of articles
  using the metadata returned by `getAllPosts`.  Each `post.slug` is used both
  for the URL (`/insights/${slug}`) and as the filename for the MDX file.
* The `TopicsPage` shows hard‑coded topic links; there is no model or JSON for
  dynamic topics.
* All JSX uses Spanish text content.  Keep the locale (`<html lang="es">`) and
  text direction in mind when adding new copy.

## Integration points & dependencies

* External dependencies are minimal: `next`, `react`, `react-dom`, `tailwindcss`,
  `gray-matter`, `@mdx-js/react`, and `@next/mdx`.  There are no serverless
  functions or third‑party APIs called from the codebase.
* The MDX pipeline is configured in `next.config.ts` and user code only needs to
  `import {someComponent} from '@/components'` inside MDX if needed (no custom
  MDX provider is set up yet).

---

Feel free to ask for clarifications or point out missing knowledge.  If you
decide to implement features such as rendering MDX in the dynamic slug page or
adding new topics, update this file with examples of how you solved them.