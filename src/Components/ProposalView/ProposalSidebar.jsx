import React from 'react';
import { Info, Building2, Star, ShieldCheck, MapPin } from 'lucide-react';

const ProposalSidebar = () => {
  return (
    <div className="space-y-6">
      
      {/* 1. Resumen de la Propuesta (Summary Card) */}
      <div className="bg-[#1e293b]/50 border border-gray-800 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <Info className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="font-bold text-lg text-white">Resumen de la Propuesta</h3>
        </div>

        <div className="flex justify-between items-center mb-8">
          <span className="text-gray-400 text-sm">Monto de referencia</span>
          <span className="text-2xl font-bold text-white">$2,500.00</span>
        </div>

        {/* Info Alert Box */}
        <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-4 flex gap-3">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed text-blue-200/70">
            WORKNEX no intermedia pagos. Los términos finales se acuerdan directamente entre el cliente y el proveedor.
          </p>
        </div>
      </div>

      {/* 2. Sobre el Cliente (Client Details) */}
      <div className="bg-[#1e293b]/50 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">
          Sobre el Cliente
        </h3>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gray-800 rounded-xl border border-gray-700">
            <Building2 className="w-6 h-6 text-gray-300" />
          </div>
          <div>
            <h4 className="font-bold text-white">FinTech Solutions</h4>
            <p className="text-xs text-gray-500">Miembro desde 2021</p>
          </div>
        </div>

        {/* Client Stats */}
        <div className="space-y-4 pt-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-white">4.9</span>
            <span className="text-xs text-gray-500">(24 Reseñas)</span>
          </div>
          
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-300">Pago Verificado</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-300">Ciudad de México</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProposalSidebar;