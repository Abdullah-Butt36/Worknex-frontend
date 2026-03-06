import React, { useState } from "react";
import { ShieldCheck, ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Aside = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "¿Por qué debo verificar mi identidad?",
      a: "La verificación aumenta la confianza de los clientes y te da acceso a proyectos de mayor valor en la plataforma.",
    },
    {
      q: "¿Qué beneficios obtengo al completar la verificación?",
      a: "Acceso a oportunidades premium, mayor visibilidad en búsquedas y la insignia de verificación.",
    },
    {
      q: "¿Cuánto tarda la revisión?",
      a: "Generalmente revisamos los documentos en menos de 24 horas hábiles.",
    },
    {
      q: "¿Quién puede ver esta información?",
      a: "Tu información es confidencial y se usa exclusivamente para fines de verificación interna.",
    },
  ];

  return (
    <aside className="w-full lg:w-[480px] bg-[#020617] p-6 sm:p-10 lg:pt-[172px] lg:px-16 flex flex-col border-t lg:border-t-0 lg:border-l border-slate-800/40">
      {/* --- DATOS SEGUROS SECTION --- */}
      <div className="mb-12 lg:mb-14">
        {/* Icon Box */}
        <div className="w-[52px] h-[52px] bg-[#1E293B]/60 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 border border-white/5 shadow-inner">
          <ShieldCheck size={26} className="text-slate-400" strokeWidth={1.5} />
        </div>

        <h3 className="text-white font-bold text-2xl lg:text-[26px] mb-4 tracking-tight">
          Datos Seguros
        </h3>

        <p className="text-slate-400 text-[14px] lg:text-[15px] leading-[1.75] mb-6 lg:mb-8 font-medium max-w-[320px]">
          Tu información está protegida. Usamos tus datos solo para verificación
          interna. Nunca se comparten con clientes o terceros.
        </p>

        {/* Link with Arrow */}
        <Link to="/termsandconditions" className="flex items-center gap-2 cursor-pointer group w-fit">
          <span className="text-blue-500 font-bold text-[14px] border-b border-transparent group-hover:border-blue-500 transition-all">
            Ver política de privacidad
          </span>
          <ArrowRight
            size={15}
            className="text-blue-500 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      {/* --- FAQ CONTAINER (Responsive Card) --- */}
      <div className="bg-[#121A2B] border border-slate-800/60 rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-2xl">
        <h3 className="text-white font-bold text-lg lg:text-[19px] mb-6 lg:mb-8 tracking-tight">
          Preguntas Frecuentes
        </h3>

        <div className="space-y-1">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-slate-800/40 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-5 lg:py-6 flex items-start justify-between text-left group transition-all"
              >
                <span
                  className={`text-[13.5px] lg:text-[14px] font-semibold leading-relaxed transition-colors pr-4 ${openIndex === i ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`mt-1 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-blue-500" : "text-slate-600"}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-slate-500 text-[13px] lg:text-[13.5px] leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
