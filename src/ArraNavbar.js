import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./ArraNavbar.css";

class ArraNavbar extends Component {
  render() {
    let nav = (
      <div>
        <Nav>
          <LinkContainer to="/about">
            <NavItem eventKey={1}>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/beta">
            <NavItem eventKey={2}>Beta</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem eventKey={3}>Contact</NavItem>
          </LinkContainer>
        </Nav>
      </div>
    );

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand className="navbar-brand">
            <img
              className="pull-left"
              src="https://imgur.com/PRYIKU9.png"
              style={{
                height: "32px",
                width: "auto",
                paddingRight: "1rem",
                paddingBottom: "1rem"
              }}
              alt="Arra app icon"
            />
            <Link to="/">Arra</Link>
          </Navbar.Brand>
        </Navbar.Header>
        {nav}
      </Navbar>
    );
  }
}

export default ArraNavbar;
