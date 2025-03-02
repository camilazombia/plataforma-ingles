"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Aseguramos que el componente esté montado para evitar errores SSR
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div
      className={`relative flex items-center w-20 h-10 p-1 rounded-full cursor-pointer transition-colors duration-300 ${
        isDark ? "bg-purple-300" : "bg-gray-200"
      }`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {/* Ícono de Luna */}
      <div className="flex items-center justify-center w-8 h-8">
        <Image
          src="/assets/moon.svg"
          alt="Moon Icon"
          width={20}
          height={20}
          className="icon-moon"
        />
      </div>

      {/* Ícono de Sol */}
      <div
        className={`absolute flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out transform ${
          isDark ? "translate-x-0" : "translate-x-10"
        }`}
      >
        <Image
          src="/assets/sun.svg"
          alt="Sun Icon"
          width={20}
          height={20}
          className="icon-sun"
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
