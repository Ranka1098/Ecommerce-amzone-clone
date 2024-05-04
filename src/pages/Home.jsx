import React from 'react'
import SimpleSlibeBar from '../components/SimpleSlideBar'
import Product from './Product'

const Home = () => {
  return (
    <div>
        <SimpleSlibeBar />
       <div className='-mt-64'>
       <Product />
       </div>
    </div>
  )
}

export default Home