import React, { useState } from "react";
import Navbar2 from "./Navbar2";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainLayout2 = () => {
  const [currency, setCurrency] = useState("CLP");
  const [isManualBudget, setIsManualBudget] = useState(false);
  const [manualBudget, setManualBudget] = useState("");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <Navbar2 />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center py-6 md:py-12 px-4 font-sans antialiased">
        <div className="w-full max-w-[850px] mb-6 md:mb-8">
          <div className="flex justify-between items-end mb-3 px-1">
            <h3 className="text-[16px] md:text-[17px] font-[700] text-[#111827] ">
              Progreso del proyecto
            </h3>
            <span className="text-gray-400 text-[12px] md:text-[13px] font-[800]">
              Paso 2 de 4
            </span>
          </div>
          <div className="w-full h-[6px] bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#1D61E7] rounded-full w-[50%] transition-all duration-1000 ease-out"></div>
          </div>
        </div>

        {/* Central White Card - Responsive Padding */}
        <div className="w-full max-w-[850px] bg-white border border-gray-100 rounded-[28px] md:rounded-[40px] shadow-sm p-6 md:p-14 lg:p-16">
          <h1 className="text-[26px] md:text-[38px] lg:text-[42px] font-[700] text-[#111827] mb-4 ">
            Ubicación y Presupuesto
          </h1>
          <p className="text-[#6B7280] text-[14px] md:text-[17px] mb-8 md:mb-12 font-[500] leading-relaxed max-w-[650px]">
            Define la logística y las expectativas presupuestarias del servicio
            para recibir propuestas comparables y bien alineadas.
          </p>

          <div className="space-y-8 md:space-y-12">
            {/* Ubicación Field */}
            <div className="group">
              <label className="block text-[16px] md:text-[18px] font-[700] text-[#111827] mb-3  opacity-70">
                ¿Dónde se entregará el servicio?
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="ej. Santiago, Chile / Remoto / Híbrido"
                  className="w-full p-4 md:p-5 pr-12 bg-[#F9FAFB] border border-gray-100 rounded-[18px] text-[14px] md:text-[16px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all"
                />
                <MapPin
                  className="absolute right-5 text-[#1D61E7] opacity-50 group-focus-within:opacity-100 transition-opacity"
                  size={22}
                />
              </div>
            </div>

            {/* Presupuesto Section */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-5">
                <label className="text-[16px] md:text-[18px] font-[700] text-[#111827] opacity-70">
                  Presupuesto estimado
                </label>
                <div className="flex bg-gray-100/80 p-1 rounded-xl w-fit">
                  <button 
                    onClick={() => setCurrency("CLP")}
                    className={`px-5 py-1.5 rounded-lg text-[11px] md:text-[12px] font-[900] transition-colors ${currency === "CLP" ? "bg-white text-[#1D61E7] shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                  >
                    CLP
                  </button>
                  <button 
                    onClick={() => setCurrency("UF")}
                    className={`px-5 py-1.5 rounded-lg text-[11px] md:text-[12px] font-[900] transition-colors ${currency === "UF" ? "bg-white text-[#1D61E7] shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                  >
                    UF
                  </button>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="0"
                  className="w-full p-4 md:p-6 bg-[#F9FAFB] border border-gray-100 rounded-[20px] text-[22px] md:text-[28px] font-[800] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-[#111827]"
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 font-bold text-lg md:text-xl">
                  $
                </span>
              </div>
              <p className="mt-4 text-[14px] md:text-[16px] text-[#94A3B8] leading-relaxed font-semibold ">
                * El presupuesto es una referencia y ayuda a los profesionales a
                adaptar sus propuestas.
              </p>
            </div>

            {/* Checkbox - Improved UX */}
            <div className="flex flex-col gap-3">
              <div 
                onClick={() => setIsManualBudget(!isManualBudget)}
                className="flex items-center gap-3 group cursor-pointer w-fit"
              >
                <div className={`w-6 h-6 border-2 rounded-lg transition-colors flex items-center justify-center ${isManualBudget ? 'bg-[#1D61E7] border-[#1D61E7]' : 'border-gray-200 group-hover:border-[#1D61E7]'}`}>
                  {isManualBudget && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-[13px] md:text-[14px] font-[600] text-gray-500 group-hover:text-[#111827] transition-colors">
                  Ingresar presupuesto manualmente / No definido
                </span>
              </div>
              
              {isManualBudget && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2">
                  <input
                    type="text"
                    value={manualBudget}
                    onChange={(e) => setManualBudget(e.target.value)}
                    placeholder="Escribe tu presupuesto o 'A convenir'..."
                    className="w-full p-4 md:p-5 bg-white border border-gray-200 rounded-[16px] text-[14px] md:text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-[#111827]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Footer - Responsive Buttons */}
        <div className="w-full max-w-[850px] flex flex-row items-center justify-between mt-8 md:mt-12 px-1 gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 bg-white text-[#111827] px-6 md:px-10 py-3.5 md:py-4 rounded-full font-[700] text-[14px] md:text-[15px] border border-gray-100 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all flex-1 sm:flex-none active:scale-95"
          >
            <ArrowLeft size={18} strokeWidth={2.5} /> Atrás
          </button>
          <button 
            onClick={() => navigate("/project-publication")}
            className="flex items-center justify-center gap-2 bg-[#1D61E7] text-white px-8 md:px-12 py-3.5 md:py-4 rounded-full font-[700] text-[14px] md:text-[15px]  hover:bg-blue-700 hover:-translate-y-0.5 transition-all flex-1 sm:flex-none active:scale-95"
          >
            Siguiente <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default MainLayout2;
