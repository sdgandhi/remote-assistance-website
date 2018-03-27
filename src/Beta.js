import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Mailchimp from "./Mailchimp";

class Beta extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Mailchimp />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Beta;
