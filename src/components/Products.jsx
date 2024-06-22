import React from 'react'

const Products = () => {
    return (
        <div className='px-5 py-10 bg-[#2b7a78]'>
            <h1 className='text-black text-center text-9xl font-bold'>OUR PRODUCTS</h1>
            <div className="grid grid-cols-2 px-5 py-10 gap-20">
                <div className="relative bg-black rounded-lg px-5">
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                    </div>
                    <div className="relative grid grid-cols-2 w-full h-full bg-black hover:bg-transparent rounded-lg px-5 py-10 z-10 transition duration-500 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img
                                width={200}
                                height={200}
                                src="https://manasviportfolio.online/static/media/e-commerce.cbd7fa0beb1b8b08d701.png"
                                alt="E-Commerce"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col gap-4 text-white">
                            <h1 className="text-2xl font-bold capitalize text-[#2b7a78]">E-COMMERCE</h1>
                            <p className="text-center">
                                Revolutionizing retail with seamless online shopping experience. Integrating user-friendly interface,
                                secure transactions, and efficient logistics for ultimate customer satisfaction. Empowering businesses and
                                consumers alike in the digital marketplace.
                            </p>
                            <div className="flex gap-4">
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Video</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Details</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-black rounded-lg px-5">
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                    </div>
                    <div className="relative grid grid-cols-2 w-full h-full bg-black hover:bg-transparent rounded-lg px-5 py-10 z-10 transition duration-500 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img
                                width={200}
                                height={200}
                                src="https://manasviportfolio.online/static/media/hotel.a814f46366181d78816d.png"
                                alt="HOTEL MANAGEMENT SYSTEM"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col gap-4 text-white">
                            <h1 className="text-2xl font-bold capitalize text-[#2b7a78]">HOTEL MANAGEMENT SYSTEM</h1>
                            <p className="text-center">
                                Run your hotel freely now, manage multiple branches with one website, human recourse management system , online as well as offline room & food booking system , get analytical reports                            </p>
                            <div className="flex gap-4">
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Video</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Details</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-black rounded-lg px-5">
                    <div className="absolute inset-0 flex justify-center items-center ">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                    </div>
                    <div className="relative grid grid-cols-2 w-full h-full bg-black hover:bg-transparent rounded-lg px-5 py-10 z-10 transition duration-500 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img
                                width={200}
                                height={200}
                                src="https://manasviportfolio.online/static/media/restaurnet.fbf24ed567004a2dfbf8.png"
                                alt="RESTAURANT MANAGEMENT SYSTEM"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col gap-4 text-white">
                            <h1 className="text-2xl font-bold capitalize text-[#2b7a78]">RESTAURANT MANAGEMENT SYSTEM</h1>
                            <p className="text-center">
                                Run your restaurant freely now, manage multiple branch with one website, human recourse management system, online food booking system, manage point of sale, get analytical reports.
                            </p>
                            <div className="flex gap-4">
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Video</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Details</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-black rounded-lg px-5">
                    <div className="absolute inset-0 flex justify-center items-center ">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                    </div>
                    <div className="relative grid grid-cols-2 w-full h-full bg-black hover:bg-transparent rounded-lg px-5 py-10 z-10 transition duration-500 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img
                                width={200}
                                height={200}
                                src="https://manasviportfolio.online/static/media/clinic.1c340a09b09f367966f7.png"
                                alt="CLINIC MANAGEMENT SYSTEM"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col gap-4 text-white">
                            <h1 className="text-2xl font-bold capitalize text-[#2b7a78]">CLINIC MANAGEMENT SYSTEM</h1>
                            <p className="text-center">
                                Amazing product for all our doctors, manage your clinic like never before,Easy and handy to work, take and manage appointment, patient & doctor, also generate tax invoice.                            </p>
                            <div className="flex gap-4">
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Video</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Details</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-black rounded-lg px-5">
                    <div className="absolute inset-0 flex justify-center items-center ">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                    </div>
                    <div className="relative grid grid-cols-2 w-full h-full bg-black hover:bg-transparent rounded-lg px-5 py-10 z-10 transition duration-500 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img
                                width={200}
                                height={200}
                                src="https://manasviportfolio.online/static/media/tiffin%20logo.a40195ba6f20435a0c69.png"
                                alt="TIFFIN MANAGEMENT SYSTEM"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col gap-4 text-white">
                            <h1 className="text-2xl font-bold capitalize text-[#2b7a78]">TIFFIN MANAGEMENT SYSTEM</h1>
                            <p className="text-center">
                                Now get full control on incoming and outgoing of your Tiffin’s , get all information about pending payments etc. get all subscribers list with address and mode of distribution at one place.
                            </p>
                            <div className="flex gap-4">
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Video</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Details</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-black rounded-lg px-5">
                    <div className="absolute inset-0 flex justify-center items-center ">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                    </div>
                    <div className="relative grid grid-cols-2 w-full h-full bg-black hover:bg-transparent rounded-lg px-5 py-10 z-10 transition duration-500 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img
                                width={200}
                                height={200}
                                src="https://manasviportfolio.online/static/media/saloon.f42aa85a686aa68ecb05.png"
                                alt="TIFFIN MANAGEMENT SYSTEM"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col gap-4 text-white">
                            <h1 className="text-2xl font-bold capitalize text-[#2b7a78]">SALON MANAGEMENT SYSTEM</h1>
                            <p className="text-center">
                                Book appointment online, gives your customer out of the box experience, also add products which customer can buy online, create tax invoice with ease, get all your customer data at one place.                            </p>
                            <div className="flex gap-4">
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Video</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Details</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-black rounded-lg px-5">
                    <div className="absolute inset-0 flex justify-center items-center ">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                    </div>
                    <div className="relative grid grid-cols-2 w-full h-full bg-black hover:bg-transparent rounded-lg px-5 py-10 z-10 transition duration-500 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img
                                width={200}
                                height={200}
                                src="https://manasviportfolio.online/static/media/pharmecy.6d9fd1f05da31b6cefe4.png"
                                alt="PHARMACY MANAGEMENT SYSTEM"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col gap-4 text-white">
                            <h1 className="text-2xl font-bold capitalize text-[#2b7a78]">PHARMACY MANAGEMENT SYSTEM</h1>
                            <p className="text-center">
                                Now running pharmacy is just like drinking a cup of tea with our PMS, easy control on inventory with various features, human resource management system, accounting management, supplier & customer management, create easy tax invoice
                            </p>
                            <div className="flex gap-4">
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Video</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Details</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-black rounded-lg px-5">
                    <div className="absolute inset-0 flex justify-center items-center ">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                    </div>
                    <div className="relative grid grid-cols-2 w-full h-full bg-black w-full h-full hover:bg-transparent rounded-lg px-5 py-10 z-10 transition duration-500 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img
                                width={200}
                                height={200}
                                src="https://manasviportfolio.online/static/media/hospital.2aa73a2a7fa2f4be03a9.png"
                                alt="HOSPITAL MANAGEMENT SYSTEM"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col gap-4 text-white">
                            <h1 className="text-2xl font-bold capitalize text-[#2b7a78]">HOSPITAL MANAGEMENT SYSTEM</h1>
                            <p className="text-center">
                                Hospital Management System streamlines healthcare operations, facilitating patient management, scheduling, billing, and resource allocation for efficient, organized, and patient-centered medical services.                            </p>
                            <div className="flex gap-4">
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Video</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Details</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-black rounded-lg px-5">
                    <div className="absolute inset-0 flex justify-center items-center ">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                    </div>
                    <div className="relative grid grid-cols-2 w-full h-full bg-black hover:bg-transparent rounded-lg px-5 py-10 z-10 transition duration-500 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img
                                width={200}
                                height={200}
                                src="https://manasviportfolio.online/static/media/Travels.8da6dad732f115ef84b8.png"
                                alt="TRAVEL MANAGEMENT SYSTEM"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col gap-4 text-white">
                            <h1 className="text-2xl font-bold capitalize text-[#2b7a78]">TRAVEL MANAGEMENT SYSTEM</h1>
                            <p className="text-center">
                                Travel Management System optimizes travel operations, simplifying itinerary management, scheduling, billing, and resource allocation for efficient, organized, and traveler-centric services.                            </p>
                            <div className="flex gap-4">
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Video</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Details</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-black rounded-lg px-5">
                    <div className="absolute inset-0 flex justify-center items-center ">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                    </div>
                    <div className="relative grid grid-cols-2 w-full h-full bg-black hover:bg-transparent rounded-lg px-5 py-10 z-10 transition duration-500 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img
                                width={200}
                                height={200}
                                src="https://manasviportfolio.online/static/media/hrm.3d904a2fa69d95da607d.png"
                                alt="HRM & CRM"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col gap-4 text-white">
                            <h1 className="text-2xl font-bold capitalize text-[#2b7a78]">HRM & CRM</h1>
                            <p className="text-center">
                            HRM software streamlines employee management, from recruitment to development, enhancing productivity and ensuring efficient HR operations for your business.                            </p>
                            <div className="flex gap-4">
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Video</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Details</button>
                                <button className="text-xl text-white py-2 px-4 bg-[#3AAFA9] rounded-full">Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products