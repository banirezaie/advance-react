const BlogList = ({blogs, title , handleDelete}) => {
  // console.log(blogs)
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((post, i) => {
        return (
          <div className='post' key={i}>
            <h3>{post.title}</h3>
            <span>written by {post.author}</span>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(i)}>Delete blog</button>
          </div>
        );
      })}
    </div>
  );
};
  
export default BlogList;
