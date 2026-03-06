import React, { useState } from "react";
import { Search, Bell, Mail, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-4 md:px-8 lg:px-10 py-4 flex items-center justify-between sticky top-0 z-[100]">
      {/* 1. Left Side: Logo & Search */}
      <div className="flex items-center gap-4 lg:gap-10 flex-1">
        <Link to="/" className="flex items-center gap-2.5 group cursor-pointer shrink-0">
          <div className="relative w-9 h-9 md:w-9 md:h-9 bg-[#1D61E7] rounded-full flex items-center justify-center shadow-lg shadow-blue-100">
            <div
              className="w-[9px] h-[9px] md:w-[18px] md:h-[18px] bg-white"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            ></div>
          </div>
          <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-black uppercase">
            WORKNEX
          </span>
        </Link>

        {/* Search Bar - Hidden on Mobile */}
        <div className="hidden md:flex items-center bg-[#F8FAFC] px-4 py-2.5 rounded-2xl w-full max-w-[300px] lg:max-w-md border border-transparent focus-within:border-blue-100 focus-within:bg-white transition-all">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Buscar servicios o profesionales..."
            className="bg-transparent border-none outline-none text-[15px] font-[400] w-full text-gray-900 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* 2. Middle: Navigation Links (Desktop Only) */}
      <div className="hidden xl:flex items-center gap-8 px-6">
        <a  className="text-[16px] font-[700] text-[#0F172A]  pb-0.5">
          Oportunidades
        </a>
        <Link
          to="/opportunities-feed"
          className="text-[16px] font-[600] text-gray-400 hover:text-[#0F172A] transition-colors"
        >
          Solicitudes
        </Link>
        <Link
          to="/wizard-1"
          className="text-[16px] font-[600] text-gray-400 hover:text-[#0F172A] transition-colors"
        >
          Servicios
        </Link>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <div className="flex items-center gap-1 md:gap-3 pr-2 md:pr-4 border-r border-gray-100">
          <button 
            onClick={() => navigate('/message-center')}
            className="p-2 text-gray-400 hover:bg-gray-50 rounded-xl transition-all relative"
          >
            <Bell size={20} />
            <span className="absolute top-2  right-2 w-2 h-2 bg-[#1D61E7] border-2 border-white rounded-full"></span>
          </button>
          <button 
            onClick={() => navigate('/active-chat')}
            className="hidden sm:block p-2 text-gray-400 hover:bg-gray-50 rounded-xl transition-all"
          >
            <Mail size={20} />
          </button>

          {/* Mobile Search Icon */}
          <button className="md:hidden p-2 text-gray-400 hover:bg-gray-50 rounded-xl transition-all">
            <Search size={20} />
          </button>
        </div>

        {/* User Profile - (Clean, no arrow) */}
        <Link to="/personal-socument" className="flex items-center cursor-pointer group">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#E2E8F0] rounded-full overflow-hidden border-2 border-white shadow-sm transition-transform group-hover:scale-105 border-transparent group-hover:border-blue-400">
            <img src="https://ui-avatars.com/api/?name=User&background=cbd5e1&color=fff" alt="User" />
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden p-2 text-gray-600 ml-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 xl:hidden shadow-lg z-[110]">
          <a href="#" className="text-[14px] font-[700] text-[#1D61E7]">
            Oportunidades
          </a>
          <Link to="/opportunities-feed" className="text-[14px] font-[600] text-gray-600">
            Solicitudes
          </Link>
          <Link to="/wizard-1" className="text-[14px] font-[600] text-gray-600">
            Servicios
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
