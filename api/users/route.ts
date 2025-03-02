import { NextResponse } from "next/server";

const users = [
  { id: 1, name: "Juan Pérez", email: "juan@example.com", role: "admin" },
  { id: 2, name: "Ana López", email: "ana@example.com", role: "user" },
];

export async function GET() {
  return NextResponse.json(users);
}
