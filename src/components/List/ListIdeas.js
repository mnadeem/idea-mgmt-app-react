import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../Icon/Icon";
import Nav from "react-bootstrap/Nav";

export default class ListIdeas extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <Icon name="add" color="#61dafb" size={35} /> Post An Idea
            </Navbar.Brand>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
