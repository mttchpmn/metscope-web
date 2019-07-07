import React, { Component } from "react";
import Axios from "axios";
import { Container, Typography, Grid } from "@material-ui/core";

import QmugViewer from "../components/QmugViewer/QmugViewer";
import ImageCard from "../components/ImageCard/ImageCard";
import LoadingSpinner from "../components/LoadingSpinner";

class QmugPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      metar: [],
      aaw: [],
      taf: [],
      sigmet: [],
      grafor: [],
      sigwx: []
    };
  }

  componentDidMount() {
    Axios.get("https://api.metscope.com/weather/scrape/qmug").then(response => {
      this.setState({
        metar: response.data.data.metar,
        aaw: response.data.data.aaw,
        taf: response.data.data.taf,
        sigmet: response.data.data.sigmet,
        grafor: response.data.data.grafor,
        sigwx: response.data.data.sigwx,
        loading: false
      });
    });
  }

  render() {
    return (
      <Container maxWidth="xl">
        {this.state.loading ? (
          <LoadingSpinner />
        ) : (
          <Grid
            container
            justify="space-around"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item xs={12} md={4} xl={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <QmugViewer name="METAR" dataArray={this.state.metar} />
                </Grid>
                <Grid item xs={12}>
                  <QmugViewer name="AAW" dataArray={this.state.aaw} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={4} xl={3}>
              <QmugViewer name="TAF" dataArray={this.state.taf} />
            </Grid>
            <Grid item xs={12} md={4} xl={3}>
              <ImageCard
                title="Images"
                images={this.state.grafor
                  .concat(this.state.sigmet)
                  .concat(this.state.sigwx)}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    );
  }
}

export default QmugPage;
