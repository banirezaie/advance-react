import { useState, useEffect } from "react";

const State = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  useEffect(()=>{
    console.log(name, age)
  },[name, age])

  return (
    <div className='state'>
      <h4>
        {name} is {age}
      </h4>
      ;
      <h4>
        {name} is {age}
      </h4>
      <button
        onClick={() => {
          setName("Luigi");
          setAge(30);
        }}
      >
        Change the name
      </button>
    </div>
  );
};

export default State;
