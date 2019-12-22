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
ReactGA.initialize(trackingId, {
  debug: false,
  siteSpeedSampleRate: 100
});

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const App = () => {
  return (
    <div className="App">
      <DataWrapper>
        <HashRouter history={history}>
          <Header />
          <Route exact path="/" component={HomePage} />

          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />

          <Route exact path="/start" component={StartPage} />
          <Route exact path="/briefing" component={BriefingPage} />
        </HashRouter>
      </DataWrapper>
    </div>
  );
};

export default App;
