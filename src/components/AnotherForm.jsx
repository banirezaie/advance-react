import { Component } from "react";

export class AnotherForm extends Component {
  state = {
    userName: "",
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.userName);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.userName}
          onChange={event => {
            this.setState({ userName: event.target.value });
          }}
        />
        <button>Another form</button>
      </form>
    );
  }
}
