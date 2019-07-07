import React from "react";
import { Container, CircularProgress } from "@material-ui/core";

const LoadingSpinner = props => {
  return (
    <Container align="center">
      <CircularProgress />
    </Container>
  );
};

export default LoadingSpinner;
