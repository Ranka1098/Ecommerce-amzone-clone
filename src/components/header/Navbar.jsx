import React, { useContext, useEffect, useRef, useState } from "react";
import { india, logo } from "../../assets";
import { CiLocationOn } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { BsMinecart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { setFilterProduct, setProducts } from "../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  // ----navbar overlay----
  const [nav, setNav] = useState(false);

  // ----navbar overlay----

  const dispatch = useDispatch();
  // query
  const [query, setQuery] = useState("");
  const cartitem = useSelector((store) => store?.cart?.cartProduct);
  // api data stored in product
  const product = useSelector((store) => store.product.data);
  // all product stored in filterData
  const filterData = useSelector((store) => store.product.filterData);
  // filterde data search query
  useEffect(() => {
    const filterproduct = product.filter((item) =>
      item.title.toLowerCase().includes(query.toLocaleLowerCase())
    );
    dispatch(setFilterProduct(filterproduct));
  }, [query, product]);

  // filterde data search query
  const handleOnchnge = (e) => {
    setQuery(e.target.value);
  };

  const handleMenuClicked = () => {
    setQuery("");
  };
  // query functionality

  // prevent to scroll up page
  nav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  // prevent to scroll up page

  // --------------------overlay drawer----------------------
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setNav(false);
      }
    });
  }, []);
  // --------------------overlay drawer----------------------

  return (
    <div className="  w-full  bg-[#131921] text-white px-8 py-2  flex items-center gap-1 ">
      {/* -------------------logo------------------------- */}
      <div className="headerHover">
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 " />
        </Link>
      </div>
      {/* -------------------logo------------------------- */}

      {/* ---------------------location-------------------- */}
      {/* overlay */}
      {nav ? (
        <div
          className="bg-black/45 fixed w-full  h-screen z-30 top-0 left-0 text-black "
          ref={ref}
        >
          <div className="absolute w-[400px] h-[250px] bg-white top-[12rem] left-[35rem] rounded-2xl rounded-tr-2xl duration-300 ">
            <div className="flex flex-col gap-1 ">
              <p className=" py-3 bg-[#F0F2F2]  px-5 text-xl font-bold border border-b-gray-300">
                Choose Your Location
              </p>
              <div className="text-sm py-2 px-6 text-gray-600 flex flex-col">
                <span>
                  Select a delivery location to see product availability and
                  delivery options
                </span>

                <button className="py-2 bg-[#FFD814] text-black/70 rounded-lg my-2 hover:bg-yellow-500">
                  sign in to see your address
                </button>

                <div className="w-full text-sm text-gray my-1 flex items-center">
                  <span className="w-1/4 h-[1px] bg-gray-500 inline-flex"></span>
                  <span className="w-1/2 text-center">
                    or enter an indian pincode
                  </span>
                  <span className="w-1/4 h-[1px] bg-gray-500 inline-flex"></span>
                </div>

                <div className="my-4 w-full flex gap-2 ">
                  <input
                    type="text"
                    className=" px-4 border border-gray-400 w-[15rem] rounded-md "
                  />
                  <button className="px-10 py-2  text-black border  border-gray-400 rounded-md">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* overlay */}

      {/* ----------Location------------------------------ */}
      <div className="headerHover p-1 " onClick={() => setNav(true)}>
        <div>
          <CiLocationOn size={20} className=" text-white " />
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-gray-200 text-sm">Delivering to Pune-412307</p>
          <p className="font-semibold -mt-[5px]">Update Location</p>
        </div>
      </div>
      {/* ----------Location------------------------------ */}

      {/* -------------------query-bar----------------------- */}
      <div className="h-10 flex flex-grow rounded-md relative">
        <input
          type="text"
          value={query}
          onChange={handleOnchnge}
          placeholder=" Search Amazone.in"
          className="h-full text-black flex-grow focus:outline-none focus:ring-4 focus:ring-orange-500 rounded-r-lg border-none px-2"
        />
        {/* Drop down */}
        <div className="absolute top-12 left-0 right-0 bg-white text-black">
          {query.length > 0 && (
            // ------------------------------------------------------
            <div>
              {filterData.slice(0, 5).map((item) => (
                <div key={item.id} className="border-b py-2 ">
                  <Link to={"/product/" + item.id} key={item.id}>
                    <p
                      className="hover:bg-gray-200 p-1 flex justify-between items-center px-8 "
                      onClick={handleMenuClicked}
                    >
                      {item.title}
                      <img src={item.image} alt="" className="w-8" />
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            // ------------------------------------------------------
          )}
        </div>
      </div>
      {/* -------------------query-bar----------------------- */}

      {/* --------------------language------------------------- */}

      <div className="flex headerHover">
        <img src={india} alt="" className="w-8 px-1" />
        <span>
          <select name="" id="" className="text-black px-1 py-1">
            <option className="outline-none" value="">
              English
            </option>
            <option className="outline-none" value="">
              Marathi
            </option>
            <option className="outline-none" value="">
              Hindi
            </option>
          </select>
        </span>
      </div>
      {/* --------------------language------------------------- */}

      {/* -----------SignIn page--------------------------------- */}
      <Link to="/login">
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
      </Link>
      {/* -----------SignIn page--------------------------------- */}

      {/* -------------------Return  & order----------------------- */}
      <div className="headerHover flex flex-col">
        <Link to="/order">
          <span className=" text-sm -mb-2">Orders </span>
          <span className="font-bold flex text-sm">& Returns </span>
        </Link>
      </div>
      {/* -------------------Return  & order----------------------- */}

      {/* ---------------cart----------------------------- */}
      <Link to="/cart/">
        {" "}
        <div className="headerHover flex font-bold relative">
          <span className="text-orange-600 text-lg absolute left-6 ">
            {cartitem.length > 0 ? cartitem.length : 0}
          </span>
          <span>
            <BsMinecart size={40} />
          </span>
          <span className="mt-2">Cart</span>
        </div>
      </Link>
      {/* ---------------cart----------------------------- */}
    </div>
  );
};

export default Navbar;
