import React, { Component } from "react";
import { Redirect } from "react-router-dom";


export default class Empty extends Component {
  render() {
    return (
        <Redirect to="/list" />
    );
  }
}
