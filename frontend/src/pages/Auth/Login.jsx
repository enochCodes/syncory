import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthButton from '../../components/Auth/AuthButton';
import { Link } from 'react-router-dom';
import { loginUser, storeAuthToken } from '../../api/authApi';
import '../../assets/styles/tailwind.css';
import InputField from '../../components/Auth/InputField';

const Login = () => {
    const [inputEmail, setEmail] = useState('');
    const [inputPassword, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleEmailInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordInputChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await loginUser(inputEmail, inputPassword);
            if (response.message === "Login successful") {
                storeAuthToken(response.token); // Assuming the token is in the response
                localStorage.setItem('authToken', response.token); // Store token in local storage
                navigate('/'); // Navigate to the dashboard or desired page
            } else {
                setError(response.message);
            }
        } catch (err) {
            setError('Login failed. Please try again.', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-400 to-yellow-300">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-orange-600">Syncory</h1>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don&apos;t have an account? <Link to="/signup" className="text-orange-600">Create a new account now!</Link>
                </p>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <InputField
                        type="email"
                        placeholder="Email/Username"
                        value={inputEmail}
                        onChange={handleEmailInputChange}
                    />
                    <InputField
                        type="password"
                        placeholder="Password"
                        value={inputPassword}
                        onChange={handlePasswordInputChange}
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    <AuthButton text={loading ? "Logging in..." : "Login now"} disabled={loading} onClick={handleSubmit} />
                    <div className="flex items-center justify-center mt-4">
                        <AuthButton text="Login with Google" isGoogle />
                    </div>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    <Link to="/forgot-password" className="text-gray-600">Forgot password? <span className="text-orange-600">Click here!</span></Link>
                </p>
            </div>
        </div>
    );
};

export default Login;