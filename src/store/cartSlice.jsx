import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct: [],
  },
  reducers: {
    addCart(state, action) {
      const productToAdd = action.payload;
      const existingProductIndex = state.cartProduct.findIndex(
        (product) => product.id === productToAdd.id
      );
      if (existingProductIndex !== -1) {
        state.cartProduct[existingProductIndex].quantity +=
          productToAdd.quantity;
      } else {
        state.cartProduct.push(productToAdd);
      }
    },
    removeCart(state, action) {
      state.cartProduct = state.cartProduct.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementQuantity(state, action) {
      const item = state.cartProduct.find(
        (item) => item.id === action.payload
      );
      item.quantity++;
    },
    decrementQuantity(state, action) {
      const item = state.cartProduct.find(
        (item) => item.id === action.payload
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    clearCart(state) {
      state.cartProduct = [];
    },
  },
});

export const {
  addCart,
  clearCart,
  removeCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
