// components/FeatureGuard.tsx
import React, { useContext } from 'react';
import { View } from '../types';

interface FeatureGuardProps {
    view: View;
    children: React.ReactNode;
}

const FeatureGuard: React.FC<FeatureGuardProps> = ({ view, children }) => {
    // In a full implementation, this would check against a user's permissions
    // or subscription level. For now, we allow all views.
    return <>{children}</>;
};

export default FeatureGuard;
