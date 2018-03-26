import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./About.css";

class About extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6} xs={12}>
            <h1>About</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About;
