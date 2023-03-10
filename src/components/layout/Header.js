import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import RefreshIcon from "@material-ui/icons/Refresh";
import Brightness5OutlinedIcon from "@material-ui/icons/Brightness5Outlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleItemClick = (e, index) => {
    this.handleDrawerClose();
    this.props.onItemClicked(e, index);
  };

  handleHomeClick = e => {
    this.props.onItemClicked(e, -1);
  };

  handleThemeToggle = e => {
    this.props.onThemeToggled(e, this.props.currentTheme === "light");
  };

  checkWaitingServiceWorker = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (let registration of registrations) {
          const waitingServiceWorker = registration.waiting;
          if (waitingServiceWorker) {
            return true;
          }
        }
      });
    }
    return false;
  };

  forceUpdateServiceWorker = () => {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for (let registration of registrations) {
        const waitingServiceWorker = registration.waiting;
        if (waitingServiceWorker) {
          waitingServiceWorker.addEventListener("statechange", event => {
            if (event.target.state === "activated") {
              window.location.reload(true);
            }
          });
          waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
        } else {
          window.location.reload(true);
        }
      }
    });
  };

  render() {
    const handleDrawerOpen = this.handleDrawerOpen;
    const handleDrawerClose = this.handleDrawerClose;
    const handleHomeClick = this.handleHomeClick;
    const handleThemeToggle = this.handleThemeToggle;
    const checkWaitingServiceWorker = this.checkWaitingServiceWorker;
    const forceUpdateServiceWorker = this.forceUpdateServiceWorker;
    const open = this.state.open;

    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>

            <Typography variant="subtitle1" style={{ flexGrow: 1 }}>
              {this.props.currentTool}
            </Typography>

            <IconButton color="inherit" onClick={forceUpdateServiceWorker}>
              <RefreshIcon
                color={checkWaitingServiceWorker() ? "secondary" : "inherit"}
              />
            </IconButton>

            <IconButton color="inherit" onClick={handleThemeToggle}>
              {this.props.currentTheme === "light" ? (
                <Brightness2OutlinedIcon />
              ) : (
                <Brightness5OutlinedIcon />
              )}
            </IconButton>

            <IconButton color="inherit" onClick={handleHomeClick}>
              <HomeIcon />
            </IconButton>

          </Toolbar>
        </AppBar>
        <Drawer variant="persistent" anchor="left" open={open}>
          <div>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem
                button
                key="首頁"
                selected={this.props.currentTool === -1}
                onClick={e => this.handleItemClick(e, -1)}
            >
              <ListItemText primary="首頁" />
            </ListItem>
            {this.props.tools.map((text, index) => (
              <ListItem
                button
                key={text}
                selected={this.props.currentTool === index}
                onClick={e => this.handleItemClick(e, index)}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </>
    );
  }
}

export default Header;
