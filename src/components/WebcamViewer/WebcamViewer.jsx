import React, { Component } from "react";

class WebcamViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      title: this.props.webcam.title || "FOO",
      desc: "",
      images: []
    };
  }

  componentDidMount() {
    // if (this.props.webcam.title) {
    //   console.log("Loaded...");
    //   this.setState({
    //     images: this.props.webcam.images,
    //     title: this.props.webcam.title,
    //     desc: this.props.webcam.desc
    //   });
    // }
  }

  render() {
    return (
      <div className="WebcamViewer">
        <div>
          Cunt
          <p>{this.state.title}</p>
          {/* <p>{JSON.stringify(this.props)}</p> */}
        </div>
      </div>
    );
  }
}

export default WebcamViewer;
