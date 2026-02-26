import React from "react";
import { Bell, Briefcase } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-[72px] bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-12 sticky top-0 z-[1000] font-sans">
      <div className="flex items-center gap-2.5 cursor-pointer">
        <div className="w-[32px] h-[32px] bg-[#1D61E7] rounded-lg flex items-center justify-center shadow-sm">
          <Briefcase size={18} className="text-white fill-white" />
        </div>

        <span className="text-[18px] md:text-[20px] font-[700] tracking-tighter text-[#111827]">
          WORKNEX
        </span>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-full transition-colors">
          <Bell size={22} className="text-[#111827]" />

          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        <div className="cursor-pointer group relative">
          <div className="w-10 h-10 md:w-11 md:h-11 bg-[#E5E7EB] rounded-full border-2 border-transparent group-hover:border-blue-100 transition-all flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-[#D1D5DB]"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
