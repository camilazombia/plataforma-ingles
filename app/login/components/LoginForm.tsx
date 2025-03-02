"use client";

import React, { useState } from "react";
import AuthService from "../services/AuthService";
import Button from "@/components/UI/Button";
import LoginError from "./LoginError";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Estado para "Recordar por 30 días"
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const { theme } = useTheme();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await AuthService.login(username, password, rememberMe); // Intentar iniciar sesión
      router.push("/"); // Cambiar la redirección a la raíz
    } catch (err: any) {
      setError(err.message); // Manejar errores
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container-form">
      <h1 className="h32">¡Bienvenido de nuevo!</h1>
      <h2 className="h24">Welcome Back!</h2>

      {/* Input de usuario */}
      <div className="login-input-group relative">
        <img src="/assets/light/email-icon.svg" alt="Ícono de correo" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        <input
          id="username"
          type="text"
          placeholder="Ingresa tu correo electrónico"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Input de contraseña */}
      <div className="login-input-group relative">
        <img src="/assets/light/lock-icon.svg" alt="Ícono de candado" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
        <div onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <img src={showPassword ? "/assets/light/eye-open.svg" : "/assets/light/eye-closed.svg"} alt="Mostrar contraseña" className="w-5 h-5" />
        </div>
      </div>

      {/* Checkbox "Recordar sesión" */}
      <div className="checkbox-container">
        <label className="flex items-center">
          <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="checkbox" />
          Recordar por 30 días
        </label>
        <Link href="/reset-password" className="link">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

      {/* Errores y botón */}
      {error && <LoginError message={error} />}
      <Button type="submit" className="button--primary">Iniciar sesión</Button>
    </form>
  );
};

export default LoginForm;
