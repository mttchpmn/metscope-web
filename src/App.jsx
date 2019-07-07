import React from "react";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
import SatViewPage from "./pages/SatViewPage";
import MetvuwPage from "./pages/MetvuwPage";

const trackingId = process.env.REACT_APP_TRACKING_ID;
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router history={history}>
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

              {/* <Link to="/satview">
                <ListItem button>
                  <ListItemIcon>
                    <SatelliteIcon />
                  </ListItemIcon>
                  <ListItemText primary={"SatView"} />
                </ListItem>
              </Link> */}
            </List>
          </div>
        </Header>
        <Route exact path="/" component={WebcamPage} />
        <Route exact path="/webcams" component={WebcamPage} />
        <Route exact path="/metvuw" component={MetvuwPage} />
        <Route exact path="/windy" component={WindyPage} />
        <Route exact path="/qmug" component={QmugPage} />
      </Router>
    </div>
  );
}

export default App;
