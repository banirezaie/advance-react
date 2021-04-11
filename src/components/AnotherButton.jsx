/** @format */
import { useState } from "react";

const AnotherButton = (props) => {
  const [counter, setCounter] = useState(props.initialAmount);

  const handleClick = () => setCounter(counter + props.incrementAmount);

  return (
    <div>
      <button onClick={handleClick}>+{props.incrementAmount}</button>
      <h1>{counter}</h1>
    </div>
  );
};

export default AnotherButton;
