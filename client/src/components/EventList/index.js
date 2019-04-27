import React from "react";
import { Media, Button, Container, Row, Col} from 'reactstrap';
import Moment from 'react-moment';
import 'moment-timezone';
import "./style.css";
import Thumbnail from "../Thumbnail";

export function EventList({ children, }) {
  return <ul className="list-group">{children}</ul>;
}

export function EventListItem({
  link,
  thumbnail = "https://placehold.it/300x300",
  src,
  title,
  date,
  description,
  deleteEvent,
  id, 
  tags
}) {
  return (
    <li className="list-group-item" id="event-item">
    <Container>
      <Row>
        <Col xs="4" sm="2" md="3" lg="4">
          <Thumbnail src={thumbnail} />
          <h3><Moment fromNow>{date}</Moment></h3>
        </Col>
        <Col s="8" sm="9" md="9" lg="8">
          
          <Button outline color="danger" onClick={() => deleteEvent(id)}>X</Button>
          <h3>{title}</h3>
          <h3><Moment format="MMMM Do YYYY">{date}</Moment></h3>
          <p> {description}</p>
        </Col>
      </Row>
    </Container>
  </li>
    // <Media className="event">
      
    //   <Media left href={link}>
      
    //     <Media>
    //     <Thumbnail src={thumbnail} />
    //     </Media>
    //     </Media>
        
    //   <Media body>
    //   <Media heading>
    //   <Moment format="MMMM Do YYYY">{date}</Moment>
    //   </Media>
    //     <Media heading>
    //       {title + "    "}<Moment fromNow>{date}</Moment>
    //       </Media>
    //     {description}
        
    //     <Button outline color="danger" onClick={() => deleteEvent(id)}>X</Button>
    //   </Media>
   
    // </Media>
   
  );
}
