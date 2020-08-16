import React, { Component } from "react";
import Icon from "./Icon/Icon";
import "./App.css";
import NavBar from './NavBar/NavBar';
import Content from './Content/Content';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar key={'app-0'} />
        <Content key={'app-1'}/>
      </div>
    );
  }
}
