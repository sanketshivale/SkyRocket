import React from 'react';

export default function Button({ data , color, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`}
        >
            {data}
        </button>
    );
}