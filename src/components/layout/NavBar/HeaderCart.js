import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart";

import { displayPrice } from "../../../utils/displayPrice";
import "./HeaderCart.css";
const img_emty_cart =
  require("../../../assets/images/header/emty_cart.png").default;

export default function HeaderCart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  const removeItemHandler = (
    id,
    size,
    color,
    material,
    quantity,
    totalPriceProduct
  ) => {
    dispatch(
      cartActions.removeProduct({
        id,
        size,
        color,
        material,
        quantity,
        totalPriceProduct,
      })
    );
  };

  return (
    <li className="menu-right-cart">
      <div className="header-cart">
        <Link to="/cart">
          <i className="bx bx-shopping-bag"></i>
        </Link>
        {+cartData.totalQuantity === 0 && (
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
              <Link to="/products/all">
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        )}
        {+cartData.totalQuantity > 0 && (
          <div className="cart-box cart--list">
            <div className="cart-title">
              <p>
                There are <span>{cartData.totalQuantity}</span> products
              </p>
            </div>
            <div className="cart-body">
              <ul id="header-cart-ul">
                {cartData.products.map((item, index) => {
                  return (
                    <li key={index} className="cart-body-li">
                      <div className="cart-item-left">
                        <div className="item-img">
                          <img alt="item-img" src={item.image} />
                        </div>
                      </div>
                      <div className="cart-item-right">
                        <Link to={item.link} className="cart-item-name">
                          {item.name}
                        </Link>
                        <p className="cart-item-amout">
                          <span>{item.quantity}</span> x
                        </p>
                        <p className="cart-item-price">
                          {displayPrice(item.price, "$")}
                        </p>
                        <div
                          className="cart-item-remove"
                          onClick={removeItemHandler.bind(
                            null,
                            item.id,
                            item.size,
                            item.color,
                            item.material,
                            item.quantity,
                            item.totalPriceProduct
                          )}
                        >
                          <i className="bx bxs-trash"></i>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="cart-total">
                <span>Sub Total:</span>
                <em className="total">
                  {displayPrice(cartData.totalCartPrice, "$")}
                </em>
              </div>
            </div>
            <div className="cart-bottom">
              <Link to="/cart">
                <span>View Cart</span>
              </Link>
              <Link to="/">
                <span>Check Out</span>
              </Link>
            </div>
          </div>
        )}
      </div>
      <span className="cart-item-amout">{cartData.totalQuantity}</span>
    </li>
  );
}
