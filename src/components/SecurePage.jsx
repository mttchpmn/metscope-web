import React from "react";

import { DataContext } from "../DataWrapper";

const SecurePage = props => {
  return (
    <div>
      <DataContext.Consumer>
        {data => (data.userToken ? props.children : <p>Not logged in</p>)}
      </DataContext.Consumer>
    </div>
  );
};

export default SecurePage;
