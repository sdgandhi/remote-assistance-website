import React, { Component } from "react";
import { Grid, Row, Col, Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
import Mailchimp from "./Mailchimp";
import DemoVideo from "./DemoVideo";

class Home extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col>
            <div className="jumbotron-wrapper">
              <Jumbotron>
                <h1>Remote collaboration in augmented reality</h1>
                <br />
                <h2>
                  Arra lets you draw and place objects in someone else's world
                </h2>
                <br />
                <br />
                  <Button bsStyle="primary">Get Arra</Button>
              </Jumbotron>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <DemoVideo />
          </Col>
        </Row>
        <Row>
          <Col>
            <Mailchimp />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
