import React, { useState } from 'react';
import { Search, Briefcase, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="w-full h-[72px] bg-[#0B1221] border-b border-gray-800 flex items-center justify-between px-4 md:px-10 lg:px-16 sticky top-0 z-[1000] font-sans transition-all">
      
      {/* 1. LEFT SIDE: Logo & Name */}
      <div className={`flex items-center gap-2.5 md:gap-8 ${isSearchOpen ? 'hidden' : 'flex'}`}>
        <div className="flex items-center gap-2 md:gap-2.5 cursor-pointer">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-[#1D61E7] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Briefcase className="text-white" size={16} md:size={18} fill="white" />
          </div>
          <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-white uppercase">
            WORKNEX
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {['Explorar Profesionales', 'Solicitudes', 'Mensajes', 'Documentos'].map((link, idx) => (
            <a key={idx} href="#" className={`text-[13px] font-[500] ${link === 'Solicitudes' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* 2. CENTER/RIGHT: Responsive Search & Action Button */}
      <div className={`flex items-center gap-2 md:gap-6 ${isSearchOpen ? 'w-full' : ''}`}>
        
        {/* Search Logic */}
        <div className={`${isSearchOpen ? 'flex w-full' : 'hidden md:flex'} items-center bg-[#1F2937]/40 border border-gray-700 rounded-full px-4 py-1.5 lg:w-[240px]`}>
          <Search size={15} className="text-gray-500 mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="bg-transparent text-[13px] text-white outline-none w-full placeholder:text-gray-600"
            autoFocus={isSearchOpen}
          />
          {isSearchOpen && (
            <X size={16} className="text-gray-400 ml-2 cursor-pointer md:hidden" onClick={() => setIsSearchOpen(false)} />
          )}
        </div>

        {/* Icons & Profile Section */}
        {!isSearchOpen && (
          <div className="flex items-center gap-2 md:gap-5">
            {/* Mobile Search Icon */}
            <button className="md:hidden text-gray-400 p-1.5" onClick={() => setIsSearchOpen(true)}>
              <Search size={19} />
            </button>

            {/* Nueva Solicitud Button: Slightly narrower padding on mobile */}
            <button className="bg-[#1D61E7] text-white px-3 md:px-5 py-2 rounded-full text-[11px] md:text-[13px] font-[700] hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap">
              Nueva Solicitud
            </button>

            {/* Adjusted Profile Avatar: Smaller on mobile */}
            <div className="relative shrink-0 flex items-center">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-gray-600 rounded-full border border-gray-700 overflow-hidden ring-1 ring-white/5 hover:ring-blue-500 transition-all cursor-pointer">
                {/* User Image Here */}
              </div>
              {/* Online Status Dot */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#22C55E] border-2 border-[#0B1221] rounded-full"></span>
            </div>

            {/* Mobile Menu Icon */}
            <button className="lg:hidden text-gray-400 p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-[#0B1221] border-b border-gray-800 flex flex-col p-6 gap-4 lg:hidden z-50">
          {['Explorar Profesionales', 'Solicitudes', 'Mensajes', 'Documentos'].map((link) => (
            <a key={link} href="#" className="text-gray-300 text-[15px] py-2 border-b border-gray-800/50">{link}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;