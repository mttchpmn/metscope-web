import React from "react";
import { DataContext } from "../../DataWrapper";

class AawContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>AAW Container</div>;
  }
}
AawContainer.contextType = DataContext;

export default AawContainer;
