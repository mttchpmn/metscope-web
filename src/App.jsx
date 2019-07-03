import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/CameraAlt";
import SatelliteIcon from "@material-ui/icons/Satellite";
import FlightIcon from "@material-ui/icons/Flight";
import PhotoIcon from "@material-ui/icons/Photo";
import PublicIcon from "@material-ui/icons/Public";

import WebcamPage from "./pages/WebcamPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import "./App.css";
import WindyPage from "./pages/WindyPage";
import SatViewPage from "./pages/SatViewPage";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
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

              <ListItem button>
                <ListItemIcon>
                  <PhotoIcon />
                </ListItemIcon>
                <ListItemText primary={"MetVUW"} />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <FlightIcon />
                </ListItemIcon>
                <ListItemText primary={"QMUG"} />
              </ListItem>

              <Link to="/windy">
                <ListItem button>
                  <ListItemIcon>
                    <PublicIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Windy"} />
                </ListItem>
              </Link>

              <Link to="/satview">
                <ListItem button>
                  <ListItemIcon>
                    <SatelliteIcon />
                  </ListItemIcon>
                  <ListItemText primary={"SatView"} />
                </ListItem>
              </Link>
            </List>
          </div>
        </Header>
        <Route exact path="/" component={WebcamPage} />
        <Route exact path="/webcams" component={WebcamPage} />
        <Route exact path="/windy" component={WindyPage} />
        <Route exact path="/satview" component={SatViewPage} />
      </Router>
    </div>
  );
}

export default App;
