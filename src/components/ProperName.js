// export default function ProperName(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.fName}</h1>
//       <h1>{props.lName}</h1>
//     </div>
//   );
// }

import { Component } from "react";
import nameFormatter from "./utils/helperFuncs";

export default class ProperName extends Component {
  constructor() {
    super();

    this.state = {
      fName: "",
      lName: "",
      nameFormatter(fName, lName) {
        let fullName =
          fName.at(0).toUpperCase() +
          fName.slice(1) +
          " " +
          lName.at(0).toUpperCase() +
          lName.slice(1);
        return fullName;
      },
    };
  }

  render() {
    return (
      <div>
        <h1>
          Hello, {nameFormatter(this.props.fName, this.props.lName)} nice to
          meet you!
        </h1>
      </div>
    );
  }
}
