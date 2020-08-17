import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../Icon/Icon";
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

export default class AddIdea extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      title: null,
      description: null,
      validated:false,
      isLoading:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });    
  }

  handleSubmit = async (event) => {
    this.setState({
      isLoading: true
    });
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      this.setState({
        showAlert: true,
        description: '',
        title: ''
      });
    }

    event.preventDefault();
    event.stopPropagation();
    await this.timeout(1000);

    this.setState({
      validated: true,
      isLoading: false
    });
  }

  timeout = (delay) => {
    return new Promise( res => setTimeout(res, delay) );
  }

  render() {
    let isLoading = this.state.isLoading;
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
            <Form noValidate validated={this.state.validated}  onSubmit={this.handleSubmit} disabled = {isLoading ? 'disabled' : ''}>
                
                <Form.Group controlId="AddIdeaForm.title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control name="title" type="text" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange} required/>
                  <Form.Control.Feedback type="invalid">
                    Please Provide Title.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    It should describe it the best
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="AddIdeaForm.description">
                  <Form.Label>Description</Form.Label>                  
                  <Form.Control as="textarea" name="description" type="text" value={this.state.description} placeholder="Enter Description" onChange={this.handleChange} required/>
                  <Form.Control.Feedback type="invalid">
                    Please Provide Description.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                  {this.state.isLoading &&
                      <React.Fragment>
                        <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                  </React.Fragment>
                }
                {!this.state.isLoading &&
                    "Submit"
                }
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}
