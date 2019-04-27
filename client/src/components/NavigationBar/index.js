import React from 'react';
import {

  Navbar,
  
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
 import './style.css';

export default class Example extends React.Component {
 
  render() {
    return (
      <div>
        <Navbar color="bg-dark" light expand="md">
          <NavbarBrand href="/"><h1>Northern Utah Boater Alliance</h1></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="river" href="/rivermap"><h4>River Map</h4></NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="river" href="/"><h4>Dashboard</h4></NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}