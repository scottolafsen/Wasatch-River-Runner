import React, { Component } from "react";
// import API from "../utils/API";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
// import {Container, Row, Col} from "react-bootstrap";

class Home extends Component {
  state = {
    riverGauges: []
  };

  componentDidMount() {
    this.loadGauges();
  }

  loadGauges() {
    axios.get("https://waterservices.usgs.gov/nwis/iv?format=json&stateCd=UT&period=P7D&parameterCd=00060")
      .then(res =>console.log(res.data.value.timeSeries))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1>hello world</h1>

          </Col>
          <Col>


          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
