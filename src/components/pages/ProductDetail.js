import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

import ProductCardItem from "../Products/ProductCardItem";
import { displayPrice } from "../../utils/displayPrice";
// Core modules imports are same as usual
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "./ProductDetail.css";
SwiperCore.use([Autoplay, Pagination, Navigation, FreeMode, Thumbs]);

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
const getProductsBySale = (products, amout) => {
  if (products.length >= +amout) {
    const productsClone = [...products]
      .sort((first, second) => {
        return (
          +second.saleOf.replace(/%/gi, "") - +first.saleOf.replace(/%/gi, "")
        );
      })
      .slice(0, +amout);
    return productsClone;
  } else {
    return products;
  }
};
export default function ProductDetail() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [product, setProduct] = useState({});
  const [prevProduct, setprevProduct] = useState({});
  const [nextProduct, setnextProduct] = useState({});
  const [productsRelated, setProductsRelated] = useState([]);
  let param = useParams();
  const dispatch = useDispatch();
  const dataIn = useSelector((state) => {
    return {
      products: state.products.products,
      colors: state.products.colors,
      size: state.products.size,
      materials: state.products.materials,
      categories: state.products.categories,
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
  const [isStatus, setIsStatus] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    const productData = dataIn.products.filter(
      (product) => +product.id === +param.productId
    );
    setProduct(...productData);
    console.log(dataIn.products);
    let indexOfProduct = dataIn.products.findIndex(
      (element) => +element.id === +param.productId
    );
    if (indexOfProduct !== -1) {
      if (indexOfProduct === 0) {
        const prevProductData = {
          ...dataIn.products[dataIn.products.length - 1],
        };
        setprevProduct({ ...prevProductData });
        const nextProductData = { ...dataIn.products[indexOfProduct + 1] };
        setnextProduct({ ...nextProductData });
      } else if (indexOfProduct === dataIn.products.length - 1) {
        const prevProductData = dataIn.products[indexOfProduct - 1];
        setprevProduct({ ...prevProductData });
        const nextProductData = { ...dataIn.products[0] };
        setnextProduct({ ...nextProductData });
      } else {
        const prevProductData = dataIn.products[indexOfProduct - 1];
        setprevProduct({ ...prevProductData });
        const nextProductData = { ...dataIn.products[indexOfProduct + 1] };
        setnextProduct({ ...nextProductData });
      }
    }
  }, [+param.productId]);

  useEffect(() => {
    if (Object.keys(product).length > 0) {
      setProductsRelated((prev) => getProductsBySale(dataIn.products, 4));
    }
  }, [Object.keys(product).length]);

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
          id: product.id,
          name: product.name,
          link: product.link,
          image: product.image,
          price: product.priceSaleOf,
          size: selectedSize.value.name,
          color: selectedColor.value.name,
          material: selectedMaterial.value.name,
          quantity: selectedQuantity.value,
          totalPriceProduct: +product.priceSaleOf * +selectedQuantity.value,
        })
      );

      const fakeShowMsg = (async () => {
        const result1 = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              status: true,
              message: "Added to cart successfully",
            });
          }, 1000);
        });
        setIsStatus({ ...result1 });
        const result2 = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              status: false,
              message: "",
            });
          }, 2000);
        });
        setIsStatus({ ...result2 });
      })();

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
    }
  };

  let productDetailContent = <p>No product match</p>;
  if (Object.keys(product).length > 0) {
    const colors = product.colors.flatMap((item) =>
      dataIn.colors.filter((el) => +el.id === +item)
    );
    const sizes = product.sizes.flatMap((item) =>
      dataIn.size.filter((el) => +el.id === +item)
    );
    const categories = product.categories.flatMap((item) =>
      dataIn.categories.filter((el) => +el.id === +item)
    );
    const materials = product.materials.flatMap((item) =>
      dataIn.materials.filter((el) => +el.id === +item)
    );
    productDetailContent = (
      <div className="container-xl">
        <section className="product-info">
          <div className="row">
            <div className="col-12 col-lg-6">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2"
              >
                {product.slideImg.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img alt="slide_img" src={img} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper"
              >
                {product.slideImg.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img alt="slide_img" src={img} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="product-info-content">
                <div className="product-info-header">
                  <div className="info-header-title">
                    <h3>{product.name}</h3>
                  </div>
                  <div className="info-header-menu">
                    <div>
                      <Link to={prevProduct.link}>
                        <i className="bx bx-chevron-left"></i>
                        <span>Prev</span>
                      </Link>
                    </div>
                    <div>
                      <Link to={nextProduct.link}>
                        <span>next</span>
                        <i className="bx bx-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product-info-body">
                  <div>
                    {+product.saleOf.replace(/%/gi, "") > 0 ? (
                      <div className="product-info-price">
                        <span className="">{`${displayPrice(
                          product.priceSaleOf,
                          "$"
                        )}`}</span>
                        <span className="price--before">{`${displayPrice(
                          product.price,
                          "$"
                        )}`}</span>
                      </div>
                    ) : (
                      <div className="product-info-price">
                        <span>{`${displayPrice(product.price, "$")}`}</span>
                      </div>
                    )}
                  </div>
                  <div className="product-info-status">
                    <span>Availability:</span>
                    <span>
                      <i className="bx bx-check"></i>
                      In Stock
                    </span>
                  </div>
                  <div className="product-info-desc">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                  <div className="product-info-size">
                    <span>
                      Size:{" "}
                      {selectedSize.errStatus && (
                        <span className="feedback-err">
                          {selectedSize.errMsg}
                        </span>
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
                  <div className="product-info-color">
                    <span>
                      Color:{" "}
                      {selectedColor.errStatus && (
                        <span className="feedback-err">
                          {selectedColor.errMsg}
                        </span>
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
                          <span className="color-tooltiptext">
                            {color.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="product-info-material">
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
                  <div className="product-info-quantity">
                    <span>
                      Quantity:{" "}
                      
                    </span>
                    <div>
                      <span
                        onClick={toggleQuantityHandler.bind(
                          null,
                          "subtraction"
                        )}
                      >
                        <span>-</span>
                      </span>

                      <input
                        type="text"
                        value={selectedQuantity.value}
                        onChange={changeQuantityHandler}
                      />

                      <span
                        onClick={toggleQuantityHandler.bind(null, "summation")}
                      >
                        <span>+</span>
                      </span>
                    </div>
                    
                  </div>
                  <p style={{marginBottom: "20px"}}>
                  {selectedQuantity.errStatus && (
                        <span className="feedback-err">
                          {selectedQuantity.errMsg}
                        </span>
                      )}
                  </p>
                  <div className="product-info-btn">
                    <button onClick={addToCartHandler}>add to cart</button>
                    <button>buy it now</button>
                  </div>
                  {isStatus.status === true && (
                    <p
                      className="feedback-status"
                      style={{
                        marginTop: "10px",
                        color: "#28A745",
                        fontSize: "0.9rem",
                      }}
                    >
                      {isStatus.message}
                    </p>
                  )}
                </div>
                <div className="product-info-bottom">
                  <div className="product-info-category">
                    <div>
                      <span>Category:</span>
                    </div>
                    <div>
                      {categories.map((item) => (
                        <span key={item.id}>{item.name}</span>
                      ))}
                    </div>
                  </div>
                  <div className="product-info-social">
                    <div>
                      <span>Share:</span>
                    </div>
                    <ul>
                      <li>
                        <i className="bx bxl-facebook"></i>
                      </li>
                      <li>
                        <i className="bx bxl-twitter"></i>
                      </li>
                      <li>
                        <i className="bx bxl-google-plus"></i>
                      </li>
                      <li>
                        <i className="bx bxl-pinterest-alt"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="product-info-payment">
                    <ul>
                      {DUMY_FOOTER_PAYMENT_ICON.map((item, index) => {
                        return (
                          <li key={index}>
                            <img alt={item.title} src={item.image} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-more-descript">
          <div className="row">
            <div className="col-12  col-lg-8">
              <div
                className="more-desc-content"
                dangerouslySetInnerHTML={{ __html: product.descript }}
              ></div>
            </div>
            <div className="col-12  col-lg-4">
              <div className="more-desc-img">
                <img alt="more-desc-img" src={product.image} />
              </div>
            </div>
          </div>
        </section>
        <section className="product-related">
          <div>
            <h3> Related Products </h3>
          </div>
          <div className="product-related-main">
            {productsRelated.length > 0 && (
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                breakpoints={{
                  425: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                    loop: false,
                    autoplay: false,
                  },
                }}
              >
                {productsRelated.map((item) => (
                  <SwiperSlide key={item.id}>
                    <ProductCardItem data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="detail-page-title">
        <h2>Product Details</h2>
      </div>
      {productDetailContent}
    </div>
  );
}
