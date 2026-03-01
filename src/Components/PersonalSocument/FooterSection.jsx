import React, { useState } from 'react';
import { Upload, Zap } from 'lucide-react';

const FooterSection = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  // Drag handlers to change UI style when file is over the box
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (onUpload) {
      onUpload(e); // Pass the event to the parent upload function
    }
  };

  return (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pb-10">
      
      {/* 1. DRAG & DROP ZONE */}
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          lg:col-span-2 border-2 border-dashed rounded-[32px] p-12 
          flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer
          ${isDragging 
            ? 'border-blue-500 bg-blue-500/10 scale-[1.01]' 
            : 'border-slate-800 bg-[#0f172a]/20 hover:bg-[#1D61E7]/5 hover:border-[#1D61E7]/50'
          }
        `}
      >
        <div className={`
          w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 shadow-xl
          ${isDragging ? 'bg-blue-500 text-white animate-bounce' : 'bg-slate-800 text-slate-400 group-hover:text-blue-500'}
        `}>
          <Upload size={28} />
        </div>
        
        <h3 className="text-lg font-bold text-slate-200 mb-2">
          {isDragging ? '¡Suelta para subir!' : 'Arrastra y suelta archivos aquí'}
        </h3>
        
        <p className="text-sm text-slate-500 text-center max-w-sm font-medium leading-relaxed">
          Archivos privados. No son visibles para otros a menos que los adjuntes a una solicitud.
        </p>
      </div>

      {/* 2. PREMIUM PLAN CARD */}
      <div className="bg-[#161e2d] border border-slate-800 rounded-[32px] p-8 relative overflow-hidden flex flex-col justify-between group">
        {/* Background Decorative Glow */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Zap size={18} className="text-yellow-500 fill-yellow-500" />
            </div>
            <h3 className="text-xl font-black text-white">Plan Premium</h3>
          </div>
          
          <p className="text-sm text-slate-400 leading-relaxed font-medium">
            Tu almacenamiento es seguro y encriptado. Obtén más espacio y funciones avanzadas con el plan Pro.
          </p>
        </div>

        <div className="mt-8 relative z-10">
          <button className="w-full bg-[#1e293b] hover:bg-slate-700 text-white py-4 rounded-2xl text-[13px] font-bold transition-all active:scale-95 border border-slate-700 shadow-lg flex items-center justify-center gap-2">
            Gestionar Plan
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default FooterSection;