export const getUserProgress = async () => {
    return new Promise<{ completedLevels: number[] }>((resolve) => {
      setTimeout(() => {
        resolve({ completedLevels: [1, 2] }); // Simulación: El usuario ha completado niveles 1 y 2
      }, 1000);
    });
  };
  