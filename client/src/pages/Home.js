import React, { Component } from "react";
// import API from "../utils/API";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { RiverTable, RiverTableItem } from "../components/RiverList";
import rivers from "../pages/dashboard-rivers.json";
import Calendar from "../components/Calendar";


class Home extends Component {
  state = {
    dashRivers: [],
    riverGauges: [],
  };

  componentDidMount() {
    this.setGauges();
  }

  setGauges() {
    axios.get("https://waterservices.usgs.gov/nwis/iv?format=json&sites=10016900,10092700,10168000,10109000,10140100,10140700,10154200,10149000,10137500,10132000,10136500,10137000&parameterCd=00060")
    .then(res => {
      let data = res.data.value.timeSeries
      let gauges = data.map(gauge => ({ gaugeId: gauge.sourceInfo.siteCode[0].value, gaugeName: gauge.sourceInfo.siteName,
        cfs: gauge.values[0].value[0].value, updated: gauge.values[0].value[0].dateTime
      }))
      
      for (let i = 0; i < rivers.length; i++){
        for (let j = 0; j < gauges.length; j ++){
          if (gauges[j].gaugeId === rivers[i].gauge){

            rivers[i].level = Number(gauges[j].cfs)
            rivers[i].updated = gauges[j].updated
          }
        }
   }
   this.setState({dashRivers: rivers })    
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
                    key={river.id}
                    riverName={river.riverName}
                    section={river.section}
                    difficulty={river.difficulty}
                    gauge={river.level}
                    updated={river.updated}
                    low={river.low}
                    medium={river.medium}
                    high={river.high}
                  />
                );
              })}
            </RiverTable>
          </Col>
          <Col>
              <Calendar />

              

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
