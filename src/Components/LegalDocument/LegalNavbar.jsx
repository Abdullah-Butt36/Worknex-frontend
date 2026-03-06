import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LegalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Solicitudes", route: "/opportunities-feed" },
    { name: "Proveedores", route: "/opportunities-feed" },
    { name: "Herramientas", route: "/identity-verification" },
    { name: "Comunidad", route: "/dashboard-home" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100]">
      <div className="w-full px-6 md:px-10 h-20 flex items-center justify-between">
        {/* LEFT: Logo Section */}
        <div 
          onClick={() => navigate("/")}
          className="flex items-center gap-3 flex-shrink-0 cursor-pointer"
        >
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
              <button
                key={link.name}
                onClick={() => navigate(link.route)}
                className={`text-[17px] font-[600] transition-colors ${
                  link.active
                    ? "text-[#1D61E7]"
                    : "text-[#4A5568] hover:text-[#1D61E7]"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => navigate("/login-step-1")}
            className="bg-[#1D61E7] text-white px-8 py-2.5 rounded-[16px] text-[16px] font-[600] hover:bg-[#174ec2] transition-all active:scale-95 shadow-md shadow-blue-100/50"
          >
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
            <button
              key={link.name}
              onClick={() => {
                navigate(link.route);
                setIsOpen(false);
              }}
              className={`text-[16px] font-[700] text-left ${link.active ? "text-[#1D61E7]" : "text-slate-600"}`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => { navigate("/login-step-1"); setIsOpen(false); }}
            className="w-full bg-[#1D61E7] text-white py-3.5 rounded-[12px] font-[700]"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LegalNavbar;
