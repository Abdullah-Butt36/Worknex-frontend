import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full h-[80px] bg-white border-b border-[#F3F4F6] flex items-center justify-between px-6 md:px-12 lg:px-20 sticky top-0 z-[1000] font-sans antialiased">
      <div 
        onClick={() => navigate("/")}
        className="flex items-center gap-2 shrink-0 cursor-pointer"
      >
        <div className="w-6 h-6 md:w-7 md:h-7 flex flex-wrap">
          <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-white"></div>
          <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-black"></div>
          <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-black"></div>
          <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-white"></div>
        </div>
        <span className="text-[20px] font-[700] tracking-tighter text-black uppercase">
          WORKNEX
        </span>
      </div>

      {/* --- NAV LINKS: Exact match with image links --- */}
      <div className="hidden lg:flex items-center gap-10">
        {["Inicio", "Proveedores", "Solicitudes", "Mensajes"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-[14.5px] font-[500] text-[#111827] hover:text-blue-600 transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="w-11 h-11 bg-[#D1D5DB] rounded-full border border-gray-100 cursor-pointer hover:opacity-80 transition-opacity"></div>

        <button
          className="lg:hidden p-1 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 lg:hidden shadow-xl z-[999]">
          {["Inicio", "Proveedores", "Solicitudes", "Mensajes"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[16px] font-[700] text-[#111827]"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default ProjectNav;
