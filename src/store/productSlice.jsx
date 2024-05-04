import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStauts(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStauts } = productSlice.actions;
export default productSlice.reducer;

// Thunk middleware

export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStauts(STATUSES.LOADING));
    try {
      const request = await fetch("https://fakestoreapi.com/products");
      const response = await request.json();
      dispatch(setProducts(response));
      dispatch(setStauts(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStauts(STATUSES.ERROR));
    }
  };
}
