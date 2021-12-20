import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import { displayPrice } from "../../utils/displayPrice";
import { Link } from "react-router-dom";
import "./CartPage.css";
export default function CartPage() {
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
  const toggleQuantityHandler = (type,id,size,color,material,quantity,event) => {
    event.preventDefault();
    if(type === "subtraction" && +quantity > 1){
      dispatch(cartActions.updateQuantity({
        type: "subtraction",
        id: id,
        size: size,
        color: color,
        material: material,
      }))
    }
    else if(type === "summation"){
      dispatch(cartActions.updateQuantity({
        type: "summation",
        id: id,
        size: size,
        color: color,
        material: material,
      }))
    }
    console.log(type,id,size,color,material,quantity);
  };
  return (
    <div className="cart-page">
      <div className="container-xl">
        {+cartData.totalQuantity === 0 ? (
          <div className="cart-page-content--emty">
            <div className="cart-is-emty">
              <h3>Your Cart Is Currently Empty!</h3>
              <div>
                <Link to="/products/all">Continue Shopping</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-page-content--hasItem">
            <div className="cart-row row">
              <div className="col-12 col-lg-8">
                <ul className="cart-content-left">
                  {cartData.products.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="cart-item-img-box">
                          <Link to={item.link}>
                            <img alt="product_img" src={item.image} />
                          </Link>
                        </div>
                        <div className="cart-item-info-box">
                          <Link to={item.link}>
                            <span> {item.name}</span>
                          </Link>

                          <p>
                            Size: <span>{item.size}</span>
                          </p>
                          <p>
                            Color: <span>{item.color}</span>
                          </p>
                          <p>
                            Material: <span>{item.material}</span>
                          </p>
                          <p>
                            Unit Price:{" "}
                            <span>{displayPrice(item.price, "$")}</span>
                          </p>
                        </div>

                        <div className="cart-item-quantity-box">
                          <div>
                            <span onClick={toggleQuantityHandler.bind(null, "subtraction",item.id,item.size,item.color,item.material,item.quantity)}>
                              <span >-</span>
                            </span>
                            <input value={item.quantity} readOnly={true} />
                            <span onClick={toggleQuantityHandler.bind(null, "summation",item.id,item.size,item.color,item.material,item.quantity)}>
                              <span>+</span>
                            </span>
                          </div>
                          
                          <button
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
                            Remove
                          </button>
                        </div>

                        <div className="cart-item-total-box">
                          <span>
                            {displayPrice(item.totalPriceProduct, "$")}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-12 col-lg-4 ">
                <div className="cart-content-right">
                  <div className="total-product">
                    <span>Total Product: </span>
                    <span>{cartData.totalQuantity}</span>
                  </div>
                  <div className="total-price">
                    <span>Total Price: </span>
                    <span>{displayPrice(cartData.totalCartPrice, "$")}</span>
                  </div>
                  <div className="catr-button-control">
                    <button>Back to shop</button>
                    <button>Check out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

