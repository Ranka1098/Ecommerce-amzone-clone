import React from "react";
import SimpleSlibeBar from "../components/SimpleSlideBar";
import Products from "./Product";

const Home = () => {
  return (
    <div>
      <SimpleSlibeBar />
      <div className="-mt-72">
        <Products />
      </div>
    </div>
  );
};

export default Home;
