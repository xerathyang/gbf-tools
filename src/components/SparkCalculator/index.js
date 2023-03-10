import React, { useState, useEffect } from "react";
import {
  Grid,
  Divider,
  Card,
  CardMedia,
  CardContent,
  TextField,
  CircularProgress,
  CardHeader,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, blue } from "@material-ui/core/colors";

import ProbaChart from "./ProbaChart"


import crystalImg from "../../assets/draws/crystal.jpg";
import singleTicketImg from "../../assets/draws/signle-roll-ticket.jpg";
import tenRollTicketImg from "../../assets/draws/10-roll-ticket.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: 10
  },
  card: {
    display: "flex",
    padding: 10,

    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      flex: 1,
      margin: 5
    }
  },
  image: {
    width: "auto",
    height: "auto",
    margin: "auto",
    maxWidth: "25%",
    maxHeight: 86.776
  }
}));

export default function SparkCalculator(props) {
  const [crystal, setCrystal] = useState(0);
  const [singleRollTicket, setSingleRollTicket] = useState(0);
  const [tenRollTicket, setTenRollTicket] = useState(0);

  useEffect(() => {
    let state = JSON.parse(localStorage.getItem("SparkCalculator"));
    if (state !== null) {
      setCrystal(state.crystal);
      setSingleRollTicket(state.singleRollTicket);
      setTenRollTicket(state.tenRollTicket);
    }
  }, []);

  useEffect(() => {
    let state = {
      crystal: crystal,
      singleRollTicket: singleRollTicket,
      tenRollTicket: tenRollTicket
    };
    localStorage.setItem("SparkCalculator", JSON.stringify(state));
  }, [crystal, singleRollTicket, tenRollTicket]);

  const classes = useStyles();

  let rolls = Math.floor(
    (crystal + 300 * singleRollTicket + 3000 * tenRollTicket) / 300
  );
  let progress = rolls / 300;

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} className={classes.root}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            image={crystalImg}
            className={classes.image}
          />
          <CardContent>
            <TextField
              name="crystal"
              label="寶晶石"
              variant="standard"
              value={crystal}
              onChange={e => {
                setCrystal(Number(e.target.value));
              }}
            />
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            image={singleTicketImg}
            className={classes.image}
          />
          <CardContent>
            <TextField
              name="crystal"
              label="單抽券"
              variant="standard"
              value={singleRollTicket}
              onChange={e => {
                setSingleRollTicket(Number(e.target.value));
              }}
            />
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            image={tenRollTicketImg}
            className={classes.image}
          />
          <CardContent>
            <TextField
              name="crystal"
              label="10連券"
              variant="standard"
              value={tenRollTicket}
              onChange={e => {
                setTenRollTicket(Number(e.target.value));
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="存井進度"
            titleTypographyProps={{ variant: "h6" }}
          />
          <Divider />
          <div style={{ padding: 10, display: "flex" }}>
            <CircularProgress
              style={
                progress * 100 >= 100
                  ? { color: green[500] }
                  : { color: blue[700] }
              }
              variant="static"
              value={progress * 100 > 100 ? 100 : progress * 100}
              size={70}
            />
            <Typography variant="h6" style={{ margin: "auto" }}>
              {(progress * 100).toFixed(2) + "%"}
            </Typography>
            <Typography variant="h6" style={{ margin: "auto" }}>
              {rolls} / 300抽
            </Typography>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <ProbaChart />
      </Grid>
    </Grid>
  );
}
