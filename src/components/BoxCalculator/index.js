import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

import BoxInput from "./BoxInput";
import BoxProgress from "./BoxProgress.js";
import BoxEstimation from "./BoxEstimation.js";
import { calculateNeededSolo } from "./calculation.js";

class BoxCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetBox: null,
      drewBox: null,
      currentToken: null,
      currentHonor: null,
      currentMeat: null
    };
  }

  onInputChange = (inputName, value) => {
    this.setState({ [inputName]: Number(value) });
  };

  render() {
    console.log(this.state);
    let [progress, neededSolos] = calculateNeededSolo(this.state);
    // let [progress, neededSolos] = calculateNeededSolo(
    //   20,
    //   2,
    //   11100,
    //   31782647,
    //   1761
    // );
    // console.log(progress);
    // console.log(neededSolos);
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper>
            <BoxInput current={this.state} onChange={this.onInputChange} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <BoxProgress progress={progress} />
        </Grid>
        <Grid item xs={12}>
          <BoxEstimation neededSolos={neededSolos} />
        </Grid>
      </Grid>
    );
  }
}

export default BoxCalculator;
