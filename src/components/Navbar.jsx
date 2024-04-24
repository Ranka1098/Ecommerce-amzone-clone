import React, { useState } from "react";
import { india, logo } from "../assets";
import { CiLocationOn } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BsMinecart } from "react-icons/bs";

const Navbar = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="w-full bg-[#131921] text-white px-8 py-2  flex items-center gap-1">
      {/* -------------------logo------------------------- */}
      <div className="headerHover">
        <img src={logo} alt="logo" className="w-24 " />
      </div>
      {/* -------------------logo------------------------- */}

      {/* ----------delivery------------------------------ */}
      <div className="headerHover p-1 ">
        {/* overlay */}
        <div>
          <CiLocationOn size={20} className=" text-white " />
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-gray-200 text-sm">Delivering to Pune-412307</p>
          <p className="font-semibold -mt-[5px]">Update Location</p>
        </div>
      </div>
      {/* ----------delivery------------------------------ */}

      {/* -------------------search-bar----------------------- */}
      <div className="h-10 flex flex-grow rounded-md relative">
        <span
          onClick={() => setShow(!show)}
          className="w-14 h-full flex items-center justify-center bg-gray-200 text-sm px-1 rounded-l-md text-gray-500 hover:text-gray-700"
        >
          All
          <span>
            <MdArrowDropDown size={20} />
          </span>
        </span>
        {show && (
          <div>
            <ul className="absolute top-11 left-0 w-56 h-80 border-[#131921] bg-gray-500  rounded-lg">
              <li>hello</li>
            </ul>
          </div>
        )}
        <input
          type="text"
          placeholder="Amazone Search Here.."
          className="h-full text-black flex-grow outline-none border-none px-2"
        />
        <span className="w-12 h-full flex items-center justify-center bg-[#FEBD69] hover:bg-[#f32847] duration-300 cursor-pointer rounded-r-md">
          <IoSearch />
        </span>
      </div>
      {/* -------------------search-bar----------------------- */}

      {/* --------------------language------------------------- */}
      <div className="flex headerHover">
        <img src={india} alt="" className="w-6 px-1" />
        <span>EN</span>
        <span className="mt-4 text-gray-200">
          <MdArrowDropDown />
        </span>
      </div>
      {/* --------------------language------------------------- */}

      {/* -----------SignIn page--------------------------------- */}
      <div className="flex flex-col headerHover">
        <span className=" text-sm -mb-2"> Hello, Sign In</span>
        <span className="font-bold flex text-sm">
          {" "}
          Account & Lists{" "}
          <span className="mt-2 text-gray-100">
            {" "}
            <MdArrowDropDown />
          </span>
        </span>
      </div>
      {/* -----------SignIn page--------------------------------- */}

      {/* -------------------Return  & order----------------------- */}
      <div className="headerHover flex flex-col">
        <span className=" text-sm -mb-2"> Returns</span>
        <span className="font-bold flex text-sm">& Orders </span>
      </div>
      {/* -------------------Return  & order----------------------- */}

      {/* ---------------cart----------------------------- */}
      <div className="headerHover flex font-bold relative">
        <span className="text-orange-600 text-lg absolute left-6 "> 0 </span>
        <span>
          <BsMinecart size={40} />
        </span>
        <span className="mt-2">Cart</span>
      </div>
      {/* ---------------cart----------------------------- */}
    </div>
  );
};

export default Navbar;
