import React from "react";
import { logout } from "../../logic/auth";
import { DataContext } from "../../DataWrapper";
import { Container, Button } from "@material-ui/core";
import LoginModal from "../LoginModal";

const LoginLogoutButton = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <LoginModal visible={modal} onExit={() => setModal(false)} />

      <DataContext.Consumer>
        {data =>
          data.userIsLoggedIn ? (
            <div>
              {/* <Typography>Hi {data.user.firstName}!</Typography> */}
              <Button
                color="inherit"
                onClick={() => {
                  logout(data);
                  window.location.reload();
                }}
              >
                Log Out
              </Button>
            </div>
          ) : (
            <Button color="inherit" onClick={() => setModal(true)}>
              Log In
            </Button>
          )
        }
      </DataContext.Consumer>
    </div>
  );
};

export default LoginLogoutButton;
