import React from "react";

import { DataContext } from "../../DataWrapper";
import WebcamViewer from "../../components/WebcamViewer";
import SecurePage from "../../components/SecurePage";
import { Container, Typography, Grid } from "@material-ui/core";

class WebcamContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SecurePage>
        <Container align="center" maxWidth="xl">
          <Typography variant="h6">Webcams</Typography>

          <Grid container spacing={1}>
            {this.props.webcams.map(camObject => {
              if (camObject.images && camObject.images.length) {
                return (
                  <Grid
                    key={camObject.name}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={3}
                  >
                    <WebcamViewer webcam={camObject} />
                  </Grid>
                );
              }
            })}
          </Grid>
        </Container>
      </SecurePage>
    );
  }
}
WebcamContainer.contextType = DataContext;

export default WebcamContainer;
