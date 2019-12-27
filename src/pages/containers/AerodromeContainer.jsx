import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";

import { DataContext } from "../../DataWrapper";
import SecurePage from "../../components/SecurePage";
import LoadingSpinner from "../../components/LoadingSpinner";
import DataWindow from "../../components/DataWindow";

class AerodromeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  aerodromeCard(aero) {
    if (!aero.taf && !aero.metar && !aero.atis) return null;
    return (
      <Grid item key={aero.aerodrome} xs={12} sm={6} md={6} lg={4} xl={3}>
        <Card style={{ height: "100%" }}>
          <CardHeader title={`${aero.name} (${aero.aerodrome})`} />
          <CardContent>
            <Typography>TAF</Typography>
            <DataWindow text={aero.taf || "None received"} />

            <Typography>METAR</Typography>
            <DataWindow text={aero.metar || "None received"} />

            <Typography>ATIS</Typography>
            <DataWindow text={aero.atis || "None received"} />
          </CardContent>
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
          <Container disableGutters align="center" maxWidth="xl">
            <Typography variant="h6">Aerodromes</Typography>
            <Grid container spacing={1}>
              {this.props.data.map(aerodrome => this.aerodromeCard(aerodrome))}
            </Grid>
          </Container>
        )}
      </SecurePage>
    );
  }
}
AerodromeContainer.contextType = DataContext;

export default AerodromeContainer;
