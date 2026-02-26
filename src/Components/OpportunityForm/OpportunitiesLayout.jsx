import React from "react";
import Navbar from "./Navbar";
import FilterSidebar from "./FilterSidebar";
import OpportunityFeed from "./OpportunityFeed";

const OpportunitiesLayout = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-blue-100">
      <Navbar />
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-10 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-28">
              <FilterSidebar />
            </div>
          </aside>
          <main className="flex-1 min-w-0">
            <OpportunityFeed />
          </main>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesLayout;
