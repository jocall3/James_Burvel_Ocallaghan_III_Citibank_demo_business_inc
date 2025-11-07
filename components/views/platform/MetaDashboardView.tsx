// components/views/platform/MetaDashboardView.tsx
import React from 'react';
import { View } from '../../../types';
import { NAV_ITEMS } from '../../../constants';
import DashboardTile from '../../DashboardTile';

interface MetaDashboardViewProps {
    openModal: (view: View) => void;
}

const FEATURED_VIEWS: View[] = [
    View.Dashboard,
    View.CorporateDashboard,
    View.TheNexus,
    View.AIAdvisor,
];

const MetaDashboardView: React.FC<MetaDashboardViewProps> = ({ openModal }) => {
    const featuredItems = NAV_ITEMS.filter(
        item => 'id' in item && FEATURED_VIEWS.includes(item.id)
    );

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white tracking-wider">Command Center</h1>
                <p className="text-gray-400 mt-2">Select a module to begin.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredItems.map(item => (
                    'id' in item && <DashboardTile key={item.id} item={item} onClick={() => openModal(item.id)} />
                ))}
            </div>
        </div>
    );
};

export default MetaDashboardView;