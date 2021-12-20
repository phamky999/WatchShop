import React from "react";
import { createSlice } from "@reduxjs/toolkit";

/*
id: props.data.id,
        name: props.data.name,
        price: props.data.priceSaleOf,
        size: selectedSize.value.name,
        color: selectedColor.value.name,
        material: selectedMaterial.value.name,
        quantity: selectedQuantity.value,
        totalPrice
*/

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalCartPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) =>
          +item.id === +newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color &&
          item.material === newItem.material
      );
      if (!existingItem) {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          link: newItem.link,
          price: newItem.price,
          size: newItem.size,
          color: newItem.color,
          material: newItem.material,
          quantity: +newItem.quantity,
          totalPriceProduct: newItem.totalPriceProduct,
        });
      } else {
        existingItem.quantity = +existingItem.quantity + +newItem.quantity;
        existingItem.totalPriceProduct += +newItem.totalPriceProduct;
      }
      state.totalQuantity += +newItem.quantity;
      state.totalCartPrice += +newItem.totalPriceProduct;
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.size !== action.payload.size ||
          item.color !== action.payload.color ||
          item.material !== action.payload.material
      );
      state.totalQuantity -= +action.payload.quantity;
      state.totalCartPrice -= +action.payload.totalPriceProduct;
    },
    updateQuantity(state, action) {
      console.log(action.payload);
      const itemUpdate = state.products.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color &&
          item.material === action.payload.material
      );
      if (itemUpdate !== undefined) {
        state.products = state.products.filter(
          (item) =>
            item.id !== itemUpdate.id ||
            item.size !== itemUpdate.size ||
            item.color !== itemUpdate.color ||
            item.material !== itemUpdate.material
        );
        if (action.payload?.type === "subtraction") {
          state.products = [
            ...state.products,
            {
              id: itemUpdate.id,
              name: itemUpdate.name,
              image: itemUpdate.image,
              link: itemUpdate.link,
              price: itemUpdate.price,
              size: itemUpdate.size,
              color: itemUpdate.color,
              material: itemUpdate.material,
              quantity: +itemUpdate.quantity - 1,
              totalPriceProduct:
                itemUpdate.totalPriceProduct - itemUpdate.price,
            },
          ];
          state.totalQuantity -= 1;
          state.totalCartPrice -= +itemUpdate.price;
        }
        //summation
        if (action.payload?.type === "summation") {
          
          state.products = [
            ...state.products,
            {
              id: itemUpdate.id,
              name: itemUpdate.name,
              image: itemUpdate.image,
              link: itemUpdate.link,
              price: itemUpdate.price,
              size: itemUpdate.size,
              color: itemUpdate.color,
              material: itemUpdate.material,
              quantity: +itemUpdate.quantity + 1,
              totalPriceProduct:
                itemUpdate.totalPriceProduct + itemUpdate.price,
            },
          ];
          state.totalQuantity += 1;
          state.totalCartPrice += +itemUpdate.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
