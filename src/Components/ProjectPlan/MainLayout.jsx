import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#0b111e] text-white flex flex-col">
      <Navbar />

      <div className="flex-grow w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-10">
    
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-8">
          <span className="hover:text-white cursor-pointer">Inicio</span>
          <span>></span>
          <span className="hover:text-white cursor-pointer">Oportunidades</span>
          <span>></span>
          <span className="text-gray-300">Diseño Gráfico</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <main className="lg:col-span-8 overflow-hidden">
            <MainContent />
          </main>
          <aside className="lg:col-span-4 sticky top-24">
            <Sidebar />
          </aside>   
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;