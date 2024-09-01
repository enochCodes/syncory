import InputField from './InputField';
import AuthButton from './AuthButton';
import { Link } from 'react-router-dom';
import '../../assets/styles/tailwind.css';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-400 to-yellow-300">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-orange-600">Syncory</h1>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account? <Link to="/signup" className="text-orange-600">Create a new account now!</Link>
                </p>
                <form className="mt-6">
                    <InputField type="email" placeholder="Email/Username" />
                    <InputField type="password" placeholder="Password" />
                    <AuthButton text="Login now" />
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
