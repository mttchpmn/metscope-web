import React from "react";
import { DataContext } from "../../DataWrapper";

class MetvuwContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Metvuw Container</div>;
  }
}
MetvuwContainer.contextType = DataContext;

export default MetvuwContainer;
