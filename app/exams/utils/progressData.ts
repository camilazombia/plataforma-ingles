export const levels = [
    {
      id: 1,
      name: "Principiante",
      progress: 50,
      description: "Tu progreso en el nivel inicial.",
      modules: [
        { id: 1, name: "Introducción", status: "completed" },
        { id: 2, name: "Saludos básicos", status: "active" },
        { id: 3, name: "Verbo To Be", status: "locked" },
      ],
      examStatus: "locked",
    },
    {
      id: 2,
      name: "Intermedio",
      progress: 0,
      description: "Desbloquea este nivel al completar el examen anterior.",
      modules: [],
      examStatus: "locked",
    },
  ];
  