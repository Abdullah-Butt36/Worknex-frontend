import React from "react";
import Navbar from "./Navbar";
import HeaderSection from "./HeaderSection";
import ProposalDetails from "./ProposalDetails";

const ProposalPage = () => {
  return (
    <div className="min-h-screen bg-[#060B15] flex flex-col font-sans antialiased">
      <Navbar />

      <main className="w-full max-w-[1100px] mx-auto flex flex-col px-0 md:px-6 lg:px-8 pb-10 md:pb-20">
        <div className="mb-6 md:mb-10">
          <HeaderSection />
        </div>

        <div className="mt-0 md:mt-2">
          <ProposalDetails />
        </div>
      </main>
    </div>
  );
};

export default ProposalPage;
