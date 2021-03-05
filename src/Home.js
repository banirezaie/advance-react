const Home = (e) => {

    console.log(e)

const handleClick = (e)=>{
    console.log('hello, ninjas', e)
}

    return (
      <div className='home'>
        <h2>Home Page</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e)=>{console.log('Hello!!', e.target)}}  >click me again</button>
      </div>
    );
}
 
export default Home;