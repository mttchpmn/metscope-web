import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";

import { DataContext } from "../../DataWrapper";
import SecurePage from "../../components/SecurePage";
import WebcamViewer from "../../components/WebcamViewer";
import LoadingSpinner from "../../components/LoadingSpinner";

class WebcamContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <SecurePage>
      <div>
        {this.props.loading ? (
          <LoadingSpinner />
        ) : (
          <Container disableGutters align="center" maxWidth="xl">
            <Grid alignContent="center" container spacing={1}>
              {this.props.webcams.map(camObject => {
                if (camObject.images && camObject.images.length) {
                  return (
                    <Grid
                      key={camObject.name}
                      item
                      xs={12}
                      // sm={8}
                      md={6}
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
        )}
      </div>
      // </SecurePage>
    );
  }
}
WebcamContainer.contextType = DataContext;

export default WebcamContainer;
