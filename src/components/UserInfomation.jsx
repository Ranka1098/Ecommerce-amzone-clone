import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import {  useNavigate } from "react-router-dom";
import { removeUser } from "../store/UserSlice";

const UserInformation = () => {
  const userInfo = useSelector((store) => store.user.userInfo);
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="w-[200px] h-[250px] rounded-xl text-black flex flex-col items-center justify-center bg-white shadow-lg">
      <img src={userInfo.uphoto} alt="" className="w-[80px] rounded-md py-2" />
      <h1 className="text-xl font-bold py-1">{userInfo.uname}</h1>
      <h4 className="text-gray-600">{userInfo.uemail}</h4>

      <button
        className=" px-2 py-1 my-3  bg-red-500 rounded-md text-white "
        onClick={handleSignOut}
      >
        LogOut
      </button>
    </div>
  );
};

export default UserInformation;
