// google/cloud/index.tsx
// The Genesis Block for the Cloud Reality.
// This file summons the Cloud Dashboard, establishing the foundational view for the sovereign's infrastructure domain.

import React from 'react';
import ReactDOM from 'react-dom/client';
import CloudDashboard from './components/CloudDashboard';

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <CloudDashboard />
        </React.StrictMode>
    );
}
