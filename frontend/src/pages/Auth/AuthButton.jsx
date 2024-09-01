import PropTypes from 'prop-types';
import '../../assets/styles/tailwind.css';

const AuthButton = ({ text, isGoogle, icon, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-full flex items-center justify-center px-4 py-2 mt-4 font-bold text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${isGoogle ? 'bg-orange-300 hover:bg-orange-400 text-black' : 'bg-black hover:bg-gray-800'}`}
        >
            {icon && (
                <span className="mr-2">
                    {icon}
                </span>
            )}
            {text}
        </button>
    );
};

AuthButton.propTypes = {
    text: PropTypes.string.isRequired,
    isGoogle: PropTypes.bool,
    icon: PropTypes.element,
    onClick: PropTypes.func,
};

AuthButton.defaultProps = {
    isGoogle: false,
    icon: null,
    onClick: () => { },
};

export default AuthButton;
