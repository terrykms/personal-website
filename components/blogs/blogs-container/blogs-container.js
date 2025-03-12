"use client";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import BlogBox from "../blog-box/blog-box";
import classes from "./blogs-container.module.scss";

const BlogsContainer = ({ posts }) => {
  const [filteredArticles, setFilteredArticles] = useState(posts);
  const searchParams = useSearchParams();

  // Memoizing category counts to avoid recalculating on every render
  const categoriesDict = useMemo(() => {
    const dict = {};
    posts?.forEach((post) => {
      post.categories.forEach((category) => {
        dict[category] = (dict[category] || 0) + 1;
      });
    });
    return dict;
  }, [posts]);

  useEffect(() => {
    const category = searchParams.get("category");
    if (!category) {
      setFilteredArticles(posts); // Reset to all posts when no category is selected
      return;
    }

    const newArticlesArray = posts?.filter((post) =>
      post.categories.includes(category)
    );

    setFilteredArticles(newArticlesArray);
  }, [searchParams.toString(), posts]); // Ensure re-renders only when necessary

  return (
    <div className={classes.container}>
      <div className={classes.posts}>
        {filteredArticles.map((post) => (
          <BlogBox post={post} key={post.postId} />
        ))}
      </div>
      <div className={classes.search}>
        <h3>Browse by Category</h3>
        <ul>
          {Object.keys(categoriesDict).map((key) => (
            <li key={key}>
              <Link
                href={{
                  pathname: "/articles",
                  query: { category: key },
                }}
              >
                {key} [{categoriesDict[key]}]
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogsContainer;
