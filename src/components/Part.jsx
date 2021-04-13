import { Component } from "react";
import "./card.css";

export class Part extends Component {
  render() {
    return (
      <article className='card-container'>
        <img
          src={this.props.avatar}
          alt='your profile'
          className='profile-image'
        />
        <div className='info'>
          <h3>{this.props.name}</h3>
          <h4>{this.props.company}</h4>
        </div>
      </article>
    );
  }
}
