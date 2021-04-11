/** @format */

const Button = (props) => {
  const handleClick = () => props.handleClickFunc(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
};

export default Button;
