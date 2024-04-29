import React from "react";

import FooterBottom from "./footer/FooterBottom";
import FooterTopButton from "./footer/FooterTopButton";
import FooterBackToTopButton from "./footer/FooterBackToTopButton";
import CopyRightPage from "./footer/CopyRightPage";
import FooterLanguageButton from "./footer/FooterLanguageButton";
const Footer = () => {
  return (
    <div>
      <FooterTopButton />
      <FooterBackToTopButton />

      <div className="bg-[#232F3E] px-20 w-full py-10 grid grid-cols-4 mx-auto border-b border-b-gray-700 ">
        {/* get to know us */}
        <div>
          <h1 className="footerHead my-2">Get to Know Us</h1>
          <p className="footerLink">About Us</p>
          <p className="footerLink">Careers</p>
          <p className="footerLink">Press Releases</p>
          <p className="footerLink">Amazon Science</p>
        </div>
        {/* connect wit us */}
        <div>
          <h1 className="footerHead my-2">GeConnect with Us</h1>
          <p className="footerLink">Facebook</p>
          <p className="footerLink">Twitter</p>
          <p className="footerLink">Instagram</p>
        </div>
        {/* Make Money with Us */}
        <div>
          <h1 className="footerHead my-2">Make Money with Us</h1>
          <p className="footerLink">Sell on Amazon</p>
          <p className="footerLink">Sell Under Amazon</p>
          <p className="footerLink">Protect and Build Your Brand</p>
          <p className="footerLink">Amazon Global Selling</p>
          <p className="footerLink">Become an Affiliate</p>
          <p className="footerLink">Fulfilment by Amazon</p>
          <p className="footerLink">Advertise Your Products</p>
          <p className="footerLink">Amazon Pay on Merchants</p>
        </div>
        {/* Let Us Help You */}
        <div>
          <h1 className="footerHead my-2">Let Us Help You</h1>
          <p className="footerLink">COVID-19 and Amazon</p>
          <p className="footerLink">Your Account</p>
          <p className="footerLink">Returns Centre</p>
          <p className="footerLink">100% Purchase Protection</p>
          <p className="footerLink">Amazon App Download</p>
          <p className="footerLink">Help</p>
        </div>
      </div>
      <FooterLanguageButton />
      <FooterBottom />
      <CopyRightPage />
    </div>
  );
};

export default Footer;
