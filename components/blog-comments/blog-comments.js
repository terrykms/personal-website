import { useRouter } from "next/router";
import useSWR from "swr";

import CommentBox from "../comment-box/comment-box";

import classes from "./blog-comments.module.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BlogComments = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data, error, isLoading } = useSWR(
    `/api/blog/comment/${postId}`,
    fetcher
  );
  return (
    <div className={classes.container}>
      <h3>Comments</h3>
      {(isLoading && <div>Loading...</div>) ||
        (error && <div>Error retrieving comments.</div>) ||
        (data.commentData.length === 0 && <div>No comments</div>) ||
        data.commentData.map((commentDetails) => (
          <CommentBox data={commentDetails} key={commentDetails._id} />
        ))}
    </div>
  );
};

export default BlogComments;
