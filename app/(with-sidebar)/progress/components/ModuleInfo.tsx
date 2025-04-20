"use client";

import React from "react";

const ModuleInfo = ({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) => {
  return (
    <div>
      <h1 className="h32 mb-4 text-left" >{title}</h1>
      <p className="P16 mb-4 text-left">{subtitle}</p>
    </div>
  );
};

export default ModuleInfo;
