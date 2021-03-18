import { useState, useEffect } from 'react';

const NewBlog = () => {
    const [blog, setBlog] = useState(null)
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => 
        setTimeout(()=> fetch("http://localhost:5000/data")
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch the data for that resource')
            }
            return res.json();
        })
        .then(data => {
            setBlog(data);
            setPending(false)
            setError(null)
        })
        .catch(err => {
            setError(err.message);
            setPending(false)
            setBlog(null)
        })
    , 1000)
        , []) 
    return (
      <div className='blog-list'>
        {pending && <h2>Loading...</h2>}
        {error && <h2>{error}</h2> }
        <h2>All Blogs</h2>
        {blog &&
          blog.articles.map((post, i) => {
            return (
              <div className='post' key={i}>
                <h3>{post.title}</h3>
                <span>written by ....</span>
                <p>{post.body}</p>
              </div>
            );
          })}
      </div>
    );
}
 
export default NewBlog;
