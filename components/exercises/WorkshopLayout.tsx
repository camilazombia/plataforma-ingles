"use client";

import React from "react";
import BackButton from "./BackButton"; // Ajusta la ruta según tu estructura

const WorkshopLayout = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="p-4 lg:p-6 xl:p-8 bg-background min-h-screen flex flex-col gap-6">
      <BackButton label="Volver al Módulo" />

      <div>
        <h1 className="text-xl font-bold text-neutral-900">{title}</h1>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
};

export default WorkshopLayout;
