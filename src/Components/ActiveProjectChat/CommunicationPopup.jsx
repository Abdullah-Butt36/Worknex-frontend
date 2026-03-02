import React from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const CommunicationPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/70 transition-opacity" />

      <div className="relative bg-[#112119] border border-white/10 w-full max-w-[480px] max-h-[92vh] overflow-y-auto no-scrollbar rounded-[28px] md:rounded-[32px] p-6 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,1)] animate-in fade-in zoom-in duration-300 pointer-events-auto">
        <div className="flex justify-center mb-5 md:mb-6">
          <div className="bg-[#1A1A10] p-3 md:p-4 rounded-2xl border border-yellow-500/10">
            <AlertTriangle
              className="text-yellow-500"
              size={28}
              md:size={36}
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className="text-center space-y-2 mb-6 md:mb-8">
          <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight leading-tight">
            Aviso importante sobre comunicaciones
          </h2>
          <p className="text-slate-400 text-[12px] md:text-[13px] leading-relaxed font-medium px-1">
            Si continúas fuera de WORKNEX, ten en cuenta que:
          </p>
        </div>

        <div className="space-y-4 mb-8 md:mb-10">
          {[
            "WORKNEX no interviene en acuerdos, pagos ni resolución de disputas.",
            "Las comunicaciones fuera de la plataforma no quedan registradas.",
            "Cualquier acuerdo alcanzado será responsabilidad exclusiva de las partes.",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 w-4 h-4 rounded-full border-2 border-slate-700 flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 bg-[#00E676] rounded-full shadow-[0_0_8px_#00E676]" />
              </div>
              <p className="text-slate-300 text-[12px] md:text-[13px] leading-snug font-medium opacity-90">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-center">
          <button
            onClick={onClose}
            className="w-full bg-[#00E676] hover:bg-[#00C864] text-[#06110D] py-3.5 md:py-4 rounded-2xl font-black text-[12px] md:text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95"
          >
            Entendido, continuar <CheckCircle2 size={18} strokeWidth={3} />
          </button>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] transition-colors py-2"
          >
            Continuar fuera (Bajo responsabilidad)
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunicationPopup;
