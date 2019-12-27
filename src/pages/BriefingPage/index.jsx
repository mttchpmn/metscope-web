import React from "react";
import Axios from "axios";
import { Container, AppBar, Tabs, Tab, Typography } from "@material-ui/core";

import TabPanel from "./TabPanel";
import NotamContainer from "../containers/NotamContainer";
import AerodromeContainer from "../containers/AerodromeContainer";
import AawContainer from "../containers/AawContainer";
import ChartContainer from "../containers/ChartContainer";
import WebcamContainer from "../containers/WebcamContainer";
import MetvuwContainer from "../containers/MetvuwContainer";
import { DataContext } from "../../DataWrapper";
import config from "../../config";

class BriefingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,

      briefLoading: true,
      info: [],
      aerodromes: [],
      aaw: [],
      sigmet: [],
      charts: {},

      webcamLoading: true,
      webcams: [],

      metvuwLoading: true,
      metvuw: []
    };
  }

  componentDidMount() {
    // Return to area select if nothing saved
    if (!this.context.areasSet) this.props.history.push("/start");

    // LOAD BRIEF  ////////////////////////////////////////////
    Axios.get(`${config.API_ADDRESS}/data/weather/load/brief`).then(
      response => {
        const brief = response.data.data.brief;
        // console.log("brief :", response.data.data.brief);
        const aaw = brief.aaw.filter(
          aaw => this.context[aaw.area.toLowerCase()]
        );

        const aerodromes = brief.aerodromes.filter(
          aero => this.context[aero.area.toLowerCase()]
        );

        this.setState({
          briefLoading: false,
          aaw,
          aerodromes,
          info: brief.info,
          sigmet: brief.sigmet,
          charts: brief.charts
        });
        console.log("this.state :", this.state);
      }
    );

    // LOAD WEBCAMS  ////////////////////////////////////////////
    Axios.get(`${config.API_ADDRESS}/data/webcam/load/all`).then(response => {
      const webcams = response.data.data.webcams;
      let filteredWebcams = [];

      const lookup = {
        // Should we change API response to return code rather than name?
        fiords: "fd",
        alps: "al",
        clyde: "cy",
        windward: "ww"
      };

      Object.keys(webcams).map(areaName => {
        const code = lookup[areaName];

        if (this.context[code])
          filteredWebcams = filteredWebcams.concat(webcams[areaName]);
      });

      this.setState({
        webcamLoading: false,
        webcams: filteredWebcams
      });
      console.log("this.state :", this.state);
    });

    // LOAD METVUW  ////////////////////////////////////////////
    Axios.get(`${config.API_ADDRESS}/data/weather/load/metvuw/nzsi`).then(
      response => {
        this.setState({ metvuw: response.data.images, metvuwLoading: false });
      }
    );
  }

  render() {
    return (
      <Container disableGutters align="center" maxWidth="xl">
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.tabIndex}
            onChange={(e, tabIndex) => this.setState({ tabIndex })}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="NOTAM" />
            <Tab label="AERO" />
            <Tab label="AAW" />
            <Tab label="CHART" />
            <Tab label="WEBCAM" />
            <Tab label="METVUW" />
          </Tabs>
        </AppBar>

        <TabPanel value={this.state.tabIndex} index={0}>
          <NotamContainer
            loading={this.state.briefLoading}
            data={this.state.aerodromes}
          />
        </TabPanel>
        <TabPanel value={this.state.tabIndex} index={1}>
          <AerodromeContainer
            loading={this.state.briefLoading}
            data={this.state.aerodromes}
          />
        </TabPanel>
        <TabPanel value={this.state.tabIndex} index={2}>
          <AawContainer
            data={this.state.aaw}
            loading={this.state.briefLoading}
          />
        </TabPanel>
        <TabPanel value={this.state.tabIndex} index={3}>
          <ChartContainer
            loading={this.state.briefLoading}
            data={this.state.charts}
          />
        </TabPanel>
        <TabPanel value={this.state.tabIndex} index={4}>
          <WebcamContainer
            loading={this.state.webcamLoading}
            webcams={this.state.webcams}
          />
        </TabPanel>
        <TabPanel value={this.state.tabIndex} index={5}>
          <MetvuwContainer
            loading={this.state.metvuwLoading}
            images={this.state.metvuw}
          />
        </TabPanel>
      </Container>
    );
  }
}
BriefingPage.contextType = DataContext;

export default BriefingPage;
