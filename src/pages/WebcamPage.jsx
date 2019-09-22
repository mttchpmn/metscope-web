import React, { Component } from "react";
import Axios from "axios";
import _ from "lodash";
import WebcamViewer from "../components/WebcamViewer/WebcamViewer";
import {
  Container,
  Grid,
  Typography,
  ButtonBase,
  IconButton
} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LoadingSpinner from "../components/LoadingSpinner";
import config from "../config";
import clydeImg from "../images/clyde.jpg";
import fiordsImg from "../images/fiords.jpg";
import windwardImg from "../images/windward.jpg";
import goreImg from "../images/gore.jpg";
import alpsImg from "../images/alps.jpg";
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
    const imgLookup = {
      clyde: clydeImg,
      windward: windwardImg,
      fiords: fiordsImg,
      alps: alpsImg,
      gore: goreImg
    };
    const button = area => (
      <Grid item xs={12} sm={6} onClick={() => this.setState({ area })}>
        <ButtonBase
          focusRipple
          style={{
            // backgroundColor: "red",
            padding: 10,
            height: 200,
            width: 600,
            alignContent: "center",
            backgroundImage: `url(${imgLookup[area]})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 80%",
            backgroundSize: "cover"
          }}
        >
          <Typography style={{ color: "#fff", fontSize: 28 }} align="center">
            {_.startCase(area)}
          </Typography>
        </ButtonBase>
      </Grid>
    );
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2} justify="center">
          {button("clyde")}
          {button("windward")}
          {button("alps")}
          {button("fiords")}
          {button("gore")}
        </Grid>
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
              <Typography>
                MetScope is having a few issues this week. Rest assured these
                are being worked on. Thanks for your patience.
              </Typography>
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
