import { createSlice } from "@reduxjs/toolkit";

import {
  DUMY_PRICE_FILTER,
  DUMY_CATEGORIES,
  DUMY_COLORS,
  DUMY_MATERIALS,
  DUMY_PRODUCT,
  DUMY_SIZE,
  DUMY_TAG,
} from "../assets/fake_data/Product";

const getCategoryById = (id) => {
  return DUMY_CATEGORIES.find((item) => +item.id === +id);
};
const getColorById = (id) => {
  return DUMY_COLORS.find((item) => +item.id === +id);
};
const getMaterialById = (id) => {
  return DUMY_MATERIALS.find((item) => +item.id === +id);
};
const getSizeById = (id) => {
  return DUMY_SIZE.find((item) => +item.id === +id);
};
const getTagById = (id) => {
  return DUMY_TAG.find((item) => +item.id === +id);
};

const calPriceSale = (price, saleof) =>{
    let sale = saleof.replace(/%/gi, '');
    (123).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    if(+sale === 0){
        return price;
    }
    if(+sale !== 0){
        let priceResult = price - price * +sale / 100;
        return +(Math.round(priceResult + "e+2") + "e-2");
    }
}


const getAllProducts = () => {
  return DUMY_PRODUCT.map((item, index) => {
    const categories = item.categories.map((item) => getCategoryById(item));
    const colors = item.colors.map((item) => getColorById(item));
    const materials = item.materials.map((item) => getMaterialById(item));
    const sizes = item.sizes.map((item) => getSizeById(item));
    const tags = item.tags.map((item) => getTagById(item));

    return {
      id: item.id,
      name: item.name,
      price: item.price,
      saleOf: item.saleOf,
      priceSaleOf: calPriceSale(+item.price,item.saleOf),
      quantity: item.quantity,
      dateCreated: item.dateCreated,
      image: item.image,
      slideImg: item.slideImg,
      link: item.link,
      descript: item.descript,
      categories: item.categories,
      colors: item.colors,
      materials: item.materials,
      sizes: item.sizes,
      tags: item.tags,
    };
  });
};


const initialState = {
  products: getAllProducts(),
  categories: DUMY_CATEGORIES,
  colors: DUMY_COLORS,
  materials: DUMY_MATERIALS,
  size: DUMY_SIZE,
  tag: DUMY_TAG,
  priceFilter: DUMY_PRICE_FILTER,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    initial: (state) => {
      return state;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
