import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAllPostData } from "@/utils/utils";
import BlogsContainer from "@/components/blogs-container/blogs-container";

const BlogsPage = (props) => {
  const { posts, categories } = props;

  const [filteredPosts, setFilteredPosts] = useState(posts);
  const router = useRouter();
  const searchCategory = router.query.category;

  useEffect(() => {
    if (searchCategory === undefined || searchCategory === "") return;

    const newPostsArray = posts.filter(
      (post) => post.category.toLowerCase() === searchCategory.toLowerCase()
    );
    setFilteredPosts(newPostsArray);
  }, [searchCategory]);
  return (
    <div>
      <h1>Articles</h1>
      <BlogsContainer posts={filteredPosts} categories={categories} />
    </div>
  );
};

export const getStaticProps = async () => {
  const allPosts = await getAllPostData();
  const categories = {};
  allPosts.forEach((post) => {
    const category =
      post.category.charAt(0).toUpperCase() + post.category.slice(1);
    category in categories
      ? (categories[category] += 1)
      : (categories[category] = 1);
  });
  return {
    props: {
      posts: allPosts,
      categories: categories,
    },
  };
};

export default BlogsPage;
