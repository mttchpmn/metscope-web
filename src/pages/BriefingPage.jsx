import React from "react";
import { DataContext } from "../DataWrapper";
import Axios from "axios";
import {
  Container,
  BottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";

import AnnouncementIcon from "@material-ui/icons/Announcement";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import ToysIcon from "@material-ui/icons/Toys";
import MapIcon from "@material-ui/icons/Map";
import SatelliteIcon from "@material-ui/icons/Satellite";

import NotamContainer from "./containers/NotamContainer";
import AerodromeContainer from "./containers/AerodromeContainer";
import AawContainer from "./containers/AawContainer";
import ChartContainer from "./containers/ChartContainer";
import WebcamContainer from "./containers/WebcamContainer";
import MetvuwContainer from "./containers/MetvuwContainer";
import config from "../config";

class BriefingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selectedTab: "notam",

      webcams: []
    };
  }

  componentDidMount() {
    // Return to area select if nothing saved
    if (!this.context.areasSet) this.props.history.push("/start");

    // Axios.get(`${config.API_ADDRESS}/data/webcam/load/all`).then(response => {
    Axios.get(`http://api.metscope.com/data/webcam/load/all`).then(response => {
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
        webcams: filteredWebcams
      });
      console.log("this.state :", this.state);
    });
  }

  loadContainer(value) {
    const lookup = {
      notam: <NotamContainer />,
      aerodromes: <AerodromeContainer />,
      aaw: <AawContainer />,
      charts: <ChartContainer />,
      webcams: <WebcamContainer webcams={this.state.webcams} />,
      metvuw: <MetvuwContainer />
    };

    return lookup[value];
  }

  render() {
    return (
      <Container align="center" maxWidth="xl">
        <Container align="center" maxWidth="xl">
          {this.loadContainer(this.state.selectedTab)}
        </Container>

        <BottomNavigation
          value={this.state.selectedTab}
          onChange={(event, newValue) => {
            console.log("newValue :", newValue);
            this.setState({ selectedTab: newValue });
          }}
          style={{
            position: "fixed",
            bottom: 0,
            width: "100vw"
          }}
        >
          <BottomNavigationAction
            value="notam"
            label="NOTAM"
            icon={<AnnouncementIcon />}
          />
          <BottomNavigationAction
            value="aerodromes"
            label="Aerodromes"
            icon={<AirplanemodeActiveIcon />}
          />
          <BottomNavigationAction value="aaw" label="AAW" icon={<ToysIcon />} />
          <BottomNavigationAction
            value="charts"
            label="CHARTS"
            icon={<MapIcon />}
          />
          <BottomNavigationAction
            value="webcams"
            label="Webcams"
            icon={<CameraAltIcon />}
          />
          <BottomNavigationAction
            value="metvuw"
            label="MetVUW"
            icon={<SatelliteIcon />}
          />
        </BottomNavigation>
      </Container>
    );
  }
}
BriefingPage.contextType = DataContext;

export default BriefingPage;
