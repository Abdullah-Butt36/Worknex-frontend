import React from "react";
import {
  Cloud,
  Search,
  ChevronDown,
  FileText,
  Download,
  Trash2,
  MoreHorizontal,
  UploadCloud,
} from "lucide-react";

const DocumentLibrary = () => {
  const documents = [
    {
      id: 1,
      name: "Contrato de Servicios_v2.pdf",
      sub: "Legal • Privado",
      origin: "Documento WORKNEX",
      date: "12 Oct, 2023",
      size: "2.4 MB",
      type: "pdf",
    },
    {
      id: 2,
      name: "Brief de Solicitud - Redesign.docx",
      sub: "Solicitud",
      origin: "Solicitud",
      date: "10 Oct, 2023",
      size: "845 KB",
      type: "doc",
    },
    {
      id: 3,
      name: "Presupuesto Q4 2023.xlsx",
      sub: "Finanzas • Privado",
      origin: "Subida de usuario",
      date: "08 Oct, 2023",
      size: "1.8 MB",
      type: "xls",
    },
    {
      id: 4,
      name: "Assets de Marketing.zip",
      sub: "Marketing",
      origin: "Chat",
      date: "05 Oct, 2023",
      size: "156 MB",
      type: "zip",
    },
    {
      id: 5,
      name: "Factura #00459 - Diseño Web.pdf",
      sub: "Facturación",
      origin: "Facturación",
      date: "01 Oct, 2023",
      size: "150 KB",
      type: "pdf",
    },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* 1. HEADER & STORAGE CARD */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Biblioteca de Documentos
          </h1>
          <p className="text-slate-500 max-w-xl text-sm md:text-base leading-relaxed">
            Gestiona, organiza y almacena tus documentos de WORKNEX en un
            espacio privado y seguro.
          </p>
        </div>

        {/* Storage Indicator Card */}
        <div className="w-full lg:w-72 bg-[#161e2d] border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
              <Cloud size={20} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider mb-1">
                <span className="text-slate-200">Almacenamiento</span>
                <span className="text-slate-400">1.2 GB / 5 GB</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[24%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 leading-tight">
            Tu biblioteca crece contigo. Aumenta tu almacenamiento según tu
            plan.
          </p>
        </div>
      </div>

      {/* 2. ACTION BAR */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Buscar archivos..."
            className="w-full bg-[#161e2d] border border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm outline-none focus:border-blue-500 transition-all"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#161e2d] border border-slate-800 px-4 py-3 rounded-xl flex items-center gap-6 text-sm text-slate-300 hover:bg-slate-800">
            Todos los archivos <ChevronDown size={16} />
          </button>
          <button className="bg-[#1D61E7] hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-blue-900/20 transition-all active:scale-95">
            <UploadCloud size={18} /> Subir Archivo
          </button>
        </div>
      </div>

      {/* 3. DOCUMENTS TABLE */}
      <div className="bg-[#0f172a]/50 border border-slate-800/50 rounded-[24px] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[11px] uppercase tracking-[0.15em] text-slate-500 font-bold">
              <th className="px-6 py-5">Nombre del Documento</th>
              <th className="px-6 py-5">Origen</th>
              <th className="px-6 py-5">Fecha</th>
              <th className="px-6 py-5">Tamaño</th>
              <th className="px-6 py-5 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {documents.map((doc) => (
              <tr
                key={doc.id}
                className="hover:bg-slate-800/30 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-xl ${
                        doc.type === "pdf"
                          ? "bg-red-500/10 text-red-500"
                          : doc.type === "doc"
                            ? "bg-blue-500/10 text-blue-500"
                            : doc.type === "xls"
                              ? "bg-green-500/10 text-green-500"
                              : "bg-orange-500/10 text-orange-500"
                      }`}
                    >
                      <FileText size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                        {doc.name}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {doc.sub}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-slate-800 rounded-lg text-[11px] font-medium text-slate-400">
                    {doc.origin}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-400">{doc.date}</td>
                <td className="px-6 py-4 text-sm text-slate-400">{doc.size}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white">
                      <Download size={16} />
                    </button>
                    <button className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentLibrary;
