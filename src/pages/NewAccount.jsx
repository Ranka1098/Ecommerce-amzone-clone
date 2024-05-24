import React, { useState } from "react";
import { fLogin, gLogin, loginlogo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretRight, FaEye, FaEyeSlash } from "react-icons/fa6";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app, provider } from "../firebase/FirebaseConfig";
import firebase from "firebase/compat/app";
import { RotatingLines, ThreeDots } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../store/UserSlice";
import { current } from "@reduxjs/toolkit";

const NewAccount = () => {
  // Initialize Firebase Authentication and get a reference to the service
  // const auth = getAuth(app);
  const auth = getAuth(app);

  const [passwordshow, setPasswordShow] = useState(false);
  const [samepasswordshow, setSamePasswordShow] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //  loading state sart and end
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  //  loading state sart and end

  // user Info
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [samePassword, setSamePassword] = useState("");

  // Error Messages
  const [errclientName, setErrClientName] = useState("");
  const [erremail, setErrEmail] = useState("");
  const [errpassword, setErrPassword] = useState("");
  const [errSamePassword, setErrSamePassword] = useState("");
  const [firebaseErr, setFirebaseErr] = useState("");

  // validation
  const emailValidation = (email) => {
    return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  };

  const passwordValidation = (password) => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  };

  //-------------------------------
  function handleName(e) {
    setClientName(e.target.value);
    setErrClientName("");
  }
  function handleEmail(e) {
    setEmail(e.target.value);
    setErrEmail("");
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    setErrPassword("");
  }
  function handleCurrentPassword(e) {
    setSamePassword(e.target.value);
    setErrSamePassword("");
  }

  //-------------------------------

  // --submit form----------------

  const handleRegisterForm = (e) => {
    e.preventDefault();

    if (!clientName) {
      setErrClientName("Username is empty");
    }
    // ------email-----------
    if (!email) {
      setErrEmail("email filed empty");
    } else if (!emailValidation(email)) {
      setErrEmail("enter valid email address");
    }
    // ----password----------
    if (!password) {
      setErrPassword("password field is empty");
    } else if (!passwordValidation(password)) {
      setErrPassword(
        "password should have 8 character,uppercase,lowercase,specialSymbol and numaric"
      );
    }
    // ----same password-------------
    if (!samePassword) {
      setErrSamePassword("password field empty");
    } else if (samePassword !== password) {
      setErrSamePassword("password is not matched enter same password");
    }

    // ------submittion------------
    if (
      clientName &&
      email &&
      password &&
      emailValidation(email) &&
      passwordValidation(password) &&
      samePassword === password
    ) {
      // -----------create new user account------------
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: clientName,
            photoURL:
              "https://plus.unsplash.com/premium_photo-1664367173362-593de24d940e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
          });
          // Signed up
          const user = userCredential.user;
          console.log(user);

          setLoading(false);
          setSuccessMsg("Account is created successfully");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseErr("email is already used, Try with new email ");
          }
          console.log("error code", errorCode);
          console.log("error message", errorMessage);
          // ..
        });

      // -------------------correct validation----------------
      setClientName(""), setEmail(""), setPassword(""), setSamePassword("");
      setErrEmail(""), setErrPassword(""), setErrSamePassword("");
    }
  };
  // --submit form----------------
  const handleGooglelogin = () => {

    signInWithPopup(auth, provider)
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      const user = result.user;
      console.log(user);
      dispatch(setUserInfo(user))
      setTimeout(()=>{
        navigate("/")
      },1000)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      setLoading(false)
      // ...
    });
  };
  return (
    <div className="max-w-5xl mx-auto pb-5 ">
      {/* -------image---------------- */}
      <div className="w-[400px]  mx-auto flex items-center justify-center">
        <Link to="/login">
          <img src={loginlogo} alt="" className="text-black" />
        </Link>
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
              autocomplete="username"
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
            <label className="text-sm font-bold py-1 ">Email</label>
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
            {firebaseErr && (
              <p className="text-red-600 text-md font-semibold  text-base -mt-3">
                {firebaseErr}
              </p>
            )}

            {/* password */}
            <label className="text-sm font-bold py-1 ">password</label>
            <div className="relative">
              <input
                type={passwordshow ? "text" : "password"}
                onChange={handlePassword}
                value={password}
                placeholder="password Here..."
                autoComplete="current-password"
                className="flex-grow w-full py-1 px-2 mb-4 border border-black rounded-md"
              />
              <span
                className="absolute right-7  top-2 cursor-pointer z-20"
                onClick={() => setPasswordShow(!passwordshow)}
              >
                {passwordshow ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errpassword && (
              <p className="text-red-600 text-xs font-semibold  -mt-3">
                <span className="px-1 text-md font-semibold text-xl">!</span>
                {errpassword}
              </p>
            )}

            {/*same password */}
            <label className="text-sm font-bold py-1 ">Re-enter password</label>
            <div className="relative">
              <input
                type={samepasswordshow ? "text" : "password"}
                onChange={handleCurrentPassword}
                value={samePassword}
                placeholder="password Here..."
                autoComplete="current-password"
                className="flex-grow w-full py-1 px-2 mb-4 border border-black rounded-md"
              />
              <span
                className="absolute right-7  top-2 cursor-pointer z-20"
                onClick={() => setSamePasswordShow(!samepasswordshow)}
              >
                {setSamePasswordShow ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errSamePassword && (
              <p className="text-red-600 text-md font-semibold  text-base -mt-3">
                <span className="px-1 text-md font-semibold text-xl">!</span>
                {errSamePassword}
              </p>
            )}
            <p className=" text-red-600 text-lg py-1">{}</p>
            <button
              type="submit"
              className="w-full py-1 bg-[#FFD814] rounded-md"
            >
              Continue
            </button>

            {loading && (
              <div className="flex justify-center items-center">
                <RotatingLines
                  visible={true}
                  width="50"
                  color="#FFD814"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                />
              </div>
            )}

            {successMsg && (
              <div>
                <p className="text-green-600 border-1 border-green-500 p-2 shadow-lg my-2 font-bold flex items-center justify-center ">
                  {successMsg}
                </p>
              </div>
            )}

            <div className="w-full flex items-center px-1">
              <Link className="w-[50%] cursor-pointer">
                <img
                  src={gLogin}
                  alt=""
                  className="w-full"
                  onClick={handleGooglelogin}
                />
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
