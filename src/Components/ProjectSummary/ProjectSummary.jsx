import React from "react";
import Navbar from "./SummaryNavbar";
import {
  Sparkles,
  Printer,
  Cloud,
  Box,
  RefreshCw,
  Globe,
  Briefcase,
  Wallet,
  ArrowLeft,
  SendHorizontal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectSummary = () => {
  const navigate = useNavigate();
  // Hex equivalent of rgba(246, 246, 248, 1) is #F6F6F8 const grayBg = "#F6F6F8";

  return (
    <div className="bg-[#F6F6F8] min-h-screen font-sans antialiased">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[32px] font-bold text-[#111827] mb-2">
            Resumen de la Solicitud
          </h1>
          <p className="text-[#6B7280] text-[15px]">
            Revisa y confirma la información antes de publicar tu solicitud para
            profesionales y proveedores verificados en WORKNEX.
          </p>
        </div>

        {/* AI Banner */}
        <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-xl p-4 flex items-center gap-3 mb-8">
          <Sparkles className="text-[#2563EB] w-5 h-5 flex-shrink-0" />
          <p className="text-[#1E40AF] text-[13px]">
            <span className="font-bold">Asistente IA:</span> Este resumen fue
            estructurado automáticamente. Por favor, revísalo y ajústalo antes
            de publicar.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[32px] p-8 md:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F1F5F9]">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">
                Título del servicio
              </p>
              <h2 className="text-xl md:text-[40px] font-bold text-[#111827] ">
                Consultoría para Transformación Digital
              </h2>
            </div>
            {/* Exact Printer and Text Color Adjustments */}
            <button className="hidden sm:flex items-center gap-2 text-[#4B5563] hover:text-[#111827] text-[12px] font-bold uppercase transition-colors">
              <Printer className="w-4 h-4 text-[#4B5563]" /> Vista Previa PDF
            </button>
          </div>

          {/* Description Section */}
          <div className="mb-12">
            <h3 className="font-bold text-[17px] text-[#111827] mb-4">
              Descripción
            </h3>
            <div className="bg-[#F6F6F8] rounded-2xl p-7 border border-[#E5E7EB]">
              {/* Darker Gray for the actual description text as per image */}
              <p className="text-[#374151] leading-relaxed text-[15px] font-medium">
                Buscamos un socio estratégico para liderar la transformación
                digital de nuestra cadena de suministro. El objetivo es integrar
                sistemas legacy con nuevas soluciones en la nube para mejorar la
                visibilidad del inventario en tiempo real. Se requiere
                experiencia previa en el sector logístico y retail B2B. El
                alcance incluye análisis de procesos, selección de tecnología y
                gestión del cambio organizacional.
              </p>
              <p className="text-[#9CA3AF] text-[11px] mt-6 font-normal ">
                El contenido es responsabilidad del solicitante.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-12">
            <h3 className="font-bold text-[17px] text-[#111827] mb-5">
              Especialidades o habilidades requeridas
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Cloud, label: "Cloud Architecture" },
                { icon: Box, label: "Supply Chain" },
                { icon: RefreshCw, label: "Change Management" },
                { icon: Globe, label: "Español / Inglés" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 bg-[#F6F6F8] px-5 py-2.5 rounded-full text-[13px] font-bold text-[#374151] border border-[#E5E7EB]"
                >
                  <item.icon className="w-4 h-4 text-[#4B5563]" /> {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Modalidad & Presupuesto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
            <div>
              <h3 className="font-bold text-[17px] text-[#111827] mb-5">
                Modalidad del servicio
              </h3>
              <div className="flex items-center gap-4">
                <div className="bg-[#EFF6FF] p-3 rounded-xl">
                  <Briefcase className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <p className="font-bold text-[#111827] text-[16px]">
                    Híbrido
                  </p>
                  <p className="text-[#9CA3AF] text-[13px]">
                    Oficinas Centrales / Remoto
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[17px] text-[#111827] mb-5">
                Presupuesto estimado (Referencial)
              </h3>
              <div className="flex items-center gap-4">
                <div className="bg-[#ECFDF5] p-3 rounded-xl">
                  <Wallet className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <p className="font-bold text-[#111827] text-[16px]">
                    €15.000 - €25.000
                  </p>
                  <p className="text-[#9CA3AF] text-[13px]">Por Proyecto</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#6B7280] font-bold hover:text-black transition-all order-2 md:order-1"
          >
            <ArrowLeft className="w-5 h-5" /> Atrás
          </button>
          <p className="text-[13px] text-[#9CA3AF] text-center max-w-[480px] leading-snug order-3 md:order-2">
            Al publicar, tu solicitud será visible para profesionales y
            proveedores elegibles en WORKNEX. Puedes editar o cancelar la
            solicitud siempre que no hayas aceptado una propuesta.
          </p>
          <button 
            onClick={() => navigate("/project-publication")}
            className="bg-[#1D61F2] hover:bg-[#1A56D6] text-white px-12 py-4 rounded-full font-bold flex items-center gap-3 transition-all shadow-lg shadow-blue-100 w-full md:w-auto justify-center order-1 md:order-3"
          >
            Publicar solicitud <SendHorizontal className="w-4 h-4 fill-white" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProjectSummary;
