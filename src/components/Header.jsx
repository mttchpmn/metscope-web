import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  makeStyles
} from "@material-ui/core";

import { DataContext } from "../DataWrapper";
import LoginModal from "./LoginModal";
import { logout } from "../logic/auth";
const moment = require("moment");

const useStyles = makeStyles(theme => ({
  appBar: {
    height: 56
  },
  title: {
    marginLeft: 30,
    flexGrow: 1
  }
}));

const Header = props => {
  const classes = useStyles();
  const [modalVisible, toggleModal] = React.useState(false);
  const [time, setTime] = React.useState(moment());

  React.useEffect(() => {
    setInterval(() => {
      setTime(
        moment()
          .utc()
          .format("DD MMM YYYY HH:mm:ss")
      );
    }, 1000);
  });

  const loginLogoutButton = () => {
    return (
      <DataContext.Consumer>
        {data =>
          data.userIsLoggedIn ? (
            <div>
              {/* <Typography>Hi {data.user.firstName}!</Typography> */}
              <Button
                color="inherit"
                onClick={() => {
                  logout(data);

                  window.location.reload();
                }}
              >
                Log Out
              </Button>
            </div>
          ) : (
            <Button color="inherit" onClick={() => toggleModal(true)}>
              Log In
            </Button>
          )
        }
      </DataContext.Consumer>
    );
  };

  return (
    <div>
      <LoginModal visible={modalVisible} onExit={() => toggleModal(false)} />

      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Metscope
          </Typography>
          <Typography textAlign="center" style={{ color: "#505050" }}>
            {`${time} UTC`}
          </Typography>
          {loginLogoutButton()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
