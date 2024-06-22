import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='h-full w-full bg-black  '>
            <div className="p-4 container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-white">
                    <img src="https://manasviportfolio.online/static/media/manasvi_logo.b48774965ddf1f4d9635.png" alt="Logo" className="h-24" />
                </div>
                <div className="text-2xl font-serif font-thin  space-x-5 text-white pr-10 flex items-center">
                    <Link to="/">Home</Link>
                    <Link to="/about">Products</Link>
                    <Link to="/projects">Services</Link>
                    <Link to="/contact">Clients</Link>
                    <h4 className="relative  p-2 border border-gray-300 rounded-full font-medium text-white text-lg overflow-hidden group">
                        <Link to="/contact" className="relative z-10">CONTACT US</Link>
                        <span className="absolute w-full h-full bg-[#2b7a78] left-0 bottom-[-100%] rounded-full transition-all ease duration-400 group-hover:bottom-0 group-hover:rounded-none group-hover:text-black"></span>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Nav;
