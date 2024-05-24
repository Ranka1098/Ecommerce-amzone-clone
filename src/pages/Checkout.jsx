import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCutomer } from "../store/CustomerSlice";
import { Link } from "react-router-dom";

const Checkout = () => {
  const initialState = {
    name: "",
    state: "maharashtra",
    city: "",
    address: "",
    pincode: "",
  };
  const [formInput, setFormInput] = useState(initialState);
  let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const getName = (e) => {
    setFormInput((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };

  const getState = (e) => {
    setFormInput((prev) => {
      return {
        ...prev,
        state: e.target.value,
      };
    });
  };
  const getCity = (e) => {
    setFormInput((prev) => {
      return {
        ...prev,
        city: e.target.value,
      };
    });
  };

  const getAddress = (e) => {
    setFormInput((prev) => {
      return {
        ...prev,
        address: e.target.value,
      };
    });
  };
  const getPincode = (e) => {
    setFormInput((prev) => {
      return {
        ...prev,
        pincode: e.target.value,
      };
    });
  };

  const dispatch = useDispatch();

  const handlecustomer = () => {
    dispatch(
      addCutomer({
        cid: Math.random() * 5,
        cname: formInput.name,
        cstate: formInput.state,
        ccity: formInput.city,
        caddress: formInput.address,
        cpincode: formInput.pincode,
      })
    );
  };

  return (
    <>
      <p className="text-center text-3xl p-4 font-medium">CheckOut</p>
      <div className="w-[600px] mx-auto p-4 border-2  my-2 shadow-2xl">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-2"
        >
          <p className="text-center text-xl p-4 font-medium">Cutomer Detail</p>
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={formInput.name}
            onChange={getName}
            placeholder="enter your name"
            className="checkOutInfo"
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="enter tour enail address"
            className="checkOutInfo"
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            placeholder="enate your phone number"
            className="checkOutInfo"
          />

          <p className="text-center text-xl p-4 font-medium">
            Shipping Address
          </p>
          <label htmlFor="">state </label>
          <select
            className="border py-1 rounded"
            value={formInput.state}
            onChange={getState}
          >
            {states.map((state, i) => (
              <option key={i}>{state}</option>
            ))}
          </select>
          <label htmlFor="">City</label>
          <input
            type="text"
            value={formInput.city}
            onChange={getCity}
            placeholder="enter city name"
            className="checkOutInfo"
          />
          <label htmlFor="">Address</label>
          <input
            type="text"
            className="checkOutInfo"
            value={formInput.address}
            onChange={getAddress}
          />
          <label htmlFor="">Pincode</label>
          <input
            type="number"
            className="checkOutInfo"
            value={formInput.pincode}
            onChange={getPincode}
          />

          <Link to="/confirm">
            <button
              type="submit"
              className="px-4 py-1 rounded-lg bg-blue-400 my-3 transition ease-in-out duration-200 hover:bg-blue-600"
              onClick={handlecustomer}
            >
              Order Now
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Checkout;
