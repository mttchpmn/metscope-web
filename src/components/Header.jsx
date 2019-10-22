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
  TextField
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { DataContext } from "../DataWrapper";

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
  const [state, setState] = React.useState({
    drawerOpen: false
  });

  const openDrawer = () => {
    setState({ ...state, drawerOpen: true });
  };

  const closeDrawer = () => {
    setState({ ...state, drawerOpen: false });
  };

  const [modalVisible, toggleModal] = React.useState(false);

  const [values, setValues] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const loginLogoutButton = () => {
    return (
      <DataContext.Consumer>
        {data =>
          data.userIsLoggedIn ? (
            <Button color="inherit" onClick={() => console.log("Log OUT")}>
              Log Out
            </Button>
          ) : (
            <Button color="inherit" onClick={() => toggleModal(true)}>
              Log In
            </Button>
          )
        }
      </DataContext.Consumer>
    );
  };

  const loginModal = () => {
    return (
      <Dialog fullscreen open={modalVisible} onClose={() => toggleModal(false)}>
        <DataContext.Consumer>
          {data => (
            <Container align="center">
              <Typography>Login to MetScope</Typography>
              <div>
                <TextField
                  id="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </div>
              <div>
                <TextField
                  id="password"
                  label="Password"
                  value={values.password}
                  onChange={handleChange("password")}
                />
              </div>
              <div>
                <Button onClick={() => console.log(values)}>Login</Button>
              </div>
            </Container>
          )}
        </DataContext.Consumer>
      </Dialog>
    );
  };

  return (
    <div>
      {loginModal()}
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
