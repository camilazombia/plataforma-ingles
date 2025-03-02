"use client";

import React from "react";

interface LevelCompletionModalProps {
  level: "Principiante" | "Intermedio" | "Avanzado";
  username: string;
  onClose: () => void;
}

const LevelCompletionModal: React.FC<LevelCompletionModalProps> = ({
  level,
  username,
  onClose,
}) => {
  // Mapear íconos y textos según el nivel
  const levelData = {
    Principiante: {
      title: `¡Felicidades, ${username}!`,
      description: "Has completado el Nivel Principiante.",
      icon: "/assets/level-1-completed.png",
    },
    Intermedio: {
      title: `¡Felicidades, ${username}!`,
      description: "Has completado el Nivel Intermedio.",
      icon: "/assets/level-2-completed.png",
    },
    Avanzado: {
      title: `Congratulations, ${username}!`,
      description: "You’ve completed the Advanced Level.",
      icon: "/assets/level-3-completed.png",
    },
  };

  const { title, description, icon } = levelData[level];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative text-center">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-600 hover:text-primary"
        >
          ✕
        </button>

        {/* Contenido del modal */}
        <div className="flex flex-col items-center gap-4">
          {/* Ícono del nivel */}
          <img
            src={icon}
            alt={`Nivel ${level} completado`}
            className="w-24 h-24"
          />

          {/* Título */}
          <h2 className="H32 text-primary-900">{title}</h2>

          {/* Descripción */}
          <p className="P16 text-neutral-600">{description}</p>

          {/* Botón para ver certificado */}
          <button
            onClick={() => alert("Navegar al certificado")} // Aquí enlazas la navegación real
            className="button--secondary mt-4"
          >
            Ver Certificado
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelCompletionModal;
    