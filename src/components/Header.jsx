import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Drawer,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { useAuth0 } from "../react-auth0-wrapper";

const useStyles = makeStyles(theme => ({
  appBar: {
    marginBottom: 20
  },
  title: {
    marginLeft: 30,
    flexGrow: 1
  }
}));

const Header = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    drawerOpen: false
  });
  const { logout } = useAuth0();

  const openDrawer = () => {
    setState({ ...state, drawerOpen: true });
  };

  const closeDrawer = () => {
    setState({ ...state, drawerOpen: false });
  };

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" onClick={() => openDrawer()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Metscope (beta)
          </Typography>
          {/* <Button color="inherit" onClick={() => logout()}>
            Log Out
          </Button> */}
        </Toolbar>
      </AppBar>

      <Drawer open={state.drawerOpen} onClose={() => closeDrawer()}>
        {props.children}
      </Drawer>
    </div>
  );
};

export default Header;
