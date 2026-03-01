import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import VerificationModal from './VerificationModal';
import Footer from './Footer';

const ProposalViewPage = () => {
  const [isProtected, setIsProtected] = useState(true);

  return (
    <div className="min-h-screen bg-[#060B15] flex flex-col font-sans antialiased relative overflow-x-hidden">
      
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Main Layout: Blur ko 'none' kar diya hai taaki content clear dikhe */}
      <main className={`flex-grow w-full max-w-[1300px] mx-auto px-4 md:px-8 lg:px-12 py-8 transition-all duration-500 ${isProtected ? 'blur-none pointer-events-none' : ''}`}>
        
        {/* Breadcrumbs & Title */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-4">
            <span>Inicio</span> / <span>Solicitudes</span> / <span>Rediseño de Identidad</span> / <span className="text-gray-200">Propuesta #482</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <h1 className="text-white text-[28px] md:text-[36px] font-[800]">Propuesta: Rediseño de Marca</h1>
              <span className="bg-[#FEF3C7]/10 text-[#F59E0B] text-[11px] font-[700] px-3 mt-2 py-1 rounded-full border border-[#F59E0B]/20">Pendiente</span>
            </div>
            <button className="bg-[#1F2937] text-white px-6 py-2.5 rounded-full text-[14px] font-[600] border border-gray-700">
              ✕ Rechazar
            </button>
          </div>
        </div>

        {/* Grid Section: Ab ye bilkul clear nazar aayega */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <MainContent />
          </div>
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>

        <Footer />
      </main>

      {/* 3. PROTECTED OVERLAY: Sirf light transparent background */}
      {isProtected && (
        <div className="fixed inset-0 z-[2000] flex items-start justify-center bg-black/20 px-4 pt-40 md:pt-[200px] overflow-y-auto">
          {/* Backdrop blur yahan se bhi hata diya hai taaki piche ka har pixel clear ho */}
          <VerificationModal onVerify={() => setIsProtected(false)} />
        </div>
      )}

    </div>
  );
};

export default ProposalViewPage;