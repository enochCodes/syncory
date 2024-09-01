import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Logo */}
                    <div className="w-full sm:w-auto mb-6 sm:mb-0">
                        <h2 className="text-3xl font-bold text-yellow-500">Syncory</h2>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap space-x-6 mb-6 sm:mb-0">
                        <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
                        <Link to="/discover" className="hover:text-yellow-500 transition-colors">Discover Events</Link>
                        <Link to="/create" className="hover:text-yellow-500 transition-colors">Create an Event</Link>
                        <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition-colors">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition-colors">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition-colors">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-700" />

                {/* Copyright Info */}
                <div className="text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Syncory. All Rights Reserved.</p>
                    <p className="mt-2">
                        <Link to="/terms" className="hover:text-yellow-500 transition-colors">Terms of Service</Link> |{' '}
                        <Link to="/privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
