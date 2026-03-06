import React from "react";
import { ChevronDown, ArrowDown, Bookmark, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- ORIGINAL CUSTOM SVG ICONS ---

const VerifiedSeal = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.29 3.86L12 2L13.71 3.86L16.25 3.51L17.21 5.86L19.57 6.82L19.22 9.36L21.08 11.07L19.22 12.78L19.57 15.32L17.21 16.28L16.25 18.63L13.71 18.28L12 20.14L10.29 18.28L7.75 18.63L6.79 16.28L4.43 15.32L4.78 12.78L2.92 11.07L4.78 9.36L4.43 6.82L6.79 5.86L7.75 3.51L10.29 3.86Z"
      fill="#1D61E7"
    />
    <path
      d="M9 11L11 13L15 9"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LockIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5"
      y="11"
      width="14"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationPin = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 10.5C21 16.5 12 22.5 12 22.5C12 22.5 3 16.5 3 10.5C3 8.11305 3.94821 5.82387 5.63604 4.13604C7.32387 2.44821 9.61305 1.5 12 1.5C14.3869 1.5 16.6761 2.44821 18.364 4.13604C20.0518 5.82387 21 8.11305 21 10.5Z"
      fill="#475569"
    />
    <circle cx="12" cy="10.5" r="2.5" fill="white" />
  </svg>
);

