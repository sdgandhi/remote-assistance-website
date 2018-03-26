import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class About extends Component {
  render() {
    return (
      <Grid>
        <Row style={{ height: "60rem" }}>
          <Col md={6} xs={12}>
            <h1>About</h1>
            <br />
            <p>
              We believe that augmented reality can improve communication by
              letting us share our world with others.
              <br />
              <br />
              In current video calls, it's difficult to point to something in
              the other person's world. We often struggle to describe the
              position or action we want someone to take. We want to just point,
              like we would do if we were there, but we can't.
              <br />
              <br />
              With Arra, all of this is possible.
            </p>
            <br />
            <Button>
              Get Arra
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About;
