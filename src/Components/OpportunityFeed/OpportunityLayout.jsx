import React from 'react';
import Navbar from './Navbar';
import FilterSidebar from './FilterSidebar';
import OpportunityFeed from './OpportunityFeed';

const OpportunityLayout = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      {/* 1. Navbar stays dark */}
      <Navbar />

      {/* 2. Main Content Wrapper */}
      {/* max-w-full and minimal horizontal padding for "corner-near" look */}
      <div className="flex-grow w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar (Filters) - 300px width fixed on desktop */}
          <aside className="w-full lg:w-[280px] shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main Feed Section */}
          <main className="flex-1">
            {/* Header within Main */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-[#1e293b]">Oportunidades Disponibles</h1>
              <p className="text-gray-500 text-sm mt-1 font-medium">
                Explora proyectos y conecta con clientes potenciales hoy.
              </p>
            </div>

            <OpportunityFeed />
          </main>
          
        </div>
      </div>
    </div>
  );
};

export default OpportunityLayout;