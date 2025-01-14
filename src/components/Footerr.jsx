import React from 'react';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footerr() {
    return (
        <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 md:px-6 py-10 fixed z-1 bottom-0">
            <div className="w-full max-w-screen-lg border-t border-b border-gray-500 py-20">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="flex flex-col items-center md:items-start my-4">
                        <a href="https://manasvitech.in/" target="_blank" rel="noreferrer">
                            <img src="https://manasviportfolio.online/static/media/manasvi_logo.b48774965ddf1f4d9635.png" alt="logo" className="h-20 rounded-full mb-2 bg-white" />
                        </a>
                        <span className="font-semibold text-md text-center md:text-start">
                            "At Manasvi Technologies(OPC) Pvt. Ltd, <br /> we make phone apps that are just <br /> right for you. Tell us what you need!"
                        </span>
                    </div>
                    <div className="flex flex-col my-4 items-center md:items-start">
                        <span className="font-extrabold text-2xl text-[#2b7a78] mb-3">PRODUCTS</span>
                        <ul className='text-md font-bold'>
                            <li className='mb-2'>Software Development</li>
                            <li className='mb-2'>App Development</li>
                            <li className='mb-2'>IT Services</li>
                            <li className='mb-2'>E-Commerce</li>
                        </ul>
                    </div>
                    <div className="flex flex-col my-4 items-center md:items-start">
                        <span className="font-extrabold text-2xl mb-3">SOCIAL MEDIA</span>
                        <ul className="list-none">
                            <li className="flex items-center gap-4 text-md font-bold mb-2">
                                <FaFacebook />
                                <a href="https://www.facebook.com/people/Manasvi-Technologies-OPC-Pvt-Ltd/61555158365754/" target="_blank" rel="noreferrer" className="underline">Facebook</a>
                            </li>
                            <li className="flex items-center gap-4 text-md font-bold mb-2">
                                <FaXTwitter />
                                <a href="https://twitter.com/manasvitech01" target="_blank" rel="noreferrer" className="underline">Twitter</a>
                            </li>
                            <li className="flex items-center gap-4 text-md font-bold mb-2">
                                <FaInstagram />
                                <a href="https://www.instagram.com/manasvi.technologies?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" rel="noreferrer" className="underline">Instagram</a>
                            </li>
                            <li className="flex items-center gap-4 text-md font-bold mb-2">
                                <FaLinkedinIn />
                                <a href="#" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col my-4 items-center md:items-start text-md space-y-2">
                        <span className="font-extrabold text-2xl mb-3">CONTACT US</span>
                        <span>
                            <a href="tel:+919302447001" className="underline font-bold">Phone: +919302447001</a>
                        </span>
                        <span>
                            <a href="mailto:manasvitech01@gmail.com" className="underline font-bold">Email: manasvitech01@gmail.com</a>
                        </span>
                        <span className="text-center md:text-start">Address : Corporate Office: 111B, 80 Feet Road<br /> Old Ashoka Garden, Bhopal (462023)</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-center md:text-left">
                <span className="text-sm">&copy; 2023-2024. All Rights Reserved</span>
                <span className="text-sm">Manasvi Technologies (OPC) PVT. LTD.</span>
            </div>
        </div>
    );
}

export default Footerr;
