import React from "react";
import { DataContext } from "../../DataWrapper";

class AerodromeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Aerodrome Container</div>;
  }
}
AerodromeContainer.contextType = DataContext;

export default AerodromeContainer;
