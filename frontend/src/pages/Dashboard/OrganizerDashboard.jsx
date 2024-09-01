import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardHeader from '../../components/DashboardHeader';
import EventCard from '../../components/EventCard';
import PromoteEventCard from '../../components/PromoteEventCard';

const OrganizerDashboard = () => {
    return (
        <div className="flex">
            <DashboardSidebar role="Organizer" />
            <div className="flex-1 p-6">
                <DashboardHeader title="Manage Your Events" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example Event Cards */}
                    <EventCard title="Music Concert" date="12th Dec 2024" location="New York" description="A live concert with popular artists." />
                    <EventCard title="Tech Conference" date="25th Jan 2025" location="San Francisco" description="A conference on the latest in tech." />
                    <PromoteEventCard title="Sports Meet" date="15th Nov 2024" promoteAction={() => alert('Event Promoted!')} />
                    {/* Add more event cards as needed */}
                </div>
            </div>
        </div>
    );
};

export default OrganizerDashboard;
