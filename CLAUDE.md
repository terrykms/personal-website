# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build (also type-checks JS and prerenders all pages)
npm run start   # serve the production build
npm run lint    # eslint . (flat config in eslint.config.mjs, next/core-web-vitals)
npm run articles:archive  # merge the current Medium feed into data/articles.json (run after publishing)
```

There is no test suite in this repo. `npm run lint` plus `npm run build` are the correctness checks available (the build fails on broken imports, invalid JSX, and static-generation errors), so run both after non-trivial changes.

## Architecture

Next.js 15 App Router site, plain JS (no TypeScript), SCSS Modules for styling. Deployed on Vercel.

- **`app/`** — routes. Each route is a folder with `page.js` (+ optional `page.module.scss`). `app/layout.js` is the root layout: sets fonts, global metadata/favicons, wraps everything in `components/layout/layout.js`, and mounts Vercel `Analytics`/`SpeedInsights`.
- **`app/articles/[postId]/page.js`** — dynamic route for blog posts. Posts are *not* authored locally: everything goes through `getMediumPosts` in `lib/medium.js`, which fetches the author's Medium RSS feed (via `rss2json`) and merges it over **`data/articles.json`**, an archive keyed by `guid`. The archive exists because the feed only returns the latest 10 posts; refresh it with `npm run articles:archive` (`scripts/archive-articles.mjs`) and commit the result. If the feed fails, the archive alone is served.
  - **ISR:** the feed `fetch` uses `next: { revalidate: 3600 }`, which makes `/`, `/articles` and `/articles/[postId]` revalidate hourly — new posts appear without a redeploy. Slugs not built at deploy time render on demand; non-matching slugs 404 via `notFound()`.
  - **Feed content is a snippet only** (image + one line + "Continue reading" link), not the full article — Medium omits `content:encoded` for this account. Article pages set `alternates.canonical` to the Medium/publication URL and are deliberately left out of `app/sitemap.js`.
  - `postId` is derived by `slugify` in `lib/medium.js` — there is no stable ID from the source feed, so changing `slugify` (or retitling a post on Medium) changes live article URLs. `slugify` deliberately keeps `.` so `next.js` slugs stay stable.
- **`lib/format.js`** (`formatDate`) is separate from **`lib/utils.js`** because `utils.js` imports `fs` and must never be pulled into a client component (`BlogBox` is rendered by the client `BlogsContainer`).
- **SEO:** `lib/site.js` (`SITE_URL`, the canonical `https://www.minseokim.com` origin) feeds `metadataBase` in `app/layout.js`, `app/sitemap.js` and `app/robots.js`. `app/opengraph-image.js` generates the site-wide share image (article pages override it with the post thumbnail). Don't set `openGraph.url` in the root layout — child pages inherit it and would all claim the home URL.
- **`lib/socials.js`** — single source for LinkedIn/GitHub/Medium links, used by the footer and the Contact page.
- **`data/*.json`** (`education.json`, `experiences.json`, `projects.json`) — hand-maintained content for the About and Projects pages, loaded server-side via `getJSONData` in `lib/utils.js` (reads from `process.cwd()/data`, so it only works in Node/build contexts, not the browser).
- **`components/`** — organized by page/domain (`about/`, `blogs/`, `home/`, `projects/`, `layout/`), each component in its own folder with a colocated `.module.scss` file. Import SCSS Modules as `classes` and use `classes.someClass`.
- **`lib/fonts.js`** — the two `next/font/google` fonts (Open Sans, Oswald) used site-wide; imported once in `app/layout.js` and exposed as CSS variables (`--font-open-sans`, `--font-oswald`).
- **`styles/_variables.scss`** / **`styles/globals.scss`** — shared SCSS variables and global styles.
- Path alias `@/*` maps to the repo root (configured in `jsconfig.json`), e.g. `@/lib/medium`, `@/components/layout/layout`.

### Scope notes

The contact page (`app/contact/page.js`) is static links — there is no form or submission backend. Blog content comes only from the sanitized Medium HTML path above; there is no local markdown pipeline.

## Security/deps

Dependabot alerts are monitored via `gh api repos/:owner/:repo/dependabot/alerts`. Note some CVEs live in nested copies of a package bundled *inside* another dependency's `node_modules` (e.g. `next` pins its own internal `postcss`/`sharp`) — bumping the top-level package alone won't fix those; use the `overrides` field in `package.json` to force a single resolved version.
