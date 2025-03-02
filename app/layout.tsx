"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Obtén la ruta actual

  // Verifica si la ruta es /login, /reset-password o una subruta de reset-password
  const isAuthPage =
    pathname === "/login" || pathname.startsWith("/reset-password");

  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div
            className={`flex min-h-screen bg-background text-foreground ${
              isAuthPage ? "justify-center items-center" : ""
            }`}
          >
            {/* Sidebar */}
            {!isAuthPage && <Sidebar />} {/* Oculta la barra lateral en las páginas de autenticación */}

            {/* Main content */}
            <main className={`flex-1 ${isAuthPage ? "max-w-md w-full" : ""}`}>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
