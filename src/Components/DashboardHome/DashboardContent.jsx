import React from "react";
import {
  Bell,
  ArrowRight,
  CheckCircle2,
  Lock,
  Clock,
  DollarSign,
  MessageSquare,
  Filter,
  MoreHorizontal,
  Diamond,
  Code2,
  BrainCircuit,
  Palette,
  PenTool,
} from "lucide-react";

const DashboardContent = () => {
  return (
    <div className="w-full bg-[#F8FAFC]">
      <div className="max-w-[1300px] mx-auto py-8 pt-24 lg:pt-10 px-6 md:px-10">
        {/* 1. Header Section - Fixed alignment for Desktop & Mobile */}
        <div className="flex flex-row items-center justify-between mb-10 w-full gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-[26px] md:text-[32px] font-[700] text-[#1A202C] leading-tight tracking-tight truncate">
              Hola, Alejandro
            </h1>
            <p className="text-[#718096] text-[17px] md:text-[15px] mt-1 font-medium truncate">
              Gestiona tus oportunidades y servicios según tu plan.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button className="p-2.5 bg-white rounded-full border border-gray-100 shadow-sm text-gray-400 relative hover:text-[#1D61E7] transition-all">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </div>

        {/* 2. Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <StatCard
            title="Oportunidades Disponibles"
            value="24"
            tag="Según especialidad"
            tagColor="bg-[#DCFCE7] text-[#166534]"
            tagIcon={<Filter size={12} fill="currentColor" />}
            bgText="travel_"
          />
          <StatCard
            title="Propuestas (Usadas)"
            value="8"
            subValue="/ 15 Disponibles"
            progress={55}
            bgText="send"
          />
          <StatCard
            title="Servicios Activos"
            value="3"
            tag="En progreso"
            tagColor="bg-[#EBF2FF] text-[#1D61E7]"
            tagIcon={
              <div className="bg-[#1D61E7] rounded-full p-0.5">
                <MoreHorizontal
                  size={10}
                  className="text-white"
                  strokeWidth={3}
                />
              </div>
            }
            bgText="engine"
          />
          <StatCard
            title="Plan Activo"
            value="Plan Profesional"
            subValue="Renueva en 18 días"
            link="Ver Plan"
            bgText="verified"
          />
        </div>

        {/* 3. Main Columns Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="xl:col-span-8 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-[21px] font-[700] text-[#1A202C]">
                Oportunidades para ti
              </h2>
              <button className="text-[#1D61E7] font-bold text-[14px] hover:underline">
                Ver todas
              </button>
            </div>

            <JobCard
              title="Desarrollo de E-commerce B2B"
              company="TechCorp Solutions"
              location="Remoto"
              desc="Buscamos un experto en Shopify Plus para desarrollar una tienda B2B con integraciones complejas de ERP. EI Proyecto tiene una duracion estimada de  3 meses."
              tag="Incluido en tu plan"
              price="Presupuesto $3k - $5k"
              time="Publicado Hace 2h"
              icon={<Code2 size={22} />}
              iconColor="bg-[#EBF2FF] text-[#1D61E7]"
            />

            <JobCard
              title="Consultoría Estratégica AI"
              company="InnovateX"
              location="Híbrido"
              desc="Asesoramiento para la implementación de herramientas de IA generativa en procesos creativos de agencia de marketing."
              tag="Requiere Plan Premium"
              tagStyle="bg-[#FEF3C7] text-[#92400E]"
              price="Presupuesto $5k+"
              time="Publicado Hace 5h"
              icon={<BrainCircuit size={22} />}
              iconColor="bg-[#F3E8FF] text-[#7E22CE]"
            />

            <JobCard
              title="Rediseño de Marca Corporativa"
              company="Grupo Financiero A."
              location="Remoto"
              desc="Necesitamos renovar nuestra identidad visual corporativa para atraer a un público más joven sin perder seriedad."
              tag="Incluido en tu plan"
              price="Presupuesto $2.5k - $4k"
              time="Publicado Hace 1d"
              icon={<Palette size={22} />}
              iconColor="bg-[#E0F2FE] text-[#0EA5E9]"
            />
          </div>

          {/* Right Column */}
          <div className="xl:col-span-4 space-y-6">
            <div className="bg-[#1E293B] rounded-[24px] p-9 m-7 text-white relative overflow-visible shadow-xl shadow-slate-200">
              <h3 className="font-semibold text-[22px] mb-4 flex items-center gap-2 relative z-10">
                <Diamond
                  size={20}
                  className="text-[#3B82F6]"
                  fill="#3B82F6"
                  strokeWidth={2.5}
                />
                Tu Plan Profesional
              </h3>

              <p className="text-slate-400 text-[14px] mb-6 leading-relaxed relative z-10 font-medium">
                Estás aprovechando al máximo tus benefits. ¿Necesitas más
                alcance?
              </p>

              <ul className="space-y-4 mb-8 text-[13px] text-slate-300 relative z-10 font-medium">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-green-400" /> 15
                  Propuestas mensuales
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-green-400" /> Comisión
                  reducida (8%)
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-green-400" /> Soporte
                  prioritario
                </li>
                <li className="flex items-center gap-2.5 text-slate-500 font-semibold opacity-60">
                  <Lock size={18} /> Acceso a Proyectos Premium
                </li>
              </ul>

              <button className="w-full bg-[#1D61E7] py-3.5 rounded-full font-[700] text-[14px] hover:bg-blue-600 active:scale-95 transition-all relative z-10">
                Actualizar a Premium
              </button>

              <div className="absolute -top-14 -right-14 w-35 h-35 bg-[#3B82F6] opacity-10 rounded-full z-0"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#3B82F6] opacity-20 rounded-full blur-2xl z-0"></div>
            </div>

            <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1A202C] mb-4 text-[16px]">
                Actividad Reciente
              </h3>
              <ActivityItem
                title="Contrato de Diseño Web"
                sub="Propuesta enviada"
                time="Hace 2h"
                icon={<Clock size={16} />}
              />
              <ActivityItem
                title="Nuevo Mensaje"
                sub="De Cliente: Maria G."
                time="Ayer"
                icon={<MessageSquare size={16} />}
                isNew
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- StatCard Component ---
const StatCard = ({
  title,
  value,
  subValue,
  tag,
  tagColor,
  tagIcon,
  progress,
  link,
  bgText,
}) => {
  const isPlan = title === "Plan Activo";
  return (
    <div className="bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm relative overflow-hidden h-[155px] flex flex-col justify-between group">
      <div className="absolute top-[-15px] right-[-15px] pointer-events-none select-none z-0">
        <div className="w-[105px] h-[105px] bg-[#EBF2FF] rounded-full flex items-center justify-center pt-4 pr-4">
          <span className="text-[18px] font-[700] text-[#1D61E7] ">
            {bgText}
          </span>
        </div>
      </div>
      <div className="relative z-10">
        <p className="text-[#718096] text-[13px] font-[700] mb-2">{title}</p>
        <div className="flex flex-col">
          <span
            className={`font-[900] text-[#1A202C] tracking-tight leading-[1.1] ${isPlan ? "text-[20px]" : "text-[30px]"}`}
          >
            {value}
          </span>
          {subValue && (
            <span
              className={`text-[#94A3B8] font-[700] ${isPlan ? "text-[12px] mt-1" : "text-[12px] ml-1"}`}
            >
              {subValue}
            </span>
          )}
        </div>
      </div>
      <div className="relative z-10 mt-auto">
        {tag && (
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-[800] ${tagColor} inline-flex items-center gap-1.5`}
          >
            {tagIcon ? (
              tagIcon
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            )}
            {tag}
          </span>
        )}
        {progress && (
          <div className="mt-3">
            <div className="w-full h-[6px] bg-[#F1F5F9] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1D61E7] rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
        {link && (
          <button className="text-[#1D61E7] text-[13px] font-[800] flex items-center gap-1 mt-2 hover:gap-2 transition-all">
            {link} <ArrowRight size={14} strokeWidth={3} />
          </button>
        )}
      </div>
    </div>
  );
};

// --- JobCard Component ---
const JobCard = ({
  title,
  company,
  location,
  desc,
  tag,
  tagStyle,
  price,
  time,
  icon,
  iconColor,
}) => (
  <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-4">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconColor}`}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-[700] text-[18px] text-[#1A202C] tracking-tight">
            {title}
          </h3>
          <p className="text-[13px] text-[#718096] font-semibold">
            {company} • {location}
          </p>
        </div>
      </div>
      <span
        className={`px-3 py-1.5 rounded-full text-[11px] font-[800] ${tagStyle || "bg-[#DCFCE7] text-[#166534]"}`}
      >
        {tag}
      </span>
    </div>
    <p className="text-[#4A5568] text-[14px] mb-6 leading-relaxed font-medium">
      {desc}
    </p>
    <div className="flex items-center gap-6 text-[12px] text-[#94A3B8] font-[700]">
      <span className="flex items-center gap-1.5">
        <Clock size={16} /> {time}
      </span>
      <span className="flex items-center gap-1.5">
        <DollarSign size={16} /> {price}
      </span>
    </div>
  </div>
);

// --- ActivityItem Component ---
const ActivityItem = ({ title, sub, time, icon, isNew }) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
    <div className="flex items-center gap-3.5">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center ${isNew ? "bg-orange-50 text-orange-500" : "bg-blue-50 text-blue-500"}`}
      >
        {icon}
      </div>
      <div>
        <h4 className="text-[14px] font-[700] text-[#1A202C]">{title}</h4>
        <p className="text-[12px] text-[#94A3B8] font-semibold">{sub}</p>
      </div>
    </div>
    <span className="text-[11px] text-[#94A3B8] font-[700]">{time}</span>
  </div>
);

export default DashboardContent;
