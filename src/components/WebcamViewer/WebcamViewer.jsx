import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const moment = require("moment");

const styles = {
  card: {
    maxWidth: 500
  },
  media: {
    maxHeight: 200
  }
};

class WebcamViewer extends Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
    this.state = {
      index: this.props.webcam.images.length - 1,
      title: this.props.webcam.title,
      desc: this.props.webcam.desc,
      images: this.props.webcam.images
    };
  }

  render() {
    const classes = this.props.styles;
    console.log("styles :", styles);
    console.log("classes :", this.classes);
    const activeImage = this.props.webcam.images[this.state.index];
    console.log("activeImage.url :", activeImage.url);

    return (
      <Card className={this.classes.card}>
        <CardActionArea>
          <CardMedia
            className={this.classes.media}
            component="img"
            height="200"
            image={activeImage.url}
            title={this.state.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.title}
            </Typography>
            <Typography>{this.state.desc}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="primary" />
        </CardActions>
      </Card>
    );
  }
}

WebcamViewer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WebcamViewer);
