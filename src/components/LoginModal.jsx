import React from "react";
import {
  Button,
  Container,
  Typography,
  Dialog,
  TextField
} from "@material-ui/core";
import Axios from "axios";

import { DataContext } from "../DataWrapper";
import config from "../config";

const LoginModal = ({ visible, onExit }) => {
  const [modalVisible, toggleModal] = React.useState(visible);
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: ""
  });
  const [token, setToken] = React.useState(null);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const makeLoginRequest = () => {
    console.log("Attempting login...");

    Axios({
      method: "post",
      url: `${config.API_ADDRESS}/auth/login`,
      data: {
        email: values.email,
        password: values.password
      }
    }).then(res => {
      console.log(res.status);
      console.log(res.data);
      if (res.status === 200) {
        console.log("Login successful");
        setToken(res.data.token);
      }
    });
  };

  return (
    <Dialog open={visible} onClose={() => onExit()}>
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
                type="password"
                value={values.password}
                onChange={handleChange("password")}
              />
            </div>
            <div>
              <Button onClick={() => makeLoginRequest()}>Login</Button>
            </div>
          </Container>
        )}
      </DataContext.Consumer>
    </Dialog>
  );
};

export default LoginModal;