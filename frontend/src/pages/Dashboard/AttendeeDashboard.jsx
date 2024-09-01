import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardHeader from '../../components/DashboardHeader';
import EventCard from '../../components/EventCard';

const AttendeeDashboard = () => {
    return (
        <div className="flex">
            <DashboardSidebar role="Attendee" />
            <div className="flex-1 p-6">
                <DashboardHeader title="My Events" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example Event Cards */}
                    <EventCard title="Art Workshop" date="5th Jan 2025" location="Los Angeles" description="A workshop on modern art techniques." />
                    <EventCard title="Charity Run" date="20th Feb 2025" location="Chicago" description="A charity run event for a good cause." />
                    {/* Add more event cards as needed */}
                </div>
            </div>
        </div>
    );
};

export default AttendeeDashboard;
