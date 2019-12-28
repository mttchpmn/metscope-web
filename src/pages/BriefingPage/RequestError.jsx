import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader
} from "@material-ui/core";

const RequestError = () => {
  return (
    <Container style={{ height: "calc(100vh - 56px)" }}>
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
        style={{ width: "100%", height: "100%" }}
      >
        <Grid item style={{ marginBottom: 50 }}>
          <Card>
            <CardHeader title="Network Error" />
            <CardContent>
              Error contacting MetScope backend. Please try again soon. If the
              problem persists, please email matt@mattchapman.io
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RequestError;
