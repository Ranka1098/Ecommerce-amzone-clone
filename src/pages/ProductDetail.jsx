import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCart } from "../store/cartSlice";
import ProductShimmer from "../components/shimmer/ProductShimmer";

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [pdata, setPData] = useState();
  useEffect(() => {
    const getDetail = async () => {
      const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await resp.json();
      setPData(result);
    };

    getDetail();
  }, [id]);
  console.log(pdata);
  const handleAddtoCart = () => {
    if (pdata) {
      dispatch(
        addCart({
          id: pdata.id,
          image:pdata.image,
          title: pdata.title,
          category: pdata.category,
          description: pdata.description,
          price: pdata.price,
          quantity: 1,
        })
      );
    }
  };

  return !pdata ? (
    <ProductShimmer />
  ) : (
    <div className="w-full py-10 flex items-center justify-center  bg-gray-100 ">
      <div className="w-full h-[80%] flex items-center justify-center mt-10 ">
        <img
          src={pdata?.image}
          alt=""
          className="w-[350px] h-[350px] object-contain  bg-gray-100 "
        />
      </div>
      <div className=" mt-20 ml-24">
        <p className="font-bold text-2xl mb-4">{pdata?.title}</p>
        <p className="text-sm mb-2">{pdata?.category}</p>
        <p className="text-xl mb-2 w-[70%]">{pdata?.description}</p>
        <p className="text-xl mb-2">$ {pdata?.price}</p>

        <button
          onClick={handleAddtoCart}
          className="p-3 border border-gray-300 bg-blue-500 rounded-md font-semibold mr-4"
        >
          Add To Cart
        </button>
        
       <Link to="/">
       <button className="p-3 border border-gray-300 bg-blue-500 rounded-md font-semibold">back</button>
       </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
