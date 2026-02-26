import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  FileText,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const TrustCenter = () => {
  return (
    <div className="flex-1 p-5 md:p-12 overflow-y-auto bg-[#020617]">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-[14px] md:text-[14px] ">
            <ShieldCheck size={16} /> Centro de Confianza
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Verificación de Confianza Profesional
          </h1>
          <p className="text-slate-400 max-w-2xl text-[14px] md:text-[16px] leading-relaxed">
            Completa estas verificaciones para acceder a más oportunidades e
            incrementar tu visibilidad en WORKNEX.
          </p>
        </div>

        {/* Progress Card */}
        <div className="bg-[#1E293B]/50 border border-slate-800/50 rounded-[24px] p-6 md:p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6 md:mb-4">
            <div className="space-y-3">
              <h4 className="text-white font-bold text-lg">Tu Progreso</h4>
              <div className="flex flex-wrap gap-4 md:gap-6 text-[12px] md:text-[13px]">
                <span className="text-blue-500 flex items-center gap-2 font-bold">
                  <CheckCircle2 size={16} /> Acceso Básico
                </span>
                <span className="text-slate-500 flex items-center gap-2 font-bold">
                  <div className="w-4 h-4 rounded-full border-2 border-slate-700"></div>{" "}
                  Acceso Premium
                </span>
              </div>
            </div>
            <div className="text-left md:text-right w-full md:w-auto">
              <span className="text-white text-2xl md:text-4xl font-black opacity-90">
                33<span className="text-slate-600 text-2xl">/</span>
                <span className="text-slate-600 text-2xl tracking-tighter">
                  100%
                </span>
              </span>
            </div>
          </div>
          <div className="h-2.5 md:h-3 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-1/3 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-500"></div>
          </div>
        </div>

        {/* Verification List */}
        <div className="space-y-6 pb-20 md:pb-10">
          <h3 className="text-white font-bold text-xl">
            Lista de Verificación
          </h3>

          <div className="space-y-4">
            {/* Item 1 - Verified */}
            <div className="bg-[#1E293B]/40 border border-slate-800/40 border-l-4 border-l-emerald-500 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/10 rounded-full shrink-0 flex items-center justify-center text-emerald-500">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px] md:text-[16px]">
                    Identidad Personal
                  </h4>
                  <p className="text-slate-500 text-xs md:text-sm">
                    Confirma que eres una persona real.
                  </p>
                </div>
              </div>
              <span className="bg-emerald-500/10 text-emerald-500 text-[10px] md:text-[11px] font-bold px-4 py-1.5 rounded-full border border-emerald-500/20 self-start sm:self-auto">
                Verificado
              </span>
            </div>

            {/* Item 2 - In Review */}
            <div className="bg-[#1E293B]/40 border border-slate-800/40 border-l-4 border-l-amber-500 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/10 rounded-full shrink-0 flex items-center justify-center text-amber-500">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px] md:text-[16px]">
                    Selfie de Seguridad
                  </h4>
                  <p className="text-slate-500 text-xs md:text-sm">
                    Validación biométrica simple.
                  </p>
                </div>
              </div>
              <span className="bg-amber-500/10 text-amber-500 text-[10px] md:text-[11px] font-bold px-4 py-1.5 rounded-full border border-amber-500/20 self-start sm:self-auto">
                En revisión
              </span>
            </div>

            {/* Item 3 - Pending */}
            <div className="bg-[#1E293B]/40 border border-slate-800/40 rounded-2xl p-5 md:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-xl shrink-0 flex items-center justify-center text-slate-400">
                  <FileText size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px] md:text-[16px]">
                    RUT / Identificación Tributaria
                  </h4>
                  <p className="text-slate-500 text-xs md:text-sm">
                    Requerido para emitir facturas por servicios.
                  </p>
                </div>
              </div>
              <button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/10 active:scale-95">
                Subir documento
              </button>
            </div>
          </div>
          <p className="text-slate-400 text-xs md:text-sm pt-4 leading-relaxed">
            La verificación en WORKNEX es progresiva: puedes usar la plataforma
            mientras completas los pasos necesarios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustCenter;
