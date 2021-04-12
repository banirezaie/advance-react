import './App.css';
import Navbar from "./Navbar";
import Home from './Home';
import NewBlog from './NewBlog';
import { Route } from 'react-router-dom';
import IncrementButton from "./components/IncrementButton";
import AnotherButton from "./components/AnotherButton";
import CardList from "./components/CardList";
import Form from "./components/Form";
import { AnotherForm } from "./components/AnotherForm";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const addNewProfile = profileData => {
    setData([...data, profileData]);
  };

  return (
    <div className='App'>
      <Navbar />
      <hr />
      <Form addNewProfile={addNewProfile} />
      <hr />
      <CardList profiles={data} />
      <AnotherForm />
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
