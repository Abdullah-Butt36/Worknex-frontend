import React from "react";
import {
  X,
  ShieldCheck,
  FileText,
  Calendar,
  Package,
  Flag,
  CheckCircle2,
  AlertTriangle,
  Info,
  ArrowRight,
} from "lucide-react";

const ContractAcceptance = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-4 md:p-10 font-inter antialiased">
      {/* Main Modal Container */}
      <div className="bg-[#151D2F] w-full max-w-[920px] rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-slate-800/50 flex flex-col my-4">
        {/* --- HEADER --- */}
        <div className="relative p-6 md:p-10 border-b border-slate-800/60 bg-[#0F172A]">
          <button className="absolute right-4 top-5 md:right-8 md:top-10 text-slate-500 hover:text-white transition-all p-2 hover:bg-slate-800/30 rounded-full z-10">
            <X size={22} className="md:w-7 md:h-7" />
          </button>

          <div className="flex items-center gap-3 md:gap-4 mb-2 pr-10 md:pr-0">
            <ShieldCheck
              className="text-[#2563EB] shrink-0"
              size={26}
              md:size={30}
              strokeWidth={2.5}
            />
            <h1 className="text-[20px] md:text-[30px] font-[700] text-white leading-tight">
              Confirmación de Acuerdo
            </h1>
          </div>
          <p className="text-slate-400 text-[13px] md:text-[16px] font-medium ml-10 md:ml-11 tracking-wide">
            Proyecto:{" "}
            <span className="text-slate-200 font-semibold">
              Redesign E-commerce Platform
            </span>
          </p>
        </div>

        {/* --- BODY --- */}
        <div className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 bg-[#151D2F]">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText size={20} className="text-slate-500" />
                <h3 className="font-bold text-[18px] md:text-[20px] text-white">
                  Resumen del Acuerdo
                </h3>
              </div>

              <div className="bg-[#0F172A]/80 rounded-2xl p-6 md:p-7 border border-slate-800/40 space-y-5">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-slate-400 font-medium text-[14px] md:text-[15px]">
                    Monto de Referencia
                  </span>
                  <span className="text-white text-[16px] md:text-[17px] font-semibold">
                    150 UF + IVA
                  </span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <span className="text-slate-400 font-medium text-[14px] md:text-[15px]">
                    Impuestos (IVA)
                  </span>
                  <span className="text-white text-[16px] md:text-[17px] text-right leading-tight max-w-[150px]">
                    Según normativa vigente
                  </span>
                </div>
              </div>
            </div>

            {/* Alert Box */}
            <div className="flex gap-4 p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10">
              <AlertTriangle
                className="text-amber-500 shrink-0 mt-1 md:mt-3.5"
                size={18}
              />
              <p className="text-[14px] md:text-[16px] text-slate-300 font-medium leading-relaxed">
                Los pagos y términos financieros se gestionan directamente entre
                las partes fuera de WORKNEX.
              </p>
            </div>

            <p className="text-[13px] md:text-[14px] text-slate-300 leading-relaxed font-medium opacity-70">
              Este documento sirve como confirmación de la relación comercial.
              Cualquier disputa financiera debe resolverse según el contrato
              privado firmado entre las partes.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10">
            {/* Cronograma */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Calendar size={20} className="text-slate-500" />
                <h3 className="font-bold text-[18px] md:text-[20px] text-white">
                  Cronograma
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-[#0F172A] rounded-2xl p-4 border border-slate-800/50 flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800/40 rounded-xl flex items-center justify-center shrink-0">
                    <Flag size={18} className="text-slate-400" />
                  </div>
                  <div>
                    <p className="text-[14px] md:text-[15px] text-slate-500 mb-0.5 md:mb-1">
                      Inicio
                    </p>
                    <p className="text-white font-bold text-[14px] md:text-[15px]">
                      15 Oct, 2023
                    </p>
                  </div>
                </div>
                <div className="flex-1 bg-blue-600/5 rounded-2xl p-4 border border-blue-500/20 flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                    <Flag size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-[14px] md:text-[15px] text-slate-500 mb-0.5 md:mb-1">
                      Entrega Final
                    </p>
                    <p className="text-white font-bold text-[14px] md:text-[15px]">
                      12 Dic, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Package size={18} className="text-slate-500" />
                <h3 className="font-bold text-[16px] text-white">
                  Entregables Acordados
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    t: "UI Kit Completo (Figma)",
                    d: "Sistema de diseño, componentes y variables.",
                  },
                  {
                    t: "Prototipo Alta Fidelidad",
                    d: "Flujos de usuario principales interactivos para desktop.",
                  },
                  {
                    t: "Documentación de Desarrollo",
                    d: "Guía de implementación y exportación de assets.",
                  },
                  {
                    t: "Revisión Post-Entrega",
                    d: "2 rondas de iteraciones basadas en feedback.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2
                      size={18}
                      className="text-[#2563EB] shrink-0 mt-0.5"
                    />
                    <div className="space-y-1">
                      <h4 className="text-white text-[15px] md:text-[16px] leading-tight tracking-tight">
                        {item.t}
                      </h4>
                      <p className="text-slate-500 text-[13px] md:text-[14px] font-medium leading-relaxed tracking-wide">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="p-6 md:p-10 bg-[#0F172A] border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-8 mt-auto">
          <div className="flex gap-4 w-full md:max-w-[520px]">
            <Info size={18} className="text-slate-500 shrink-0 mt-0.5" />
            <p className="text-[11px] md:text-[12px] text-slate-500 font-semibold leading-[1.8] uppercase tracking-wider">
              Al aceptar, confirmas que has revisado los términos de este
              acuerdo profesional. WORKNEX actúa como facilitador de la
              relación.
            </p>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-8 shrink-0">
            <button className="text-white font-bold text-[14px] hover:text-slate-400 transition-colors tracking-wide">
              Cancelar
            </button>
            <button className="bg-[#2563EB] hover:bg-blue-500 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-[14px] font-bold text-[14px] md:text-[15px] flex items-center gap-2.5 transition-all shadow-lg active:scale-95">
              Aceptar <span className="hidden sm:inline">y Comenzar</span>{" "}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractAcceptance;
