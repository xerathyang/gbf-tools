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
              <b>2023-03-30</b> 新增賢者終突材料{" "}
            </Typography>
            <List dense={true}>
              <ListItem>可以在"賢者領域、終突進度"選項中選取</ListItem>
            </List>
            <Divider />   
          
          <Typography variant="body1">
              <b>2023-03-10</b> 新增轉世武器五突材料{" "}
            </Typography>
            <List dense={true}>
            </List>
            <Divider />   

          <Typography variant="body1">
              <b>2023-03-10</b> 從原始Repo分支{" "}
            </Typography>
            <List dense={true}>
              <ListItem>原始網址:https://github.com/niccolozy/gbf-tools</ListItem>
            </List>

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
