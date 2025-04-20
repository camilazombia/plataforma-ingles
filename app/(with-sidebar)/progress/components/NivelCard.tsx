import React from "react";
import Link from "next/link";

const NivelCard = ({ level }: { level: any }) => {
  return (
    <div className="border border-primary-900 p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold text-primary-900">{level.title || "Título no disponible"}</h2>
      <p className="text-sm text-gray-600">{level.subtitle || "Subtítulo no disponible"}</p>
      <p className="text-sm text-gray-700">Progreso: {level.progress}%</p>
    </div>
  );
};

export default NivelCard;
