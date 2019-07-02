import React, { Component } from "react";
import Axios from "axios";
import WebcamViewer from "../components/WebcamViewer/WebcamViewer";
import { Container, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1
  }
};

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
    const { classes } = this.props;
    return (
      <Container maxWidth="xl">
        {this.state.loading ? null : (
          <div className={classes.root}>
            <Grid container spacing={3}>
              {Object.keys(this.state.webcams).map(camName => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <WebcamViewer webcam={this.state.webcams[camName]} />
                </Grid>
              ))}
            </Grid>
            <WebcamViewer webcam={this.state.webcams["glenorchy"]} />
          </div>
        )}
      </Container>
    );
  }
}

WebcamPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WebcamPage);
