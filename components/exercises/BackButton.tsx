"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

interface BackButtonProps {
  onClick?: () => void;
  label?: string;
  theme?: "light" | "dark";
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, label = "Volver a Niveles", theme }) => {
  const router = useRouter();
  const [currentTheme, setCurrentTheme] = useState(theme || "light");

  useEffect(() => {
    if (!theme) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setCurrentTheme(prefersDark ? "dark" : "light");
    }
  }, [theme]);

  const handleBack = () => {
    if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium p-2 transition duration-300"
    >
      <Image
        src={`/assets/${currentTheme}/arrow-left.svg`}
        alt="Volver"
        width={20}
        height={20}
      />
      {label}
    </button>
  );
};

export default BackButton;
