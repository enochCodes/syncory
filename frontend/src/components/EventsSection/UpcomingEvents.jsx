import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const UpcomingEvents = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-800" data-aos="fade-up">
                    Upcoming Public <span className="text-yellow-600">Events</span>
                </h2>
                <p className="text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
                    Discover All Upcoming Addis Events. Upcoming Events in your location.
                </p>

                <div className="flex justify-center space-x-4 mb-12" data-aos="fade-up" data-aos-delay="200">
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors focus:outline-none focus:ring focus:ring-yellow-400">
                        All
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors focus:outline-none focus:ring focus:ring-yellow-400">
                        Concerts
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors focus:outline-none focus:ring focus:ring-yellow-400">
                        Conferences
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors focus:outline-none focus:ring focus:ring-yellow-400">
                        Workshops
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Example Event Card */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl" data-aos="fade-up" data-aos-delay="300">
                        <div className="relative">
                            <img src="/path/to/event.jpg" alt="Event" className="w-full h-48 object-cover" />
                            <span className="absolute top-2 left-2 bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">
                                FREE
                            </span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Dawit Dreams Motivation Spike</h3>
                            <div className="text-sm text-gray-600 mb-4">
                                <div className="flex items-center mb-2">
                                    <FaCalendarAlt className="text-yellow-600 mr-2" />
                                    August 22, 2024
                                </div>
                                <div className="flex items-center mb-2">
                                    <FaMapMarkerAlt className="text-yellow-600 mr-2" />
                                    Bola, Addis Ababa
                                </div>
                            </div>
                            <button className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>
                    {/* Repeat for more events */}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
