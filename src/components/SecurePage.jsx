import React from "react";

import { DataContext } from "../DataWrapper";
import { Typography, Container } from "@material-ui/core";

const SecurePage = props => {
  return (
    <div>
      <DataContext.Consumer>
        {data =>
          data.userToken ? (
            props.children
          ) : (
            <Container align="center">
              <Typography>Please log in</Typography>
            </Container>
          )
        }
      </DataContext.Consumer>
    </div>
  );
};

export default SecurePage;
