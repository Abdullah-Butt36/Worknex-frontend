import React from "react";
import { Bell, User, Briefcase } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-[70px] md:h-[75px] bg-[#0B1221] border-b border-gray-800 flex items-center justify-between px-4 md:px-12 lg:px-20 sticky top-0 z-[1000] font-sans transition-all">
      <Link to="/" className="flex items-center gap-6 md:gap-2.5 cursor-pointer group">
        <div className="w-8 h-8 md:w-9 md:h-9 bg-[#1D61E7] rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
          <Briefcase
            className="text-white"
            size={18}
            md:size={22}
            fill="white"
          />
        </div>

        <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-white uppercase">
          WORKNEX
        </span>
      </Link>

      <div className="flex items-center gap-3 md:gap-6">
        <button 
          onClick={() => navigate('/message-center')}
          className="w-9 h-9 md:w-10 md:h-10 bg-[#1F2937] rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors relative"
        >
          <Bell size={18} md:size={20} strokeWidth={2} />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0B1221]"></span>
        </button>

        <button 
          onClick={() => navigate('/personal-socument')}
          className="w-9 h-9 md:w-10 md:h-10 bg-[#374151] rounded-full flex items-center justify-center border border-gray-600 hover:border-blue-500 transition-all overflow-hidden"
        >
          <User size={20} md:size={22} className="text-gray-300" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
