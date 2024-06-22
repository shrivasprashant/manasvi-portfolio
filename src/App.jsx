import React from 'react'
import Nav from './components/Nav'
import First from './components/First'
import Services from './components/Services'
import Products from './components/Products'
import Client from './components/Client'

const App = () => {
  return (
    <div className='bg-black w-full  '>
      <Nav />
      <First />
      <Products />
      <Services />
      <Client />
      
    </div>
  )
}

export default App