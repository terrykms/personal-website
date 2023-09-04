const BlogsContainer = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      {data.map((post) => {
        return (
          <div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <span>{post.date}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsContainer;
