import React, { useState } from "react";
import { motion } from "framer-motion";
import { MoreVertical, Filter, ArrowUpDown, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProposalTable = () => {
  const navigate = useNavigate();
  // 1. Active Tab State
  const [activeTab, setActiveTab] = useState("Todas");
  const tabs = ["Todas", "Enviada", "Vista", "Seleccionada", "No seleccionada"];

  const proposals = [
    {
      id: 1,
      title: "Rediseño de E-commerce",
      client: "Nike Inc.",
      date: "12 Oct 2023",
      price: "4.200.000 CLP",
      status: "Vista por el cliente",
      statusColor: "bg-blue-500/10 text-blue-400",
      dot: "bg-blue-500",
    },
    {
      id: 2,
      title: "Desarrollo de App iOS",
      client: "StartUp X",
      date: "10 Oct 2023",
      price: "7.500.000 CLP",
      status: "Enviada",
      statusColor: "bg-amber-500/10 text-amber-500",
      dot: "bg-amber-500",
    },
    {
      id: 3,
      title: "Auditoría SEO",
      client: "TechFlow",
      date: "08 Oct 2023",
      price: "45 UF",
      status: "Seleccionada",
      statusColor: "bg-emerald-500/10 text-emerald-400",
      dot: "bg-emerald-500",
    },
    {
      id: 4,
      title: "Branding Corporativo",
      client: "GreenEnergy",
      date: "05 Oct 2023",
      price: "2.800.000 CLP",
      status: "No seleccionada",
      statusColor: "bg-red-500/10 text-red-400",
      dot: "bg-red-500",
    },
    {
      id: 5,
      title: "Migración de Base de Datos",
      client: "FinTech Corp",
      date: "01 Oct 2023",
      price: "5.000.000 CLP",
      status: "Retirada",
      statusColor: "bg-gray-500/10 text-gray-400",
      dot: "bg-gray-500",
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* 1. FILTER TABS & ACTIONS */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">
        {/* Sliding Tabs Container */}
        <div className="relative flex items-center gap-1 p-1 bg-[#111827]/60 rounded-full border border-gray-800 overflow-x-auto no-scrollbar w-full lg:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-2 rounded-full text-[13px] font-[600] whitespace-nowrap transition-colors duration-300 z-10 ${
                activeTab === tab
                  ? "text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {/* The White Sliding Indicator */}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-white rounded-full z-[-1]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Filter/Sort Buttons */}
        <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
          <button className="flex items-center gap-2 text-gray-400 text-[13px] font-[600] hover:text-white">
            <Filter size={16} /> Filtrar
          </button>
          <button className="flex items-center gap-2 text-gray-400 text-[13px] font-[600] hover:text-white">
            <ArrowUpDown size={16} /> Ordenar
          </button>
        </div>
      </div>

      {/* 2. TABLE CONTAINER */}
      <div className="bg-[#0B1221]/40 border border-gray-800/50 rounded-[24px] overflow-hidden">
        {/* Table Header (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-12 px-6 py-4 text-gray-500 text-[11px] font-[700] uppercase tracking-wider border-b border-gray-800/50">
          <div className="col-span-5">Proyecto</div>
          <div className="col-span-2 text-center">Fecha</div>
          <div className="col-span-2 text-right">Presupuesto</div>
          <div className="col-span-2 text-center">Estado</div>
          <div className="col-span-1 text-right">Acciones</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-800/30">
          {proposals.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate('/proposal-view')}
              className="grid grid-cols-12 px-4 md:px-6 py-5 items-center hover:bg-white/[0.02] cursor-pointer transition-all group"
            >
              {/* Title & Client (Responsive: columns shift here on mobile) */}
              <div className="col-span-8 md:col-span-5">
                <h4 className="text-white text-[14px] md:text-[15px] font-[700] mb-1 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1 text-gray-500 text-[12px]">
                  <Building2 size={12} /> {item.client}
                </div>

                {/* Mobile-Only Info Row */}
                <div className="md:hidden mt-2 flex gap-3 text-gray-400 text-[11px] font-[500]">
                  <span>{item.date}</span>
                  <span className="text-gray-300 font-[600]">{item.price}</span>
                </div>
              </div>

              {/* Desktop Columns */}
              <div className="hidden md:block col-span-2 text-center text-gray-400 text-[13px] font-[500]">
                {item.date}
              </div>
              <div className="hidden md:block col-span-2 text-right text-gray-200 text-[13px] font-[700]">
                {item.price}
              </div>

              {/* Status Badge (Aligned right on mobile) */}
              <div className="col-span-4 md:col-span-2 flex justify-end md:justify-center">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-[700] ${item.statusColor}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${item.dot}`}
                  ></span>
                  {item.status}
                </span>
              </div>

              {/* Action Button (Desktop Only) */}
              <div className="hidden md:flex col-span-1 justify-end">
                <button className="text-gray-600 hover:text-white transition-colors">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="px-6 py-6 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[13px]">
            Mostrando <span className="text-gray-300 font-[600]">1 a 5</span> de
            12
          </p>
          <div className="flex items-center gap-6">
            <button className="text-gray-500 hover:text-white text-[13px] font-[600]">
              Anterior
            </button>
            <button className="text-gray-300 hover:text-white text-[13px] font-[600]">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalTable;
