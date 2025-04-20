"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import BackButton from "../../../progress/components/BackButton";
import VideoPlayer from "../../../progress/components/VideoPlayer";
import ModuleInfo from "../../../progress/components/ModuleInfo";
import ResourcesList from "../../../progress/components/ResourcesList";
import ExamButton from "../../../exams/components/ExamButton";
import levels from "../../module/[id]/data/modules"; // 📌 Ajusta si la ruta es distinta

const ModulePage = () => {
  const { id } = useParams();
  const moduleId = Number(id);
  const [isExamOpen, setIsExamOpen] = useState(false);
  const [module, setModule] = useState(null);

  useEffect(() => {
    console.log("🔍 Buscando módulo con ID:", moduleId);
    console.log("📌 Datos de levels:", levels);

    if (!levels || levels.length === 0) {
      console.error("❌ Error: levels está vacío o no se cargó correctamente.");
      return;
    }

    const allModules = levels.flatMap((level) => level.modules);
    console.log("📌 Todos los módulos disponibles:", allModules);

    const foundModule = allModules.find((m) => m.id === moduleId);

    if (!foundModule) {
      console.error(`❌ Error: No se encontró el módulo con ID ${moduleId}`);
    }

    setModule(foundModule || null);
  }, [moduleId]);

  if (!module) {
    return <p className="text-center text-red-500">⚠️ Módulo no encontrado</p>;
  }

  return (
    <div className="p-4 lg:p-6 xl:p-8 flex flex-col gap-6 bg-background min-h-screen">
      <BackButton onClick={() => window.history.back()} />

      {/* Encabezado y botón */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-4">
        <ModuleInfo
          title={module?.title || "Cargando..."}
          subtitle={module?.subtitle || ""}
          description={module?.description || ""}
        />

        <ExamButton isDisabled={false} moduleId={moduleId}>
          Presenta el test del módulo
        </ExamButton>
      </div>

      {/* Video + Recursos */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* VIDEO + TEXTO */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <VideoPlayer videoUrl={module?.videoUrl || ""} />

          {/* Texto explicativo y descarga */}
          <div className="mt-2 space-y-1">
            <p className="font-semibold text-sm text-neutral-700">
            📚 Recursos adicionales para tu aprendizaje
            </p>
            <p className="text-sm text-neutral-600">
            A continuación encontrarás materiales complementarios que te ayudarán a reforzar lo aprendido en este módulo. 
            Puedes descargarlos y usarlos para practicar en cualquier momento.
            </p>
              
              
            {Array.isArray(module.extraText?.downloads) && module.extraText.downloads.length > 0 && (
  <div className="pt-2 space-y-1">
    {module.extraText.downloads.map((res, i) => (
      <div key={i}>
        <a
          href={res.url}
          className="text-pink-600 text-sm underline hover:text-pink-800"
          download
        >
          {res.label}
        </a>
      </div>
    ))}
  </div>
)}

          </div>
        </div>

        {/* RECURSOS */}
        <div className="w-full lg:w-1/3">
          {Array.isArray(module?.resources) && module.resources.length > 0 ? (
            <ResourcesList resources={module.resources} />
          ) : (
            <p className="text-neutral-500 text-sm">No hay recursos disponibles.</p>
          )}
        </div>
      </div>

      {/* 📌 Modal del Examen */}
      {isExamOpen && (
        <ExamModal
          isOpen={isExamOpen}
          onClose={() => setIsExamOpen(false)}
          moduleId={moduleId}
        />
      )}
    </div>
  );
};

export default ModulePage;
