import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

class ArraNavbar extends Component {
  render() {
    let nav = (
      <div>
        <Nav>
          {/*
          <IndexLinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>
        */}
          <LinkContainer to="/about">
            <NavItem eventKey={3}>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem eventKey={4}>Contact</NavItem>
          </LinkContainer>
        </Nav>
      </div>
    );

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Arra</Link>
          </Navbar.Brand>
        </Navbar.Header>
        {nav}
      </Navbar>
    );
  }
}

export default ArraNavbar;
