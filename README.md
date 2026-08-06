# personal-website

Minseo Kim's personal website — [Next.js](https://nextjs.org/) (App Router), plain JS, SCSS Modules. Deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev     # start dev server
npm run build   # production build (also prerenders all pages)
npm run start   # serve the production build
npm run lint    # next lint
```

## Structure

- `app/` — routes (Home, About, Projects, Contact, Articles), App Router
- `components/` — UI components grouped by page/domain, each with a colocated `.module.scss`
- `data/` — hand-maintained JSON content for the About and Projects pages
- `lib/` — `medium.js` (fetches posts from the Medium RSS feed at build time), `fonts.js`, `utils.js`
- `styles/` — global SCSS and shared variables

Articles are not stored locally — the `/articles` pages are statically generated at build time from the author's Medium RSS feed.

See `CLAUDE.md` for a more detailed architecture overview.
