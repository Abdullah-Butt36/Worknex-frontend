import React, { useState } from "react";
import {
  Home,
  FileText,
  LayoutGrid,
  Handshake,
  MessageSquare,
  Folder,
  User,
  Settings,
  Menu,
  X,
  Infinity,
} from "lucide-react";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", icon: Home, active: true },
    { name: "Solicitudes", icon: FileText },
    { name: "Propuestas", icon: LayoutGrid, badge: 3 },
    { name: "Servicios", icon: Handshake },
    { name: "Mensajes", icon: MessageSquare },
    { name: "Documentos", icon: Folder },
  ];

  const bottomItems = [
    { name: "Perfil", icon: User },
    { name: "Configuración", icon: Settings },
  ];

  const NavItem = ({ item }) => (
    <div
      className={`
      flex items-center justify-between px-4 py-3 cursor-pointer rounded-2xl transition-all duration-200
      ${item.active ? "bg-[#EFF4FF] text-[#1D61E7]" : "text-[#64748B] hover:bg-gray-50 hover:text-black"}
    `}
    >
      <div className="flex items-center gap-3">
        <item.icon size={20} strokeWidth={item.active ? 2.5 : 2} />
        <span
          className={`text-[15px] ${item.active ? "font-bold" : "font-medium"}`}
        >
          {item.name}
        </span>
      </div>
      {item.badge && (
        <span className="bg-[#1D61E7] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
          {item.badge}
        </span>
      )}
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden absolute top-3 right-6 z-[70] p-2.5 bg-white rounded-xl shadow-lg border border-gray-100 text-[#1D61E7] hover:bg-blue-50 transition-all active:scale-90"
      >
        <Menu size={24} strokeWidth={2.5} />
      </button>

      <aside
        className={`
        fixed inset-y-0 left-0 z-[80] w-[260px] bg-white border-r border-gray-100 flex flex-col
        transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#1D61E7] w-9 h-9 rounded-full flex items-center justify-center shadow-sm">
              <Infinity className="text-white w-6 h-6" strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-black uppercase">
                WORKNEX
              </span>
              <p className="text-[12px] text-gray-400 font-bold   mt-0.5">
                Portal Cliente
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden p-1.5 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        <nav className="flex-grow px-4 space-y-1 overflow-y-auto">
          {menuItems.map((item, idx) => (
            <NavItem key={idx} item={item} />
          ))}
        </nav>

        <div className="px-4 pb-6 space-y-1">
          <div className="h-[1px] bg-gray-100 mx-2 mb-4"></div>
          {bottomItems.map((item, idx) => (
            <NavItem key={idx} item={item} />
          ))}

          <div className="mt-6 p-3 bg-[#F8FAFC] rounded-2xl flex items-center gap-3 border border-gray-50 shadow-sm">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0 border-2 border-white overflow-hidden">
              <img
                src="https://ui-avatars.com/api/?name=Carlos+M&background=e2e8f0&color=475569"
                alt="Carlos M."
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <p className="font-bold text-sm text-[#111827] truncate">
                Carlos M.
              </p>
              <p className="text-[11px] text-[#94A3B8] font-semibold truncate uppercase tracking-tighter">
                Cliente Enterprise
              </p>
            </div>
          </div>
        </div>
      </aside>

      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[75] lg:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
