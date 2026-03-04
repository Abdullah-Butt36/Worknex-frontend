import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[72px] bg-white border-b border-[#F3F4F6] flex items-center justify-between px-6 md:px-12 lg:px-20 sticky top-0 z-[1000] font-sans antialiased">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 md:w-7 md:h-7 flex flex-wrap">
          <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-white"></div>
          <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-black"></div>
          <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-black"></div>
          <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-white"></div>
        </div>
        <span className="text-[20px] font-[900] tracking-tighter text-black uppercase">
          WORKNEX
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-10">
        {["Dashboard", "Proyectos", "Proveedores", "Mensajes"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-[14.5px] font-[700] text-[#4B5563] hover:text-black transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <button className="hidden sm:block bg-[#1D61E7] text-white px-7 py-2.5 rounded-full font-[700] text-[14px] hover:bg-blue-700 transition-all shadow-md">
          Publicar proyecto
        </button>

        <div className="w-10 h-10 bg-[#E5E7EB] rounded-full border border-gray-100 flex items-center justify-center overflow-hidden cursor-pointer shrink-0">
          <div className="w-full h-full bg-[#D1D5DB]"></div>
        </div>

        <button
          className="lg:hidden p-1 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-5 lg:hidden shadow-lg animate-in fade-in slide-in-from-top-2">
          {["Dashboard", "Proyectos", "Proveedores", "Mensajes"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[16px] font-[700] text-[#111827]"
            >
              {link}
            </a>
          ))}
          <button className="w-full bg-[#1D61E7] text-white py-3.5 rounded-full font-[800]">
            Publicar proyecto
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
