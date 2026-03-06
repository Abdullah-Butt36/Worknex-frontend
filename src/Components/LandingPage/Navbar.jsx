import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 h-[70px] md:h-[80px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0">
          <div className="w-6 h-6 md:w-7 md:h-7 flex flex-wrap">
            <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-white border-[0.1px] border-gray-100"></div>
            <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-black"></div>
            <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-black"></div>
            <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-white border-[0.1px] border-gray-100"></div>
          </div>
          <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-black uppercase">
            WORKNEX
          </span>
        </Link>

        {/* Desktop Links - Hidden on Mobile, Flex on LG screens */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/servicios"
            className="text-[14px] font-[700] text-[#111827] hover:text-blue-600 transition-all"
          >
            Servicios
          </Link>
          <Link
            to="/seguros"
            className="text-[14px] font-[700] text-[#111827] hover:text-blue-600 transition-all"
          >
            Seguros
          </Link>
          <Link
            to="/finanzas"
            className="text-[14px] font-[700] text-[#111827] hover:text-blue-600 transition-all"
          >
            Finanzas
          </Link>
          <Link
            to="/empresa"
            className="text-[14px] font-[700] text-[#111827] hover:text-blue-600 transition-all"
          >
            Empresa
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => navigate("/login-step-1")}
            className="hidden sm:block px-4 md:px-6 py-2 md:py-2.5 text-[13px] md:text-[15px] font-[600] text-[#374151] bg-[#F3F4F6] rounded-full hover:bg-gray-200 transition-colors"
          >
            Iniciar Sesión
          </button>
          
          <button 
            onClick={() => navigate("/role-selection")}
            className="px-5 md:px-7 py-2 md:py-2.5 text-[13px] md:text-[15px] font-[600] text-white bg-[#1D61E7] rounded-full shadow-sm hover:bg-blue-700 transition-all"
          >
            Regístrate
          </button>

          {/* Yahan Google Translate ka div drop kar dena agar zarurat ho */}
          <div id="google_translate_element"></div>

          <button
            className="lg:hidden p-2 text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <div
        className={`
        lg:hidden absolute top-[70px] left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
      `}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <Link
            to="/servicios"
            onClick={() => setIsOpen(false)}
            className="text-[16px] font-[700] text-[#111827] hover:text-blue-600 transition-all border-b border-gray-50 pb-2 last:border-0"
          >
            Servicios
          </Link>
          <Link
            to="/seguros"
            onClick={() => setIsOpen(false)}
            className="text-[16px] font-[700] text-[#111827] hover:text-blue-600 transition-all border-b border-gray-50 pb-2 last:border-0"
          >
            Seguros
          </Link>
          <Link
            to="/finanzas"
            onClick={() => setIsOpen(false)}
            className="text-[16px] font-[700] text-[#111827] hover:text-blue-600 transition-all border-b border-gray-50 pb-2 last:border-0"
          >
            Finanzas
          </Link>
          <Link
            to="/empresa"
            onClick={() => setIsOpen(false)}
            className="text-[16px] font-[700] text-[#111827] hover:text-blue-600 transition-all border-b border-gray-50 pb-2 last:border-0"
          >
            Empresa
          </Link>
          <button 
            onClick={() => {
              setIsOpen(false);
              navigate("/login-step-1");
            }}
            className="sm:hidden w-full py-3 text-[15px] font-[600] text-[#374151] bg-[#F3F4F6] rounded-xl"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;