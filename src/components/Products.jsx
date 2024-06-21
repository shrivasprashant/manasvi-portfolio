import React from 'react'

const Products = () => {
    return (
        <div className='px-5 py-10 bg-[#2b7a78]'>
            <h1>Products</h1>
            <div className="grid grid-cols-2 px-5 py-10 gap-20">
                <div className="relative bg-black rounded-lg px-5">
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                    </div>
                    <div className="relative grid grid-cols-2 bg-black hover:bg-transparent rounded-lg px-5 py-10 z-10 transition duration-500 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img
                                width={200}
                                height={200}
                                src="https://manasviportfolio.online/static/media/e-commerce.cbd7fa0beb1b8b08d701.png"
                                alt="E-Commerce"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col gap-4 text-white">
                            <h1 className="text-4xl font-bold capitalize text-[#2b7a78]">E-COMMERCE</h1>
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
                    <div className="absolute inset-0 flex justify-center items-center ">
                        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                    </div>
                    <div className="relative grid grid-cols-2 bg-black hover:bg-transparent rounded-lg px-5 py-10 z-10 transition duration-500 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img
                                width={200}
                                height={200}
                                src="https://manasviportfolio.online/static/media/e-commerce.cbd7fa0beb1b8b08d701.png"
                                alt="E-Commerce"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col gap-4 text-white">
                            <h1 className="text-4xl font-bold capitalize text-[#2b7a78]">E-COMMERCE</h1>
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
            </div>
        </div>
    )
}

export default Products