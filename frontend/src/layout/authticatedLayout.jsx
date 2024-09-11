import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthenticatedLayout = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/login'); // Redirect to login if no token is found
        }
    }, [navigate]);

    return (
        <div>
            {children}
        </div>
    );
};

export default AuthenticatedLayout;