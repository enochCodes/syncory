import PropTypes from 'prop-types';
import '../../assets/styles/tailwind.css';


const AuthButton = ({ text, isGoogle }) => {
    return (
        <button
            type="submit"
            className={`w-full px-4 py-2 mt-4 font-bold text-white rounded-lg ${isGoogle ? 'bg-orange-300 hover:bg-orange-400' : 'bg-black hover:bg-gray-800'
                }`}
        >
            {text}
        </button>
    );
};

AuthButton.propTypes = {
    text: PropTypes.string.isRequired,
    isGoogle: PropTypes.bool,
};

AuthButton.defaultProps = {
    isGoogle: false,
};

export default AuthButton;