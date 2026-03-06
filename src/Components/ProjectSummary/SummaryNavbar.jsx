import React, { useState } from "react";
import { Layers, Bell, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Dashboard", href: "/client-dashboard" },
    { name: "Solicitudes", href: "/project-summary", active: true },
    { name: "Proveedores", href: "#" },
    { name: "Mensajes", href: "/message-center" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100]">
      <div className="w-full px-4 md:px-6 py-4 flex items-center justify-between">
        <div 
          onClick={() => navigate("/")}
          className="flex items-center gap-5 cursor-pointer"
        >
          <Layers className="text-black w-7 h-7 " />
          <span className="font-[700] text-[19px] md:text-[22px]  text-black uppercase">
            WORKNEX
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[14px] font-semibold  text-gray-500">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                if (link.href !== "#") navigate(link.href);
              }}
              className={`${
                link.active
                  ? "text-black  pb-1"
                  : "hover:text-blue-600 transition-all text-gray-500"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-5">
          <button className="relative p-1.5 hover:bg-gray-50 rounded-full">
            <Bell className="w-5 h-5 text-gray-800" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Profile Circle */}
          <div className="w-9 h-9 bg-[#e5e7eb] rounded-full border border-gray-200 cursor-pointer overflow-hidden shadow-sm">
            <img
              src="https://ui-avatars.com/api/?name=W&background=d1d5db&color=fff"
              alt="User"
            />
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-1 text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl md:hidden animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col p-6 gap-5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setIsOpen(false);
                  if (link.href !== "#") navigate(link.href);
                }}
                className={`text-lg font-semibold text-left ${
                  link.active ? "text-black" : "text-gray-500"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
