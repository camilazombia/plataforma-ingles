'use client';

import React from 'react';
import CertificateCard from './CertificateCard';
import certificatesData from './certificates';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function CertificatesPage() {
  const { theme } = useTheme(); // Detecta el tema actual

  return (
    <div className="p-6 relative">
      {/* Imagen de la esquina superior derecha */}
      <Image
        src="/assets/certifications-banner.png"
        alt="Certificaciones"
        width={150}
        height={150}
        priority
        className="absolute top-0 right-0"
      />

      {/* Título principal */}
      <h1 className="h32">Tus Certificaciones</h1>

      {/* Contenedor de certificaciones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificatesData.map((certificate) => (
          <CertificateCard key={certificate.id} {...certificate} />
        ))}
      </div>
    </div>
  );
}
