import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Header.css";

import HeaderMegaMenu from "./NavBar/HeaderMegaMenu";

const img_emty_cart =
  require("../../assets/images/header/emty_cart.png").default;

const img_product_01 =
  require("../../assets/images/products/product_1.jpg").default;

export default function Header() {
  const headerRef = useRef(null);
  const searchFormRef = useRef(null);
  const [isShowMenu,setIsShowMenu] = useState(false);
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
  const showMobileMenuHandler = (event) =>{
    event.preventDefault();
    setIsShowMenu(true);
  }
  const closeMobileMenuHandler = () =>{
    setIsShowMenu(false);
  }
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
    <div className="header-box" ref={headerRef}>
      <div className="container-xxl">
        <header>
          <div className="header-logo">
            <a href="/">
              <span>k.watch</span>
            </a>
          </div>
          <HeaderMegaMenu isShow={isShowMenu}  onClose={closeMobileMenuHandler} />
          <div className="header-menu menu-right">
            <ul className="menu-right-ul">
              <li className='menu-mobile-icon' onClick={showMobileMenuHandler}>
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
                    <Link to="/">Login</Link>
                  </li>
                  <li>
                    <Link to="/">Register</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-right-cart">
                <div className="header-cart">
                  <Link to="/">
                    <i className="bx bx-shopping-bag"></i>
                  </Link>
                  <div className="cart-box cart--emty">
                    <div className="cart-title">
                      <p>No products in the cart</p>
                    </div>
                    <div className="cart-body">
                      <div className="img-emty-cart">
                        <img alt="cart_emty" src={img_emty_cart} />
                      </div>
                    </div>
                    <div className="cart-bottom">
                      <Link to="/">
                        <span>Continue Shopping</span>
                      </Link>
                    </div>
                  </div>
                  <div className="cart-box cart--list">
                    <div className="cart-title">
                      <p>
                        There are <span>5</span> products
                      </p>
                    </div>
                    <div className="cart-body">
                      <ul id="header-cart-ul">
                        <li className="cart-body-li">
                          <div className="cart-item-left">
                            <div className="item-img">
                              <img alt="item-img" src={img_product_01} />
                            </div>
                          </div>
                          <div className="cart-item-right">
                            <Link to="/" className="cart-item-name">
                              Smartwatch - Bip U Pro
                            </Link>
                            <p className="cart-item-amout">
                              <span>2</span> x
                            </p>
                            <p className="cart-item-price">$150.00</p>
                            <div className="cart-item-remove">
                              <i className="bx bxs-trash"></i>
                            </div>
                          </div>
                        </li>
                        <li className="cart-body-li">
                          <div className="cart-item-left">
                            <div className="item-img">
                              <img alt="item-img" src={img_product_01} />
                            </div>
                          </div>
                          <div className="cart-item-right">
                            <Link to="/" className="cart-item-name">
                              Smartwatch - Bip U Pro
                            </Link>
                            <p className="cart-item-amout">
                              <span>2</span> x
                            </p>
                            <p className="cart-item-price">$150.00</p>
                            <div className="cart-item-remove">
                              <i className="bx bxs-trash"></i>
                            </div>
                          </div>
                        </li>
                        <li className="cart-body-li">
                          <div className="cart-item-left">
                            <div className="item-img">
                              <img alt="item-img" src={img_product_01} />
                            </div>
                          </div>
                          <div className="cart-item-right">
                            <Link to="/" className="cart-item-name">
                              Smartwatch - Bip U Pro
                            </Link>
                            <p className="cart-item-amout">
                              <span>2</span> x
                            </p>
                            <p className="cart-item-price">$150.00</p>
                            <div className="cart-item-remove">
                              <i className="bx bxs-trash"></i>
                            </div>
                          </div>
                        </li>
                        <li className="cart-body-li">
                          <div className="cart-item-left">
                            <div className="item-img">
                              <img alt="item-img" src={img_product_01} />
                            </div>
                          </div>
                          <div className="cart-item-right">
                            <Link to="/" className="cart-item-name">
                              Smartwatch - Bip U Pro
                            </Link>
                            <p className="cart-item-amout">
                              <span>2</span> x
                            </p>
                            <p className="cart-item-price">$150.00</p>
                            <div className="cart-item-remove">
                              <i className="bx bxs-trash"></i>
                            </div>
                          </div>
                        </li>
                        <li className="cart-body-li">
                          <div className="cart-item-left">
                            <div className="item-img">
                              <img alt="item-img" src={img_product_01} />
                            </div>
                          </div>
                          <div className="cart-item-right">
                            <Link to="/" className="cart-item-name">
                              Smartwatch - Bip U Pro
                            </Link>
                            <p className="cart-item-amout">
                              <span>2</span> x
                            </p>
                            <p className="cart-item-price">$150.00</p>
                            <div className="cart-item-remove">
                              <i className="bx bxs-trash"></i>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="cart-total">
                        <span>Sub Total:</span>
                        <em className="total">$230.00</em>
                      </div>
                    </div>
                    <div className="cart-bottom">
                      <Link to="/">
                        <span>View Cart</span>
                      </Link>
                      <Link to="/">
                        <span>Check Out</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <span className="cart-item-amout">5</span>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}
