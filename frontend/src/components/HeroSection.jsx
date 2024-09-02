const HeroSection = () => {
    return (
        <section className="bg-hero-pattern bg-cover bg-center h-screen flex flex-col justify-center text-white relative">
            <div className="container mx-auto px-6 text-center">
                <h1
                    className="text-6xl font-extrabold mb-6 leading-tight shadow-md animate-fade-in-down"
                >
                    Discover, create,<br /> and join amazing <br />events on your way.
                </h1>
                <p
                    className="text-2xl mb-12 text-gray-200 animate-fade-in-up delay-1"
                >
                    Sync Your Events, Craft Your Stories.
                </p>
                <div className="flex justify-center max-w-lg mx-auto animate-bounce-in-up delay-2">
                    <input
                        type="text"
                        className="w-full px-5 py-3 text-black rounded-l-full focus:outline-none shadow-lg  bg-white"
                        placeholder="Search events"
                    />
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-r-full font-semibold hover:bg-orange-600 shadow-lg transition-all duration-300">
                        Find Events!
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
};

export default HeroSection;
