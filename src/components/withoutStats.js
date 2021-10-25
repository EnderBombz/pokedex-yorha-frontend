import React from "react";

import { Grid } from "@material-ui/core";

function WhithoutStats(props) {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <div className="whithoutCenter">
          <div className="withoutIcon"></div>
        </div>
        <div>
          <div className="whithoutName" />
        </div>
      </Grid>
    </>
  );
}

export default WhithoutStats;
