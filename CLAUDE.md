# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build (also type-checks JS and prerenders all pages)
npm run start   # serve the production build
npm run lint    # next lint (no ESLint config committed yet — running it interactively prompts to create one)
```

There is no test suite in this repo. `npm run build` is the closest thing to a correctness check available (it fails on broken imports, invalid JSX, and static-generation errors), so run it after non-trivial changes.

## Architecture

Next.js 15 App Router site, plain JS (no TypeScript), SCSS Modules for styling. Deployed on Vercel.

- **`app/`** — routes. Each route is a folder with `page.js` (+ optional `page.module.scss`). `app/layout.js` is the root layout: sets fonts, global metadata/favicons, wraps everything in `components/layout/layout.js`, and mounts Vercel `Analytics`/`SpeedInsights`.
- **`app/articles/[postId]/page.js`** — dynamic route for blog posts. Posts are *not* stored locally: `generateStaticParams` and the page both pull from `lib/medium.js`, which fetches the author's Medium RSS feed (via `rss2json`) at build time and statically generates one page per post. `postId` is derived by slugifying the post title (see `getMediumPosts` in `lib/medium.js`) — there is no stable ID from the source feed.
- **`components/blogs/blog-content/blog-content.js`** — renders a fetched Medium post's HTML description via `dangerouslySetInnerHTML`, sanitized through `isomorphic-dompurify`. This is the only place raw HTML is injected; keep sanitization in place if this code is touched.
- **`data/*.json`** (`education.json`, `experiences.json`, `projects.json`) — hand-maintained content for the About and Projects pages, loaded server-side via `getJSONData` in `lib/utils.js` (reads from `process.cwd()/data`, so it only works in Node/build contexts, not the browser).
- **`components/`** — organized by page/domain (`about/`, `blogs/`, `home/`, `projects/`, `layout/`, `form/`, `ui/`), each component in its own folder with a colocated `.module.scss` file. Import SCSS Modules as `classes` and use `classes.someClass`.
- **`lib/fonts.js`** — the two `next/font/google` fonts (Open Sans, Oswald) used site-wide; imported once in `app/layout.js` and exposed as CSS variables (`--font-open-sans`, `--font-oswald`).
- **`styles/_variables.scss`** / **`styles/globals.scss`** — shared SCSS variables and global styles.
- Path alias `@/*` maps to the repo root (configured in `jsconfig.json`), e.g. `@/lib/medium`, `@/components/layout/layout`.

### Notable dependencies not wired up

`mongodb`, `swr`, `react-markdown`, `remark`, `remark-html`, and `gray-matter` are listed in `package.json` but are not imported anywhere in current source — the contact page (`app/contact/page.js`) is static links (no form submission backend), and blog content comes from the sanitized Medium HTML path above rather than local markdown. `components/form/form-button` and `components/form/form-input` are similarly unused leftovers. Don't assume these are wired into a working feature without checking; if extending contact/blog functionality, this may be dead code worth removing rather than building on.

## Security/deps

Dependabot alerts are monitored via `gh api repos/:owner/:repo/dependabot/alerts`. Note some CVEs live in nested copies of a package bundled *inside* another dependency's `node_modules` (e.g. `next` pins its own internal `postcss`/`sharp`) — bumping the top-level package alone won't fix those; use the `overrides` field in `package.json` to force a single resolved version.
