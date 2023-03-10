import React from "react";
import { Typography, Grid, Button, Divider } from "@material-ui/core";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  button: {
    margin: theme.spacing(1)
  }
}));

export default function ToolList({ tools, onClick }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {tools.map((tool, index) => {
        return (
          <Grid item xs={12} key={index} className={classes.button}>
            <Button
              variant="outlined"
              color="default"
              fullWidth={true}
              onClick={e => {
                onClick(e, index);
              }}
            >
              <Typography variant="h6" align="center">
                {tool}
              </Typography>
            </Button>
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <Card>
          <CardHeader title="更新" />
          <Divider />
          <CardContent>
          <Typography variant="body1">
              <b>2023-03-10</b> 從原始Repo分支{" "}
            </Typography>
            <List dense={true}>
              <ListItem>原始網址:https://github.com/niccolozy/gbf-tools</ListItem>
            </List>
            <Divider />

          <Typography variant="body1">
              <b>2022-06-26</b> 古战场Hell200数据{" "}
            </Typography>
            <List dense={true}>
            </List>
            <Divider />

          <Typography variant="body1">
              <b>2022-02-26</b> 转世材料页面添加贤者武器终突{" "}
            </Typography>
            <List dense={true}>
            </List>
            <Divider />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
