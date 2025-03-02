"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Button from "@/components/UI/Button";

const NewPasswordPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validar que el token exista
    if (!token) {
      setError("Token inválido o expirado.");
      return;
    }

    // Validar contraseñas
    if (!password || password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      // Enviar solicitud al backend para actualizar la contraseña
      const response = await fetch("/api/reset-password/update-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Error al actualizar la contraseña.");
      }

      setSuccess("Contraseña actualizada con éxito. Redirigiendo...");
      setTimeout(() => router.push("/login"), 2000); // Redirigir al login después de 2 segundos
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="h32">Establecer nueva contraseña</h1>
      <p className="p16">
        Ingresa tu nueva contraseña para restablecer el acceso a tu cuenta.
      </p>

      {/* Campo de nueva contraseña */}
      <input
        type="password"
        placeholder="Nueva contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />

      {/* Campo para confirmar contraseña */}
      <input
        type="password"
        placeholder="Confirmar nueva contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />

      {/* Mensajes de error o éxito */}
      {error && <p className="text-sm text-red-500">{error}</p>}
      {success && <p className="text-sm text-green-500">{success}</p>}

      <Button type="submit" className="button--primary">
      Actualizar contraseña
      </Button>

      <Button type="button" className="button--secondary">
        Ir al inicio
      </Button>

    </form>
  );
};

export default NewPasswordPage;
