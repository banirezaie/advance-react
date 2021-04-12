import './App.css';
import Navbar from "./Navbar";
import Home from './Home';
import NewBlog from './NewBlog';
import { Route } from 'react-router-dom';
import IncrementButton from "./components/IncrementButton";
import AnotherButton from "./components/AnotherButton";
import CardList from "./components/CardList";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <hr />
      <CardList />
      <hr />
      <div>
        <AnotherButton incrementAmount={1} initialAmount={0} />
        <hr />
      </div>
      <IncrementButton />
      <Route path='/' component={Home} exact />
      <Route path='/newBlog' component={NewBlog} />
    </div>
  );
}

export default App;
