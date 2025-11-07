// google/docs/components/Editor.tsx
// The Canvas. A clean, focused space where the sovereign's words take form.

import React, { useState } from 'react';
import Toolbar from './Toolbar';

const Editor: React.FC = () => {
    const [content, setContent] = useState('This is the beginning of a great story...');

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
            <header className="w-full p-4 bg-gray-800 border-b border-gray-700">
                <h1 className="text-xl font-bold">Docs</h1>
            </header>
            <Toolbar />
            <div className="w-full max-w-4xl bg-white text-gray-900 p-12 flex-grow mt-8 rounded-t-lg">
                <textarea 
                    className="w-full h-full resize-none outline-none font-serif text-lg"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Editor;
