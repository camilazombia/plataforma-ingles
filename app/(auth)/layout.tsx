// app/(auth)/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
          {children}
        </main>
      </body>
    </html>
  );
}
