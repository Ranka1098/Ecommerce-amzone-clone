import React, { useContext, useEffect } from "react";
import SingleProduct from "../pages/SingleProduct";
import Shimmer from "../components/shimmer/Shimmer";
import { Link } from "react-router-dom";

import { fetchProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();

  const product = useSelector((store) => store.product.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="w-full h-full py-4 flex flex-wrap justify-center gap-4 relative z-10 bg-[#EBEDEC] ">
      {product.length === 0 && <Shimmer />}
      {product?.map((item) => (
        <div key={item.id}>
          <Link to={"/product/" + item.id}>
            <SingleProduct data={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Products;
