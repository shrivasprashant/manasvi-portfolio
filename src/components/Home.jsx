import React from 'react'
import First from './First'
import Products from './Products'
import Services from './Services'
import Client from './Client'
import About from './About'
import Transparent from './Transparent'
import RotatingDivs from './RotatingDivs'
import HoverRotatingDivs from './HoverRotatingDivs'

const Home = () => {
  return (
    <div className='relative z-40 pt-24 px-4 sm:px-6 lg:px-8'>
        <div className='container mx-auto'>
            {/* <First/> */}
            <RotatingDivs/>
            <HoverRotatingDivs/>
            {/* <Products/>
            <Services/>
            <Client/>
            <About/>
            <Transparent/> */}
        </div>
    </div>
  )
}

export default Home
