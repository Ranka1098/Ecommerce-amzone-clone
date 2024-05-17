import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
import cartReducer from "./cartSlice";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
