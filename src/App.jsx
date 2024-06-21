import React from 'react'
import Nav from './components/Nav'
import First from './components/First'
import Services from './components/Services'
import Products from './components/Products'

const App = () => {
  return (
    <div className='bg-black w-full  '>
      <Nav />
      <First />
      <Products />
      <Services />
    </div>
  )
}

export default App