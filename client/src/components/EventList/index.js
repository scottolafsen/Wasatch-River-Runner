import React from "react";
import { Media, Button} from 'reactstrap';
import Moment from 'react-moment';
import 'moment-timezone';
import "./style.css";

export default function EventListItem({
  link,
  src,
  title,
  date,
  description,
  deleteEvent,
  id, 
  tags
}) {
  return (
    <Media className="event">
      
      <Media left href={link}>
        <Media object className="img" src={src} alt="Generic placeholder image" />
        <Media><Moment fromNow>{date}</Moment>
        {"Tags" + tags[0] + tags[1]}
        </Media>
        </Media>
       
      <Media body>
      <Media heading>
      <Moment format="MMMM Do YYYY">{date}</Moment>
      </Media>
        <Media heading>
          {title}
          </Media>
        {description}
        
        <Button outline color="danger" onClick={() => deleteEvent(id)}>X</Button>
      </Media>
    </Media>
  );
}
