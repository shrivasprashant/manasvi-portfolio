import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='h-full w-full bg-gradient-to-r from-[#084240] to-[#05b5ac] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50'>
            <div className="p-4 container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-white">
                    <img src="https://manasviportfolio.online/static/media/manasvi_logo.b48774965ddf1f4d9635.png" alt="Logo" className="h-8 w-8"/>
                </div>
                <div className="text-2xl font-bold text-white space-x-4">
                    <Link to="/">Home</Link>
                    <Link to="/about">Products</Link>
                    <Link to="/projects">Services</Link>
                    <Link to="/contact">Clients</Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
