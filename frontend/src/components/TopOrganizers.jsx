import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from 'react-icons/fa';

const TopOrganizers = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">Top <span className="text-yellow-500">Organizers</span></h2>
                <div className="relative flex space-x-8 overflow-x-auto snap-x scrollbar-hide" data-aos="fade-up" data-aos-delay="100">
                    {/* Example Organizer Profile */}
                    <div className="flex-shrink-0 bg-gray-800 rounded-lg shadow-lg p-6 mx-2 transform hover:scale-105 transition duration-300 ease-in-out snap-center">
                        <img src="/path/to/organizer.jpg" alt="Organizer" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Organizer Name</h3>
                        <p className="text-sm text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="flex justify-center space-x-1 text-yellow-400">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                    </div>
                    {/* Repeat for more organizers */}
                </div>
            </div>
        </section>
    );
};

export default TopOrganizers;
