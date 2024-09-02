// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

const CreateEventPage = () => {
    // const navigate = useNavigate();
    // const [isLoggedIn] = useState(false); // Placeholder, replace with actual authentication logic

    // // Check if the user is not logged in, redirect to login
    // if (!isLoggedIn) {
    //     navigate('/login');
    //     return null; // Prevents the rest of the page from rendering
    // }

    return (
        <>
            <Header />
            <div className="container mx-auto py-16 px-6">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8">Create Your Event</h1>
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">
                                Event Title
                            </label>
                            <input
                                type="text"
                                placeholder="Enter event title"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500  bg-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">
                                Date & Time
                            </label>
                            <input
                                type="datetime-local"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500  bg-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">
                                Location
                            </label>
                            <input
                                type="text"
                                placeholder="Enter event location"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500  bg-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">
                                Capacity
                            </label>
                            <input
                                type="number"
                                placeholder="Enter event capacity"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500  bg-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">
                                Category
                            </label>
                            <select className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500  bg-white">
                                <option value="">Select a category</option>
                                <option value="music">Music</option>
                                <option value="sports">Sports</option>
                                <option value="education">Education</option>
                                <option value="technology">Technology</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-600 text-sm font-medium">
                                Description
                            </label>
                            <textarea
                                placeholder="Describe your event"
                                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500  bg-white"
                                rows="5"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition duration-200"
                            >
                                Create Event
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateEventPage;
