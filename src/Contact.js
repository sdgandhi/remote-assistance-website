import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class Contact extends Component {
  render() {
    return (
      <Grid>
        <Row style={{ height: "30rem" }}>
          <Col md={6} xs={12}>
            <h1>Contact</h1>
            <br />
            <p>Drop us a line at hello@getarra.com</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Contact;
