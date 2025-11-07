// google/sheets/index.tsx
// The Abacus Invocation. This summons the Spreadsheet, the grid for calculating the kingdom's wealth.

import React from 'react';
import ReactDOM from 'react-dom/client';
import Spreadsheet from './components/Spreadsheet';

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <Spreadsheet />
        </React.StrictMode>
    );
}
