import React from 'react'

const FooterTopButton = () => {
  return (
    <div>
       <div className=" w-full py-12">
        <div className="text-center py-8 border-t border-t-gray-300 border-b border-b-gray-300">
          <p className="text-sm">See personalized recommendations</p>
          <button className="px-[80px] py-2 my-1 font-semibold text-xs border border-black rounded-md bg-[#FFCA44]">
            Sign In
          </button>
          <p className="text-xs">
            New customer? <span className="text-blue-300"> Start here.</span>{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterTopButton
