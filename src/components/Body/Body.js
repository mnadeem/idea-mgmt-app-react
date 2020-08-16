import React, { Component } from "react";
import ListIdeas from "../List/ListIdeas";
import AddIdea from "../Add/AddIdea";
import UpdateIdea from "../Update/UpdateIdea";
import Empty from '../Empty/Empty';

import { HashRouter, Route } from "react-router-dom";

export default class Body extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" component={Empty} />
        <Route path="/list" component={ListIdeas} />
        <Route path="/add" component={AddIdea} />
        <Route path="/update" component={UpdateIdea} />
      </HashRouter>
    );
  }
}
