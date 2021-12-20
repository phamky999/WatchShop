import React, { useState, useRef, useEffect } from "react";
import { Link} from "react-router-dom";

import "./Header.css";
import HeaderCart from "./NavBar/HeaderCart";

import HeaderMegaMenu from "./NavBar/HeaderMegaMenu";

const img_emty_cart =
  require("../../assets/images/header/emty_cart.png").default;

const img_product_01 =
  require("../../assets/images/products/product_1.jpg").default;

export default function Header() {
  const headerRef = useRef(null);
  const searchFormRef = useRef(null);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const showFormSearchHandler = (event) => {
    event.preventDefault();
    searchFormRef.current.style.zIndex = "99";
    searchFormRef.current.style.top = "0";
    searchFormRef.current.style.opacity = "1";
    // searchFormRef.current.style.display = "block";
  };
  const closeFormSearchHandler = (event) => {
    event.preventDefault();
    searchFormRef.current.style.zIndex = "-5";
    searchFormRef.current.style.top = "-80px";
    searchFormRef.current.style.opacity = "0";
    // searchFormRef.current.style.display = "none";
  };
  const showMobileMenuHandler = (event) => {
    event.preventDefault();
    setIsShowMenu(true);
  };
  const closeMobileMenuHandler = () => {
    setIsShowMenu(false);
  };
  const scrollFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header-fixed");
    } else {
      headerRef.current.classList.remove("header-fixed");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);
  return (
    <React.Fragment>
    
      <div className="header-box" ref={headerRef}>
        <div className="container-xl">
          <header>
            <div className="header-logo">
              <a href="/">
                <span>k.watch</span>
              </a>
            </div>
            <HeaderMegaMenu
              isShow={isShowMenu}
              onClose={closeMobileMenuHandler}
            />
            <div className="header-menu menu-right">
              <ul className="menu-right-ul">
                <li
                  className="menu-mobile-icon"
                  onClick={showMobileMenuHandler}
                >
                  <i className="bx bx-menu"></i>
                </li>
                <li>
                  <i
                    className="bx bx-search "
                    onClick={showFormSearchHandler}
                  ></i>
                  <div className="search-area" ref={searchFormRef}>
                    <div className="search-box hidden">
                      <div className="search-form">
                        <input type="text" placeholder="Search Our Catalog" />
                        <i className="bx bx-search search-icon"></i>
                      </div>
                      <div className="search-close-btn">
                        <i
                          className="bx bx-x"
                          onClick={closeFormSearchHandler}
                        ></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-right-user">
                  <i className="bx bx-user menu-user-icon"></i>
                  <ul className="user-menu-dropdown">
                    <li>
                      <Link to="#">Login</Link>
                    </li>
                    <li>
                      <Link to="#">Register</Link>
                    </li>
                  </ul>
                </li>
                <HeaderCart />
              </ul>
            </div>
          </header>
        </div>
      </div>
    </React.Fragment>
  );
}
