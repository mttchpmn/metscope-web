import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, CardHeader, IconButton, Container } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import FullScreenIcon from "@material-ui/icons/Fullscreen";

const moment = require("moment");

const styles = {
  card: {
    maxWidth: 500
  },
  media: {
    width: "100%",
    maxHeight: 400
  }
};

class WebcamViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.webcam.images.length - 1,
      images: this.props.webcam.images
    };
  }

  render() {
    const { classes, webcam } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader title={webcam.title} />
        <CardActionArea>
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
            {this.state.index > 0 ? (
              <IconButton
                onClick={() =>
                  this.setState(prevState => ({
                    index: prevState.index - 1
                  }))
                }
              >
                <NavigateBeforeIcon />
              </IconButton>
            ) : null}
            {this.state.index < webcam.images.length - 1 ? (
              <IconButton
                onClick={() =>
                  this.setState(prevState => ({
                    index: prevState.index + 1
                  }))
                }
              >
                <NavigateNextIcon />
              </IconButton>
            ) : null}
          </Container>
        </CardActions>
        <CardContent>
          <Typography>{webcam.desc}</Typography>
        </CardContent>
      </Card>
    );
  }
}

WebcamViewer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WebcamViewer);
