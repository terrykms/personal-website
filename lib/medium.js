import archive from "@/data/articles.json";

const FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40minseo_kim";

// Every page that renders posts is ISR'd at this interval via the fetch below,
// so new Medium posts show up without a redeploy.
const REVALIDATE_SECONDS = 3600;

// "." is kept so existing URLs like ".../next.js-projects" stay stable.
const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-+|-+$/g, "");

const toPost = (item) => {
  const imgMatch = item.description.match(/<img[^>]+src="([^"]+)"/);
  const thumbnail = imgMatch ? imgMatch[1] : null;

  return { ...item, postId: slugify(item.title), thumbnail };
};

// Returns null on failure so callers can fall back to the archive.
const fetchFeedItems = async () => {
  try {
    const response = await fetch(FEED_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    const { status, items } = await response.json();
    if (status !== "ok" || !Array.isArray(items)) {
      throw new Error(`rss2json returned status "${status}"`);
    }
    return items;
  } catch (error) {
    console.error("Failed to fetch Medium feed, using archive only:", error);
    return null;
  }
};

// The feed only holds the latest 10 posts, so it is merged over
// data/articles.json (see scripts/archive-articles.mjs) to keep older posts.
export const getMediumPosts = async () => {
  const feedItems = await fetchFeedItems();

  const byGuid = new Map(archive.articles.map((item) => [item.guid, item]));
  feedItems?.forEach((item) => byGuid.set(item.guid, item));

  const items = [...byGuid.values()]
    .map(toPost)
    .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  return { status: items.length > 0 ? "ok" : "error", items };
};

export const getSingleMediumPost = async (postId) => {
  const { items } = await getMediumPosts();
  return items.find((item) => item.postId === postId);
};
