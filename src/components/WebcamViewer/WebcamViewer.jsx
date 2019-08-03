import React, { Component } from "react";
import ReactGA from "react-ga";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  CardHeader,
  IconButton,
  Container,
  Paper,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Divider
} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import FullScreenDialog from "../FullScreenDialog";

const moment = require("moment");

const styles = {
  card: {
    // height: 650
    height: 600
  },
  bigCard: {
    // height: "90vh"
  },
  media: {
    width: "100%",
    maxHeight: 400
  },
  bigMedia: {
    // width: "90%"
    maxHeight: 700,
    width: "auto"
  },
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: 30,
    flex: 1
  }
};

class WebcamViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.webcam.images.length - 1,
      images: this.props.webcam.images,
      fullScreen: false
    };
  }

  handleOpen(webcam) {
    console.log("OPEN CALLED");
    ReactGA.event({
      category: "Data Interaction",
      action: "Opened Webcam",
      label: `Webcam: ${webcam}`
    });
    this.setState({ fullScreen: true });
  }

  handleClose() {
    console.log("CLOSE CALLED");
    this.setState({ fullScreen: false });
  }

  mediaControls(webcam) {
    return (
      <Container align="center">
        <Container align="center">
          <IconButton
            onClick={() => this.setState({ index: 0 })}
            disabled={this.state.index === 0}
          >
            <FirstPageIcon />
          </IconButton>

          <IconButton
            disabled={this.state.index <= 4}
            onClick={() =>
              this.setState(prevState => ({
                index: prevState.index - 5
              }))
            }
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            disabled={this.state.index === 0}
            onClick={() =>
              this.setState(prevState => ({
                index: prevState.index - 1
              }))
            }
          >
            <NavigateBeforeIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              this.setState(prevState => ({
                index: prevState.index + 1
              }))
            }
            disabled={this.state.index === webcam.images.length - 1}
          >
            <NavigateNextIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              this.setState(prevState => ({
                index: prevState.index + 5
              }))
            }
            disabled={this.state.index >= webcam.images.length - 5}
          >
            <ArrowForwardIcon />
          </IconButton>

          <IconButton
            onClick={() => this.setState({ index: webcam.images.length - 1 })}
            disabled={this.state.index === webcam.images.length - 1}
          >
            <LastPageIcon />
          </IconButton>
        </Container>
        <Typography align="center" variant="body">
          Image {this.state.index + 1} of {webcam.images.length}
        </Typography>
      </Container>
    );
  }

  render() {
    const { classes, webcam } = this.props;

    return (
      <div>
        <FullScreenDialog
          title={webcam.title}
          open={this.state.fullScreen}
          onClose={() => this.handleClose()}
        >
          <Card className={classes.bigCard}>
            <CardHeader title={webcam.title} />
            <CardActionArea onClick={() => this.handleOpen(webcam.title)}>
              <CardMedia
                className={classes.bigMedia}
                component="img"
                height="100%"
                src={webcam.images[this.state.index].url}
                title={webcam.title}
              />
              <Typography>
                {moment(this.state.images[this.state.index].date).format(
                  "ddd h:mm a"
                )}
              </Typography>
            </CardActionArea>
            <CardActions>{this.mediaControls(webcam)}</CardActions>
          </Card>
        </FullScreenDialog>

        <Card className={classes.card}>
          <CardHeader title={webcam.title} />
          <CardActionArea onClick={() => this.handleOpen(webcam.title)}>
            <CardMedia
              className={classes.media}
              component="img"
              height="500"
              src={webcam.images[this.state.index].url}
              key={webcam.images[this.state.index].url}
              title={webcam.title}
            />
            <Typography>
              {moment(this.state.images[this.state.index].date).format(
                "ddd h:mm a"
              )}
            </Typography>
          </CardActionArea>
          <CardActions>{this.mediaControls(webcam)}</CardActions>
          {/* <Divider variant="middle" />
          <CardContent>
            <Typography>{webcam.desc}</Typography>
          </CardContent> */}
        </Card>
      </div>
    );
  }
}

WebcamViewer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WebcamViewer);
