import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='h-full w-full bg-black  '>
            <div className="p-4 container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-white">
                    <img src="https://manasviportfolio.online/static/media/manasvi_logo.b48774965ddf1f4d9635.png" alt="Logo" className="h-24 ml-5"/>
                </div>
                <div className="text-2xl font-serif font-thin  space-x-5 text-white pr-20">
                    <Link to="/">Home</Link>
                    <Link to="/about">Products</Link>
                    <Link to="/projects">Services</Link>
                    <Link to="/contact">Clients</Link>
                    <Link to="/contact">Contact us </Link>

                </div>
            </div>
        </div>
    );
};

export default Nav;
