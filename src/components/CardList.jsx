import Card from "./Card";

const CardList = props => {
  return (
    <div>
      {props.profiles.map((data, i) => (
        <Card {...data} key={i} />
      ))}
    </div>
  );
};

export default CardList;
