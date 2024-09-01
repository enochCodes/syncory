const DashboardHeader = ({ title }) => {
    return (
        <header className="bg-white shadow p-6 mb-8">
            <h1 className="text-3xl font-bold">{title}</h1>
        </header>
    );
};

export default DashboardHeader;
