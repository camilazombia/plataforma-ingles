"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import LogoutButton from "./LogoutButton"; // Importa el nuevo botón de logout

interface UserProfileProps {
  name: string; // Nombre del usuario
  role: string; // Rol del usuario (e.g., "Estudiante")
  avatar: string; // Ruta al avatar del usuario
}

const UserProfile: React.FC<UserProfileProps> = ({ name, role, avatar }) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-between w-full px-4 py-2 rounded-lg bg-background-3">
      {/* Avatar y detalles del usuario */}
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
      </div>

      {/* Botón de logout */}
      <LogoutButton />
    </div>
  );
};

export default UserProfile;
