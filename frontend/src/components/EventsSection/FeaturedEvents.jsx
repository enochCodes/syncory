import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const FeaturedEvents = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-12 text-gray-800" data-aos="fade-up">
                    Featured <span className="text-yellow-600">Events</span>
                </h2>
                <div className="flex justify-center items-center mb-12">
                    <hr className="w-16 border-b-2 border-gray-300" />
                    <span className="mx-4 text-2xl">&#128081;</span> {/* Crown Emoji */}
                    <hr className="w-16 border-b-2 border-gray-300" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Example Event Card */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                        <div className="relative">
                            <img src="/path/to/event.jpg" alt="Event" className="w-full h-48 object-cover" />
                            <span className="absolute top-2 left-2 bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">
                                FREE
                            </span>
                        </div>
                        <div className="p-6">
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

export default FeaturedEvents;
