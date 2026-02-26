import React from "react";
import { CheckCircle2, Loader2, Circle, Lock, Briefcase } from "lucide-react";

const SecureOtp1 = () => {
  return (
    <div className="fixed inset-0 bg-gray-900/60 flex items-center justify-center p-4 z-[100] font-sans">
      {/* --- Main Modal Container --- */}
      <div className="bg-white w-full max-w-[500px] rounded-[32px] p-10 shadow-2xl flex flex-col items-center">
        <div className="relative mb-8 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-[6px] border-black flex items-center justify-center">
            <div className="w-12 h-12 bg-[#1D61E7] rounded-xl flex items-center justify-center shadow-lg">
              <Briefcase size={24} className="text-white fill-white" />
            </div>
          </div>
        </div>

        {/* 2. Heading & Subtext */}
        <h2 className="text-[28px] font-[800] text-[#111827] mb-3 tracking-tight">
          Verificando cuenta...
        </h2>
        <p className="text-gray-500 text-center text-[15px] leading-relaxed mb-10 max-w-[320px]">
          Estamos validando tus credenciales y preparando tu espacio de trabajo.
        </p>

        {/* 3. Status Steps List */}
        <div className="w-full space-y-4 mb-10">
          {/* Step 1: Success */}
          <div className="w-full p-4 bg-green-50/50 border border-green-100 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-green-500" />
              <span className="text-[14px] font-[700] text-gray-700">
                Autenticación exitosa
              </span>
            </div>
          </div>

          {/* Step 2: In Progress */}
          <div className="w-full p-4 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Circle
                  size={20}
                  className="text-blue-500 border-dashed animate-spin"
                />
              </div>
              <span className="text-[14px] font-[700] text-gray-700">
                Consultando perfil
              </span>
            </div>
            <span className="text-[12px] font-[700] text-blue-600 italic">
              En proceso...
            </span>
          </div>

          {/* Step 3: Pending/Disabled */}
          <div className="w-full p-4 bg-gray-50/50 border border-gray-100 rounded-2xl flex items-center justify-between opacity-50">
            <div className="flex items-center gap-3">
              <Circle size={20} className="text-gray-300" />
              <span className="text-[14px] font-[700] text-gray-400">
                Finalizando
              </span>
            </div>
          </div>
        </div>

        {/* 4. Footer Security Text */}
        <div className="flex items-center gap-2 text-gray-400">
          <Lock size={14} />
          <span className="text-[12px] font-medium tracking-tight">
            Conexión segura cifrada de extremo a extremo
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecureOtp1;
