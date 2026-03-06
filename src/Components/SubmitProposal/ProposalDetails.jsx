import React, { useState, useRef } from "react";
import {
  MessageSquare,
  Paperclip,
  Bold,
  Wallet,
  Plus,
  Calendar,
  Info,
  CheckCircle2,
  CloudUpload,
  SendHorizontal,
  Trash2,
  X,
  File,
} from "lucide-react";
import { useNavigate } from "react-router-dom";



const ProposalDetails = () => {
  const navigate = useNavigate();

  // --- States ---
  const [showToast, setShowToast] = useState(false);
  const [messageFiles, setMessageFiles] = useState([]);
  const [attachmentFiles, setAttachmentFiles] = useState([]);

  // --- Refs for hidden file inputs ---
  const messageFileInputRef = useRef(null);
  const attachmentFileInputRef = useRef(null);

  // --- Handlers ---
  const handleSaveDraft = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate('/proposal-history');
    }, 2500); // Redirect after 2.5 seconds
  };

  const handleMessageFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessageFiles([...messageFiles, file]);
    }
  };

  const handleAttachmentFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setAttachmentFiles([...attachmentFiles, ...files]);
    }
  };

  const removeMessageFile = (indexToRemove) => {
    setMessageFiles(messageFiles.filter((_, index) => index !== indexToRemove));
  };

  const removeAttachmentFile = (indexToRemove) => {
    setAttachmentFiles(
      attachmentFiles.filter((_, index) => index !== indexToRemove)
    );
  };
  return (
    <>
    <div className="w-full px-4 md:px-6 pb-20 font-sans">
      {/* --- MAIN UNIFIED CONTAINER --- */}
      <div className="w-full bg-[#111827] border border-gray-800 rounded-[24px] overflow-hidden shadow-2xl">
        <div className="p-5 md:p-10 flex flex-col gap-10 md:gap-12">
          {/* 1. MENSAJE DE PRESENTACIÓN */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="text-blue-500" size={20} />
              <h3 className="text-white text-[18px] font-[700]">
                Mensaje de Presentación
              </h3>
            </div>
            <p className="text-gray-400 text-[14px] mb-4">
              ¿Por qué su perfil profesional es ideal para esta solicitud?
            </p>
            <div className="w-full bg-[#0B1221] border border-gray-800 rounded-[16px] overflow-hidden">
              <textarea
                placeholder="Hola, me interesa mucho este proyecto porque..."
                className="w-full h-[150px] md:h-[180px] bg-transparent p-5 md:p-6 text-gray-300 outline-none resize-none placeholder:text-gray-600 text-[15px]"
              />
              <div className="flex items-center justify-end gap-5 px-6 py-4 border-t border-gray-800 bg-[#0F172A]">
                <button 
                  onClick={() => messageFileInputRef.current?.click()}
                  className="text-gray-500 hover:text-white transition-colors relative"
                  title="Adjuntar archivo"
                >
                  <Paperclip size={18} />
                </button>
                <input 
                  type="file" 
                  ref={messageFileInputRef} 
                  onChange={handleMessageFileUpload} 
                  className="hidden" 
                />
                <button className="text-gray-500 hover:text-white transition-colors" title="Negrita">
                  <Bold size={18} />
                </button>
              </div>
            </div>
            {/* Display Message Files */}
            {messageFiles.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {messageFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#1F2937] text-gray-300 text-[13px] px-3 py-1.5 rounded-full border border-gray-700">
                    <File size={14} className="text-blue-400" />
                    <span className="max-w-[120px] truncate">{file.name}</span>
                    <button onClick={() => removeMessageFile(idx)} className="text-gray-500 hover:text-red-400">
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 2. PRESUPUESTO TOTAL (Responsive Layout) */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Wallet className="text-blue-500" size={20} />
              <h3 className="text-white text-[18px] font-[700]">
                Presupuesto Total
              </h3>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 md:gap-6">
              <div className="flex-grow bg-[#0B1221] border border-gray-800 rounded-[20px] p-5 md:p-6">
                <label className="text-white text-[14px] font-[600] mb-4 block">
                  Monto de la Propuesta
                </label>
                <div className="flex items-center justify-between bg-[#111827] border border-gray-800 rounded-xl px-5 py-4">
                  <input
                    type="text"
                    placeholder="5000"
                    className="bg-transparent text-white text-[22px] md:text-[24px] font-[700] outline-none w-full"
                  />
                  <span className="text-gray-500 text-[10px] md:text-[11px] font-[700] leading-tight text-right uppercase">
                    CLP/
                    <br />
                    UF
                  </span>
                </div>

                <div className="flex items-start gap-2 mt-4 text-gray-500">
                  <Info size={14} className="mt-0.5 shrink-0" />
                  <p className="text-[12px] leading-relaxed">
                    El monto debe incluir todos los costos operativos + IVA si
                    corresponde.
                  </p>
                </div>
              </div>

              {/* Total Card: Adjusted for mobile */}
              <div className="lg:w-[380px] bg-[#0B1221] border border-blue-600/20 rounded-[20px] p-6 md:p-8 flex flex-col justify-center">
                <div className="flex justify-between items-center lg:flex-col lg:items-start gap-2">
                  <div>
                    <p className="text-white text-[15px] md:text-[16px] font-[700]">
                      Total a Facturar:
                    </p>
                    <p className="text-gray-500 text-[10px] mt-0.5">
                      Monto Integro (Suscripción WORKNEX activa)
                    </p>
                  </div>
                  <p className="text-[#1D61E7] text-[26px] md:text-[30px] font-[900]">
                    $5,000.00
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. HITOS DEL PROYECTO (Responsive Table-to-Cards) */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-500" size={20} />
                <h3 className="text-white text-[18px] font-[700]">
                  Hitos del Proyecto
                </h3>
              </div>
              <button className="flex items-center gap-2 text-blue-500 text-[14px] font-[700] self-start sm:self-auto">
                <Plus size={16} className="bg-blue-500/10 rounded-full" />{" "}
                Añadir Hito
              </button>
            </div>

            {/* Headers: Hidden on mobile */}
            <div className="hidden md:grid grid-cols-12 px-5 mb-4 text-gray-500 text-[11px] font-[700] uppercase tracking-widest">
              <div className="col-span-6">Descripción</div>
              <div className="col-span-3">Fecha de Entrega</div>
              <div className="col-span-3 text-right">Importe</div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Row 1: Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 bg-[#0B1221] border border-gray-800 rounded-xl p-4 md:p-3 md:px-5">
                <div className="md:col-span-6">
                  <span className="md:hidden text-gray-500 text-[10px] uppercase font-bold block mb-1">
                    Descripción
                  </span>
                  <input
                    className="w-full bg-transparent text-white text-[14px] outline-none"
                    defaultValue="Diseño UI/UX y Wireframes"
                  />
                </div>
                <div className="md:col-span-3">
                  <span className="md:hidden text-gray-500 text-[10px] uppercase font-bold block mb-1">
                    Fecha
                  </span>
                  <input
                    className="w-full bg-transparent text-white text-[14px] outline-none"
                    defaultValue="2023-11-15"
                  />
                </div>
                <div className="md:col-span-3 text-left md:text-right">
                  <span className="md:hidden text-gray-500 text-[10px] uppercase font-bold block mb-1">
                    Importe
                  </span>
                  <input
                    className="w-full bg-transparent text-white text-[14px] outline-none md:text-right font-[600]"
                    defaultValue="1500"
                  />
                </div>
              </div>

              {/* Row 2: Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 bg-[#0B1221] border border-gray-800 rounded-xl p-4 md:p-3 md:px-5">
                <div className="md:col-span-6">
                  <span className="md:hidden text-gray-500 text-[10px] uppercase font-bold block mb-1">
                    Descripción
                  </span>
                  <input
                    className="w-full bg-transparent text-gray-500 text-[14px] outline-none"
                    placeholder="Descripción del hito"
                  />
                </div>
                <div className="md:col-span-3"></div>
                <div className="md:col-span-3 text-left md:text-right">
                  <span className="md:hidden text-gray-500 text-[10px] uppercase font-bold block mb-1">
                    Importe
                  </span>
                  <input
                    className="w-full bg-transparent text-gray-500 text-[14px] outline-none md:text-right"
                    defaultValue="0.00"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 4. ENTREGABLES (Responsive Grid) */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-blue-500" size={20} />
              <h3 className="text-white text-[18px] font-[700]">Entregables</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Código Fuente en Repositorio",
                  "Documentación Técnica PDF",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#0B1221] border border-gray-800 rounded-xl p-4 md:p-5 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center text-white shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-gray-300 text-[13px] md:text-[14px]">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full bg-[#0B1221] border border-gray-800 border-dashed rounded-xl p-4 md:p-5 flex items-center gap-4 text-gray-500 cursor-pointer">
                <Plus size={18} />
                <span className="text-[13px] md:text-[14px]">
                  Añadir otro entregable...
                </span>
              </div>
            </div>
          </section>

          {/* 5. ARCHIVOS ADJUNTOS */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-blue-500 text-[20px]">📁</span>
              <h3 className="text-white text-[18px] font-[700]">
                Archivos Adjuntos
              </h3>
            </div>
            <div 
              onClick={() => attachmentFileInputRef.current?.click()}
              className="w-full h-[150px] md:h-[180px] border-2 border-dashed border-gray-800 bg-[#0B1221] rounded-[24px] flex flex-col items-center justify-center text-center p-6 group hover:border-blue-500 hover:bg-[#111827] transition-all cursor-pointer relative"
            >
              <CloudUpload size={28} className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-white font-[700] text-[14px] md:text-[15px]">
                Haz clic para subir o arrastra tus archivos
              </p>
              <p className="text-gray-500 text-[14px] mt-1">
                PDF, DOCX, JPG, PNG (Max 10MB)
              </p>
              <input 
                type="file" 
                multiple
                ref={attachmentFileInputRef} 
                onChange={handleAttachmentFileUpload} 
                className="hidden" 
              />
            </div>

            {/* Display Attachment Files */}
            {attachmentFiles.length > 0 && (
              <div className="flex flex-col gap-2 mt-4">
                {attachmentFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-[#1F2937] border border-gray-800 rounded-xl p-3 md:px-4">
                    <div className="flex items-center gap-3 overflow-hidden">
                       <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                         <File size={16} className="text-blue-500" />
                       </div>
                       <div className="flex flex-col truncate">
                         <span className="text-white text-[13px] font-[600] truncate">{file.name}</span>
                         <span className="text-gray-500 text-[11px]">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                       </div>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        removeAttachmentFile(idx);
                      }} 
                      className="text-gray-500 hover:text-red-500 p-2 transition-colors"
                      title="Eliminar archivo"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 6. FINAL ACTION BUTTONS (Stack on Mobile) */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-4 sm:gap-8 pt-8 md:pt-10 border-t border-gray-800">
            <button 
              onClick={handleSaveDraft}
              className="w-full sm:w-auto text-white text-[15px] font-[600] py-2 hover:text-blue-400 transition-colors"
            >
              Guardar Borrador
            </button>
            <button 
              onClick={() => navigate('/proposal-history')}
              className="w-full sm:w-auto bg-[#1D61E7] text-white px-8 md:px-12 py-4 rounded-[14px] font-[700] text-[16px] md:text-[17px] flex items-center justify-center gap-3 hover:bg-blue-600 transition-colors"
            >
              Enviar Propuesta <SendHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Custom Toast Notification Overlay */}
    {showToast && (
      <div className="fixed top-24 right-4 md:right-8 lg:right-10 z-[2000] animate-in slide-in-from-right fade-in duration-300">
        <div className="bg-[#111827] border border-blue-500/30 shadow-2xl shadow-blue-500/10 rounded-xl p-4 pr-12 flex items-start gap-3 relative">
          <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={18} className="text-blue-500" />
          </div>
          <div className="flex flex-col mt-0.5">
            <h4 className="text-white font-[700] text-[14px]">Borrador Guardado</h4>
            <p className="text-gray-400 text-[12px] mt-0.5">¡Tu propuesta se guardó en borradores exitosamente!</p>
          </div>
          <button 
            onClick={() => setShowToast(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    )}
    </>
  );
};

export default ProposalDetails;
