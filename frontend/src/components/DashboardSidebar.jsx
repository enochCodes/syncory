import { Link } from 'react-router-dom';

const DashboardSidebar = ({ role }) => {
    return (
        <aside className="w-64 bg-black text-white h-screen p-6">
            <h2 className="text-2xl font-bold mb-6">{role} Dashboard</h2>
            <nav>
                {role === 'Organizer' ? (
                    <>
                        <Link to="/dashboard/manage-events" className="block py-2 px-4 rounded hover:bg-gray-700">Manage Events</Link>
                        <Link to="/dashboard/assigned-events" className="block py-2 px-4 rounded hover:bg-gray-700">Assigned Events</Link>
                        <Link to="/dashboard/promote-events" className="block py-2 px-4 rounded hover:bg-gray-700">Promote Events</Link>
                    </>
                ) : (
                    <>
                        <Link to="/dashboard/create-event" className="block py-2 px-4 rounded hover:bg-gray-700">Create Event</Link>
                        <Link to="/dashboard/progress-events" className="block py-2 px-4 rounded hover:bg-gray-700">My Event Progress</Link>
                        <Link to="/dashboard/my-events" className="block py-2 px-4 rounded hover:bg-gray-700">My Registered Events</Link>
                        <Link to="/dashboard/tickets" className="block py-2 px-4 rounded hover:bg-gray-700">My Tickets</Link>
                    </>
                )}
            </nav>
        </aside>
    );
};

export default DashboardSidebar;
