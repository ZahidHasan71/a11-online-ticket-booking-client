import React from 'react';
import { FaClock, FaLock, FaHeadset } from "react-icons/fa";


const Choose = () => {
    return (
        <div >
            <section className="bg-[#F2F7FA] py-12 px-4 my-5">
                <div className="max-w-6xl mx-auto text-center mb-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                        Why Choose TicketBari?
                    </h2>
                    <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        We provide the best travel booking experience with customer-first approach
                    </p>
                </div>

                {/* Responsive grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {/* Quick Booking */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <FaClock className="text-blue-600 text-4xl mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Quick Booking</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Book your tickets in just a few clicks. Fast, simple, and convenient.
                        </p>
                    </div>

                    {/* Secure Payment */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <FaLock className="text-primary text-4xl mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Secure Payment</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Your transactions are protected with advanced encryption technology.
                        </p>
                    </div>

                    {/* 24/7 Support */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <FaHeadset className="text-blue-600 text-4xl mb-4" />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Our customer support team is always ready to assist you anytime.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Choose;