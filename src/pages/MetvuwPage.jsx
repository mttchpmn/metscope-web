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
      loading: true
    };
  }

  componentDidMount() {
    Axios.get("https://api.metscope.com/weather/scrape/metvuw/nzsi").then(
      response => {
        console.log("response.data :", response.data);
        this.setState({ images: response.data.images, loading: false });
      }
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {this.state.loading ? (
            <LoadingSpinner />
          ) : (
            this.state.images.map((img, index) => {
              return (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia component="img" height="300" src={img} />
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })
          )}
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(MetvuwPage);
