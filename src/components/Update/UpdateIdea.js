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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    console.log(params.id);

    this.setState({status: 'New'});
  }

  handleChange = (event) =>{
    this.setState({status: event.target.value});
  }

  handleSubmit = (event) => {
    console.log('Idea Status is: ' + this.state.status);
    this.setState({showAlert: true});
    event.preventDefault();
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
        <Form noValidate onSubmit={this.handleSubmit}>
          <Card>
            <Card.Header as="h5">Update Idea</Card.Header>
            <Card.Body>
              <Card.Title>Idea Title</Card.Title>
              <Card.Text>Idea Title</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
              
                <Form.Group controlId="formStatus"> 
                  <Form.Label
                    className="mr-sm-2"
                    htmlFor="updateIdeaStatus"
                  >
                    Status
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="updateIdeaStatus"
                    value={this.state.status} onChange={this.handleChange}
                  >
                    <option value="New">New</option>
                    <option value="Candidate">Candidate</option>
                    <option value="Abandoned">Abandoned</option>
                    <option value="Closed">Closed</option>
                    <option value="Concept">Concept</option>
                  </Form.Control>
                </Form.Group>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                variant="primary" type="submit"
              >
                Update
              </Button>
            </Card.Body>
          </Card>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}
