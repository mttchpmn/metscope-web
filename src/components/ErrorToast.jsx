import React from "react";
import { Snackbar, IconButton, Button } from "@material-ui/core";
import { CloseIcon } from "@material-ui/icons/Close";

const ErrorToast = props => {
  const { open, text, onExit } = props;
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={1000}
        onClose={() => onExit()}
        message={text}
      />
    </>
  );
};

export default ErrorToast;
