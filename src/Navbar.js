import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.css";
import AppIcon from "./AppIcon";
import Config from "./config.json";

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
            <AppIcon
              style={{
	            height: "32px",
	            width: "auto",
	            paddingRight: "1rem",
	            paddingBottom: "1rem"
            }}
              className={"pull-left"}/>
            <Link to="/">{Config.name}</Link>
          </Navbar.Brand>
        </Navbar.Header>
        {nav}
      </Navbar>
    );
  }
}

export default ArraNavbar;
