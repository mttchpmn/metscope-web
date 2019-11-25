import React, { Component } from "react";
import Axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  withStyles
} from "@material-ui/core";
import LoadingSpinner from "../components/LoadingSpinner";
import FullScreenDialog from "../components/FullScreenDialog";
import config from "../config";

const styles = {
  card: {
    width: 350
    // maxWidth: 500,
    // minWidth: 500
    // maxHeight: 700,
    // minHeight: 700
  },
  media: {
    width: "100%",
    maxHeight: 400
  },
  appBar: {
    position: "relative"
    // marginBottom: 30
  },
  title: {
    marginLeft: 30,
    flex: 1
  },
  image: {
    minWidth: 750,
    maxWidth: "100%",
    height: "auto",
    maxHeight: 750
  }
};

class MetvuwPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      index: 0,
      loading: true
    };
  }

  componentDidMount() {
    Axios.get(`${config.API_ADDRESS}/data/weather/load/metvuw/nzsi`).then(
      response => {
        console.log("response.data :", response.data);
        this.setState({ images: response.data.images, loading: false });
      }
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <FullScreenDialog
          title="MetVuw Image"
          open={this.state.dialogOpen}
          onClose={() => this.setState({ dialogOpen: false })}
        >
          <Card style={{ height: "calc(100vh - 64px)" }}>
            <CardMedia
              component="img"
              height={"100%"}
              src={this.state.images[this.state.index]}
            />
          </Card>
        </FullScreenDialog>

        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {this.state.loading ? (
              <LoadingSpinner />
            ) : (
              this.state.images.map((img, index) => {
                return (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                      <CardActionArea
                        onClick={() =>
                          this.setState({ index: index, dialogOpen: true })
                        }
                      >
                        <CardMedia
                          component="img"
                          height="calc(100vh - 56px)"
                          src={img}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })
            )}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(MetvuwPage);
