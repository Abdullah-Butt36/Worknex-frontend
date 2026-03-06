import React from "react";
import {
  X,
  Search,
  ShoppingCart,
  CheckCircle2,
  FileText,
  Layout,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LegalSide = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-2xl shadow-gray-200/50">
      {/* --- HEADER: Title & Version --- */}
      <div className="p-8 flex items-start justify-between border-b border-gray-50">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
            <FileText className="text-[#1D61E7]" size={24} />
          </div>
          <div>
            <h2 className="text-[22px] font-[700] text-[#0F172A] leading-tight">
              Contrato de Servicios
            </h2>
            <p className="text-[14px] font-[600] text-gray-400 mt-1">
              Versión 2024
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <X size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* --- PREVIEW SECTION: The "Vista Previa" Box --- */}
      <div className="p-8">
        <div className="relative aspect-[4/3] bg-[#F8FAFC] rounded-[24px] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center overflow-hidden group">
          {/* Mock Document Lines */}
          <div className="w-full px-12 space-y-4 opacity-20">
            <div className="h-4 bg-gray-300 rounded-full w-2/3"></div>
            <div className="h-3 bg-gray-200 rounded-full w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
          </div>

          {/* Glassmorphism Vista Previa Label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/60 backdrop-blur-md border border-white/80 px-10 py-5 rounded-3xl shadow-xl">
              <span className="text-[28px] font-[800] text-[#1D61E7]/80 tracking-tight uppercase">
                Vista Previa
              </span>
            </div>
          </div>

          {/* Zoom Button Icon */}
          <button className="absolute bottom-6 right-6 p-3 bg-white/90 backdrop-blur shadow-lg rounded-full text-gray-600 hover:scale-110 transition-transform">
            <Search size={20} strokeWidth={3} />
          </button>
        </div>

        {/* --- DESCRIPTION --- */}
        <div className="mt-8">
          <h4 className="text-[18px] font-[700] text-[#0F172A] mb-3">
            Descripción
          </h4>
          <p className="text-[14.5px] font-[600] text-[#64748B] leading-relaxed">
            Este documento establece los términos y condiciones de una relación
            de servicios profesionales. Incluye cláusulas generales y
            disposiciones opcionales comunes.
          </p>
        </div>

        {/* --- PRICING & LICENSE --- */}
        <div className="mt-10 pt-6 border-t border-gray-50 flex items-end justify-between mb-6">
          <div>
            <p className="text-[14px] font-[700] text-gray-400 mb-1">
              Precio total
            </p>
            <h3 className="text-[32px] font-[700] text-[#0F172A] leading-none">
              $29.00 USD
            </h3>
          </div>
          <span className="bg-[#EFF6FF] text-[#1D61E7] px-3 py-1.5 rounded-lg text-[12px] font-[700] border border-blue-100 ">
            Licencia Comercial
          </span>
        </div>

        {/* --- BUY BUTTON --- */}
        <button
          onClick={() => navigate("/login-step-1")}
          className="w-full bg-[#1D61E7] text-white py-5 rounded-[20px] font-[700] text-[18px] flex items-center justify-center gap-3 hover:bg-blue-700 shadow-xl shadow-blue-100 active:scale-95 transition-all mb-8"
        >
          Comprar ahora <ShoppingCart size={20} strokeWidth={3} />
        </button>

        {/* --- CHECKLIST: Benefits --- */}
        <div className="space-y-4">
          {[
            "Definición de pagos y anticipos",
            "Cláusula de rescisión de contrato",
            "Guía de uso explicativa",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="text-[#22C55E] shrink-0 mt-0.5"
                strokeWidth={3}
              />
              <span className="text-[14px] font-[600] text-gray-600">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalSide;
