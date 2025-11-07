// google/docs/components/Toolbar.tsx
// The Scribe's Tools. A collection of instruments for shaping the form and style of the written word.

import React from 'react';

const Toolbar: React.FC = () => {
    const buttons = ['B', 'I', 'U', 'Left', 'Center', 'Right'];

    return (
        <div className="w-full max-w-4xl bg-gray-700 p-2 mt-4 rounded-lg flex items-center space-x-2">
            {buttons.map(btn => (
                <button key={btn} className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-white">
                    {btn}
                </button>
            ))}
        </div>
    );
};

export default Toolbar;
