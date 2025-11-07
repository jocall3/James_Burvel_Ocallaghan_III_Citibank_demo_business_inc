// @/constants.tsx
// This file serves as the central repository for application-wide constants.
// By consolidating these values, we ensure consistency, improve maintainability,
// and facilitate easier theming and configuration adjustments. This file is 
// the pantheon of the application's identity, defining its navigable realms
// and the symbols that represent them.

import React from 'react';
import { View } from './types';
// FIX: Changed to named import to match the corrected export.
import { CONSTITUTIONAL_ARTICLES } from './data/constitutionalArticles';

// ================================================================================================
// TYPE DEFINITIONS FOR NAVIGATION
// ================================================================================================
// FIX: Added `type?: never` to NavLink to fix type inference issues in Sidebar.tsx.
// This ensures that the 'type' property can be safely accessed on any NavItem.
type NavLink = { id: View; label: string; icon: React.ReactElement; type?: never; };
type NavHeader = { type: 'header'; label: string; id?: never; icon?: never };
// FIX: Removed `label?: never` from NavDivider. This property was confusing the TypeScript type-checker when narrowing the NavItem union type, causing it to incorrectly infer 'never' for an item's type in some cases.
type NavDivider = { type: 'divider'; id?: never; icon?: never };
export type NavItem = NavLink | NavHeader | NavDivider;


// ================================================================================================
// ICON COMPONENTS
// ================================================================================================
// Each icon is defined as a full React component for clarity, accessibility, and ease of use.
// They are designed to inherit color via `currentColor` for maximum flexibility.
// ------------------------------------------------------------------------------------------------

const DashboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
);
const NexusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 22V12m0-10l-4 2m4-2l4 2m-4 10s-4-2-4-5m4 5s4-2 4-5" /></svg>
);
const TransactionsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);
const SendMoneyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
);
const BudgetsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
);
const InvestmentsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
);
const PortfolioExplorerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h7M4 18h7M15 14h.01M15 18h.01M18 14h.01M18 18h.01" /></svg>
);
const AIAdvisorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
);
const QuantumWeaverIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066 2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const QuantumOracleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const CorpDashboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1M9 21v-3.07a2 2 0 01.15-.76 2 2 0 011.6-1.17h.5a2 2 0 011.6 1.17c.1.4.15.76.15.76V21" /></svg>
);
const PaymentOrdersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);
const PayrollIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v-2.5a.5.5 0 00-1 0V14m-3.03-.47a.5.5 0 00.7.7m4.66 0a.5.5 0 01.7-.7" /></svg>
);
const CounterpartiesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 014.288 0M12 14a3 3 0 100-6 3 3 0 000 6z" /></svg>
);
const InvoicesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const ComplianceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-2.606m0-15.394v15.394" /></svg>
);
const AnomalyDetectionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const APIStatusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
);
const AIAdStudioIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
);
const CryptoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
);
const FinancialGoalsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const MarketplaceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
);
const PersonalizationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h-2M4 12H2m15.364 6.364l-1.414-1.414M6.343 6.343L4.929 4.929m12.728 12.728l-1.414-1.414M6.343 17.657l-1.414 1.414m12.02-6.02a4 4 0 11-5.656-5.656 4 4 0 015.656 5.656z" /></svg>
);
const CardCustomizationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3l4.5 4.5-10.5 10.5h-4.5v-4.5l10.5-10.5z" /></svg>
);
const SecurityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);
const ApiKeysIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.623 5.873M15 7A6 6 0 002.377 8.373M15 7a2 2 0 00-2-2H9a2 2 0 00-2 2m0 0v11a2 2 0 002 2h6a2 2 0 002-2V9M9 7h6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const ApiContractsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
);
const OpenBankingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
);
const RewardsHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4H5z" /></svg>
);
const CreditHealthIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
);
const SettingsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066 2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const TheVisionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);
const PlatformIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
);

