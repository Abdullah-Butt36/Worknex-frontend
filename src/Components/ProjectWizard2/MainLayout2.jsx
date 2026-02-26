import React from "react";
import Navbar2 from "./Navbar2";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";

const MainLayout2 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar2 />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center py-6 md:py-14 px-4 bg-[#F9FAFB] font-sans">
        {/* Progress Section */}
        <div className="w-full max-w-[850px] mb-8">
          <div className="flex justify-between items-end mb-3 px-1">
            <h3 className="text-[14px] md:text-[15px] font-[700] text-[#111827]">
              Progreso del proyecto
            </h3>
            <span className="text-gray-400 text-[12px] md:text-[13px] font-[700]">
              Paso 2 de 4
            </span>
          </div>
          <div className="w-full h-[6px] bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#1D61E7] rounded-full w-[50%] transition-all duration-700"></div>
          </div>
        </div>

        {/* Central White Card */}
        <div className="w-full max-w-[850px] bg-white border border-gray-100 rounded-[24px] md:rounded-[32px] shadow-sm p-6 md:p-16">
          <h1 className="text-[28px] md:text-[42px] font-[700] text-[#111827] mb-3 leading-tight">
            Ubicación y Presupuesto
          </h1>
          <p className="text-[#6B7280] text-[15px] md:text-[17px] mb-8 md:mb-12 font-[500] leading-relaxed max-w-[700px]">
            Define la logística y las expectativas presupuestarias del servicio
            para recibir propuestas comparables y bien alineadas.
          </p>

          <div className="space-y-8 md:space-y-12">
            {/* Ubicación Field */}
            <div>
              <label className="block text-[14px] font-[700] text-[#111827] mb-4 tracking-tight uppercase">
                ¿Dónde se entregará el servicio?
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="ej. Santiago, Chile / Remoto / Híbrido"
                  className="w-full p-4 md:p-4.5 pr-12 bg-[#F9FAFB] border border-gray-100 rounded-2xl text-[14px] md:text-[15px] focus:outline-none focus:ring-1 focus:ring-blue-100"
                />
                <MapPin
                  className="absolute right-4 text-[#1D61E7] opacity-60 shrink-0"
                  size={20}
                />
              </div>
            </div>

            {/* Presupuesto Section */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
                <label className="text-[16px] md:text-[18px] font-[700] text-[#111827] uppercase">
                  Presupuesto estimado
                </label>
                <div className="flex bg-gray-100 p-1 rounded-xl w-fit">
                  <button className="bg-white text-[#1D61E7] px-4 py-1.5 rounded-lg text-[12px] font-[800] shadow-sm">
                    CLP
                  </button>
                  <button className="text-gray-400 px-4 py-1.5 rounded-lg text-[12px] font-[800]">
                    UF
                  </button>
                </div>
              </div>
              <input
                type="text"
                placeholder="0"
                className="w-full p-4 md:p-5 bg-[#F9FAFB] border border-gray-100 rounded-2xl text-[18px] font-[700] focus:outline-none"
              />
              <p className="mt-4 text-[13px] text-[#6B7280] leading-relaxed font-[500]">
                El presupuesto es una referencia y ayuda a los profesionales a
                adaptar sus propuestas.
              </p>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-gray-200 rounded-lg cursor-pointer shrink-0"></div>
              <span className="text-[13px] md:text-[14px] font-[500] text-gray-400">
                No tengo un presupuesto definido
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="w-full max-w-[850px] flex flex-row items-center justify-between mt-8 md:mt-12 px-2 gap-4">
          <button className="flex items-center justify-center gap-2 bg-white text-[#111827] px-6 md:px-8 py-3 md:py-3.5 rounded-full font-[700] text-[14px] md:text-[15px] border border-gray-50 shadow-sm hover:bg-gray-50 transition-all flex-1 sm:flex-none">
            <ArrowLeft size={18} /> Atrás
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#1D61E7] text-white px-8 md:px-10 py-3 md:py-3.5 rounded-full font-[700] text-[14px] md:text-[15px] shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all flex-1 sm:flex-none">
            Siguiente <ArrowRight size={18} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default MainLayout2;
