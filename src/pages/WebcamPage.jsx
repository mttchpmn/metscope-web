import React, { Component } from "react";
import Axios from "axios";
import WebcamViewer from "../components/WebcamViewer/WebcamViewer";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
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
    Axios.get("https://api.metscope.com/webcam/load/all").then(response => {
      this.setState({ webcams: response.data, loading: false });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xl">
        {this.state.loading ? (
          <Container alignItems="center" justify="center">
            <Typography variant="h4">Loading webcams...</Typography>
          </Container>
        ) : (
          <div className={classes.root}>
            <Grid container spacing={3}>
              {Object.keys(this.state.webcams).map(camName => {
                // Don't try and generate a Webcam Viewer if we don't have any images to show
                if (
                  this.state.webcams[camName] &&
                  this.state.webcams[camName].images.length
                ) {
                  return (
                    <Grid key={camName} item xs={12} sm={6} md={4} lg={3}>
                      <WebcamViewer webcam={this.state.webcams[camName]} />
                    </Grid>
                  );
                }
              })}
            </Grid>
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
