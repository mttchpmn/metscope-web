import React from "react";
import {
  makeStyles,
  Container,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    maxHeight: 700,
    minHeight: 700
  },
  media: {
    width: "100%",
    maxHeight: 400
  },
  appBar: {
    position: "relative"
    // marginBottom: 30
  },
  title: {
    marginLeft: 30,
    flex: 1
  },
  image: {
    minWidth: 750,
    maxWidth: "100%",
    height: "auto",
    maxHeight: 750
  }
});

const FullScreenDialog = props => {
  const classes = useStyles();
  return (
    <Dialog fullScreen open={props.open} onClose={() => props.onClose()}>
      <AppBar className={classes.appBar} style={{height: 56}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => props.onClose()}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* <Grid container spacing={0} direction="column" alignItems="center">
            <Grid item xs={12}>
              
            </Grid>
          </Grid> */}
      <Container disableGutters align="center">
        {props.children}
      </Container>
    </Dialog>
  );
};

export default FullScreenDialog;
