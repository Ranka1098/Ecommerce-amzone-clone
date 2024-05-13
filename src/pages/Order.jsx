import React from "react";

const Order = () => {
  return (
    <div className="w-[1280px] h-[80vh] mx-auto p-4 text-center">
      Customer Info
      <div className="w-[450px] mx-auto p-4 flex items-center justify-center border-2">
        <form action="" className="flex flex-col">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Mobile no</label>
          <input type="number" maxlength="10"/>
        </form>
      </div>
    </div>
  );
};

export default Order;
