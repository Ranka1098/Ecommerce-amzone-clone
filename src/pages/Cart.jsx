import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const product = useSelector((store) => store?.cart?.cartProduct);
  console.log(product);

  return (
    <div>
      {product.map((item) => (
        <div key={item.id}>
          <p> {item.title}</p>
          <img src={item.image} alt="" className="w-20" />
        </div>
      ))}
    </div>
  );
};

export default Cart;
