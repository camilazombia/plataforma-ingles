"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const LogoutButton: React.FC = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const handleLogout = () => {
    // Eliminar token de sesión (simulado)
    document.cookie = "authToken=; path=/; max-age=0";
    // Redirigir al login
    router.push("/login");
  };

  // Seleccionar ícono según el tema
  const logoutIcon =
    theme === "dark"
      ? "/assets/dark/logout.svg"
      : "/assets/light/logout.svg";

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 text-sm text-foreground hover:text-primary-900 transition"
    >
      <img src={logoutIcon} alt="Logout" className="w-5 h-5" />
      <span>Cerrar sesión</span>
    </button>
  );
};

export default LogoutButton;
