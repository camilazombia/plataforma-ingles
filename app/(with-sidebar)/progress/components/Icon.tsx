"use client";

import React from "react";
import { useTheme } from "next-themes";

const Icon = ({ name }: { name: string }) => {
  const { theme } = useTheme();
  const iconPath = `/assets/${theme === "dark" ? "dark" : "light"}/${name}.svg`;

  return <img src={iconPath} alt={`${name} icon`} className="w-6 h-6" />;
};

export default Icon;
