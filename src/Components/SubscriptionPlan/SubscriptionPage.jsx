import React from 'react';
import PlanNavbar from './PlanNavbar';
import PlanCards from './PlanCards';
import PlanFooter from './PlanFooter';

const SubscriptionPage = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col font-sans selection:bg-blue-500/30">
      <PlanNavbar />
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-6 md:py-24">
        <PlanCards />
      </main>

      <PlanFooter />
    </div>
  );
};

export default SubscriptionPage;