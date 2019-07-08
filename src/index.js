import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "./react-auth0-wrapper";
import "./index.css";

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
    <App />
  </Auth0Provider>,

  document.getElementById("root")
);
