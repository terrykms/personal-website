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
npm run lint    # eslint .
npm run articles:archive  # snapshot the Medium feed into data/articles.json
```

## Structure

- `app/` — routes (Home, About, Projects, Contact, Articles), App Router
- `components/` — UI components grouped by page/domain, each with a colocated `.module.scss`
- `data/` — hand-maintained JSON content for the About and Projects pages
- `lib/` — `medium.js` (fetches posts from the Medium RSS feed at build time), `fonts.js`, `utils.js`
- `styles/` — global SCSS and shared variables

Articles come from the author's Medium RSS feed, merged with the `data/articles.json` archive (the feed only returns the latest 10 posts). Article pages revalidate hourly, so new posts appear without a redeploy; run `npm run articles:archive` after publishing to keep older posts once they fall out of the feed.

See `CLAUDE.md` for a more detailed architecture overview.
