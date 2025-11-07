// google/docs/index.tsx
// The Scribe's Invocation. This summons the Editor, the canvas for inscribing thought.

import React from 'react';
import ReactDOM from 'react-dom/client';
import Editor from './components/Editor';

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <Editor />
        </React.StrictMode>
    );
}
