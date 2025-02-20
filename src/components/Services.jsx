import React from "react";
import app from "../assets/app-dev.png";
import web from '../assets/web.png';
import ser from '../assets/ser.png';
import dig from '../assets/dig.png';
import awrro from '../assets/arrow.png';
import new1 from '../assets/newobe.png';

const Services = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      <div className="p-10 ml-4 md:ml-20 flex flex-col md:flex-row gap-6">
        <div className="mt-10">
          <h1 className="font-serif font-bold text-center mb-6 text-2xl md:text-4xl text-[#2b7a78]">
            OUR SERVICES
          </h1>
          <p className="text-sm md:text-base">
            Manasvi Technologies (OPC) Pvt. Ltd is at the forefront of digital innovation, offering comprehensive services in web development, digital marketing, app development, and IT services. Our team of experts is dedicated to delivering cutting-edge solutions that drive growth and efficiency for our clients. By leveraging the latest technologies and trends, we ensure your business stays ahead in the competitive digital landscape. Whether you're looking to build a dynamic website, enhance your online presence, develop a mobile app, or streamline your IT operations, Manasvi Technologies is your partner in digital excellence.
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-10 text-center">
          <div>
            <img src={web} alt="Web Development" />
            <h1 className="mt-2">
              Web Development
              <img className="mt-2 mx-auto" src={awrro} alt="Arrow" />
            </h1>
          </div>

          <div>
            <img src={app} alt="App Development" />
            <h1 className="mt-2">
              App Development
              <img className="mt-2 mx-auto" src={awrro} alt="Arrow" />
            </h1>
          </div>

          <div>
            <img src={ser} alt="IT Services" />
            <h1 className="mt-2">
              IT Services
              <img className="mt-2 mx-auto" src={awrro} alt="Arrow" />
            </h1>
          </div>

          <div>
            <img src={dig} alt="Digital Marketing" />
            <h1 className="mt-2">
              Digital Marketing
              <img className="mt-2 mx-auto" src={awrro} alt="Arrow" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
