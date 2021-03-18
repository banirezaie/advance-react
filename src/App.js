import './App.css';
import Navbar from "./Navbar";
import Home from './Home';
import NewBlog from './NewBlog';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
    <Navbar />
    <div><hr/></div>
    <Route path="/" component={Home} exact/>
    <Route path='/newBlog' component={NewBlog} />
    </div>
  );
}

export default App;