// ================================================================================================
// NEW FRAMEWORK ICONS
// ================================================================================================
const AgentMarketplaceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.25 21.75l-.648-1.178a3.375 3.375 0 00-2.456-2.456L12 17.25l1.178-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.178a3.375 3.375 0 002.456 2.456L20.25 18l-1.178.648a3.375 3.375 0 00-2.456 2.456z" /></svg>);
const OrchestrationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>);
const DataLayerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>);
const GovernanceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.75 1.75v10.5a2.25 2.25 0 01-2.25 2.25h-10.5a2.25 2.25 0 01-2.25-2.25V10.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const DevOpsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>);
const KnowledgeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>);
const MainframeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" /></svg>);

// ================================================================================================
// DEMO BANK PLATFORM ICONS
// ================================================================================================
const SocialIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8z" /></svg>);
const ERPIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>);
const CRMIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>);
const APIGatewayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v4m0 0V3m0 4h4m-4 0H8m4 13v-4m0 0v4m0-4h4m-4 0H8" /></svg>);
const GraphExplorerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><circle cx="12" cy="12" r="3" /><circle cx="6" cy="7" r="2" /><circle cx="18" cy="7" r="2" /><circle cx="6" cy="17" r="2" /><circle cx="18" cy="17" r="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v-1.5m0-3V9m3.35-2.65L13.5 7.5m-3 0L9.35 6.35m0 11.3L10.5 16.5m3 0l1.15 1.15" /></svg>);
const DBQLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7M4 7c0-1.1.9-2 2-2h12a2 2 0 012 2M4 7h16M8 11h8M8 15h5" /><circle cx="17" cy="15" r="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.5 16.5l1.5 1.5" /></svg>);
const CloudIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>);
const TaskMatrixIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125a1.125 1.125 0 00-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125z" />
    </svg>
);
const LedgerExplorerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6.75" />
    </svg>
);

// ================================================================================================
// CONSTITUTIONAL MODULE ICONS
// ================================================================================================
const DoctrineIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>);
const LawIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.002 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.002 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>);
const AiBrainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l-2 3h4l-2-3zm0 14l-2-3h4l-2 3zM8 9l-3-2v6l3-2m8 0l3-2v6l-3-2" /></svg>);
const CreateIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>);
const FortressIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.786-2.67 9.394M12 11c1.66 2.608 2.67 5.877 2.67 9.394m-5.34 0h5.34M3 20h18M6 20V10a2 2 0 012-2h8a2 2 0 012 2v10M9 6a3 3 0 013-3h0a3 3 0 013 3v4H9V6z" /></svg>);
const BlueprintIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.75 1.75v10.5a2.25 2.25 0 01-2.25 2.25h-10.5a2.25 2.25 0 01-2.25-2.25V10.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const EconomicEngineIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l3-3m0 0l3 3m-3-3v6m0-6H3.75m3 6h3.75m-3.75 0V15m6 6.75l3-3m0 0l3 3m-3-3v6m0-6h-3.75m3 6h3.75M9 3.75l3 3m0 0l3-3m-3 3V9m0-5.25H9m3 5.25h3.75" /></svg>);


const ARTICLE_ICONS: Record<string, React.ReactElement> = {
    charter: <DoctrineIcon />,
    law: <LawIcon />,
    ai: <AiBrainIcon />,
    creation: <CreateIcon />,
    security: <FortressIcon />,
    default: <DoctrineIcon />,
};


