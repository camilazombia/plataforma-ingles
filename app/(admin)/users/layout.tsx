export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen bg-gray-100">
        <nav className="p-4 bg-blue-600 text-white">Admin Panel</nav>
        <main className="p-6">{children}</main>
      </div>
    );
  }
  