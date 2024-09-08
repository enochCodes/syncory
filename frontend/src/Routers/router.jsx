import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage';
import DiscoverEvents from '../pages/events/DiscoverEvents';
import CreateEvent from '../pages/events/CreateEvents';
import LoginPage from '../pages/Auth/Login';
import SignUpPage from '../pages/Auth/Signup';
import ForgotPage from '../pages/Auth/ForgotPassword';
// import OrganizerDashboard from "../pages/Dashboard/OrganizerDashboard";
// import AttendeeDashboard from "../pages/Dashboard/AttendeeDashboard";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/discover" element={<DiscoverEvents />} />
                <Route path="/create" element={<CreateEvent />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/forgot-password" element={<ForgotPage/>}/>
                {/* <Route path="/organizer-Dashbord" element={<OrganizerDashboard />} />
                <Route path="/Dashbord" element={<AttendeeDashboard/>}/> */}

            </Routes>
        </Router>
    );
};

export default AppRoutes;
