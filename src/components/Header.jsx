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
          {loginLogoutButton()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
