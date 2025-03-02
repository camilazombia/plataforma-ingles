"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "../../hooks/useTheme";

interface CertificateCardProps {
  title: string;
  subtitle: string;
  status: "locked" | "completed";
  image: string;
  lockedImage: string;
  descriptionLocked: string;
  descriptionUnlocked: string;
  shareUrl: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  subtitle,
  status,
  image,
  lockedImage,
  descriptionLocked,
  descriptionUnlocked,
  shareUrl,
}) => {
  const theme = useTheme(); // Detecta si es light o dark

  // Iconos de candado y desbloqueo según estado y tema
  const lockIcon = theme === "dark"
    ? "/assets/dark/lock.svg"
    : "/assets/light/lock.svg";

  const unlockedIcon = theme === "dark"
    ? "/assets/dark/unlocked.svg"
    : "/assets/light/unlocked.svg";

  // Iconos de redes sociales con enlaces de compartir
  const socialLinks = [
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=Mira mi certificado: ${shareUrl}`,
      icon: theme === "dark" ? "/assets/dark/whatsapp.svg" : "/assets/light/whatsapp.svg",
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: theme === "dark" ? "/assets/dark/facebook.svg" : "/assets/light/facebook.svg",
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      icon: theme === "dark" ? "/assets/dark/linkedin.svg" : "/assets/light/linkedin.svg",
    },
  ];

  return (
    <div
      className={`relative p-6 border rounded-lg shadow-md flex flex-col items-center text-center min-h-[500px] bg-background-2 ${
        status === "completed"
          ? "opacity-100"
          : "opacity-50"
      }`}
    >
      {/* 🔹 Icono de candado (se desbloquea si está completado) */}
      <div className="absolute top-6 right-6">
        <Image src={status === "completed" ? unlockedIcon : lockIcon} alt="Estado" width={30} height={30} />
      </div>

      {/* 🔹 Título y subtítulo */}
      <h2 className="text-xl font-bold text-primary">{title}</h2>
      <p className="text-sm text-gray-500">{subtitle}</p>

      {/* 🔹 Imagen del certificado o bloqueo */}
      <div className="relative w-full h-40 my-6">
        <Image
          src={status === "completed" ? image : lockedImage}
          alt={title}
          layout="intrinsic"
          width={250}
          height={180}
          objectFit="contain"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* 🔹 Descripción */}
      <p className="text-sm text-gray-700 px-4">
        {status === "completed" ? descriptionUnlocked : descriptionLocked}
      </p>

      {/* 🔹 Botón de descarga (solo si está desbloqueado) */}
      {status === "completed" && (
        <button className="mt-6 px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
          Descargar Certificado
        </button>
      )}

      {/* 🔹 Sección de compartir */}
      {status === "completed" && (
        <div className="mt-6">
          <p className="text-gray-600 font-semibold mb-2">Compártelo</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ name, url, icon }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                <Image src={icon} alt={name} width={32} height={32} className="hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateCard;
