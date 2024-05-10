import React from "react";

const ShimmerCard = () => {
  return (
    <div className="w-[300px] h-[300px] bg-[white]  rounded-md  shadow-xl ">
      <div className="flex flex-col p-4 gap-4">
        <div className="w-[100%] h-[7rem] bg-gray-200 rounded-md"></div>
        <div className="flex justify-between">
          <div className="w-[70%] h-[10px] bg-gray-200 rounded-md"></div>
          <div className="w-[20%] h-[10px] bg-gray-200 rounded-md"></div>
        </div>
        <div className="w-[100%] h-[4rem] bg-gray-200 rounded-md"></div>
        <div className="w-[100%] h-[2rem] bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
