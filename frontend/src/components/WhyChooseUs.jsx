import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faSearch, faTools, faLock } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from 'react';

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <section className="bg-yellow-500 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div data-aos="fade-up" data-aos-delay="100">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faCalendarCheck} size="3x" className="text-white mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-white">Create Events Easily</h3>
                        <p className="text-white">Organize events with ease using our tools.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faSearch} size="3x" className="text-white mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-white">Discover Amazing Events</h3>
                        <p className="text-white">Find and join events that match your interests.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faTools} size="3x" className="text-white mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-white">Organizer Tools</h3>
                        <p className="text-white">Manage your events and attendees efficiently.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faLock} size="3x" className="text-white mx-auto" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-white">Secure Payments</h3>
                        <p className="text-white">Process payments safely and securely.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
