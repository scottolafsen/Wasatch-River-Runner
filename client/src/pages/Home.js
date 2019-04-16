import React, { Component } from "react";
// import API from "../utils/API";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { RiverTable, RiverTableItem } from "../components/RiverList";
import rivers from "../pages/dashboard-rivers.json";


class Home extends Component {
  state = {
    dashRivers: rivers,
    riverGauges: [],
  };



  componentDidMount() {
    this.consoleGauge();
  }

  consoleGauge() {
    axios.get("https://waterservices.usgs.gov/nwis/iv?format=json&sites=10016900,10092700,10168000,10109000,10140100,10140700,10154200,10149000,10137500,10132000,10136500,10137000&parameterCd=00060")
      .then(res => {
        let gauges = res.data.value.timeSeries
        this.setState({riverGauges: gauges.map(gauge => ({ gaugeId: gauge.sourceInfo.siteCode[0].value, gaugeName: gauge.sourceInfo.siteName,
           cfs: gauge.values[0].value[0].value, updated: gauge.values[0].value[0].dateTime }))

          })
          console.log(this.state.riverGauges)
         for (let i = 0; i < this.state.dashRivers.length; i++){
              for (let j = 0; j < this.state.riverGauges.length; j ++){
                if (this.state.riverGauges[j].gaugeId === this.state.dashRivers[i].gauge){
                  this.state.dashRivers[i].level = this.state.riverGauges[j].cfs
                  this.state.dashRivers[i].updated = this.state.riverGauges[j].updated
                }
              }
         }
      console.log(this.state.dashRivers)
    })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <RiverTable>
              {this.state.dashRivers.map(river => {
                return (
                  <RiverTableItem
                    key={river._id}
                    riverName={river.riverName}
                    section={river.section}
                    difficulty={river.difficulty}
                    gauge={river.level}
                    updated={river.updated}
                  />
                );
              })}
            </RiverTable>
          </Col>
          <Col>


          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
