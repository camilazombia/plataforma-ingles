import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "mi_secreto";

/**
 * Genera un token JWT para recuperación de contraseña.
 * @param email Correo electrónico del usuario.
 * @returns Token JWT.
 */
export function generateResetToken(email: string): string {
  return jwt.sign({ email }, secret, { expiresIn: "1h" }); // Token válido por 1 hora
}

/**
 * Valida un token JWT de recuperación de contraseña.
 * @param token Token JWT.
 * @returns El correo electrónico contenido en el token o null si es inválido.
 */
export function validateResetToken(token: string): { email: string } | null {
  try {
    return jwt.verify(token, secret) as { email: string };
  } catch (error) {
    return null; // Token inválido o expirado
  }
}
