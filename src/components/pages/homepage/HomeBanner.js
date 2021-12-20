import React from "react";
import {Link} from "react-router-dom"

import "./HomeBanner.css";

const img_banner = require("../../../assets/images/pages/1920x697.jpg").default;

const style = {
  backgroundImage: `url(${img_banner})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};
export default function HomeBanner() {
  return (
    <section className="home-banner" style={style}>
      <div className="home-banner-overlay"></div>
      <div className="home-banner-content">
        <h3>Take advantage of siri</h3>
        <p>
          <span>Bluetooth Wireless Technology.</span>
          <span>24 hour total battery life with Charging Case.</span>
          <span>3 hours charge from case in 15 minutes.</span>
          <span>One tap setup for Apple devices.</span>
          <span>Five hour battery life.</span>
        </p>
        <Link to="/collections/all">Shop Now</Link>
      </div>
    </section>
  );
}
