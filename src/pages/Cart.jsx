import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { removeCart } from "../store/cartSlice";
import { incrementQuantity } from "../store/cartSlice";
import { decrementQuantity } from "../store/cartSlice";
import { emptyCart } from "../assets/index";
import { Link } from "react-router-dom";
const Cart = () => {
  const product = useSelector((store) => store?.cart?.cartProduct);
  console.log(product);
  const [totalprice, seTotalPrice] = useState("");

  useEffect(() => {
    let total = 0;
    if (product.length > 0) {
      product.forEach((item) => {
        total += item.price * item.quantity;
        seTotalPrice(total.toFixed(2));
      });
    }
  }, [product]);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    seTotalPrice(0);
  };

  return (
    <div>
      {product.length > 0 ? (
        <div className="w-full h-[84vh]  bg-gray-200 p-4 flex  gap-4">
          {/* product detail page */}
          <div className="w-[75%] bg-white p-4 ">
            <div className="flex justify-between  border-b-2 py-2  border-b-black">
              <p className="font-semibold text-2xl ">Shopping Cart</p>
              <p className="font-semibold text-2xl ">Subtotal</p>
            </div>

            <div className="p-4    ">
              {product.map((item) => (
                <div
                  key={item.id}
                  className="  flex justify-between items-center gap-2 border-b-2 border-b-black "
                >
                  <div className="py-1 w-[15rem] ">
                    <img src={item.image} alt="" />
                  </div>

                  <div className="flex flex-col gap-1 p-2">
                    <p className="font-semibold text-xl"> {item.title}</p>
                    <p className="w-[85%]">{item.description.substr(0, 200)}</p>
                    <p className="font-bold py-1 px-2">price : {item.price}</p>

                    <div className=" w-[140px] p-1 flex items-center justify-between gap-2 bg-gray-400 rounded-md">
                      <p>Qty:</p>
                      <button
                        className="p-1 text-2xl font-bold bg-gray-200 "
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        -
                      </button>
                      <p className="text-2xl text-black">{item.quantity} </p>
                      <button
                        className="py-1 text-2xl font-bold bg-gray-200  "
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>

                    <div>
                      <button
                        className="bg-red-500 my-3 p-2 text-black rounded-md"
                        onClick={() => {
                          dispatch(removeCart(item.id));
                        }}
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>

                  <button className="flex  items-center gont-bold text-2xl">
                    <span className="px-2">$</span>{" "}
                    {(item.price * item.quantity).toFixed(2)}
                  </button>
                </div>
              ))}
            </div>

            <button
              className="px-6 mx-3 py-2 font-bold bg-red-500 rounded-md text-xl text-right  "
              onClick={handleClearCart}
            >
              {" "}
              Clear cart
            </button>
          </div>

          {/* product detail page */}

          <div className="w-[20%] h-[15rem] bg-white p-4 ">
            <p className="text-md">
              Your order qualifies for free Shipping Choses this option at the
              checkout. see details...
            </p>
            <p className="text-xl py-2 font-bold text-center">
              Total: <span>${totalprice}</span>
            </p>
           <Link to="/order">
           <button className="w-full p-2 bg-yellow-500 border-2 border-black rounded-md font-semibold ">
              Proceed to Pay
            </button>
           </Link>
          </div>
        </div>
      ) : (
        <div className="w-[100%] h-[84vh] bg-gray-200 flex items-center justify-center">
          <img src={emptyCart} alt="" />
          <div className="w-[20rem]  p-3  bg-white flex flex-col items-center justify-center gap-2">
            <p className="font-black text-xl text-center">Your Cart feels lonely.</p>
            <p className=" py-1 px-2 text-sm">
              Your Shooping cart lives to serve.Give it Pupose fill it with
              books,electronics,videos,etc. and make it happy
            </p>
            <Link to="/">
              <button className="bg-[#FFCA44] px-6 py-2 rounded-md text-xl font-bold">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
