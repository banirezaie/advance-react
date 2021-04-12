import { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    const profile = this.props;

    return (
      <div className='card-container'>
        <img
          src={profile.avatar_url}
          alt='upload yours'
          className='profile-image'
        />
        <div
          className='info'
          style={{ color: Math.random() < 0.5 ? "red" : "green" }}
        >
          <h3>{profile.name}</h3>
          <h4>{profile.company}</h4>
        </div>
      </div>
    );
  }
}

export default Card;
