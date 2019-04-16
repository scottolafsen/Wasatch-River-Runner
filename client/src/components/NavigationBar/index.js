import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import "./style.css";

export default class Example extends React.Component {

  render() {
    return (
      <div className="nav">
        <Nav tabs>
          <NavItem>
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/rivermap">River Map</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <h1>Wasatch Front Boaters</h1>
          </NavItem>
        </Nav>
      </div>
    );
  }
}