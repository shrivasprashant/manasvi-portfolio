import React from "react";
import app from "../assets/app-dev.png"
import web from '../assets/web.png'
import ser from '../assets/ser.png'

import dig from '../assets/dig.png'
import awrro from '../assets/arrow.png'


import new1 from '../assets/newobe.png'

const Services = () => {
  return (
    <div className="bg-black  gap-4">
      <div className="p-10 ml-20 flex mt-20 gap-6  ">

        <div className="mt-10" >
        <h1 className="font-serif font-bold   text-4xl text-[#2b7a78] ">
          OUR SERVICES
        </h1>
        <p className=" ">
          Manasvi Technologies (OPC) Pvt. Ltd is at the forefront of digital{" "}
          <br /> innovation, offering comprehensive services in web development,{" "}
          <br /> digital marketing, app development, and IT services. Our team
          of <br /> experts is dedicated to delivering cutting-edge solutions
          that drive <br /> br growth and efficiency for our clients. By
          leveraging the latest <br /> technologies and trends, we ensure your
          business stays ahead in the <br /> competitive digital landscape.
          Whether you're looking to build a <br /> dynamic website, enhance your
          online presence, develop a mobile <br /> app, or streamline your IT
          operations, Manasvi Technologies is your <br /> partner in digital
          excellence.
        </p>
        </div>

        <div>
          <img className="w-[500px] ml-64" src={new1} alt="" />
        </div>
      </div>
      <div>
        <div className=" flex gap-8 ml-80  mt-24  space-x-32   text-center ">

            <div>
            <img src={web} alt="" />
           <h1 className=" mt-2">
          Web Development
          <img className="mt-2" src={awrro} alt="" />
          </h1>
            </div>

            <div>
            <img src={app} alt="" />
           <h1 className=" mt-2">
        App Development
          <img className="mt-2" src={awrro} alt="" />
          </h1>
            </div>
    
            <div>
            <img src={ser} alt="" />
           <h1 className=" mt-2">
          IT Services
          <img className="mt-2" src={awrro} alt="" />
          </h1>
            </div>

         
            <div>
            <img src={dig} alt="" />
           <h1 className=" mt-2">
          Digital Marketing
          <img className="mt-2" src={awrro} alt="" />
          </h1>
            </div>
          

          


        </div>


      </div>
    </div>
  );
};

export default Services;
