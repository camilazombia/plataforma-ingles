import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken");

  const protectedPaths = ["/admin", "/dashboard", "/profile", "/certificates", "/progress", "/exams"];
  const isProtected = protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path));

  const isLoginOrReset = req.nextUrl.pathname === "/login" || req.nextUrl.pathname.startsWith("/reset-password");

  if (!token && isProtected && !isLoginOrReset) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// ✔️ Aplica el middleware solo en las rutas que empiezan con estas secciones
export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/dashboard",
    "/dashboard/:path*",
    "/profile",
    "/profile/:path*",
    "/certificates",
    "/certificates/:path*",
    "/progress",
    "/progress/:path*",
    "/exams",
    "/exams/:path*",
    "/support", // 🔹 Agrega esta si también quieres protegerla
    "/support/:path*",
  ],
};

