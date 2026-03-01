import React from 'react';
import { FileText, Calendar, Clock, Flag, Link as LinkIcon, Edit3, Trash2 } from 'lucide-react';

const MainProposalContent = () => {
  const milestones = [
    { desc: 'Fase 1: Investigación y Moodboard', date: '31 Oct, 2023', amount: '$500.00' },
    { desc: 'Fase 2: Desarrollo de Conceptos y Logotipo', date: '14 Nov, 2023', amount: '$800.00' },
    { desc: 'Fase 3: Manual de Marca y Activos Finales', date: '21 Nov, 2023', amount: '$1,200.00' },
  ];

  return (
    <div className="space-y-10 text-white">
      {/* 1. Header Section */}
      <section>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Rediseño de Identidad Corporativa
          </h1>
          <span className="px-3 mt-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full text-xs font-bold tracking-widest uppercase">
            ● Enviada
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> <span>Enviado el 24 Oct, 2023</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> <span>Vence en 6 días</span>
          </div>
        </div>
      </section>

      {/* 2. Carta de Presentación */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-bold">Carta de Presentación</h2>
        </div>
        <div className="bg-[#1e293b]/40 border border-gray-800 rounded-2xl p-6 md:p-8">
          <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
            <p>Hola equipo de FinTech Solutions,</p>
            <p>
              He revisado con detalle su solicitud para el rediseño de identidad corporativa. Basado en mi experiencia de 5 años trabajando con marcas del sector financiero y tecnológico, entiendo que buscan transmitir confianza, modernidad y agilidad.
            </p>
            <p>
              En mi propuesta adjunta, detallo un enfoque centrado en la usabilidad y la psicología del color para maximizar la conversión en sus plataformas digitales. Mi proceso incluye una fase inicial de investigación de mercado para asegurar que la nueva identidad destaque frente a competidores directos.
            </p>
            <p>Estoy disponible para una llamada introductoria esta misma semana.</p>
          </div>
        </div>
      </section>

      {/* 3. Hitos del Proyecto (Responsive Table) */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Flag className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-bold">Hitos del Proyecto</h2>
        </div>
        <div className="overflow-x-auto bg-[#1e293b]/20 rounded-2xl border border-gray-800">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Descripción</th>
                <th className="px-6 py-4 font-semibold">Entrega</th>
                <th className="px-6 py-4 font-semibold text-right">Monto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {milestones.map((m, idx) => (
                <tr key={idx} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-5 text-sm font-medium">{m.desc}</td>
                  <td className="px-6 py-5 text-sm text-gray-400">{m.date}</td>
                  <td className="px-6 py-5 text-sm font-bold text-right">{m.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Archivos Adjuntos */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <LinkIcon className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-bold">Archivos Adjuntos</h2>
        </div>
        <div className="flex items-center gap-4 p-4 bg-[#1e293b]/40 border border-gray-800 rounded-xl w-fit group cursor-pointer hover:border-gray-600 transition-all">
          <div className="p-3 bg-red-500/20 rounded-lg group-hover:scale-110 transition-transform">
            <FileText className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-tight">Portafolio_Fintech.pdf</p>
            <p className="text-xs text-gray-500 tracking-wider">2.4 MB</p>
          </div>
        </div>
      </section>

      {/* 5. Bottom Actions */}
      <section className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-800">
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">
          Editar Propuesta
        </button>
        <button className="flex items-center gap-2 text-gray-500 hover:text-red-400 font-semibold transition-colors">
          <Trash2 className="w-5 h-5" />
          Retirar Propuesta
        </button>
      </section>
    </div>
  );
};

export default MainProposalContent;