import { useState } from 'react';
import InputField from '../../components/Auth/InputField';
import AuthButton from '../../components/Auth/AuthButton';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/tailwind.css';
import { registerUser } from '../../api/authApi';

const Signup = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('attendee'); // Default role set to 'user'
    const [brandName, setBrandName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleNameInputChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordInputChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRoleInputChange = (e) => {
        setRole(e.target.value);
    };

    const handleBrandNameInputChange = (e) => {
        setBrandName(e.target.value);
    };

    const handleDescriptionInputChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await registerUser({
                username,
                email,
                password,
                role,
                brandName: role === 'organizer' ? brandName : null,
                description: role === 'organizer' ? description : null
            });
            console.log('Registration successful:', data);
            navigate('/login'); // Redirect to the login page
        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message);
            setError('Registration failed. Please check your details and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-400 to-yellow-300">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-orange-600">Syncory</h1>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-orange-600">Login!</Link>
                </p>
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <InputField
                        type="text"
                        placeholder="UserName"
                        value={username}
                        onChange={handleNameInputChange}
                    />
                    <InputField
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailInputChange}
                    />
                    <InputField
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordInputChange}
                    />
                    <div className="mt-4">
                        <label className="block text-gray-700">Role</label>
                        <select
                            value={role}
                            onChange={handleRoleInputChange}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600"
                        >
                            <option value="attendee">attendee</option>
                            <option value="organizer">Organizer</option>
                        </select>
                    </div>
                    {role === 'organizer' && (
                        <>
                            <InputField
                                type="text"
                                placeholder="Brand Name"
                                value={brandName}
                                onChange={handleBrandNameInputChange}
                            />
                            <InputField
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={handleDescriptionInputChange}
                            />
                        </>
                    )}
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    <AuthButton text={loading ? "Signing up..." : "Sign Up"} disabled={loading} onClick={handleSubmit} />
                    <div className="flex items-center justify-center mt-4">
                        <AuthButton text="Sign up with Google" isGoogle />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;