import { NextApiRequest, NextApiResponse } from "next";
import { validateResetToken } from "@/utils/jwt";
import { hashPassword } from "@/utils/bcrypt";

// Simula una base de datos
const users = [
  { email: "user@example.com", password: "hashed-password" }, // Ejemplo
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { token, password } = req.body;

    // Validar token
    const payload = validateResetToken(token);
    if (!payload) {
      return res.status(400).json({ message: "Token inválido o expirado." });
    }

    // Buscar usuario en la base de datos
    const user = users.find((u) => u.email === payload.email);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Encriptar nueva contraseña
    const hashedPassword = await hashPassword(password);

    // Actualizar contraseña del usuario
    user.password = hashedPassword;

    return res.status(200).json({ message: "Contraseña actualizada con éxito." });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Método ${req.method} no permitido`);
}
