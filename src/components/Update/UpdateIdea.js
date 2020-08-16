import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
          <Card>
            <Card.Header as="h5">Update Idea</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}
