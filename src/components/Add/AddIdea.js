import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../Icon/Icon";
import Alert from 'react-bootstrap/Alert'


export default class AddIdea extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showAlert: false
    };
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
          <Alert show={this.state.showAlert} variant="success" onClose={() => this.setState({ showAlert: false })} dismissible>
            Idea Saved Successfully
          </Alert>
        </Container>

        <Container>
          <Card>
            <Card.Header as="h5">Post New Idea</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
               
              </Card.Text>
              <Button variant="primary" onClick={() => this.setState({ showAlert: true })}>Save</Button>
            </Card.Body>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}
