import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/cartSlice";

const Confirm = () => {
  const customer = useSelector((store) => store.customer.customerInfo);
  console.log(customer);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleConfirm = () => {
    dispatch(clearCart());
    navigate("/order");
   
  };
  const handleCancle = () => {
    navigate("/checkout");
  };
  return (
    <div className="w-full h-[85vh]  p-4 bg-black/20 flex items-center justify-center">
      <div className="w-[500px] bg-white h-[300px] rounded p-4 flex flex-col items-center  ">
        <p className="text-xl font-semibold py-2"> Hi! {customer.cname}</p>
        <p className="py-2 font-medium">
          The order is to be deliverd on the following address ?{" "}
        </p>
        <p className="py-1 font-medium">Address : {customer.caddress}</p>
        <p className="py-1 font-medium">state :{customer.cstate}</p>
        <p className="py-1 font-medium">city :{customer.ccity}</p>
        <p className="py-1 font-medium">pincode :{customer.cpincode}</p>
        <div className="my-4">
          <button
            onClick={handleConfirm}
            className="px-4 py-1 bg-blue-500 transition ease-in-out duration-500 rounded-md  mr-3 hover:bg-blue-600"
          >
            confirm
          </button>
          <button
            onClick={handleCancle}
            className="px-4 py-1 bg-blue-500 transition ease-in-out duration-500 rounded-md hover:bg-blue-600"
          >
            cancle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
