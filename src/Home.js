import React, { Component } from "react";
import { Grid, Row, Col, Button, Panel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
import Mailchimp from "./Mailchimp";
import DemoVideo from "./DemoVideo";
import AppIcon from "./AppIcon";
import Config from "./config.json";

class Home extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <div className="header">
              <AppIcon style={{ height: "128px", width: "auto", paddingTop: "3rem" }}/>
              <br />
              <br />
              <h1>{Config.tagline}</h1>
              <br />
              <h3 style={{ lineHeight: "3.5rem" }}>
                {Config.description}
              </h3>
              <br />
              <br />
              <LinkContainer to={"/beta"}>
                <Button>Get {Config.name}</Button>
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
