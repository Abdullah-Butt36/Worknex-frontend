import React from 'react';
import { ArrowLeft, DollarSign, Clock } from 'lucide-react';

const HeaderSection = () => {
  return (
    /* Adjusted padding for small screens: px-4 on mobile */
    <div className="w-full max-w-[1100px] mx-auto pt-6 md:pt-10 px-4 md:px-6 font-sans">
      
      {/* 1. Back Button: Slightly smaller text on mobile */}
      <button className="flex items-center gap-2 md:gap-3 text-gray-400 hover:text-white transition-colors mb-6 group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[13px] md:text-[14px] font-[500]">Volver a la solicitud</span>
      </button>

      {/* 2. Main Page Titles: Responsive font sizes */}
      <div className="mb-8 md:mb-10">
        <h1 className="text-white text-[30px] md:text-[40px] font-[700] tracking-tight mb-2 leading-tight">
          Enviar Propuesta de Servicio
        </h1>
        <p className="text-gray-400 text-[14px] md:text-[16px]">
          Complete los detalles a continuación para enviar su oferta al cliente.
        </p>
      </div>

      {/* 3. PROJECT INFO CARD: Column on mobile, Row on desktop */}
      <div className="w-full bg-[#111827] border border-gray-800 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative overflow-hidden">
        
        {/* Abstract Circle/Avatar: Resized for mobile */}
        <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-gray-700 rounded-full shrink-0 shadow-inner"></div>

        {/* Text Content: Center aligned on mobile */}
        <div className="flex-grow text-center md:text-left w-full">
          {/* Badge & Time: Centered on mobile */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="bg-[#1D4ED8] text-white text-[10px] md:text-[11px] font-[700] px-3 py-1 rounded-full uppercase tracking-wider">
              Desarrollo Web
            </span>
            <span className="text-gray-500 text-[12px] font-[500]">
              • Publicado hace 2h
            </span>
          </div>

          {/* Project Title */}
          <h2 className="text-white text-[22px] md:text-[28px] font-[700] mb-3 leading-snug">
            Desarrollo de E-commerce B2B
          </h2>

          {/* Project Description */}
          <p className="text-gray-400 text-[14px] leading-relaxed mb-6 max-w-[700px] mx-auto md:mx-0">
            Buscamos un desarrollador full-stack con experiencia en Shopify Plus para crear una tienda mayorista personalizada. El proyecto incluye integración con ERP.
          </p>

          {/* Meta Info: Budget & Delivery (Separated on mobile) */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 md:gap-10 border-t border-gray-800/50 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                <DollarSign size={18} />
              </div>
              <div className="text-left">
                <p className="text-white font-[700] text-[15px]">$5,000 - $8,000</p>
                <p className="text-gray-500 text-[11px] font-[700] uppercase tracking-tighter">USD</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                <Clock size={18} />
              </div>
              <div className="text-left">
                <p className="text-white font-[700] text-[15px]">2 meses</p>
                <p className="text-gray-500 text-[11px] font-[700] uppercase tracking-tighter">Entrega estimada</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeaderSection;