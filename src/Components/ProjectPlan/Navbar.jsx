import React, { useState } from "react";
import { Search, Bell, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Oportunidades", href: "#" },
    { name: "Servicios", href: "#" },
    { name: "Mensajes", href: "#" },
    { name: "Comunidad", href: "#" },
  ];

  return (
    <nav className="bg-[#1e293b] border-b border-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Logo Section */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1 rounded-md text-gray-400 hover:text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <div className="flex items-center gap-4 cursor-pointer shrink-0">
              <div className="w-6 h-6 md:w-7 md:h-7 flex flex-wrap">
                <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-transparent"></div>
                <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-black"></div>
                <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-black"></div>
                <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-transparent"></div>
              </div>
              <span className="font-[700] text-[18px] md:text-[22px]  text-white uppercase">
                WORKNEX
              </span>
            </div>

            <div className="hidden md:flex ml-6 space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-5">
            {/* Search - Desktop ONLY */}
            <div className="hidden md:block relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                className="w-32 lg:w-48 pl-10 pr-3 py-1.5 rounded-md bg-[#2d3748] border-none text-gray-300 text-sm focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Buscar..."
                type="text"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-1 text-gray-400 hover:text-white">
              <Bell className="h-5 w-5 sm:h-6 w-6" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#1e293b]"></span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-2 border-l border-gray-700 pl-3 sm:pl-5">
              <div className="w-8 h-8 rounded-full bg-gray-600 border border-gray-500 overflow-hidden shrink-0">
                <img
                  src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-gray-800">
          <div className="px-6 py-6 space-y-4">
            {/* Search Bar inside Menu (Mobile only) */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#1e293b] border border-gray-700 text-gray-300 text-sm focus:outline-none focus:border-blue-500"
                placeholder="Buscar..."
                type="text"
              />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
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
