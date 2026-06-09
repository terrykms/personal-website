export const getMediumPosts = async () => {
  const rssToJsonApiCall =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40minseo_kim";
  const response = await fetch(rssToJsonApiCall);
  const { status, feed, items } = await response.json();
  const modifiedItems = items.map((item) => {
    const postId = item.title
      .toLowerCase()
      .split(" ")
      .join("-")
      .replace(":", "")
      .replace("'", "")
      .replace("’", ""); // special case for "All O’ one data structure" article.
    const imgMatch = item.description.match(/<img[^>]+src="([^"]+)"/);
    const thumbnail = imgMatch ? imgMatch[1] : null;

    return { ...item, postId, thumbnail };
  });
  return { status, feed, items: modifiedItems };
};

export const getSingleMediumPost = async (postId) => {
  const { items } = await getMediumPosts();
  for (let i = 0; i < items.length; i++) {
    if (postId !== items[i].postId) continue;
    return items[i];
  }
};
