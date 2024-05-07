import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./producrSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    product: productsReducer,
    cartPoduct: cartReducer,
  },
});

export default store;
