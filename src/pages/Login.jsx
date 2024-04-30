import React from "react";
import { logo } from "../assets/index";
import { FaCaretRight } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="flex flex-col">
    <div className="max-w-5xl mx-auto border-b pb-5">
      {/* -------image---------------- */}
      <div className="w-[400px]  mx-auto flex items-center justify-center">
        <img src={logo} alt="" className="text-black bg-gray-500" />
      </div>
      {/* sign in */}
      <div className="w-[400px] p-4 mx-auto flex items-center justify-center  border rounded-md my-2">
        <form action="">
          <h1 className="text-3xl px-3  py-3 font-semibold">Sign in</h1>
          <div className="flex flex-col  px-3  py-3 text-black ">
            <label className="text-sm font-bold py-1 ">
              {" "}
              Email or Mobile Phone Number{" "}
            </label>
            <input
              type="text"
              placeholder="Email Here..."
              className="flex-grow py-1 px-2 mb-4 border border-black rounded-md"
            />
            <button className="w-full py-1 bg-[#FFD814] rounded-md">
              Continue
            </button>
          </div>
          {/* ------------------------------------ */}

          <h4 className="text-sm p-3 font-semibold">
            By continuing, you agree to Amazon's
            <span className="text-blue-400 loginLinks"> Conditions of Use </span> and{" "}
            <span className="text-blue-400 loginLinks">Privacy Notice.</span>
          </h4>
          <div className="flex  items-center border-b-2 mb-3 p-3">
            <FaCaretRight /> <span className="text-blue-400 text-sm loginLinks">Need Help ?</span>
          </div>

          {/* ------------------------------------ */}
          <p className="px-3 text-sm font-semibold">Buying for work?</p>
          <a href="" className="px-3  text-blue-400 loginLinks">Shop on Amazon Business</a>
        </form>
      </div>

      {/* ----------------------------------------------  */}
      <div className="w-[400px] p-4 mx-auto text-black flex items-center justify-center ">
        <span className="h-[1px] w-[30%] bg-[#D5D9D9] inline-flex"></span>
        <span className="w-[40%] text-center">New to Amazon?</span>
        <span className="h-[1px] w-[30%] bg-[#D5D9D9] inline-flex"></span>
      </div>

      <div className="w-[400px] px-3 mx-auto text-black flex items-center justify-center ">
        <button className="py-1 w-full border border-[#D5D9D9] rounded-md">Create Your Amazon Account</button>
      </div>

      
    </div>
    <div className="w-[500px]  mx-auto flex flex-col items-center justify-center my-1 bg-gradient-to-t from-bg-[">
    {/* links */}
    <div className="flex  items-center gap-10 mt-6 mb-2 ">
    <a href="" className="text-xs text-blue-400 loginLinks">Condtion of Use</a>
    <a href="" className="text-xs text-blue-400 loginLinks">Privacy Notice</a>
    <a href="" className="text-xs text-blue-400 loginLinks">Help </a>
    </div>
    {/* copyright */}
    <p className="text-xs">© 1996-2024, Amazon.com, Inc. or its affiliates</p>

  </div>
  </div>
  );
};

export default Login;