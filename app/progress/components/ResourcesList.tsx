"use client";

import React from "react";
import Link from "next/link";

interface Resource {
  id: number;
  name: string;
  description?: string;
  path?: string;  // 🔹 Hacer `path` opcional
}

const ResourcesList = ({ resources }: { resources: Resource[] }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="font-semibold text-lg text-neutral-700">Recursos</h3>
      <ul className="space-y-4">
        {resources.map((resource) => (
          <li key={resource.id} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
            <div>
              <p className="text-sm font-bold text-neutral-700">{resource.name}</p>
              <p className="text-xs text-neutral-500">{resource.description || "Sin descripción"}</p>

              {/* 🔹 Solo renderiza <Link> si path existe */}
              {resource.path ? (
                <Link href={resource.path} className="text-primary hover:underline text-sm">
                  Ir al recurso →
                </Link>
              ) : (
                <span className="text-neutral-400 text-sm">Recurso no disponible</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourcesList;
