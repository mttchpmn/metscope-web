import React from "react";
import { DataContext } from "../../DataWrapper";

class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Chart Container</div>;
  }
}
ChartContainer.contextType = DataContext;

export default ChartContainer;
