const Navbar = () => {
    return (
      <nav className='navbar'>
        <div className='title'>
          <h1>React: A to Z</h1>
        </div>
        <div className='links'>
          <a href='/' className='links'>
            Home
          </a>
          <a href='/create' className='links'>
            New Blog
          </a>
        </div>
      </nav>
    );
}
 
export default Navbar;