"use client";

import React from "react";
import CertificateCard from "./CertificateCard";
import certificatesData from "./certificates";
import Image from "next/image";
import { useTheme } from "../../hooks/useTheme"; // Hook para detectar el tema

export default function CertificatesPage() {
  const theme = useTheme(); // Detecta el tema actual

  return (
    <div className="p-6 relative">
      {/* 🔹 Imagen de la esquina superior derecha (Siempre PNG) */}
      <Image
        src="/assets/certifications-banner.png" // PNG estático
        alt="Certificaciones"
        width={150}
        height={150}
        priority
        className="absolute top-0 right-0"
      />

      {/* 🔹 Título principal */}
      <h1 className="text-2xl font-bold text-center mb-6">Tus Certificaciones</h1>

      {/* 🔹 Contenedor de certificaciones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificatesData.map((certificate) => (
          <CertificateCard key={certificate.id} {...certificate} />
        ))}
      </div>
    </div>
  );
}
