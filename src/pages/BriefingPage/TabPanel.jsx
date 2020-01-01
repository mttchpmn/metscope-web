import React from "react";
import { Container, Typography } from "@material-ui/core";

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Container maxWidth="xl" style={{ paddingTop: 10 }}>
          {children}
        </Container>
      )}
    </Typography>
  );
};

export default TabPanel;
