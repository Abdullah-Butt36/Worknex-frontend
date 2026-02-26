import React from "react";
import {
  Plus,
  MoreHorizontal,
  FileText,
  LayoutGrid,
  Briefcase,
  Folder,
  ChevronRight,
  MessageSquare,
  Handshake,
  Languages,
} from "lucide-react";

const DashboardContent = () => {
  return (
    <div className="flex-1 bg-[#F8FAFC] min-h-screen p-6 md:p-10 lg:ml-[260px]">
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold text-[#111827]">Hola, Carlos</h2>
          <p className="text-[#64748B] text-[15px] mt-1">
            Gestiona tus solicitudes y servicios profesionales desde WORKNEX.
          </p>
        </div>
        <button className="bg-[#1D61E7] hover:bg-[#1a56cc] text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-100">
          <Plus size={20} strokeWidth={3} />
          <span>Nueva Solicitud</span>
        </button>
      </div>

      {/* --- STATS CARDS GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          {
            title: "Solicitudes Activas",
            count: "04",
            label: "En revisión",
            color: "bg-blue-500",
            icon: FileText,
            tagColor: "bg-[#ECFDF5] text-[#10B981]",
          },
          {
            title: "Propuestas Recibidas",
            count: "12",
            label: "3 Nuevas",
            color: "bg-indigo-500",
            icon: LayoutGrid,
            tagColor: "bg-[#EEF2FF] text-[#6366F1]",
          },
          {
            title: "Servicios Activos",
            count: "02",
            label: "En progreso",
            color: "bg-orange-500",
            icon: Handshake,
            tagColor: "bg-gray-100 text-gray-500",
          },
          {
            title: "Documentos",
            count: "05",
            label: "1 Pendiente",
            color: "bg-purple-500",
            icon: Folder,
            tagColor: "bg-[#FDF2F9] text-[#D946EF]",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`${card.color} p-2.5 rounded-xl text-white`}>
                <card.icon size={20} />
              </div>
              <MoreHorizontal className="text-gray-300 cursor-pointer" />
            </div>
            <p className="text-gray-500 text-[15px] font-bold ">{card.title}</p>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-2xl font-bold font-black text-[#111827]">
                {card.count}
              </span>
              <span
                className={`text-[11px] font-bold px-2 py-0.5 rounded-lg ${card.tagColor}`}
              >
                {card.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* --- TWO COLUMNS SECTION --- */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Left Column: Tus Solicitudes Recientes */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#111827]">
              Tus Solicitudes Recientes
            </h3>
            <button className="text-[#1D61E7] font-bold text-sm hover:underline">
              Ver todas
            </button>
          </div>

          <div className="space-y-4">
            {/* Request Card 1 */}
            <div className="bg-white p-6 rounded-[28px] border border-gray-50 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-[#EFF6FF] text-[#1D61E7] text-[12px] font-bold px-3 py-1 rounded-full">
                  Desarrollo Web
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                  <span className="text-[#10B981] text-[12px] font-bold">
                    Recibiendo Propuestas
                  </span>
                </div>
              </div>
              <h4 className="text-[18px] font-bold text-[#111827] mb-2">
                Rediseño de E-commerce Corporativo
              </h4>
              <p className="text-[#64748B] text-sm mb-6 leading-relaxed">
                Se requiere migración a Shopify Plus y diseño UX/UI.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="text-[#94A3B8] text-xs font-medium">
                  8 propuestas recibidas
                </span>
                <button className="flex items-center gap-1 text-[#1D61E7] font-bold text-sm">
                  Ver detalles <ChevronRight size={16} />
                </button>
              </div>
            </div>
            {/* Request Card 2 (Legal) */}
            <div className="bg-white p-6 rounded-[28px] border border-gray-50 shadow-sm opacity-80">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-[#FDF2F9] text-[#D946EF] text-[12px] font-bold px-3 py-1 rounded-full">
                  Legal
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-orange-400 text-[12px] font-bold text-right leading-tight">
                    Abierta
                  </span>
                </div>
              </div>
              <h4 className="text-[18px] font-bold text-[#111827] mb-2">
                Asesoría para Contratos Internacionales
              </h4>
              <p className="text-[#64748B] text-sm mb-6 leading-relaxed">
                Revisión de contratos para proveedores en LATAM.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="text-[#94A3B8] text-xs font-medium">
                  2 propuestas recibidas
                </span>
                <button className="flex items-center gap-1 text-[#1D61E7] font-bold text-sm">
                  Ver detalles <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Servicios en Progreso */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[#111827]">
              Servicios en Progreso
            </h3>
            <button className="text-[#1D61E7] font-bold text-sm hover:underline">
              Ver todos
            </button>
          </div>

          <div className="space-y-4">
            {/* Service Item 1 */}
            <div className="bg-white p-6 rounded-[28px] border border-gray-50 shadow-sm">
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#111827]">
                      Campaña Marketing Q4
                    </h4>
                    <span className="bg-[#ECFDF5] text-[#10B981] text-[10px] font-bold px-2 py-0.5 rounded-lg">
                      Activo
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Proveedor:{" "}
                    <span className="text-gray-700 font-semibold">
                      Agencia Digital 360
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-[#F8FAFC] p-4 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[11px] text-[#94A3B8] font-bold uppercase">
                    Próximo Hito
                  </p>
                  <span className="text-[11px] text-[#1D61E7] font-bold">
                    12 Oct
                  </span>
                </div>
                <p className="font-bold text-[#111827] text-sm mb-3">
                  Entrega de creatividades
                </p>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#1D61E7] h-full w-[65%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="bg-white p-6 rounded-[28px] border border-gray-50 shadow-sm">
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-[#EEF2FF] rounded-full flex items-center justify-center">
                  <Languages className="text-[#1D61E7] w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#111827]">
                      Traducción Técnica Manuales
                    </h4>
                    <span className="bg-orange-50 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-lg">
                      Revisión
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Proveedor:{" "}
                    <span className="text-gray-700 font-semibold">
                      Laura M. Translations
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-[#F8FAFC] p-4 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[11px] text-[#94A3B8] font-bold uppercase">
                    Próximo Hito
                  </p>
                  <span className="text-[11px] text-orange-400 font-bold">
                    Pendiente
                  </span>
                </div>
                <p className="font-bold text-[#111827] text-sm mb-3">
                  Aprobación final
                </p>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#10B981] h-full w-[85%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
