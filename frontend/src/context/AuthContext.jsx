import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode'; // Correct import statement
import { getUserProfile } from '../api/authApi';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('authToken');
            if (token) {
                try {
                    const decodedToken = jwtDecode(token);
                    const userData = await getUserProfile(token);
                    setUser({
                        ...userData,
                        id: decodedToken.userId, // Assuming the token contains a userId field
                        email: decodedToken.email, // Assuming the token contains an email field
                        // Add other fields as necessary
                    });
                } catch (error) {
                    console.error('Error fetching user profile:', error);
                    localStorage.removeItem('authToken');
                    navigate('/login');
                }
            }
        };
        fetchUser();
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};