import { configureStore } from "@reduxjs/toolkit";

import products from "./products";
import cart from "./cart";

const store = configureStore({
    reducer: {
        products: products,
        cart: cart.reducer,
    }
});

export default store;
