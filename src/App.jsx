import React from "react";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/CameraAlt";
import SatelliteIcon from "@material-ui/icons/Satellite";
import FlightIcon from "@material-ui/icons/Flight";
import PhotoIcon from "@material-ui/icons/Photo";
import PublicIcon from "@material-ui/icons/Public";

import WebcamPage from "./pages/WebcamPage";
import QmugPage from "./pages/QmugPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import WindyPage from "./pages/WindyPage";
import MetvuwPage from "./pages/MetvuwPage";

import { useAuth0 } from "./react-auth0-wrapper";

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

function App() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className="App">
      <CssBaseline />
      {!isAuthenticated && (
        <div>
          <HomePage />
          <button onClick={() => loginWithRedirect({})}>Log In</button>
        </div>
      )}
      {isAuthenticated && (
        <div>
          <HashRouter history={history}>
            <Header>
              <div>
                <List>
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

            <div>
              {isAuthenticated && (
                <button onClick={() => logout()}>Log out</button>
              )}
            </div>

            <div>{JSON.stringify(user)}</div>

            <Route exact path="/" component={WebcamPage} />
            <Route exact path="/webcams" component={WebcamPage} />
            <Route exact path="/metvuw" component={MetvuwPage} />
            <Route exact path="/windy" component={WindyPage} />
            <Route exact path="/qmug" component={QmugPage} />
          </HashRouter>
        </div>
      )}
    </div>
  );
}

export default App;
