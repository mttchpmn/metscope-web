import React from "react";
import {
  Button,
  Container,
  Typography,
  Dialog,
  TextField
} from "@material-ui/core";
import Axios from "axios";
import { Redirect } from "react-router-dom";

import { DataContext } from "../DataWrapper";
import config from "../config";
import LoadingSpinner from "../components/LoadingSpinner";

const LoginPage = props => {
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: ""
  });
  const [token, setToken] = React.useState("foo");

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const makeLoginRequest = () => {
    setLoading(true);
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
        console.log("res.data.token :", res.data.token);
        // setToken(res.data.token);
        console.log("token :", token);
        setLoading(false);
        return res.data.token;
      }
    });
  };

  const saveTokenToContext = context => {
    return context.updateProp("userToken", token);
  };

  return (
    <Container>
      <DataContext.Consumer>
        {data =>
          loading ? (
            <Container align="center">
              <Typography>Logging In...</Typography>
              <LoadingSpinner />
            </Container>
          ) : (
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
                  onClick={() => {
                    const token = makeLoginRequest();
                    console.log(token);
                    saveTokenToContext(data, token);
                    props.history.push("/select");
                  }}
                >
                  Login
                </Button>
              </div>
            </Container>
          )
        }
      </DataContext.Consumer>
    </Container>
  );
};

export default LoginPage;
