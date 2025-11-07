import React, { useState, useContext, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { View } from './types';
import { DataContext } from './context/DataContext';
import FeatureGuard from './components/FeatureGuard';
import MetaDashboardView from './components/views/platform/MetaDashboardView';
import { ModalView } from './components/ModalView';

// --- NEW FRAMEWORK VIEWS ---
import AgentMarketplaceView from './components/views/platform/AgentMarketplaceView';
import OrchestrationView from './components/views/platform/OrchestrationView';
import DataMeshView from './components/views/platform/DataMeshView';
import DataCommonsView from './components/views/platform/DataCommonsView';
import MainframeView from './components/views/platform/MainframeView';
import AIGovernanceView from './components/views/platform/AIGovernanceView';
import AIRiskRegistryView from './components/views/platform/AIRiskRegistryView';
import OSPOView from './components/views/platform/OSPOView';
import CiCdView from './components/views/platform/CiCdView';
import InventionsView from './components/views/platform/InventionsView';
import RoadmapView from './components/views/platform/RoadmapView';
import ConnectView from './components/views/platform/DemoBankConnectView';
import EconomicSynthesisEngineView from './components/views/platform/EconomicSynthesisEngineView';
import TaskMatrixView from './components/views/productivity/TaskMatrixView';
import LedgerExplorerView from './components/views/platform/LedgerExplorerView';


// --- FOUNDATIONAL & LEGACY VIEWS ---
// Personal Finance Views
import DashboardView from './components/views/personal/DashboardView';
import TransactionsView from './components/views/personal/TransactionsView';
import SendMoneyView from './components/views/personal/SendMoneyView';
import BudgetsView from './components/views/personal/BudgetsView';
import InvestmentsView from './components/InvestmentsView';
import PortfolioExplorerView from './components/views/personal/PortfolioExplorerView';
import CryptoView from './components/views/personal/CryptoView';
import FinancialGoalsView from './components/views/personal/FinancialGoalsView';
import MarketplaceView from './components/views/personal/MarketplaceView';
import PersonalizationView from './components/views/personal/PersonalizationView';
import CardCustomizationView from './components/views/personal/CardCustomizationView';
import RewardsHubView from './components/views/personal/RewardsHubView';
import CreditHealthView from './components/views/personal/CreditHealthView';
import SecurityView from './components/views/personal/SecurityView';
import OpenBankingView from './components/views/personal/OpenBankingView';
import SettingsView from './components/views/personal/SettingsView';

// AI & Platform Views
import AIAdvisorView from './components/views/platform/AIAdvisorView';
import QuantumWeaverView from './components/views/platform/QuantumWeaverView';
import QuantumOracleView from './components/views/platform/QuantumOracleView';
import AIAdStudioView from './components/views/platform/AIAdStudioView';
import TheVisionView from './components/views/platform/TheVisionView';
import APIStatusView from './components/views/platform/APIStatusView';
import TheNexusView from './components/views/platform/TheNexusView'; // The 27th Module
import ConstitutionalArticleView from './components/views/platform/ConstitutionalArticleView';
import TheCharterView from './components/views/platform/TheCharterView';
import FractionalReserveView from './components/views/platform/FractionalReserveView';
import FinancialInstrumentForgeView from './components/views/platform/TheAssemblyView';


// Corporate Finance Views
import CorporateDashboardView from './components/views/corporate/CorporateDashboardView';
import PaymentOrdersView from './components/views/corporate/PaymentOrdersView';
import CounterpartiesView from './components/views/corporate/CounterpartiesView';
import InvoicesView from './components/views/corporate/InvoicesView';
import ComplianceView from './components/views/corporate/ComplianceView';
import AnomalyDetectionView from './components/views/corporate/AnomalyDetectionView';
import PayrollView from './components/views/corporate/PayrollView';


// Demo Bank Platform Views
import DemoBankSocialView from './components/views/platform/DemoBankSocialView';
import DemoBankERPView from './components/views/platform/DemoBankERPView';
import DemoBankCRMView from './components/views/platform/DemoBankCRMView';
import DemoBankAPIGatewayView from './components/views/platform/DemoBankAPIGatewayView';
import DemoBankGraphExplorerView from './components/views/platform/DemoBankGraphExplorerView';
import DemoBankDBQLView from './components/views/platform/DemoBankDBQLView';
import DemoBankCloudView from './components/views/platform/DemoBankCloudView';
import DemoBankIdentityView from './components/views/platform/DemoBankIdentityView';
import DemoBankStorageView from './components/views/platform/DemoBankStorageView';
import DemoBankComputerView from './components/views/platform/DemoBankComputerView';
import DemoBankAIPlatformView from './components/views/platform/DemoBankAIPlatformView';
import DemoBankMachineLearningView from './components/views/platform/DemoBankMachineLearningView';
import DemoBankDevOpsView from './components/views/platform/DemoBankDevOpsView';
import DemoBankSecurityCenterView from './components/views/platform/DemoBankSecurityCenterView';
import DemoBankComplianceHubView from './components/views/platform/DemoBankComplianceHubView';
import DemoBankAppMarketplaceView from './components/views/platform/DemoBankAppMarketplaceView';
import DemoBankEventsView from './components/views/platform/DemoBankEventsView';
import DemoBankLogicAppsView from './components/views/platform/DemoBankLogicAppsView';
import DemoBankFunctionsView from './components/views/platform/DemoBankFunctionsView';
import DemoBankDataFactoryView from './components/views/platform/DemoBankDataFactoryView';
import DemoBankAnalyticsView from './components/views/platform/DemoBankAnalyticsView';
import DemoBankBIView from './components/views/platform/DemoBankBIView';
import DemoBankIoTHubView from './components/views/platform/DemoBankIoTHubView';
import DemoBankMapsView from './components/views/platform/DemoBankMapsView';
import DemoBankCommunicationsView from './components/views/platform/DemoBankCommunicationsView';
import DemoBankCommerceView from './components/views/platform/DemoBankCommerceView';
import DemoBankTeamsView from './components/views/platform/DemoBankTeamsView';
import DemoBankCMSView from './components/views/platform/DemoBankCMSView';
import DemoBankLMSView from './components/views/platform/DemoBankLMSView';
import DemoBankHRISView from './components/views/platform/DemoBankHRISView';
import DemoBankProjectsView from './components/views/platform/DemoBankProjectsView';
import DemoBankLegalSuiteView from './components/views/platform/DemoBankLegalSuiteView';
import DemoBankSupplyChainView from './components/views/platform/DemoBankSupplyChainView';
import DemoBankPropTechView from './components/views/platform/DemoBankPropTechView';
import DemoBankGamingServicesView from './components/views/platform/DemoBankGamingServicesView';
import DemoBankBookingsView from './components/views/platform/DemoBankBookingsView';
import DemoBankCDPView from './components/views/platform/DemoBankCDPView';
import DemoBankQuantumServicesView from './components/views/platform/DemoBankQuantumServicesView';
import DemoBankBlockchainView from './components/views/platform/DemoBankBlockchainView';
import DemoBankGISView from './components/views/platform/DemoBankGISView';
import DemoBankRoboticsView from './components/views/platform/DemoBankRoboticsView';
import DemoBankSimulationsView from './components/views/platform/DemoBankSimulationsView';
import DemoBankVoiceServicesView from './components/views/platform/DemoBankVoiceServicesView';
import DemoBankSearchSuiteView from './components/views/platform/DemoBankSearchSuiteView';
import DemoBankDigitalTwinView from './components/views/platform/DemoBankDigitalTwinView';
import DemoBankWorkflowEngineView from './components/views/platform/DemoBankWorkflowEngineView';
import DemoBankObservabilityPlatformView from './components/views/platform/DemoBankObservabilityPlatformView';
import DemoBankFeatureManagementView from './components/views/platform/DemoBankFeatureManagementView';
import DemoBankExperimentationPlatformView from './components/views/platform/DemoBankExperimentationPlatformView';
import DemoBankLocalizationPlatformView from './components/views/platform/DemoBankLocalizationPlatformView';
import DemoBankFleetManagementView from './components/views/platform/DemoBankFleetManagementView';
import DemoBankKnowledgeBaseView from './components/views/platform/DemoBankKnowledgeBaseView';
import DemoBankMediaServicesView from './components/views/platform/DemoBankMediaServicesView';
import DemoBankEventGridView from './components/views/platform/DemoBankEventGridView';
import DemoBankApiManagementView from './components/views/platform/DemoBankApiManagementView';


// Mega Dashboard Views (no change, just for completeness)
import AccessControlsView from './components/views/megadashboard/security/AccessControlsView';
import RoleManagementView from './components/views/megadashboard/security/RoleManagementView';
import AuditLogsView from './components/views/megadashboard/security/AuditLogsView';
import FraudDetectionView from './components/views/megadashboard/security/FraudDetectionView';
import ThreatIntelligenceView from './components/views/megadashboard/security/ThreatIntelligenceView';
import CardManagementView from './components/views/megadashboard/finance/CardManagementView';
import LoanApplicationsView from './components/views/megadashboard/finance/LoanApplicationsView';
import MortgagesView from './components/views/megadashboard/finance/MortgagesView';
import InsuranceHubView from './components/views/megadashboard/finance/InsuranceHubView';
import TaxCenterView from './components/views/megadashboard/finance/TaxCenterView';
import PredictiveModelsView from './components/views/megadashboard/analytics/PredictiveModelsView';
import RiskScoringView from './components/views/megadashboard/analytics/RiskScoringView';
import SentimentAnalysisView from './components/views/megadashboard/analytics/SentimentAnalysisView';
import DataLakesView from './components/views/megadashboard/analytics/DataLakesView';
import DataCatalogView from './components/views/megadashboard/analytics/DataCatalogView';
import ClientOnboardingView from './components/views/megadashboard/userclient/ClientOnboardingView';
import KycAmlView from './components/views/megadashboard/userclient/KycAmlView';
import UserInsightsView from './components/views/megadashboard/userclient/UserInsightsView';
import FeedbackHubView from './components/views/megadashboard/userclient/FeedbackHubView';
import SupportDeskView from './components/views/megadashboard/userclient/SupportDeskView';
import SandboxView from './components/views/megadashboard/developer/SandboxView';
import SdkDownloadsView from './components/views/megadashboard/developer/SdkDownloadsView';
import WebhooksView from './components/views/megadashboard/developer/WebhooksView';
import CliToolsView from './components/views/megadashboard/developer/CliToolsView';
import ExtensionsView from './components/views/megadashboard/developer/ExtensionsView';
import ApiKeysView from './components/views/megadashboard/developer/ApiKeysView';
import ApiContractsView from './components/views/developer/ApiContractsView';
import PartnerHubView from './components/views/megadashboard/ecosystem/PartnerHubView';
import AffiliatesView from './components/views/megadashboard/ecosystem/AffiliatesView';
import IntegrationsMarketplaceView from './components/views/megadashboard/ecosystem/IntegrationsMarketplaceView';
import CrossBorderPaymentsView from './components/views/megadashboard/ecosystem/CrossBorderPaymentsView';
import MultiCurrencyView from './components/views/megadashboard/ecosystem/MultiCurrencyView';
import NftVaultView from './components/views/megadashboard/digitalassets/NftVaultView';
import TokenIssuanceView from './components/views/megadashboard/digitalassets/TokenIssuanceView';
import SmartContractsView from './components/views/megadashboard/digitalassets/SmartContractsView';
import DaoGovernanceView from './components/views/megadashboard/digitalassets/DaoGovernanceView';
import OnChainAnalyticsView from './components/views/megadashboard/digitalassets/OnChainAnalyticsView';
import SalesPipelineView from './components/views/megadashboard/business/SalesPipelineView';
import MarketingAutomationView from './components/views/megadashboard/business/MarketingAutomationView';
import GrowthInsightsView from './components/views/megadashboard/business/GrowthInsightsView';
import CompetitiveIntelligenceView from './components/views/megadashboard/business/CompetitiveIntelligenceView';
import BenchmarkingView from './components/views/megadashboard/business/BenchmarkingView';
import LicensingView from './components/views/megadashboard/regulation/LicensingView';
import DisclosuresView from './components/views/megadashboard/regulation/DisclosuresView';
import LegalDocsView from './components/views/megadashboard/regulation/LegalDocsView';
import RegulatorySandboxView from './components/views/megadashboard/regulation/RegulatorySandboxView';
import ConsentManagementView from './components/views/megadashboard/regulation/ConsentManagementView';
import ContainerRegistryView from './components/views/megadashboard/infra/ContainerRegistryView';
import ApiThrottlingView from './components/views/megadashboard/infra/ApiThrottlingView';
import ObservabilityView from './components/views/megadashboard/infra/ObservabilityView';
import IncidentResponseView from './components/views/megadashboard/infra/IncidentResponseView';
import BackupRecoveryView from './components/views/megadashboard/infra/BackupRecoveryView';

// Blueprint imports
import CrisisAIManagerView from './components/views/blueprints/CrisisAIManagerView';
import CognitiveLoadBalancerView from './components/views/blueprints/CognitiveLoadBalancerView';
import HolographicMeetingScribeView from './components/views/blueprints/HolographicMeetingScribeView';
import QuantumProofEncryptorView from './components/views/blueprints/QuantumProofEncryptorView';
import EtherealMarketplaceView from './components/views/blueprints/EtherealMarketplaceView';
import AdaptiveUITailorView from './components/views/blueprints/AdaptiveUITailorView';
import UrbanSymphonyPlannerView from './components/views/blueprints/UrbanSymphonyPlannerView';
import PersonalHistorianAIView from './components/views/blueprints/PersonalHistorianAIView';
import DebateAdversaryView from './components/views/blueprints/DebateAdversaryView';
import CulturalAssimilationAdvisorView from './components/views/blueprints/CulturalAssimilationAdvisorView';
import DynamicSoundscapeGeneratorView from './components/views/blueprints/DynamicSoundscapeGeneratorView';
import EmergentStrategyWargamerView from './components/views/blueprints/EmergentStrategyWargamerView';
import EthicalGovernorView from './components/views/blueprints/EthicalGovernorView';
import QuantumEntanglementDebuggerView from './components/views/blueprints/QuantumEntanglementDebuggerView';
import LinguisticFossilFinderView from './components/views/blueprints/LinguisticFossilFinderView';
import ChaosTheoristView from './components/views/blueprints/ChaosTheoristView';
import SelfRewritingCodebaseView from './components/views/blueprints/SelfRewritingCodebaseView';
// Visionary Blueprint Imports
import GenerativeJurisprudenceView from './components/views/blueprints/GenerativeJurisprudenceView';
import AestheticEngineView from './components/views/blueprints/AestheticEngineView';
import NarrativeForgeView from './components/views/blueprints/NarrativeForgeView';
import WorldBuilderView from './components/views/blueprints/WorldBuilderView';
import SonicAlchemyView from './components/views/blueprints/SonicAlchemyView';
import AutonomousScientistView from './components/views/blueprints/AutonomousScientistView';
import ZeitgeistEngineView from './components/views/blueprints/ZeitgeistEngineView';
import CareerTrajectoryView from './components/views/blueprints/CareerTrajectoryView';
import LudicBalancerView from './components/views/blueprints/LudicBalancerView';
import HypothesisEngineView from './components/views/blueprints/HypothesisEngineView';
import LexiconClarifierView from './components/views/blueprints/LexiconClarifierView';
import CodeArcheologistView from './components/views/blueprints/CodeArcheologistView';


// Global Components
import VoiceControl from './components/VoiceControl';
import GlobalChatbot from './components/GlobalChatbot';

/**
 * @description The root component of the application.
 * It acts as a controller or router, managing the active view and rendering the
 * appropriate child component. It also orchestrates the main layout, including
 * the Sidebar, Header, and main content area.
 */
const App: React.FC = () => {
    const [activeView, setActiveView] = useState<View>(View.MetaDashboard);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [previousView, setPreviousView] = useState<View | null>(null);
    const dataContext = useContext(DataContext);

    const [modalView, setModalView] = useState<View | null>(null);
    const [modalPreviousView, setModalPreviousView] = useState<View | null>(null);

    const openModal = (view: View) => {
        setModalPreviousView(activeView); // The view we are coming from
        setModalView(view);
    };

    const closeModal = () => {
        setModalView(null);
    };


    if (!dataContext) {
        throw new Error("App must be used within a DataProvider");
    }

    const { customBackgroundUrl, activeIllusion, isLoading, error } = dataContext;

    const handleSetView = (view: View) => {
        if (view !== activeView) {
            setPreviousView(activeView);
            setActiveView(view);
            if (window.innerWidth < 1024) {
                setIsSidebarOpen(false);
            }
        }
    };
    
    if (error) {
        return (
           <div className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center p-4">
               <div className="bg-gray-900 border border-red-700 rounded-xl p-8 max-w-lg text-center">
                   <h1 className="text-2xl font-bold text-red-400 mb-4">Connection Error</h1>
                   <p className="text-gray-400 mb-6">{error}</p>
                   <p className="text-xs text-gray-500">Please ensure the backend server is running. You may need to refresh the page after starting the server.</p>
               </div>
           </div>
       );
   }
    
    /**
     * @description The main view renderer. It uses a switch statement to determine
     * which page component to render based on the `activeView` state. This acts as
     * a simple and effective client-side router.
     * @returns {React.ReactElement} The component for the currently active view.
     */
    const renderView = () => {
        if (isLoading && dataContext.transactions.length === 0) {
            return (
                <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 border-4 border-cyan-400 border-dashed rounded-full animate-spin"></div>
                </div>
            );
        }

        if (activeView.startsWith('article-')) {
            const articleNumber = parseInt(activeView.replace('article-', ''), 10);
            return <FeatureGuard view={activeView}><ConstitutionalArticleView articleNumber={articleNumber} /></FeatureGuard>;
        }
        
        switch (activeView) {
            // --- META & NEW FRAMEWORK VIEWS ---
            case View.MetaDashboard: return <MetaDashboardView openModal={openModal} />;
            case View.AgentMarketplace: return <FeatureGuard view={View.AgentMarketplace}><AgentMarketplaceView /></FeatureGuard>;
            case View.Orchestration: return <FeatureGuard view={View.Orchestration}><OrchestrationView /></FeatureGuard>;
            case View.DataMesh: return <FeatureGuard view={View.DataMesh}><DataMeshView /></FeatureGuard>;
            case View.DataCommons: return <FeatureGuard view={View.DataCommons}><DataCommonsView /></FeatureGuard>;
            case View.Mainframe: return <FeatureGuard view={View.Mainframe}><MainframeView /></FeatureGuard>;
            case View.AIGovernance: return <FeatureGuard view={View.AIGovernance}><AIGovernanceView /></FeatureGuard>;
            case View.AIRiskRegistry: return <FeatureGuard view={View.AIRiskRegistry}><AIRiskRegistryView /></FeatureGuard>;
            case View.OSPO: return <FeatureGuard view={View.OSPO}><OSPOView /></FeatureGuard>;
            case View.CiCd: return <FeatureGuard view={View.CiCd}><CiCdView /></FeatureGuard>;
            case View.Inventions: return <FeatureGuard view={View.Inventions}><InventionsView /></FeatureGuard>;
            case View.Roadmap: return <FeatureGuard view={View.Roadmap}><RoadmapView /></FeatureGuard>;
            case View.Connect: return <FeatureGuard view={View.Connect}><ConnectView /></FeatureGuard>;
            case View.EconomicSynthesisEngine: return <FeatureGuard view={View.EconomicSynthesisEngine}><EconomicSynthesisEngineView /></FeatureGuard>;
            case View.TaskMatrix: return <FeatureGuard view={View.TaskMatrix}><TaskMatrixView /></FeatureGuard>;
            case View.LedgerExplorer: return <FeatureGuard view={View.LedgerExplorer}><LedgerExplorerView /></FeatureGuard>;
            
            // --- FOUNDATIONAL & LEGACY VIEWS ---
            // Personal Finance
            case View.Dashboard: return <FeatureGuard view={View.Dashboard}><DashboardView setActiveView={handleSetView}/></FeatureGuard>;
            case View.Transactions: return <FeatureGuard view={View.Transactions}><TransactionsView /></FeatureGuard>;
            case View.SendMoney: return <FeatureGuard view={View.SendMoney}><SendMoneyView setActiveView={handleSetView} /></FeatureGuard>;
            case View.Budgets: return <FeatureGuard view={View.Budgets}><BudgetsView /></FeatureGuard>;
            case View.Investments: return <FeatureGuard view={View.Investments}><InvestmentsView /></FeatureGuard>;
            case View.PortfolioExplorer: return <FeatureGuard view={View.PortfolioExplorer}><PortfolioExplorerView /></FeatureGuard>;
            case View.Crypto: return <FeatureGuard view={View.Crypto}><CryptoView /></FeatureGuard>;
            case View.FinancialGoals: return <FeatureGuard view={View.FinancialGoals}><FinancialGoalsView /></FeatureGuard>;
            case View.Marketplace: return <FeatureGuard view={View.Marketplace}><MarketplaceView /></FeatureGuard>;
            case View.Personalization: return <FeatureGuard view={View.Personalization}><PersonalizationView /></FeatureGuard>;
            case View.CardCustomization: return <FeatureGuard view={View.CardCustomization}><CardCustomizationView /></FeatureGuard>;
            case View.RewardsHub: return <FeatureGuard view={View.RewardsHub}><RewardsHubView /></FeatureGuard>;
            case View.CreditHealth: return <FeatureGuard view={View.CreditHealth}><CreditHealthView /></FeatureGuard>;
            case View.Security: return <FeatureGuard view={View.Security}><SecurityView /></FeatureGuard>;
            case View.OpenBanking: return <FeatureGuard view={View.OpenBanking}><OpenBankingView /></FeatureGuard>;
            case View.Settings: return <FeatureGuard view={View.Settings}><SettingsView /></FeatureGuard>;
            
            // AI & Platform
            case View.TheNexus: return <FeatureGuard view={View.TheNexus}><TheNexusView /></FeatureGuard>;
            case View.AIAdvisor: return <FeatureGuard view={View.AIAdvisor}><AIAdvisorView previousView={previousView} /></FeatureGuard>;
            case View.QuantumWeaver: return <FeatureGuard view={View.QuantumWeaver}><QuantumWeaverView /></FeatureGuard>;
            case View.QuantumOracle: return <FeatureGuard view={View.QuantumOracle}><QuantumOracleView /></FeatureGuard>;
            case View.AIAdStudio: return <FeatureGuard view={View.AIAdStudio}><AIAdStudioView /></FeatureGuard>;
            case View.TheWinningVision: return <FeatureGuard view={View.TheWinningVision}><TheVisionView /></FeatureGuard>;
            case View.APIStatus: return <FeatureGuard view={View.APIStatus}><APIStatusView /></FeatureGuard>;
            
            // Corporate Finance
            case View.CorporateDashboard: return <FeatureGuard view={View.CorporateDashboard}><CorporateDashboardView setActiveView={handleSetView} /></FeatureGuard>;
            case View.PaymentOrders: return <FeatureGuard view={View.PaymentOrders}><PaymentOrdersView /></FeatureGuard>;
            case View.Counterparties: return <FeatureGuard view={View.Counterparties}><CounterpartiesView /></FeatureGuard>;
            case View.Invoices: return <FeatureGuard view={View.Invoices}><InvoicesView /></FeatureGuard>;
            case View.Compliance: return <FeatureGuard view={View.Compliance}><ComplianceView /></FeatureGuard>;
            case View.AnomalyDetection: return <FeatureGuard view={View.AnomalyDetection}><AnomalyDetectionView /></FeatureGuard>;
            case View.Payroll: return <FeatureGuard view={View.Payroll}><PayrollView /></FeatureGuard>;

            // Demo Bank Platform
            case View.DemoBankSocial: return <FeatureGuard view={View.DemoBankSocial}><DemoBankSocialView /></FeatureGuard>;
            case View.DemoBankERP: return <FeatureGuard view={View.DemoBankERP}><DemoBankERPView /></FeatureGuard>;
            case View.DemoBankCRM: return <FeatureGuard view={View.DemoBankCRM}><DemoBankCRMView /></FeatureGuard>;
            case View.DemoBankAPIGateway: return <FeatureGuard view={View.DemoBankAPIGateway}><DemoBankAPIGatewayView /></FeatureGuard>;
            case View.DemoBankGraphExplorer: return <FeatureGuard view={View.DemoBankGraphExplorer}><DemoBankGraphExplorerView /></FeatureGuard>;
            case View.DemoBankDBQL: return <FeatureGuard view={View.DemoBankDBQL}><DemoBankDBQLView /></FeatureGuard>;
            case View.DemoBankCloud: return <FeatureGuard view={View.DemoBankCloud}><DemoBankCloudView /></FeatureGuard>;
            case View.DemoBankIdentity: return <FeatureGuard view={View.DemoBankIdentity}><DemoBankIdentityView /></FeatureGuard>;
            case View.DemoBankStorage: return <FeatureGuard view={View.DemoBankStorage}><DemoBankStorageView /></FeatureGuard>;
            case View.DemoBankCompute: return <FeatureGuard view={View.DemoBankCompute}><DemoBankComputerView /></FeatureGuard>;
            case View.DemoBankAIPlatform: return <FeatureGuard view={View.DemoBankAIPlatform}><DemoBankAIPlatformView /></FeatureGuard>;
            case View.DemoBankMachineLearning: return <FeatureGuard view={View.DemoBankMachineLearning}><DemoBankMachineLearningView /></FeatureGuard>;
            case View.DemoBankDevOps: return <FeatureGuard view={View.DemoBankDevOps}><DemoBankDevOpsView /></FeatureGuard>;
            case View.DemoBankSecurityCenter: return <FeatureGuard view={View.DemoBankSecurityCenter}><DemoBankSecurityCenterView /></FeatureGuard>;
            case View.DemoBankComplianceHub: return <FeatureGuard view={View.DemoBankComplianceHub}><DemoBankComplianceHubView /></FeatureGuard>;
            case View.DemoBankAppMarketplace: return <FeatureGuard view={View.DemoBankAppMarketplace}><DemoBankAppMarketplaceView /></FeatureGuard>;
            case View.DemoBankEvents: return <FeatureGuard view={View.DemoBankEvents}><DemoBankEventsView /></FeatureGuard>;
            case View.DemoBankLogicApps: return <FeatureGuard view={View.DemoBankLogicApps}><DemoBankLogicAppsView /></FeatureGuard>;
            case View.DemoBankFunctions: return <FeatureGuard view={View.DemoBankFunctions}><DemoBankFunctionsView /></FeatureGuard>;
            case View.DemoBankDataFactory: return <FeatureGuard view={View.DemoBankDataFactory}><DemoBankDataFactoryView /></FeatureGuard>;
            case View.DemoBankAnalytics: return <FeatureGuard view={View.DemoBankAnalytics}><DemoBankAnalyticsView /></FeatureGuard>;
            case View.DemoBankBI: return <FeatureGuard view={View.DemoBankBI}><DemoBankBIView /></FeatureGuard>;
            case View.DemoBankIoTHub: return <FeatureGuard view={View.DemoBankIoTHub}><DemoBankIoTHubView /></FeatureGuard>;
            case View.DemoBankMaps: return <FeatureGuard view={View.DemoBankMaps}><DemoBankMapsView /></FeatureGuard>;
            case View.DemoBankCommunications: return <FeatureGuard view={View.DemoBankCommunications}><DemoBankCommunicationsView /></FeatureGuard>;
            case View.DemoBankCommerce: return <FeatureGuard view={View.DemoBankCommerce}><DemoBankCommerceView /></FeatureGuard>;
            case View.DemoBankTeams: return <FeatureGuard view={View.DemoBankTeams}><DemoBankTeamsView /></FeatureGuard>;
            case View.DemoBankCMS: return <FeatureGuard view={View.DemoBankCMS}><DemoBankCMSView /></FeatureGuard>;
            case View.DemoBankLMS: return <FeatureGuard view={View.DemoBankLMS}><DemoBankLMSView /></FeatureGuard>;
            case View.DemoBankHRIS: return <FeatureGuard view={View.DemoBankHRIS}><DemoBankHRISView /></FeatureGuard>;
            case View.DemoBankProjects: return <FeatureGuard view={View.DemoBankProjects}><DemoBankProjectsView /></FeatureGuard>;
            case View.DemoBankLegalSuite: return <FeatureGuard view={View.DemoBankLegalSuite}><DemoBankLegalSuiteView /></FeatureGuard>;
            case View.DemoBankSupplyChain: return <FeatureGuard view={View.DemoBankSupplyChain}><DemoBankSupplyChainView /></FeatureGuard>;
            case View.DemoBankPropTech: return <FeatureGuard view={View.DemoBankPropTech}><DemoBankPropTechView /></FeatureGuard>;
            case View.DemoBankGamingServices: return <FeatureGuard view={View.DemoBankGamingServices}><DemoBankGamingServicesView /></FeatureGuard>;
            case View.DemoBankBookings: return <FeatureGuard view={View.DemoBankBookings}><DemoBankBookingsView /></FeatureGuard>;
            case View.DemoBankCDP: return <FeatureGuard view={View.DemoBankCDP}><DemoBankCDPView /></FeatureGuard>;
            case View.DemoBankQuantumServices: return <FeatureGuard view={View.DemoBankQuantumServices}><DemoBankQuantumServicesView /></FeatureGuard>;
            case View.DemoBankBlockchain: return <FeatureGuard view={View.DemoBankBlockchain}><DemoBankBlockchainView /></FeatureGuard>;
            case View.DemoBankGIS: return <FeatureGuard view={View.DemoBankGIS}><DemoBankGISView /></FeatureGuard>;
            case View.DemoBankRobotics: return <FeatureGuard view={View.DemoBankRobotics}><DemoBankRoboticsView /></FeatureGuard>;
            case View.DemoBankSimulations: return <FeatureGuard view={View.DemoBankSimulations}><DemoBankSimulationsView /></FeatureGuard>;
            case View.DemoBankVoiceServices: return <FeatureGuard view={View.DemoBankVoiceServices}><DemoBankVoiceServicesView /></FeatureGuard>;
            case View.DemoBankSearchSuite: return <FeatureGuard view={View.DemoBankSearchSuite}><DemoBankSearchSuiteView /></FeatureGuard>;
            case View.DemoBankDigitalTwin: return <FeatureGuard view={View.DemoBankDigitalTwin}><DemoBankDigitalTwinView /></FeatureGuard>;
            case View.DemoBankWorkflowEngine: return <FeatureGuard view={View.DemoBankWorkflowEngine}><DemoBankWorkflowEngineView /></FeatureGuard>;
            case View.DemoBankObservabilityPlatform: return <FeatureGuard view={View.DemoBankObservabilityPlatform}><DemoBankObservabilityPlatformView /></FeatureGuard>;
            case View.DemoBankFeatureManagement: return <FeatureGuard view={View.DemoBankFeatureManagement}><DemoBankFeatureManagementView /></FeatureGuard>;
            case View.DemoBankExperimentationPlatform: return <FeatureGuard view={View.DemoBankExperimentationPlatform}><DemoBankExperimentationPlatformView /></FeatureGuard>;
            case View.DemoBankLocalizationPlatform: return <FeatureGuard view={View.DemoBankLocalizationPlatform}><DemoBankLocalizationPlatformView /></FeatureGuard>;
            case View.DemoBankFleetManagement: return <FeatureGuard view={View.DemoBankFleetManagement}><DemoBankFleetManagementView /></FeatureGuard>;
            case View.DemoBankKnowledgeBase: return <FeatureGuard view={View.DemoBankKnowledgeBase}><DemoBankKnowledgeBaseView /></FeatureGuard>;
            case View.DemoBankMediaServices: return <FeatureGuard view={View.DemoBankMediaServices}><DemoBankMediaServicesView /></FeatureGuard>;
            case View.DemoBankEventGrid: return <FeatureGuard view={View.DemoBankEventGrid}><DemoBankEventGridView /></FeatureGuard>;
            case View.DemoBankApiManagement: return <FeatureGuard view={View.DemoBankApiManagement}><DemoBankApiManagementView /></FeatureGuard>;

            // Mega Dashboard - Security & Identity
            case View.SecurityAccessControls: return <FeatureGuard view={View.SecurityAccessControls}><AccessControlsView /></FeatureGuard>;
            case View.SecurityRoleManagement: return <FeatureGuard view={View.SecurityRoleManagement}><RoleManagementView /></FeatureGuard>;
            case View.SecurityAuditLogs: return <FeatureGuard view={View.SecurityAuditLogs}><AuditLogsView /></FeatureGuard>;
            case View.SecurityFraudDetection: return <FeatureGuard view={View.SecurityFraudDetection}><FraudDetectionView /></FeatureGuard>;
            case View.SecurityThreatIntelligence: return <FeatureGuard view={View.SecurityThreatIntelligence}><ThreatIntelligenceView /></FeatureGuard>;
            // Mega Dashboard - Finance & Banking
            case View.FinanceCardManagement: return <FeatureGuard view={View.FinanceCardManagement}><CardManagementView /></FeatureGuard>;
            case View.FinanceLoanApplications: return <FeatureGuard view={View.FinanceLoanApplications}><LoanApplicationsView /></FeatureGuard>;
            case View.FinanceMortgages: return <FeatureGuard view={View.FinanceMortgages}><MortgagesView /></FeatureGuard>;
            case View.FinanceInsuranceHub: return <FeatureGuard view={View.FinanceInsuranceHub}><InsuranceHubView /></FeatureGuard>;
            case View.FinanceTaxCenter: return <FeatureGuard view={View.FinanceTaxCenter}><TaxCenterView /></FeatureGuard>;
            // Mega Dashboard - Advanced Analytics
            case View.AnalyticsPredictiveModels: return <FeatureGuard view={View.AnalyticsPredictiveModels}><PredictiveModelsView /></FeatureGuard>;
            case View.AnalyticsRiskScoring: return <FeatureGuard view={View.AnalyticsRiskScoring}><RiskScoringView /></FeatureGuard>;
            case View.AnalyticsSentimentAnalysis: return <FeatureGuard view={View.AnalyticsSentimentAnalysis}><SentimentAnalysisView /></FeatureGuard>;
            case View.AnalyticsDataLakes: return <FeatureGuard view={View.AnalyticsDataLakes}><DataLakesView /></FeatureGuard>;
            case View.AnalyticsDataCatalog: return <FeatureGuard view={View.AnalyticsDataCatalog}><DataCatalogView /></FeatureGuard>;
            // Mega Dashboard - User & Client Tools
            case View.UserClientOnboarding: return <FeatureGuard view={View.UserClientOnboarding}><ClientOnboardingView /></FeatureGuard>;
            case View.UserClientKycAml: return <FeatureGuard view={View.UserClientKycAml}><KycAmlView /></FeatureGuard>;
            case View.UserClientUserInsights: return <FeatureGuard view={View.UserClientUserInsights}><UserInsightsView /></FeatureGuard>;
            case View.UserClientFeedbackHub: return <FeatureGuard view={View.UserClientFeedbackHub}><FeedbackHubView /></FeatureGuard>;
            case View.UserClientSupportDesk: return <FeatureGuard view={View.UserClientSupportDesk}><SupportDeskView /></FeatureGuard>;
            // Mega Dashboard - Developer & Integration
            case View.DeveloperSandbox: return <FeatureGuard view={View.DeveloperSandbox}><SandboxView /></FeatureGuard>;
            case View.DeveloperSdkDownloads: return <FeatureGuard view={View.DeveloperSdkDownloads}><SdkDownloadsView /></FeatureGuard>;
            case View.DeveloperWebhooks: return <FeatureGuard view={View.DeveloperWebhooks}><WebhooksView /></FeatureGuard>;
            case View.DeveloperCliTools: return <FeatureGuard view={View.DeveloperCliTools}><CliToolsView /></FeatureGuard>;
            case View.DeveloperExtensions: return <FeatureGuard view={View.DeveloperExtensions}><ExtensionsView /></FeatureGuard>;
            case View.DeveloperApiKeys: return <FeatureGuard view={View.DeveloperApiKeys}><ApiKeysView /></FeatureGuard>;
            case View.DeveloperApiContracts: return <FeatureGuard view={View.DeveloperApiContracts}><ApiContractsView /></FeatureGuard>;
            // Mega Dashboard - Ecosystem & Connectivity
            case View.EcosystemPartnerHub: return <FeatureGuard view={View.EcosystemPartnerHub}><PartnerHubView /></FeatureGuard>;
            case View.EcosystemAffiliates: return <FeatureGuard view={View.EcosystemAffiliates}><AffiliatesView /></FeatureGuard>;
            case View.EcosystemIntegrationsMarketplace: return <FeatureGuard view={View.EcosystemIntegrationsMarketplace}><IntegrationsMarketplaceView /></FeatureGuard>;
            case View.EcosystemCrossBorderPayments: return <FeatureGuard view={View.EcosystemCrossBorderPayments}><CrossBorderPaymentsView /></FeatureGuard>;
            case View.EcosystemMultiCurrency: return <FeatureGuard view={View.EcosystemMultiCurrency}><MultiCurrencyView /></FeatureGuard>;
            // Mega Dashboard - Digital Assets & Web3
            case View.DigitalAssetsNftVault: return <FeatureGuard view={View.DigitalAssetsNftVault}><NftVaultView /></FeatureGuard>;
            case View.DigitalAssetsTokenIssuance: return <FeatureGuard view={View.DigitalAssetsTokenIssuance}><TokenIssuanceView /></FeatureGuard>;
            case View.DigitalAssetsSmartContracts: return <FeatureGuard view={View.DigitalAssetsSmartContracts}><SmartContractsView /></FeatureGuard>;
            case View.DigitalAssetsDaoGovernance: return <FeatureGuard view={View.DigitalAssetsDaoGovernance}><DaoGovernanceView /></FeatureGuard>;
            case View.DigitalAssetsOnChainAnalytics: return <FeatureGuard view={View.DigitalAssetsOnChainAnalytics}><OnChainAnalyticsView /></FeatureGuard>;
            // Mega Dashboard - Business & Growth
            case View.BusinessSalesPipeline: return <FeatureGuard view={View.BusinessSalesPipeline}><SalesPipelineView /></FeatureGuard>;
            case View.BusinessMarketingAutomation: return <FeatureGuard view={View.BusinessMarketingAutomation}><MarketingAutomationView /></FeatureGuard>;
            case View.BusinessGrowthInsights: return <FeatureGuard view={View.BusinessGrowthInsights}><GrowthInsightsView /></FeatureGuard>;
            case View.BusinessCompetitiveIntelligence: return <FeatureGuard view={View.BusinessCompetitiveIntelligence}><CompetitiveIntelligenceView /></FeatureGuard>;
            case View.BusinessBenchmarking: return <FeatureGuard view={View.BusinessBenchmarking}><BenchmarkingView /></FeatureGuard>;
            // Mega Dashboard - Regulation & Legal
            case View.RegulationLicensing: return <FeatureGuard view={View.RegulationLicensing}><LicensingView /></FeatureGuard>;
            case View.RegulationDisclosures: return <FeatureGuard view={View.RegulationDisclosures}><DisclosuresView /></FeatureGuard>;
            case View.RegulationLegalDocs: return <FeatureGuard view={View.RegulationLegalDocs}><LegalDocsView /></FeatureGuard>;
            case View.RegulationRegulatorySandbox: return <FeatureGuard view={View.RegulationRegulatorySandbox}><RegulatorySandboxView /></FeatureGuard>;
            case View.RegulationConsentManagement: return <FeatureGuard view={View.RegulationConsentManagement}><ConsentManagementView /></FeatureGuard>;
            // Mega Dashboard - Infra & Ops
            case View.InfraContainerRegistry: return <FeatureGuard view={View.InfraContainerRegistry}><ContainerRegistryView /></FeatureGuard>;
            case View.InfraApiThrottling: return <FeatureGuard view={View.InfraApiThrottling}><ApiThrottlingView /></FeatureGuard>;
            case View.InfraObservability: return <FeatureGuard view={View.InfraObservability}><ObservabilityView /></FeatureGuard>;
            case View.InfraIncidentResponse: return <FeatureGuard view={View.InfraIncidentResponse}><IncidentResponseView /></FeatureGuard>;
            case View.InfraBackupRecovery: return <FeatureGuard view={View.InfraBackupRecovery}><BackupRecoveryView /></FeatureGuard>;

            // Blueprints
            case View.CrisisAIManager: return <FeatureGuard view={View.CrisisAIManager}><CrisisAIManagerView /></FeatureGuard>;
            case View.CognitiveLoadBalancer: return <FeatureGuard view={View.CognitiveLoadBalancer}><CognitiveLoadBalancerView /></FeatureGuard>;
            case View.HolographicMeetingScribe: return <FeatureGuard view={View.HolographicMeetingScribe}><HolographicMeetingScribeView /></FeatureGuard>;
            case View.QuantumProofEncryptor: return <FeatureGuard view={View.QuantumProofEncryptor}><QuantumProofEncryptorView /></FeatureGuard>;
            case View.EtherealMarketplace: return <FeatureGuard view={View.EtherealMarketplace}><EtherealMarketplaceView /></FeatureGuard>;
            case View.AdaptiveUITailor: return <FeatureGuard view={View.AdaptiveUITailor}><AdaptiveUITailorView /></FeatureGuard>;
            case View.UrbanSymphonyPlanner: return <FeatureGuard view={View.UrbanSymphonyPlanner}><UrbanSymphonyPlannerView /></FeatureGuard>;
            case View.PersonalHistorianAI: return <FeatureGuard view={View.PersonalHistorianAI}><PersonalHistorianAIView /></FeatureGuard>;
            case View.DebateAdversary: return <FeatureGuard view={View.DebateAdversary}><DebateAdversaryView /></FeatureGuard>;
            case View.CulturalAssimilationAdvisor: return <FeatureGuard view={View.CulturalAssimilationAdvisor}><CulturalAssimilationAdvisorView /></FeatureGuard>;
            case View.DynamicSoundscapeGenerator: return <FeatureGuard view={View.DynamicSoundscapeGenerator}><DynamicSoundscapeGeneratorView /></FeatureGuard>;
            case View.EmergentStrategyWargamer: return <FeatureGuard view={View.EmergentStrategyWargamer}><EmergentStrategyWargamerView /></FeatureGuard>;
            case View.EthicalGovernor: return <FeatureGuard view={View.EthicalGovernor}><EthicalGovernorView /></FeatureGuard>;
            case View.QuantumEntanglementDebugger: return <FeatureGuard view={View.QuantumEntanglementDebugger}><QuantumEntanglementDebuggerView /></FeatureGuard>;
            case View.LinguisticFossilFinder: return <FeatureGuard view={View.LinguisticFossilFinder}><LinguisticFossilFinderView /></FeatureGuard>;
            case View.ChaosTheorist: return <FeatureGuard view={View.ChaosTheorist}><ChaosTheoristView /></FeatureGuard>;
            case View.SelfRewritingCodebase: return <FeatureGuard view={View.SelfRewritingCodebase}><SelfRewritingCodebaseView /></FeatureGuard>;
            
             // Visionary Blueprints
            case View.GenerativeJurisprudence: return <FeatureGuard view={View.GenerativeJurisprudence}><GenerativeJurisprudenceView /></FeatureGuard>;
            case View.AestheticEngine: return <FeatureGuard view={View.AestheticEngine}><AestheticEngineView /></FeatureGuard>;
            case View.NarrativeForge: return <FeatureGuard view={View.NarrativeForge}><NarrativeForgeView /></FeatureGuard>;
            case View.WorldBuilder: return <FeatureGuard view={View.WorldBuilder}><WorldBuilderView /></FeatureGuard>;
            case View.SonicAlchemy: return <FeatureGuard view={View.SonicAlchemy}><SonicAlchemyView /></FeatureGuard>;
            case View.AutonomousScientist: return <FeatureGuard view={View.AutonomousScientist}><AutonomousScientistView /></FeatureGuard>;
            case View.ZeitgeistEngine: return <FeatureGuard view={View.ZeitgeistEngine}><ZeitgeistEngineView /></FeatureGuard>;
            case View.CareerTrajectory: return <FeatureGuard view={View.CareerTrajectory}><CareerTrajectoryView /></FeatureGuard>;
            case View.LudicBalancer: return <FeatureGuard view={View.LudicBalancer}><LudicBalancerView /></FeatureGuard>;
            case View.HypothesisEngine: return <FeatureGuard view={View.HypothesisEngine}><HypothesisEngineView /></FeatureGuard>;
            case View.LexiconClarifier: return <FeatureGuard view={View.LexiconClarifier}><LexiconClarifierView /></FeatureGuard>;
            case View.CodeArcheologist: return <FeatureGuard view={View.CodeArcheologist}><CodeArcheologistView /></FeatureGuard>;


            // Constitutional
            case View.TheCharter: return <FeatureGuard view={View.TheCharter}><TheCharterView /></FeatureGuard>;
            case View.FractionalReserve: return <FeatureGuard view={View.FractionalReserve}><FractionalReserveView /></FeatureGuard>;
            case View.FinancialInstrumentForge: return <FeatureGuard view={View.FinancialInstrumentForge}><FinancialInstrumentForgeView /></FeatureGuard>;

            default: return <MetaDashboardView openModal={openModal} />;
        }
    };

    const backgroundStyle = {
        backgroundImage: customBackgroundUrl ? `url(${customBackgroundUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    };

    const IllusionLayer = () => {
        if (!activeIllusion || activeIllusion === 'none') return null;
        return <div className={`absolute inset-0 z-0 ${activeIllusion}-illusion`}></div>
    };

    return (
        <div className="relative min-h-screen bg-gray-950 text-gray-300 font-sans" style={backgroundStyle}>
            <IllusionLayer />
             <div className="relative z-10 flex min-h-screen bg-transparent">
                <Sidebar activeView={activeView} setActiveView={handleSetView} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
                <div className="flex-1 flex flex-col lg:ml-64">
                    <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} setActiveView={handleSetView} />
                    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                        {renderView()}
                    </main>
                </div>
                <VoiceControl setActiveView={handleSetView} />
                <GlobalChatbot />

                {modalView && (
                    <ModalView 
                        activeView={modalView}
                        previousView={modalPreviousView}
                        closeModal={closeModal}
                        openModal={openModal}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
