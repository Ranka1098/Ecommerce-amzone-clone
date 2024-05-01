import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FooterBackToTopButton = () => {
  const [backtotop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <p className=" w-full py-4 text-center bg-[#37475A] text-white font-semibold">
        <span className="cursor-pointer" onClick={handleBackToTop}>
          Back to Top
        </span>
      </p>
    </div>
  );
};

export default FooterBackToTopButton;
