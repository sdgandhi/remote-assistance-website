import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: "#222",
          color: "white",
          paddingTop: "4rem",
          paddingBottom: "4rem"
        }}
      >
        <Grid>
          <Row>
            <Col xs={4}>
              <h6 className="text-uppercase">
                <strong>Site map</strong>
              </h6>
              <ul class="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Col>
            <Col xs={4}>
              <h6 className="text-uppercase">
                <strong>Social media</strong>
              </h6>
              <ul class="list-unstyled">
                <li>Twitter</li>
                <li>Medium</li>
                <li>Instagram</li>
              </ul>
            </Col>
            <Col xs={4}>
              <h6 className="text-uppercase">
                <strong>Legal</strong>
              </h6>
              <ul class="list-unstyled">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
          </Row>
          <div class="text-center" style={{ paddingTop: "4rem" }}>
            © Remote Assistance 2018
          </div>
        </Grid>
      </footer>
    );
  }
}

export default Footer;