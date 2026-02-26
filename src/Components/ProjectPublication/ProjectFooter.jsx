import React from "react";
import { HelpCircle, FileText, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] py-10 px-6 md:px-20 mt-auto relative z-20">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#9CA3AF] text-[13px] font-[500] tracking-tight text-center md:text-left">
          © 2024 WORKNEX. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-8 text-[#9CA3AF]">
          <a href="#" className="hover:text-gray-500 transition-colors">
            <HelpCircle size={22} strokeWidth={2.2} />
          </a>
          <a href="#" className="hover:text-gray-500 transition-colors">
            <FileText size={22} strokeWidth={2.2} />
          </a>
          <a href="#" className="hover:text-gray-500 transition-colors">
            <Lock size={22} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
