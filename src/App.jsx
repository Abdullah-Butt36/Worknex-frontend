import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// --- Import All Components (Naming fixed to avoid clashes) ---
import LandingPage from "./Components/LandingPage/LandingPage";
import RoleSelectionPage from "./Components/RoleSelection/RoleSelectionPage";
import IdentifyRole from "./Components/IdentifyRole/IdentifyRole";
import SecureOtp1 from "./Components/SecureOtp1/SecureOtp1";
import SecureOtp2 from "./Components/SecureOtp2/SecureOtp2";
import TermsAndConditions from "./Components/TermsandConditions/TermsAndConditions";

import DashboardParent from "./Components/DashboardHome/DashboardParent";
import ClientDashboard from "./Components/ClientDashboard/ClientDashboard";

import ProjectWizard1 from "./Components/ProjectWizard1/MainLayout";
import ProjectWizard2 from "./Components/ProjectWizard2/MainLayout2";
import ProjectPublication from "./Components/ProjectPublication/ProjectPublication";
import ProjectSummary from "./Components/ProjectSummary/ProjectSummary";

import OpportunityLayout from "./Components/OpportunityFeed/OpportunityLayout";
import OpportunitiesForm from "./Components/OpportunityForm/OpportunitiesLayout";
import ProposalPage from "./Components/SubmitProposal/ProposalPage";
import ProposalHistoryPage from "./Components/ProposalHistory/ProposalHistoryPage";
import ProposalViewPage from "./Components/ProposalSoftGate/ProposalViewPage";
import ProposalLayout from "./Components/ProposalView/ProposalLayout";

import MessageCenterPage from "./Components/MessageCenter/MessageCenterPage";
import ActiveChat from "./Components/ActiveProjectChat/MainLayout";
import SubscriptionPage from "./Components/SubscriptionPlan/SubscriptionPage";
import VerificationLayout from "./Components/IdentityVerification/VerificationLayout";
import LegalParent from "./Components/LegalDocument/LegalParent";
import PersonalSocumentLayout from "./Components/PersonalSocument/PersonalSocumentLayout";
import ContractAcceptance from "./Components/ContractAcceptance/ContractAcceptance";
import ProjectPlan from "./Components/ProjectPlan/MainLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 1. Onboarding & Auth */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/role-selection" element={<RoleSelectionPage />} />
        <Route path="/identify-role" element={<IdentifyRole />} />
        <Route path="/login-step-1" element={<SecureOtp1 />} />
        <Route path="/login-step-2" element={<SecureOtp2 />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />

        {/* 2. Dashboards */}
        <Route path="/dashboard-home" element={<DashboardParent />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />

        {/* 3. Project Flow (Wizards) */}
        <Route path="/wizard-1" element={<ProjectWizard1 />} />
        <Route path="/wizard-2" element={<ProjectWizard2 />} />
        <Route path="/project-publication" element={<ProjectPublication />} />
        <Route path="/project-plan" element={<ProjectPlan />} />
        <Route path="/project-summary" element={<ProjectSummary />} />

        {/* 4. Opportunities & Proposals */}
        <Route path="/opportunities-feed" element={<OpportunityLayout />} />
        <Route path="/opportunity-form" element={<OpportunitiesForm />} />
        <Route path="/submit-proposal" element={<ProposalPage />} />
        <Route path="/proposal-history" element={<ProposalHistoryPage />} />
        <Route path="/proposal-soft-gate" element={<ProposalViewPage />} />
        <Route path="/proposal-view" element={<ProposalLayout />} />

        {/* 5. Messages & Operations */}
        <Route path="/message-center" element={<MessageCenterPage />} />
        <Route path="/active-chat" element={<ActiveChat />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/identity-verification" element={<VerificationLayout />} />
        <Route path="/legal-documents" element={<LegalParent />} />
        <Route path="/personal-socument" element={<PersonalSocumentLayout />} />
        <Route path="/contract-acceptance" element={<ContractAcceptance />} />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
