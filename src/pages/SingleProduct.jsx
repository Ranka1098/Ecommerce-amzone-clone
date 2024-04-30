import React from "react";
import { useDispatch } from "react-redux";
// import { addCart } from "../store/cartSlice";

const SingleProduct = (data) => {
  const { image, title, desc, price } = data;
  console.log(data);
  return (
    <div className="h-[250px] w-[300px]">
      <img src={image} alt="" className=" " />
      <p>{title}</p>
      <p>{price}</p>
      <button className="">addToCart</button>
    </div>
  );
};

export default SingleProduct;
