"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface LevelProgressBarProps {
  progressState: "pre-principiante" | "principiante-completado" | "intermedio-completado" | "avanzado-completado";
}

const LevelProgressBar: React.FC<LevelProgressBarProps> = ({ progressState }) => {
  const { theme } = useTheme(); // 🌙 Detectar si el usuario está en modo oscuro o claro

  // 📌 Ruta de la imagen según el tema
  const imagePath = `/assets/${theme === "dark" ? "dark" : "light"}/${progressState}.png`;

  return (
    <div className="relative flex justify-center w-full max-w-3xl p-4">
      {/* 📌 Imagen del progreso según el estado y tema */}
      <Image
        src={imagePath}
        alt={`Progreso: ${progressState}`}
        width={737} // Ajusta según el diseño
        height={103} // Ajusta según el diseño
        className="rounded-lg"
      />
    </div>
  );
};

export default LevelProgressBar;
