// components/Paywall.tsx
import React from 'react';
import Card from './Card';
import type { FeatureDetails } from '../types';

const ValueIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>;
const LogicIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.875 21l2.522-2.522m0 0a3.375 3.375 0 004.772-4.772 3.375 3.375 0 00-4.772 4.772zM19.125 5l-2.522 2.522m0 0a3.375 3.375 0 01-4.772-4.772 3.375 3.375 0 014.772 4.772zM12 12l2.522 2.522" /></svg>;
const KeyIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.623 5.873M15 7A6 6 0 002.377 8.373M15 7a2 2 0 00-2-2H9a2 2 0 00-2 2" /></svg>;
const ScaleIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.002 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.002 0M18 7l3 9m-3-9l-6-2" /></svg>;

const InfoBlock: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-cyan-300">{icon}</div>
        <div>
            <h4 className="font-semibold text-gray-300">{title}</h4>
            <p className="text-sm text-gray-400">{text}</p>
        </div>
    </div>
);


interface PaywallProps {
    details: FeatureDetails;
    onUnlock: () => void;
}

const Paywall: React.FC<PaywallProps> = ({ details, onUnlock }) => {
    return (
        <div className="flex items-center justify-center h-full p-4">
            <div className="w-full max-w-3xl mx-auto">
                <Card variant="default">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 pb-2">
                           {details.appName}
                        </h2>
                        <p className="text-gray-400">This is a premium feature.</p>
                    </div>

                    <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InfoBlock icon={<ValueIcon />} title={`💰 Worth: $${details.price}/user/mo`} text={details.valuationLogic} />
                        <InfoBlock icon={<LogicIcon />} title="⚖️ Valuation Logic" text={details.valuationLogic} />
                        <InfoBlock icon={<KeyIcon />} title="🔑 Implementation Essentials" text={details.implementationEssentials} />
                        <InfoBlock icon={<ScaleIcon />} title="📈 Scalability" text={details.scalability} />
                    </div>
                    
                    <button 
                        onClick={onUnlock} 
                        className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-transform duration-200 hover:scale-105"
                    >
                        Unlock Feature
                    </button>
                </Card>
            </div>
        </div>
    );
};

export default Paywall;