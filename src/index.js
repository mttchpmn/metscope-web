import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "./react-auth0-wrapper";
import "./index.css";
import Themer from "./components/Themer";
import { CssBaseline } from "@material-ui/core";

const onRedirectCalback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain="metscope.au.auth0.com"
    client_id="mkblenKp8BEd01uIzpuwaGjeEC8LzUpM"
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCalback}
  >
    <CssBaseline />
    <Themer>
      <App />
    </Themer>
  </Auth0Provider>,

  document.getElementById("root")
);
