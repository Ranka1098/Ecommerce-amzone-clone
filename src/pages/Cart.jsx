import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const {data:product } = useSelector(state => state.product)
  console.log(product);
  return (
    <div>{product.image}
    cart page
    </div>
  )
}

export default Cart