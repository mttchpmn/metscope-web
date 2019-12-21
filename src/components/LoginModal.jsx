import React from "react";
import {
  Button,
  Container,
  Typography,
  Dialog,
  TextField
} from "@material-ui/core";

import { DataContext } from "../DataWrapper";
import { makeLoginRequest } from "../logic/auth";

const LoginModal = ({ visible, onExit, history }) => {
  const [modalVisible, toggleModal] = React.useState(visible);
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
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
              <Button
                onClick={async () => {
                  await makeLoginRequest(data, values.email, values.password);

                  console.log("data :", data);
                  window.location.reload();
                  setTimeout(
                    function() {
                      console.log("data 2 :", data);
                    }.bind(this),
                    4000
                  );
                }}
              >
                Login
              </Button>
            </div>
          </Container>
        )}
      </DataContext.Consumer>
    </Dialog>
  );
};

export default LoginModal;
