// app/(with-sidebar)/layout.tsx
import Sidebar from "@/components/Sidebar/Sidebar";

export default function WithSidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="flex min-h-screen bg-background text-foreground">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
