import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../Icon/Icon";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export default class ListIdeas extends Component {

  thumbsUp = () => {
    console.log("thumbs up");
  }

  thumbsDown = () => {
    console.log("thumbs down");
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Navbar.Brand href="#/add">
            <Icon name="add" color="#61dafb" size={35} /> Post An Idea
          </Navbar.Brand>
        </Container>
        <br />
        <Container>
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <a href onClick={()=> this.thumbsUp()} className="clickable">
                      <Icon name="thumbs-up" size={35}/>
                    </a>
                    <a href onClick={()=> this.thumbsDown()} className="clickable">
                      <Icon name="thumbs-down" size={35} onClick={()=> this.thumbsDown()} />
                    </a> 
                    <Link to={`/update/1`}><Icon name="update" size={35} /></Link> 
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>
                    <a href onClick={()=> this.thumbsUp()} className="clickable">
                      <Icon name="thumbs-up" size={35}/>
                    </a>
                    <a href onClick={()=> this.thumbsDown()} className="clickable">
                      <Icon name="thumbs-down" size={35} onClick={()=> this.thumbsDown()} />
                    </a> 
                    <Link to={`/update/1`}><Icon name="update" size={35} /></Link> 
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jacob</td>
                  <td>Larry the Bird</td>
                  <td>
                    <a href onClick={()=> this.thumbsUp()} className="clickable">
                      <Icon name="thumbs-up" size={35}/>
                    </a>
                    <a href onClick={()=> this.thumbsDown()} className="clickable">
                      <Icon name="thumbs-down" size={35} onClick={()=> this.thumbsDown()} />
                    </a> 
                    <Link to={`/update/1`}><Icon name="update" size={35} /></Link> 
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}
