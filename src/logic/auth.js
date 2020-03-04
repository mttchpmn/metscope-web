import Axios from "axios";

import config from "../config";

export const makeLoginRequest = async (context, email, password) => {
  const saveProp = (name, value) => {
    context.updateProp(name, value);
    localStorage.setItem(name, value);
  };

  console.log("Attempting login...");

  const res = await Axios({
    method: "post",
    url: `${config.API_ADDRESS}/auth/login`,
    data: {
      email,
      password
    }
  });

  if (res.status === 200) {
    console.log("Login successful");

    saveProp("userIsLoggedIn", true);
    saveProp("userToken", res.data.token);
    saveProp("userFirstName", res.data.user.firstName);
    saveProp("userLastName", res.data.user.firstName);
    saveProp("userEmail", res.data.user.email);

    return [true, "Login successful"];
  }

  if (res.status === 401) {
    console.log("Incorrect password");

    return [false, "Incorrect password"];
  }

  if (res.status === 404) {
    console.log("User does not exist");

    return [false, "User does not exist"];
  }

  return [false, "Login failed"];
};

export const logout = context => {
  console.log("Logging out...");

  const removeProp = (name, value) => {
    context.updateProp(name, value || null);
    localStorage.removeItem(name);
  };

  removeProp("userIsLoggedIn", false);
  removeProp("userToken");
  removeProp("userFirstName");
  removeProp("userLastName");
  removeProp("userEmail");

  console.log("Logged out successfully");
};
