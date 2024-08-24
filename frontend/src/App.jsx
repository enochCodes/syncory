import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Import global components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Import the routing definitions
import AppRoutes from './routes';

function App() {
  return (
    // BrowserRouter provides the routing context to the entire app
    <BrowserRouter>
      {/* Navbar will be displayed on all pages */}
      <Navbar />

      {/* AppRoutes contains all the Route components */}
      <AppRoutes />

      {/* Footer will be displayed on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
