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
    <div className="fixed inset-0 bg-gray-900/60 flex items-center justify-center p-4 z-[100] font-sans ">
      <div className="bg-white w-full md:max-w-[540px] rounded-[28px] shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col">
        <button className="absolute top-5 right-6 text-gray-400 hover:text-black p-1 z-10 transition-colors">
          <X size={22} />
        </button>

        <div className="px-6 md:px-10 pt-10 pb-8 overflow-y-auto scrollbar-hide">
          {/* Header Section */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#1D61E7] shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] md:text-[11px] font-[800] text-[#1D61E7] uppercase tracking-wider">
                Paso 1 de 3
              </span>
              <h3 className="text-[15px] md:text-[17px] font-[700] text-[#111827]">
                Verificación de Identidad
              </h3>
            </div>
          </div>

          <h2 className="text-[20px] md:text-[28px] font-[800] text-[#111827] leading-[1.2] mb-4 tracking-tight text-center md:text-left">
            Para continuar, necesitamos verificar tu identidad
          </h2>

          <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed mb-8 font-medium text-center md:text-left">
            Como parte de nuestro compromiso con la seguridad, requerimos que
            completes un breve proceso de verificación{" "}
            <span className="text-[#111827] font-bold">KYC</span>.
          </p>

          <h4 className="text-[14px] font-[700] text-black mb-4  text-center md:text-left">
            Lo que necesitarás tener a mano:
          </h4>

          {/* List of Requirements */}
          <div className="grid grid-cols-1 gap-3 mb-8">
            <VerificationItem
              icon={<CreditCard size={19} className="text-[#1D61E7]" />}
              title="Cédula de Identidad"
              desc="Vigente y en buen estado físico."
            />
            <VerificationItem
              icon={<Camera size={19} className="text-[#1D61E7]" />}
              title="Selfie de seguridad"
              desc="Para validar tu identidad facial."
            />
            <VerificationItem
              icon={<FileText size={19} className="text-[#1D61E7]" />}
              title="Documento tributario"
              desc="Opcional para facturación."
            />
          </div>

          {/* Action Button */}
          <button className="w-full py-4 bg-[#1D61E7] text-white rounded-full font-[700] text-[16px] flex items-center justify-center gap-2 hover:bg-blue-700 transition-all ">
            Comenzar Verificación <ArrowRight size={19} />
          </button>

          {/* Bottom Security Note */}
          <div className="flex items-center justify-center gap-2 text-gray-400 pt-4 border-t border-gray-50">
            <Lock size={12} className="shrink-0" />
            <span className="text-[12px] font-semibold  text-center">
              Tu información está encriptada y segura con WORKNEX.
            </span>
          </div>
        </div>
      </div>

      {/* Tailwind Utility Style for Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

const VerificationItem = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 p-4 bg-[#F9FAFB] rounded-[20px] border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300">
    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-gray-50">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-[14px] md:text-[15px] font-[800] text-[#111827] leading-tight mb-0.5">
        {title}
      </span>
      <span className="text-[12px] text-gray-500 font-medium leading-tight">
        {desc}
      </span>
    </div>
  </div>
);

export default SecureOtp2;
