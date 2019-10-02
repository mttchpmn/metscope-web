import React, { Component } from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

const s = { fontFamily: "monospace", fontSize: "11px" };

const QmugViewer = props => (
  <Card>
    <CardHeader title={props.name} />
    <CardContent>
      {props.dataArray.map(item => (
        <Typography align="left">
          {props.responsive ? (
            <p style={s}>{item}</p>
          ) : (
            <pre style={s}>{item}</pre>
          )}
        </Typography>
      ))}
    </CardContent>
  </Card>
);

export default QmugViewer;
