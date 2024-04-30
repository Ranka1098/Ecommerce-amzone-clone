import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

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
    ],
  },
  {
  path:"/cart",
  element:<Cart />
  },
  {
  path:"/login",
  element:<Login />
  }
]);

export default appRouter;
