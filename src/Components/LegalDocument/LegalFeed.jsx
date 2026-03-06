import React from "react";
import {
  ShieldCheck,
  Gavel,
  FileText,
  Lock,
  IdCard,
  Handshake,
  Copyright,
  ArrowDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LegalFeed = () => {
  const navigate = useNavigate();
  const documents = [
    {
      id: 1,
      title: "Contrato de Servicios",
      category: "Legal • Freelancers",
      price: "$29.00 USD",
      icon: <FileText className="text-blue-600" size={24} />,
      verified: true,
      editable: true,
      isFeatured: true,
      color: "bg-blue-50",
    },
    {
      id: 2,
      title: "Acuerdo de Confidencialidad (NDA)",
      category: "Legal • Corporativo",
      price: "$15.00 USD",
      icon: <Lock className="text-purple-600" size={24} />,
      verified: true,
      editable: true,
      color: "bg-purple-50",
    },
    {
      id: 3,
      title: "Acta Constitutiva SAS",
      category: "Empresas • Constitución",
      price: "$45.00 USD",
      icon: <Gavel className="text-orange-600" size={24} />,
      verified: true,
      editable: true,
      color: "bg-orange-50",
    },
    {
      id: 4,
      title: "Carta de Renuncia Laboral",
      category: "RRHH • Empleados",
      price: "Gratis",
      icon: <IdCard className="text-red-600" size={24} />,
      verified: true,
      editable: true,
      color: "bg-red-50",
    },
    {
      id: 5,
      title: "Acuerdo de Socios",
      category: "Empresas • Societario",
      price: "$39.00 USD",
      icon: <Handshake className="text-emerald-600" size={24} />,
      verified: true,
      editable: true,
      color: "bg-emerald-50",
    },
    {
      id: 6,
      title: "Cesión de Derechos de Autor",
      category: "Legal • Propiedad Intelectual",
      price: "$25.00 USD",
      icon: <Copyright className="text-indigo-600" size={24} />,
      verified: true,
      editable: true,
      color: "bg-indigo-50",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className={`relative bg-white rounded-[32px] p-6 md:p-8 border-2 transition-all duration-300 hover:shadow-xl group flex flex-col h-full
              ${doc.isFeatured ? "border-[#1D61E7]" : "border-transparent shadow-sm"}`}
          >
            <div className="flex flex-col gap-2 relative sm:absolute top-0 sm:top-6 right-0 sm:right-8 items-start sm:items-end mb-6 sm:mb-0">
              {doc.verified && (
                <div className="flex items-center gap-1.5 bg-[#EFF6FF] text-[#1D61E7] px-3 py-1.5 rounded-full text-[13px] font-[700] border border-blue-100/50 shadow-sm">
                  <ShieldCheck
                    size={16}
                    className="fill-[#1D61E7] text-[#EFF6FF]"
                  />
                  Plantilla Profesional Verificada
                </div>
              )}
              {doc.editable && (
                <div className="bg-gray-50 text-gray-500 px-3 py-1 rounded-md text-[14px] font-[700] ">
                  Formato Editable
                </div>
              )}
            </div>

            {/* Icon Box */}
            <div
              className={`w-16 h-16 ${doc.color} rounded-2xl flex items-center justify-center mb-8 mt-10 transition-transform group-hover:scale-110 shrink-0`}
            >
              {doc.icon}
            </div>

            <div className="mb-8 flex-grow">
              <h3 className="text-[24px] font-[700] text-[#0F172A] leading-tight mb-2 group-hover:text-[#1D61E7] transition-colors">
                {doc.title}
              </h3>
              <p className="text-[#64748B] text-[15px] font-[600]">
                {doc.category}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
              <span className="text-[22px] font-[700] text-[#0F172A]">
                {doc.price}
              </span>
              <button
                onClick={() => navigate("/login-step-1")}
                className="bg-[#EFF6FF] text-[#1D61E7] px-5 py-2.5 rounded-xl font-[800] text-[14px] hover:bg-blue-100 transition-colors"
              >
                Ver detalles
              </button>
            </div>

            <div className="absolute top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
              <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      <div 
        onClick={() => navigate("/dashboard-home")}
        className="flex items-center justify-center gap-4 mt-20 mb-16 group cursor-pointer"
      >
        <span className="text-[18px] font-[700] text-[#475569] group-hover:text-[#1D61E7] transition-colors">
          Ver más documentos
        </span>

        <div className="transition-transform group-hover:translate-y-1 duration-300">
          <ArrowDown
            size={20}
            className="text-[#475569] group-hover:text-[#1D61E7]"
            strokeWidth={2.5}
          />
        </div>
      </div>
    </div>
  );
};

export default LegalFeed;
