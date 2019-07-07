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
  Typography
} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import FullScreenDialog from "../FullScreenDialog";

const moment = require("moment");

const styles = {
  card: {
    height: 650
  },
  media: {
    width: "100%",
    maxHeight: 400
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

  render() {
    const { classes, webcam } = this.props;

    return (
      <div>
        <FullScreenDialog
          title={webcam.title}
          open={this.state.fullScreen}
          onClose={() => this.handleClose()}
        >
          <img
            className={classes.image}
            src={webcam.images[this.state.index].url}
          />
          <Paper>
            <Typography align="center" variant="h6">
              {moment(this.state.images[this.state.index].date).format(
                "ddd h:mm a"
              )}
            </Typography>

            <Container align="center">
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
            </Container>
          </Paper>
        </FullScreenDialog>

        <Card className={classes.card}>
          <CardHeader title={webcam.title} />
          <CardActionArea onClick={() => this.handleOpen(webcam.title)}>
            <CardMedia
              className={classes.media}
              component="img"
              height="500"
              src={webcam.images[this.state.index].url}
              title={webcam.title}
            />
            <Typography>
              {moment(this.state.images[this.state.index].date).format(
                "ddd h:mm a"
              )}
            </Typography>
          </CardActionArea>
          <CardActions>
            <Container>
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
            </Container>
          </CardActions>
          <CardContent>
            <Typography>{webcam.desc}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

WebcamViewer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WebcamViewer);
