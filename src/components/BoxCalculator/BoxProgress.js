import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    height: 8
  },
  barComplete: {
    borderRadius: 20,
    backgroundColor: green[500]
  },
  barIncomplete: {
    borderRadius: 20,
    backgroundColor: blue[700]
  }
}));

export default function BoxProgress({ progress }) {
  const classes = useStyles();
  let progressPercentage =
    progress.total !== 0
      ? ((progress.completed.fromDrop + progress.completed.fromHonor) /
          progress.total) *
        100
      : 100;
  let rest = progress.total - progress.completed.fromDrop - progress.completed.fromHonor;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>進度</b>
            </TableCell>
            <TableCell align="center">
              <b>需求戰貨</b>
            </TableCell>
            <TableCell align="center">
              <b>已完成戰貨</b>
            </TableCell>
            <TableCell align="center">
              <b>當前進度</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              總進度
            </TableCell>
            <TableCell align="center">{progress.total}</TableCell>
            <TableCell align="center">
              {progress.completed.fromDrop} + {progress.completed.fromHonor}
              (貢獻)
            </TableCell>
            <TableCell align="center">
              <LinearProgress
                classes={{
                  root: classes.root,
                  bar:
                    progressPercentage >= 100
                      ? classes.barComplete
                      : classes.barIncomplete
                }}
                variant="determinate"
                value={progressPercentage > 100 ? 100 : progressPercentage}
                style={{ barColorPrimary: { backgroundColor: "#00695c" } }}
              />
              {progressPercentage.toFixed(2) + "%"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              待刷戰貨
            </TableCell>
            <TableCell align="center">{rest > 0 ? rest : 0}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
