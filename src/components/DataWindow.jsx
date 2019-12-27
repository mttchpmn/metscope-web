import React from "react";
import { Container } from "@material-ui/core";

const DataWindow = ({ text }) => {
  return (
    <Container
      disableGutters
      style={{
        border: "1px solid rgba(50, 50, 50, 0.3)",
        borderRadius: "4px",
        backgroundColor: "#fafafa"
      }}
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
