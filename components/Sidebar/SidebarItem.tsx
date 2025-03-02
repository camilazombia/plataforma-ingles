"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";

interface SidebarItemProps {
  iconName: string; // Nombre del ícono sin la extensión (e.g., "progress")
  label: string; // Texto del ítem
  href: string; // Enlace al que dirige el ítem
}

const SidebarItem: React.FC<SidebarItemProps> = ({ iconName, label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Obtener el tema actual
  const { theme } = useTheme();

  // Lógica para determinar el ícono correcto
  const iconPath = theme === "dark"
    ? `/assets/dark/${iconName}.svg` // Íconos Dark para todo en modo oscuro
    : isActive
    ? `/assets/dark/${iconName}.svg` // Íconos Dark para el estado activo en Light Mode
    : `/assets/light/${iconName}.svg`; // Íconos Light para el estado por defecto en Light Mode

  return (
    <Link href={href} passHref>
      <div
        className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer transition-all`}
        style={{
          backgroundColor: "transparent", // Fondo siempre transparente
          color: isActive
            ? "var(--primary-color)" // Texto activo
            : "var(--color-primary-700)", // Texto por defecto
        }}
      >
        {/* Ícono dinámico */}
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-md transition-all`}
          style={{
            backgroundColor: isActive
              ? "var(--primary-color)" // Fondo del ícono activo
              : "transparent", // Fondo transparente por defecto
          }}
        >
          <Image src={iconPath} alt={label} width={20} height={20} />
        </div>

        {/* Texto dinámico */}
        <span
          className={`font-medium transition-all`}
          style={{
            color: isActive
              ? "var(--primary-color)" // Texto activo
              : "var(--color-primary-700)", // Texto por defecto
          }}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default SidebarItem;
