"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import BackButton from "../../../progress/components/BackButton";
import VideoPlayer from "../../../progress/components/VideoPlayer";
import ModuleInfo from "../../../progress/components/ModuleInfo";
import ResourcesList from "../../../progress/components/ResourcesList";
import ExamButton from "../../../exams/components/ExamButton";
import levels from "../../module/[id]/data/modules"; // 📌 Ajusta la importación según tu estructura

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
    <div className="p-6 lg:p-8 flex flex-col gap-8 bg-background min-h-screen">
      <BackButton onClick={() => window.history.back()} />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 📌 Información del módulo y Video */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <ModuleInfo 
            title={module?.title || "Cargando..."} 
            subtitle={module?.subtitle || ""} 
            description={module?.description || ""}
          />
          <VideoPlayer videoUrl={module?.videoUrl || ""} />
        </div>

        {/* 📌 Recursos y Examen */}
        <div className="flex flex-col gap-6">
        <ExamButton isDisabled={false} moduleId={moduleId}>
                Comenzar Examen
          </ExamButton>


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
