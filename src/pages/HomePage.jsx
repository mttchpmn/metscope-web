import React from "react";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Grid,
  Box
} from "@material-ui/core";

import { useAuth0 } from "../react-auth0-wrapper";

const banner = require("../banner.jpg");
const logo = require("../logo_white.png");

const HomePage = props => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography style={{ flexGrow: 1 }}>MetScope</Typography>
          <Button color="inherit" onClick={() => loginWithRedirect({})}>
            Log In
          </Button>
        </Toolbar>
      </AppBar>
      <div
        style={{
          width: "100%",
          height: 600,
          overflow: "hidden",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Container align="center" style={{ height: "100%" }}>
          <Grid
            container
            justify="center"
            alignItems="center"
            alignContent="center"
            style={{ width: "100%", height: "100%" }}
          >
            <Grid item>
              <img src={logo} style={{ width: "30%", height: "auto" }} />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container align="center" style={{ marginTop: 40 }}>
        <Typography gutterBottom variant="h3">
          MetScope (Beta)
        </Typography>
        <Box style={{ marginBottom: 30 }}>
          <Typography gutterBottom variant="body">
            Your single source of weather for Milford Sound and beyond
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect({})}
        >
          Sign Up
        </Button>
      </Container>
    </div>
  );
};

export default HomePage;
