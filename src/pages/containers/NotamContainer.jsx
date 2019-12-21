import React from "react";
import { DataContext } from "../../DataWrapper";

class NotamContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>NOTAM Container</div>;
  }
}
NotamContainer.contextType = DataContext;

export default NotamContainer;
