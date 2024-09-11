import PropTypes from 'prop-types';
import '../../assets/styles/tailwind.css';

const InputField = ({
    type = 'text',
    placeholder = '',
    value = '',
    onChange = () => { },
    icon = null,
    error = '',
}) => {
    return (
        <div className="relative mb-4">
            {icon && (
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">{icon}</span>
                </div>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-2 ${icon ? 'pl-10' : ''} border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.element,
    error: PropTypes.string,
};

export default InputField;
