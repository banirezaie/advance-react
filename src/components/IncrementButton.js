/** @format */
import Button from "./Button";
import Display from "./Display";
import { useState } from "react";

const IncrementButton = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (incrementValue) => setCounter(counter + incrementValue);

  return (
    <div>
      <Button handleClickFunc={handleClick} increment={1} />
      <Button handleClickFunc={handleClick} increment={5} />
      <Button handleClickFunc={handleClick} increment={10} />
      <Button handleClickFunc={handleClick} increment={100} />
      <Display counter={counter} />
    </div>
  );
};

export default IncrementButton;
