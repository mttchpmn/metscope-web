import React from "react";
import { Button, Container, Typography, TextField } from "@material-ui/core";
import Axios from "axios";

import { DataContext } from "../DataWrapper";
import config from "../config";
import LoadingSpinner from "../components/LoadingSpinner";

const SignupPage = props => {
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const makeSignupRequest = async () => {
    setLoading(true);
    console.log("Attempting to create new user");

    const res = await Axios({
      method: "post",
      url: `${config.API_ADDRESS}/auth/signup`,
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password
      }
    });

    console.log("res.status: ", res.status);
    console.log("res.data :", res.data);

    // 201 - new user

    if (res.status === 201) {
      console.log("User created successfully");
      setLoading(false);
      return;
    }
    console.error("Error creating user");
  };

  return (
    <Container>
      <DataContext.Consumer>
        {data =>
          loading ? (
            <Container align="center">
              <Typography>Signing you up...</Typography>
              <LoadingSpinner />
            </Container>
          ) : (
            <Container align="center">
              <Typography>Signup to MetScope</Typography>
              <div>
                <TextField
                  id="firstName"
                  label="First Name"
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                />
              </div>
              <div>
                <TextField
                  id="lastName"
                  label="Last Name"
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                />
              </div>
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
                    const token = await makeSignupRequest();
                    props.history.push("/login");
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </Container>
          )
        }
      </DataContext.Consumer>
    </Container>
  );
};

export default SignupPage;
