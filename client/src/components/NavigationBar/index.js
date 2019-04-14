import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {

  render() {
    return (
      <div>
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
        </Nav>
      </div>
    );
  }
}