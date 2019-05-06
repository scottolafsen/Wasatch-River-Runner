import React from 'react';
import {
  Navbar,
  CardImg,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
 import './style.css';
 import logo from '../images/logo.png';

export default class NavBar extends React.Component {
 
  render() {
    return (
      <div>
        <Navbar color="bg-dark" light expand="md">
          <NavbarBrand size="small" href="/"><img src={logo} alt="Logo"/></NavbarBrand>
          <NavbarBrand>Northern Utah Boater Alliance</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="river" href="/rivermap"><h5>River Map</h5></NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="river" href="/"><h5>Dashboard</h5></NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}