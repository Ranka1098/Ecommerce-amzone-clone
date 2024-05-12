import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, ScrollRestoration, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import ProductDetail from "./pages/ProductDetail";
import NewAccount from "./pages/NewAccount";
import Order from "./pages/Order";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
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
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/order",
        element:<Order />

      }
    ],
  },
  {
    path: "/product/",
    element: <SingleProduct />,
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
