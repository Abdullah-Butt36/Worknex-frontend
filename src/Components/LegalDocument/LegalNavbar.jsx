import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const LegalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Solicitudes", href: "#" },
    { name: "Proveedores", href: "#" },
    { name: "Documentos", href: "#", active: true },
    { name: "Comunidad", href: "#" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100]">
      <div className="w-full px-6 md:px-10 h-20 flex items-center justify-between">
        {/* LEFT: Logo Section */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div
            className="w-[34px] h-[30px] bg-[#1D61E7]"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          ></div>
          <span className="font-[700] text-[20px] md:text-[22px] tracking-tight text-black uppercase">
            WORKNEX
          </span>
        </div>

        <div className="hidden lg:flex items-center justify-end flex-1 gap-12">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[17px] font-[600] transition-colors ${
                  link.active
                    ? "text-[#1D61E7]"
                    : "text-[#4A5568] hover:text-[#1D61E7]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="bg-[#1D61E7] text-white px-8 py-2.5 rounded-[16px] text-[16px] font-[600] hover:bg-[#174ec2] transition-all active:scale-95 shadow-md shadow-blue-100/50">
            Iniciar Sesión
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 p-6" : "max-h-0"}`}
      >
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[16px] font-[700] ${link.active ? "text-[#1D61E7]" : "text-slate-600"}`}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-[#1D61E7] text-white py-3.5 rounded-[12px] font-[700]">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LegalNavbar;
