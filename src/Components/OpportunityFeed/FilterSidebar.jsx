import React, { useState } from 'react';
import { X } from 'lucide-react';

const FilterSidebar = () => {
  // Selection States for all sections
  const [selectedCat, setSelectedCat] = useState('Desarrollo Web');
  const [selectedLoc, setSelectedLoc] = useState('Remoto');
  const [selectedComp, setSelectedComp] = useState('Alta'); // Compatibility state

  const categories = [
    { name: 'Desarrollo Web', count: 12 },
    { name: 'Marketing Digital', count: 8 },
    { name: 'Consultoría Legal', count: 5 },
    { name: 'Finanzas', count: 3 },
  ];

  const locations = ['Remoto', 'Madrid', 'CDMX'];

  return (
    <div className="
      lg:sticky lg:top-24 
      lg:h-[calc(100vh-100px)] 
      bg-gray-50/50 rounded-3xl p-6
      overflow-y-auto 
      [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
      space-y-10
    ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg text-[#1e293b]">Filtros</h3>
        <button 
          onClick={() => {setSelectedCat(''); setSelectedLoc(''); setSelectedComp('');}}
          className="text-blue-600 text-xs font-semibold hover:underline"
        >
          Limpiar todo
        </button>
      </div>

      {/* 1. Categoría */}
      <section>
        <h4 className="font-bold text-sm text-[#1e293b] mb-4 uppercase tracking-wider">Categoría</h4>
        <div className="space-y-3">
          {categories.map((cat) => (
            <div 
              key={cat.name} 
              onClick={() => setSelectedCat(cat.name)}
              className="flex justify-between items-center group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedCat === cat.name ? 'border-blue-600 bg-blue-600' : 'border-gray-300 bg-white group-hover:border-blue-400'
                }`}>
                  {selectedCat === cat.name && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                </div>
                <span className={`text-sm ${selectedCat === cat.name ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
                  {cat.name}
                </span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium">{cat.count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Ubicación */}
      <section>
        <h4 className="font-bold text-sm text-[#1e293b] mb-4 uppercase tracking-wider">Ubicación</h4>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Ciudad o País"
            className="w-full px-4 py-2 bg-[#f1f5f9] border-none rounded-xl text-sm placeholder-gray-400 outline-none focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {locations.map((loc) => (
            <div
              key={loc}
              onClick={() => setSelectedLoc(loc)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 cursor-pointer transition-all ${
                selectedLoc === loc 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {loc}
              {selectedLoc === loc && <X className="w-3 h-3" />}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Compatibilidad (Now Selectable) */}
      <section>
        <h4 className="font-bold text-sm text-[#1e293b] mb-4 uppercase tracking-wider">Compatibilidad</h4>
        <div className="space-y-4">
          {/* Alta Option */}
          <div 
            onClick={() => setSelectedComp('Alta')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
              selectedComp === 'Alta' ? 'border-green-800 bg- shadow-sm shadow-green-800' : 'border-gray-300 bg-white group-hover:border-green-700'
            }`}>
               {selectedComp === 'Alta' && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
            </div>
            <span className={`text-sm font-bold ${selectedComp === 'Alta' ? 'text-green-800' : 'text-gray-600'}`}>
              Alta <span className="text-gray-400 font-normal ml-1">(90%+)</span>
            </span>
          </div>
          
          {/* Media Option */}
          <div 
            onClick={() => setSelectedComp('Media')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
              selectedComp === 'Media' ? 'border-yellow-500 bg-yellow-500 shadow-sm shadow-yellow-100' : 'border-gray-300 bg-white group-hover:border-yellow-400'
            }`}>
               {selectedComp === 'Media' && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
            </div>
            <span className={`text-sm font-bold ${selectedComp === 'Media' ? 'text-yellow-600' : 'text-gray-600'}`}>
              Media <span className="text-gray-400 font-normal ml-1">(70%+)</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterSidebar;