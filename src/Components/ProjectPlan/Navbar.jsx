import React, { useState } from "react";
import { Search, Bell, Menu, X, ArrowLeft } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const navLinks = [
    { name: "Oportunidades", href: "#" },
    { name: "Servicios", href: "#" },
    { name: "Mensajes", href: "#" },
    { name: "Comunidad", href: "#" },
  ];

  return (
    <nav className="bg-[#1e293b] border-b border-gray-800 text-white sticky top-0 z-50 w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 w-full relative">
          {/* 1. MOBILE SEARCH MODE */}
          {isSearchVisible ? (
            <div className="flex items-center w-full gap-2 animate-in fade-in slide-in-from-right-4 duration-300 lg:hidden">
              <button
                onClick={() => setIsSearchVisible(false)}
                className="p-2 -ml-2 text-gray-400 hover:text-white shrink-0"
              >
                <ArrowLeft size={22} />
              </button>
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  autoFocus
                  className="w-full pl-9 pr-10 py-2 rounded-xl bg-[#2d3748] border-none text-white text-sm focus:ring-2 focus:ring-[#1D61E7] outline-none transition-all"
                  placeholder="Buscar en Worknex..."
                  type="text"
                />
                <button
                  onClick={() => setIsSearchVisible(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4 shrink-0">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-1 -ml-1 text-gray-400 hover:text-white transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className="flex items-center gap-2.5 cursor-pointer">
                  <div className="w-6 h-6 md:w-7 md:h-7 flex flex-wrap shrink-0">
                    <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-transparent"></div>
                    <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-black"></div>
                    <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-black"></div>
                    <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-transparent"></div>
                  </div>
                  <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-white uppercase">
                    WORKNEX
                  </span>
                </div>

                <div className="hidden md:flex ml-4 lg:ml-8 space-x-5 lg:space-x-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-300 hover:text-white text-[14px] lg:text-sm font-semibold transition-all whitespace-nowrap"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-4 shrink-0">
                <button
                  onClick={() => setIsSearchVisible(true)}
                  className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Search size={22} />
                </button>

                <div className="hidden md:block relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    className="w-32 lg:w-48 pl-9 pr-3 py-1.5 rounded-full bg-[#2d3748] border-none text-gray-300 text-[13px] focus:ring-1 focus:ring-[#1D61E7] outline-none"
                    placeholder="Buscar..."
                    type="text"
                  />
                </div>

                {/* Notifications */}
                <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                  <Bell size={22} />
                  <span className="absolute top-2 right-2.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#1e293b]"></span>
                </button>

                {/* Profile */}
                <div className="border-l border-gray-700 ml-1 pl-3 sm:pl-4">
                  <div className="w-8 h-8 rounded-full bg-gray-600 border border-gray-500 overflow-hidden shrink-0 cursor-pointer hover:border-white transition-all">
                    <img
                      src="https://ui-avatars.com/api/?name=User&background=1D61E7&color=fff"
                      alt="Profile"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && !isSearchVisible && (
        <div className="md:hidden bg-[#111827] border-t border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3.5 text-base font-bold text-gray-300 hover:text-white hover:bg-[#1e293b] rounded-2xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
