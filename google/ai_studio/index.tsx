// google/ai_studio/index.tsx
// The Oracle's Invocation. This summons the interface for speaking directly to the mind of the machine.

import React from 'react';
import ReactDOM from 'react-dom/client';
import PromptInterface from './components/PromptInterface';

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <PromptInterface />
        </React.StrictMode>
    );
}
