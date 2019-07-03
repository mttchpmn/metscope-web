import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Metscope</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
