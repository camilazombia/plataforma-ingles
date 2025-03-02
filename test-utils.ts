import { hashPassword, comparePasswords } from "./utils/bcrypt";
import { generateResetToken, validateResetToken } from "./utils/jwt";

(async () => {
  // Probar bcrypt
  const password = "mi_contraseña_segura";
  const hashedPassword = await hashPassword(password);
  console.log("Contraseña encriptada:", hashedPassword);

  const isMatch = await comparePasswords(password, hashedPassword);
  console.log("¿Las contraseñas coinciden?", isMatch); // true

  // Probar JWT
  const token = generateResetToken("user@example.com");
  console.log("Token generado:", token);

  const payload = validateResetToken(token);
  console.log("Datos validados:", payload); // { email: "user@example.com" }
})();
