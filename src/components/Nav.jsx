import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // Import menu icon from react-icons library

const Nav = () => {
    const [showNav, setShowNav] = useState(false); // State to manage navbar visibility

    return (
        <div className='w-full bg-black filter backdrop-blur-xl fixed z-50 top-0'>
            <div className="p-4 container mx-auto flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold text-white">
                    <img src="https://manasviportfolio.online/static/media/manasvi_logo.b48774965ddf1f4d9635.png" alt="Logo" className="h-16 md:h-24" />
                </div>
                <div className="text-base md:text-2xl font-serif font-thin text-white pr-4 md:pr-10 flex items-center">
                    {/* Responsive menu icon */}
                    <div className="md:hidden">
                        <FiMenu className="text-white cursor-pointer" onClick={() => setShowNav(!showNav)} />
                    </div>
                    {/* Navigation links */}
                    <div className={`md:flex ${showNav ? 'block' : 'hidden'}`}>
                        <Link className='hover:text-[#2b7a78] md:mx-3' to="/">Home</Link>
                        <Link className='hover:text-[#2b7a78] md:mx-3' to="">About</Link>
                        <Link className='hover:text-[#2b7a78] md:mx-3' to="">Services</Link>
                        <Link className='hover:text-[#2b7a78] md:mx-3' to="">Clients</Link>
                        <h4 className="relative p-1 md:p-2 border border-gray-300 rounded-full font-medium text-white text-sm md:text-lg overflow-hidden group md:mx-3">
                            <Link to="" className="relative z-10">CONTACT US</Link>
                            <span className="absolute w-full h-full bg-[#2b7a78] left-0 bottom-[-100%] rounded-full transition-all ease duration-400 group-hover:bottom-0 group-hover:rounded-none group-hover:text-black"></span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
