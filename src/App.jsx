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
import Header from "./components/Header";

import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/HomePage";
import StartPage from "./pages/StartPage";
import BriefingPage from "./pages/BriefingPage";

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

              <Route exact path="/" component={HomePage} />
              <Route exact path="/start" component={StartPage} />
              <Route exact path="/briefing" component={BriefingPage} />
            </HashRouter>
          </div>
        </DataWrapper>
      </div>
    );
  }
}

export default App;
