"use client";

import React from "react";
import Image from "next/image";
import ThemeSwitcher from "../../../../components/Layout/ThemeSwitcher";

const NewPasswordLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center dark:bg-gray-800"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Imagen del astronauta */}
        <div className="hidden lg:block w-1/2">
          <Image
            src="/assets/astronauta.png"
            alt="Astronauta"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>

        {/* Contenido de la página */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <div className="flex justify-end mb-6">
            <ThemeSwitcher />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default NewPasswordLayout;
