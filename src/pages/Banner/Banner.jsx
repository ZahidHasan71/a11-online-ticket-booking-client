import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from '../../assets/slider/slider1.jpg';
import slider2 from '../../assets/slider/slider2.jpg';
import slider3 from '../../assets/slider/slider3.jpg';

const Banner = () => {
    return (
        <div className="relative">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={4000}
            >
                {/* Slide 1 */}
                <div className="relative">
                    <img src={slider1} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4">
                        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                            Safe & Secure Journey
                        </h2>
                        <p className="max-w-xl text-center mb-6 text-sm sm:text-base md:text-lg">
                            Travel with confidence and peace of mind. Your safety is our priority.
                        </p>
                        <button className="btn btn-primary text-sm sm:text-base">
                            Start Booking →
                        </button>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="relative ">
                    <img src={slider2} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4">
                        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                            Explore New Destinations
                        </h2>
                        <p className="max-w-xl text-center mb-6 text-sm sm:text-base md:text-lg">
                            Discover breathtaking views and unforgettable experiences.
                        </p>
                        <button className="btn btn-primary text-sm sm:text-base">
                            Start Booking →
                        </button>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="relative">
                    <img src={slider3} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4">
                        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                            Comfort & Safety First
                        </h2>
                        <p className="max-w-xl text-center mb-6 text-sm sm:text-base md:text-lg">
                            Enjoy your journey with top-notch service and care.
                        </p>
                        <button className="btn btn-primary text-sm sm:text-base">
                            Start Booking →
                        </button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;