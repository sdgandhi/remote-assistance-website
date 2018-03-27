import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Config from "./config.json";

class About extends Component {
  render() {
    return (
      <Grid>
        <Row style={{ height: "60rem" }}>
          <Col md={6}>
            <h1>About</h1>
            <br />
            <p>
              {Config.about}
            </p>
            <br />
            <LinkContainer to={"/beta"}>
              <Button>Get {Config.name}</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About;
