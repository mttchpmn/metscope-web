import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
  Grid
} from "@material-ui/core";

import { DataContext } from "../../DataWrapper";
import SecurePage from "../../components/SecurePage";
import LoadingSpinner from "../../components/LoadingSpinner";
import FullScreenDialog from "../../components/FullScreenDialog";

class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: "",
      dialogOpen: false
    };
  }

  render() {
    return (
      <SecurePage>
        {this.props.loading ? (
          <LoadingSpinner />
        ) : (
          <Container disableGutters align="center" maxWidth="xl">
            <FullScreenDialog
              title="MetVuw Image"
              open={this.state.dialogOpen}
              onClose={() => this.setState({ dialogOpen: false })}
            >
              <Card
                style={{
                  paddingTop: 10,
                  height: "calc(100vh - 64px)",
                  overflowY: "auto"
                }}
              >
                <CardMedia
                  component="img"
                  width={"100vw"}
                  src={this.state.selectedImage}
                />
              </Card>
            </FullScreenDialog>

            <Typography>SIGMET / SIGWX</Typography>
            <Grid container spacing={1}>
              {this.props.data.sigmet
                .concat(this.props.data.sigwx)
                .map((img, index) => {
                  return (
                    <Grid item key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
                      <Card>
                        <CardActionArea
                          onClick={() =>
                            this.setState({
                              selectedImage: img,
                              dialogOpen: true
                            })
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
                })}
            </Grid>

            <Typography>GRAFOR</Typography>
            <Grid container spacing={1}>
              {this.props.data.grafor.map((img, index) => {
                return (
                  <Grid item key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Card>
                      <CardActionArea
                        onClick={() =>
                          this.setState({
                            selectedImage: img,
                            dialogOpen: true
                          })
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
              })}
            </Grid>
          </Container>
        )}
      </SecurePage>
    );
  }
}
ChartContainer.contextType = DataContext;

export default ChartContainer;
