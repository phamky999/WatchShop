import React, { useState, useEffect , useRef} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../../../store/products";
import { displayPrice } from "../../../utils/displayPrice";

import "./SingleProduct.css";
// Core modules imports are same as usual
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import ItemColor from "../../UI/ItemColor";
import ProductViewModal from "../../Products/ProductViewModal";

SwiperCore.use([Autoplay, Pagination, Navigation]);
const img_banner =
  require("../../../assets/images/pages/960x600_b03b6bed-a871-406b-aa4e-09756a814208.jpg").default;
const img_1 = require("../../../assets/images/products/product_1.jpg").default;

const getProductsByPrice = (products, amout) => {
  if (products.length >= +amout) {
    const productsClone = [...products]
      .sort((first, second) => second.price - first.price)
      .slice(0, +amout);
    return productsClone;
  } else {
    return products;
  }
};
export default function SingleProduct() {
  const {products,colors} = useSelector((state) => state.products);
  const [productsByPrice, setProductByPrice] = useState([]);
  const prev1 = useRef(null);
  const next1 = useRef(null);
  useEffect(() => {
    setProductByPrice((prev) => getProductsByPrice(products, 4));
  }, [products]);
  return (
    <section className="home-single">
      <div className="container-xl">
        <div className="home-single-content">
          <div className="home-single-banner">
            <img alt="img_banner" src={img_banner} />
          </div>
          <div className="home-single-group-item">
            {productsByPrice.length === 0 ? (
              <p>No product Found</p>
            ) : (
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
                <React.Fragment>
                  {productsByPrice.map((item) =>{
                    
                    return  (
                    <SwiperSlide key={item.id}>
                      <SingleProductItem  data={item} />
                    </SwiperSlide>
                  )
                  })}
                </React.Fragment>

                <div className="slider-nav-control">
                  <div ref={prev1}>
                    <i className="bx bxs-chevron-left-circle"></i>
                  </div>
                  <div ref={next1}>
                    <i className="bx bxs-chevron-right-circle"></i>
                  </div>
                </div>
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleProductItem = (props) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const {colors} = useSelector((state) => state.products);
  const { id, name, price, saleOf, priceSaleOf, image, link } =
    props.data;
    
      let colorsResult = props.data.colors.map( item => {
                  return colors.find(color => +color.id === +item)
                })
    
    const showProductModalHandler = () =>{
      setIsShowModal(true);
    }
    const closeProductModalHandler = () => {
      setIsShowModal(false)
    }
  return (
    <React.Fragment>
    {isShowModal && <ProductViewModal onClose={closeProductModalHandler} data={props.data} />}
    <div className="single-product-item">
      <div className="product_img">
        <Link to={link}>
          <img alt="product_img" src={image} />
        </Link>
      </div>
      <div className="product-item-content">
        <h4>
          <Link to={link}>{name}</Link>
        </h4>
        {+saleOf.replace(/%/gi, "") > 0 ? (
          <div className="single-product-price">
            <span className="price--sale">{`${displayPrice(
              priceSaleOf,
              "$"
            )}`}</span>
            <span>{`${displayPrice(price, "$")}`}</span>
          </div>
        ) : (
          <div className="single-product-price">
            <span>{`${displayPrice(price, "$")}`}</span>
          </div>
        )}
        <ul className="color-list">
        
          {colorsResult.length === 0
            ? " "
            : colorsResult.length > 4
            ? colorsResult.slice(0, 4).map((item, index) => {
                return (
                  <ItemColor key={item.id} group="colors"
                  id={item.id}
                  color={item.color}
                  name={item.name} />
                );
              })
            : colorsResult.map((item, index) => {
                return (
                  <ItemColor key={item.id} group="colors"
                  id={item.id}
                  color={item.color}
                  name={item.name} />
                );
              })}
        </ul>
        <div>
          <button onClick={showProductModalHandler}>Add to cart</button>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};
