import React from "react";
import { Media, Button } from 'reactstrap';
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
  id
}) {
  return (
    <Media>
      <Media left href={link}>
        <Media object className="img" src={src} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          {title}
          <Moment format="MMMM Do YYYY">{date}</Moment>
        </Media>
        {description}
        <Moment fromNow>{date}</Moment>
        <Button outline color="danger" onClick={() => deleteEvent(id)}>X</Button>
      </Media>
    </Media>
  );
}
