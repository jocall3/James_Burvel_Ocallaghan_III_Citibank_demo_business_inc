// google/notebook/index.tsx
// The Scholar's Scroll. Summons the Notebook, a place for experimentation and discovery.

import React from 'react';
import ReactDOM from 'react-dom/client';
import Notebook from './components/Notebook';

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <Notebook />
        </React.StrictMode>
    );
}
