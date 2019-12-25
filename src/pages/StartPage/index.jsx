import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";

import { DataContext } from "../../DataWrapper";
import SecurePage from "../../components/SecurePage";
import AreaMap from "./AreaMap";

const areaMap = require("../../area-map.png");
const areaMapMobile = require("../../area-map_mobile.png");

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SecurePage>
        <Container maxWidth="xl" style={{ marginTop: 20 }}>
          <DataContext.Consumer>
            {data => (
              <Grid
                container
                justify="center"
                alignContent="center"
                alignItems="center"
                style={{ width: "100%", height: "100%" }}
              >
                <Grid item>
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
                      <Link to="/briefing">
                        <Button
                          variant="contained"
                          color="inherit"
                          onClick={() =>
                            this.context.updateProp("areasSet", true)
                          }
                        >
                          Get Briefing
                        </Button>
                      </Link>
                    </Grid>
                  </Container>
                </Grid>
              </Grid>
            )}
          </DataContext.Consumer>
        </Container>
      </SecurePage>
    );
  }
}
StartPage.contextType = DataContext;

export default StartPage;
