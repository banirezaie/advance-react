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
import { PartList } from "./components/PartList";
import { Search } from "./components/Search";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

function App() {
  const [data, setData] = useState([]);
  const addNewProfile = profileData => {
    setData([...data, profileData]);
  };
  const [newData, setNewData] = useState(testData);
  const addNewUser = newUser => {
    setNewData([...newData, newUser]);
    console.log(newData);
  };

  return (
    <div className='App'>
      <Navbar />
      <h1>your code below here</h1>
      <Search addNewUser={addNewUser} />
      <PartList data={newData} />
      <h1>your code up here</h1>
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
