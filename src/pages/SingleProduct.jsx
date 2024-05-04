import React from 'react'
import { Link } from 'react-router-dom';

const SingleProduct = ({data}) => {
  const { image, title, price, description, category } = data;
  return (
    <div className='relative w-[250px] h-[350px] flex flex-col gap-2 px-2 py-4 justify-between items-center border shadow-md rounded-md bg-[#FFEBB8]'>
      <img src={image} alt="" className='w-[150px] h-[200] object-contain overflow-hidden bg-transparent'  />
      <h1>{title.substr(0, 20)}</h1>
      <h4>$ {price}</h4>
      <p className='absolute top-0 right-1 text-xs mb-2'>{category}</p>
      <Link to={"/productdetail/" + data.id} className='w-full py-1 text-center bg-yellow-400 font-bold text-md rounded '>
     <button>Buy Now</button>

      </Link>
    </div>
  )
}

export default SingleProduct