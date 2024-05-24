import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart } from "../assets";

const Order = () => {
  const customer = useSelector((store) => store.customer.customerInfo);
  console.log(customer);
  const product = useSelector((store) => store?.cart?.cartProduct);
  console.log(product);

  return (
    <div>
      {customer.length === 0 ? (
        <div className="w-full h-[85vh]  p-4 bg-black/20 flex items-center justify-center">
          <img src={emptyCart} alt="" />
          <div className="w-[20rem]  p-3  bg-white flex flex-col items-center justify-center gap-2">
            <p className=" py-1 px-2 text-2xl font-semibold">No Orders</p>
            <Link to="/">
              <button className="bg-[#FFCA44] px-6 py-2 rounded-md text-xl font-bold">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center p-4 w-[1000px] ">
          <div className=" px-4 py-2 ">
            <p className="text-lg font-medium">
              Delivering to : {customer.cname}
            </p>
            <h1>order Id:<span className="text-xl">{customer.cid}</span></h1>
            <p>Address: {customer.caddress}</p>
            <p>city: {customer.ccity}</p>
            <p>pincode: {customer.cpincode}</p>
          </div>
          <div className="">
            {product.map((item) => (
              <div
                key={item.id}
                className="  flex justify-between items-center gap-2 "
              >
                <div className="py-1 w-[5rem] ">
                  <img src={item.image} alt="" />
                </div>

                <div className="flex flex-col gap-1 p-2">
                  <p className="font-semibold text-xl"> {item.title}</p>
                  <p className="font-bold py-1 px-2">price : {item.price}</p>
                  <p className="font-bold py-1 px-2">Qunatity:{item.quantity} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
