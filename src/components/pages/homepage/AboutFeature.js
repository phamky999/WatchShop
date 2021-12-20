import React from "react";
import   "./AboutFeature.css";

const img_1 = require("../../../assets/images/blogs/img_b_1.png").default;
const img_2 = require("../../../assets/images/blogs/img_b_1_1.jpg").default;
const img_3 = require("../../../assets/images/blogs/img_b_1_2.jpg").default;
const img_4 = require("../../../assets/images/blogs/img_b_1_3.jpg").default;
const img_5 = require("../../../assets/images/blogs/img_b_1_4.jpg").default;

export default function AboutFeature() {
  return (
    <section className="about-features">
      <div className="container-xl">
        <div className="box-title">
            <h3>Features</h3>
            <em>all in one</em>
        </div>
        <div className="row ">
          <div className="col-12 col-md-5">
            <div className="about-features-left">
              <img alt="about_Feature_1" src={img_1} />
            </div>
          </div>
          <div className=" col-12 col-md-7">
            <ul className="about-features-right">
              <li>
                <div>
                  <img alt="about_Feature_2" src={img_2} />
                </div>
                <div>
                  <p>Build Quality and Design</p>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <img alt="about_Feature_3" src={img_3} />
                </div>
                <div>
                  <p>Excellent battery life</p>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <img alt="about_Feature_4" src={img_4} />
                </div>
                <div>
                  <p>Battery Life</p>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <img alt="about_Feature_5" src={img_5} />
                </div>
                <div>
                  <p>Acurate activity tracking</p>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
