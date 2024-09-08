import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUserProfile } from '../api/authApi'; // Import the getUserProfile function

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    // Determine if the current route should have a transparent header
    const isTransparent = location.pathname === "/" && !isScrolled;

    // Handle scroll to change background color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fetch user profile if token exists
    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('authToken');
            if (token) {
                try {
                    const userData = await getUserProfile(token);
                    setUser(userData);
                } catch (error) {
                    console.error('Error fetching user profile:', error);
                    localStorage.removeItem('authToken');
                    navigate('/login');
                }
            }
        };

        fetchUser();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Remove token from localStorage
        setUser(null);
        navigate('/login'); // Redirect to login page
    };

    return (
        <header
            className={`fixed w-full z-50 transition-colors duration-300 ${isTransparent ? "bg-transparent" : "bg-black shadow-lg"
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-3xl font-bold text-white">
                    <Link to="/">Syncory</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link to="/" className="text-white hover:text-orange-400 transition-colors">
                        Home
                    </Link>
                    <Link to="/discover" className="text-white hover:text-orange-400 transition-colors">
                        Discover Events
                    </Link>
                    <Link to="/create" className="text-white hover:text-orange-400 transition-colors">
                        Create an Event
                    </Link>
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                    {user ? (
                        <>
                            <Link to="/profile" className="text-white hover:text-orange-400 transition-colors">
                                {user.username}
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login">
                            <button className="bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors">
                                Sign In
                            </button>
                        </Link>
                    )}
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-gray-900 text-center text-white">
                    <Link
                        to="/"
                        className="block py-2 text-white hover:text-orange-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/discover"
                        className="block py-2 text-white hover:text-orange-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Discover Events
                    </Link>
                    <Link
                        to="/create"
                        className="block py-2 text-white hover:text-orange-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Create an Event
                    </Link>
                    {user ? (
                        <>
                            <Link
                                to="/profile"
                                className="block py-2 text-white hover:text-orange-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {user.name}
                            </Link>
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsMenuOpen(false);
                                }}
                                className="block py-2 bg-yellow-500 text-black mt-2 rounded-md font-semibold mx-4 hover:bg-yellow-600 transition-colors"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="block py-2 bg-yellow-500 text-black mt-2 rounded-md font-semibold mx-4 hover:bg-yellow-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                    )}
                </nav>
            )}
        </header>
    );
};

export default Header;