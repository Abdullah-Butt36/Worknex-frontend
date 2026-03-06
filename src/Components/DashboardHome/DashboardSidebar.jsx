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
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Inicio");
  const navigate = useNavigate();

  const menuItems = [
    { name: "Inicio", icon: Home, route: "/dashboard-home" },
    { name: "Oportunidades", icon: Radar, route: "/opportunities-feed" },
    { name: "Propuestas", icon: Inbox, route: "/proposal-history" },
    { name: "Servicios", icon: Handshake, route: "/client-dashboard" },
    { name: "Mensajes", icon: MessageSquare, badge: 2, route: "/message-center" },
    { name: "Plan y Facturación", icon: LayoutGrid, route: "/subscription" },
    { name: "Configuración", icon: Settings, route: "/subscription" },
  ];

  const handleItemClick = (name, route) => {
    setActiveTab(name);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
    if (route) {
      navigate(route);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden absolute top-5 left-5 z-[100] p-2.5 bg-white rounded-xl border border-gray-100 shadow-sm active:scale-95 transition-all"
      >
        <Menu size={22} className="text-[#1D61E7]" />
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-[110] w-[280px] bg-[#F8FAFC] border-r border-gray-100 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-5 right-5 p-6 text-gray-400 hover:text-red-500 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Logo Section */}
        <div 
          onClick={() => navigate("/")}
          className="px-7 py-9 flex items-center gap-3 cursor-pointer"
        >
          <div className="bg-[#1D61E7] w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ">
            <Briefcase size={22} className="text-white fill-white" />
          </div>
          <span className="font-[700] text-[20px] md:text-[22px] tracking-tight text-black uppercase">
            WORKNEX
          </span>
        </div>

        {/* Profile Card */}
        <div className="px-4 mb-8">
          <div 
            onClick={() => navigate("/personal-socument")}
            className="bg-white border border-gray-100 p-3 rounded-[20px] flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="w-11 h-11 bg-[#CBD5E0] rounded-full border-2 border-white overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="https://ui-avatars.com/api/?name=Alejandro+M&background=cbd5e0&color=4a5568"
                alt="Profile"
              />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-[15px] text-[#1A202C] truncate">
                Alejandro M.
              </p>
              <p className="text-[14px] font-semibold text-[#718096]  opacity-80 ">
                Freelancer Pro
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-grow px-3 space-y-1.5 overflow-y-auto scrollbar-hide">
          {menuItems.map((item, idx) => {
            const isActive = activeTab === item.name;
            return (
              <div
                key={idx}
                onClick={() => handleItemClick(item.name, item.route)}
                className={`group relative flex items-center justify-between px-4 py-3.5 cursor-pointer rounded-2xl transition-all duration-200 ${
                  isActive
                    ? "bg-[#EBF2FF] text-[#1D61E7] shadow-sm"
                    : "text-[#64748B] hover:bg-gray-100/80 hover:text-[#1A202C]"
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 w-1 h-6 bg-[#1D61E7] rounded-r-full" />
                )}

                <div className="flex items-center gap-4">
                  <item.icon
                    size={22}
                    className={`${isActive ? "text-[#1D61E7]" : "text-[#94A3B8] group-hover:text-[#4A5568]"}`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span
                    className={`text-[16px] ${isActive ? "font-[700]" : "font-semibold"}`}
                  >
                    {item.name}
                  </span>
                </div>

                {item.badge && (
                  <span className="bg-[#EF4444] text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-white shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-5 border-t border-gray-50 bg-white/50">
          <button 
            onClick={() => navigate("/wizard-1")}
            className="w-full bg-[#1D61E7] text-white py-4 rounded-full font-black flex items-center justify-center gap-2  hover:bg-blue-700"
          >
            <Plus size={20} strokeWidth={3} />
            <span className="text-[15px]">Nuevo Servicio</span>
          </button>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-[3px] z-[105] lg:hidden animate-in fade-in duration-300"
        />
      )}
    </>
  );
};

export default Sidebar;
