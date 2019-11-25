import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import App from "./App";
import "./index.css";
import Themer from "./components/Themer";

ReactDOM.render(
  <>
    <CssBaseline />
    <Themer>
      <App />
    </Themer>
  </>,

  document.getElementById("root")
);
