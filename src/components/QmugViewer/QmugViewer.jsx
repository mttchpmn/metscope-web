import React, { Component } from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

const QmugViewer = props => {
  const renderMedia = () => {
    if (props.type === "text") {
      return props.dataArray.map(item => <Typography>{item}</Typography>);
    }
    if (props.type === "image") {
      return <Typography>Image</Typography>;
    }
  };

  return (
    <Card>
      <CardHeader title={props.name} />
      <CardContent>{renderMedia()}</CardContent>
    </Card>
  );
};

export default QmugViewer;
