import React from "react";
import { IconButton, Container, Typography } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const MediaControls = ({ initialIndex, onStateChange }) => {
  const [index, useIndex] = React.useState(initialIndex);
  React.useEffect(() => {
    onStateChange();
  });

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
};

export default MediaControls;
