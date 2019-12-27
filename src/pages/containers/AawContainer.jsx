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
import areaLookup from "../../logic/areaLookup";
import DataWindow from "../../components/DataWindow";

class AawContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SecurePage>
        {this.props.loading ? (
          <LoadingSpinner />
        ) : (
          <Container disableGutters align="center" maxWidth="xl">
            <Grid container spacing={1}>
              {this.props.data.map(aaw => {
                return (
                  <Grid item key={aaw.area} xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Card style={{ height: "100%" }}>
                      <CardHeader
                        title={`${areaLookup[aaw.area.toLowerCase()]} (${
                          aaw.area
                        })`}
                      ></CardHeader>
                      <CardContent>
                        <DataWindow text={aaw.aaw} />
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        )}
      </SecurePage>
    );
  }
}
AawContainer.contextType = DataContext;

export default AawContainer;
