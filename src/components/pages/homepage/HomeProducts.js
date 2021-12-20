import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../../../store/products";
import ProductCardItem from "../../Products/ProductCardItem";
import "./HomeProducts.css";

// Core modules imports are same as usual
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";


SwiperCore.use([Autoplay, Pagination, Navigation]);

const getProductsByDateCreated = (products, amout) => {
  if (products.length >= +amout) {
    const productsClone = [...products]
      .sort((first, second) => second.dateCreated - first.dateCreated)
      .slice(0, +amout);
    return productsClone;
  } else {
    return products;
  }
};
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
export default function HomeProducts() {
  const prev1 = useRef(null);
  const next1 = useRef(null);
  const prev2 = useRef(null);
  const next2 = useRef(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [productsByDate, setProductByDate] = useState([]);
  const [productsBySale, setProductBySale] = useState([]);
  useEffect(() => {
    setProductByDate((prev) => getProductsByDateCreated(products, 4));
    setProductBySale((prev) => getProductsBySale(products, 4));
  }, [products]);

  return (
    <section className="home-products">
      <div className="container-xl">
        <div className="home-products-header">
          <h3>Production For Displaying The Text, Number With Good Clarity.</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate</p>
        </div>
        <div className="home-products-body">
          <div className="home-products-slider">
            <div className="slider-title">
              <h4> Top New</h4>
            </div>
            {productsByDate.length > 0 ? (
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={{
                  nextEl: next1.current,
                  prevEl: prev1.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prev1.current;
                  swiper.params.navigation.nextEl = next1.current;
                }}
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
                {productsByDate.map((item) => (
                  <SwiperSlide key={item.id}>
                    <ProductCardItem  data={item} />
                  </SwiperSlide>
                ))}

                <div className="slider-nav-control">
                  <div ref={prev1}>
                    <i className="bx bxs-chevron-left-circle"></i>
                  </div>
                  <div ref={next1}>
                    <i className="bx bxs-chevron-right-circle"></i>
                  </div>
                </div>
              </Swiper>
            ) : (
              <div>No Product Found</div>
            )}
          </div>
          <div className="home-products-slider">
            <div className="slider-title">
              <h4>Top Sale</h4>
            </div>
            {productsBySale.length > 0 ? (
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                navigation={{
                  nextEl: next2.current,
                  prevEl: prev2.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prev2.current;
                  swiper.params.navigation.nextEl = next2.current;
                }}
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
                {productsBySale.map((item) => (
                  <SwiperSlide key={item.id}>
                    <ProductCardItem  data={item} />
                  </SwiperSlide>
                ))}
                <div className="slider-nav-control">
                  <div ref={prev2}>
                    <i className="bx bxs-chevron-left-circle"></i>
                  </div>
                  <div ref={next2}>
                    <i className="bx bxs-chevron-right-circle"></i>
                  </div>
                </div>
              </Swiper>
            ) : (
              <div>No Product Found</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
