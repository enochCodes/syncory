// DiscoverEventsPage.jsx
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import EventCard from '../../components/EventCard';
import { getEvents } from '../../api/eventsApi';

const DiscoverEventsPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getEvents();
                console.log('Fetched events:', data); // Log the fetched events
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="relative  bg-gradient-to-b from-orange-400 to-yellow-300 text-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Discover Events Near You</h1>
                    <p className="text-lg mb-10">Find and join the best events happening around you.</p>
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search events by name, category, or location"
                            className="w-full px-6 py-3 text-black rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="absolute right-0 top-0 mt-2 mr-3 bg-black text-white p-3 rounded-full hover:bg-orange-600 transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m0 0a7 7 0 1111.663 1.337A7 7 0 0115 15z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="sticky top-0 bg-white shadow-md py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex space-x-4 overflow-x-auto">
                        {/* Example of filter chips/tags */}
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-200">All</button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-200">Concerts</button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-200">Workshops</button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-200">Tech Talks</button>
                    </div>
                    <div className="flex space-x-4">
                        <select className="px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none">
                            <option>Sort by Date</option>
                            <option>Sort by Popularity</option>
                        </select>
                        <select className="px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none">
                            <option>Location</option>
                            <option>New York</option>
                            <option>San Francisco</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Event Cards Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    {loading ? (
                        <p>Loading events...</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEvents.map(event => (
                                <EventCard
                                    key={event.id}
                                    title={event.title}
                                    date={event.date}
                                    location={event.location}
                                    description={event.description}
                                    thumbnail={`http://localhost:4000/${event.thumbnail}`}
                                    price={event.price}
                                />
                            ))}
                        </div>
                    )}

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-400 transition duration-200">
                            Load More Events
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DiscoverEventsPage;