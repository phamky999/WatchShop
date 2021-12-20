import React, {useState} from "react";
import { Link } from "react-router-dom";
import { displayPrice } from "../../utils/displayPrice";

import "./ProductCardItem.css";
import ProductViewModal from "./ProductViewModal";

export default function ProductCardItem(props) {
  const [showProductModal, setShowProductModal] = useState(false);
  /*
    id: item.id,
      name: item.name,
      price: item.price,
      saleOf: item.saleOf,
      priceSaleOf: calPriceSale(+item.price,item.saleOf),
      quantity: item.quantity,
      dateCreated: new Date(item.dateCreated),
      image: item.image,
      slideImg: item.slideImg,
      link: item.link,
      descript: item.descript,
      categories,
      colors,
      materials,
      sizes,
      tags,
    */
  const { id, name, price, saleOf, priceSaleOf, image, link } = props.data;

  const showProductModalHandler = () =>{
    setShowProductModal(true);
  }
  const closeProductModalHandler = () => {
    setShowProductModal(false)
  }
  return (
    <React.Fragment>
      {showProductModal && <ProductViewModal onClose={closeProductModalHandler} data={props.data} />}
      <div className="product-card">
        <div className="item-img-box">
          <Link to={link}>
            <div className=" item-img-overlay"></div>
            <img alt="product_img" src={image} />
          </Link>
        </div>
        <div className="item-body-box">
          <div className="item-name">
            <Link to={link}>
              <span>{name}</span>
            </Link>
          </div>
          {+saleOf.replace(/%/gi, "") > 0 ? (
            <div className="item-price">
              <span className="item-price--sale">{`${displayPrice(
                priceSaleOf,
                "$"
              )}`}</span>
              <span>{`${displayPrice(price, "$")}`}</span>
            </div>
          ) : (
            <div className="item-price">
              <span>{`${displayPrice(price, "$")}`}</span>
            </div>
          )}
          <div className="item-btn-control">
            <button onClick={showProductModalHandler}>
              <i className="bx bxs-cart-add"></i>
            </button>
            <Link to={link}>
              <i className="bx bx-show"></i>
            </Link>
          </div>
          {+saleOf.replace(/%/gi, "") > 0 && (
            <div className="item-saleOf">
              <span>{saleOf}</span>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
