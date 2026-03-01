import React from "react";
import StatsCards from "./StatsCards";
import ProposalTable from "./ProposalTable";
import NavbarBottom from "./NavbarBottom"; // Navbar niche hai is design mein

const ProposalHistoryPage = () => {
  return (
    <div className="min-h-screen bg-[#060B15] flex flex-col font-sans antialiased overflow-x-hidden text-white">
      <main className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 pt-12 pb-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="space-y-2">
            <h1 className="text-[32px] md:text-[42px] font-[700] tracking-tight">
              Historial de Propuestas
            </h1>
            <p className="text-gray-500 text-[14px] md:text-[16px] max-w-[450px]">
              Gestione el estado de sus propuestas enviadas a potenciales
              clientes.
            </p>
          </div>

          {/* Button placement on the right */}
          <button className="mt-6 md:mt-0 bg-[#111827] hover:bg-[#1F2937] text-white border border-gray-800 px-5 py-2.5 rounded-full text-[14px] font-[600] flex items-center gap-2 transition-all">
            <span className="text-lg">+</span> Nueva Propuesta
          </button>
        </div>

        <div className="mb-14">
          <StatsCards />
        </div>

        <div className="w-full">
          <ProposalTable />
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full z-50">
        <NavbarBottom />
      </div>
    </div>
  );
};

export default ProposalHistoryPage;
