import React, { Component } from "react";
import "./DemoVideo.css";

class DemoVideo extends Component {
  render() {
    return (
      <div className="demo-video">
        <div className="phone-frame center-block">
          <video autoplay loop muted controls preload poster="https://imgur.com/mKpuXGr.jpg">
            <source src="https://imgur.com/RG2p6ZN.mp4" />
          </video>
        </div>
      </div>
    );
  }
}

export default DemoVideo;
