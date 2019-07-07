import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Container
} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CloseIcon from "@material-ui/icons/Close";

const styles = {
  card: {
    // maxWidth: 500,
    // maxHeight: 700,
    minHeight: 700
  },
  media: {
    width: "100%",
    height: "100%"
  },
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: 30,
    flex: 1
  },
  image: {
    // minWidth: 750,
    // maxWidth: "100%",
    // height: "auto",
    // maxHeight: 750
  }
};

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.startIndex || 0
    };
    console.log("this.props :", this.props);
  }

  render() {
    const { classes, title, images, children } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader title={title} />
        <CardMedia
          className={classes.media}
          component="img"
          height="500"
          src={images[this.state.index]}
          title={title}
        />
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
              disabled={this.state.index === images.length - 1}
            >
              <NavigateNextIcon />
            </IconButton>
          </Container>
        </CardActions>
        <CardContent>{children}</CardContent>
      </Card>
    );
  }
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageCard);
