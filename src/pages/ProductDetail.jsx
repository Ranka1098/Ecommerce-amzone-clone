import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

const [ pdata , setPData] = useState([])
  useEffect(() => {
    const getDetail = async () => {
      const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await resp.json();
      console.log(result);
      setPData(result);
    };

    getDetail();
  }, []);

  return <div className="w-full h-[85vh]">

    <p>{pdata.category}</p>
    <img src={pdata.image} alt="" className="w-56"/>
    <p>{pdata.description}</p>
  </div>;
};

export default ProductDetail;
