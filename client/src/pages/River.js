import React, { Component } from "react";
// import API from "../utils/API";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Container} from "reactstrap";
import { RiverTable, RiverTableItem } from "../components/RiverList";
import rivers from "../pages/dashboard-rivers.json";
import "./style.css";


class River extends Component {
  state = {
    riverInfo: [],
    userInfo: [],
    riverId: "",
    gaugeId: ""
  };

  componentDidMount() {
    this.getRiverInfo();
  }

  getRiverInfo(){
    var riverId = window.location.pathname.split("/").pop();
    var river = rivers.filter(river => river.id === Number(riverId));
    var gauge = river[0].gauge
  axios.get("https://waterservices.usgs.gov/nwis/iv?format=json&site=" + gauge + "&parameterCd=00060&period=P7D")
  .then(res => {
    let data = res.data.value.timeSeries
    river[0].level = Number(data[0].values[0].value.pop().value)
    river[0].modal = data[0].values[0].value
    river[0].updated = data[0].values[0].value.pop().dateTime
    river[0].gaugeName = data[0].sourceInfo.siteName
    this.setState({ 
      riverInfo: river
    })
  })
  .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid className="background"
      >
     <RiverTable>
              {this.state.riverInfo.map(river => {
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
        
      </Container>
    );
  }
}

export default River;
