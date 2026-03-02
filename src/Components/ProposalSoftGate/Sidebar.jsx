import React from "react";
import { Star, MapPin, UserCheck, Calendar } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-6 w-full font-sans">
      {/* 1. PRESUPUESTO PROPUESTO (Budget Card) */}
      <section className="bg-[#111827]/50 border border-gray-800 rounded-[24px] p-6 md:p-8">
        <p className="text-gray-500 text-[13px] font-[600] uppercase tracking-wider mb-2">
          Presupuesto Propuesto
        </p>
        <h2 className="text-white text-[32px] md:text-[36px] font-[900] mb-1">
          $4,500 USD
        </h2>
        <p className="text-gray-400 text-[14px]">
          Entrega estimada:{" "}
          <span className="text-gray-300 font-[600]">4 semanas</span>
        </p>
      </section>

      {/* 2. USER PROFILE CARD */}
      <section className="bg-[#111827]/50 border border-gray-800 rounded-[24px] p-6 md:p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative shrink-0">
            <div className="w-16 h-16 bg-gray-700 rounded-full border-2 border-gray-800 overflow-hidden"></div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-[#22C55E] border-2 border-[#111827] rounded-full"></span>
          </div>

          <div>
            <h3 className="text-white text-[18px] font-[700] leading-tight">
              Alejandro G.
            </h3>
            <p className="text-blue-500 text-[13px] font-[600]">
              Senior Brand Designer
            </p>
          </div>
        </div>

        {/* Rating & Location */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-800/50">
          <div className="flex items-center gap-1 text-[#F59E0B]">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} fill="currentColor" />
            ))}
            <span className="text-gray-400 text-[13px] font-[700] ml-1">
              4.9
            </span>
            <span className="text-gray-500 text-[12px] font-[500]">
              (42 reseñas)
            </span>
          </div>
        </div>

        {/* User Stats */}
        <div className="space-y-4 text-[13px]">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 flex items-center gap-2">
              <MapPin size={14} /> Ubicación
            </span>
            <span className="text-gray-300 font-[600]">Buenos Aires, AR</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 flex items-center gap-2">
              <UserCheck size={14} /> Éxito de trabajo
            </span>
            <span className="text-gray-300 font-[600]">98%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 flex items-center gap-2">
              <Calendar size={14} /> Miembro desde
            </span>
            <span className="text-gray-300 font-[600]">2019</span>
          </div>
        </div>
      </section>

      {/* 3. HABILIDADES (Skills) */}
      <section className="bg-[#111827]/50 border border-gray-800 rounded-[24px] p-6 md:p-8">
        <h3 className="text-white text-[15px] font-[700] mb-4">Habilidades</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Adobe Illustrator",
            "Brand Identity",
            "Logo Design",
            "Typography",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-[#1F2937] text-gray-300 text-[12px] font-[600] px-3 py-1.5 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
