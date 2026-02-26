import React from "react";
import {
  ShieldCheck,
  CreditCard,
  Camera,
  FileText,
  ArrowRight,
  Lock,
  X,
} from "lucide-react";

const SecureOtp2 = () => {
  return (
    <div className="fixed inset-0 bg-gray-900/60 flex items-end md:items-center justify-center p-0 md:p-4 z-[100] font-sans">
      <div className="bg-white w-full md:max-w-[580px] rounded-t-[28px] md:rounded-[24px] shadow-2xl relative overflow-hidden">
        <button className="absolute top-5 right-6 text-gray-400 hover:text-black hidden md:block">
          <X size={20} />
        </button>

        <div className="px-6 md:px-10 pt-8 pb-6 flex flex-col">
          {/* Header Section */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center text-[#1D61E7] shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-[700] text-gray-400 uppercase tracking-tight">
                Paso 1 de 3
              </span>
              <h3 className="text-[16px] font-[800] text-[#111827]">
                Verificación de Identidad
              </h3>
            </div>
          </div>

          <h2 className="text-[26px] md:text-[30px] font-[800] text-[#111827] leading-[1.2] mb-3 tracking-tight">
            Para continuar, necesitamos verificar tu identidad
          </h2>

          <p className="text-gray-500 text-[14px] leading-snug mb-6 opacity-90">
            Como parte de nuestro compromiso con la seguridad, requerimos que
            completes un breve proceso de verificación KYC.
          </p>

          <h4 className="text-[13px] font-[800] text-[#111827] mb-3 uppercase tracking-wide">
            Lo que necesitarás:
          </h4>

          <div className="space-y-3 mb-8">
            <VerificationItem
              icon={<CreditCard size={18} className="text-[#1D61E7]" />}
              title="Cédula de Identidad"
              desc="Vigente y en buen estado físico."
            />
            <VerificationItem
              icon={<Camera size={18} className="text-[#1D61E7]" />}
              title="Selfie de seguridad"
              desc="Para validar tu identidad facial."
            />
            <VerificationItem
              icon={<FileText size={18} className="text-[#1D61E7]" />}
              title="Documento tributario"
              desc="Opcional para facturación."
            />
          </div>

          {/* Action Button: Balanced height */}
          <button className="w-full py-3.5 bg-[#1D61E7] text-white rounded-xl font-[800] text-[15px] flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md mb-5">
            Comenzar Verificación <ArrowRight size={18} />
          </button>

          {/* Footer Security Text */}
          <div className="flex items-center justify-center gap-2 text-gray-400 opacity-80">
            <Lock size={12} />
            <span className="text-[11px] font-medium italic">
              Tu información está encriptada y segura con WORKNEX.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const VerificationItem = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 p-3.5 bg-gray-50/70 rounded-xl border border-gray-100">
    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-[14px] font-[800] text-[#111827] leading-none mb-1">
        {title}
      </span>
      <span className="text-[12px] text-gray-500 leading-none">{desc}</span>
    </div>
  </div>
);

export default SecureOtp2;
