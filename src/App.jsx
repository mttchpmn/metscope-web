import React from "react";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
<<<<<<< HEAD
import { HashRouter, Route, Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/CameraAlt";
import SatelliteIcon from "@material-ui/icons/Satellite";
import FlightIcon from "@material-ui/icons/Flight";
import PhotoIcon from "@material-ui/icons/Photo";
import PublicIcon from "@material-ui/icons/Public";
=======
import { HashRouter, Route } from "react-router-dom";
>>>>>>> @{-1}

import DataWrapper, { DataContext } from "./DataWrapper";
import HeaderBar from "./components/HeaderBar";

import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/HomePage";
import StartPage from "./pages/StartPage";
import BriefingPage from "./pages/BriefingPage";
import { Container, Typography } from "@material-ui/core";

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

<<<<<<< HEAD
            {/* <div>{JSON.stringify(user)}</div> */}
            <DataWrapper>
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
            </DataWrapper>
          </HashRouter>
        </div>
      </div>
    );
  }
}
=======
const App = () => {
  // return (
  //   <Container align="center">
  //     <Typography>Under Maintenance</Typography>
  //     <Typography>
  //       MetScope is currently down for maintenance - apologies for the
  //       inconvenience
  //     </Typography>
  //   </Container>
  // );
  return (
    <div className="App">
      <DataWrapper>
        <HashRouter history={history}>
          <HeaderBar />
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
>>>>>>> @{-1}

export default App;
