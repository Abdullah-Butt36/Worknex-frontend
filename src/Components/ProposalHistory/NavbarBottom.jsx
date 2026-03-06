import React, { useState } from "react";
import { Briefcase, Search, Bell, ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NavbarBottom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    // Fixed Navbar at bottom
    <nav className="w-full h-[70px] md:h-[80px] bg-[#0B1221] border-t border-gray-800 flex items-center justify-between px-4 md:px-10 lg:px-16 font-sans relative">
      {/* 1. Logo Section */}
      <Link
        to="/"
        className={`flex items-center gap-2.5 ${isSearchOpen || isMenuOpen ? "hidden md:flex" : "flex"}`}
      >
        <div className="w-8 h-8 md:w-9 md:h-9 bg-[#1D61E7] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Briefcase
            className="text-white"
            size={18}
            md:size={20}
            fill="white"
          />
        </div>
        <span className="text-[16px] md:text-[18px] font-[800] tracking-tight text-white uppercase">
          WORKNEX
        </span>
      </Link>

      {/* 2. Desktop Links */}
      <div className="hidden lg:flex items-center gap-10">
        {[
          { name: "Inicio", to: "/client-dashboard" },
          { name: "Oportunidades", to: "/opportunities-feed" },
          { name: "Propuestas", to: "/proposal-history" },
          { name: "Informes", to: "/dashboard-home" }
        ].map(
          (link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className={`text-[14px] font-[600] ${link.name === "Propuestas" ? "text-[#1D61E7]" : "text-gray-400 hover:text-white transition-colors"}`}
            >
              {link.name}
            </Link>
          ),
        )}
      </div>

      {/* 3. Icons & Search */}
      <div
        className={`flex items-center gap-2 md:gap-5 ${isSearchOpen ? "w-full" : ""}`}
      >
        <div
          className={`${isSearchOpen ? "flex w-full" : "hidden md:flex"} items-center bg-[#111827] border border-gray-800 rounded-full px-4 py-1.5 md:w-[240px]`}
        >
          <Search size={16} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-transparent text-[13px] text-white outline-none w-full"
          />
          {isSearchOpen && (
            <X
              size={16}
              className="text-gray-400 md:hidden"
              onClick={() => setIsSearchOpen(false)}
            />
          )}
        </div>

        {!isSearchOpen && (
          <div className="flex items-center gap-1 md:gap-4">
            <button
              className="md:hidden text-gray-400 p-2"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </button>
            <button 
              onClick={() => navigate('/message-center')}
              className="relative text-gray-400 p-2 hover:text-white transition-colors"
            >
              <Bell size={20} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-400 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}
      </div>

      {/* 4. ALIGNED MOBILE MENU */}
      {isMenuOpen && (
        <div className="absolute bottom-[70px] md:bottom-[80px] left-0 w-full bg-[#0B1221] border-t border-gray-800 flex flex-col lg:hidden animate-in slide-in-from-bottom duration-200 z-[100] shadow-[0_-20px_40px_rgba(0,0,0,0.4)]">
          {[
            { name: "Inicio", to: "/dashboard-home" },
            { name: "Oportunidades", to: "/opportunities-feed" },
            { name: "Propuestas", to: "/proposal-history" },
            { name: "Informes", to: "/dashboard-home" }
          ].map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={`text-[15px] font-[600] px-6 py-5 border-b border-gray-800/50 transition-colors active:bg-white/5 ${
                link.name === "Propuestas"
                  ? "text-[#1D61E7] bg-blue-500/5"
                  : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/personal-socument" onClick={() => setIsMenuOpen(false)} className="px-6 py-5 flex items-center gap-4 active:bg-white/5 transition-colors group">
            <div className="w-9 h-9 bg-gray-600 rounded-full overflow-hidden group-hover:ring-2 ring-gray-400">
              <img src="https://ui-avatars.com/api/?name=User&background=cbd5e1&color=fff" alt="User" />
            </div>
            <span className="text-gray-300 font-[600] group-hover:text-white">Mi Perfil</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarBottom;
