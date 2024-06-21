import React from "react";

const Client = () => {
  return (
    <>
      <div className="p-10 ml-10 flex mt-32 gap-6">
        <div>
          <h1 className=" text-center font-serif font-bold  text-4xl text-[#2b7a78]">
            CLIENT REVIEWS
          </h1>
          <p className="text-center mt-14">
            Crafting the perfect content for the client reviews section of
            Manasvi Technologies (OPC) Pvt. Ltd.'s company portfolio requires a
            nuanced approach that highlights the company's commitment to
            innovation, customer satisfaction, and technical excellence. Below
            is a meticulously designed draft that encapsulates the ethos and
            achievements of Manasvi Technologies through the lens of its most
            valuable asset—its clients.
          </p>
          <div className="flex ml-80 space-x-64 gap-  mt-10 ">

            <div className="w-60 h-14 bg-red-50 text-black text-center font-serif p-1 rounded-md ">
              <h1>MANVIKA PARMHA</h1>
                ⭐⭐⭐⭐⭐
            </div>
            <div className="w-60 h-14 bg-red-50 text-black text-center font-serif p-1 rounded-md ">
              <h1>MCS</h1>
                ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
