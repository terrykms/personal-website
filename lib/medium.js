// "." is kept so existing URLs like ".../next.js-projects" stay stable.
const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getMediumPosts = async () => {
  const rssToJsonApiCall =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40minseo_kim";
  try {
    const response = await fetch(rssToJsonApiCall);
    const { status, feed, items } = await response.json();
    if (status !== "ok" || !Array.isArray(items)) {
      return { status: "error", feed: null, items: [] };
    }
    const modifiedItems = items.map((item) => {
      const imgMatch = item.description.match(/<img[^>]+src="([^"]+)"/);
      const thumbnail = imgMatch ? imgMatch[1] : null;

      return { ...item, postId: slugify(item.title), thumbnail };
    });
    return { status, feed, items: modifiedItems };
  } catch (error) {
    console.error("Failed to fetch Medium posts:", error);
    return { status: "error", feed: null, items: [] };
  }
};

export const getSingleMediumPost = async (postId) => {
  const { items } = await getMediumPosts();
  return items.find((item) => item.postId === postId);
};
