import React, { useState } from "react";
import { User, Building2, X, Check, Settings } from "lucide-react";

const IdentifyRole = () => {
  const [selectedType, setSelectedType] = useState("individual");

  return (
    <div className="fixed inset-0 bg-gray-900/60 flex items-center justify-center p-4 z-[100] font-sans">
      <div className="bg-white w-full max-w-[620px] rounded-[24px] md:rounded-[28px] shadow-2xl relative overflow-hidden max-h-[95vh] md:max-h-none overflow-y-auto">
        {/* Close Button */}
        <button className="absolute top-5 right-6 text-gray-400 hover:text-black transition-colors">
          <X size={22} />
        </button>

        <div className="px-5 md:px-8 pt-6 md:pt-10 pb-6 md:pb-8 flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#EFF6FF] rounded-full flex items-center justify-center mb-4 md:mb-6">
            <div className="relative">
              <User size={24} className="text-[#1D61E7] md:size-[32px]" />
              <div className="absolute -bottom-0.5 -right-0.5 bg-[#1D61E7] rounded-full p-0.5 md:p-1 border-2 border-white shadow-sm flex items-center justify-center">
                <Settings
                  size={8}
                  className="text-white fill-white md:size-[10px]"
                  strokeWidth={3}
                />
              </div>
            </div>
          </div>

          <h2 className="text-[24px] md:text-[32px] font-[800] text-[#111827] text-center leading-tight mb-2 md:mb-3 tracking-tight">
            Selecciona tu tipo de cuenta
          </h2>

          <p className="text-gray-500 text-center text-[13px] md:text-[15px] max-w-[420px] mb-6 md:mb-10 leading-relaxed">
            Elige cómo quieres usar WORKNEX para personalizar tu experiencia
            desde el primer día.
          </p>

          {/* Selection Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 w-full mb-6 md:mb-10">
            {/* Individual Card */}
            <div
              onClick={() => setSelectedType("individual")}
              className={`relative p-4 md:p-6 rounded-[18px] md:rounded-[24px] border-2 cursor-pointer transition-all flex flex-col
                ${selectedType === "individual" ? "border-[#1D61E7] bg-[#F0F7FF]" : "border-gray-100"}`}
            >
              <div className="flex items-center md:block gap-3 md:gap-0 mb-3 md:mb-6">
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${selectedType === "individual" ? "bg-white shadow-sm" : "bg-gray-50"}`}
                >
                  <User
                    size={16}
                    className={
                      selectedType === "individual"
                        ? "text-[#1D61E7]"
                        : "text-gray-400 md:size-[20px]"
                    }
                  />
                </div>
                <h4 className="font-[800] text-[16px] md:text-[18px] text-black leading-none">
                  Individual
                </h4>
              </div>

              {/* Selection Dot */}
              <div className="absolute top-4 right-4 md:top-5 md:right-5 w-5 h-5 md:w-6 md:h-6 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center">
                {selectedType === "individual" && (
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded-full" />
                )}
              </div>

              <p className="text-gray-500 text-[12px] md:text-[13px] leading-snug mb-3 md:mb-6">
                Para personas que solicitan u ofrecen servicios profesionales.
              </p>

              <ul className="space-y-1.5 md:space-y-2 mt-auto">
                {["Profesionales independientes", "Clientes individuales"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-[11px] md:text-[12px] text-gray-600 font-medium"
                    >
                      <Check
                        size={12}
                        className="text-[#1D61E7] md:size-[14px]"
                      />{" "}
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Empresa Card */}
            <div
              onClick={() => setSelectedType("empresa")}
              className={`relative p-4 md:p-6 rounded-[18px] md:rounded-[24px] border-2 cursor-pointer transition-all flex flex-col
                ${selectedType === "empresa" ? "border-[#1D61E7] bg-[#F0F7FF]" : "border-gray-100"}`}
            >
              <div className="flex items-center md:block gap-3 md:gap-0 mb-3 md:mb-6">
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${selectedType === "empresa" ? "bg-white shadow-sm" : "bg-gray-50"}`}
                >
                  <Building2
                    size={16}
                    className={
                      selectedType === "empresa"
                        ? "text-[#1D61E7]"
                        : "text-gray-400 md:size-[20px]"
                    }
                  />
                </div>
                <h4 className="font-[800] text-[16px] md:text-[18px] text-black leading-none">
                  Empresa
                </h4>
              </div>

              <div className="absolute top-4 right-4 md:top-5 md:right-5 w-5 h-5 md:w-6 md:h-6 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center">
                {selectedType === "empresa" && (
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded-full" />
                )}
              </div>

              <p className="text-gray-500 text-[12px] md:text-[13px] leading-snug mb-3 md:mb-6">
                Para compañías o entidades legales que ofrecen servicios.
              </p>

              <ul className="space-y-1.5 md:space-y-2 mt-auto">
                {["Personas jurídicas", "Servicios B2B"].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-[11px] md:text-[12px] text-gray-600 font-medium"
                  >
                    <Check
                      size={12}
                      className="text-[#1D61E7] md:size-[14px]"
                    />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Area */}
          <div className="w-full flex flex-col items-center gap-2 md:gap-4">
            <button className="w-full py-3 md:py-4 bg-[#1D61E7] text-white rounded-xl md:rounded-2xl font-[700] text-[14px] md:text-[16px] hover:bg-blue-700 shadow-lg shadow-blue-500/20">
              Continuar
            </button>
            <button className="text-gray-500 font-bold text-[13px] md:text-[15px] hover:text-black py-1">
              Cancelar
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full bg-[#F9FAFB]/80 py-4 md:py-6 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-[12px] md:text-[14px]">
            ¿Ya tienes cuenta?{" "}
            <span className="text-[#1D61E7] font-[800] cursor-pointer hover:underline">
              Inicia sesión
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdentifyRole;
