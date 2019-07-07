import React from "react";
import { Container, CircularProgress, Grid } from "@material-ui/core";

const LoadingSpinner = props => {
  return (
    <Grid
      style={{ height: "80vh" }}
      container
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <Container align="center">
          <CircularProgress />
        </Container>
      </Grid>
    </Grid>
  );
};

export default LoadingSpinner;
