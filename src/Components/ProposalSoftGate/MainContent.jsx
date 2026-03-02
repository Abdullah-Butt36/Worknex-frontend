import React from "react";
import { FileText, Image as ImageIcon, File } from "lucide-react";

const MainContent = () => {
  const files = [
    { name: "Portfolio_2023.pdf", type: "pdf" },
    { name: "Case_Study.pdf", type: "pdf" },
    { name: "Mockups.jpg", type: "image" },
  ];

  return (
    <div className="flex flex-col gap-8 w-full font-sans">
      <section className="bg-[#111827]/50 border border-gray-800 rounded-[24px] p-6 md:p-8 lg:p-10">
        <h3 className="text-white text-[18px] md:text-[20px] font-[700] mb-6 flex items-center gap-3">
          Carta de Presentación
        </h3>

        <div className="text-gray-400 text-[15px] leading-[1.8] space-y-4">
          <p>Hola equipo,</p>
          <p>
            He revisado detenidamente los requerimientos para el rediseño de su
            identidad corporativa y estoy muy entusiasmado con la oportunidad.
            Cuento con más de 8 años de experiencia trabajando con marcas de
            alto impacto en diversos sectores hispanohablantes.
          </p>
          <p>
            Mi enfoque se basa en el minimalismo funcional, asegurando que la
            marca no solo se vea bien, sino que comunique los valores
            fundamentales de su empresa.
          </p>
          <p className="opacity-50 italic text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-white text-[18px] font-[700] mb-6 px-2">
          Archivos Adjuntos (3)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {files.map((file, index) => (
            <div
              key={index}
              className="bg-[#111827]/50 border border-gray-800 rounded-[20px] p-6 flex flex-col items-center justify-center text-center group hover:border-blue-500/50 transition-all cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#1F2937] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {file.type === "pdf" ? (
                  <FileText className="text-blue-500" size={28} />
                ) : (
                  <ImageIcon className="text-purple-500" size={28} />
                )}
              </div>
              <span className="text-gray-300 text-[13px] font-[600] truncate w-full px-2">
                {file.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;
