import { levels } from "./progressData";

export const unlockNextModule = (currentModuleId: number) => {
  // Hacer una copia de los niveles para evitar modificar el estado original
  const updatedLevels = [...levels];

  for (const level of updatedLevels) {
    for (let i = 0; i < level.modules.length; i++) {
      if (level.modules[i].id === currentModuleId && level.modules[i + 1]) {
        level.modules[i + 1].status = "active"; // Desbloquea el siguiente módulo
        return updatedLevels; // Devuelve la nueva versión de los niveles
      }
    }
  }

  return updatedLevels; // Si no encuentra nada, devuelve el mismo array
};