const OpportunityFeed = () => {
  const navigate = useNavigate();
  const opportunities = [
    {
      id: 1,
      title: "Diseño de Sistema de Diseño para",
      verified: true,
      remote: true,
      time: "Hace 2 horas",
      price: "85 UF",
      desc: "Buscamos un especialista senior en UI/UX para liderar la creación y documentación de nuestro Design System corporativo. El candidato debe tener experiencia previa con Figma Variables, Tokens y documentación en Storybook.",
      tags: ["Figma", "Design Systems", "React"],
      isFeatured: true,
      isLocked: false,
    },
    {
      id: 2,
      title: "Desarrollo E-commerce B2B (Shopify Plus)",
      verified: true,
      location: "Santiago, CL",
      remote: false,
      time: "Hace 4 horas",
      price: "$1.8M CLP",
      desc: "Necesitamos migrar nuestra tienda mayorista actual a Shopify Plus. Se requiere integración con ERP SAP Business One aur personalización del checkout para reglas de negocio complejas.",
      tags: ["Shopify Liquid", "API Integration", "E-commerce"],
      isFeatured: false,
      isLocked: true,
    },
    {
      id: 3,
      title: "Asesoría Legal para Startup",
      verified: true,
      remote: true,
      time: "Ayer",
      price: "35 UF",
      desc: "Buscamos abogado corporativo con experiencia en tecnología para redactar Términos y Condiciones, Políticas de Privacidad (GDPR/LGPD) y contratos de vesting para fundadores.",
      tags: ["Legal Tech", "Contratos"],
      isFeatured: false,
      isLocked: true,
    },
    {
      id: 4,
      title: "Auditoría Financiera",
      verified: true,
      location: "Valparaíso, CL",
      remote: false,
      time: "Ayer",
      price: "$900.000 CLP",
      desc: "Empresa de logística requiere auditor externo para revisión de estados financieros del año en curso. Necesario certificación CPA y experiencia en sector transporte.",
      tags: ["Contabilidad", "Auditoría"],
      isFeatured: false,
      isLocked: true,
    },
  ];

  return (
    <div className="flex-1 w-full px-4 md:px-0">
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
        <div>
          <h1 className="text-[32px] font-[700] text-[#0F172A]  leading-tight mb-2">
            Oportunidades Profesionales
          </h1>
          <p className="text-[#64748B] text-[17px] max-w-2xl font-[500]">
            Explora solicitudes verificadas publicadas por personas y empresas
            que buscan profesionales como tú.
          </p>
        </div>
        <button className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-xl font-[700] text-[14px] shadow-sm hover:bg-gray-50 transition-all active:scale-95">
          <Bookmark size={18} /> Guardar Búsqueda
        </button>
      </div>

      {/* --- FILTER TAGS --- */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="px-3 py-1.5 bg-[#EFF6FF] text-[#1D61E7] text-[15px] font-[600] rounded-lg flex items-center gap-2">
            Diseño UI/UX <span className="cursor-pointer  opacity-60">×</span>
          </div>
          <div className="px-3 py-1.5 bg-[#F1F5F9] text-[#64748B] text-[15px] font-[600] rounded-lg flex items-center gap-2">
            Remoto{" "}
            <span className="cursor-pointer font-bold opacity-60">×</span>
          </div>
          <button className="text-[#94A3B8] text-[15px] font-[600] ml-1 hover:text-[#1D61E7]">
            Limpiar todos
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-[14px] font-[600]">
            Ordenar por:
          </span>
          <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 font-[700] text-[14px] hover:border-gray-300">
            Más relevantes <ChevronDown size={16} className="text-[#1D61E7]" />
          </button>
        </div>
      </div>

      {/* --- CARDS LIST --- */}
      <div className="space-y-4">
        {opportunities.map((job) => (
          <div
            key={job.id}
            className={`relative bg-white rounded-[24px] p-6 md:p-8 border border-gray-50 shadow-sm transition-all duration-300 hover:shadow-md group overflow-hidden
              ${job.isFeatured ? "before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] before:bg-[#1D61E7]" : ""}`}
          >
            {/* Time Badge */}
            <span className="absolute top-6 right-8 text-[12px] font-[700] text-gray-400 bg-gray-50 px-3 py-1 rounded-lg">
              {job.time}
            </span>

            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div className="flex-1 relative">
                <h3 className="text-[22px] font-[700] text-[#0F172A] mb-3 pr-20  group-hover:text-[#1D61E7] transition-colors">
                  {job.title}
                </h3>

                {/* Meta Row */}
                <div className="flex items-center gap-4 mb-4 text-[13px] font-[700]">
                  <span className="flex items-center gap-1.5 text-[#1D61E7] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-50">
                    <VerifiedSeal /> Verificado
                  </span>
                  <span className="flex items-center gap-1.5 text-[#64748B]">
                    {job.remote ? (
                      <Globe size={14} strokeWidth={2.5} />
                    ) : (
                      <LocationPin />
                    )}
                    {job.remote ? "Remoto" : job.location}
                  </span>
                </div>

                {/* Description with Lock Logic */}
                <div className="relative">
                  <p className="text-[#64748B] text-[15 px] leading-relaxed font-[500] mb-5 max-w-3xl">
                    {job.desc}
                  </p>
                  {job.isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center -top-2 text-gray-300 pointer-events-none">
                      <LockIcon />
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-[#F1F5F9] text-[#64748B] text-[12px] font-[700] rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action Section */}
              <div className="lg:w-[220px] flex flex-col justify-between items-end border-t lg:border-t-0 lg:border-l border-gray-50 pt-5 lg:pt-0 lg:pl-8">
                <div className="text-right">
                  <p className="text-[11px] font-[700] text-gray-400 uppercase tracking-widest mb-1">
                    Presupuesto
                  </p>
                  <p className="text-[24px] md:text-[26px] font-[700] text-[#0F172A] ">
                    {job.price}
                  </p>
                </div>

                <button
                  onClick={() => {
                    if (job.isLocked) {
                      navigate('/subscription');
                    } else {
                      navigate('/proposal-soft-gate');
                    }
                  }}
                  className={`mt-6 flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-[700] text-[16px] w-full lg:w-full transition-all active:scale-95
                    ${
                      job.isLocked
                        ? "bg-[#F8FAFC] text-[#64748B] border border-gray-100"
                        : "bg-[#1D61E7] text-white hover:bg-blue-700 "
                    }`}
                >
                  {job.isLocked && <LockIcon />} Ver Detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- FOOTER LOAD MORE --- */}
      <div className="flex justify-center mt-12 mb-20">
        <button className="flex items-center gap-3 px-10 py-4 bg-white border border-gray-100 rounded-full font-[700] text-[17px] text-[#0F172A] shadow-sm hover:shadow-md transition-all active:scale-95 group">
          Cargar más proyectos
          <ArrowDown
            size={18}
            className="text-[#1D61E7] group-hover:translate-y-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );
};

export default OpportunityFeed;
