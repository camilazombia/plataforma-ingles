"use client";

import React from "react";

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string; // Opcional: ruta del ícono
}

const Input: React.FC<InputProps> = ({ id, type, placeholder, value, onChange, icon }) => {
  return (
    <div className="relative">
      {icon && (
        <img
          src={icon}
          alt={placeholder}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full py-2 px-4 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-900 ${
          icon ? "pl-10" : ""
        }`}
      />
    </div>
  );
};

export default Input;
