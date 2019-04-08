import React, { Component } from "react";
import { List, ListItem } from "@material-ui/core";

class EntryList extends Component {
  render() {
    //console.log(this.props.itemsGiven)
    return (
      <List>
        {this.props.itemsGiven.map(item => (
          <ListItem>{item}</ListItem>
        ))}
      </List>
    );
  }
}

export default EntryList;
