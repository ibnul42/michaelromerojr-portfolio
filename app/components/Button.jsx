import React from 'react';

const Button = ({ children, className = '', onClick, disabled = false, ...props }) => {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                onClick?.();
            }}
            disabled={disabled}
            className={`px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-0 focus:ring-sky-400 disabled:bg-gray-400 transition-all duration-200 ${className}`}
            {...props} // This spreads the remaining props like onClick, type, etc.
        >
            {children}
        </button>
    );
};

export default Button;
