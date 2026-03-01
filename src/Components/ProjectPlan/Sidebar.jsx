import React from "react";
import {
  Heart,
  Info,
  MapPin,
  Briefcase,
  DollarSign,
  Calendar,
  ExternalLink,
  Star,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* 1. Pricing Card */}
      <div className="bg-[#1e293b]/50 border border-gray-800 rounded-2xl p-6">
        <div className="mb-6">
          <p className="text-gray-400 text-xs mb-1">Presupuesto Estimado</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">80 - 120</span>
            <span className="text-gray-400 font-medium">UF</span>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition">
            Enviar propuesta
            <span className="text-xl">→</span>
          </button>
          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition">
            <Heart className="w-4 h-4" />
            Guardar solicitud
          </button>
        </div>
        <p className="text-[10px] text-gray-500 text-center mt-3">
          Guarda esta solicitud para revisarla más tarde.
        </p>

        {/* Status Info */}
        <div className="mt-8 space-y-4 pt-6 border-t border-gray-800">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Estado:</span>
            <span className="text-green-500 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Recibiendo propuestas
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Última actividad:</span>
            <span className="text-gray-300">Hace 15 min</span>
          </div>
        </div>
      </div>

      {/* 2. Client Info Card */}
      <div className="bg-[#1e293b]/50 border border-gray-800 rounded-2xl p-6">
        <h3 className="font-bold mb-6">Sobre el Cliente</h3>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden">
            <img
              src="https://ui-avatars.com/api/?name=Tech+Nova&background=random"
              alt="Client"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm">TechNova Solutions</h4>
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i === 4 ? "fill-none" : "fill-current"}`}
                />
              ))}
              <span className="text-gray-400 text-xs ml-1">4.9</span>
            </div>
          </div>
        </div>

        {/* Client Stats List */}
        <div className="space-y-4">
          <div className="flex gap-3">
            <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
            <div>
              <p className="text-xs font-semibold">Madrid, España</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Briefcase className="w-4 h-4 text-gray-500 shrink-0" />
            <div>
              <p className="text-xs font-semibold">24 Servicios</p>
              <p className="text-[10px] text-gray-500">Completados</p>
            </div>
          </div>
          <div className="flex gap-3">
            <DollarSign className="w-4 h-4 text-gray-500 shrink-0" />
            <div>
              <p className="text-xs font-semibold">4.500+ UF</p>
              <p className="text-[10px] text-gray-500">Total gastado</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Calendar className="w-4 h-4 text-gray-500 shrink-0" />
            <div>
              <p className="text-xs font-semibold">Nov 2021</p>
              <p className="text-[10px] text-gray-500">Miembro desde</p>
            </div>
          </div>
        </div>

        <button className="w-full mt-6 text-blue-500 text-sm font-semibold hover:underline flex items-center justify-center gap-1">
          Ver perfil completo
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
