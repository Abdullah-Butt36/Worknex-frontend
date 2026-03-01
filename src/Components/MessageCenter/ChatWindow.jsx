import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  MoreVertical,
  Paperclip,
  Smile,
  Image as ImageIcon,
  Download,
  MoreHorizontal,
  SendHorizontal,
} from "lucide-react";

const ChatWindow = ({ chatData, onBack }) => {
  if (!chatData) return <div className="flex-1 bg-[#060B15]" />;

  return (
    <div className="flex flex-col h-full bg-[#060B15] overflow-hidden">
      {/* --- HEADER (Fully Responsive - Zero Deletions) --- */}
      <header className="min-h-[75px] md:h-[85px] px-3 md:px-8 border-b border-gray-800/40 flex items-center justify-between bg-[#060B15]/90 backdrop-blur-md z-30 shrink-0 py-2 md:py-0">
        <div className="flex items-center gap-2 md:gap-4 min-w-0">
          <button
            onClick={onBack}
            className="md:hidden p-2 -ml-1 text-gray-400 hover:text-white transition-colors shrink-0"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="relative shrink-0">
            <div className="w-9 h-9 md:w-11 md:h-11 bg-gradient-to-tr from-[#1f2937] to-[#111827] rounded-full shrink-0 border border-gray-700/50 flex items-center justify-center font-bold text-white shadow-xl text-sm">
              {chatData.client.charAt(0)}
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 md:w-3 md:h-3 bg-[#10B981] rounded-full border-[2px] border-[#060B15] shadow-sm"></div>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-[14px] md:text-[16px] font-[700] text-white tracking-tight truncate leading-tight">
              {chatData.title}
            </h3>

            {/* flex-col on mobile, flex-row on desktop */}
            <div className="flex flex-col md:flex-row md:items-center gap-y-1 md:gap-x-3 mt-1">
              {/* Status Row */}
              <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-1 text-[9px] md:text-[11px] text-[#10B981] font-[700] whitespace-nowrap uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse shadow-[0_0_5px_#10B981]"></span>
                  Conversación Activa
                </span>
              </div>

              {/* Separator - Desktop only */}
              <span className="hidden md:block text-gray-300 text-[14px]">
                •
              </span>

              {/* Relationship Info - Responsive Font */}
              <div className="flex items-center gap-1 text-[9px] md:text-[11px] font-[600] text-gray-500 whitespace-nowrap">
                <span className="md:hidden text-gray-700 mr-1">—</span>{" "}
                {/* Dash for mobile layout */}
                Relación directa:
                <span className="text-gray-400 ml-1">Cliente</span>
                <span className="text-[10px] mx-0.5">↔️</span>
                <span className="text-gray-400">Proveedor</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-3 shrink-0 ml-2">
          {/* Buttons stay, but text adjusts on small screens */}

          <button className="flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] px-2 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-[13px] md:text-[11px] font-[700] border border-[#10B981]/20 hover:bg-[#10B981]/20 transition-all">
            <CheckCircle2 size={14} />{" "}
            <span className="hidden sm:inline">Marcar como completado</span>
          </button>

          <button className="flex items-center gap-1.5 bg-white/5 text-gray-300 px-2 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-[10px] md:text-[11px] font-[700] border border-gray-800 hover:bg-white/10 transition-all">
            <FileText size={14} className="text-gray-400" />{" "}
            <span className="hidden sm:inline">Ver Contrato</span>
          </button>

          <button className="p-1 md:p-2 text-gray-500 hover:text-white transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
      </header>

      {/* --- MESSAGES AREA (Responsive spacing) --- */}
      <div className="flex-1 overflow-y-auto px-3 md:px-10 py-6 md:py-8 space-y-6 md:space-y-8 no-scrollbar scroll-smooth">
        <div className="flex justify-center mb-6 md:mb-10">
          <span className="bg-[#111827] text-gray-500 text-[9px] md:text-[10px] font-[800] px-4 md:px-5 py-1.5 rounded-full uppercase tracking-[0.2em] border border-gray-800/30">
            Hoy
          </span>
        </div>

        {/* INCOMING GROUP */}
        <div className="flex gap-3 md:gap-4 max-w-[98%] md:max-w-[80%]">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-gray-800 rounded-full shrink-0 border border-gray-700 mt-1 flex items-center justify-center text-[11px] md:text-[12px] font-bold text-gray-400">
            {chatData.client.charAt(0)}
          </div>
          <div className="flex flex-col gap-2 w-full min-w-0">
            <div className="flex items-center gap-2 md:gap-3 mb-1">
              <span className="text-[12px] md:text-[13px] font-[700] text-white">
                {chatData.client}
              </span>
              <span className="text-[10px] md:text-[11px] text-gray-600 font-[500]">
                10:30 AM
              </span>
            </div>

            <div className="bg-[#111827] p-3 md:p-4 rounded-2xl rounded-tl-none border border-gray-800/50 text-[#D1D5DB] text-[13px] md:text-[14px] leading-relaxed shadow-sm w-fit max-w-full">
              ¡Hola! Estuve revisando la estructura del menú principal y creo
              que necesitamos simplificar las categorías.
            </div>

            <div className="bg-[#111827] p-3 md:p-4 rounded-2xl border border-gray-800/50 space-y-3 md:space-y-4 w-full sm:w-[380px] md:w-[400px] shadow-md">
              <p className="text-[#D1D5DB] text-[13px] md:text-[14px] leading-relaxed">
                Te adjunto un boceto rápido de cómo lo imaginamos. ¿Crees que
                impacte mucho en el tiempo de entrega?
              </p>

              <div className="bg-[#060B15] p-2.5 md:p-3 rounded-xl border border-gray-800 group cursor-pointer hover:border-gray-700 transition-all flex items-center justify-between min-w-0">
                <div className="flex items-center gap-2 md:gap-3 min-w-0">
                  <div className="bg-red-500/10 p-1.5 md:p-2 rounded-lg border border-red-500/20 shrink-0">
                    <FileText className="text-red-500" size={18} md:size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] md:text-[13px] font-[700] text-white truncate">
                      Nuevos_Requerimientos_v2.pdf
                    </p>
                    <p className="text-[9px] md:text-[10px] text-gray-500 font-[600]">
                      2.4 MB • PDF
                    </p>
                  </div>
                </div>
                <Download
                  size={16}
                  md:size={18}
                  className="text-gray-500 group-hover:text-white transition-colors mx-1 shrink-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* OUTGOING GROUP */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 md:gap-3 mb-1 pr-1">
            <span className="text-[10px] md:text-[11px] text-gray-600 font-[500]">
              10:42 AM
            </span>
            <span className="text-[11px] md:text-[12px] font-[800] text-white uppercase tracking-wider">
              Tú
            </span>
          </div>

          <div className="bg-[#1D61E7] p-3 md:p-4 rounded-2xl rounded-tr-none max-w-[92%] md:max-w-[70%] text-white text-[13px] md:text-[14px] leading-relaxed shadow-lg">
            Hola {chatData.client.split(" ")[0]}. Entiendo el point. Si solo es
            reagrupar las categorías existentes, no debería haber problema ni
            retrasos.
          </div>

          <div className="bg-[#1D61E7] p-3 md:p-4 rounded-2xl rounded-tr-none max-w-[92%] md:max-w-[70%] text-white text-[13px] md:text-[14px] leading-relaxed shadow-lg">
            Ya he aplicado los cambios en la maqueta v3. Puedes revisarlos en el
            link que te pasé.
          </div>

          <div className="flex items-center gap-1.5 mr-1 mt-1">
            <span className="text-[9px] md:text-[10px] text-gray-600 font-[800] uppercase tracking-tighter">
              Leído
            </span>
            <div className="flex -space-x-1">
              <CheckCircle2
                size={12}
                md:size={13}
                className="text-[#1D61E7] fill-[#1D61E7]/10"
              />
              <CheckCircle2
                size={12}
                md:size={13}
                className="text-[#1D61E7] fill-[#1D61E7]/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- INPUT AREA (Responsive Padding/Rounding) --- */}
      <footer className="p-3 md:p-8 pt-2 shrink-0">
        <div className="max-w-[900px] mx-auto bg-[#111827] border border-gray-800 rounded-[20px] md:rounded-[24px] p-3 md:p-4 focus-within:border-gray-700 transition-all shadow-2xl">
          <textarea
            placeholder="Escribe un mensaje aquí..."
            className="w-full bg-transparent border-none outline-none text-white text-[13px] md:text-[14px] resize-none h-[45px] md:h-[60px] no-scrollbar"
          ></textarea>

          <div className="flex items-center justify-between mt-2 md:mt-4 border-t border-gray-800/50 pt-3 md:pt-4">
            <div className="flex items-center gap-3 md:gap-5 text-gray-500 overflow-x-auto no-scrollbar">
              <button className="hover:text-white transition-colors shrink-0">
                <Paperclip size={18} md:size={20} />
              </button>
              <button className="hidden xs:block hover:text-white transition-colors shrink-0">
                <Smile size={18} md:size={20} />
              </button>
              <button className="hover:text-white transition-colors shrink-0">
                <ImageIcon size={18} md:size={20} />
              </button>
              <button className="hover:text-white transition-colors shrink-0">
                <MoreHorizontal size={18} md:size={20} />
              </button>
            </div>

            <button className="bg-[#1D61E7] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[12px] md:text-[14px] font-[700] flex items-center gap-2 hover:bg-blue-600 transition-all active:scale-95 shadow-lg group">
              Enviar{" "}
              <SendHorizontal
                size={14}
                md:size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
        <p className="text-center text-gray-200 text-[12px] mt-3 font-[600]  md:block opacity-50">
          Presiona Enter para enviar • Shift + Enter para nueva línea
        </p>
      </footer>
    </div>
  );
};

export default ChatWindow;
