import React from "react";

const Client = () => {
  return (
    <>
      <div className="p-6 sm:p-10 ml-4 sm:ml-10 flex flex-col gap-6 bg-black">
        <div>
          <h1 className="text-center font-serif font-bold text-2xl sm:text-4xl text-[#2b7a78]">
            CLIENT REVIEWS
          </h1>
          <p className="text-center mt-8 sm:mt-14 px-4 sm:px-0">
            Crafting the perfect content for the client reviews section of
            Manasvi Technologies (OPC) Pvt. Ltd.'s company portfolio requires a
            nuanced approach that highlights the company's commitment to
            innovation, customer satisfaction, and technical excellence. Below
            is a meticulously designed draft that encapsulates the ethos and
            achievements of Manasvi Technologies through the lens of its most
            valuable asset—its clients.
          </p>
          <div className="flex flex-col sm:flex-row sm:ml-20 space-y-4 sm:space-y-0 sm:space-x-6 mt-4 justify-center items-center">

            <div className="w-60 sm:w-72 gap-2 flex h-20 bg-red-50 text-black text-center font-serif p-1 rounded-md">

              <img className="w-16 sm:w-28" src="https://manasviportfolio.online/static/media/manvika%20Pharma.5d10789d3f3f60eb7faa.png" alt="Manvika Pharma" />

              <div>
                <h1 className="mt-4 text-nowrap">MANVIKA PARMHA</h1>
                ⭐⭐⭐⭐⭐
              </div>

            </div>
            <div className="w-60 sm:w-72 gap-2 flex h-20 bg-red-50 text-black text-center font-serif p-1 rounded-md">

              <img className="w-16 sm:w-28" src="https://manasviportfolio.online/static/media/manvika%202.116324b4fbe39d60cce2.png
" alt=" " />
              <div>
                <h1 className="mt-4 text-nowrap">MCS</h1>
                ⭐⭐⭐⭐⭐
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
