import React from 'react';
import EventListItem from "../EventList";
import API from "/Users/Scott/UofU/project3/client/src/utils/API";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Form, Col, Row } from 'reactstrap';

class ModalEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            events: [],
            title: "",
            description: "",
            date: "",
            link: "",
            src: ""
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        this.loadEvents();
    }

    loadEvents = () => {
        API.getEvents()
            .then(res =>
                this.setState({
                    events: res.data,
                    title: "",
                    description: "",
                    date: "",
                    link: "",
                    src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/12113351_10102660054117079_3409658635737573702_o.jpg?_nc_cat=110&_nc_ht=scontent-sjc3-1.xx&oh=a6d229228e0ff9b7716a4a97e17c0fdd&oe=5D317E64"
                }))
            .catch(err => console.log(err));
    };

    deleteEvent = id => {
        API.deleteEvent(id)
            .then(res => this.loadEvents())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // event.preventDefault();
        if (this.state.title && this.state.description) {
            API.saveEvent({
                title: this.state.title,
                description: this.state.description,
                date: this.state.date,
                link: this.state.link,
                src: this.state.src
            })
                .then(res => this.loadEvents())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                <Row>
                    <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Create Event</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="Title">Event Title</Label>
                                    <Input
                                        type="textarea"
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name="title"
                                        id="eventTitle"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Event Description</Label>
                                    <Input
                                        type="textarea"
                                        value={this.state.description}
                                        onChange={this.handleInputChange}
                                        name="description"
                                        id="eventDescription" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleDate">Event Date</Label>
                                    <Input
                                        type="date"
                                        value={this.state.date}
                                        onChange={this.handleInputChange}
                                        name="date"
                                        id="eventDate"
                                        placeholder="date placeholder"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="eventLink">Link</Label>
                                    <Input
                                        type="textarea"
                                        value={this.state.link}
                                        onChange={this.handleInputChange}
                                        name="url"
                                        id="eventLink"
                                        placeholder="link"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleUrl">Photo</Label>
                                    <Input
                                        type="url"
                                        value={this.state.src}
                                        onChange={this.handleInputChange}
                                        name="src"
                                        id="eventSrc"
                                        placeholder="url placeholder"
                                    />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" disabled={!(this.state.title && this.state.description)} onClick={(event) => { this.toggle(); this.handleFormSubmit(); }}>Submit Event</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Row>
                <Row>
                    {this.state.events === [] ? (
                        <h1 className="text-center">No Events to Display</h1>
                    ) : (
                            this.state.events.map(event => {
                                return (
                                    <EventListItem
                                        key={event._id}
                                        title={event.title}
                                        description={event.description}
                                        date={event.date}
                                        link={event.link}
                                        src={event.src}
                                        id={event._id}
                                        deleteEvent={() => this.deleteEvent(event._id)}
                                    />
                                );
                            })
                        )}
                </Row>
            </div>
        );
    }
}

export default ModalEventForm;