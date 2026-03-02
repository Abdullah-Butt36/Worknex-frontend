import React, { useState, useEffect, useRef } from "react";
import {
  PlusCircle,
  Image as ImageIcon,
  Send,
  MoreVertical,
  CheckCircle2,
  Download,
  FileText,
  Menu,
  SendHorizontal,
} from "lucide-react";

const ChatWindow = () => {
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const messages = [
    {
      id: 1,
      sender: "client",
      name: "Carlos",
      time: "10:30",
      text: "Hola, acabo de subir los nuevos requerimientos. Échales un vistazo cuando puedas.",
    },
    {
      id: 2,
      sender: "me",
      time: "10:32",
      text: "Excelente, los estaba esperando. Los reviso ahora mismo y te doy feedback.",
    },
    {
      id: 3,
      sender: "client",
      name: "Carlos",
      time: "10:40",
      type: "file",
      text: "Aquí tienes la maqueta actualizada que pediste.",
      fileName: "Manual_Identidad_v2.pdf",
      fileSize: "2.4 MB",
    },
    {
      id: 4,
      sender: "me",
      time: "10:45",
      text: "Perfecto trabajo. Procederé con la aprobación del pago.",
    },
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#06110D] relative font-sans selection:bg-[#00E676]/30 overflow-hidden">
      {/* --- 1. HEADER (Responsive) --- */}
      <div className="h-16 md:h-20 flex items-center justify-between px-4 md:px-8 border-b border-white/5 bg-[#0A1A12]/60 backdrop-blur-xl z-20 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          {/* Mobile Menu Toggle Placeholder (Optional) */}
          <div className="flex flex-col min-w-0">
            <h2 className="text-white font-bold text-sm md:text-lg tracking-tight truncate">
              Desarrollo de Identidad Corporativa
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#00E676] rounded-full animate-pulse shadow-[0_0_8px_#00E676]" />
              <span className="text-[#00E676] text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-80">
                Activo
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          {/* Vincular WhatsApp: Icon only on small screens, text on large */}
          <button className="text-[#00E676] hover:bg-[#00E676]/10 p-2 rounded-xl transition-all flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-wider border border-[#00E676]/20 md:border-transparent">
            <div className="w-4 h-4 rounded-full border-2 border-[#00E676] flex items-center justify-center text-[8px] shrink-0">
              W
            </div>
            <span className="hidden sm:inline">Vincular WhatsApp</span>
          </button>
          <button className="hidden md:block text-slate-500 :hidden hover:text-white p-1">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* --- 2. CHAT AREA (Responsive Spacing) --- */}
      <div className="flex-1 overflow-y-auto px-4 md:px-20 py-6 md:py-10 space-y-6 md:space-y-8 no-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 md:gap-3 ${msg.sender === "me" ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* Avatar: Smaller on mobile */}
            <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-slate-800 border border-white/5 shrink-0" />

            <div
              className={`max-w-[85%] md:max-w-[70%] space-y-1 ${msg.sender === "me" ? "items-end" : "items-start"} flex flex-col`}
            >
              {/* Message Bubble: Dynamic Text Size */}
              <div
                className={`px-4 py-2.5 md:px-5 md:py-3.5 rounded-[18px] md:rounded-[22px] text-[13px] md:text-[14px] leading-relaxed shadow-lg ${
                  msg.sender === "me"
                    ? "bg-[#00E676] text-[#06110D] rounded-br-none font-semibold"
                    : "bg-[#15251E] text-slate-200 border border-white/5 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>

              {/* File Attachment: More compact on mobile */}
              {msg.type === "file" && (
                <div className="w-full mt-2 bg-[#0D1814] border border-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4 hover:border-[#00E676]/30 transition-all group">
                  <div className="bg-red-500/10 p-2 rounded-lg shrink-0">
                    <FileText className="text-red-500" size={18} md:size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[11px] md:text-[12px] font-bold truncate">
                      {msg.fileName}
                    </p>
                    <p className="text-slate-500 text-[9px] md:text-[10px] uppercase font-bold">
                      {msg.fileSize}
                    </p>
                  </div>
                  <Download
                    className="text-slate-400 group-hover:text-[#00E676] shrink-0"
                    size={16}
                    md:size={18}
                  />
                </div>
              )}

              {/* Timestamp */}
              <div className="flex items-center gap-1.5 px-1">
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter opacity-50">
                  {msg.time}
                </span>
                {msg.sender === "me" && (
                  <CheckCircle2
                    className="text-[#00E676]"
                    size={10}
                    md:size={12}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} className="h-28 md:h-32" />
      </div>

      {/* --- 3. INPUT FIELD (Responsive Padding & Layout) --- */}
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-10 bg-gradient-to-t from-[#06110D] via-[#06110D]/90 to-transparent z-30">
        <div className="max-w-5xl mx-auto bg-[#112119]/90 border border-white/10 backdrop-blur-2xl rounded-[30px] md:rounded-[40px] h-[54px] md:h-[70px] flex items-center px-4 md:px-6 shadow-2xl focus-within:border-[#00E676]/30 transition-all">
          {/* Left Buttons: Smaller gaps on mobile */}
          <div className="flex items-center gap-3 md:gap-4 mr-2 md:mr-4 text-slate-400">
            <PlusCircle
              className="cursor-pointer hover:text-[#00E676] transition-all"
              size={20}
              md:size={22}
            />
            <ImageIcon
              className="cursor-pointer hover:text-[#00E676] transition-all"
              size={20}
              md:size={22}
            />
          </div>

          {/* Input: Better font size for mobile tap */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-white text-[13px] md:text-sm placeholder:text-slate-600 font-medium h-full min-w-0"
          />

          {/* Right Send Icon */}
          <button className="ml-2 md:ml-4 p-1.5 md:p-2 text-[#00E676] hover:scale-110 active:scale-90 transition-all shrink-0">
            <SendHorizontal size={20} md:size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Footer Hint: Hidden on very small screens to save space */}
        <p className="xs:block text-center text-white text-[10px] md:text-[9px] mt-3 md:mt-4 font-black  opacity-40">
          Enter para enviar • Shift + Enter para nueva línea
        </p>
      </div>
    </div>
  );
};

export default ChatWindow;
