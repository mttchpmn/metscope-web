import React, { Component } from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";

import { DataContext } from "../DataWrapper";
import SecurePage from "../components/SecurePage";

const areaMap = require("../area-map.png");
const areaMapMobile = require("../area-map_mobile.png");

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SecurePage>
        <Container maxWidth="xl" style={{ marginTop: 20 }}>
          <Typography style={{ fontStyle: "italic" }} align="center">
            Note: This page is currently under development
          </Typography>
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
                  <Typography variant="h6" align="center">
                    Areas selected:
                    {/* {JSON.stringify(data)} */}
                  </Typography>
                  <Typography>{data.getAreaList().join(", ")}</Typography>
                  <img src={areaMap} alt="Areas Map" useMap="#area-map" />

                  <map name="area-map">
                    <area
                      onClick={() => {
                        const val = data.fd;
                        data.updateProp("fd", !val);
                      }}
                      alt="FD"
                      title="FD"
                      coords="62,333,47,323,0,310,3,396,24,397,42,373,44,351"
                      shape="poly"
                      style={{ color: "#000" }}
                    />
                    <area
                      onClick={() => {
                        const val = data.cy;
                        data.updateProp("cy", !val);
                      }}
                      alt="CY"
                      title="CY"
                      coords="63,335,91,352,73,371,43,373,45,351"
                      shape="poly"
                    />
                    <area
                      onClick={() => {
                        const val = data.ge;
                        data.updateProp("ge", !val);
                      }}
                      alt="GE"
                      title="GE"
                      coords="131,380,92,351,73,373,41,372,14,415,12,445,74,445"
                      shape="poly"
                    />
                    <area
                      onClick={() => {
                        const val = data.al;
                        data.updateProp("al", !val);
                      }}
                      alt="AL"
                      title="AL"
                      coords="142,280,113,314,92,350,63,332,135,275"
                      shape="poly"
                    />
                    <area
                      onClick={() => {
                        const val = data.ww;
                        data.updateProp("ww", !val);
                      }}
                      alt="WW"
                      title="WW"
                      coords="2,307,47,321,63,331,134,274,138,264,92,226"
                      shape="poly"
                    />
                  </map>
                </Grid>
              </Grid>
            )}
          </DataContext.Consumer>
        </Container>
      </SecurePage>
    );
  }
}

export default StartPage;
