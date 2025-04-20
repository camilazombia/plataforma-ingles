"use client";

import { useParams } from "next/navigation";
import levels from "../../progress/module/[id]/data/modules";
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";

const ResourcePage = () => {
  const { id } = useParams();
  const [resource, setResource] = useState(null);

  useEffect(() => {
    // Buscar el recurso dentro de los módulos
    const foundResource = levels
      .flatMap(level => level.modules.flatMap(module => module.resources))
      .find(resource => resource.id === Number(id));

    setResource(foundResource);
  }, [id]);

  if (!resource) {
    return <p className="text-center text-red-500">⚠️ Recurso no encontrado</p>;
  }

  // 🔹 Cargar dinámicamente el componente del ejercicio
  const DynamicComponent = dynamic(
    () => import(`../../../components/exercises/${resource.component}`).then((mod) => mod.default),
    { ssr: false }
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{resource.name}</h1>
      <p className="text-neutral-600">{resource.description}</p>

      <Suspense fallback={<p className="text-center">Cargando recurso...</p>}>
        <div className="mt-6 border p-4 rounded-lg">
          <DynamicComponent />
        </div>
      </Suspense>
    </div>
  );
};

export default ResourcePage;
