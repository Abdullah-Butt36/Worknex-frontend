import React from "react";
import {
  LayoutGrid,
  Briefcase,
  ShieldCheck,
  Settings,
  Headset,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutGrid size={20} />, label: "Panel", active: false },
    { icon: <Briefcase size={20} />, label: "Proyectos", active: false },
    { icon: <ShieldCheck size={20} />, label: "Identidad", active: true },
    { icon: <Settings size={20} />, label: "Ajustes", active: false },
  ];

  return (
    <>
      <aside className="hidden md:flex w-64 border-r border-slate-800/50 h-screen flex-col justify-between fixed left-0 top-0 bg-[#0F172A] z-40">
        <div className="flex flex-col h-full">
          {/* Logo Space / Top Padding to clear Navbar */}
          <div className="h-[72px] shrink-0 border-b border-transparent"></div>

          <div className="p-6 space-y-8 flex-1">
            {/* Profile Section */}
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 bg-slate-600 rounded-full flex-shrink-0 border border-slate-700 overflow-hidden">
                <img
                  src="https://ui-avatars.com/api/?name=Alex+Morgan&background=475569&color=fff"
                  alt="profile"
                />
              </div>
              <div className="overflow-hidden">
                <h4 className="text-white font-bold text-sm truncate">
                  Alex Morgan
                </h4>
                <p className="text-slate-500 text-[11px] font-semibold truncate">
                  Freelancer Pro
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {menuItems.map((item, i) => (
                <button
                  key={i}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-[14px] ${
                    item.active
                      ? "bg-blue-600/10 text-blue-500 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.2)]"
                      : "text-white hover:text-slate-400 hover:bg-slate-800/50"
                  }`}
                >
                  {item.icon}
                  <span className="truncate">
                    {item.label === "Identidad"
                      ? "Identidad y Seguridad"
                      : item.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Support Card (Bottom fixed) */}
          <div className="p-6 pt-0">
            <div className="bg-slate-900/40 rounded-2xl p-4 border border-slate-800/50 mb-4">
              <p className="text-[12px] text-white mb-3 font-medium">
                ¿Necesitas ayuda?
              </p>
              <button className="text-slate-400 text-[13px] font-bold flex items-center gap-2 hover:text-white">
                <Headset size={16} className="text-blue-500" />
                Contactar soporte
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div className="hidden md:block w-64 shrink-0"></div>

      {/* --- MOBILE BOTTOM NAVIGATION --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0F172A] border-t border-slate-800/50 px-4 py-2 z-50 flex justify-around items-center">
        {menuItems.map((item, i) => (
          <button
            key={i}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg ${
              item.active ? "text-blue-500" : "text-slate-500"
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
