import React from 'react';
import Navbar from './Navbar';
import MainProposalContent from './MainProposalContent';
import ProposalSidebar from './ProposalSidebar';


const ProposalLayout = () => {
  return (
    <div className="min-h-screen bg-[#0b111e] text-white flex flex-col">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Main Wrapper */}
      <div className="flex-grow w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-8">
        
        {/* Breadcrumbs Section */}
        <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-8">
          <span className="hover:text-blue-400 cursor-pointer">Inicio</span>
          <span>/</span>
          <span className="hover:text-blue-400 cursor-pointer">Mis Propuestas</span>
          <span>/</span>
          <span className="text-gray-300">Rediseño de Identidad Corporativa</span>
        </nav>

        {/* Responsive Grid System (12 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Side: Proposal Details & Milestones (8 columns) */}
          <main className="lg:col-span-8 space-y-10">
            <MainProposalContent />
          </main>

          {/* Right Side: Summary Card & Client Info (4 columns) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <ProposalSidebar />
          </aside>
          
        </div>
      </div>

     
    </div>
  );
};

export default ProposalLayout;