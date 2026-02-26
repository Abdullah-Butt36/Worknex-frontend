import React from "react";
import {
  Search,
  Briefcase,
  ShieldCheck,
  Landmark,
  ArrowRight,
} from "lucide-react";

const Section = () => {
  const containerStyle = "max-w-[1440px] mx-auto px-6 md:px-10";

  return (
    <main className="w-full bg-white font-sans overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className={`${containerStyle} pt-12 md:pt-20 pb-16 md:pb-24`}>
        <span className="text-[#1D61E7] font-bold text-[13px] md:text-[14px]   mb-4 block">
          Plataforma Todo-en-Uno
        </span>

        <h1 className="text-4xl md:text-[60px] font-[700] leading-[1.1] text-black tracking-tighter mb-6 max-w-[700px]">
          Bienvenido a <br className="hidden md:block" /> WORKNEX
        </h1>

        <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-relaxed max-w-[480px] mb-10">
          El entorno digital donde personas y empresas se conectan para
          solicitar, ofrecer y gestionar servicios profesionales.
        </p>

        {/* Search Bar - Responsive width and padding */}
        <div className="relative w-full max-w-[420px] flex items-center mb-16">
          <div className="absolute left-4 text-gray-400">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Busca soluciones..."
            className="w-full py-4 pl-12 pr-28 md:pr-32 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-sm md:text-base"
          />
          <button className="absolute right-2 bg-[#1D61E7] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-xl font-semibold text-[13px] md:text-[15px] hover:bg-blue-700 transition-all">
            Siguiente
          </button>
        </div>

        {/* Trust Logos - Improved wrapping for mobile */}
        <div className="mt-12 md:mt-16">
          <p className="text-[13px] font-medium text-gray-500 mb-8">
            Empresas líderes confían en WORKNEX
          </p>
          <div className="flex flex-wrap items-center gap-x-8 md:gap-x-12 gap-y-6 opacity-70">
            <span className="text-xl md:text-[22px] font-[700] text-gray-500">
              ACME
            </span>
            <div className="text-xl md:text-[22px] font-bold">
              <span className="text-gray-500">Global</span>
              <span className="text-gray-400 font-light">Bank</span>
            </div>
            <div className="text-xl md:text-[22px]">
              <span className="font-bold text-gray-500">Insur</span>
              <span className="font-medium text-[#769ce9]">Tech</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl md:text-[20px] font-bold text-gray-500">
                Nexus
              </span>
              <span className="font-light text-xl md:text-[22px] text-gray-600">
                Grp
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className={`${containerStyle} py-16 md:py-20`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-[32px] font-[700] text-black mb-4 tracking-tight">
              Nuestros Servicios
            </h2>
            <p className="text-gray-500 max-w-[400px]">
              Soluciones integradas diseñadas para el crecimiento de tu negocio.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-blue-600 font-bold text-[14px] hover:underline"
          >
            Ver todo el ecosistema <ArrowRight size={16} />
          </a>
        </div>

        {/* Grid: 1 column on mobile, 3 on tablet/desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            icon={<Briefcase size={20} />}
            title="Servicios Profesionales"
            desc="Conectamos oferta y demanda de servicios especializados para empresas y profesionales."
          />
          <ServiceCard
            icon={<ShieldCheck size={20} />}
            title="Seguros"
            desc="Protección integral. Seguros de salud, responsabilidad civil y equipos adaptados."
          />
          <ServiceCard
            icon={<Landmark size={20} />}
            title="Finanzas"
            desc="Gestión financiera inteligente. Facturación automatizada y pagos globales."
          />
        </div>
      </section>

      {/* 3. CTA BLUE CARD - Responsive Padding and Text */}
      <section className={`${containerStyle} py-16 md:py-24`}>
        <div className="bg-[#1D61E7] rounded-[32px] md:rounded-[48px] px-6 py-16 md:p-20 text-center text-white relative overflow-hidden">
          <h2 className="text-3xl md:text-[42px] font-[600] leading-tight mb-6 tracking-tight">
            ¿Listo para llevar tu negocio al <br className="hidden md:block" />{" "}
            siguiente nivel?
          </h2>
          <p className="text-blue-100 text-[15px] md:text-[17px] mb-10 max-w-[550px] mx-auto">
            Únete a miles de profesionales que ya confían en el ecosistema
            WORKNEX.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#1D61E7] px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
              Empezar Gratis
            </button>
            <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Contactar Ventas
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <div className="p-8 md:p-10 bg-[#F9FAFB] rounded-[32px] hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
    <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-[#1D61E7] group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-[20px] md:text-[22px] font-[800] text-black mb-4 tracking-tight">
      {title}
    </h3>
    <p className="text-gray-500 leading-relaxed mb-6 text-[14px] md:text-[15px]">
      {desc}
    </p>
    <a
      href="#"
      className="text-[#1D61E7] font-bold text-[14px] flex items-center gap-1 group/link"
    >
      Explorar Soluciones
      <ArrowRight
        size={14}
        className="group-hover/link:translate-x-1 transition-transform"
      />
    </a>
  </div>
);

export default Section;
