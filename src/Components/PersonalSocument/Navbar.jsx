import React, { useState } from "react";
import { Search, Bell, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", to: "/dashboard-home" },
    { name: "Solicitudes", to: "/opportunities-feed" },
    { name: "Documentos", to: "/personal-socument" },
    { name: "Herramientas", to: "/identity-verification" },
  ];

  const activeClass = "text-white font-semibold";
  const inactiveClass = "text-slate-400 hover:text-white transition-colors";

  return (
    <nav className="bg-[#0f172a] text-white border-b border-slate-800 sticky top-0 z-50 w-full px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-6 flex-1">

          {/* Logo — Link to home */}
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <div className="w-6 h-6 md:w-7 md:h-7 flex flex-wrap">
              <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-transparent"></div>
              <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-white"></div>
              <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-white"></div>
              <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-transparent"></div>
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tighter uppercase group-hover:opacity-80 transition-opacity">
              WORKNEX
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:block relative max-w-xs w-full ml-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-700 rounded-full text-sm text-slate-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500"
              placeholder="Buscar..."
              type="text"
            />
          </div>
        </div>

        {/* RIGHT: Nav Links & Icons */}
        <div className="flex items-center gap-2 md:gap-8">

          {/* Desktop Nav Links — NavLink auto-highlights active route */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) => isActive ? activeClass : inactiveClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-3 md:gap-5 border-l border-slate-700 pl-4 md:pl-8">
            <Link to="/message-center" className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#0f172a]"></span>
            </Link>

            {/* Profile Avatar — links to personal documents */}
            <Link to="/personal-socument" className="block">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-700 border border-slate-600 overflow-hidden hover:ring-2 hover:ring-blue-500/50 transition-all">
                <img
                  src="https://ui-avatars.com/api/?name=User&background=1e293b&color=fff"
                  alt="Profile"
                />
              </div>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-400"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0f172a] border-b border-slate-800 p-4 space-y-2 animate-in slide-in-from-top duration-300">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 outline-none"
              placeholder="Buscar..."
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 px-3 rounded-lg text-left transition-all ${
                    isActive
                      ? "text-white bg-slate-800/60"
                      : "text-slate-400 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