// ================================================================================================
// INTEGRATION ICON COMPONENTS
// ================================================================================================
// FIX: Moved from data/integrationData.ts to allow JSX in a .tsx file and exported for use.
export const StripeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M28.802 6.333H14.265c-1.42 0-2.613.95-2.921 2.301l-4.111 18.06a2.98 2.98 0 002.92 3.642h14.537c1.42 0 2.613-.95 2.921-2.301l4.111-18.06a2.98 2.98 0 00-2.92-3.642z" fill="#635BFF"></path><path d="M28.665 10.463c-.428 0-.79.308-.887.72l-1.129 4.957a.91.91 0 01-.887.72h-5.263a.81.81 0 00-.79.615l-.261 1.143a.81.81 0 00.79.998h5.255a.91.91 0 01.887.72l1.129 4.957c.097.412.46.72.887.72.428 0 .79-.308.887-.72l4.11-18.06a.81.81 0 00-.79-.998h-3.41z" fill="#fff"></path></svg>);
export const PlaidIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" fill="#000"/><path d="M12 5a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" fill="#000"/><path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill="#000"/></svg>);
export const SlackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 122.8 122.8" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M25.8 73.4c0 6.3-5.1 11.4-11.4 11.4S3 79.7 3 73.4s5.1-11.4 11.4-11.4h11.4v11.4z" fill="#36c5f0"></path><path d="M37.2 73.4c6.3 0 11.4-5.1 11.4-11.4S43.5 50.6 37.2 50.6s-11.4 5.1-11.4 11.4v11.4h11.4z" fill="#2eb67d"></path><path d="M48.6 25.8c0-6.3 5.1-11.4 11.4-11.4s11.4 5.1 11.4 11.4v11.4H48.6V25.8z" fill="#ecb22e"></path><path d="M48.6 37.2c-6.3 0-11.4 5.1-11.4 11.4s5.1 11.4 11.4 11.4 11.4-5.1 11.4-11.4H48.6V37.2z" fill="#e01e5a"></path><path d="M97 49.4c0-6.3 5.1-11.4 11.4-11.4 6.3 0 11.4 5.1 11.4 11.4s-5.1 11.4-11.4 11.4H97V49.4z" fill="#e01e5a"></path><path d="M85.6 49.4c-6.3 0-11.4 5.1-11.4 11.4s5.1 11.4 11.4 11.4 11.4-5.1 11.4-11.4V49.4H85.6z" fill="#ecb22e"></path><path d="M74.2 97c0 6.3-5.1 11.4-11.4 11.4-6.3 0-11.4-5.1-11.4-11.4V85.6h22.8V97z" fill="#2eb67d"></path><path d="M74.2 85.6c6.3 0 11.4-5.1 11.4-11.4s-5.1-11.4-11.4-11.4-11.4 5.1-11.4 11.4h11.4v11.4z" fill="#36c5f0"></path></svg>);
export const SalesforceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.9 2.1c-5.5 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8-4.3-9.8-9.8-9.8zm3.2 13.3c-.4.3-1.1.2-1.7-.1-.5-.2-1.1-.6-1.5-.9-.8-.6-1.6-1.2-2.3-1.4-.8-.2-1.6.1-2.1.7-.5.6-.6 1.4-.1 2 .5.6 1.4.7 2 .1.4-.3 1.1-.2 1.7.1.5.2 1.1.6 1.5.9.8.6 1.6 1.2 2.3 1.4.8.2 1.6-.1 2.1-.7.5-.6.6-1.4.1-2-.4-.6-1.3-.7-1.9-.1z" fill="#009DDF"/></svg>);
export const PagerDutyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 20a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v16zM9.48 7.3a.5.5 0 00-.48.5v8.4a.5.5 0 00.48.5h5.04a.5.5 0 00.48-.5V7.8a.5.5 0 00-.48-.5H9.48zm.96 1.2h3.12v1.2H10.44V8.5zm0 2.4h3.12v1.2H10.44v-1.2zm0 2.4h3.12v1.2H10.44v-1.2z" fill="#06AC38"/></svg>);
export const JiraIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.29 21.71a1.14 1.14 0 01-1.14-1.14V3.43a1.14 1.14 0 012.28 0v17.14a1.14 1.14 0 01-1.14 1.14z" fill="#2684FF"/><path d="M11.29 21.71a1.14 1.14 0 01-1.14-1.14V3.43a1.14 1.14 0 112.28 0v17.14a1.14 1.14 0 01-1.14 1.14z" transform="rotate(60 11.29 12.57)" fill="#2684FF"/><path d="M11.29 21.71a1.14 1.14 0 01-1.14-1.14V3.43a1.14 1.14 0 012.28 0v17.14a1.14 1.14 0 01-1.14 1.14z" transform="rotate(120 11.29 12.57)" fill="#2684FF"/></svg>);

