const PromoteEventCard = ({ title, date, promoteAction }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{date}</p>
            <button onClick={promoteAction} className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors">
                Promote Event
            </button>
        </div>
    );
};

export default PromoteEventCard;
