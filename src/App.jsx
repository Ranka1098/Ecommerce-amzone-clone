import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import ProductDetail from "./pages/ProductDetail";
import NewAccount from "./pages/NewAccount";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/productdetail/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/product/",
    element: <SingleProduct />,
  },
  
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/newaccount",
    element: <NewAccount />,
  },
]);

export default appRouter;
