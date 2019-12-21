import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Themer from "./components/Themer";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <div>
    <CssBaseline />
    <Themer>
      <App />
    </Themer>
  </div>,

  document.getElementById("root")
);
