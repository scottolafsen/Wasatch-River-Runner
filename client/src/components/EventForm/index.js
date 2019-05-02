import React from 'react';
import {EventListItem, EventList} from "../EventList";
import API from '../utils/API';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Form, Container, Row } from 'reactstrap';
import EventDropdown from "../EventDropdown";
import "./style.css";


class ModalEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            tmpEvents: [],
            events: [],
            title: "",
            description: "",
            date: "",
            link: "",
            src: "",
            tags: []
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
                    events: res.data.sort(function(a,b){
                        return new Date(a.date) - new Date(b.date);
                      }),
                    tmpEvents: res.data,
                    title: "",
                    description: "",
                    date: "",
                    link: "",
                    src: "",
                    tags: []
                }))
            .catch(err => console.log(err))
            
    };

    eventTag = (tag) => {
        let events = this.state.tmpEvents
        let sortedEvents = events.sort(function(a,b){
            return new Date(a.date) - new Date(b.date);
          })
        const eventsTag = sortedEvents.filter(event => event.tags[0] === tag || event.tags[1] === tag);
        this.setState({
            events: eventsTag
        })
        console.log(this.state.events);
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
                src: this.state.src,
                tags: this.state.tags
            })
                .then(res => this.loadEvents())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="events-wrapper">
                <Container className="events-container">
                <Row>
                    <div className="clearfix">
                <h2 className="text-center event-title">Intermountain Whitewater Events</h2>
                    <EventDropdown 
                    loadEvents={this.loadEvents}
                    eventTag={this.eventTag}
                    />
                    <Button className="btn btn-secondary float-left"color="success" onClick={this.toggle}>{this.props.buttonLabel}Create Event</Button>
                    
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add a Whitewater Event!</ModalHeader>
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
                                    <Label for="exampleLink">Link</Label>
                                    <Input
                                        type="textarea"
                                        value={this.state.link}
                                        onChange={this.handleInputChange}
                                        name="link"
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
                                <FormGroup>
                                    <Label for="exampleSelect">Event Tags</Label>
                                    <Input 
                                    value={this.state.tags}
                                    onChange={this.handleInputChange}
                                    type="select" 
                                    name="tags" 
                                    id="eventTags">
                                        <option>Race</option>
                                        <option>UWC</option>
                                        <option>Trips</option>
                                        <option>Release</option>
                                        <option>Meeting</option>
                                        <option>Pool</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" disabled={!(this.state.title && this.state.description)} onClick={(event) => { this.toggle(); this.handleFormSubmit(); }}>Submit Event</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    </div>
                </Row>
                <Row className='events-container'>
                    {this.state.events === [] ? (
                        <h1 className="text-center">No Events to Display</h1>
                    ) : (
                        <EventList>
                            {this.state.events.map(event => {
                                return (
                                    <EventListItem
                                        key={event._id}
                                        title={event.title}
                                        description={event.description}
                                        date={event.date}
                                        link={event.link}
                                        src={event.src}
                                        id={event._id}
                                        tags={event.tags}
                                        thumbnail={event.src}
                                        deleteEvent={() => this.deleteEvent(event._id)}
                                    />
                                );
                            })}
                            </EventList>
                        )}
                </Row>
                </Container>
            </div>
        );
    }
}

export default ModalEventForm;