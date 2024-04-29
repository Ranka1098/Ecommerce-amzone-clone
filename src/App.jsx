import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Home />
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
]);

export default appRouter;
