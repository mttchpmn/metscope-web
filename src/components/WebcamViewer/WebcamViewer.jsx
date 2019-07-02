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
    maxHeight: 600
  }
};

class WebcamViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.webcam.images.length - 1
      //   activeImage: this.props.webcam.images[index]
    };
    console.log("this.state :", this.state);
  }

  render() {
    const { classes, webcam } = this.props;
    const activeImage = this.props.webcam.images[this.state.index];

    return (
      <Card className={classes.card}>
        <CardHeader title={webcam.title} />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            height="400"
            image={activeImage.url}
            title={webcam.title}
          />
          <Typography>
            {moment(activeImage.date).format("ddd hh:mm a")}
          </Typography>
        </CardActionArea>
        <CardContent>
          <Typography>{webcam.desc}</Typography>
        </CardContent>
        <CardActions>
          <Container>
            <IconButton
              onClick={() => {
                console.log("this.state.index0 :", this.state.index);
                this.setState(prevState => ({
                  index: prevState.index - 1
                }));
                console.log("this.state.index1 :", this.state.index);
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                this.setState(prevState => ({
                  index: prevState.index + 1
                }))
              }
            >
              <NavigateNextIcon />
            </IconButton>
          </Container>
        </CardActions>
      </Card>
    );
  }
}

WebcamViewer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WebcamViewer);
