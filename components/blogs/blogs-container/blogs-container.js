"use client";
import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import BlogBox from "../blog-box/blog-box";
import classes from "./blogs-container.module.scss";

const BlogsContainer = ({ posts }) => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const categoriesDict = useMemo(() => {
    const dict = {};
    posts.forEach((post) => {
      post.categories.forEach((category) => {
        dict[category] = (dict[category] || 0) + 1;
      });
    });
    return dict;
  }, [posts]);

  const filteredArticles = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

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
          <li className={classes.categoryItem}>
            <Link
              href="/articles"
              className={!selectedCategory ? classes.activeLink : ""}
            >
              <span>All Articles</span>
              <span className={classes.count}>{posts.length}</span>
            </Link>
          </li>
          {Object.keys(categoriesDict).map((key) => (
            <li key={key} className={classes.categoryItem}>
              <Link
                href={{ pathname: "/articles", query: { category: key } }}
                className={selectedCategory === key ? classes.activeLink : ""}
              >
                <span>{key}</span>
                <span className={classes.count}>{categoriesDict[key]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogsContainer;
