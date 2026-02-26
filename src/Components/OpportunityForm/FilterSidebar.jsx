import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FilterSidebar = () => {
  const [openSections, setOpenSections] = useState({
    ubicacion: true,
    categoria: true,
    compatibilidad: true,
  });

  const [selectedUbicacion, setSelectedUbicacion] = useState("Remoto");
  const [selectedCategoria, setSelectedCategoria] = useState(
    "Diseño & Creatividad",
  );
  const [rangeValue, setRangeValue] = useState(70);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-full lg:w-72 flex flex-col gap-5 py-2 select-none lg:sticky lg:top-24 h-fit lg:ml-0 lg:mr-4">
      {/* --- SIDEBAR HEADER --- */}
      <div className="flex items-center justify-between px-1 mb-2">
        <h3 className="font-[900] text-[22px] font-semibold text-[#0F172A]">
          Filtros
        </h3>
        <button
          onClick={() => {
            setSelectedUbicacion("");
            setSelectedCategoria("");
            setRangeValue(0);
          }}
          className="text-[#1D61E7] text-[18px] font-[700] hover:opacity-70 transition-opacity active:scale-95"
        >
          Limpiar
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {/* --- 1. UBICACIÓN CARD --- */}
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-50/50">
          <button
            onClick={() => toggleSection("ubicacion")}
            className="flex items-center justify-between w-full font-[700] text-[17px] text-[#0F172A]"
          >
            Ubicación
            <ChevronDown
              size={18}
              className={`text-[#1D61E7] transition-transform duration-500 ${openSections.ubicacion ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`grid transition-all duration-500 ${openSections.ubicacion ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden space-y-4">
              {["Remoto", "Santiago", "Valparaíso", "Internacional"].map(
                (item) => (
                  <div
                    key={item}
                    onClick={() => setSelectedUbicacion(item)}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${selectedUbicacion === item ? "bg-[#D1D5DB] scale-110" : "bg-transparent border border-gray-100"}`}
                    ></div>
                    <span
                      className={`text-[14px] font-[600] ${selectedUbicacion === item ? "text-[#1D61E7]" : "text-[#64748B]"}`}
                    >
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* --- 2. CATEGORÍA CARD --- */}
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-50/50">
          <button
            onClick={() => toggleSection("categoria")}
            className="flex items-center justify-between w-full font-[700] text-[17px] text-[#0F172A]"
          >
            Categoría
            <ChevronDown
              size={18}
              className={`text-[#1D61E7] transition-transform duration-500 ${openSections.categoria ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`grid transition-all duration-500 ${openSections.categoria ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden space-y-4">
              {[
                "Desarrollo & IT",
                "Diseño & Creatividad",
                "Finanzas & Legal",
                "Marketing Digital",
              ].map((item) => (
                <div
                  key={item}
                  onClick={() => setSelectedCategoria(item)}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${selectedCategoria === item ? "bg-[#D1D5DB] scale-110" : "bg-transparent border border-gray-100"}`}
                  ></div>
                  <span
                    className={`text-[14px] font-[600] ${selectedCategoria === item ? "text-[#1D61E7]" : "text-[#64748B]"}`}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- 3. COMPATIBILIDAD --- */}
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-50/50">
          <button
            onClick={() => toggleSection("compatibilidad")}
            className="flex items-center justify-between w-full font-[700] text-[17px] text-[#0F172A]"
          >
            Compatibilidad
            <ChevronDown
              size={18}
              className={`text-[#1D61E7] transition-transform duration-500 ${openSections.compatibilidad ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`grid transition-all duration-500 ${openSections.compatibilidad ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden px-1 pb-2">
              <div className="flex justify-between text-[14px] text-[#64748B] font-[700]  mb-4">
                <span>Min</span>
                <span>Max</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. PREMIUM CARD --- */}
        <div className="relative overflow-hidden bg-[#222E45] rounded-[28px] p-7 text-white mt-1 shadow-lg group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.09] rounded-full translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="mb-6 inline-block transform group-hover:rotate-12 transition-transform duration-300">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.29 3.86L12 2L13.71 3.86L16.25 3.51L17.21 5.86L19.57 6.82L19.22 9.36L21.08 11.07L19.22 12.78L19.57 15.32L17.21 16.28L16.25 18.63L13.71 18.28L12 20.14L10.29 18.28L7.75 18.63L6.79 16.28L4.43 15.32L4.78 12.78L2.92 11.07L4.78 9.36L4.43 6.82L6.79 5.86L7.75 3.51L10.29 3.86Z"
                  fill="white"
                />
                <path
                  d="M9 11L11 13L15 9"
                  stroke="#222E45"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4 className="text-[22px] font-[700]  mb-3">Potencia tu perfil</h4>
            <p className="text-gray-300 text-[14px] font-[500] leading-relaxed mb-8">
              Accede a oportunidades prioritarias, filtros avanzados y mayor
              visibilidad.
            </p>
            <button className="w-full bg-white text-[#1D61E7] py-3.5 rounded-full font-[900] text-[15px] hover:bg-gray-50 transition-all shadow-xl active:scale-95">
              Ver planes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
