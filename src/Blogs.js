import { useState } from 'react';


const Blog = () => {
    const [blogs, setBlogs] = useState([
        {title: 'first blog is mine', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'second blog is yours', body: 'lorem ipsum....', author: 'yoshi', id: 2},
        {title: 'third blog is he/him', body: 'lorem ipsum...', author: 'luigi', id: 3},
        {title: 'fourth blog is she/her', body: 'lorem ipsum...', author: 'ninja', id: 4}
    ])
    return ( 
        <div className="blog">{
            blogs.map((post, i)=>{
                return (
                  <div className='post' key={i}>
                    <h3>{post.title}</h3>
                    <span>
                       written by {post.author}
                    </span>
                    <p>
                        {post.body}
                    </p>
                  </div>
                );
            })
        }</div>
     );
}
 
export default Blog;