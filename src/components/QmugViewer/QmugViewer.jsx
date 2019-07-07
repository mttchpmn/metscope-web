import React, { Component } from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

const QmugViewer = props => (
  <Card>
    <CardHeader title={props.name} />
    <CardContent>
      {props.dataArray.map(item => (
        <Typography align="left">
          <pre>{item}</pre>
        </Typography>
      ))}
    </CardContent>
  </Card>
);

export default QmugViewer;
