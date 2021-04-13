import { Component } from "react";
import { Part } from "./Part";



export class PartList extends Component {
  render() {
    return this.props.data.map((data, i) => {
      return (
        <Part
          name={data.name}
          avatar={data.avatar_url}
          company={data.company}
          key={i}
        />
      );
    });
  }
}
