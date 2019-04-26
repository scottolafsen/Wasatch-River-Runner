import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Modal, ModalFooter } from 'reactstrap';
import GaugeModal from '../GaugeModal';
// import Moment from 'react-moment';
import "./style.css";

class MapModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.getClassName = this.getClassName.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  getClassName(gauge, low, medium, high) {
    console.log(gauge, low, medium, high)
    if (gauge === "") {
      return 'no-gauge'
    }
    if (gauge <= low) {
      return 'lowest'
    }
    if (gauge > low && gauge < medium) {
      return 'low'
    }
    if (gauge >= medium && gauge < high) {
      return 'medium'
    }
    if (gauge >= high) {
      return 'high'
    }
  
  }

  render() {
    return (
      <div>
        <Button id={this.getClassName(this.props.gauge, this.props.low, this.props.medium, this.props.high)} color="primary" onClick={this.toggle}>{this.props.gauge} cfs</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
        <Card body id={this.getClassName(this.props.gauge, this.props.low, this.props.medium, this.props.high)}>
    <CardTitle><Link to={"/" + this.props.id}>
        <strong>
          {this.props.riverName}
        </strong>
      </Link></CardTitle>
    <CardText>{this.props.section + "  Class: " + this.props.difficulty}</CardText>
    <GaugeModal
        buttonLabel={this.props.gauge}
        data={this.props.data}
        title={this.props.gaugeName}
      />
  </Card>
  <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MapModal;