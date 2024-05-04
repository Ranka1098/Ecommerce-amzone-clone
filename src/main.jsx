import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { ProductProvider } from "./context/ProductContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ProductProvider>
      <RouterProvider router={appRouter} />
    </ProductProvider>
  </Provider>
);
