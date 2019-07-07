import React, { Component } from "react";
import Axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  withStyles
} from "@material-ui/core";
import QmugViewer from "../components/QmugViewer/QmugViewer";

const styles = {
  card: {
    width: 350
    // maxWidth: 500,
    // minWidth: 500
    // maxHeight: 700,
    // minHeight: 700
  },
  media: {
    width: "100%",
    maxHeight: 400
  },
  appBar: {
    position: "relative"
    // marginBottom: 30
  },
  title: {
    marginLeft: 30,
    flex: 1
  },
  image: {
    minWidth: 750,
    maxWidth: "100%",
    height: "auto",
    maxHeight: 750
  }
};

class MetvuwPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      metar: [],
      aaw: [],
      taf: [],
      sigmet: [],
      grafor: [],
      sigwx: []
    };
  }

  componentDidMount() {
    Axios.get("https://api.metscope.com/weather/scrape/qmug").then(response => {
      console.log(response);
      this.setState({
        metar: response.data.data.metar,
        aaw: response.data.data.aaw,
        taf: response.data.data.taf,
        sigmet: response.data.data.sigmet,
        grafor: response.data.data.grafor,
        sigwx: response.data.data.sigwx,
        loading: false
      });
      console.log("state:\n", this.state);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xl">
        {this.state.loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <div>
            <Typography>Qmug page working</Typography>
            <QmugViewer type="text" name="METAR" dataArray={this.state.metar} />
          </div>
        )}
      </Container>
    );
  }
}

export default withStyles(styles)(MetvuwPage);
