'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const LogoutButton: React.FC = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const handleLogout = () => {
    document.cookie = "authToken=; path=/; max-age=0";
    router.push("/login");
  };

  const logoutIcon =
    theme === "dark"
      ? "/assets/dark/logout.svg"
      : "/assets/light/logout.svg";

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 text-sm text-[var(--color-danger)] hover:text-[var(--color-danger-hover)] transition"
    >
      <img src={logoutIcon} alt="Logout" className="w-5 h-5" />
      <span>Cerrar sesión</span>
    </button>
  );
};

export default LogoutButton;
