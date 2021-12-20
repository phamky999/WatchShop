import React, { useRef } from "react";

import "./HomeTestimonial.css";

// Core modules imports are same as usual
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const img_1 =
  require("../../../assets/images/pages/500x500-1_500x500_crop_center.jpg").default;
const img_2 =
  require("../../../assets/images/pages/500x500-2_500x500_crop_center.jpg").default;

export default function HomeTestimonial() {
  const prev1 = useRef(null);
  const next1 = useRef(null);
  return (
    <section className="home-testi">
      <div className="container-xl">
        <div className="home-testi-box">
          <div className="home-testi-title">
            <h3>Testimonial</h3>
          </div>
          <div className="home-testi-slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                nextEl: next1.current,
                prevEl: prev1.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prev1.current;
                swiper.params.navigation.nextEl = next1.current;
              }}
              loop={true}
            >
              <SwiperSlide>
                <div className="home-testi-item">
                  <div className="testi-item-img">
                    <div>
                      <img alt="image_testi" src={img_1} />
                    </div>
                  </div>
                  <div className="testi-item-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magnaaliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris
                    </p>
                    <div>
                      <h6>Glasgow</h6>
                      <p>IOS developer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-testi-item">
                  <div className="testi-item-img">
                    <div>
                      <img alt="image_testi" src={img_2} />
                    </div>
                  </div>
                  <div className="testi-item-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magnaaliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris
                    </p>
                    <div>
                      <h6>Glasgow</h6>
                      <p>IOS developer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="slider-nav-control">
                <div ref={prev1}>
                  <i className="bx bxs-chevron-left-circle"></i>
                </div>
                <div ref={next1}>
                  <i className="bx bxs-chevron-right-circle"></i>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
