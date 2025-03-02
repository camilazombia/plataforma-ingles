import React from "react";
import SidebarItem from "./SidebarItem";
import UserProfile from "./UserProfile";
import ThemeSwitcher from "../Layout/ThemeSwitcher";

const Sidebar: React.FC = () => {
  return (
    <aside
      className="w-64 h-screen sticky top-0 flex flex-col justify-between bg-background-2 p-4"
      style={{ backgroundColor: "var(--background-2)" }}
    >
      {/* Espacio para el logo */}
      <div className="mb-8 bg-gray-300 h-16 rounded"></div>

      {/* Items del menú */}
      <nav className="flex-1 space-y-4">
        <SidebarItem iconName="progress" label="Tu Progreso" href="/" />
        <SidebarItem iconName="resources" label="Recursos Adicionales" href="/resources" />
        <SidebarItem iconName="certifications" label="Certificaciones" href="/certificates" />
        <SidebarItem iconName="support" label="Soporte y Ayuda" href="/support" />

        {/* ThemeSwitcher entre los ítems */}
        <div className="mt-6">
          <ThemeSwitcher />
        </div>
      </nav>

      {/* Perfil del usuario centrado */}
      <div className="flex flex-col items-center">
        <UserProfile
          name="Camila Gómez"
          role="Estudiante"
          avatar="/assets/avatar.png"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
