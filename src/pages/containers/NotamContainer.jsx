import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";

import SecurePage from "../../components/SecurePage";
import LoadingSpinner from "../../components/LoadingSpinner";
import { DataContext } from "../../DataWrapper";
import aerodromeLookup from "../../logic/aerodromeLookup";

class NotamContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  notamCard(aero) {
    return (
      <Grid item key={aero.aerodrome} xs={12} md={6}>
        <Card>
          <CardHeader title={`${aero.name} (${aero.aerodrome})`} />
          <CardContent></CardContent>
          {aero.notams.map(notam => {
            return (
              <Container>
                <Grid container justify="space-between">
                  <Grid item xs={6}>
                    <Typography>{notam.series}</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography>{notam.validity}</Typography>
                  </Grid>
                </Grid>
                <pre style={{ textAlign: "left" }}>{notam.text}</pre>
              </Container>
            );
          })}
        </Card>
      </Grid>
    );
  }

  render() {
    return (
      <SecurePage>
        {this.props.loading ? (
          <LoadingSpinner />
        ) : (
          <Container align="center" maxWidth="xl">
            <Typography variant="h6">NOTAMs</Typography>
            <Typography>Aerodromes</Typography>
            <Grid container spacing={1}>
              {this.props.data.map(aerodrome => this.notamCard(aerodrome))}
            </Grid>
          </Container>
        )}
      </SecurePage>
    );
  }
}
NotamContainer.contextType = DataContext;

export default NotamContainer;
