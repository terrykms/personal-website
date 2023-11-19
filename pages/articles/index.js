import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMediumPosts } from "@/utils/utils";
import BlogsContainer from "@/components/blogs/blogs-container/blogs-container";

const BlogsPage = (props) => {
  const { status, feed, items, categories } = props;

  const [filteredArticles, setFilteredArticles] = useState(items);
  const router = useRouter();
  const searchCategory = router.query.category;

  useEffect(() => {
    if (searchCategory === undefined || searchCategory === "") return;

    const newArticlesArray = items?.filter((item) =>
      item.categories.includes(searchCategory)
    );
    setFilteredArticles(newArticlesArray);
  }, [searchCategory]);
  return (
    <div>
      <h1>Latest Articles</h1>
      {status === "ok" ? (
        <BlogsContainer
          posts={filteredArticles}
          feed={feed}
          categories={categories}
        />
      ) : (
        <p>
          Error in retrieving articles, please visit{" "}
          <a href="https://medium.com/@minseo_kim">this Medium Feed</a> to check
          out more articles!
        </p>
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  const { status, feed, items } = await getMediumPosts();
  if (status === "error") {
    return {
      props: {
        status,
        url: "https://medium.com/@minseo_kim",
      },
    };
  }
  const categoriesDict = {};
  items?.forEach((item) => {
    const categories = item.categories;
    categories.forEach((category) => {
      if (category in categoriesDict) {
        categoriesDict[category] += 1;
      } else {
        categoriesDict[category] = 1;
      }
    });
  });
  return {
    props: {
      status,
      feed,
      items,
      categories: categoriesDict,
    },
    revalidate: 3600,
  };
};

export default BlogsPage;
