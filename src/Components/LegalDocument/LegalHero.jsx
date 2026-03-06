import React from "react";
import { Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const LegalHero = () => {
  return (
    <div className="w-full bg-[#F8FAFC] pt-8 pb-10">
      <div className="w-full px-6 md:px-10 lg:px-20">
        {/* --- BREADCRUMBS --- */}
        <nav className="flex items-center gap-2 text-[15px] font-[600] text-[#94A3B8] mb-5">
          <Link to="/" className="hover:text-[#1D61E7] transition-colors">
            Inicio
          </Link>
          <span className="text-gray-300">/</span>
          <Link to="/legal-documents" className="hover:text-[#1D61E7] transition-colors">
            Recursos Legales
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#64748B]">Tienda de Documentos</span>
        </nav>

        {/* --- MAIN HEADING --- */}
        <div className="mb-8">
          <h1 className="text-[34px] md:text-[48px] font-[700] text-[#0F172A] tracking-tighter leading-tight mb-4">
            Tienda de Documentos Legales
          </h1>
          <p className="text-[#64748B] text-[17px] font-[600] leading-relaxed max-w-3xl">
            Plantillas profesionales verificadas. No constituyen asesoría legal
            y no reemplazan la revisión de un abogado.
          </p>
        </div>

        {/* --- SEARCH & FILTERS ROW --- */}
        <div className="flex flex-col lg:flex-row items-center justify-start gap-5 w-full">
          {/* Search Box - Responsive Width */}
          <div className="relative w-full lg:w-[420px] shrink-0 group">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1D61E7] transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Buscar contratos..."
              className="w-full bg-white border-none rounded-2xl py-4 pl-14 pr-4 text-[15px] font-[600] text-[#0F172A] shadow-sm focus:ring-4 focus:ring-blue-50 transition-all outline-none"
            />
          </div>

          {/* Spacer for Desktop Gap */}
          <div className="hidden lg:block w-4"></div>

          <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0 px-1">
            {["Categoría", "Precio", "Idioma"].map((filter) => (
              <button
                key={filter}
                className="flex items-center justify-between gap-3 bg-white px-5 py-4 rounded-2xl font-[600] text-[14px] text-[#0F172A] shadow-sm hover:bg-gray-50 transition-all border border-transparent min-w-[130px] flex-shrink-0"
              >
                {filter}
                <ChevronDown
                  size={14}
                  className="text-[#1D61E7]"
                  strokeWidth={3.5}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default LegalHero;
