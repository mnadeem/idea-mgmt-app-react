import React, { Component } from "react";
import Icon from "../Icon/Icon";

export default class Content extends Component {
  render() {
    return (
      <header className="app-header">
        <Icon
          name="logo"
          color="#FFFFFF"
          size={305}
          classNames="app-logo"
          alt="logo"
        />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }
}
