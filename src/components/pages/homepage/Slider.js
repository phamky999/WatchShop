import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import DUMY_SLIDER_DATA from "../../../assets/fake_data/SliderData";
import "./Slider.css";
export default function Slider() {
  const [isSliderActive, setIsSliderActive] = useState(0);

  const currentSlideHandler = (index) => {
    console.log("click" + index);
    setIsSliderActive(index);
  };

  const nextSlideHandler = useCallback(() => {
    if (DUMY_SLIDER_DATA.length - 1 === isSliderActive) {
      setIsSliderActive(0);
    } else if (DUMY_SLIDER_DATA.length - 1 > isSliderActive) {
      setIsSliderActive((prevState) => {
        return prevState + 1;
      });
    }
  }, [isSliderActive]);
  const prevSlideHandler = () => {
    if (0 === isSliderActive) {
      setIsSliderActive(DUMY_SLIDER_DATA.length - 1);
    } else if (0 < isSliderActive) {
      setIsSliderActive((prevState) => {
        return prevState - 1;
      });
    }
  };
  useEffect(() => {
    let timer = setInterval(() => {
      nextSlideHandler();
    }, 20000);

    return () => {
      clearInterval(timer);
    };
  }, [isSliderActive, nextSlideHandler]);
  return (
      <section className="slider">
        {DUMY_SLIDER_DATA.map((item, index) => {
          return (
            <SliderItem
              key={index}
              isActive={isSliderActive === index ? true : false}
              data={item}
            />
          );
        })}
        <button className="slider-btn-control prev" onClick={prevSlideHandler}>
          <i className="bx bx-chevron-left"></i>
        </button>
        <button className="slider-btn-control next" onClick={nextSlideHandler}>
          <i className="bx bx-chevron-right"></i>
        </button>
        <div className="slider-currentSlide">
          {DUMY_SLIDER_DATA.map((item, index) => (
            <span
              key={index}
              className={`current-index ${
                index === isSliderActive ? "active" : ""
              }`}
              onClick={currentSlideHandler.bind(null, index)}
            ></span>
          ))}
        </div>
      </section>
  );
}

function SliderItem(props) {
  return (
    <React.Fragment>
      <div className={`slider-item  ${props.isActive ? "active" : ""}`}>
        <div className="slider-item-img">
          <img alt="slider_img" src={props.data.img} />
        </div>
        <div className="slider-item-content">
          <p>{props.data.desc}</p>
          <h3>{props.data.title}</h3>
          <Link to="#">Shop now</Link>
        </div>
      </div>
    </React.Fragment>
  );
}
