import React from "react";
import web from "../assets/app-dev.png"
const Services = () => {
  return (
    <div className="bg-black flex  gap-4">
      <div className="p-10 ml-10 tex ">
        <h1 className="font-serif font-bold  text-4xl text-[#2b7a78] ">
          OUR SERVICES
        </h1>
        <p className="p-2  ">
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
        <div className=" flex gap-8 ml-20  mt-20  text-center ">
            
           <h1 className="">
            <img src={web} alt="" />
          Web Development
          </h1>

          <h1 className="">
            <img src={web} alt="" />
          Web Development
          </h1>

          <h1 className="">
            <img src={web} alt="" />
          Web Development
          </h1>

          <h1 className="">
            <img src={web} alt="" />
          Web Development
          </h1>


        </div>


      </div>
    </div>
  );
};

export default Services;
