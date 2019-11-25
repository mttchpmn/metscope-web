import React, { Component } from "react";
import Axios from "axios";
import _ from "lodash";
import WebcamViewer from "../components/WebcamViewer/WebcamViewer";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { DataContext } from "../DataWrapper";
import LoadingSpinner from "../components/LoadingSpinner";
import config from "../config";
import CloseIcon from "@material-ui/icons/Close";

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
      area: null,
      webcams: [],
      selectedWebcams: []
    };
  }

  componentDidMount() {
    Axios.get(`${config.API_ADDRESS}/data/webcam/load/all`).then(response => {
      const webcams = response.data.data.webcams;

      // let allCams = [].concat(webcams.fiords);

      Object.keys(webcams).map(camName => {
        // allCams = allCams.concat(webcams[camName]);
        this.setState({ [[camName]]: webcams[camName] });
      });

      this.setState({
        // webcams: allCams,
        loading: false
      });
    });
  }

  areaSelector() {
    const selectButton = area => (
      <Button
        onClick={() => this.setState({ area })}
        style={{
          padding: 10,
          margin: 5,
          height: 70,
          width: "100%",
          alignContent: "center",
          backgroundColor: "#00BCD4"
        }}
      >
        <Typography style={{ color: "#fff", fontSize: 28 }} align="center">
          {_.startCase(area)}
        </Typography>
      </Button>
    );
    return (
      <Container maxWidth="lg" style={{ marginTop: 20 }}>
        <DataContext.Consumer>
          {data => (
            <Grid container spacing={2} justify="center">
              {selectButton("clyde")}
              {selectButton("windward")}
              {selectButton("alps")}
              {selectButton("fiords")}
              {selectButton("gore")}
            </Grid>
          )}
        </DataContext.Consumer>
      </Container>
    );
  }

  render() {
    const { classes } = this.props;
    if (!this.state.area) return this.areaSelector();

    return (
      <Container maxWidth="xl">
        {this.state.loading ? (
          <LoadingSpinner />
        ) : (
          <div className={classes.root}>
            <Container align="center">
              <span style={{ fontSize: 18, paddingRight: 15 }}>
                Viewing webcams for: {_.startCase(this.state.area)}
              </span>
              <IconButton onClick={() => this.setState({ area: null })}>
                <CloseIcon />
              </IconButton>
            </Container>

            <Grid container spacing={2}>
              {this.state[this.state.area].map((camObj, index) => {
                // Don't try and generate a Webcam Viewer if we don't have any images to show
                if (camObj.images && camObj.images.length) {
                  return (
                    <Grid
                      key={camObj.name}
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={4}
                      xl={3}
                    >
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
