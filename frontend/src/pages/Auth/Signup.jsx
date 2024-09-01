import InputField from './InputField';
import AuthButton from './AuthButton';
import { Link } from 'react-router-dom';
import '../../assets/styles/tailwind.css';


const Signup = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-400 to-yellow-300">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-orange-600">Syncory</h1>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-orange-600">Login!</Link>
                </p>
                <form className="mt-6 space-y-4">
                    <InputField type="text" placeholder="Name" />
                    <InputField type="email" placeholder="Email" />
                    <InputField type="password" placeholder="Password" />
                    <AuthButton text="Sign up now" />
                    <div className="flex items-center justify-center mt-4">
                        <AuthButton text="Sign up with Google" isGoogle />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
