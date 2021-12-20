import React from "react";
import { Link } from "react-router-dom";
import "./HomeAllOther.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const img_1 =
  require("../../../assets/images/pages/1024x800_e0ac7419-55a7-415a-93e4-b78bd471dd82.jpg").default;
const b1_1 = require("../../../assets/images/blogs/b1_1.jpg").default;
const b1_2 = require("../../../assets/images/blogs/b1_2.jpg").default;
const b1_3 = require("../../../assets/images/blogs/b1_3.jpg").default;
const b1_4 = require("../../../assets/images/blogs/b1_4.jpg").default;
const b1_5 = require("../../../assets/images/blogs/b1_5.jpg").default;
const b1_6 = require("../../../assets/images/blogs/b1_6.jpg").default;
const b1_7 = require("../../../assets/images/blogs/b1_7.jpg").default;
const b1_8 = require("../../../assets/images/blogs/b1_8.jpg").default;

export function HomeAbout() {
  return (
    <section className="home-about">
      <div className="container-xl">
        <div className="home-about-box">
          <div>
            <img alt="" src={img_1} />
          </div>
          <div>
            <h4>Airpords quickly to your watch pair to ios device</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry has been the industry's standard dummy text ever since
              the 1500s.
            </p>
            <Link to="/collections/all">
              <span>Shop now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeNewLetter() {
  return (
    <section className="home-newsletter">
      <div className="container-xl">
        <div className="home-newsletter-box">
          <div className="form-title">
            <h3>Connect with us</h3>
          </div>
          <form className="form-body">
            <input type="text" placeholder="Enter your email ..." />
            <button>
              <i className="bx bx-send"></i>
              <span>subscribe</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function HomeBlogs() {
  return (
    <section className="home-blogs">
      <div className="container-xl">
        <div className="home-blogs-title">
          <h3>Recent News</h3>
        </div>
        <div id="home-blog-content" className="home-blog-content">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={false}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className="blog-item-box">
                <div className="blog-item">
                  <div className="blog-item-img">
                    <a href="#home-blog-content">
                      <img alt="" src={b1_1} />
                      <div>
                        <span>
                          <i className="bx bx-link"></i>
                        </span>
                      </div>
                      <p>January 21, 2022</p>
                    </a>
                  </div>
                  <div className="blog-item-content">
                    <a href="#home-blog-content">
                      Watch Review: Montblanc Summit Lite Smart
                    </a>
                    <p>
                      Senectus et netus et malesuada fames ac. Eu augue ut
                      lect...
                    </p>
                    <div>
                      <a href="#home-blog-content">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-item-box">
                <div className="blog-item">
                  <div className="blog-item-img">
                    <a href="#home-blog-content">
                      <img alt="" src={b1_2} />
                      <div>
                        <span>
                          <i className="bx bx-link"></i>
                        </span>
                      </div>
                      <p>January 21, 2022</p>
                    </a>
                  </div>
                  <div className="blog-item-content">
                    <a href="#home-blog-content">
                      Watch Review: Citizen CZ Smart With Google Wear OS
                    </a>
                    <p>
                      Senectus et netus et malesuada fames ac. Eu augue ut
                      lect...
                    </p>
                    <div>
                      <a href="#home-blog-content">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-item-box">
                <div className="blog-item">
                  <div className="blog-item-img">
                    <a href="#home-blog-content">
                      <img alt="" src={b1_3} />
                      <div>
                        <span>
                          <i className="bx bx-link"></i>
                        </span>
                      </div>
                      <p>January 21, 2022</p>
                    </a>
                  </div>
                  <div className="blog-item-content">
                    <a href="#home-blog-content">
                      Hublot Big Bang e Smartwatch Review
                    </a>
                    <p>
                      Senectus et netus et malesuada fames ac. Eu augue ut
                      lect...
                    </p>
                    <div>
                      <a href="#home-blog-content">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-item-box">
                <div className="blog-item">
                  <div className="blog-item-img">
                    <a href="#home-blog-content">
                      <img alt="" src={b1_4} />
                      <div>
                        <span>
                          <i className="bx bx-link"></i>
                        </span>
                      </div>
                      <p>January 21, 2022</p>
                    </a>
                  </div>
                  <div className="blog-item-content">
                    <a href="#home-blog-content">
                      Ghosts of the Col Du Pantoll: A TAG Heuer Conne...
                    </a>
                    <p>
                      Senectus et netus et malesuada fames ac. Eu augue ut
                      lect...
                    </p>
                    <div>
                      <a href="#home-blog-content">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-item-box">
                <div className="blog-item">
                  <div className="blog-item-img">
                    <a href="#home-blog-content">
                      <img alt="" src={b1_5} />
                      <div>
                        <span>
                          <i className="bx bx-link"></i>
                        </span>
                      </div>
                      <p>January 21, 2022</p>
                    </a>
                  </div>
                  <div className="blog-item-content">
                    <a href="#home-blog-content">
                      Hublot Announces The Big Bang e Smartwatch
                    </a>
                    <p>
                      Senectus et netus et malesuada fames ac. Eu augue ut
                      lect...
                    </p>
                    <div>
                      <a href="#home-blog-content">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-item-box">
                <div className="blog-item">
                  <div className="blog-item-img">
                    <a href="#home-blog-content">
                      <img alt="" src={b1_6} />
                      <div>
                        <span>
                          <i className="bx bx-link"></i>
                        </span>
                      </div>
                      <p>January 21, 2022</p>
                    </a>
                  </div>
                  <div className="blog-item-content">
                    <a href="#home-blog-content">Do You Wear A Smartwatch?</a>
                    <p>
                      Senectus et netus et malesuada fames ac. Eu augue ut
                      lect...
                    </p>
                    <div>
                      <a href="#home-blog-content">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-item-box">
                <div className="blog-item">
                  <div className="blog-item-img">
                    <a href="#home-blog-content">
                      <img alt="" src={b1_7} />
                      <div>
                        <span>
                          <i className="bx bx-link"></i>
                        </span>
                      </div>
                      <p>January 21, 2022</p>
                    </a>
                  </div>
                  <div className="blog-item-content">
                    <a href="#home-blog-content">
                      Tissot T-Touch Connect Solar Smartwatch Preview
                    </a>
                    <p>
                      Senectus et netus et malesuada fames ac. Eu augue ut
                      lect...
                    </p>
                    <div>
                      <a href="#home-blog-content">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-item-box">
                <div className="blog-item">
                  <div className="blog-item-img">
                    <a href="#home-blog-content">
                      <img alt="" src={b1_8} />
                      <div>
                        <span>
                          <i className="bx bx-link"></i>
                        </span>
                      </div>
                      <p>January 21, 2022</p>
                    </a>
                  </div>
                  <div className="blog-item-content">
                    <a href="#home-blog-content">
                      Casio Pro Trek WSD-F21 HR Watch Review
                    </a>
                    <p>
                      Senectus et netus et malesuada fames ac. Eu augue ut
                      lect...
                    </p>
                    <div>
                      <a href="#home-blog-content">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export function HomeService() {
  return (
    <section className="home-service">
      <div className="container-xl">
        <ul>
        <li>
            <div>
            <i className='bx bx-reset'></i>
            </div>
            <div>
              <p>7 Days Return</p>
              <span>
                Lorem is simply dummy text of the printing text of the printing.
              </span>
            </div>
          </li>
          <li>
            <div>
              <i className="bx bx-lock-alt"></i>
            </div>
            <div>
              <p>100% Payment Secure</p>
              <span>
                Lorem is simply dummy text of the printing text of the printing.
              </span>
            </div>
          </li>
          <li>
            <div>
            <i className='bx bx-happy-alt'></i>
            </div>
            <div>
              <p>Support 24/7</p>
              <span>
                Lorem is simply dummy text of the printing text of the printing.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
