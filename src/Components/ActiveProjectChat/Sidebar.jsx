import React, { useState } from "react";
import {
  Home,
  Briefcase,
  MessageSquare,
  Settings,
  Menu,
  X,
  LogOut,
  CircleUserRound,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Mensajes");

  const menuItems = [
    { name: "Inicio", icon: <Home size={20} /> },
    { name: "Oportunidades", icon: <Briefcase size={20} /> },
    { name: "Mensajes", icon: <MessageSquare size={20} /> },
    { name: "Configuración", icon: <Settings size={20} /> },
  ];

  return (
    <>
      <div className="lg:hidden fixed top-0 right-0 h-16 flex items-center px-4 z-[70]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-[#112119] text-[#00E676] rounded-lg border border-[#00E676]/20 shadow-xl active:scale-95"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* --- SIDEBAR ASIDE --- */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-[60]
        w-[280px] bg-[#0A1A12] border-r border-white/5
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 transition-all duration-300 ease-in-out
        flex flex-col shadow-2xl lg:shadow-none
      `}
      >
        <div className="p-8 mb-4">
          <div className="flex items-center gap-3 px-2">
            <div className="w-11 h-11 bg-gradient-to-br from-[white] to-[white] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,230,118,0.3)]">
              <CircleUserRound />
            </div>

            <div className="overflow-hidden">
              <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-white uppercase">
                WORKNEX
              </span>
              <p className="text-[#00E676] text-[12px] font-bold mt-1   opacity-80">
                B2B Ecosystem
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto no-scrollbar">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                setIsOpen(false);
              }}
              className={`
                w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 group
                ${
                  activeTab === item.name
                    ? "bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                }
              `}
            >
              <span
                className={`transition-transform duration-300 group-hover:scale-110 ${activeTab === item.name ? "text-[#00E676]" : "text-inherit"}`}
              >
                {item.icon}
              </span>
              <span className="text-[14px] font-bold tracking-wide">
                {item.name}
              </span>

              {/* Active Indicator Dot */}
              {activeTab === item.name && (
                <div className="ml-auto w-1.5 h-1.5 bg-[#00E676] rounded-full shadow-[0_0_8px_#00E676]" />
              )}
            </button>
          ))}
        </nav>

        {/* --- BOTTOM PROFILE SECTION --- */}
        <div className="p-6 mt-auto border-t border-white/5 bg-black/10">
          <div className="flex items-center justify-between group cursor-pointer p-2 rounded-2xl hover:bg-white/5 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#00E676]/20 overflow-hidden shrink-0">
                <div className="w-full h-full bg-gradient-to-tr from-slate-700 to-slate-600" />
              </div>
              <div className="overflow-hidden">
                <p className="text-white text-[13px] font-black truncate">
                  Carlos M.
                </p>
                <p className="text-slate-500 text-[10px] font-bold truncate tracking-tight italic">
                  Cliente VIP
                </p>
              </div>
            </div>
            <LogOut
              size={16}
              className="text-slate-600 group-hover:text-red-400 transition-colors"
            />
          </div>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
