import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import { generateResetToken } from "@/utils/jwt";

// Simula una base de datos
const users = [
  { email: "camilagomez2307@gmail.com", password: "$2b$10$..." },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ message: "Correo inválido." });
    }

    const user = users.find((u) => u.email === email);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    const token = generateResetToken(email);
    const resetLink = `https://tu-app.com/reset-password?token=${token}`;

    try {
      // Configuración de Nodemailer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // Tu correo de Gmail
          pass: process.env.EMAIL_PASSWORD, // Tu contraseña de aplicación
        },
      });

      // Enviar correo
      await transporter.sendMail({
        from: `Soporte <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Recuperación de contraseña",
        html: `
          <h2>Recuperación de contraseña</h2>
          <p>Haz clic en el enlace para restablecer tu contraseña:</p>
          <a href="${resetLink}">${resetLink}</a>
        `,
      });

      res.status(200).json({ message: "Correo enviado con éxito." });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).json({ message: "Error al enviar el correo." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Método no permitido");
  }
}
