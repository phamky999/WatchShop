import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import Modal from "../UI/Modal";
import { displayPrice } from "../../utils/displayPrice";

import "./ProductViewModal.css";
export default function ProductViewModal(props) {
  const dispatch = useDispatch();
  const dataIn = useSelector((state) => {
    return {
      colors: state.products.colors,
      size: state.products.size,
      materials: state.products.materials,
    };
  });
  const [selectedColor, setSelectedColor] = useState({
    value: undefined,
    errStatus: false,
    errMsg: "You need to choose the product color.",
  });
  const [selectedSize, setSelectedSize] = useState({
    value: undefined,
    errStatus: false,
    errMsg: "You need to choose the product size.",
  });
  const [selectedMaterial, setSelectedMaterial] = useState({
    value: undefined,
    errStatus: false,
    errMsg: "You need to choose the product material.",
  });
  const [selectedQuantity, setSelectedQuantity] = useState({
    value: "",
    errStatus: false,
    errMsg: "",
  });
  const [isStatus,setIsStatus] = useState({
    status: false,
    message: "",
  });
  const colors = props.data.colors.flatMap((item) =>
    dataIn.colors.filter((el) => +el.id === +item)
  );
  const sizes = props.data.sizes.flatMap((item) =>
    dataIn.size.filter((el) => +el.id === +item)
  );
  const materials = props.data.materials.flatMap((item) =>
    dataIn.materials.filter((el) => +el.id === +item)
  );
  const chooseItemHandler = (group, id, name) => {
    switch (group) {
      case "size":
        setSelectedSize((prev) => {
          return {
            ...prev,
            errStatus: false,
            value: {
              id: +id,
              name,
            },
          };
        });
        break;
      case "color":
        setSelectedColor((prev) => {
          return {
            ...prev,
            errStatus: false,
            value: {
              id: +id,
              name,
            },
          };
        });
        break;
      case "material":
        setSelectedMaterial((prev) => {
          return {
            ...prev,
            errStatus: false,
            value: {
              id: +id,
              name,
            },
          };
        });
        break;
      default:
        break;
    }
  };
  const changeQuantityHandler = (event) => {
    if (event.target.value.trim() === "") {
      setSelectedQuantity((prev) => {
        return {
          value: event.target.value,
          errStatus: true,
          errMsg: "Quantity is required",
        };
      });
    } else if (/^\d+$/.test(event.target.value) === false) {
      setSelectedQuantity((prev) => {
        return {
          value: event.target.value,
          errStatus: true,
          errMsg: "Quantity invalid",
        };
      });
    } else if (/^\d+$/.test(event.target.value) === true) {
      setSelectedQuantity((prev) => {
        return {
          value: event.target.value,
          errStatus: false,
          errMsg: "",
        };
      });
    }
  };
  const toggleQuantityHandler = (type) => {
    if (type === "summation") {
      if (selectedQuantity.value.trim() === "") {
        setSelectedQuantity((prev) => {
          return {
            errStatus: false,
            errMsg: "",
            value: "1",
          };
        });
      } else if (
        selectedQuantity.errStatus === false &&
        +selectedQuantity.value >= 0
      ) {
        setSelectedQuantity((prev) => {
          return {
            ...prev,
            value: (+prev.value + 1).toString(),
          };
        });
      }
    } else if (type === "subtraction") {
      if (selectedQuantity.errStatus === false && +selectedQuantity.value > 1) {
        setSelectedQuantity((prev) => {
          return {
            ...prev,
            value: (+prev.value - 1).toString(),
          };
        });
      } else if (
        selectedQuantity.errStatus === false &&
        +selectedQuantity.value === 1
      ) {
        return;
      }
    }
  };
  const addToCartHandler = (event) => {
    event.preventDefault();
    if (selectedSize.value === undefined) {
      setSelectedSize((prevState) => {
        return {
          ...prevState,
          errStatus: true,
        };
      });
    }
    if (selectedColor.value === undefined) {
      setSelectedColor((prevState) => {
        return {
          ...prevState,
          errStatus: true,
        };
      });
    }
    if (selectedMaterial.value === undefined) {
      setSelectedMaterial((prevState) => {
        return {
          ...prevState,
          errStatus: true,
        };
      });
    }
    if (selectedQuantity.value === "") {
      setSelectedQuantity((prevState) => {
        return {
          ...prevState,
          errStatus: true,
          errMsg: "You need to enter the quantity.",
        };
      });
    } else if (
      selectedSize.value &&
      selectedColor.value &&
      selectedMaterial.value &&
      /^\d+$/.test(selectedQuantity.value)
    ) {
      dispatch(
        cartActions.addItemToCart({
          id: props.data.id,
          name: props.data.name,
          link: props.data.link,
          image: props.data.image,
          price: props.data.priceSaleOf,
          size: selectedSize.value.name,
          color: selectedColor.value.name,
          material: selectedMaterial.value.name,
          quantity: selectedQuantity.value,
          totalPriceProduct: +props.data.priceSaleOf * +selectedQuantity.value,
        })
      );


      setSelectedColor({
        value: undefined,
        errStatus: false,
        errMsg: "You need to choose the product color.",
      });
      setSelectedSize({
        value: undefined,
        errStatus: false,
        errMsg: "You need to choose the product size.",
      });
      setSelectedMaterial({
        value: undefined,
        errStatus: false,
        errMsg: "You need to choose the product material.",
      });
      setSelectedQuantity({
        value: "",
        errStatus: false,
        errMsg: "",
      });

      props.onClose()
    }
  };
  return (
    <Modal onClose={props.onClose}>
      <div className="product-modal">
        <div className="product-modal-header">
          <div>
            <h2>Quick View</h2>
          </div>
          <div>
            <i className="bx bx-x" onClick={props.onClose}></i>
          </div>
        </div>
        <div className="product-modal-body">
          <div>
            <img alt="product_image" src={props.data.image} />
          </div>
          <div className="product-modal-content">
            <h3>{props.data.name}</h3>
            <div className="price">
              {+props.data.saleOf.replace(/%/gi, "") > 0 ? (
                <div>
                  <span className="">{`${displayPrice(
                    props.data.priceSaleOf,
                    "$"
                  )}`}</span>
                  <span className="price--before">{`${displayPrice(
                    props.data.price,
                    "$"
                  )}`}</span>
                </div>
              ) : (
                <div>
                  <span>{`${displayPrice(props.data.price, "$")}`}</span>
                </div>
              )}
            </div>
            <div className="desc">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="size">
              <span>
                Size:{" "}
                {selectedSize.errStatus && (
                  <span className="feedback-err">{selectedSize.errMsg}</span>
                )}
              </span>
              <div>
                {sizes.map((size) => (
                  <div
                    key={size.id}
                    className={`${
                      +selectedSize.value?.id === +size.id
                        ? "size-item active"
                        : "size-item"
                    }`}
                    onClick={chooseItemHandler.bind(
                      null,
                      "size",
                      size.id,
                      size.name
                    )}
                  >
                    <span>{size.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="color">
              <span>
                Color:{" "}
                {selectedColor.errStatus && (
                  <span className="feedback-err">{selectedColor.errMsg}</span>
                )}
              </span>
              <div>
                {colors.map((color) => (
                  <div
                    key={color.id}
                    className={`${
                      +selectedColor.value?.id === +color.id
                        ? "color-tooltip  active"
                        : "color-tooltip"
                    }`}
                    onClick={chooseItemHandler.bind(
                      null,
                      "color",
                      color.id,
                      color.name
                    )}
                  >
                    <span
                      className="color-display"
                      style={{ backgroundColor: color.color }}
                    ></span>
                    <span className="color-tooltiptext">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="material">
              <span>
                Material:{" "}
                {selectedMaterial.errStatus && (
                  <span className="feedback-err">
                    {selectedMaterial.errMsg}
                  </span>
                )}
              </span>
              <div>
                {materials.map((material) => (
                  <div
                    key={material.id}
                    className={`${
                      +selectedMaterial.value?.id === +material.id
                        ? "material-item  active"
                        : "material-item"
                    }`}
                    onClick={chooseItemHandler.bind(
                      null,
                      "material",
                      material.id,
                      material.name
                    )}
                  >
                    <span>{material.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="quantity">
              <span>
                Quantity:{" "}
                {selectedQuantity.errStatus && (
                  <span className="feedback-err">
                    {selectedQuantity.errMsg}
                  </span>
                )}
              </span>
              <div>
                <span onClick={toggleQuantityHandler.bind(null, "subtraction")}>
                  <span>-</span>
                </span>

                <input
                  type="text"
                  value={selectedQuantity.value}
                  onChange={changeQuantityHandler}
                />

                <span onClick={toggleQuantityHandler.bind(null, "summation")}>
                  <span>+</span>
                </span>
              </div>
            </div>
            <div className="button-control">
              <button onClick={addToCartHandler}>Add to cart</button>
              <button onClick={props.onClose}>Cancel</button>
            </div>
            {
              isStatus.status === true && <p className="feedback-status" style={{marginTop: "10px", color:"#28A745", fontSize: "0.9rem"}}>{isStatus.message}</p>
            }
            
          </div>
        </div>
      </div>
    </Modal>
  );
}
