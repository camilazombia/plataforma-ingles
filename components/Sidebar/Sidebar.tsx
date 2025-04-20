'use client';

import React, { useState, useEffect } from 'react';
import SidebarItem from './SidebarItem';
import ThemeSwitcher from '../Layout/ThemeSwitcher';
import UserProfile from './UserProfile';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  // Cierra el sidebar en mobile al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const iconPath = (file: string) =>
    `/assets/${theme === 'dark' ? 'dark' : 'light'}/${file}`;

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 🔹 Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white dark:bg-neutral-900 px-4 py-3 shadow-md">
        <Image src={iconPath('logo.svg')} alt="Logo" width={86} height={32} />
        <button onClick={toggleSidebar} title="Abrir menú">
          <Image src={iconPath('hamburger.svg')} alt="Menú" width={24} height={24} />
        </button>
      </header>

      {/* 🔹 Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🔹 Sidebar (fijo + deslizable) */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-[var(--background-2)] z-50
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:block
        `}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="p-4 pt-16 md:pt-4 flex flex-col flex-1 overflow-y-auto">
            {/* Logo desktop */}
            <div className="mb-8 hidden md:flex items-center justify-center">
              <Image src={iconPath('logo.svg')} alt="Logo" width={175} height={65} />
            </div>

            <nav className="flex flex-col space-y-4">
              <SidebarItem iconName="progress" label="Tu Progreso" href="/" />
              <SidebarItem iconName="resources" label="Recursos Adicionales" href="/resources" />
              <SidebarItem iconName="certifications" label="Certificaciones" href="/certificates" />
              <SidebarItem iconName="support" label="Soporte y Ayuda" href="/support" />
            </nav>

            <div className="mt-6">
              <ThemeSwitcher />
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-neutral-700">
            <UserProfile
              name="Camila Gómez"
              role="Estudiante"
              avatar="/assets/avatar.png"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
