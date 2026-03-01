import React, { useState } from 'react';
import { Search, Bell, X } from 'lucide-react';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 w-full shadow-sm">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* --- MOBILE SEARCH VIEW --- */}
          {isSearchOpen ? (
            <div className="flex items-center w-full gap-3 animate-in fade-in duration-300">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  autoFocus
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-[#f1f5f9] border-none text-sm outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Buscar oportunidades..."
                  type="text"
                />
              </div>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          ) : (
            <>
              {/* --- REGULAR VIEW (Logo + Left Side) --- */}
              <div className="flex items-center gap-4 flex-1">
                {/* Logo Section */}
                <div className="flex items-center gap-2 md:gap-2.5 shrink-0">
                  <div className="relative w-8 h-8 md:w-9 md:h-9 bg-[#1D61E7] rounded-full flex items-center justify-center shadow-lg shadow-blue-100">
                    <div
                      className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] bg-white"
                      style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                    ></div>
                  </div>
                  <span className="font-[700] text-lg md:text-[22px] tracking-tight text-black uppercase">
                    WORKNEX
                  </span>
                </div>

                {/* Desktop Search (Hidden on Mobile) */}
                <div className="hidden md:block relative max-w-md w-full ml-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    className="w-full pl-10 pr-3 py-2 rounded-full bg-[#f1f5f9] border-none text-sm outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Buscar oportunidades..."
                    type="text"
                  />
                </div>
              </div>

              {/* --- RIGHT SIDE (Icons & Profile) --- */}
              <div className="flex items-center gap-2 sm:gap-6">
                {/* Mobile Search Toggle Icon */}
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="md:hidden p-2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>

                {/* Progress Bar (Hidden on Mobile) */}
                <div className="hidden lg:flex flex-col items-end gap-1 border-r border-gray-100 pr-6">
                  <div className="flex justify-between w-32 text-[9px] text-gray-400 font-bold uppercase tracking-tighter">
                    <span>Enviadas</span>
                    <span className="text-blue-600">8/10</span>
                  </div>
                  <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-[80%] rounded-full"></div>
                  </div>
                </div>

                {/* Bell & Profile */}
                <div className="flex items-center gap-2 sm:gap-4">
                  <button className="relative p-1.5 text-gray-400">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                  </button>
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-200 border border-gray-100 overflow-hidden cursor-pointer">
                    <img src="https://ui-avatars.com/api/?name=User&background=cbd5e1&color=fff" alt="User" />
                  </div>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;