"use client";

import React, { useState } from "react";
import levels from "../module/[id]/data/modules"; // ✅ Asegúrate de que la ruta es correcta
import ModuleCard from "../../progress/components/ModuleCard";
import UserProgress from "../../progress/components/UserProgress";
import ExamButton from "../../exams/components/ExamButton";
import LevelCompletionModal from "../../exams/components/LevelCompletionModal";
import ProgressBar from "../../progress/components/ProgressBar"; // ✅ Importamos la barra de progreso

const ProgressPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentLevel, setCurrentLevel] = useState<"Principiante" | "Intermedio" | "Avanzado">("Principiante");
  const [isExamCompleted, setIsExamCompleted] = useState(false);

  // ✅ Función para determinar el estado del progreso del usuario
  const getProgressState = () => {
    const completedLevels = levels.filter(level =>
      level.modules.every(module => module.status === "completed")
    ).length;

    if (completedLevels === 0) return "pre-principiante";
    if (completedLevels === 1) return "principiante-completado";
    if (completedLevels === 2) return "intermedio-completado";
    return "avanzado-completado";
  };

  const handleExamCompletion = (levelTitle: string) => {
    setCurrentLevel(levelTitle as "Principiante" | "Intermedio" | "Avanzado");
    setShowModal(true);
    setIsExamCompleted(true);
  };

  return (
    <div className="p-6">
      {/* 📌 Barra de progreso del usuario */}
      <UserProgress username="Camila Gómez" progressState={getProgressState()} />

      {/* 📌 Niveles y módulos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map((level) => {
          const completedModules = level.modules.filter((module) => module.status === "completed").length;
          const totalModules = level.modules.length;
          const progressPercentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0; // 📊 Calculamos el progreso

          return (
            <div key={level.id} className="flex flex-col gap-4 card-level">
              <h2 className="heading-level">{level.title}</h2>
              <p className="subtitle-level">{level.subtitle}</p>

              {/* 📌 Barra de Progreso */}
              <ProgressBar progress={progressPercentage} />

              {/* 🔹 Renderiza los módulos del nivel */}
              <div className="flex flex-col gap-2">
                {level.modules.map((module) => (
                  <ModuleCard key={module.id} id={module.id} title={module.title} status={module.status} />
                ))}
              </div>

              {/* 📌 Botón para el examen del nivel */}
              <div className="mt-6 flex flex-col items-center">
                <p className="p16 text-neutral-600 mb-4">
                  {completedModules === totalModules
                    ? `Avanza al examen del nivel ${level.title}`
                    : `Inicia el examen del nivel ${level.title}`}
                </p>
                <ExamButton isDisabled={completedModules !== totalModules || isExamCompleted} onClick={() => handleExamCompletion(level.title)}>
                  Comenzar examen
                </ExamButton>
              </div>
            </div>
          );
        })}
      </div>

      {/* 📌 Modal de finalización de nivel */}
      {showModal && (
        <LevelCompletionModal level={currentLevel} username="Camila Gómez" onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ProgressPage;
