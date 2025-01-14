import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Products from './Products'
import Client from './Client'
import Home from './Home'


const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/client' element={<Client/>}/>
      </Routes>
    </div>
  )
}

export default Routess