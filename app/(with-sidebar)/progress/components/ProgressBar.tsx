import React from "react";

const ProgressBar = ({ progress }: { progress: number }) => {
  // 🛠️ Asegurar que el progreso mínimo sea al menos visible
  const adjustedProgress = progress < 5 && progress > 0 ? 5 : progress; 

  return (
    <div className="w-full flex flex-col gap-2">
      {/* 📌 Texto del progreso */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Tu progreso:</span>
        <span className="text-primary-600 font-semibold">{progress.toFixed(0)}%</span>
      </div>

      {/* 📌 Barra de progreso */}
      <div className="relative w-full bg-gray-200 h-3 rounded-full overflow-hidden">
        <div
          style={{ width: `${adjustedProgress}%` }}
          className="h-full bg-primary-600 transition-all duration-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
