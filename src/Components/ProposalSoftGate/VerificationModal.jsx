import React from 'react';
import { Lock, ChevronRight, ShieldCheck } from 'lucide-react';

const VerificationModal = ({ onVerify }) => {
  return (
    <div className="w-full max-w-[440px] bg-[#111827]/90 border border-white/10 rounded-[28px] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
      
      {/* Icon Section: Smaller & More Compact */}
      <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-8">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
          <Lock size={22} fill="currentColor" />
        </div>
      </div>

      {/* Text Section: Adjusted Margins */}
      <h2 className="text-white text-[22px] md:text-[24px] font-[800] mb-3">
        Contenido Protegido
      </h2>
      <p className="text-gray-400 text-[14px] leading-relaxed mb-8 px-2">
        Para mantener la seguridad, necesitamos verificar tu identidad antes de mostrar precios y documentos.
      </p>

      {/* Button: Primary Action */}
      <button 
        onClick={onVerify}
        className="w-full bg-[#1D61E7] text-white py-3.5 rounded-full font-[700] text-[15px] flex items-center justify-center gap-2 hover:bg-blue-700 transition-all group"
      >
        Verificar Ahora 
        <ChevronRight size={17} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Simple Footer Text */}
      <div className="mt-6 flex items-center gap-2 text-gray-500 text-[11px] font-[500]">
        <ShieldCheck size={13} className="text-blue-500/50" />
        <span>Verificación rápida • Sin Costo • Datos encriptados</span>
      </div>

    </div>
  );
};

export default VerificationModal;