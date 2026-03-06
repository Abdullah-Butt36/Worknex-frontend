import React from 'react';
import { LayoutGrid, FileText, Calendar, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Resumen', icon: <LayoutGrid size={20} />, path: '/project-summary' },
    { name: 'Documentos', icon: <FileText size={20} />, path: '/personal-socument' },
    { name: 'Calendario', icon: <Calendar size={20} />, path: '/message-center' },
  ];

  return (
    <div className="h-full flex flex-col py-8 px-4 bg-[#0b111e]">

      {/* 1. Gestión Section */}
      <div className="mb-10">
        <h3 className="px-4 text-[14px] font-bold text-slate-500  mb-6">
          Gestión
        </h3>
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300
                  ${isActive
                    ? 'bg-[#1D61E7] text-white shadow-[0_0_20px_rgba(29,97,231,0.4)]'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                  }
                `}
              >
                <span className={`${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                  {item.icon}
                </span>
                <span className="text-[14px] font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 2. Configuración Section */}
      <div>
        <h3 className="px-4 text-[14px] font-bold text-slate-500 mb-6">
          Configuración
        </h3>
        <nav>
          <Link
            to="/dashboard-home"
            className="group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-all"
          >
            <Settings size={20} className="text-slate-500 group-hover:text-slate-300" />
            <span className="text-[14px] font-medium">Ajustes</span>
          </Link>
        </nav>
      </div>

      {/* Bottom Spacer */}
      <div className="mt-auto"></div>
    </div>
  );
};

export default Sidebar;
