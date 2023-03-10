import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  linkIcon: {
    marginLeft: 5,
    marginRight: 5
  },
  appBar: {
    bottom: 0,
    height: "auto"
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="primary" className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography className={classes.text}>GBF小工具合集</Typography>
        <div className={classes.grow} />
        <Link
          href="https://github.com/xerathyang/"
          target="_blank"
          color="inherit"
          className={classes.linkIcon}
        >
          <GitHubIcon />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
