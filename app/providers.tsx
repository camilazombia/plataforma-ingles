// app/providers.tsx
'use client';

import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAuthPage = pathname === '/login' || pathname.startsWith('/reset-password') || pathname.startsWith('/admin');

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className={`flex min-h-screen bg-background text-foreground ${isAuthPage ? 'justify-center items-center' : ''}`}>
        {!isAuthPage && <Sidebar />}
        <main className={`flex-1 ${isAuthPage ? 'max-w-md w-full' : ''}`}>
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
