import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ data }) => {
  const { image, title, price, description, category } = data;
  return (
    <div className="relative w-[300px] h-[350px] bg-white flex flex-col gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 px-2 py-4 justify-between items-center border shadow-xl rounded-md ">
      <p className="absolute top-0 right-1 text-xs mb-2">{category}</p>
      <img
        src={image}
        alt=""
        className="w-[150px] h-[200] object-contain overflow-hidden bg-transparent"
      />
      <div className="flex justify-between gap-28 px-2">
        <h1 className="font-bold">{title.substr(0, 10)}</h1>
        <h4>$ {price}</h4>
      </div>
      <h5 className="px-3 text-sm">{description.substr(0, 100)}</h5>
      <div className="w-full">
        <Link to={"/product/" + data.id} className="w-full">
          <button className="w-full py-1 px-2 text-center bg-yellow-400 font-bold text-md rounded ">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
