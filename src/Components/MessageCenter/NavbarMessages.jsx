import React from 'react';
import { Bell, Settings, Briefcase } from 'lucide-react';

const NavbarMessages = () => {
  return (
    <nav className="h-[64px] md:h-[70px] w-full border-b border-gray-800/50 bg-[#060B15] flex items-center justify-between px-4 md:px-6 z-50 sticky top-0">
      
      {/* LEFT: Logo & Breadcrumb */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* LOGO SECTION: Mobile pe hidden (hidden), Desktop pe show (md:flex) */}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {/* Worknex Icon */}
          <div className="w-8 h-8 bg-[#1D61E7] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
            <Briefcase className="text-white" size={18} fill="white" />
          </div>
          {/* Brand Name */}
          <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-white uppercase">
            WORKNEX
          </span>
        </div>
        
        {/* Separator - Hidden on mobile too to match the logo hiding */}
        <div className="h-4 w-[1px] bg-gray-800 mx-1 hidden md:block"></div>
        
        {/* Title: Always visible, but adjusted padding on mobile */}
        <h2 className="text-[15px] md:text-[15px] font-[700] text-gray-300 truncate max-w-[150px] md:max-w-none">
          Centro de Mensajes
        </h2>
      </div>

      {/* RIGHT: Actions (Including Settings) */}
      <div className="flex items-center gap-1 md:gap-3">
        
        {/* Settings Icon - Now Responsive */}
        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
          <Settings size={19} />
        </button>

        {/* Notifications */}
        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all relative">
          <Bell size={19} />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-blue-500 rounded-full border border-[#060B15]"></span>
        </button>

        {/* Profile Avatar */}
        <div className="ml-1 md:ml-2 cursor-pointer shrink-0">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-gray-500 rounded-full border border-gray-700 overflow-hidden ring-1 ring-white/5 transition-transform active:scale-95">
            {/* User image placeholder */}
          </div>
        </div>
      </div>

    </nav>
  );
};

export default NavbarMessages;