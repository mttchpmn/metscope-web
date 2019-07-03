import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  iFrame: {
    width: "98vw",
    height: "85vh"
  },
  container: {
    width: "100%",
    height: "100%",
    flex: 1
  }
});

const IFramePage = props => {
  const { title, src } = props;
  const classes = useStyles();
  return <iframe className={classes.iFrame} title={title} src={src} />;
};

export default IFramePage;
