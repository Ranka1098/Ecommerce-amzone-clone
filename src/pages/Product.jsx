import React, { useContext } from "react";
import SingleProduct from "../pages/SingleProduct";
import { ProductContext } from "../context/ProductContext";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";

const Products = () => {
  const productData = useContext(ProductContext);
  
  console.log(productData)

  return  productData.length ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-center gap-6   relative z-10  ">
      {productData?.product?.map((item) => (
        <Link to={"/productdetail/" + item.id} key={item.id}>
          <SingleProduct data={item} />
        </Link>
      ))}
    </div>
  );
};
export default Products;
