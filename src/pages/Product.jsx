import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {addCart } from "../store/cartSlice"

const Product = () => {
  const [product, setProduct] = useState([]);
  console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    const productData = async () => {
      try {
        const request = await fetch("https://fakestoreapi.com/products");
        const response = await request.json();
        setProduct(response);
      } catch (err) {
        console.log(err);
      }
    };

    productData();
  }, []);

  if(product.length < 0 ) return <h1>data is loading</h1>
  return (
    <div className="flex flex-wrap gap-1 relative -top-60" >
      {product.map((item) => (
        <div key={item.id} className="w-[300px] h-[300px] mx-auto  border-[1px] border-black flex flex-col items-center justify-between py-1">
           <img src={item.image} alt="" className="w-[80px] " />
           <h1>{item.title}</h1>
           <h1>{item.price}</h1>
           <button className="p-1 bg-purple-500 rounded-md" onClick={()=>dispatch(addCart(item))}>addToCart</button>
        </div>
      ))}
     
    </div>
  );
};

export default Product;
