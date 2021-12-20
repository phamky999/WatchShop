import React from "react";
import {Link } from "react-router-dom";

import "./Footer.css";

const payment_icon_1 = require("../../assets/images/footer/p1.png").default;
const payment_icon_2 = require("../../assets/images/footer/p2.png").default;
const payment_icon_3 = require("../../assets/images/footer/p3.png").default;
const payment_icon_4 = require("../../assets/images/footer/p4.png").default;
const payment_icon_5 = require("../../assets/images/footer/p5.png").default;

const DUMY_FOOTER_PAYMENT_ICON = [
  {
    title: "MasterCard",
    path: "#",
    image: payment_icon_1,
  },
  {
    title: "PayPal",
    path: "#",
    image: payment_icon_2,
  },
  {
    title: "Discover",
    path: "#",
    image: payment_icon_3,
  },
  {
    title: "AmericanExpress",
    path: "#",
    image: payment_icon_4,
  },
  {
    title: "VISA",
    path: "#",
    image: payment_icon_5,
  },
];
const DUMY_FOOTER_LINKS = [
  {
    title: "About Us",
    path: "/pages/about-us",
  },
  {
    title: "Contact",
    path: "/pages/contact",
  },
  {
    title: "Faq & Policy",
    path: "/pages/faq-policy",
  },
  {
    title: "Search",
    path: "/search",
  },
  {
    title: "Blogs",
    path: "/blogs/news",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container-xl">
        <ul className="footer-ul">
          <li className="footer-li item-info">
            <div  className='logo'>
              <Link to="/">
                <span>k.watch</span>
              </Link>
            </div>
            <div className='slog'>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                fugiat vel quo sit quibusdam ipsa numquam veniam cum aliquid
                voluptatum.
              </p>
            </div>
            <ul className="social-icons">
              <li className="social-icons-fb">
                <Link to="/">
                  <span>
                    <i className="bx bxl-facebook"></i>
                  </span>
                </Link>
              </li>
              <li className="social-icons-tw">
                <Link to="/">
                  <span>
                    <i className="bx bxl-twitter"></i>
                  </span>
                </Link>
              </li>
              <li className="social-icons-ln">
                <Link to="/">
                  <span>
                    <i className="bx bxl-linkedin"></i>
                  </span>
                </Link>
              </li>
              <li className="social-icons-in">
                <Link to="/">
                  <span>
                    <i className="bx bxl-instagram"></i>
                  </span>
                </Link>
              </li>
              <li className="social-icons-p">
                <Link to="/">
                  <span>
                    <i className="bx bxl-pinterest-alt"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="footer-li item-links">
            <ul>
              {DUMY_FOOTER_LINKS.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="footer-li item-news">
            <h4>News</h4>
            <form>
              <input type="text" placeholder="Enter your email..." />
              <button>
              <i className='bx bx-log-in-circle' ></i>
              </button>
            </form>
            <ul>
              {DUMY_FOOTER_PAYMENT_ICON.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`payment-${item.title.toLowerCase()}-icon`}
                    >
                      <img alt={item.title} src={item.image} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}
