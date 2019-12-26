import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Container
} from "@material-ui/core";

import UTCClock from "./UTCClock";
import LoginLogoutButton from "./LoginLogoutButton";

const useStyles = makeStyles(theme => ({
  appBar: {
    height: 56
  },
  title: {
    flexGrow: 1
  }
}));

const HeaderBar = props => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <div className={classes.title}>
            <Typography variant="h6">Metscope</Typography>
          </div>

          <div align="center">
            <UTCClock />
          </div>

          <div align="right">
            <LoginLogoutButton />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;
