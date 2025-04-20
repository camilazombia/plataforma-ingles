const certificatesData = [
  {
    id: 1,
    title: 'Principiante',
    subtitle: '(Starters) A1',
    status: 'completed',
    image: '/assets/certifications-level-1-completed.png',
    lockedImage: '/assets/certifications-level-1-locked.png',
    titleLocked: '¿Estás listo para empezar?',
    titleUnlocked: '¡Felicidades por completar el Nivel Principiante!',
    descriptionLocked:
      'Completa este nivel inicial para desbloquear tu certificado de principiante y dar el primer paso hacia el éxito.¡Es tu momento de brillar! 🚀🎓',
    descriptionUnlocked:
      'Has dado el primer paso en tu viaje de aprendizaje. Este es solo el comienzo de grandes logros.¡Sigue avanzando, estamos contigo en cada paso del camino!',
    shareUrl: 'https://example.com/certificate/1',
  },
  {
    id: 2,
    title: 'Intermedio',
    subtitle: '(Improvers) A2 - B1',
    status: 'locked',
    image: '/assets/certifications-level-2-completed.png',
    lockedImage: '/assets/certifications-level-2-locked.png',
    titleLocked: '¡Sigue avanzando para obtener tu recompensa!',
    titleUnlocked: '¡Increíble trabajo al completar el Nivel Intermedio!',
    descriptionLocked:
      'Completa este nivel para desbloquear el certificado y celebrar tu logro. ¡Estás a un paso de alcanzarlo! 🚀',
    descriptionUnlocked:
      'Estás avanzando rápidamente y demostrando tu compromiso. Ahora estás listo para enfrentarte al desafío del Nivel Intermedio - Avanzado. ¡Sigue superándote, el éxito está a tu alcance!',
    shareUrl: 'https://example.com/certificate/2',
  },
  {
    id: 3,
    title: 'Intermedio - Avanzado',
    subtitle: '(Explorers) B1 – B1+',
    status: 'locked',
    image: '/assets/certifications-level-3-completed.png',
    lockedImage: '/assets/certifications-level-3-locked.png',
    titleLocked: 'Congratulations on reaching the final level!',
    titleUnlocked: 'Congratulations on your amazing achievement!',
    descriptionLocked:
      'You have made it to the end—complete this stage to unlock your certificate and showcase your achievement. The finish line is just one step away! 🏆',
    descriptionUnlocked:
      'Celebrate this special moment by sharing it with your family, friends, colleagues, and the entire community. Your hard work and dedication deserve to be recognized!',
    shareUrl: 'https://example.com/certificate/3',
  },
];

export default certificatesData;
