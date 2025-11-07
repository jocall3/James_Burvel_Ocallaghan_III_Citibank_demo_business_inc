// google/ai_studio/components/ModelSelector.tsx
// The Pantheon. A list of the available minds, each with its own strengths and purpose.

import React from 'react';

const ModelSelector: React.FC = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <label className="block text-sm font-medium text-gray-400 mb-2">Model</label>
            <select className="w-full bg-gray-700 rounded p-2">
                <option>gemini-2.5-flash</option>
                <option>imagen-4.0-generate-001</option>
                <option>veo-2.0-generate-001</option>
            </select>
        </div>
    );
};

export default ModelSelector;
