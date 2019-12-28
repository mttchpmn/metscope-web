import React from "react";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { HashRouter, Route } from "react-router-dom";

import DataWrapper from "./DataWrapper";
import HeaderBar from "./components/HeaderBar";
import { Provider } from "mobx-react";

import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/HomePage";
import StartPage from "./pages/StartPage";
import BriefingPage from "./pages/BriefingPage";
import testStore from "./testStore";

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
        <Provider dataStore={new testStore()}>
          <HashRouter history={history}>
            <HeaderBar />
            <Route exact path="/" component={HomePage} />

            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />

            <Route exact path="/start" component={StartPage} />
            <Route exact path="/briefing" component={BriefingPage} />
          </HashRouter>
        </Provider>
      </DataWrapper>
    </div>
  );
};

export default App;
