import rivers from "../pages/dashboard-rivers.json";
import axios from "axios";
import MapModal from "../components/MapModal";
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.23181944,
      lng: -111.9844972,
      gauges: [],
      mapTypeId: "terrain"
    },
    zoom: 11,
    
    
  };
  state = {
    gauges: []
  }

  componentDidMount() {
    this.setGauges();
  }

  setGauges() {
    axios.get("https://waterservices.usgs.gov/nwis/iv?format=json&sites=10016900,10092700,10168000,10109000,10140100,10140700,10154200,10149000,10137500,10132000,10136500,10137000&parameterCd=00060&period=P7D")
      .then(res => {
        let data = res.data.value.timeSeries
        console.log(data)
        let gauges = data.map(gauge => ({
          latitude: gauge.sourceInfo.geoLocation.geogLocation.latitude,
          longitude: gauge.sourceInfo.geoLocation.geogLocation.longitude,
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
              rivers[i].gaugeLat = gauges[j].latitude
              rivers[i].gaugeLong = gauges[j].longitude
            }
          }
        }
        this.setState({
          gauges: rivers

        })
        console.log(this.state.gauges)
      })
      .catch(err => console.log(err))
  };


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCkQ5opRCGyG7jH62BQBCnbcN3ZVNgc6r8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          mapTypeId= {this.props.mapTypeId}
        >
          {this.state.gauges.map(gauge => {
            return (
              <MapModal
                key={gauge.gaugeId}
                lat={gauge.gaugeLat}
                lng={gauge.gaugeLong}
                riverName={gauge.riverName}
                section={gauge.section}
                difficulty={gauge.difficulty}
                gauge={gauge.level}
                updated={gauge.updated}
                low={gauge.low}
                medium={gauge.medium}
                high={gauge.high}
                data={gauge.modal}
                id={gauge.id}
                gaugeName={gauge.gaugeName}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

  // 
