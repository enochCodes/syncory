import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import page components
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/loginPage';
import SignupPage from './pages/signupPage/signupPage';
import AttendeeDashboard from './pages/Dashboard/AttendeeDashboard';
import OrganizerDashboard from './pages/Dashboard/OrganizerDashboard';

function AppRoutes() {
  return (
    // Routes component contains all Route definitions
    <Routes>
      {/* Route for the Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Route for the Login Page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Route for the Signup Page */}
      <Route path="/signup" element={<SignupPage />} />

      {/* Route for the Attendee Dashboard */}
      <Route path="/dashboard/attendee" element={<AttendeeDashboard />} />

      {/* Route for the Organizer Dashboard */}
      <Route path="/dashboard/organizer" element={<OrganizerDashboard />} />

      {/* Optional: Catch-all route for undefined paths (404 Not Found) */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;
