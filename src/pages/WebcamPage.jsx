import React, { Component } from "react";
import Axios from "axios";
import WebcamViewer from "../components/WebcamViewer/WebcamViewer";

class WebcamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      webcams: {}
    };
  }

  componentDidMount() {
    Axios.get("http://api.metscope.com/webcam/load/all").then(response => {
      this.setState({ webcams: response.data, loading: false });
      console.log("webcams :", response.data);
    });
  }

  render() {
    return (
      <div className="WebcamPage">
        WebcamPage working
        {this.state.loading ? null : (
          <WebcamViewer webcam={this.state.webcams["glenorchy"]} />
        )}
      </div>
    );
  }
}

export default WebcamPage;
