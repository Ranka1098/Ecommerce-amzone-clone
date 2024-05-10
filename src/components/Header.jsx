import React from 'react'
import NavBottom from './header/NavBottom'
import Navbar from './header/Navbar'

const Header = () => {
  return (
    <div className='w-full sticky top-0 z-50'>
      <Navbar />
      <NavBottom />
    
    </div>
  )
}

export default Header
