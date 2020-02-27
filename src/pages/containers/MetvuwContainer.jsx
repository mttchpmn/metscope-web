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

class MetvuwContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      dialogOpen: false
    };
  }

  render() {
    return (
      // <SecurePage>
      <div>
        {this.props.loading ? (
          <LoadingSpinner />
        ) : (
          <Container disableGutters align="center" maxWidth="xl">
            <FullScreenDialog
              title="MetVuw Image"
              open={this.state.dialogOpen}
              onClose={() => this.setState({ dialogOpen: false })}
            >
              <Card style={{ height: "calc(100vh - 64px)" }}>
                <CardMedia
                  component="img"
                  height={"100%"}
                  src={this.props.images[this.state.index]}
                />
              </Card>
            </FullScreenDialog>

            <Grid container spacing={1}>
              {this.props.images.map((img, index) => {
                return (
                  <Grid item key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Card>
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
              })}
            </Grid>
          </Container>
        )}
      </div>
      // </SecurePage>
    );
  }
}
MetvuwContainer.contextType = DataContext;

export default MetvuwContainer;
