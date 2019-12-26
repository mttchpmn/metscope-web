import React from "react";
import { Container, Typography } from "@material-ui/core";
import moment from "moment";

const UTCClock = props => {
  const [time, setTime] = React.useState(
    new moment().utc().format("DD MMM HH:mm:ss")
  );

  React.useEffect(() => {
    setInterval(() => {
      tick();
    }, 1000);
  });

  const tick = () => {
    setTime(
      moment()
        .utc()
        .format("DD MMM HH:mm:ss")
    );
  };

  return (
    <Container>
      <Typography
        align="center"
        style={{
          color: "#505050",
          fontSize: 12
        }}
      >
        {time} UTC
      </Typography>
    </Container>
  );
};

export default UTCClock;
