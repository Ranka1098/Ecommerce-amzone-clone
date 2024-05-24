import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customerInfo: [],
  },
  reducers: {
    addCutomer(state, action) {
      state.customerInfo = action.payload;
    },
    removeCustomer() {
      state.customerInfo = [];
    },
  },
});

export const { addCutomer, removeCustomer } = customerSlice.actions;
export default customerSlice.reducer;
