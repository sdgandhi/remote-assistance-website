import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "./DemoVideo.css";

class DemoVideo extends Component {
  render() {
    return (
      <div className="demo-video">
        <img
          className="center-block"
          src="https://imgur.com/PRYIKU9.png"
          style={{ height: "128px", width: "auto", paddingTop: "3rem" }}
          alt="Arra app icon"
        />
        <div className="phone-frame center-block">
          <video autoplay loop muted controls preload>
            <source src="https://imgur.com/RG2p6ZN.mp4" />
          </video>
        </div>
      </div>
    );
  }
}

export default DemoVideo;
