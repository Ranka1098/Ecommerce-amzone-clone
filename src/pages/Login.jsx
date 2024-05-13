import React, { useState } from "react";
import { loginlogo } from "../assets/index";
import { FaCaretDown, FaCaretRight } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [help, setHelp] = useState(false);
  const [passwordshow, setPasswordShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erremail, setErrEmail] = useState("");
  const [errpassword, setErrPassword] = useState("");

  // validation
  const emailValidation = (email) => {
    return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  };

  const passwordValidation = (password) => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrEmail(""), setErrPassword("");

    console.log("submit");
    if (!email) {
      setErrEmail("enter vaild email");
    } else if (!emailValidation(email)) {
      setErrEmail("valid email");
    }

    if (!password) {
      setErrPassword("plss valid password");
    } else if (!passwordValidation(password)) {
      setErrPassword("8 charecter uppercase,lowercase,specialSymbol");
    }

    if (
      (email && password && emailValidation(email),
      passwordValidation(password))
    ) {
      setEmail(""), setPassword("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/newaccount");
  };
  return (
    <div className="flex flex-col">
      <div className="max-w-5xl mx-auto border-b pb-5">
        {/* -------image---------------- */}
        <div className="w-[400px]  mx-auto flex items-center justify-center">
          <Link to="/">
          <img src={loginlogo} alt="" className="text-black" />
          </Link>
          <p className="font-semibold -ml-2 text-xl">.in</p>
        </div>
        {/* sign in */}
        <div className="w-[400px] p-4 mx-auto flex items-center justify-center  border rounded-md my-2">
          <div>
            <h1 className="text-3xl px-3  py-3 font-semibold">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col  px-3  py-3 text-black "
            >
              {/* Email */}
              <label className="text-sm font-bold py-1 ">Email</label>
              <input
                type="text"
                value={email}
                onChange={handleEmail}
                placeholder="Email Here..."
                className="flex-grow py-1 px-2 mb-4 border border-black rounded-md"
              />
              {erremail && (
                <p className="text-red-500 -mt-2 text-sm font-semibold">
                  <span className="text-red-500 -mt-2 text-sm font-semibold">
                    *
                  </span>
                  {erremail}
                </p>
              )}

              {/* password */}
              <div className="relative">
                <label className="text-sm font-bold py-1 ">password</label>
                <input
                  type={passwordshow ? "text" : "password"}
                  onChange={handlePassword}
                  value={password}
                  placeholder="password Here..."
                  autoComplete="current-password"
                  className="flex-grow w-full py-1 px-2 mb-4 border border-black rounded-md"
                />
                {errpassword && (
                  <p className="text-red-500 -mt-2 mb-2 text-sm font-semibold">
                    <span className="text-red-500 -mt-2 text-sm font-semibold">
                      *
                    </span>{" "}
                    {errpassword}
                  </p>
                )}
                <button
                  className="absolute right-5  top-8"
                  onClick={() => setPasswordShow(!passwordshow)}
                >
                  {passwordshow ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-1 bg-[#FFD814] rounded-md"
              >
                Continue
              </button>
            </form>
            {/* ------------------------------------ */}

            <h4 className="text-sm p-3 font-semibold">
              By continuing, you agree to Amazon's
              <span className="text-blue-400 loginLinks">
                Conditions of Use
              </span>{" "}
              and{" "}
              <span className="text-blue-400 loginLinks">Privacy Notice.</span>
            </h4>
            <div
              className="flex flex-col  items-start  border-b-2 mb-3 p-3 cursor-pointer"
              onClick={() => setHelp(!help)}
            >
              <div className="flex ">
                {help ? <FaCaretDown /> : <FaCaretRight />}
                <span className="text-blue-400 text-sm loginLinks">
                  Need Help ?
                </span>
              </div>

              {help && (
                <div className="flex flex-col px-3">
                  <span className="text-blue-400 text-sm loginLinks">
                    forget password
                  </span>
                  <span className="text-blue-400 text-sm loginLinks">
                    Other issues with Sign-In
                  </span>
                </div>
              )}
            </div>

            {/* ------------------------------------ */}
            <p className="px-3 text-sm font-semibold">Buying for work?</p>
            <Link className="px-3  text-blue-400 loginLinks">
              Shop on Amazon Business
            </Link>
          </div>
        </div>

        {/* ----------------------------------------------  */}
        <div className="w-[400px] p-4 mx-auto text-black flex items-center justify-center ">
          <span className="h-[1px] w-[30%] bg-[#D5D9D9] inline-flex"></span>
          <span className="w-[40%] text-center">New to Amazon?</span>
          <span className="h-[1px] w-[30%] bg-[#D5D9D9] inline-flex"></span>
        </div>

        <div className="w-[400px] px-3 mx-auto text-black flex items-center justify-center ">
          <button
            className="py-1 w-full border border-[#D5D9D9] bg-gray-200 rounded-md"
            onClick={handleNavigate}
          >
            Create Your Amazon Account
          </button>
        </div>
      </div>
      <div className="w-[500px]  mx-auto flex flex-col items-center justify-center my-1 bg-gradient-to-t from-bg-[">
        {/* links */}
        <div className="flex  items-center gap-10 mt-6 mb-2 ">
          <div>
            <Link className="text-xs text-blue-400 loginLinks">
              Condtion of Use
            </Link>
          </div>
          <div>
            <Link className="text-xs text-blue-400 loginLinks">
              Privacy Notice
            </Link>
          </div>
          <div>
            <Link className="text-xs text-blue-400 loginLinks">Help </Link>
          </div>
        </div>
        {/* copyright */}
        <p className="text-xs">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Login;
