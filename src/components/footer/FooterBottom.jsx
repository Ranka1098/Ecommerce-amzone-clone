import React from "react";
import { footerBottomdata } from "../../utils/data";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#131A22] py-8">
      <div className="max-w-5xl mx-auto">
        <div className="w-full grid grid-cols-7 gap-3 place-content-center text-gray-400">
          {footerBottomdata.map((item) => (
            <div key={item._id}>
              <h1 className="footerBottomTitle">{item.title}</h1>
              <p className="footerBottomText">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
