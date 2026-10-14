// Merges the current Medium feed into data/articles.json.
// Medium's RSS feed only returns the latest 10 posts, so run this after
// publishing (npm run articles:archive) to keep older posts on the site.
import { readFile, writeFile } from "fs/promises";

const FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40minseo_kim";
const ARCHIVE_PATH = new URL("../data/articles.json", import.meta.url);

const response = await fetch(FEED_URL);
const { status, items } = await response.json();
if (status !== "ok" || !Array.isArray(items)) {
  throw new Error(`rss2json returned status "${status}"`);
}

const archive = JSON.parse(await readFile(ARCHIVE_PATH, "utf8"));
const byGuid = new Map(archive.articles.map((article) => [article.guid, article]));
const before = byGuid.size;

for (const { guid, title, pubDate, link, categories, description } of items) {
  byGuid.set(guid, { guid, title, pubDate, link, categories, description });
}

const articles = [...byGuid.values()].sort(
  (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
);
await writeFile(ARCHIVE_PATH, JSON.stringify({ articles }, null, 2) + "\n");
console.log(
  `Archived ${articles.length} articles (${articles.length - before} new).`
);
