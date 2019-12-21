import React from "react";
import { DataContext } from "../DataWrapper";
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
import ImageIcon from "@material-ui/icons/Image";

class BriefingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "notam"
    };
  }

  loadContainer(value) {
    const lookup = {
      notam: <div>NOTAM PAGE</div>,
      aerodromes: <div>AERODROME PAGE</div>,
      aaw: <div>AAW PAGE</div>,
      charts: <div>CHARTS PAGE</div>,
      webcams: <div>WEBCAM PAGE</div>,
      metvuw: <div>METVUW PAGE</div>
    };
    return lookup[value];
  }

  render() {
    return (
      <Container>
        <Container>{this.loadContainer(this.state.selectedTab)}</Container>

        <BottomNavigation
          value={this.state.selectedTab}
          onChange={(event, newValue) => {
            console.log("newValue :", newValue);
            this.setState({ selectedTab: newValue });
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
            icon={<ImageIcon />}
          />
        </BottomNavigation>
      </Container>
    );
  }
}
BriefingPage.contextType = DataContext;

export default BriefingPage;
