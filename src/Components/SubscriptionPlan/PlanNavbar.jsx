import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu

const PlanNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'Explore', 'Enterprise'];

  return (
    <nav className="w-full py-4 md:py-5 px-4 md:px-12 border-b border-slate-800/50 bg-[#0F172A] sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* --- LOGO --- */}
        <div className="flex items-center gap-2 md:gap-3 group cursor-pointer shrink-0">
          <div className="relative w-7 h-7 md:w-8 md:h-8 flex flex-col items-center justify-center gap-0.5 md:gap-1">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-600 rounded-full transition-transform duration-300 group-hover:-translate-y-1"></div>
            <div className="flex gap-0.5 md:gap-1">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-600 rounded-full transition-transform duration-300 group-hover:-translate-x-1"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-600 rounded-full transition-transform duration-300 group-hover:translate-x-1"></div>
            </div>
          </div>
          <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-white uppercase">
            WORKNEX
          </span>
        </div>

        {/* --- DESKTOP LINKS --- */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-slate-400 font-bold hover:text-white text-[16px]  transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* --- RIGHT ACTIONS --- */}
        <div className="flex items-center gap-3 md:gap-6">
          <button className="text-slate-400 text-[13px] md:text-[13px] font-bold hover:text-white transition-colors  tracking-wider">
            Log In
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 md:px-7 md:py-2.5 rounded-full text-[12px] md:text-[13px] font-black   transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] active:scale-95">
            Sign Up
          </button>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE LINKS DROPDOWN --- */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#111827] border-b border-slate-800 py-6 px-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href="#" 
              className="block text-slate-300 hover:text-blue-500 text-sm font-bold  transition-colors border-b border-slate-800/50 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default PlanNavbar;