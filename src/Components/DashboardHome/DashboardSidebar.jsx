import React, { useState } from "react";
import {
  Home,
  Radar,
  Inbox,
  Handshake,
  MessageSquare,
  LayoutGrid,
  Settings,
  Plus,
  Menu,
  X,
  Briefcase,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", icon: Home, active: true },
    { name: "Oportunidades", icon: Radar },
    { name: "Propuestas", icon: Inbox },
    { name: "Servicios", icon: Handshake },
    { name: "Mensajes", icon: MessageSquare, badge: 2 },
    { name: "Plan y Facturación", icon: LayoutGrid },
    { name: "Configuración", icon: Settings },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden absolute top-5 left-5 z-[100] p-2.5 bg-white rounded-xl border border-gray-100 shadow-sm active:scale-95 transition-all"
      >
        <Menu size={22} className="text-[#1D61E7]" />
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-[110] w-[260px] bg-[#F8FAFC] border-r border-gray-100 flex flex-col transition-transform duration-300 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-5 right-5 p-2 text-gray-400"
        >
          <X size={20} />
        </button>

        <div className="px-7 py-9 flex items-center gap-3">
          <div className="bg-[#1D61E7] w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0">
            <Briefcase size={20} className="text-white fill-white" />
          </div>
          <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-black uppercase">
            WORKNEX
          </span>
        </div>

        <div className="px-4 mb-6">
          <div className="bg-[#EDF2F7] p-3 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-[#CBD5E0] rounded-full border-2 border-white overflow-hidden">
              <img
                src="https://ui-avatars.com/api/?name=Alejandro+M&background=cbd5e0&color=4a5568"
                alt="Profile"
              />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-[14px] text-[#1A202C] truncate">
                Alejandro M.
              </p>
              <p className="text-[14px] text-[#718096] font-semibold ">
                Freelancer Pro
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-grow px-3 space-y-1">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between px-4 py-3 cursor-pointer rounded-full transition-colors ${item.active ? "bg-[#EBF2FF] text-[#1D61E7]" : "text-[#4A5568] hover:bg-gray-50"}`}
            >
              <div className="flex items-center gap-3.5">
                <item.icon
                  size={20}
                  className={item.active ? "text-[#1D61E7]" : "text-[#4A5568]"}
                  strokeWidth={item.active ? 2.5 : 2}
                />
                <span
                  className={`text-[15px] ${item.active ? "font-bold" : "font-medium"}`}
                >
                  {item.name}
                </span>
              </div>
              {item.badge && (
                <span className="bg-[#FEE2E2] text-[#EF4444] text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>

        <div className="p-5">
          <button className="w-full bg-[#1D61E7] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 shadow-md shadow-blue-100 active:scale-95 transition-all">
            <Plus size={18} strokeWidth={3} />
            <span className="text-[15px]">Nuevo Servicio</span>
          </button>
        </div>
      </aside>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[105] lg:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
