import React from "react";

import { Link } from "react-router-dom";
import "./AboutUs.css";

const img_1 =
  require("../../assets/images/pages/filler2_700x650_crop_center.jpg").default;
const img_2 =
  require("../../assets/images/pages/filler3_700x650_crop_center.jpg").default;
const img_3 =
  require("../../assets/images/pages/filler4_700x650_crop_center.jpg").default;

const img_4 = require("../../assets/images/pages/team1.jpg").default;
const img_5 = require("../../assets/images/pages/team2.jpg").default;
const img_6 = require("../../assets/images/pages/team3.jpg").default;
const img_7 = require("../../assets/images/pages/team5.jpg").default;

const img_8 =
  require("../../assets/images/pages/100x100-1_90x90_crop_center.jpg").default;
const img_9 =
  require("../../assets/images/pages/100x100-4_90x90_crop_center.jpg").default;
const img_10 = require("../../assets/images/pages/Slider2.jpg").default;

const styles = {
  backgroundImage: `url(${img_10})`,
  backgroundrepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};
export default function AboutUs() {
  return (
    <div className="aboutus-page" style={styles}>
      <section className="aboutus-home">
        <div className="container-xl">
          <div className="aboutus-home-row">
            <div>
              <img alt="img" src={img_1} />
            </div>
            <div className="aboutus-sub">
              <div>
                <p>who we are</p>
                <h3>Professional Support</h3>
                <span>
                  This striking collection is an inspiring take on the shape of
                  the initial letter adding a touch of modern luxury
                </span>
                <Link to="/collections/all">Shop now</Link>
              </div>
            </div>
          </div>
          <div className="aboutus-home-row rever">
            <div>
              <img alt="img" src={img_2} />
            </div>

            <div className="aboutus-sub">
              <div>
                <p>MADE WITH LOVE</p>
                <h3>Premium Design</h3>
                <span>
                  This striking collection is an inspiring take on the shape of
                  the initial letter adding a touch of modern luxury
                </span>
                <Link to="/collections/all">Shop now</Link>
              </div>
            </div>
          </div>
          <div className="aboutus-home-row">
            <div>
              <img alt="img" src={img_3} />
            </div>

            <div className="aboutus-sub">
              <div>
                <p>FOR EVERYDAY</p>
                <h3>General Destination</h3>
                <span>
                  This striking collection is an inspiring take on the shape of
                  the initial letter adding a touch of modern luxury
                </span>
                <Link to="/collections/all">Shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutus-vision">
        <div className="container-xl">
          <ul>
            <li>
              <div>
                <img alt="img" src={img_8} />
              </div>
              <div>
                <p>Our Mission</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.,
                  rutrum massa quis, porttitor lorem. Aliquam non est a ipsum
                  facilisis scelerisque eu sed lectus.
                </span>
              </div>
            </li>
            <li>
              <div>
                <img alt="img" src={img_9} />
              </div>
              <div>
                <p>Our Mission</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.,
                  rutrum massa quis, porttitor lorem. Aliquam non est a ipsum
                  facilisis scelerisque eu sed lectus.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="aboutus-couter">
        <div className="container-xl">
          <div className="aboutus-couter-wap">
          <ul>
            <li>
              <b>678</b>
              <p>working hours</p>
            </li>
            <li>
              <b>234</b>
              <p>photo capture</p>
            </li>
            <li>
              <b>456</b>
              <p>work complete</p>
            </li>
            <li>
              <b>123</b>
              <p>cup of tea</p>
            </li>
          </ul>
          </div>
        </div>
      </section>
      <section className="aboutus-ourteam">
        <div className="container-xl">
          <div className="header">
            <h3>Meet Our Team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum egestas orci, vitae ullamcorper risus consectetur id.
            </p>
          </div>
          <ul>
            <li>
              <div>
                <img alt="img" src={img_4} />
              </div>
              <div>
                <h4>Maudud Hossain</h4>
                <p>Programmer</p>
              </div>
            </li>
            <li>
              <div>
                <img alt="img" src={img_5} />
              </div>
              <div>
                <h4>Calista Rose</h4>
                <p>Manager</p>
              </div>
            </li>
            <li>
              <div>
                <img alt="img" src={img_6} />
              </div>
              <div>
                <h4>James Micky</h4>
                <p>Designer</p>
              </div>
            </li>
            <li>
              <div>
                <img alt="img" src={img_7} />
              </div>
              <div>
                <h4>Nina Theresa</h4>
                <p>Managing Director</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
