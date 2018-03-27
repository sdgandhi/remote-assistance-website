import React, { Component } from "react";
import { Grid, Row, Col, Jumbotron, Button, Panel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
import Mailchimp from "./Mailchimp";
import DemoVideo from "./DemoVideo";

class Home extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <div className="header">
              <img
                className=""
                src="https://imgur.com/PRYIKU9.png"
                style={{ height: "128px", width: "auto", paddingTop: "3rem" }}
                alt="Arra app icon"
              />
              <br />
              <br />
              <h1>Communicate better with augmented reality.</h1>
              <br />
              <h3 style={{ lineHeight: "3.5rem" }}>
                Arra lets you draw and place objects in someone else's world.
              </h3>
              <br />
              <br />
              <LinkContainer to={"/beta"}>
                <Button>Get Arra</Button>
              </LinkContainer>
            </div>
          </Col>
          <Col md={6}>
            <DemoVideo />
          </Col>
        </Row>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <Row>
          <Col md={6}>
            <Mailchimp />
          </Col>{" "}
          <Col md={6}>
            <Panel>
              <Panel.Body>
                <h2>
                  <em>It's like FaceTime, but in augmented reality.</em>
                </h2>
              </Panel.Body>
              <Panel.Footer>— Someone who used Arra</Panel.Footer>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
