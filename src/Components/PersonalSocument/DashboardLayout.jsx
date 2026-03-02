import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DocumentLibrary from "./DocumentLibrary";
import FooterSection from "./FooterSection";

const DashboardLayout = () => {
  return (
    <div className="h-screen bg-[#0b111e] text-white flex flex-col font-sans overflow-hidden">
      <div className="z-50 flex-none">
        <Navbar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden md:block w-72 border-r border-slate-800/50 bg-[#0b111e] flex-none overflow-y-auto custom-scrollbar">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-y-auto bg-[#0b111e] custom-scrollbar">
          <div className="max-w-[1400px] mx-auto p-6 md:p-12">
            <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-8 font-medium uppercase tracking-[0.2em]">
              <span className="hover:text-white cursor-pointer transition-colors">
                Inicio
              </span>
              <span className="text-slate-700">/</span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Herramientas
              </span>
              <span className="text-slate-700">/</span>
              <span className="text-slate-300">Documentos</span>
            </div>

            <DocumentLibrary />
            <FooterSection />
          </div>
        </main>
      </div>

      <style jsx global>{`
        /* Custom scrollbar to keep it invisible/clean */
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
