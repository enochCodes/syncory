import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EventCard from "../EventCard";

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
                    <EventCard
                        title="Dawit Dreams Motivation Spike"
                        date="August 22, 2024"
                        location="Bola, Addis Ababa"
                        description="Join us for an inspiring event with Dawit Dreams."
                        thumbnail="/path/to/event.jpg"
                        price={0} // Assuming 0 means FREE
                    />
                    {/* Repeat for more events */}
                </div>
            </div>
        </section>
    );
};

export default FeaturedEvents;
