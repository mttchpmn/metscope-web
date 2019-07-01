import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";
import WebcamPage from "./pages/WebcamPage";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <WebcamPage />
    </div>
  );
}

export default App;
