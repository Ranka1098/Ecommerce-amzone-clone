import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "product",
  initialState: {
  cart:[]
},
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeCart: (state) => {
      return (state = state.filter((item) => item.id !== action.payload));
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
