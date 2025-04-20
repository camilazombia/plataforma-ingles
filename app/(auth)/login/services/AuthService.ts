const mockUsers = [
  { email: "test@example.com", password: "password123", name: "Usuario Test" },
  { email: "admin@example.com", password: "adminpass", name: "Admin" },
  { email: "user@example.com", password: "userpass", name: "Usuario Normal" },
];

const AuthService = {
  login: async (username: string, password: string, rememberMe: boolean): Promise<{ name: string }> => {
    return new Promise((resolve, reject) => {
      // Validaciones básicas
      if (!username || !password) {
        reject(new Error("Por favor, completa todos los campos."));
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(username)) {
        reject(new Error("El correo electrónico no es válido."));
        return;
      }

      if (password.length < 6) {
        reject(new Error("La contraseña debe tener al menos 6 caracteres."));
        return;
      }

      // Simulación de autenticación con usuarios de prueba
      setTimeout(() => {
        const user = mockUsers.find((u) => u.email === username && u.password === password);

        if (user) {
          const userData = { name: user.name, email: user.email };

          if (rememberMe) {
            localStorage.setItem("user", JSON.stringify(userData)); // Guardar en localStorage (recordar sesión)
          } else {
            sessionStorage.setItem("user", JSON.stringify(userData)); // Guardar en sessionStorage (sesión temporal)
          }

          resolve(userData);
        } else {
          reject(new Error("Credenciales incorrectas. Verifica tu correo y contraseña."));
        }
      }, 1000); // Simulación de retardo en la respuesta
    });
  },

  logout: () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
  },

  getCurrentUser: () => {
    const user = localStorage.getItem("user") || sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },
};

export default AuthService;
