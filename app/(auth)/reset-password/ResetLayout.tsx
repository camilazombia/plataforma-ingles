// /app/reset-password/layout.tsx
"use client";

import Image from "next/image";
import ThemeSwitcher from "@/components/Layout/ThemeSwitcher";

export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-foreground">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen max-w-6xl mx-auto px-4 gap-6">
          
          {/* Imagen astronauta (opcional) */}
          <div className="hidden lg:flex justify-center w-1/2">
            <Image
              src="/assets/astronauta.png"
              alt="Astronauta"
              width={300}
              height={300}
              className="max-w-full h-auto"
            />
          </div>

          {/* Contenedor del formulario */}
          <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="flex justify-end mb-4">
              <ThemeSwitcher />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
