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

const LoginModal = ({ visible, onExit }) => {
  const [modalVisible, toggleModal] = React.useState(visible);

  const [values, setValues] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Dialog fullscreen open={visible} onClose={() => onExit()}>
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

export default LoginModal;
