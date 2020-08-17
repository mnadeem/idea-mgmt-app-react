import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../Icon/Icon";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
export default class UpdateIdea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
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
          <Alert
            show={this.state.showAlert}
            variant="success"
            onClose={() => this.setState({ showAlert: false })}
            dismissible
          >
            Idea Updated Successfully
          </Alert>
        </Container>

        <Container>
          <Card>
            <Card.Header as="h5">Update Idea</Card.Header>
            <Card.Body>
              <Card.Title>Idea Title</Card.Title>
              <Card.Text>Idea Title</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Form.Label
                  className="mr-sm-2"
                  htmlFor="inlineFormCustomSelect"
                  srOnly
                >
                  Preference
                </Form.Label>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom
                >
                  <option value="0">Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Control>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                variant="primary"
                onClick={() => this.setState({ showAlert: true })}
              >
                Update
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}
