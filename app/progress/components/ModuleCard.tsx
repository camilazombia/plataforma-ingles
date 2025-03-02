import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

interface ModuleCardProps {
  id: number;
  title: string;
  status: "completed" | "active" | "locked";
}

const ModuleCard: React.FC<ModuleCardProps> = ({ id, title, status }) => {
  const { theme } = useTheme();
  const moduleUrl = status === "locked" ? "#" : `/progress/module/${id}`;

  // 🎨 **Clases CSS según el estado del módulo**
  const statusClass = {
    completed: "module-card-completed",
    active: "module-card-active",
    locked: "module-card-locked cursor-not-allowed opacity-60",
  };

  // 🔹 **Íconos según el estado y tema (light/dark)**
  const statusIcons = {
    completed: theme === "dark" ? "/assets/dark/check.svg" : "/assets/light/check.svg", // ✅ Icono de completado
    active: theme === "dark" ? "/assets/dark/lock-open.svg" : "/assets/light/lock-open.svg", // 🔄 Icono de progreso
    locked: theme === "dark" ? "/assets/dark/lock.svg" : "/assets/light/lock.svg", // 🔒 Icono de bloqueado
  };

  return (
    <Link href={moduleUrl} passHref legacyBehavior>
      <div className={`module p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 flex justify-between items-center ${statusClass[status]}`}>
        <span>{title}</span>
        <Image
          className="module-icon"
          src={statusIcons[status]}
          alt={status}
          width={24}
          height={24}
        />
      </div>
    </Link>
  );
};

export default ModuleCard;
