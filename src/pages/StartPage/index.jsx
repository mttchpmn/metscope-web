import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";

import { DataContext } from "../../DataWrapper";
import SecurePage from "../../components/SecurePage";
import AreaMap from "./AreaMap";
import ErrorToast from "../../components/ErrorToast";

const StartPage = props => {
  const [open, setOpen] = React.useState(false);

  return (
    // <SecurePage>
    <Container maxWidth="xl" style={{ height: "calc(100vh - 56px)" }}>
      <ErrorToast
        open={open}
        text="No areas selected"
        onExit={() => setOpen(false)}
      />
      <DataContext.Consumer>
        {data => (
          <Grid
            container
            justify="center"
            alignContent="center"
            alignItems="center"
            style={{ width: "100%", height: "100%" }}
          >
            <Grid item style={{ marginBottom: 50 }}>
              <Typography variant="h5" align="center">
                Select briefing areas
              </Typography>
              <Typography align="center">
                {data.getAreaList().length
                  ? data.getAreaList().join(", ")
                  : "Nothing selected"}
              </Typography>

              <AreaMap />

              <Container>
                <Grid item align="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      data.areasSet
                        ? props.history.push("/briefing")
                        : setOpen(true);
                    }}
                  >
                    Get Briefing
                  </Button>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        )}
      </DataContext.Consumer>
    </Container>
    // </SecurePage>
  );
};

export default StartPage;
