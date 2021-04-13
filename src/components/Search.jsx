import { Component } from "react";
import axios from "axios";

export class Search extends Component {
  state = {
    userName: "",
  };
  handleSubmit = async event => {
    event.preventDefault();
    const apiData = await axios(
      `https://api.github.com/users/${this.state.userName}`
    );
    console.log(apiData.data);
    this.setState({ userName: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder='GitHub username'
        />
        <button>Add a GitHub user</button>
      </form>
    );
  }
}
