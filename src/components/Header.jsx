import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles
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
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Metscope
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
