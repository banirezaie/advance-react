import { Component } from "react";
import { Part } from "./Part";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

export class PartList extends Component {
  render() {
    return testData.map((data, i) => {
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
