import React from "react";
import { Check } from "lucide-react";
import Footer from "./ProjectFooter";
import ProjectNav from "./ProjectNav";

const ProjectPublication = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased">
      {/* 1. Navbar */}
      <ProjectNav />

      {/* 2. Main Content Section */}
      <section className="relative w-full flex-grow flex flex-col items-center justify-center bg-white overflow-hidden py-12 md:py-20">
        <div className="absolute top-[-10%] left-[-15%] w-[35vw] h-[35vw] bg-[#EEF4FF] rounded-full blur-[100px] opacity-60 z-0"></div>

        {/* Bottom Right Blob */}
        <div className="absolute bottom-[-10%] right-[-15%] w-[40vw] h-[40vw] bg-[#F3F7FF] rounded-full blur-[120px] opacity-70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[750px] mx-auto">
          <div className="mb-10">
            <div className="w-[140px] h-[140px] bg-[#EBF1FF] rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-[1.5px] border-[#D8E4FF] opacity-40"></div>

              <div className="w-[85px] h-[85px] bg-[#1D61E7] rounded-full flex items-center justify-center shadow-[0_12px_30px_rgba(29,97,231,0.2)] ring-4 ring-white">
                <Check className="text-white" size={40} strokeWidth={4.5} />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] md:text-[46px] font-[700] text-[#111827] mb-6 tracking-tight leading-[1.1]">
            ¡Tu solicitud ha sido publicada!
          </h2>

          {/* Description */}
          <p className="text-[#6B7280] text-[17px] md:text-[20px] font-[500] leading-[1.6] mb-12 max-w-[620px]">
            Tu solicitud ya está disponible para profesionales y proveedores
            elegibles en WORKNEX. Recibirás notificaciones a medida que
            comiencen a llegar las propuestas.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center w-full space-y-6">
            <button className="bg-[#1D61E7] text-white px-12 py-5 rounded-[18px] font-[700] text-[18px] hover:bg-[#1a56cc] transition-all hover:shadow-xl hover:shadow-blue-50 active:scale-[0.98] w-full max-w-[360px]">
              Gestionar solicitud
            </button>

            <p className="text-[#9CA3AF] text-[13px] font-[500] max-w-[320px] leading-tight">
              Puedes editar o cancelar esta solicitud siempre que no hayas
              aceptado una propuesta.
            </p>

            <button className="text-[#111827] text-[17px] font-[700] hover:text-blue-700 transition-colors pt-4">
              Volver al Inicio
            </button>
          </div>
        </div>
      </section>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default ProjectPublication;
