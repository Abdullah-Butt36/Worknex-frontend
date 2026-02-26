import React from "react";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";

const ClientDashboard = () => {
  return (
    <div className="relative flex min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default ClientDashboard;
