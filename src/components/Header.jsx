import React from "react";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Drawer,
  Dialog,
  TextField,
  Link
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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
  const [state, setState] = React.useState({
    drawerOpen: false
  });

  const openDrawer = () => {
    setState({ ...state, drawerOpen: true });
  };

  const closeDrawer = () => {
    setState({ ...state, drawerOpen: false });
  };

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
          <IconButton edge="start" onClick={() => openDrawer()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Metscope
          </Typography>
          {loginLogoutButton()}
        </Toolbar>
      </AppBar>

      <Drawer open={state.drawerOpen} onClose={() => closeDrawer()}>
        {props.children}
      </Drawer>
    </div>
  );
};

export default Header;
