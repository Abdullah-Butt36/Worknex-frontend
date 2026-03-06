import React, { useState, useRef } from "react";
import {
  Cloud,
  Search,
  ChevronDown,
  FileText,
  Download,
  Trash2,
  UploadCloud,
  X,
  CheckCircle,
} from "lucide-react";
import FooterSection from "./FooterSection";

const getFileType = (name) => {
  const ext = name.split(".").pop().toLowerCase();
  if (ext === "pdf") return "pdf";
  if (["doc", "docx"].includes(ext)) return "doc";
  if (["xls", "xlsx"].includes(ext)) return "xls";
  return "zip";
};

const formatSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const typeColors = {
  pdf: "bg-red-500/10 text-red-400",
  doc: "bg-blue-500/10 text-blue-400",
  xls: "bg-green-500/10 text-green-400",
  zip: "bg-orange-500/10 text-orange-400",
};

const DocumentLibrary = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: "Contrato de Servicios_v2.pdf", sub: "Legal • Privado", origin: "Documento", date: "12 Oct, 2023", size: "2.4 MB", type: "pdf" },
    { id: 2, name: "Brief de Solicitud - Redesign.docx", sub: "Solicitud", origin: "Solicitud", date: "10 Oct, 2023", size: "845 KB", type: "doc" },
    { id: 3, name: "Presupuesto Q4 2023.xlsx", sub: "Finanzas • Privado", origin: "Subida", date: "08 Oct, 2023", size: "1.8 MB", type: "xls" },
    { id: 4, name: "Assets de Marketing.zip", sub: "Marketing", origin: "Chat", date: "05 Oct, 2023", size: "156 MB", type: "zip" },
    { id: 5, name: "Factura #00459 - Diseño Web.pdf", sub: "Facturación", origin: "Facturación", date: "01 Oct, 2023", size: "150 KB", type: "pdf" },
  ]);

  const [search, setSearch] = useState("");
  const [uploadedToast, setUploadedToast] = useState(null);
  const fileInputRef = useRef(null);

  const addFiles = (files) => {
    const newDocs = Array.from(files).map((file, i) => ({
      id: Date.now() + i,
      name: file.name,
      sub: "Subida de usuario",
      origin: "Subida de usuario",
      date: new Date().toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" }),
      size: formatSize(file.size),
      type: getFileType(file.name),
    }));
    setDocuments((prev) => [...newDocs, ...prev]);
    setUploadedToast(`${newDocs.length} archivo${newDocs.length > 1 ? "s" : ""} subido${newDocs.length > 1 ? "s" : ""}`);
    setTimeout(() => setUploadedToast(null), 3000);
  };

  // Called by FooterSection's drag & drop
  const handleUpload = (e) => {
    if (e.dataTransfer?.files?.length) addFiles(e.dataTransfer.files);
  };

  const handleDelete = (id) => setDocuments((prev) => prev.filter((d) => d.id !== id));

  const filtered = documents.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-in fade-in duration-700">

      {/* Upload Toast */}
      {uploadedToast && (
        <div className="fixed top-6 right-6 z-[999] flex items-center gap-3 bg-[#1D61E7] text-white px-5 py-3 rounded-xl shadow-2xl animate-in slide-in-from-top duration-300">
          <CheckCircle size={18} />
          <span className="text-sm font-semibold">{uploadedToast}</span>
        </div>
      )}

      {/* 1. HEADER & STORAGE CARD */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Biblioteca de Documentos
          </h1>
          <p className="text-slate-500 max-w-xl text-sm md:text-base leading-relaxed">
            Gestiona, organiza y almacena tus documentos de WORKNEX en un espacio privado y seguro.
          </p>
        </div>

        {/* Storage Card */}
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
            Tu biblioteca crece contigo. Aumenta tu almacenamiento según tu plan.
          </p>
        </div>
      </div>

      {/* 3. ACTION BAR */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar archivos..."
            className="w-full bg-[#161e2d] border border-slate-800 rounded-xl py-3 pl-12 pr-10 text-sm outline-none focus:border-blue-500 transition-all text-slate-200"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
            >
              <X size={15} />
            </button>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#161e2d] border border-slate-800 px-4 py-3 rounded-xl flex items-center gap-2 text-sm text-slate-300 hover:bg-slate-800 transition-all">
            Todos los archivos <ChevronDown size={16} />
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-[#1D61E7] hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-blue-900/20 transition-all active:scale-95"
          >
            <UploadCloud size={18} /> Subir Archivo
          </button>
          {/* Hidden file input — used by Subir Archivo button */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={(e) => e.target.files.length && addFiles(e.target.files)}
          />
        </div>
      </div>

      {/* 4. DOCUMENTS TABLE */}
      <div className="bg-[#0f172a]/50 border border-slate-800/50 rounded-[24px] overflow-hidden">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-600">
            <FileText size={40} className="mb-4" />
            <p className="font-semibold">No se encontraron documentos</p>
            <p className="text-sm mt-1">Prueba con otro término o sube nuevos archivos</p>
          </div>
        ) : (
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
              {filtered.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl ${typeColors[doc.type] || typeColors.zip}`}>
                        <FileText size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                          {doc.name}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{doc.sub}</div>
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
                      <button className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-all">
                        <Download size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(doc.id)}
                        className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-500 transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* FooterSection — has the existing drag & drop UI, connected to our upload handler */}
      <FooterSection onUpload={handleUpload} />
    </div>
  );
};

export default DocumentLibrary;
