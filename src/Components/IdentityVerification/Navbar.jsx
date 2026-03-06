import React, { useState } from "react";
import { Search, Bell, MessageSquare, Menu, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-slate-800/50 bg-[#0F172A] font-inter">
      <nav className="h-[72px] w-full flex items-center justify-between px-4 md:px-10">
        {/* LEFT SIDE: Hamburger & Logo */}
        <div className="flex items-center gap-4 md:gap-12">
          <button
            className="text-slate-400 md:hidden p-1 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* THE CORRECT WIDE LOGO */}
          <Link to="/" className="flex items-center gap-5 group cursor-pointer shrink-0">
            <div
              className="w-8 h-8 md:w-9 md:h-9 bg-blue-600 flex items-center justify-center transition-transform group-hover:scale-110"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            ></div>
            <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-white uppercase">
              WORKNEX
            </span>
          </Link>

          {/* SEARCH BAR (Desktop) */}
          <div className="relative w-[240px] lg:w-[320px] hidden md:block">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
              <Search size={18} strokeWidth={2.5} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#020617] border border-slate-700/50 rounded-xl py-2 pl-11 pr-4 text-[14px] text-slate-200 focus:border-blue-500/50 outline-none transition-all placeholder:text-slate-600 shadow-lg"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Icons (Always Visible) */}
        <div className="flex items-center gap-2 md:gap-8">
          {/* NAV LINKS (Desktop Only) */}
          <div className="hidden xl:flex items-center gap-7 text-white text-[14px] font-semibold">
            {[
              { name: "Oportunidades", to: "/opportunities-feed" },
              { name: "Proveedores", to: "/opportunities-feed" },
              { name: "Servicios", to: "/wizard-1" },
              { name: "Comunidad", to: "/dashboard-home" }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-slate-400 transition-colors tracking-tight"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ACTION BUTTONS (Notification & Mail - Visible on Mobile) */}
          <div className="flex items-center gap-1 md:gap-4 md:border-l border-slate-800/80 md:pl-8">
            <Link to="/message-center" className="p-2 text-slate-400 hover:text-white relative hover:bg-slate-800/40 rounded-full transition-all">
              <Bell size={20} strokeWidth={2} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-[2px] border-[#0F172A]"></span>
            </Link>

            <Link to="/active-chat" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/40 rounded-full transition-all">
              <MessageSquare size={20} strokeWidth={2} />
            </Link>

            {/* USER PROFILE */}
            <Link to="/personal-socument" className="flex items-center gap-1 cursor-pointer group shrink-0 ml-1">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-[#D9D9D9] rounded-full border-2 border-slate-800 overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="https://ui-avatars.com/api/?name=Alex+Morgan&background=475569&color=fff"
                  alt="User"
                />
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <div
        className={`absolute top-[72px] left-0 w-full bg-[#0F172A] border-b border-slate-800 shadow-2xl md:hidden transition-all duration-300 ease-in-out z-40 overflow-hidden ${
          isMenuOpen ? "max-h-[400px] opacity-100 py-5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 space-y-6">
          {/* Mobile Search Bar - Dark Background */}
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
              <Search size={18} strokeWidth={2.5} />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#020617] border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-[14px] text-slate-200 outline-none"
            />
          </div>

          <nav className="flex flex-col gap-1">
            {[
              { name: "Oportunidades", to: "/opportunities-feed" },
              { name: "Proveedores", to: "/opportunities-feed" },
              { name: "Servicios", to: "/wizard-1" },
              { name: "Comunidad", to: "/dashboard-home" }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-white text-[15px] font-semibold hover:text-slate-400 transition-colors py-3 border-b border-slate-800/30 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
