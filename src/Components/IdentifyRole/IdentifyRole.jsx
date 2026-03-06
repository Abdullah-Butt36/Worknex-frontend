import React, { useState } from "react";
import { User, Building2, X, Check, UserCog } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IdentifyRole = () => {
  const [selectedType, setSelectedType] = useState("individual");
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-gray-900/60 flex items-center justify-center p-6 z-[100] font-sans">
      <div className="bg-white w-full max-w-[640px] rounded-[32px] shadow-2xl relative max-h-[90vh] overflow-y-auto scrollbar-hide">
        <div className="px-6 md:px-12 pt-8 md:pt-10 pb-8 md:pb-10 flex flex-col items-center relative">
          <div className="w-full flex justify-end mb-2">
            <button 
              onClick={() => navigate("/role-selection")}
              className="text-gray-400 hover:text-black transition-colors p-2 -mr-4"
            >
              <X size={24} />
            </button>
          </div>

          {/* Top Decorative Icon */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#EFF6FF] rounded-full flex items-center justify-center mb-6 shrink-0">
            <div className="relative">
              <UserCog size={32} className="text-[#1D61E7] md:size-[40px]" />
              <div className="absolute -right-1 -bottom-1 bg-white p-1 rounded-full"></div>
            </div>
          </div>

          <h2 className="text-[28px] md:text-[36px] font-[700] text-[#111827] text-center leading-tight mb-4 tracking-tight">
            Selecciona tu tipo de cuenta
          </h2>

          <p className="text-gray-500 text-center text-[14px] md:text-[16px] max-w-[460px] mb-10 md:mb-12 leading-relaxed font-medium">
            Elige cómo quieres usar WORKNEX para personalizar tu experiencia
            desde el primer día.
          </p>

          {/* Selection Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full mb-10 md:mb-12">
            {/* Individual Card */}
            <div
              onClick={() => setSelectedType("individual")}
              className={`relative p-6 md:p-8 rounded-[24px] md:rounded-[28px] border-2 cursor-pointer transition-all duration-300 flex flex-col
                ${
                  selectedType === "individual"
                    ? "border-[#1D61E7] bg-[#F0F7FF] shadow-lg shadow-blue-100"
                    : "border-gray-100 hover:border-gray-200"
                }`}
            >
              <div
                className={`absolute top-5 right-5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                ${selectedType === "individual" ? "border-[#1D61E7] bg-[#1D61E7]" : "border-gray-200 bg-gray-50"}`}
              >
                {selectedType === "individual" && (
                  <Check size={14} className="text-white" strokeWidth={4} />
                )}
              </div>

              <div className="mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${selectedType === "individual" ? "bg-white shadow-md" : "bg-gray-50"}`}
                >
                  <User
                    size={24}
                    className={
                      selectedType === "individual"
                        ? "text-[#1D61E7]"
                        : "text-gray-400"
                    }
                  />
                </div>
              </div>

              <h4 className="font-[800] text-[18px] md:text-[20px] text-black mb-2">
                Individual
              </h4>
              <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed mb-6 font-medium">
                Para personas que solicitan u ofrecen servicios profesionales a
                título personal.
              </p>

              <ul className="space-y-2.5 mt-auto">
                {[
                  "Profesionales independientes",
                  "Clientes individuales",
                  "Acceso completo según rol",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-[12px] md:text-[13px] text-gray-700 font-semibold"
                  >
                    <Check
                      size={16}
                      className="text-[#1D61E7]"
                      strokeWidth={3}
                    />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Empresa Card */}
            <div
              onClick={() => setSelectedType("empresa")}
              className={`relative p-6 md:p-8 rounded-[24px] md:rounded-[28px] border-2 cursor-pointer transition-all duration-300 flex flex-col
                ${
                  selectedType === "empresa"
                    ? "border-[#1D61E7] bg-[#F0F7FF] shadow-lg shadow-blue-100"
                    : "border-gray-100 hover:border-gray-200"
                }`}
            >
              <div
                className={`absolute top-5 right-5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                ${selectedType === "empresa" ? "border-[#1D61E7] bg-[#1D61E7]" : "border-gray-200 bg-gray-50"}`}
              >
                {selectedType === "empresa" && (
                  <Check size={14} className="text-white" strokeWidth={4} />
                )}
              </div>

              <div className="mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${selectedType === "empresa" ? "bg-white shadow-md" : "bg-gray-50"}`}
                >
                  <Building2
                    size={24}
                    className={
                      selectedType === "empresa"
                        ? "text-[#1D61E7]"
                        : "text-gray-400"
                    }
                  />
                </div>
              </div>

              <h4 className="font-[800] text-[18px] md:text-[20px] text-black mb-2">
                Empresa
              </h4>
              <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed mb-6 font-medium">
                Para compañías, firmas o entidades legales que ofrecen servicios
                profesionales.
              </p>

              <ul className="space-y-2.5 mt-auto">
                {[
                  "Personas jurídicas",
                  "Servicios B2B",
                  "Gestión de proyectos y equipos",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-[12px] md:text-[13px] text-gray-700 font-semibold"
                  >
                    <Check
                      size={16}
                      className="text-[#1D61E7]"
                      strokeWidth={3}
                    />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col items-center gap-4">
            <button 
              onClick={() => navigate("/login-step-1")}
              className="w-full py-4 bg-[#1D61E7] text-white rounded-[18px] font-[700] text-[16px] md:text-[18px] hover:bg-blue-700 transition-all "
            >
              Continuar
            </button>
            <button 
              onClick={() => navigate("/role-selection")}
              className="text-gray-500 font-extrabold text-[15px] md:text-[17px] hover:text-black transition-colors py-2 mb-4"
            >
              Cancelar
            </button>
          </div>
        </div>

        {/* Footer - Stays at bottom but scrolls too */}
        <div className="w-full bg-[#F9FAFB] py-6 md:py-8 border-t border-gray-100 text-center shrink-0">
          <p className="text-gray-500 text-[14px] md:text-[16px] font-medium">
            ¿Ya tienes cuenta?{" "}
            <span 
              onClick={() => navigate("/login-step-1")}
              className="text-[#1D61E7] font-[900] cursor-pointer hover:underline ml-1"
            >
              Inicia sesión
            </span>
          </p>
        </div>
      </div>

      {/* Tailwind Style for Hiding Scrollbar */}
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

export default IdentifyRole;
