const EventCard = ({ title, date, location, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{date}</p>
            <p className="text-gray-600 mb-4">{location}</p>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default EventCard;
