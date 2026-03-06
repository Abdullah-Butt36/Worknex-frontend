import React from "react";
import { Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12 md:pt-20 pb-10 border-t border-gray-100 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 pb-12 md:pb-16">
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              {/* Original Logo Box Design */}
              <div className="w-7 h-7 flex flex-wrap shrink-0">
                <div className="w-3.5 h-3.5 bg-white border-[0.1px] border-gray-100"></div>
                <div className="w-3.5 h-3.5 bg-black"></div>
                <div className="w-3.5 h-3.5 bg-black"></div>
                <div className="w-3.5 h-3.5 bg-white border-[0.1px] border-gray-100"></div>
              </div>
              <span className="font-[700] text-[22px] tracking-tight text-black uppercase">
                WORKNEX
              </span>
            </div>
            <p className="text-gray-500 text-[14px] leading-relaxed max-w-[300px]">
              La plataforma integral líder para el mercado hispanohablante.
              Conectamos talento, aseguramos futuros y optimizamos finanzas.
            </p>
          </div>

          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Plataforma */}
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-[15px]">
                Plataforma
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-500 text-[14px]">
                  Soluciones
                </li>
                <li className="text-gray-500 text-[14px]">
                  Seguros
                </li>
                <li className="text-gray-500 text-[14px]">
                  Finanzas
                </li>
                <li className="text-gray-500 text-[14px]">
                  Empresas
                </li>
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="font-bold text-gray-900 mb-5 text-[15px]">
                Recursos
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-500 text-[14px]">
                  Blog
                </li>
                <li className="text-gray-500 text-[14px]">
                  Guías
                </li>
                <li className="text-gray-500 text-[14px]">
                  Ayuda
                </li>
                <li className="text-gray-500 text-[14px]">
                  Partners
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold text-gray-900 mb-5 text-[15px]">
                Legal
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-500 text-[14px]">
                  Privacidad
                </li>
                <li>
                  <Link
                    to="/termsandconditions"
                    className="text-gray-500 text-[14px] hover:text-[#1D61E7] transition-colors"
                  >
                    Términos
                  </Link>
                </li>
                <li className="text-gray-500 text-[14px]">
                  Cookies
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[13px]">
            © 2026 WORKNEX. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-black hover:text-[#1D61E7] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-black hover:text-[#1D61E7] transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
