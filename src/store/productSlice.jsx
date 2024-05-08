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
    filterData: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setFilterProduct(state, action) {
      state.filterData = action.payload;
    },
    setStatuses(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatuses , setFilterProduct } = productSlice.actions;
export default productSlice.reducer;

// thunk middleware

export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatuses(STATUSES.LOADING));
    try {
      const resp = await fetch("https://fakestoreapi.com/products");
      const result = await resp.json();
      dispatch(setProducts(result));
      // dispatch(setFilterProduct(result));
      dispatch(setStatuses(STATUSES.IDLE));
    } catch (err) {
      console.log("unable to fetch", err);
      dispatch(setStatuses(STATUSES.ERROR));
    }
  };
}
