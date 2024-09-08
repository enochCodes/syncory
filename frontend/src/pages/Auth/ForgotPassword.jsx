import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../../components/Auth/InputField';
import AuthButton from '../../components/Auth/AuthButton';
import { FiMail } from 'react-icons/fi';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlePasswordReset = () => {
        // Logic for handling password reset
        setMessage('If the email you provided is registered, you will receive a password reset link.');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Forgot Password</h2>
                <p className="text-sm text-gray-600 text-center mb-8">Enter your email address and we'll send you a link to reset your password.</p>

                <div className="mb-4">
                    <div className="relative">
                        <InputField
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FiMail className="absolute inset-y-0 right-4 flex items-center text-gray-400" size={20} />
                    </div>
                </div>

                {message && (
                    <p className="text-sm text-green-500 text-center mb-4">
                        {message}
                    </p>
                )}

                <AuthButton text="Send Reset Link" onClick={handlePasswordReset} />

                <div className="text-center mt-6">
                    <Link to="/login" className="text-sm text-orange-500 hover:text-orange-600 transition-colors">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
