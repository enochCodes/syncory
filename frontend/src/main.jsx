import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routers/routes';
import './index.css';
import './app.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
);
