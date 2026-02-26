import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TrustCenter from "./TrustCenter";
import Aside from "./Aside";

const VerificationLayout = () => {
  return (
    <div className="min-h-screen bg-[#020617] font-inter overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 flex flex-col lg:flex-row">
          <div className="flex-1 min-w-0">
            <TrustCenter />
          </div>

          <Aside />
        </main>
      </div>
    </div>
  );
};

export default VerificationLayout;
