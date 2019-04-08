import React, { Component, Fragment } from "react";
import { AppBar, Typography } from "@material-ui/core";
import Entry from './Entry'

class App extends Component {
  render() {
    return (
      <div>
      <AppBar position="sticky" color="Primary">
        <Typography color="inherit" align="center" variant="h4">
          My Second Project
        </Typography>
      </AppBar>
      <Fragment>
        <Entry />
      </Fragment>
      </div>
    );
  }
}

export default App;
