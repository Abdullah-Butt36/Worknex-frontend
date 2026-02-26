import React from "react";
import Sidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";

const DashboardParent = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 min-w-0 lg:ml-[260px] relative">
        <DashboardContent />
      </main>
    </div>
  );
};

export default DashboardParent;
