import React, { Component } from "react";
// import API from "../utils/API";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { RiverTable, RiverTableItem } from "../components/RiverList";
import rivers from "../pages/dashboard-rivers.json";
import ModalEventForm from "../components/EventForm";
import "./style.css";


class Home extends Component {
  state = {
    dashRivers: [],
    riverGauges: [],
    modalData: []
  };

  componentDidMount() {
    this.setGauges();
  }

  setGauges() {
    axios.get("https://waterservices.usgs.gov/nwis/iv?format=json&sites=10016900,10092700,10168000,10109000,10140100,10140700,10154200,10149000,10137500,10132000,10136500,10137000&parameterCd=00060&period=P7D")
      .then(res => {
        let data = res.data.value.timeSeries
        let gauges = data.map(gauge => ({
          gaugeId: gauge.sourceInfo.siteCode[0].value, 
          gaugeName: gauge.sourceInfo.siteName,
          modalData: gauge.values[0].value,
          cfs: gauge.values[0].value.pop().value, 
          updated: gauge.values[0].value.pop().dateTime
        }))
        for (let i = 0; i < rivers.length; i++) {
          for (let j = 0; j < gauges.length; j++) {
            if (gauges[j].gaugeId === rivers[i].gauge) {
              rivers[i].level = Number(gauges[j].cfs)
              rivers[i].modal = gauges[j].modalData
              rivers[i].updated = gauges[j].updated
              rivers[i].gaugeName = gauges[j].gaugeName
            }
          }
        }
        this.setState({ 
          dashRivers: rivers 
        
        })
        console.log(this.state.dashRivers)
      })
      .catch(err => console.log(err))
  };



  render() {
    return (
      <Container fluid className="background">
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
                    data={river.modal}
                    title={river.gaugeName}
                    id={river.id}
                  />
                );
              })}
            </RiverTable>
          </Col>
          <Col>
              <ModalEventForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
