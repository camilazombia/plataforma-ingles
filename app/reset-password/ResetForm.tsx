"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import Button from "@/components/UI/Button";

const ResetForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme(); // Obtener el tema actual (light o dark)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (!email || !email.includes("@")) {
        throw new Error("Por favor, ingresa un correo electrónico válido.");
      }

      // Simula el envío del correo de recuperación
      alert("Correo de recuperación enviado.");
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Cambiar el ícono según el tema
  const emailIcon =
    theme === "dark"
      ? "/assets/dark/email-icon.svg" // Ruta para Dark Mode
      : "/assets/light/email-icon.svg"; // Ruta para Light Mode

  return (
    <form onSubmit={handleSubmit} className="container-form">
      <h1 className="h32">Recuperar contraseña</h1>
      <p className="p16">
        Si olvidaste tu contraseña, no te preocupes. Te enviaremos un correo con las instrucciones para recuperarla.
      </p>

      <div className="reset-form__input-group">
        <img
          src={emailIcon}
          alt="Ícono de correo"
          className="reset-form__icon"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {error && <p className="reset-form__error">{error}</p>}

      <Button type="submit" className="button--primary">
        Recuperar contraseña
      </Button>

      <Button type="button" className="button--secondary">
        Ir al inicio
      </Button>

      <p className="p16">
        ¿Necesitas ayuda? Contáctanos por{" "}
        <a href="https://wa.me/1234567890" className="link">
          WhatsApp
        </a>{" "}
        y te asistiremos de inmediato.
      </p>
    </form>
  );
};

export default ResetForm;
