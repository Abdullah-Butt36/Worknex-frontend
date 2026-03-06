import React from 'react';
import { DollarSign, Calendar, MapPin, Lock, Zap, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OpportunityFeed = () => {    
  const navigate = useNavigate();
  const opportunities = [
    {
      id: 1,
      tag: 'Desarrollo Web',
      title: 'Rediseño completo de plataforma E-commerce B2B',
      budget: '$5,000 - $8,000 USD',
      duration: '3 meses',
      location: 'Remoto (LATAM)',
      desc: 'Buscamos un equipo o agencia especializada para migrar nuestra tienda actual a Shopify Plus. El proyecto incluye diseño UI/UX personalizado, integración con ERP SAP Business One y configuración de flujos de automatización.',
      time: 'Hace 2 horas',
      isPremium: false,
    },
    {
      id: 2,
      tag: 'Consultoría Estratégica',
      title: 'Asesoría Legal y Fiscal para expansión en Europa',
      budget: '$10k - $15k',
      duration: '6 meses',
      location: null,
      desc: 'Estamos buscando un despacho legal con presencia en Europa para asesorar nuestra entrada al mercado europeo. Se requiere conocimiento profundo en regulaciones locales y fiscalidad internacional.',
      time: 'Hace 45 min',
      isPremium: true,
    },
    {
      id: 3,
      tag: 'Marketing',
      title: 'Gestión de campañas SEM y Social Ads (Retail)',
      budget: '$2,500 / mes',
      duration: 'Indefinido',
      location: 'Híbrido (Bogotá)',
      desc: 'Necesitamos un especialista en performance marketing para gestionar un presupuesto mensual de $10k USD en Google Ads y Meta Ads. El objetivo es maximizar ROAS para nuestra línea de ropa deportiva.',
      time: 'Ayer',
      isPremium: false,
    },
    {
      id: 4,
      tag: 'Desarrollo App Móvil',
      title: 'App Fintech de Inversión (iOS & Android)',
      budget: '$20k - $30k',
      duration: '8 meses', // Approximate based on typical project scale
      location: 'Remoto',
      desc: 'Startup en etapa de crecimiento busca partner tecnológico para desarrollar MVP de aplicación de inversiones. Integración con APIs bancarias, KYC biométrico y dashboard de usuario. Stack preferido: Flutter o React Native.',
      time: 'Hace 3 horas',
      isPremium: true,
    }
  ];

  return (
    <div className="space-y-6">
      {/* Sorting Header */}
      <div className="flex justify-end mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Ordenar por:</span>
          <div className="bg-gray-200 h-7 w-28 rounded-full border border-gray-300 cursor-pointer"></div>
        </div>
      </div>

      {opportunities.map((opp) => (
        <div key={opp.id} className="relative bg-white border border-gray-100 rounded-[32px] p-6 md:p-8 shadow-sm transition-all hover:shadow-md overflow-hidden">
          
          {/* Card Content */}
          <div className={opp.isPremium ? "blur-[8px] pointer-events-none select-none opacity-40" : ""}>
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase ${
                  opp.tag === 'Marketing' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'
                }`}>
                  {opp.tag}
                </span>
                {!opp.isPremium && (
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full flex items-center gap-1 uppercase">
                    <Zap className="w-3 h-3 fill-current" /> Incluido en tu plan
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-400 font-medium whitespace-nowrap">{opp.time}</span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-[#1e293b] mb-4">
              {opp.title}
            </h2>

            <div className="flex flex-wrap gap-5 text-sm text-gray-500 mb-6 font-medium">
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-gray-400" /> {opp.budget}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gray-400" /> {opp.duration}
              </div>
              {opp.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gray-400" /> {opp.location}
                </div>
              )}
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2">
              {opp.desc}
            </p>

            <div className="flex items-center justify-between border-t border-gray-50 pt-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                {opp.id === 1 && <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-400">+2</div>}
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => navigate('/proposal-soft-gate')}
                  className="text-sm font-bold text-[#1e293b] hover:text-blue-600"
                >
                  Ver detalles
                </button>
                <button 
                  onClick={() => navigate('/submit-proposal')}
                  className="px-7 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full flex items-center gap-2 "
                >
                  Postularme <Send className="w-4 h-4 rotate-45" />
                </button>
              </div>
            </div>
          </div>

          {/* Premium Lock Overlay */}
          {opp.isPremium && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4 border border-yellow-200 shadow-sm">
                <Lock className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-[#1e293b] mb-2">Disponible en Plan Premium</h3>
              <p className="text-sm text-gray-500 max-w-[260px] mb-6 font-medium">
                Esta oportunidad es exclusiva para miembros de alto nivel.
              </p>
              <button 
                onClick={() => navigate('/subscription')}
                className="px-6 py-3 bg-[#0b111e] hover:bg-black text-white text-[13px] font-bold rounded-xl flex items-center gap-2 shadow-xl transition-transform active:scale-95"
              >
                <Zap className="w-4 h-4 text-yellow-400 fill-current" /> Mejorar Plan Ver detalles 
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OpportunityFeed;