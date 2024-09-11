import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import { Link } from "react-router-dom";


const EventCard = ({ title, date, location, description, thumbnail, price }) => {
    const isFree = price === 0;

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <div className="relative">
                {thumbnail ? (
                    <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
                ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No Image Available</span>
                    </div>
                )}
                <span className={`absolute top-2 left-2 text-white text-sm px-3 py-1 rounded-full ${isFree ? 'bg-yellow-500' : 'bg-yellow-500'}`}>
                    {isFree ? 'FREE' : 'PAID'}
                </span>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <div className="text-sm text-gray-600 mb-4">
                    <div className="flex items-center mb-2">
                        <FaCalendarAlt className="text-yellow-600 mr-2" />
                        {new Date(date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center mb-2">
                        <FaMapMarkerAlt className="text-yellow-600 mr-2" />
                        {location}
                    </div>
                    {!isFree && (
                        <div className="flex items-center mb-2">
                            <FaDollarSign className="text-yellow-600 mr-2" />
                            <span>{price}</span>
                        </div>
                    )}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
                <button className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors">
                    <Link to="/event" className="block w-full h-full text-center">
                        View Details
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default EventCard;
