import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct: [],
  },
  reducers: {
    addCart(state, action) {
      state.cartProduct.push(action.payload);
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
