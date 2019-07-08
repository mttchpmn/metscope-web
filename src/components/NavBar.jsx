import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Drawer,
  Divider,
  IconButton,
  AppBar,
  Toolbar
} from "@material-ui/core";
import CameraIcon from "@material-ui/icons/CameraAlt";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import FlightIcon from "@material-ui/icons/Flight";
import PhotoIcon from "@material-ui/icons/Photo";
import PublicIcon from "@material-ui/icons/Public";

const NavBar = props => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            onClick={() => {
              console.log("Open");
              setOpen(true);
            }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer variant="persistent" anchor="left" open={open}>
        <IconButton onClick={() => setOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>

        <List>
          <Link to="/webcams">
            <ListItem button>
              <ListItemIcon>
                <CameraIcon />
              </ListItemIcon>
              <ListItemText primary={"Webcams"} />
            </ListItem>
          </Link>

          <Link to="/metvuw">
            <ListItem button>
              <ListItemIcon>
                <PhotoIcon />
              </ListItemIcon>
              <ListItemText primary={"MetVUW"} />
            </ListItem>
          </Link>

          <Link to="/qmug">
            <ListItem button>
              <ListItemIcon>
                <FlightIcon />
              </ListItemIcon>
              <ListItemText primary={"QMUG"} />
            </ListItem>
          </Link>

          <Link to="/windy">
            <ListItem button>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText primary={"Windy"} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