// ================================================================================================
// NAVIGATION ITEMS
// ================================================================================================
/**
 * @description The single source of truth for all primary navigation items.
 * This array is used by the Sidebar component to dynamically generate the navigation menu.
 * Adding a new item here will automatically add it to the UI.
 * Special types 'divider' and 'header' are used for visual separation.
 */
export const NAV_ITEMS: NavItem[] = [
    // --- NEW FINOS FRAMEWORK NAVIGATION ---
    { type: 'header', label: 'AI Agent Marketplace' },
    { id: View.AIAdvisor, label: 'Conversational AI', icon: <AIAdvisorIcon /> },
    { id: View.AIAdStudio, label: 'Generative AI', icon: <AIAdStudioIcon /> },
    { id: View.QuantumOracle, label: 'Predictive AI', icon: <QuantumOracleIcon /> },
    { id: View.AgentMarketplace, label: 'Agent Store', icon: <AgentMarketplaceIcon /> },
    
    { type: 'header', label: 'Orchestration & Integration' },
    { id: View.Orchestration, label: 'Workflow Orchestrator', icon: <OrchestrationIcon /> },
    { id: View.Connect, label: 'Connect (iPaaS)', icon: <ApiKeysIcon /> },
    { id: View.DeveloperApiContracts, label: 'API Contracts', icon: <ApiContractsIcon /> },

    { type: 'header', label: 'Data & Transformation' },
    { id: View.DataMesh, label: 'Data Mesh', icon: <DataLayerIcon /> },
    { id: View.DataCommons, label: 'Data Commons', icon: <DataLayerIcon /> },
    { id: View.Mainframe, label: 'Mainframe Gateway', icon: <MainframeIcon /> },
    { id: View.LedgerExplorer, label: 'Ledger Explorer', icon: <LedgerExplorerIcon /> },

    { type: 'header', label: 'Governance & Risk' },
    { id: View.AIGovernance, label: 'AI Governance', icon: <GovernanceIcon /> },
    { id: View.AIRiskRegistry, label: 'AI Risk Registry', icon: <AnomalyDetectionIcon /> },
    { id: View.OSPO, label: 'Open Source Program Office', icon: <ComplianceIcon /> },

    { type: 'header', label: 'DevOps & Automation' },
    { id: View.CiCd, label: 'CI/CD Pipelines', icon: <DevOpsIcon /> },
    
    { type: 'header', label: 'Knowledge & Strategy' },
    { id: View.Inventions, label: 'Invention & Prototype Codex', icon: <KnowledgeIcon /> },
    { id: View.Roadmap, label: 'Strategic Roadmap', icon: <FinancialGoalsIcon /> },
    { id: View.TheWinningVision, label: 'The Vision', icon: <TheVisionIcon /> },

    { type: 'divider' },

    // --- PRODUCTIVITY SUITE ---
    { type: 'header', label: 'Productivity' },
    { id: View.TaskMatrix, label: 'Task Matrix', icon: <TaskMatrixIcon /> },

    { type: 'divider' },

    // --- ADVANCED MODELING ---
    { type: 'header', label: 'Advanced Modeling' },
    { id: View.EconomicSynthesisEngine, label: 'Economic Synthesis Engine', icon: <EconomicEngineIcon /> },

    { type: 'divider' },

    // --- VISIONARY BLUEPRINTS ---
    { type: 'header', label: 'Visionary Blueprints' },
    { id: View.GenerativeJurisprudence, label: 'Generative Jurisprudence', icon: <BlueprintIcon /> },
    { id: View.AestheticEngine, label: 'Aesthetic Engine', icon: <BlueprintIcon /> },
    { id: View.NarrativeForge, label: 'Narrative Forge', icon: <BlueprintIcon /> },
    { id: View.WorldBuilder, label: 'World Builder', icon: <BlueprintIcon /> },
    { id: View.SonicAlchemy, label: 'Sonic Alchemy', icon: <BlueprintIcon /> },
    { id: View.AutonomousScientist, label: 'Autonomous Scientist', icon: <BlueprintIcon /> },
    { id: View.ZeitgeistEngine, label: 'Zeitgeist Engine', icon: <BlueprintIcon /> },
    { id: View.CareerTrajectory, label: 'Career Trajectory', icon: <BlueprintIcon /> },
    { id: View.LudicBalancer, label: 'Ludic Balancer', icon: <BlueprintIcon /> },
    { id: View.HypothesisEngine, label: 'Hypothesis Engine', icon: <BlueprintIcon /> },
    { id: View.LexiconClarifier, label: 'Lexicon Clarifier', icon: <BlueprintIcon /> },
    { id: View.CodeArcheologist, label: 'Code Archeologist', icon: <BlueprintIcon /> },

    { type: 'divider' },


    // --- LEGACY/FOUNDATIONAL MODULES ---
    { type: 'header', label: 'Foundational Modules' },
    { id: View.Dashboard, label: 'Personal Dashboard', icon: <DashboardIcon /> },
    { id: View.CorporateDashboard, label: 'Corporate Dashboard', icon: <CorpDashboardIcon /> },
    { id: View.TheNexus, label: 'The Nexus', icon: <NexusIcon /> },
    { type: 'divider' },
    { id: View.Transactions, label: 'Transactions', icon: <TransactionsIcon /> },
    { id: View.SendMoney, label: 'Send Money', icon: <SendMoneyIcon /> },
    { id: View.Budgets, label: 'Budgets', icon: <BudgetsIcon /> },
    { id: View.Investments, label: 'Investments', icon: <InvestmentsIcon /> },
    { id: View.PortfolioExplorer, label: 'Portfolio Explorer', icon: <PortfolioExplorerIcon /> },
    { id: View.Crypto, label: 'Crypto & Web3', icon: <CryptoIcon /> },
    { id: View.PaymentOrders, label: 'Payment Orders', icon: <PaymentOrdersIcon /> },
    { id: View.Payroll, label: 'Payroll', icon: <PayrollIcon /> },
    
    { type: 'divider' },
    { type: 'header', label: 'Platform Services (A-Z)' },
    { id: View.DemoBankSocial, label: 'Social', icon: <SocialIcon /> },
    { id: View.DemoBankERP, label: 'ERP', icon: <ERPIcon /> },
    { id: View.DemoBankCRM, label: 'CRM', icon: <CRMIcon /> },
    { id: View.DemoBankAPIGateway, label: 'API Gateway', icon: <APIGatewayIcon /> },
    { id: View.DemoBankGraphExplorer, label: 'Graph Explorer', icon: <GraphExplorerIcon /> },
    { id: View.DemoBankDBQL, label: 'DBQL', icon: <DBQLIcon /> },
    { id: View.DemoBankCloud, label: 'Cloud', icon: <CloudIcon /> },
    
    // --- Constitutional Modules ---
    { type: 'divider' },
    { type: 'header', label: 'Constitutional Modules' },
    ...CONSTITUTIONAL_ARTICLES.slice(0, 5).map(article => ({ // Show first 5 for brevity
        id: View[`Article${article.id}` as keyof typeof View],
        label: `Article ${article.romanNumeral}`,
        icon: ARTICLE_ICONS[article.iconName] || ARTICLE_ICONS.default,
    })),
];
