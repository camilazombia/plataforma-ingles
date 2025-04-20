"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

interface Resource {
  id: number;
  name: string;
  description?: string;
  path?: string;
  image?: string;
}

const ResourcesList = ({ resources }: { resources: Resource[] }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="resource-container">
      <div className="resource-header">
        <div className="flex items-center gap-2">
          {mounted && (
            <Image
              src={`/assets/${theme === "dark" ? "dark" : "light"}/resources-icon.svg`}
              alt="Icono recursos"
              width={32}
              height={32}
            />
          )}
          <h3 className="resource-title">Recursos</h3>
        </div>

        <Link href="#">
          <span className="resource-link">Ver todo</span>
        </Link>
      </div>

      <ul className="resource-list">
        {resources.map((resource) => (
          <li key={resource.id} className="resource-item">
            {resource.path ? (
              <Link href={resource.path} className="flex gap-3 no-underline">
                <div className="resource-thumbnail">
                  {resource.image ? (
                    <img
                      src={resource.image}
                      alt={resource.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-6 h-6 bg-gray-300 rounded" />
                  )}
                </div>

                <div className="flex-1">
                  <p className="resource-name">{resource.name}</p>
                  <p className="resource-description">
                    {resource.description || "Sin descripción"}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="flex gap-3">
                <div className="resource-thumbnail">
                  {resource.image ? (
                    <img
                      src={resource.image}
                      alt={resource.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-6 h-6 bg-gray-300 rounded" />
                  )}
                </div>

                <div className="flex-1">
                  <p className="resource-name">{resource.name}</p>
                  <p className="resource-description">
                    {resource.description || "Sin descripción"}
                  </p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourcesList;
