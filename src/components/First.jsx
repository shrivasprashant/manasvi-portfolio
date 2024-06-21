import React from 'react'
import profile from '../assets/profile.png'

const First = () => {
  return (
    <div className='w-full h-screen bg-[#000] grid grid-cols-2 px-16 '>
      <div className=" flex justify-center items-center flex-col gap-4 p-10">
        <h1 className='text-4xl font-bold capitalize text-[#2b7a78]'>web development</h1>
        <p className='text-sm  text-white text-start'>Welcome to Manasvi Technologies (OPC) Pvt. Ltd., where we specialize in transformative App Development, Web Development, and comprehensive IT Services. Our mission is to drive your success through cutting-edge technology solutions tailored to your unique needs and aspirations.</p>
        <button className='text-xl  text-white py-2 px-4 bg-[#3AAFA9] rounded-full'>Explore More</button>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-72 h-72 rounded-full bg-gradient-to-r from-teal-600 to-teal-400 blur-3xl"></div>
        </div>
        <img
          width={500}
          height={500}
          className="relative z-10 object-cover rounded-full"
          src={profile}
          alt="Profile"
        />
      </div>
    </div>
  )
}

export default First