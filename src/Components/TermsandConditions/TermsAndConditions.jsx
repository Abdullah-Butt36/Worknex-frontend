import React, { useState } from "react";
import { HelpCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const sections = [
    {
      id: "1. Introducción",
      content:
        "Bienvenido a WORKNEX. Al acceder y utilizar nuestra plataforma, usted acepta estar sujeto a los siguientes términos y condiciones. Por favor, léalos detenidamente. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios. WORKNEX actúa como un intermediario premium conectando prestadores de servicios profesionales con empresas de habla hispana.",
    },
    {
      id: "2. Definiciones",
      content:
        "'Usuario' a cualquier persona que acceda a la plataforma, ya sea como Solicitante de Servicios (Cliente) o como Prestador de Servicios (Proveedor). 'Servicios' las herramientas, pagos y funcionalidades proporcionadas por WORKNEX para facilitar la colaboración profesional.",
    },
    {
      id: "3. Elegibilidad y Registro",
      content:
        "Para utilizar WORKNEX, debe tener al menos 18 años de edad y capacidad legal para celebrar contratos vinculantes. WORKNEX facilita el proceso de contratación, documentación y verificación de identidad para garantizar un entorno seguro.",
    },
    {
      id: "5. Propiedad Intelectual",
      content:
        "A menos que se acuerde lo contrario por escrito, los derechos de propiedad intelectual de los trabajos entregados se transfieren al Cliente una vez que el pago ha sido completado en su totalidad. WORKNEX retiene los derechos sobre la plataforma, su código y su marca.",
    },
    {
      id: "6. Conducta del Usuario",
      content:
        "Usted acepta comportarse de manera profesional. No se tolerará el acoso, la discriminación ni el contenido fraudulento. WORKNEX se reserva el derecho de eliminar contenido o suspender cuentas que violen nuestras normas de comunidad.",
    },
    {
      id: "7. Limitación de Responsabilidad",
      content:
        "WORKNEX no se hace responsable de la calidad de los servicios prestados por los Proveedores ni de la solvencia de los Clientes, aunque ofrecemos mecanismos de disputa para resolver conflictos y facilitamos la gestión documental.",
    },
    {
      id: "8. Modificaciones",
      content:
        "Podemos actualizar estos términos ocasionalmente. Le notificaremos sobre cambios significativos enviando un aviso a la dirección de correo electrónico asociada a su cuenta o publicando un aviso destacado en nuestro sitio web.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-[#1A202C]">
      <nav className="w-full h-20 border-b border-gray-100 bg-white sticky top-0 z-[100]">
        <div className="max-w-[1440px] mx-auto h-full px-10 md:px-20 flex items-center justify-between">
          <div 
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-6 h-6 md:w-7 md:h-7 flex flex-wrap">
              <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-white border-[0.1px] border-gray-100"></div>
              <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-black"></div>
              <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-black"></div>
              <div className="w-3 md:w-3.5 h-3 md:h-3.5 bg-white border-[0.1px] border-gray-100"></div>
            </div>
            <span className="font-[700] text-[18px] md:text-[22px] tracking-tight text-black uppercase">
              WORKNEX
            </span>
          </div>

          {/* Help Button */}
          <button className="flex items-center gap-2 text-[15px] font-[700] text-[#64748B] hover:text-black transition-colors">
            <HelpCircle size={20} /> Ayuda
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-[950px] mx-auto px-6 py-16">
        {/* Header Section */}
        <header className="mb-12 border-b-2 border-[#F1F5F9] pb-8">
          <h1 className="text-[34px] md:text-[46px] font-[700] tracking-tight text-[#0F172A] mb-3 leading-tight">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-[#94A3B8] text-[18px] font-[600] ">
            Última actualización: 15 de Octubre, 2023
          </p>
        </header>

        {/* 2. MAIN SHADED CARD - Full 8 points inside */}
        <div
          className="bg-[#F8FAFC] border-[4px] border-white rounded-[40px] p-10 md:p-16 
          shadow-[0_25px_60px_rgba(0,0,0,0.07)] ring-1 ring-gray-100"
        >
          <section className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-[22px] font-[700] text-[#1D61E7] tracking-tight">
                  {section.id}
                </h2>
                <p className="text-[16.5px] text-[#475569] leading-[1.8] font-[500]">
                  {section.content}
                </p>
              </div>
            ))}
          </section>

          {/* Policy Links inside the box */}
          <div className="pt-14 flex flex-wrap gap-10 text-[15px] font-[600] text-[#B1BDCE]">
            <a href="#" className="hover:text-[#1D61E7] transition-all">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-[#1D61E7] transition-all">
              Aviso Legal
            </a>
          </div>
        </div>

        {/* 3. ACCEPTANCE & BUTTON SECTION */}
        <div className="mt-14 pb-24">
          {/* Checkbox Card */}
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 mb-8 shadow-sm flex items-center gap-6">
            <div className="relative">
              <input
                type="checkbox"
                className="peer hidden"
                id="final-terms-check"
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
              />
              <label
                htmlFor="final-terms-check"
                className="w-8 h-8 border-2 border-gray-200 rounded-xl peer-checked:bg-[#1D61E7] peer-checked:border-[#1D61E7] transition-all cursor-pointer flex items-center justify-center"
              >
                {accepted && (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </label>
            </div>
            <p className="text-[16px] md:text-[17px] font-[600] text-slate-600">
              He leído y acepto los{" "}
              <span className="text-bleck font-[700] cursor-pointer hover:underline underline-offset-4">
                Términos y Condiciones
              </span>
            </p>
          </div>

          {/* Action Button */}
          <div className="flex justify-end">
            <button
              onClick={() => navigate(-1)}
              disabled={!accepted}
              className={`w-full md:w-auto flex items-center justify-center gap-4 px-20 py-5 rounded-2xl font-[900] text-[17px] transition-all
                  ${
                    accepted
                      ? "bg-[#1D61E7] text-white  hover:translate-y-[-4px] active:scale-95"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed opacity-60"
                  }`}
            >
              Continuar
              <ArrowRight size={22} strokeWidth={3} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
