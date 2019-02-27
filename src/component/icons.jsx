import React, { Component } from "react";
class Icons extends Component {
  state = {};
  render() {
    const { classes, iconName } = this.props;
    return <i className={classes}>{iconName}</i>;
  }
}

export default Icons;
