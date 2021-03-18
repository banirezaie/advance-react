import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className='navbar'>
        <div className='title'>
          <h1>React: A to Z</h1>
        </div>
        <div className='links'>
          <Link to='/' className='links'>
            Home
          </Link>
          <Link to='/newBlog' className='links'>
            New Blog
          </Link>
        </div>
      </nav>
    );
}
 
export default Navbar;