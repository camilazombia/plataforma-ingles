import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("authToken");

  // Redirige al login si no hay token
  if (!token && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Aplicar middleware a todas las rutas excepto login y _next
export const config = {
  matcher: ["/((?!login|_next).*)"], // Excluye las rutas /login y archivos de Next.js (_next)
};
