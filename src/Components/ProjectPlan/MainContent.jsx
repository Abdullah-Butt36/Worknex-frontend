import React from "react";
import {
  Share2,
  Bookmark,
  Clock,
  Globe,
  ShieldCheck,
  ClipboardList,
  CheckCircle2,
  FileText,
  FileVideo,
} from "lucide-react";

const MainContent = () => {
  return (
    <div className="space-y-10">
      {/* 1. Header Section */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 ">
          Rediseño de Identidad Corporativa para Fintech
        </h1>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <Share2 className="w-5 h-5 text-gray-300" />
          </button>
          <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition text-blue-500">
            <Bookmark className="w-5 h-5 fill-current" />
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> <span>Publicado hace 2 horas</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" /> <span>Remoto</span>
          </div>
          <div className="flex items-center gap-2 text-green-500 font-medium">
            <ShieldCheck className="w-4 h-4" /> <span>Cliente Verificado</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {["Branding", "UI/UX Design", "Strategy", "Adobe Illustrator"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-xs font-medium text-gray-300"
              >
                {tag}
              </span>
            ),
          )}
        </div>
      </section>

      {/* 2. Objetivo de la Solicitud */}
      <section>
        <h2 className="text-xl font-bold mb-4">Objetivo de la Solicitud</h2>
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          Estamos buscando un diseñador senior especializado en identidad
          corporativa para liderar el rediseño completo de nuestra marca. Somos
          una Fintech en expansión enfocada en soluciones de pago B2B. Nuestro
          objetivo principal es desarrollar una nueva identidad visual que
          confianza, innovación tecnológica y solidez financiera.
        </p>
      </section>

      {/* 3. Alcance del Servicio (The Dark Card) */}
      <section className="bg-[#1e293b]/40 border border-gray-800 rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-600/20 rounded-xl">
            <ClipboardList className="w-6 h-6 text-blue-500" />
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Alcance del Servicio</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm md:text-base">
                <span className="text-blue-500 font-bold">•</span>
                <p>
                  <span className="text-white font-semibold">
                    Investigación y Estrategia:
                  </span>{" "}
                  Análisis de competidores y definición de arquetipos de marca.
                </p>
              </li>
              <li className="flex gap-3 text-sm md:text-base">
                <span className="text-blue-500 font-bold">•</span>
                <p>
                  <span className="text-white font-semibold">
                    Diseño de Logotipo:
                  </span>{" "}
                  Exploración de conceptos, refinamiento y versiones finales.
                </p>
              </li>
              <li className="flex gap-3 text-sm md:text-base">
                <span className="text-blue-500 font-bold">•</span>
                <p>
                  <span className="text-white font-semibold">
                    Manual de Identidad:
                  </span>{" "}
                  Guía de uso, tipografías, paleta de colores y grillas.
                </p>
              </li>
              <li className="flex gap-3 text-sm md:text-base">
                <span className="text-blue-500 font-bold">•</span>
                <p>
                  <span className="text-white font-semibold">
                    Aplicaciones Básicas:
                  </span>{" "}
                  Tarjetas de presentación, hojas membretadas, firma de email y
                  plantillas de presentación.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Entregables Esperados (The Grid Cards) */}
      <section>
        <h2 className="text-xl font-bold mb-6">Entregables Esperados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Logotipo Maestro",
              desc: "Formatos .AI, .EPS, .SVG, .PNG",
            },
            { title: "Brandbook Digital", desc: "PDF interactivo" },
            {
              title: "Assets Redes Sociales",
              desc: "Kit de inicio para LinkedIn/Twitter",
            },
            {
              title: "Fuentes y Licencias",
              desc: "Archivos o links de compra",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 bg-[#1e293b]/30 border border-gray-800 rounded-xl"
            >
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Documentación Adjunta */}
      <section>
        <h2 className="text-xl font-bold mb-6">Documentación Adjunta</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-800">
            <div className="p-2 bg-red-500/20 rounded">
              <FileText className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="text-xs font-medium">Brief_Inicial_TechNova.pdf</p>
              <p className="text-[10px] text-gray-500">2.4 MB</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-800">
            <div className="p-2 bg-blue-500/20 rounded">
              <FileText className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-xs font-medium">Guia_Estilo_Actual.docx</p>
              <p className="text-[10px] text-gray-500">850 KB</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
