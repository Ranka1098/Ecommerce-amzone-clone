import React from "react";
import { logo ,india} from "../assets/index"
import { BsGlobe } from "react-icons/bs";

const FooterLanguageButton = () => {
  return (
    <div>
      <div className="bg-[#232F3E] py-6  flex items-center justify-center gap-3 text-center border-t border-t-gray-100">
        <div>
          <img src={logo} alt="" />
        </div>
        {/* globe */}
        <div className="w-[7rem]  flex items-center gap-1 px-4 py-1 border border-gray-700 rounded-sm">
          <span className="text-gray-400">
            <BsGlobe size={20} />
          </span>
          <span className="text-gray-400">English</span>
        </div>

        {/* flag */}
        <div className="w-[7rem] text-gary-400 flex items-center gap-2 px-4 py-1 border border-gray-700 rounded-sm">
          <img src={india} alt="" className="w-6" />
          <span className="text-gray-400">India</span>
        </div>
      </div>
    </div>
  );
};

export default FooterLanguageButton;
