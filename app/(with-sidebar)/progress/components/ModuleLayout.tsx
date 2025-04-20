"use client";

import React from "react";
import ModuleCard from "./ModuleCard";

interface ModuleLayoutProps {
  title: string;
  subtitle: string;
  progress: number;
  modules: {
    id: number;
    title: string;
    status: "completed" | "active" | "locked";
  }[];
}

const ModuleLayout: React.FC<ModuleLayoutProps> = ({ title, subtitle, progress, modules }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
      <div className="relative mb-4">
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-primary rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">{`Tu progreso: ${progress}%`}</p>
      </div>
      <div className="flex flex-col gap-2">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            title={module.title}
            status={module.status}
            id={module.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ModuleLayout;
