import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Modal, ModalFooter } from 'reactstrap';

// import Moment from 'react-moment';
import "./style.css";

class PutinModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    render() {
        return (
            <div>
                <Button className="btn btn-outline-success" onClick={this.toggle}>IN</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="sm">
                    <Card>
                        <CardTitle><Link to={"/" + this.props.id}>
                            <strong>
                            {this.props.riverName + " " + this.props.section + "  Class: " + this.props.difficulty}
                            </strong>
                        </Link></CardTitle>
                        <CardText>{"Put-In: " + this.props.name}</CardText>
                    </Card>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default PutinModal;