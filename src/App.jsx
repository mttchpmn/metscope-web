import React from "react";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/CameraAlt";
import SatelliteIcon from "@material-ui/icons/Satellite";
import FlightIcon from "@material-ui/icons/Flight";
import PhotoIcon from "@material-ui/icons/Photo";
import PublicIcon from "@material-ui/icons/Public";

import DataWrapper from "./DataWrapper";
import WebcamPage from "./pages/WebcamPage";
import QmugPage from "./pages/QmugPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import WindyPage from "./pages/WindyPage";
import MetvuwPage from "./pages/MetvuwPage";

import AreaSelectPage from "./pages/AreaSelectPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const trackingId = process.env.REACT_APP_TRACKING_ID;
console.log("trackingId :", trackingId);
ReactGA.initialize(trackingId, {
  debug: true,
  siteSpeedSampleRate: 100
});

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: []
    };
  }

  render() {
    return (
      <div className="App">
        <DataWrapper>
          <div>
            <HashRouter history={history}>
              <Header>
                <div>
                  <List>
                    <Link to="/select">
                      <ListItem button>
                        <ListItemIcon>
                          <SatelliteIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Area Select"} />
                      </ListItem>
                    </Link>
                    <Link to="/webcams">
                      <ListItem button>
                        <ListItemIcon>
                          <CameraIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Webcams"} />
                      </ListItem>
                    </Link>

                    <Link to="/metvuw">
                      <ListItem button>
                        <ListItemIcon>
                          <PhotoIcon />
                        </ListItemIcon>
                        <ListItemText primary={"MetVUW"} />
                      </ListItem>
                    </Link>

                    <Link to="/qmug">
                      <ListItem button>
                        <ListItemIcon>
                          <FlightIcon />
                        </ListItemIcon>
                        <ListItemText primary={"QMUG"} />
                      </ListItem>
                    </Link>

                    <Link to="/windy">
                      <ListItem button>
                        <ListItemIcon>
                          <PublicIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Windy"} />
                      </ListItem>
                    </Link>
                  </List>
                </div>
              </Header>

              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route
                exact
                path="/select"
                component={AreaSelectPage}
                foo="bar"
              />
              <Route exact path="/webcams" component={WebcamPage} />
              <Route exact path="/metvuw" component={MetvuwPage} />
              <Route exact path="/windy" component={WindyPage} />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/qmug" component={QmugPage} />
            </HashRouter>
          </div>
        </DataWrapper>
      </div>
    );
  }
}

export default App;
