// google/drive/index.tsx
// The Genesis Block for the Digital Archive. This summons the File Browser, the sovereign's personal library.

import React from 'react';
import ReactDOM from 'react-dom/client';
import FileBrowser from './components/FileBrowser';

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <FileBrowser />
        </React.StrictMode>
    );
}
