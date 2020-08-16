import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../Icon/Icon";
export default class UpdateIdea extends Component {

  componentDidMount() {
    const { match: { params } } = this.props;
    console.log(params.id);
  }

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
