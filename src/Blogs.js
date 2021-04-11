import { useEffect, useState } from 'react';
import BlogList from './BlogList';


const Blog = () => {
    const [blogs, setBlogs] = useState([
        {title: 'first blog is mine', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'second blog is yours', body: 'lorem ipsum....', author: 'yoshi', id: 2},
        {title: 'third blog is he/him', body: 'lorem ipsum...', author: 'luigi', id: 3},
        {title: 'fourth blog is she/her', body: 'lorem ipsum...', author: 'mario', id: 4}
    ])

    const handleDelete = (index)=>{
        const newBlogs = blogs.filter(blog => blogs.indexOf(blog) !== index)
        setBlogs(newBlogs)
    }

    useEffect(()=>{
        console.log('use effect run')
    }, [blogs])


    return ( 
        <div className="blog">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's blogs" />
        </div>
     );
}
 
export default Blog;