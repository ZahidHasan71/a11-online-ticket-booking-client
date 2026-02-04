import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const PopularRoutes = () => {
    const routes = [
        { from: "Dhaka", to: "Chittagong", trips: "50+ trips" },
        { from: "Dhaka", to: "Sylhet", trips: "40+ trips" },
        { from: "Dhaka", to: "Cox's Bazar", trips: "35+ trips" },
        { from: "Dhaka", to: "Khulna", trips: "30+ trips" },
    ];

    return (
        <section className="bor py-12 px-4">
            <div className="max-w-5xl mx-auto text-center mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    Popular Routes
                </h2>
                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
                    Most traveled routes by our customers
                </p>
            </div>

            {/* Responsive Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                {routes.map((route, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center 
                       transition transform hover:-translate-y-2 hover:shadow-2xl border border-primary cursor-pointer"
                    >
                        <FaMapMarkerAlt className="text-primary text-4xl mb-4 transition-colors" />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">
                            {route.from} → {route.to}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            {route.trips}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularRoutes;