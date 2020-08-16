import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../Icon/Icon";
export default class UpdateIdea extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Navbar.Brand href="#/list">
            <Icon name="list" color="#61dafb" size={35} /> List Ideas
          </Navbar.Brand>
        </Container>
        <Container>
            Update
        </Container>
      </React.Fragment>
    );
  }
}
