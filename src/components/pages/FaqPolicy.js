import React, { useRef, useState, useEffect } from "react";
import {
  DUMY_FAQ,
  DUMY_PAYMENT,
  DUMY_TERMS,
  DUMY_RETURN,
  DUMY_PRIVACY,
} from "../../assets/fake_data/FaqPolicy";
import "./FaqPolicy.css";

const DUMY_MENU = [
  "FAQ",
  "Payment Policy",
  "Privacy Policy",
  "Return Policy",
  "Terms Conditions",
];
export default function FaqPolicy() {
  const [isActiveMenu, setIsActiveMenu] = useState(0);
  const menu_mobile = useRef(null);
  const toggleMenuHandler = () => {
    menu_mobile.current.classList.toggle("active");
  };
  const contentHandler = (index) => {
    if (index !== isActiveMenu) {
      setIsActiveMenu(index);
    }
  };
  console.log(isActiveMenu);

  return (
    <div className="faq-page">
      <div className="container-xl">
        <div className="menu">
          <ul ref={menu_mobile}>
            {DUMY_MENU.map((item, index) => (
              <li
                key={index}
                className={`${isActiveMenu === index ? "menu-active" : ""}`}
                onClick={contentHandler.bind(null, index)}
              >
                <span>{item}</span>
              </li>
            ))}
            <li></li>
          </ul>
          <div className="mobile-menu" onClick={toggleMenuHandler}>
            <i className="bx bx-menu-alt-right"></i>
            <span>Menu</span>
          </div>
        </div>
        <div className="box">
          {isActiveMenu === 0 ? (
            <Faq />
          ) : isActiveMenu === 1 ? (
            <PaymentPolicy />
          ) : isActiveMenu === 2 ? (
            <PrivacyPolicy />
          ) : isActiveMenu === 3 ? (
            <ReturnPolicy />
          ) : (
            <Terms />
          )}
        </div>
      </div>
    </div>
  );
}

const Faq = (props) => {
  useEffect(() => {
    let faq_box = document.querySelector(".faq-box");
    let collapse_btn = faq_box.querySelectorAll(".faq-collapse-btn");
    for (let i = 0; i < collapse_btn.length; i++) {
      collapse_btn[i].addEventListener("click", function () {
        let content = collapse_btn[i].nextElementSibling;
        this.classList.toggle("active");
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
        for (let j = 0; j < collapse_btn.length; j++) {
          if (collapse_btn[j] !== collapse_btn[i]) {
            let content = collapse_btn[j].nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "none";
            }
          }
        }
      });
    }
  });
  return (
    <section className="faq-box">
      {DUMY_FAQ.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.topic}</h3>
            <div className="topic_content">
              {item.content.map((sitem, sindex) => {
                return (
                  <div key={sindex} className="faq-item">
                    <button className="faq-collapse-btn">{sitem.q}</button>
                    <p>{sitem.f}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
const PaymentPolicy = (props) => {
  return (
    <section className="payment-box">
      <div className="title">Payment Policy</div>
      <div className="row">
        {DUMY_PAYMENT.map((item, index) => (
          <div key={index} className="col-12 col-md-6">
            <div className="payment-item">
              <h4>{item.title}</h4>
              <p>{item.descript}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
const PrivacyPolicy = (props) => {
  return (
    <section className="privacy-box">
      <div className="title">Privacy Policy</div>
      {DUMY_PRIVACY.map((item, index) => (
          <div className={`${index % 2 === 0 ? "" : "flex-row-reverse"}  row`} key={index}>
            <div className="col-12 col-lg-5">
              <h3>{item.title}</h3>
              <p>{item.descript}</p>
              <a href="#">More information</a>
            </div>
            <div className="col-12 col-lg-7">
              <ul>
                {item.sub_content.map((sItem, sIndex) => (
                  <li key={sIndex}>
                    <span>{sItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </section>
  );
};
const ReturnPolicy = (props) => {
  return (
    <section className="return-box">
      <div className="row">
          {DUMY_RETURN.map((item, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="">
                <h3>
                  {item.title} <span>{item.title_key}</span>
                </h3>
                <ul>
                  {item.content.map((content, index) => (
                    <li key={index}>
                      <span>{content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};
const Terms = (props) => {
  return (
    <section className="terms-box">
      {DUMY_TERMS.map((item, index) => (
          <div key={index}>
            <div className="title">{item.title}</div>
            <ul>
              {item.content.map((item, index) => (
                <li key={index}><span>{item}</span></li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};
