import React from 'react';

const Products = () => {
    return (
        <div className='px-5 py-10 bg-[#2b7a78]'>
            <h1 className='text-black text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold'>OUR PRODUCTS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 py-10">
                {products.map((product) => (
                    <div key={product.title} className="relative bg-black rounded-lg px-5 py-10">
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-[#2b7a78] to-[#3AAFA9] blur-3xl opacity-30"></div>
                        </div>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 w-full h-full bg-black hover:bg-transparent rounded-lg z-10 transition duration-500 ease-in-out">
                            <div className="flex justify-center items-center">
                                <img
                                    width={160}
                                    height={220}
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex justify-center items-center flex-col gap-4 text-white p-5">
                                <h1 className="text-xl sm:text-2xl font-bold capitalize text-[#2b7a78]">{product.title}</h1>
                                <p className="text-center text-sm sm:text-base">{product.description}</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {product.buttons.map((button) => (
                                        <button key={button.text} className="text-md text-white py-2 px-3 bg-[#3AAFA9] rounded-full">
                                            {button.text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const products = [
    {
        title: 'E-COMMERCE',
        imageSrc: 'https://manasviportfolio.online/static/media/e-commerce.cbd7fa0beb1b8b08d701.png',
        imageAlt: 'E-Commerce',
        description: 'Revolutionizing retail with seamless online shopping experience. Integrating user-friendly interface, secure transactions, and efficient logistics for ultimate customer satisfaction. Empowering businesses and consumers alike in the digital marketplace.',
        buttons: [
            { text: 'Video' },
            { text: 'Details' },
            { text: 'Demo' },
        ],
    },
    {
        title: 'HOTEL MANAGEMENT SYSTEM',
        imageSrc: 'https://manasviportfolio.online/static/media/hotel.a814f46366181d78816d.png',
        imageAlt: 'HOTEL MANAGEMENT SYSTEM',
        description: 'Run your hotel freely now, manage multiple branches with one website, human recourse management system , online as well as offline room & food booking system , get analytical reports',
        buttons: [
            { text: 'Video' },
            { text: 'Details' },
            { text: 'Demo' },
        ],
    },
    {
        title: 'RESTAURANT MANAGEMENT SYSTEM',
        imageSrc: 'https://manasviportfolio.online/static/media/restaurnet.fbf24ed567004a2dfbf8.png',
        imageAlt: 'RESTAURANT MANAGEMENT SYSTEM',
        description: 'Run your restaurant freely now, manage multiple branch with one website, human recourse management system, online food booking system, manage point of sale, get analytical reports.',
        buttons: [
            { text: 'Video' },
            { text: 'Details' },
            { text: 'Demo' },
        ],
    },
    {
        title: 'CLINIC MANAGEMENT SYSTEM',
        imageSrc: 'https://manasviportfolio.online/static/media/clinic.1c340a09b09f367966f7.png',
        imageAlt: 'CLINIC MANAGEMENT SYSTEM',
        description: 'Amazing product for all our doctors, manage your clinic like never before, Easy and handy to work, take and manage appointment, patient & doctor, also generate tax invoice.',
        buttons: [
            { text: 'Video' },
            { text: 'Details' },
            { text: 'Demo', link: 'https://cliniccare.online/' },
        ],
    },
    {
        title: 'TIFFIN MANAGEMENT SYSTEM',
        imageSrc: 'https://manasviportfolio.online/static/media/tiffin%20logo.a40195ba6f20435a0c69.png',
        imageAlt: 'TIFFIN MANAGEMENT SYSTEM',
        description: 'Now get full control on incoming and outgoing of your Tiffin’s , get all information about pending payments etc. get all subscribers list with address and mode of distribution at one place.',
        buttons: [
            { text: 'Video' },
            { text: 'Details' },
            { text: 'Demo' },
        ],
    },
    {
        title: 'SALON MANAGEMENT SYSTEM',
        imageSrc: 'https://manasviportfolio.online/static/media/saloon.f42aa85a686aa68ecb05.png',
        imageAlt: 'SALON MANAGEMENT SYSTEM',
        description: 'Book appointment online, gives your customer out of the box experience, also add products which customer can buy online, create tax invoice with ease, get all your customer data at one place.',
        buttons: [
            { text: 'Video' },
            { text: 'Details' },
            { text: 'Demo' },
        ],
    },
    {
        title: 'HOSPITAL MANAGEMENT SYSTEM',
        imageSrc: 'https://manasviportfolio.online/static/media/hospital.2aa73a2a7fa2f4be03a9.png',
        imageAlt: 'HOSPITAL MANAGEMENT SYSTEM',
        description: 'Hospital Management System streamlines healthcare operations, facilitating patient management, scheduling, billing, and resource allocation for efficient, organized, and patient-centered medical services.',
        buttons: [
            { text: 'Video' },
            { text: 'Details' },
            { text: 'Demo' },
        ],
    },
    {
        title: 'TRAVEL MANAGEMENT SYSTEM',
        imageSrc: 'https://manasviportfolio.online/static/media/Travels.8da6dad732f115ef84b8.png',
        imageAlt: 'TRAVEL MANAGEMENT SYSTEM',
        description: 'Travel Management System optimizes travel operations, simplifying itinerary management, scheduling, billing, and resource allocation for efficient, organized, and traveler-centric services.',
        buttons: [
            { text: 'Video' },
            { text: 'Details' },
            { text: 'Demo' },
        ],
    },
    {
        title: 'HRM & CRM',
        imageSrc: 'https://manasviportfolio.online/static/media/hrm.3d904a2fa69d95da607d.png',
        imageAlt: 'HRM & CRM',
        description: 'HRM software streamlines employee management, from recruitment to development, enhancing productivity and ensuring efficient HR operations for your business.',
        buttons: [
            { text: 'Video' },
            { text: 'Details' },
            { text: 'Demo' },
        ],
    },
];

export default Products;
