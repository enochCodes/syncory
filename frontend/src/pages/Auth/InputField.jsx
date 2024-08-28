import PropTypes from 'prop-types';
import '../../assets/styles/tailwind.css';


const InputField = ({ type, placeholder }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
    );
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default InputField;