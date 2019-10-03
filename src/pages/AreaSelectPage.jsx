import React, { Component } from "react";
import { Container } from "@material-ui/core";

const areaMap = require("../area-map.png");

class AreaSelectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Container maxWidth="xl" style={{ marginTop: 20 }}>
        <img src={areaMap} alt="Areas Map" />
      </Container>
    );
  }
}

export default AreaSelectPage;
