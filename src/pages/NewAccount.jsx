import React, { useState } from "react";
import { fLogin, gLogin, loginlogo } from "../assets";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa6";

const NewAccount = () => {
  // user Info
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  // Error Messages
  const [errclientName, setErrClientName] = useState("");
  const [erremail, setErrEmail] = useState("");
  const [errpassword, setErrPassword] = useState("");
  const [errcurrentPassword, setErrCurrentPassword] = useState("");

  // validation
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/);
  };

  const passwordValidation = (password) => {
    return String(password)
      .toLowerCase()
      .match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    console.log("submit form")

    if (!clientName) {
      setErrClientName("enter your Name");
    }
    if (!email) {
      setErrEmail("enter your Email");
    } else {
      if (!emailValidation(email)) {
        setErrEmail("plss enter valid mail");
      }
    }

    if (!password) {
      setErrPassword("enter your Password");
    } else {
      if (!passwordValidation(password)) {
        setErrPassword(
          "password must be 8 character uperCase,lowerCase and special Symbol"
        );
      }
    }

    if (!currentPassword) {
      setErrCurrentPassword("enter your Same-Password");
    } else if (currentPassword !== password) {
      setErrCurrentPassword("enter your Same-Password");
    }

    if (
      (clientName &&
        email &&
        password &&
        currentPassword &&
        emailValidation(email),
      passwordValidation(password))
    ) {
      setClientName(""),
        setEmail(""),
        password(""),
        currentPassword(""),
        erremail(""),
        errpassword("");
    }
  };

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
    setErrCurrentPassword("");
  };

  return (
    <div className="max-w-5xl mx-auto pb-5 ">
      {/* -------image---------------- */}
      <div className="w-[400px]  mx-auto flex items-center justify-center">
        <img src={loginlogo} alt="" className="text-black" />
        <p className="font-semibold -ml-2 text-xl">.in</p>
      </div>

      <div className="w-[400px] p-4 mx-auto flex items-center justify-center   border-2 border-black  rounded-md my-2">
        <form onSubmit={handleRegisterForm}>
          <h1 className="text-3xl px-3  py-1 font-bold">Create Account</h1>
          <div className="flex flex-col  px-3  py-1 text-black ">
            {/* name */}
            <label className="text-sm font-bold py-1 ">Your Name</label>
            <input
              onChange={handleName}
              value={clientName}
              type="text"
              placeholder="Name Here..."
              className="flex-grow  py-1 px-2 mb-4 border border-black rounded-md"
            />
            {errclientName && (
              <p className="text-red-600 text-md font-semibold  text-base -mt-3">
                <span className="px-1 text-md font-semibold text-xl">!</span>
                {errclientName}
              </p>
            )}

            {/* Email */}
            <label className="text-sm font-bold py-1 ">
              Email or Mobile Phone Number{" "}
            </label>
            <input
              onChange={handleEmail}
              type="text"
              value={email}
              placeholder="Email Here..."
              className="flex-grow py-1 px-2 mb-4 border border-black rounded-md"
            />
            {erremail && (
              <p className="text-red-600 text-md font-semibold  text-base -mt-3">
                <span className="px-1 text-md font-semibold text-xl">!</span>
                {erremail}
              </p>
            )}

            {/* password */}
            <label className="text-sm font-bold py-1 ">password</label>
            <input
              type="password"
              onChange={handlePassword}
              value={password}
              placeholder="password Here..."
              autoComplete="current-password"
              className="flex-grow w-full py-1 px-2 mb-4 border border-black rounded-md"
            />
            {errpassword && (
              <p className="text-red-600 text-md font-semibold  text-base -mt-3">
                <span className="px-1 text-md font-semibold text-xl">!</span>
                {errpassword}
              </p>
            )}

            {/*same password */}
            <label className="text-sm font-bold py-1 ">Re-enter password</label>
            <input
              type="password"
              onChange={handleCurrentPassword}
              value={currentPassword}
              placeholder="password Here..."
              autoComplete="current-password"
              className="flex-grow w-full py-1 px-2 mb-4 border border-black rounded-md"
            />
            {errcurrentPassword && (
              <p className="text-red-600 text-md font-semibold  text-base -mt-3">
                <span className="px-1 text-md font-semibold text-xl">!</span>
                {errcurrentPassword}
              </p>
            )}

            <button className="w-full py-1 bg-[#FFD814] rounded-md">
              Continue
            </button>

            <div className="w-full flex items-center px-1">
              <Link className="w-[50%] cursor-pointer">
                <img src={gLogin} alt="" className="w-full" />
              </Link>
              <Link className="w-[50%] cursor-pointer object-contain">
                <img src={fLogin} alt="" className="w-full object-contain" />
              </Link>
            </div>
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

          <p className="px-3 text-sm font-semibold flex items-center">
            {" "}
            Buying For works?
            <Link className="px-3  text-blue-400 loginLinks flex items-center">
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
