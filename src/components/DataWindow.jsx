import React from "react";
import { Container } from "@material-ui/core";

const DataWindow = ({ text }) => {
  return (
    <Container
      disableGutters
      style={{ border: "1px solid #505050", borderRadius: "4px" }}
    >
      <pre
        style={{
          overflowX: "auto",
          textAlign: "left",
          paddingLeft: "4px",
          paddingRight: "4px"
        }}
      >
        {text}
      </pre>
    </Container>
  );
};

export default DataWindow;
