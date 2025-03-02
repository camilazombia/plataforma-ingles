"use client";

import React from "react";
import Button from "@/components/UI/Button";
import Link from "next/link";

const ResetSuccess: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-xl font-bold text-gray-800">¡Correo enviado!</h1>
      <p className="text-sm text-gray-600 text-center">
        Te hemos enviado un correo con las instrucciones para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada o carpeta de spam.
      </p>

      <div className="flex flex-col gap-2 w-full">
        <Link href="/">
          <Button>Ir al inicio</Button>
        </Link>
        <Button onClick={() => alert("Correo reenviado")}>Reenviar correo</Button>
      </div>
    </div>
  );
};

export default ResetSuccess;
