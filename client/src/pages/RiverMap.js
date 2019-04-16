import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Container, Row, Col, Jumbotron } from "reactstrap";

class RiverMap extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
       
      </Container>
    );
  }
}

export default RiverMap;
