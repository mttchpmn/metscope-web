import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";
import WebcamPage from "./pages/WebcamPage";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Metscope</Typography>
        </Toolbar>
      </AppBar>
      <WebcamPage />
    </div>
  );
}

export default App;
