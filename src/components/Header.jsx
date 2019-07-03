import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Drawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  appBar: {
    marginBottom: 30
  },
  title: {
    marginLeft: 30
  }
}));

const Header = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    drawerOpen: false
  });

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
            Metscope
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={state.drawerOpen} onClose={() => closeDrawer()}>
        {props.children}
      </Drawer>
    </div>
  );
};

export default Header;
