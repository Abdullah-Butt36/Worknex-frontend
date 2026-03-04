import React, { useState } from "react";
import { Store, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";

const RoleSelectionPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans flex flex-col">
      {/* --- Simple Navbar --- */}
      <nav className="w-full bg-white px-6 md:px-16 h-[100px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1D61E7] rounded-xl flex items-center justify-center text-white">
            <Store size={22} fill="white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-black uppercase">
              WORKNEX
            </span>
          </div>
        </div>
        <button className="flex items-center gap-2 text-gray-600 font-bold text-sm hover:text-black">
          Iniciar Sesión <ArrowRight size={18} />
        </button>
      </nav>

      {/* --- Main Content --- */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 mt-8 pb-20">
        {/* Header Text */}
        <div className="text-center max-w-2xl mb-12">
          <h1 className="text-[48px] md:text-[56px] font-[700] text-[#111827] leading-[1.1] tracking-tight mb-6">
            ¿Cómo quieres usar <br /> WORKNEX?
          </h1>
          <p className="text-gray-500 text-[18px] leading-relaxed">
            Selecciona cómo participarás en la plataforma. Tendrás acceso a
            diferentes funciones según tu elección.
          </p>
        </div>

        {/* Selection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
          {/* Card 1: Quiero solicitar servicios */}
          <SelectionCard
            id="solicitar"
            icon={<Store size={24} className="text-[#1D61E7]" />}
            title="Quiero solicitar servicios"
            description="Publica solicitudes, recibe propuestas verificadas y gestiona servicios profesionales desde un solo lugar."
            features={[
              "Personas o empresas",
              "Necesidades puntuales o recurrentes",
              "Contratación de servicios con el respaldo de WORKNEX",
            ]}
            selected={selectedRole === "solicitar"}
            onSelect={() => setSelectedRole("solicitar")}
          />

          {/* Card 2: Quiero ofrecer servicios */}
          <SelectionCard
            id="ofrecer"
            icon={<Handshake size={24} className="text-[#1D61E7]" />}
            title="Quiero ofrecer servicios"
            description="Responde a oportunidades, envía propuestas y entrega tus servicios a clientes y empresas."
            features={[
              "Profesionales independientes o empresas",
              "Propuestas claras y trazables",
              "Acceso a clientes verificados",
            ]}
            selected={selectedRole === "ofrecer"}
            onSelect={() => setSelectedRole("ofrecer")}
          />
        </div>

        {/* Action Button */}
        <div className="w-full max-w-md flex flex-col items-center gap-6">
          <button
            disabled={!selectedRole}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg
              ${
                selectedRole
                  ? "bg-[#1D61E7] text-white hover:bg-blue-700 shadow-blue-500/20"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            Continuar
          </button>

          <p className="text-gray-500 text-[15px]">
            ¿Ya tienes una cuenta?{" "}
            <span className="text-[#1D61E7] font-bold cursor-pointer hover:underline">
              Inicia sesión
            </span>
          </p>
        </div>
      </main>
    </div>
  );
};

// --- Sub-component for Cards ---
const SelectionCard = ({
  icon,
  title,
  description,
  features,
  selected,
  onSelect,
}) => (
  <div
    onClick={onSelect}
    className={`relative p-10 bg-white rounded-[32px] cursor-pointer transition-all border-2 flex flex-col
      ${
        selected
          ? "border-[#1D61E7] shadow-xl ring-4 ring-blue-500/5"
          : "border-transparent shadow-sm hover:border-gray-200"
      }`}
  >
    {/* Custom Radio Button */}
    <div
      className={`absolute top-8 right-8 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
      ${selected ? "bg-[#1D61E7] border-[#1D61E7]" : "border-gray-300"}`}
    >
      {selected && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
    </div>

    {/* Icon Container */}
    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
      {icon}
    </div>

    {/* Text Content */}
    <h3 className="text-[24px] font-[800] text-[#111827] mb-4 tracking-tight leading-tight">
      {title}
    </h3>
    <p className="text-gray-500 text-[15px] leading-relaxed mb-8 h-[60px]">
      {description}
    </p>

    {/* Features List */}
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <CheckCircle2 size={18} className="text-[#1D61E7] shrink-0 mt-0.5" />
          <span className="text-gray-600 text-[14px] leading-tight font-medium">
            {feature}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default RoleSelectionPage;
