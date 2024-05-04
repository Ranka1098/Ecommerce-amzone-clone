import React from "react";

const Shimmer = () => {
  return (
    <div>
      {Array(20)
        .fill("")
        .map((e) => (
         <div className="flex justify-center items-center gap-6   ">
           <div className='relative w-[250px] h-[350px] flex flex-col gap-2 px-2 py-4 justify-between items-center border shadow-md rounded-md bg-[#FFEBB8]'></div>
         </div>
        ))}
    </div>
  );
};

export default Shimmer;
