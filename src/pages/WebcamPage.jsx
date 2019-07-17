import React, { Component } from "react";
import Axios from "axios";
import WebcamViewer from "../components/WebcamViewer/WebcamViewer";
import { Container, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LoadingSpinner from "../components/LoadingSpinner";
import config from "../config";

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
      webcams: []
    };
  }

  componentDidMount() {
    Axios.get(`${config.API_ADDRESS}/webcam/load/all`).then(response => {
      this.setState({ webcams: response.data, loading: false });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xl">
        {this.state.loading ? (
          <LoadingSpinner />
        ) : (
          <div className={classes.root}>
            <Grid container spacing={2}>
              {this.state.webcams.map((camObj, index) => {
                // Don't try and generate a Webcam Viewer if we don't have any images to show
                if (camObj && camObj.images.length) {
                  return (
                    <Grid key={camObj.name} item xs={12} sm={6} md={4} lg={3}>
                      <WebcamViewer webcam={camObj} />
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
