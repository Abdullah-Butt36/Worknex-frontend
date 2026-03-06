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
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Inicio");

  const menuItems = [
    { name: "Inicio", icon: Home, route: "/client-dashboard" },
    { name: "Solicitudes", icon: FileText, route: "/project-summary" },
    { name: "Propuestas", icon: LayoutGrid, badge: 3, route: "/proposal-history" },
    { name: "Servicios", icon: Handshake, route: "/opportunities-feed" },
    { name: "Mensajes", icon: MessageSquare, route: "/message-center" },
    { name: "Documentos", icon: Folder, route: "/personal-socument" },
  ];

  const bottomItems = [
    { name: "Perfil", icon: User, route: "/personal-socument" },
    { name: "Configuración", icon: Settings, route: "/subscription" },
  ];

  const handleNavClick = (name, route) => {
    setActiveTab(name);
    if (window.innerWidth < 1024) {
      setIsMobileOpen(false);
    }
    if (route) {
      navigate(route);
    }
  };

  const NavItem = ({ item }) => {
    const isActive = activeTab === item.name;
    return (
      <div
        onClick={() => handleNavClick(item.name, item.route)}
        className={`
          flex items-center justify-between px-4 py-3 cursor-pointer rounded-2xl transition-all duration-200
          ${isActive ? "bg-[#EFF4FF] text-[#1D61E7]" : "text-[#64748B] hover:bg-gray-50 hover:text-black"}
        `}
      >
        <div className="flex items-center gap-3">
          <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
          <span
            className={`text-[15px] ${isActive ? "font-bold" : "font-medium"}`}
          >
            {item.name}
          </span>
        </div>
        {item.badge && (
          <span
            className={`text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm transition-colors ${
              isActive ? "bg-[#1D61E7] text-white" : "bg-gray-100 text-gray-500"
            }`}
          >
            {item.badge}
          </span>
        )}
      </div>
    );
  };

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
        {/* Header Section */}
        <div className="px-6 py-8 flex items-center justify-between">
          <div 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-[#1D61E7] w-11 h-11 rounded-full flex items-center justify-center shadow-sm">
              <Infinity className="text-white w-6 h-6" strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-black uppercase leading-none">
                WORKNEX
              </span>
              <p className="text-[14px] text-gray-400 font-semibold mt-0.5">
                Portal Cliente
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-grow px-4 space-y-1 overflow-y-auto scrollbar-hide">
          {menuItems.map((item, idx) => (
            <NavItem key={idx} item={item} />
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="px-4 pb-6 space-y-1">
          <div className="h-[1px] bg-gray-100 mx-2 mb-4"></div>
          {bottomItems.map((item, idx) => (
            <NavItem key={idx} item={item} />
          ))}

          {/* Profile Card */}
          <div className="mt-6 p-3 bg-[#F8FAFC] rounded-2xl flex items-center gap-3 border border-gray-50 shadow-sm group cursor-pointer transition-all hover:bg-white hover:shadow-md">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0 border-2 border-white overflow-hidden">
              <img
                src="https://ui-avatars.com/api/?name=Carlos+M&background=e2e8f0&color=475569"
                alt="Carlos M."
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="overflow-hidden">
              <p className="font-bold text-sm text-[#111827] truncate">
                Carlos M.
              </p>
              <p className="text-[11px] text-[#94A3B8] font-bold truncate uppercase tracking-tighter">
                Cliente Enterprise
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[75] lg:hidden animate-in fade-in duration-300"
        />
      )}
    </>
  );
};

export default Sidebar;
