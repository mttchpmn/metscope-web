import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Button } from "@material-ui/core";

const banner = require("../banner.jpg");
const logo = require("../logo_white.png");

const HomePage = () => {
  return (
    <div style={{ width: "100%", height: "calc(100vh - 56px)" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
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
              <Link to="/webcams">
                <img
                  src={logo}
                  style={{ width: "30%", height: "auto" }}
                  alt="logo"
                />
              </Link>
              <Grid item>
                <Link to="/signup">
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={() => console.log("Signup clicked")}
                  >
                    Sign Up
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
