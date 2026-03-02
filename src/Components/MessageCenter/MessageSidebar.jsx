import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const MessageSidebar = ({ activeId, onSelectChat }) => {
  const conversations = [
    {
      id: 1,
      title: "Desarrollo Web E-commerce",
      msg: "Hola, adjunto los archivos para revisión...",
      time: "10:42 AM",
      client: "Carlos M.",
    },
    {
      id: 2,
      title: "Diseño de Logo Corporativo",
      msg: "¿Podemos agendar una call para mañana?",
      time: "09:15 AM",
      client: "Lucía G.",
      unread: true,
    },
    {
      id: 3,
      title: "Consultoría SEO - Organic",
      msg: "Excelente, quedamos a la espera del rep...",
      time: "Ayer",
      client: "Marcos R.",
    },
    {
      id: 4,
      title: "App Móvil React Native",
      msg: "Confirmado. Empezamos el sprint 2.",
      time: "Lun",
      client: "Ana B.",
    },
    {
      id: 5,
      title: "Integración API Pagos",
      msg: "Gracias por el update.",
      time: "Dom",
      client: "FinTech",
    },
  ];

  // 2. FILTER STATE
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = ["Todos", "No leídos", "Archivados"];

  return (
    <div className="flex flex-col h-full bg-[#0B1221]/30 overflow-hidden border-r border-gray-800/50">
      {/* SEARCH SECTION */}
      <div className="p-4 md:p-5">
        <div className="relative group">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Buscar conversaciones..."
            className="w-full bg-[#111827] border border-gray-800 rounded-xl py-2.5 md:py-3 pl-10 pr-4 text-[14px] text-white placeholder:text-gray-600 outline-none focus:border-blue-500/40 transition-all shadow-inner"
          />
        </div>
      </div>

      {/* SLIDING FILTER TABS */}
      <div className="px-4 flex items-center gap-1 mb-4 overflow-x-auto no-scrollbar relative">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative px-4 py-1.5 rounded-full text-[12px] font-[700] whitespace-nowrap transition-colors duration-300 z-10 ${
              activeFilter === filter
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {activeFilter === filter && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-[#1D61E7] rounded-full z-[-1]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}

            <div className="flex items-center gap-2">
              {filter}
              {filter === "No leídos" && (
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-[800] transition-colors ${
                    activeFilter === filter
                      ? "bg-white/20 text-white"
                      : "bg-[#1D61E7]/20 text-[#1D61E7]"
                  }`}
                >
                  3
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* CONVERSATION LIST (5 Items) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {conversations.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className={`px-4 md:px-5 py-4 flex items-start gap-3 cursor-pointer transition-all border-l-[4px] relative ${
              activeId === chat.id
                ? "bg-white/5 border-[#1D61E7]"
                : "border-transparent hover:bg-white/[0.03]"
            }`}
          >
            {/* Avatar with Status */}
            <div className="relative shrink-0">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-[#1f2937] rounded-full border border-gray-800/50 overflow-hidden flex items-center justify-center text-gray-400 font-bold shadow-md">
                {chat.client.charAt(0)}
              </div>
              {chat.unread && (
                <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-blue-500 rounded-full border-[3px] border-[#0B1221]"></div>
              )}
            </div>

            {/* Chat Content */}
            <div className="flex-1 min-w-0 py-0.5">
              <div className="flex justify-between items-start mb-1">
                <h4
                  className={`text-[14px] font-[700] truncate leading-tight ${
                    activeId === chat.id ? "text-white" : "text-gray-200"
                  }`}
                >
                  {chat.title}
                </h4>
                <span className="text-[10px] font-[600] text-gray-500 whitespace-nowrap ml-2 mt-0.5 uppercase tracking-tighter">
                  {chat.time}
                </span>
              </div>
              <p
                className={`text-[12px] truncate leading-snug ${
                  activeId === chat.id ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {chat.msg}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageSidebar;
