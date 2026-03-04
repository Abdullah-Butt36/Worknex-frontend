import React from "react";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans antialiased">
      <Header />

      <main className="flex-grow flex flex-col items-center py-12 md:py-20 px-4">
        <div className="w-full max-w-[780px] mb-6">
          <div className="flex justify-between items-end mb-2.5 px-0.5">
            <div className="flex flex-col gap-1">
              <span className="text-[#1D61E7] text-[12px] font-[800] uppercase tracking-[0.05em]">
                Paso 1 de 3
              </span>
              <h2 className="text-[20px] md:text-[22px] font-[700] text-[#111827] tracking-tight leading-none">
                Detalles del Servicio
              </h2>
            </div>
            <span className="text-gray-400 text-[12px] font-[700] tracking-tight">
              33% completado
            </span>
          </div>
          <div className="w-full h-[6px] bg-gray-200/70 rounded-full">
            <div className="h-full bg-[#1D61E7] rounded-full w-[33%] transition-all duration-700"></div>
          </div>
        </div>

        <div className="w-full max-w-[780px] bg-white border border-gray-100/80 rounded-[28px] shadow-[0_2px_15px_rgba(0,0,0,0.02)] p-10 md:p-14">
          <h1 className="text-[36px] md:text-[40px] font-[700] text-[#111827] mb-3 leading-[1.1] tracking-[-0.03em]">
            ¿Qué necesitas?
          </h1>
          <p className="text-gray-500 text-[15px] md:text-[16px] mb-12 leading-relaxed max-w-[650px] font-[500] opacity-90">
            Define los detalles del servicio que necesitas para recibir
            propuestas claras y comparables de profesionales verificados.
          </p>

          <div className="space-y-10">
            {/* 1. Título - Exact Matching Spacing */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-[700] text-[#111827] ">
                Título de la solicitud
              </label>
              <input
                type="text"
                placeholder="ej. Rediseño de sitio web corporativo"
                className="w-full p-4.5 bg-[#F9FAFB] border border-gray-100 rounded-xl text-[15px] focus:outline-none focus:ring-1 focus:ring-blue-200/50"
              />
            </div>

            {/* 2. Categoría - The Exact Grey Oval Field */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-[700] text-[#111827] ">
                Categoría del servicio
              </label>
              <div className="relative w-full h-[58px] flex items-center justify-center">
                <div className="absolute w-[98%] h-full bg-[#E5E7EB] rounded-full opacity-60"></div>

                <select className="w-full h-full bg-transparent relative z-10 text-center appearance-none cursor-pointer outline-none font-[700] text-gray-500 text-[14px]">
                  <option value=""></option>
                </select>

                <div className="absolute right-6 z-20 pointer-events-none opacity-40">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 3. Descripción - Balanced Height */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <label className="text-[14px] font-[700] text-[#111827] ">
                  Descripción del servicio
                </label>
                <span className="text-[11px] font-[700] text-gray-400">
                  Mínimo 50 caracteres
                </span>
              </div>
              <textarea
                rows="5"
                placeholder="Describe el alcance, objetivos, entregables esperados..."
                className="w-full p-5 bg-[#F9FAFB] border border-gray-100 rounded-2xl text-[15px] focus:outline-none focus:ring-1 focus:ring-blue-200/50 leading-relaxed"
              ></textarea>
            </div>

            {/* 4. Especialidades - Precision Tags */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-[700] text-[#111827] ">
                Especialidades o habilidades requeridas
              </label>
              <div className="w-full min-h-[58px] p-3 bg-[#F9FAFB] border border-gray-100 rounded-xl flex flex-wrap gap-2.5 items-center">
                <div className="flex items-center gap-2 bg-[#E0E7FF] text-[#1D61E7] px-4 py-1.5 rounded-lg text-[13px] font-[700]">
                  Desarrollo Web{" "}
                  <span className="text-[16px] cursor-pointer opacity-50 hover:opacity-100">
                    ×
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#E0E7FF] text-[#1D61E7] px-4 py-1.5 rounded-lg text-[13px] font-[700]">
                  Diseño UI{" "}
                  <span className="text-[16px] cursor-pointer opacity-50 hover:opacity-100">
                    ×
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Escribe una especialidad..."
                  className="bg-transparent outline-none text-[14px] flex-grow ml-2 font-medium"
                />
              </div>
              <p className="text-[13px] text-gray-400 font-[600] mt-1 ">
                Selecciona las habilidades clave para mejorar la precisión de
                las propuestas.
              </p>
            </div>
          </div>
        </div>

        {/* --- Sticky-style Footer Buttons: Exact Placement --- */}
        <div className="w-full max-w-[780px] flex items-center justify-between mt-12 mb-6 px-1">
          <button className="text-gray-600 font-[700] text-[15px] tracking-wide hover:opacity-80 transition-all">
            Cancelar
          </button>
          <button className="bg-[#1D61E7] text-white px-10 py-3.5 rounded-2xl font-[700] text-[15px] flex items-center gap-2.5">
            Siguiente <span className="text-[18px]">→</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
