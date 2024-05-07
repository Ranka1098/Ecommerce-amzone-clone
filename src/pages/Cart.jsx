import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
const product = useSelector((store)=> store?.cart?.cartProduct);
console.log(product);

  return (
    <div>
     
    </div>
  );
};

export default Cart;
