import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Config from "./config.json";

class Contact extends Component {
  render() {
    return (
      <Grid>
        <Row style={{ height: "30rem" }}>
          <Col md={6}>
            <h1>Contact</h1>
            <br />
            <p>Drop us a line at {Config.contact_email}</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Contact;
