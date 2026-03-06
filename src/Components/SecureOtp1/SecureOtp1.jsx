import React from "react";
import { CheckCircle2, Loader2, Circle, Lock, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SecureOtp1 = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-gray-900/60 flex items-center justify-center p-4 z-[100] font-sans">
      {/* --- Main Modal Container --- */}
      <div className="bg-white w-full max-w-[500px] rounded-[32px] p-10 shadow-2xl flex flex-col items-center">
        <div className="relative mb-8 flex items-center justify-center">
          <div className="w-[104px] h-[104px] rounded-full border border-gray-100 flex items-center justify-center p-[4px] shrink-0">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-[7px]">
              <div className="w-full h-full rounded-full bg-[#EFF6FF] flex items-center justify-center">
                <Briefcase
                  size={32}
                  className="text-[#1D61E7]"
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Heading & Subtext */}
        <h2 className="text-[28px] font-[700] text-[#111827] mb-3 tracking-tight">
          Verificando cuenta...
        </h2>
        <p className="text-gray-500 text-center text-[15px] leading-relaxed mb-10 max-w-[320px]">
          Estamos validando tus credenciales y preparando tu espacio de trabajo.
        </p>

        <div className="w-full space-y-4 mb-10">
          <div 
            onClick={() => navigate("/login-step-2")}
            className="w-full p-4 bg-green-50/50 border border-green-100 rounded-full flex items-center justify-between cursor-pointer hover:bg-green-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-green-500" />
              <span className="text-[14px] font-[700] text-gray-700">
                Autenticación exitosa
              </span>
            </div>
          </div>

          {/* Step 2: In Progress */}
          <div 
            onClick={() => navigate("/dashboard-home")}
            className="w-full p-4 bg-blue-50/50 border border-blue-100 rounded-full flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-colors"
          >
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
            <span className="text-[12px] font-[700] text-blue-600 ">
              En proceso...
            </span>
          </div>

          <div 
            onClick={() => navigate("/client-dashboard")}
            className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-full flex items-center justify-between opacity-50 cursor-pointer hover:opacity-100 hover:bg-gray-100 transition-all"
          >
            <div className="flex items-center gap-3">
              <Circle size={20} className="text-gray-300" />
              <span className="text-[14px] font-[700] text-gray-400">
                Redireccionando
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
