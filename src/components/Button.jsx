import React from 'react';

function Button({ data , onClick }) {
    return (
        <button
            onClick={onClick}
            className={`bg-slate-50 hover:bg-gray-900 text-black hover:text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded`}
        >
            {data}
        </button>
    );
}

export default Button;