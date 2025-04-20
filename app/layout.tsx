// app/layout.tsx
import "../styles/globals.css";

export const metadata = {
  title: "Plataforma de Inglés",
  description: "Aprende inglés paso a paso",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
