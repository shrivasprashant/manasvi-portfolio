import React from 'react';
import profile from '../assets/profile.png';

const First = () => {
  return (
    <div className='w-full h-screen bg-[#000] grid grid-cols-1 md:grid-cols-2 p-6 md:px-16'>
      <div className="flex justify-center items-center flex-col gap-10 p-6 md:p-10">
        <h1 className='text-2xl md:text-4xl font-bold capitalize text-[#2b7a78]'>web development</h1>
        <p className='text-xs md:text-sm text-white text-start'>
          Welcome to Manasvi Technologies (OPC) Pvt. Ltd., where we specialize in transformative App Development, Web Development, and comprehensive IT Services. Our mission is to drive your success through cutting-edge technology solutions tailored to your unique needs and aspirations.
        </p>
        <button className="relative text-lg md:text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full overflow-hidden group">
          <span className="relative z-10 ">Explore More</span>
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out transform translate-y-full group-hover:translate-y-0">
            Explore More
          </span>
        </button>
      </div>
      <div className="relative flex justify-center items-center mt-6 md:mt-0">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-36 h-36 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 blur-3xl transition-opacity duration-300 group-hover:opacity-70"></div>
        </div>
        <img
          width={250}
          height={250}
          className="relative z-10 object-cover rounded-full transition-transform duration-300 transform group-hover:scale-105"
          src={profile}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default First;
