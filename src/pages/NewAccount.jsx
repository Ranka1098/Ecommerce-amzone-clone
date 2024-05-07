import React, { useState } from "react";
import { loginlogo } from "../assets";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa6";

const NewAccount = () => {
  const [passwordshow, setPasswordShow] = useState(false);

  return (
    <div className="max-w-5xl mx-auto pb-5">
      {/* -------image---------------- */}
      <div className="w-[400px]  mx-auto flex items-center justify-center">
        <img src={loginlogo} alt="" className="text-black" />
        <p className="font-semibold -ml-2 text-xl">.in</p>
      </div>

      <div className="w-[400px] p-4 mx-auto flex items-center justify-center  border rounded-md my-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-3xl px-3  py-1 font-bold">Create Account</h1>
          <div className="flex flex-col  px-3  py-1 text-black ">
            {/* name */}
            {/* Email */}
            <label className="text-sm font-bold py-1 ">Your Name</label>
            <input
              type="text"
              placeholder="Email Here..."
              className="flex-grow py-1 px-2 mb-4 border border-black rounded-md"
            />

            {/* Email */}
            <label className="text-sm font-bold py-1 ">
              Email or Mobile Phone Number{" "}
            </label>
            <input
              type="text"
              placeholder="Email Here..."
              className="flex-grow py-1 px-2 mb-4 border border-black rounded-md"
            />

            {/* password */}
            <label className="text-sm font-bold py-1 ">password</label>
            <input
              type="password"
              placeholder="password Here..."
              autoComplete="current-password"
              className="flex-grow w-full py-1 px-2 mb-4 border border-black rounded-md"
            />

            {/* password */}
            <label className="text-sm font-bold py-1 ">Re-enter password</label>
            <input
              type="password"
              placeholder="password Here..."
              autoComplete="current-password"
              className="flex-grow w-full py-1 px-2 mb-4 border border-black rounded-md"
            />

            <button className="w-full py-1 bg-[#FFD814] rounded-md">
              Continue
            </button>
          </div>
          {/* ------------------------------------ */}

          <h4 className="text-sm p-3 font-semibold">
            By creating account you agree to amazon's
            <span className="text-blue-400 loginLinks">
              {" "}
              Conditions of Use{" "}
            </span>{" "}
            and{" "}
            <span className="text-blue-400 loginLinks">Privacy Notice.</span>
          </h4>

          {/* ------------------------------------ */}
          <p className="px-3 text-sm font-semibold flex items-center">
            Already have an account
            <Link
              to="/login"
              className="px-3  text-blue-400 loginLinks flex items-center"
            >
              Sign in{" "}
              <span>
                <FaCaretRight />
              </span>
            </Link>
          </p>

          <p className="px-3 text-sm font-semibold flex items-center"> Buying For works?
          <Link
            
              className="px-3  text-blue-400 loginLinks flex items-center"
            >
             Create free Bissness Account
              <span>
                <FaCaretRight />
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewAccount;
