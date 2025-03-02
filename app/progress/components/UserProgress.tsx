import React from "react";
import LevelProgressBar from "../components/Levelprogressbar";

interface UserProgressProps {
  username: string;
  progressState: "pre-principiante" | "principiante-completado" | "intermedio-completado" | "avanzado-completado";
}

const UserProgress: React.FC<UserProgressProps> = ({ username, progressState }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* 📌 Mensaje de Bienvenida */}
      <h2 className="text-xl font-bold text-center">Bienvenido(a) (Welcome)</h2>
      <h1 className="text-2xl font-extrabold text-center">{username}</h1>

      {/* 📌 Barra de progreso de niveles (cambia según el estado actual) */}
      <LevelProgressBar progressState={progressState} />
    </div>
  );
};

export default UserProgress;
