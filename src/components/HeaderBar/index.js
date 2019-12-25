import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Container
} from "@material-ui/core";

import UTCClock from "../UTCClock";
import LoginLogoutButton from "./LoginLogoutButton";

const useStyles = makeStyles(theme => ({
  appBar: {
    height: 56
  },
  title: {
    marginLeft: 30,
    flexGrow: 1
  }
}));

const HeaderBar = props => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Container align="left">
            <Typography variant="h6" className={classes.title}>
              Metscope
            </Typography>
          </Container>

          <Container align="center">
            <UTCClock />
          </Container>

          <Container align="right">
            <LoginLogoutButton />
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;
