import React from "react";
import { DataContext } from "../../DataWrapper";

class WebcamContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>Webcam Container</div>;
  }
}
WebcamContainer.contextType = DataContext;

export default WebcamContainer;