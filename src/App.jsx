import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";
import WebcamPage from "./pages/WebcamPage";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <WebcamPage />
    </div>
  );
}

export default App;
