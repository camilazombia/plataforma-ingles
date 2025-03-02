import bcrypt from "bcrypt";

/**
 * Encripta una contraseña utilizando bcrypt.
 * @param password Contraseña en texto plano.
 * @returns Contraseña encriptada.
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

/**
 * Compara una contraseña en texto plano con una encriptada.
 * @param password Contraseña en texto plano.
 * @param hashedPassword Contraseña encriptada.
 * @returns Boolean indicando si coinciden.
 */
export async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}
