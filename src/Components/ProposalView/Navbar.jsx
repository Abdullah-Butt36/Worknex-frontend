import React, { useState } from 'react';
import { Bell, Menu, X, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Oportunidades', href: '#' },
    { name: 'Mis Propuestas', href: '#', active: true },
    { name: 'Mensajes', href: '#' },
    { name: 'Servicios', href: '#' },
  ];

  return (
    <nav className="bg-[#1e293b] border-b border-gray-800 text-white sticky top-0 z-50 w-full">
      {/* Corner alignment: max-w-full and minimal padding */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT: Briefcase Logo Section */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1 rounded-md text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* --- New Briefcase Logo --- */}
            <div className="flex items-center gap-3 cursor-pointer shrink-0">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-900/20">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-white fill-current" />
              </div>
              <span className="font-bold text-[18px] md:text-[20px] tracking-tighter text-white uppercase">
                WORKNEX
              </span>
            </div>
          </div>

          {/* RIGHT: Nav Links & Profile */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Desktop Links - Positioned next to profile as per design */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-medium transition-colors ${
                    link.active ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Profile Avatar */}
            <div className="flex items-center ml-2 border-l border-gray-700 pl-4 md:pl-6">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#334155] border border-gray-600 overflow-hidden shrink-0 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
                <img src="https://ui-avatars.com/api/?name=User&background=475569&color=fff" alt="Profile" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-gray-800">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-3 text-base font-medium rounded-lg ${
                    link.active ? 'text-white bg-blue-600/10 border border-blue-500/20' : 'text-gray-400'
                }`}
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