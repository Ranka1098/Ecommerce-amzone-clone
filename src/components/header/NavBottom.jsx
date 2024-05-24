import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";

const NavBottom = () => {
  const [sidebar, setSideBar] = useState(false);

  // prevent to scroll lock
  sidebar
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  // prevent to scroll lock

  const userInfo = useSelector((store) => store.user.userInfo);
  console.log(userInfo);

  // --------------------overlay drawer----------------------
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSideBar(false);
      }
    });
  }, []);
  // --------------------overlay drawer----------------------
  return (
    <div className="w-full   px-4 bg-[#37475A]  text-white flex items-center gap-1 font-semibold cursor-pointer ">
      {/* ----------overlay----------------*/}
      {sidebar ? (
        <div
          className="w-full h-screen fixed bg-black/45 top-0 left-0 z-20 duration-300"
          ref={ref}
        ></div>
      ) : (
        <div
          className="w-full h-screen fixed bg-black/45 top-0 left-[-100%] z-20 "
          ref={ref}
        ></div>
      )}
      {/* ----------overlay---------------- */}
      {/* --------sidebar div--------------- */}
      {/* --close button sidebar--- */}
      {sidebar && (
        <div className="w-10 h-10 bg-tranparent flex justify-center items-center absolute  top-2 left-[25rem] z-30 duration-500">
          <p className="text-4xl " onClick={() => setSideBar(!sidebar)}>
            X
          </p>
        </div>
      )}
      {/* --close button sidebar--- */}

      {sidebar && (
        <div className="w-[25rem] h-[100vh] bg-white absolute top-0 left-0 text-black z-30 overflow-y-scroll">
          <p className="bg-[#232F3E] text-xl text-white px-6 py-4 flex items-center gap-2">
            <span>
              {userInfo ? (
                <img src={userInfo.uphoto} className="w-10 rounded-md" />
              ) : (
                <FaCircleUser size={30} />
              )}
            </span>
            Hello
            {userInfo ? <p>{userInfo.uname}</p> : ""}
          </p>
          <div className="p-4 border-b border-b-black ">
            <p className="font-bold text-lg px-6 py-4">Trading</p>
            <p className="text-md text-gray-500 px-6 py-2">Best Seller</p>
            <p className="text-md text-gray-500 px-6 py-2">New Release</p>
            <p className="text-md text-gray-500 px-6 py-2">Mover and Shakers</p>
          </div>
          {/* ----------------------------------------------- */}
          <div className="p-4 border-b border-b-black ">
            <p className="font-bold text-lg px-6 py-4">
              Digital Content and Devices
            </p>
            <p className="text-md text-gray-500 px-6 py-2">Alexa & Echo</p>
            <p className="text-md text-gray-500 px-6 py-2">Fire TV</p>
            <p className="text-md text-gray-500 px-6 py-2">Mover and Shakers</p>
          </div>
          {/* ------------------------------------------------ */}
          {/* ----------------------------------------------- */}
          <div className="p-4 border-b border-b-black ">
            <p className="font-bold text-lg px-6 py-4">
              Digital Content and Devices
            </p>
            <p className="text-md text-gray-500 px-6 py-2">Alexa & Echo</p>
            <p className="text-md text-gray-500 px-6 py-2">Fire TV</p>
            <p className="text-md text-gray-500 px-6 py-2">Mover and Shakers</p>
          </div>
          {/* ------------------------------------------------ */}
          {/* ----------------------------------------------- */}
          <div className="p-4 border-b border-b-black ">
            <p className="font-bold text-lg px-6 py-4">
              Digital Content and Devices
            </p>
            <p className="text-md text-gray-500 px-6 py-2">Alexa & Echo</p>
            <p className="text-md text-gray-500 px-6 py-2">Fire TV</p>
            <p className="text-md text-gray-500 px-6 py-2">Mover and Shakers</p>
          </div>
          {/* ------------------------------------------------ */}
          {/* ----------------------------------------------- */}
          <div className="p-4 border-b border-b-black ">
            <p className="font-bold text-lg px-6 py-4">
              Digital Content and Devices
            </p>
            <p className="text-md text-gray-500 px-6 py-2">Alexa & Echo</p>
            <p className="text-md text-gray-500 px-6 py-2">Fire TV</p>
            <p className="text-md text-gray-500 px-6 py-2">Mover and Shakers</p>
          </div>
          {/* ------------------------------------------------ */}
          {/* ----------------------------------------------- */}
          <div className="p-4 border-b border-b-black ">
            <p className="font-bold text-lg px-6 py-4">
              Digital Content and Devices
            </p>
            <p className="text-md text-gray-500 px-6 py-2">Alexa & Echo</p>
            <p className="text-md text-gray-500 px-6 py-2">Fire TV</p>
            <p className="text-md text-gray-500 px-6 py-2">Mover and Shakers</p>
          </div>
          {/* ------------------------------------------------ */}
          {/* ----------------------------------------------- */}
          <div className="p-4 border-b border-b-black ">
            <p className="font-bold text-lg px-6 py-4">
              Digital Content and Devices
            </p>
            <p className="text-md text-gray-500 px-6 py-2">Alexa & Echo</p>
            <p className="text-md text-gray-500 px-6 py-2">Fire TV</p>
            <p className="text-md text-gray-500 px-6 py-2">Mover and Shakers</p>
          </div>
          {/* ------------------------------------------------ */}
          {/* ----------------------------------------------- */}
          <div className="p-4 border-b border-b-black ">
            <p className="font-bold text-lg px-6 py-4">
              Digital Content and Devices
            </p>
            <p className="text-md text-gray-500 px-6 py-2">Alexa & Echo</p>
            <p className="text-md text-gray-500 px-6 py-2">Fire TV</p>
            <p className="text-md text-gray-500 px-6 py-2">Mover and Shakers</p>
          </div>
          {/* ------------------------------------------------ */}
        </div>
      )}

      {/* --------sidebar div--------------- */}
      <p
        className="flex items-center gap-1 borderHover"
        onClick={() => setSideBar(!sidebar)}
      >
        <span>
          <IoMenu size={30} />
        </span>
        All
      </p>
      <p className="borderHover">Fresh</p>
      <p className="borderHover">Amazon miniTV</p>
      <p className="borderHover">Sell</p>
      <p className="borderHover">Best Sellers</p>
      <p className="borderHover">Mobiles</p>
      <p className="borderHover">Today's Deals</p>
      <p className="borderHover">Prime</p>
      <p className="borderHover">Customer Service</p>
      <p className="borderHover">Electronics</p>
      <p className="borderHover">New Release</p>
    </div>
  );
};

export default NavBottom;
