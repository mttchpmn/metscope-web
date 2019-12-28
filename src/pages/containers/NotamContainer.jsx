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
import DataWindow from "../../components/DataWindow";

class NotamContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  notamCard(aero) {
    return (
      <Grid item key={aero.aerodrome} xs={12} md={6} lg={4}>
        <Card style={{ height: "100%" }}>
          <CardHeader title={`${aero.name} (${aero.aerodrome})`} />
          <CardContent>
            {aero.notams.map(notam => {
              return (
                <Container key={notam.series} disableGutters>
                  <Grid container justify="space-between">
                    <Grid item xs={6}>
                      <Typography
                        style={{
                          textAlign: "left",
                          fontWeight: "bold",
                          fontSize: 12
                        }}
                      >
                        {notam.series}
                      </Typography>
                    </Grid>

                    <Grid item xs={6}></Grid>
                  </Grid>
                  <Typography style={{ textAlign: "left", fontSize: 10 }}>
                    {notam.validity.replace(/\u00a0/g, " ")}
                  </Typography>
                  <DataWindow text={notam.text} />
                </Container>
              );
            })}
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
          <Container disableGutters align="center">
            <Typography>Brief Information</Typography>
            <Card>
              <CardContent>
                <Typography>{this.props.data.info.identifier}</Typography>
                <Typography>
                  ISSUED AT {this.props.data.info.issueDate}
                </Typography>
                <Typography>
                  VALID FROM {this.props.data.info.validFrom}
                </Typography>
                <Typography>VALID TO {this.props.data.info.validTo}</Typography>
              </CardContent>
            </Card>
            <Typography>Aerodromes</Typography>
            <Grid container spacing={1}>
              {this.props.data.aerodromes.length ? (
                this.props.data.aerodromes.map(aerodrome =>
                  this.notamCard(aerodrome)
                )
              ) : (
                <Container align="center">
                  <Typography align="center">No data received</Typography>
                </Container>
              )}
            </Grid>
          </Container>
        )}
      </SecurePage>
    );
  }
}
NotamContainer.contextType = DataContext;

export default NotamContainer;
