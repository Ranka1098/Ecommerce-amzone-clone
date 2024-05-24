import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
import cartReducer from "./cartSlice";
import userReducer from "./UserSlice";
import customerReducer from "./CustomerSlice";

const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
    user: userReducer,
    customer: customerReducer,
  },
});

export default store;
