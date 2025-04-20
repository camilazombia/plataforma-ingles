module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/(with-sidebar)/progress/module/[id]/data/modules.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const levels = [
    {
        id: 1,
        title: "Principiante",
        subtitle: "(Starters) A1",
        progress: 100,
        modules: [
            {
                id: 101,
                title: "Getting Started: The English Alphabet and Numbers",
                status: "completed",
                description: "Aprende las bases del alfabeto inglés y números básicos para construir tu vocabulario.",
                subtitle: "Aprende las bases del alfabeto inglés y números básicos para construir tu vocabulario.",
                videoUrl: "/assets/video/Modulo 1.mp4",
                extraText: {
                    downloads: [
                        {
                            label: "Descargar Abecedario",
                            url: "/downloads/abecedario.pdf"
                        },
                        {
                            label: "Guía de Números",
                            url: "/downloads/numeros.pdf"
                        }
                    ]
                },
                resources: [
                    {
                        id: 1,
                        name: "Ejercicio del Alfabeto",
                        path: "/resources/1",
                        component: "AlphabetExercise",
                        description: "esto solo es una prueba",
                        image: "/assets/img/ejercicio-alfabeto.png"
                    },
                    {
                        id: 2,
                        name: "Práctica de Números",
                        path: "/resources/2",
                        component: "NumbersPractice",
                        image: "/assets/img/practica-numeros.png"
                    }
                ]
            },
            {
                id: 102,
                title: "Greetings and Basic Politeness",
                status: "completed",
                description: "Domina las frases comunes y cómo interactuar de manera cortés.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example2",
                resources: [
                    {
                        id: 6,
                        name: "Frases de Saludos"
                    },
                    {
                        id: 7,
                        name: "Guía de Etiqueta Básica"
                    },
                    {
                        id: 8,
                        name: "Hoja de Trabajo: Interacciones"
                    },
                    {
                        id: 9,
                        name: "Ejercicios de Diálogo"
                    },
                    {
                        id: 10,
                        name: "Quiz de Saludos"
                    }
                ]
            },
            {
                id: 103,
                title: "Introducing Yourself and Others",
                status: "completed",
                description: "Aprende cómo presentarte y presentar a otros de manera efectiva.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example3",
                resources: [
                    {
                        id: 11,
                        name: "Frases para Presentaciones"
                    },
                    {
                        id: 12,
                        name: "Hoja de Trabajo: Mi Perfil"
                    },
                    {
                        id: 13,
                        name: "Práctica de Presentaciones"
                    },
                    {
                        id: 14,
                        name: "Ejercicios de Diálogo"
                    },
                    {
                        id: 15,
                        name: "Juego de Roles"
                    }
                ]
            },
            {
                id: 104,
                title: "The Verb to Be in Depth",
                status: "completed",
                description: "Explora las múltiples formas y usos del verbo 'to be' en inglés.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example4",
                resources: [
                    {
                        id: 16,
                        name: "Ejercicios de Verbo To Be"
                    },
                    {
                        id: 17,
                        name: "Guía: Uso Correcto de To Be"
                    },
                    {
                        id: 18,
                        name: "Práctica de Frases"
                    },
                    {
                        id: 19,
                        name: "Hoja de Ejemplos"
                    },
                    {
                        id: 20,
                        name: "Actividad Grupal"
                    }
                ]
            },
            {
                id: 105,
                title: "Everyday Objects and Basic Adjectives",
                status: "completed",
                description: "Aprende cómo describir objetos cotidianos usando adjetivos básicos.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example5",
                resources: [
                    {
                        id: 21,
                        name: "Lista de Objetos Comunes"
                    },
                    {
                        id: 22,
                        name: "Ejercicios de Descripción"
                    },
                    {
                        id: 23,
                        name: "Hoja de Trabajo: Adjetivos"
                    },
                    {
                        id: 24,
                        name: "Juego de Correspondencias"
                    },
                    {
                        id: 25,
                        name: "Actividad de Relación"
                    }
                ]
            },
            {
                id: 106,
                title: "Talking About Places and Directions",
                status: "completed",
                description: "Practica cómo describir lugares y dar direcciones.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example6",
                resources: [
                    {
                        id: 26,
                        name: "Mapa Interactivo"
                    },
                    {
                        id: 27,
                        name: "Ejercicios de Direcciones"
                    },
                    {
                        id: 28,
                        name: "Guía de Lugares Comunes"
                    },
                    {
                        id: 29,
                        name: "Práctica con Mapas"
                    },
                    {
                        id: 30,
                        name: "Actividad de Orientación"
                    }
                ]
            },
            {
                id: 107,
                title: "Colors, Numbers (21-100), and Dates",
                status: "active",
                description: "Aprende a describir colores, números y fechas con fluidez.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example7",
                resources: [
                    {
                        id: 31,
                        name: "Ejercicio de Colores"
                    },
                    {
                        id: 32,
                        name: "Práctica de Números"
                    },
                    {
                        id: 33,
                        name: "Hoja de Trabajo: Fechas"
                    },
                    {
                        id: 34,
                        name: "Actividad de Correspondencia"
                    },
                    {
                        id: 35,
                        name: "Juego de Preguntas"
                    }
                ]
            },
            {
                id: 108,
                title: "Describing People and Things",
                status: "locked",
                description: "Desarrolla habilidades para describir personas y objetos en detalle.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example8",
                resources: [
                    {
                        id: 36,
                        name: "Guía de Adjetivos Comunes"
                    },
                    {
                        id: 37,
                        name: "Práctica de Descripción"
                    },
                    {
                        id: 38,
                        name: "Hoja de Trabajo: Personas"
                    },
                    {
                        id: 39,
                        name: "Ejercicio de Observación"
                    },
                    {
                        id: 40,
                        name: "Juego de Roles"
                    }
                ]
            },
            {
                id: 109,
                title: "Talking About Your Routine",
                status: "locked",
                description: "Domina cómo describir tus actividades diarias.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example9",
                resources: [
                    {
                        id: 41,
                        name: "Ejercicio de Rutinas"
                    },
                    {
                        id: 42,
                        name: "Hoja de Trabajo: Hábitos"
                    },
                    {
                        id: 43,
                        name: "Práctica de Diálogos"
                    },
                    {
                        id: 44,
                        name: "Juego de Preguntas y Respuestas"
                    },
                    {
                        id: 45,
                        name: "Actividad de Escritura"
                    }
                ]
            },
            {
                id: 110,
                title: "Practical Phrases: Shopping and Ordering Food",
                status: "locked",
                description: "Aprende frases útiles para ir de compras y ordenar comida.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example10",
                resources: [
                    {
                        id: 46,
                        name: "Frases Comunes para Compras"
                    },
                    {
                        id: 47,
                        name: "Práctica de Conversaciones"
                    },
                    {
                        id: 48,
                        name: "Hoja de Trabajo: Comida"
                    },
                    {
                        id: 49,
                        name: "Juego de Simulación"
                    },
                    {
                        id: 50,
                        name: "Ejercicio de Escenarios"
                    }
                ]
            },
            {
                id: 111,
                title: "Common Questions and Responses",
                status: "locked",
                description: "Domina preguntas y respuestas frecuentes en inglés.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example11",
                resources: [
                    {
                        id: 51,
                        name: "Lista de Preguntas Frecuentes"
                    },
                    {
                        id: 52,
                        name: "Práctica de Respuestas"
                    },
                    {
                        id: 53,
                        name: "Ejercicio de Diálogos"
                    },
                    {
                        id: 54,
                        name: "Actividad de Parejas"
                    },
                    {
                        id: 55,
                        name: "Hoja de Trabajo: Preguntas"
                    }
                ]
            },
            {
                id: 112,
                title: "Final Practice: Real-Life Scenarios",
                status: "locked",
                description: "Pon en práctica todo lo aprendido en escenarios reales.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example12",
                resources: [
                    {
                        id: 56,
                        name: "Actividad de Escenarios Reales"
                    },
                    {
                        id: 57,
                        name: "Hoja de Trabajo: Práctica Final"
                    },
                    {
                        id: 58,
                        name: "Ejercicios de Escritura"
                    },
                    {
                        id: 59,
                        name: "Práctica de Conversaciones"
                    },
                    {
                        id: 60,
                        name: "Evaluación Final"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Intermedio",
        subtitle: "(Improvers) A2 - B1",
        progress: 0,
        modules: [
            {
                id: 201,
                title: "Building Longer Sentences",
                status: "locked",
                description: "Aprende a construir oraciones más largas y complejas para expresarte mejor.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example21",
                resources: [
                    {
                        id: 61,
                        name: "Ejercicio de Construcción de Oraciones"
                    },
                    {
                        id: 62,
                        name: "Práctica de Conjunciones"
                    },
                    {
                        id: 63,
                        name: "Hoja de Trabajo: Frases Compuestas"
                    },
                    {
                        id: 64,
                        name: "Ejercicio de Escritura"
                    },
                    {
                        id: 65,
                        name: "Juego de Frases Complejas"
                    }
                ]
            },
            {
                id: 202,
                title: "Describing Daily Routines and Habits",
                status: "locked",
                description: "Domina cómo describir rutinas diarias y hábitos en detalle.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example22",
                resources: [
                    {
                        id: 66,
                        name: "Hoja de Trabajo: Rutinas"
                    },
                    {
                        id: 67,
                        name: "Ejercicio de Conversaciones"
                    },
                    {
                        id: 68,
                        name: "Actividad de Observación"
                    },
                    {
                        id: 69,
                        name: "Juego de Rutinas"
                    },
                    {
                        id: 70,
                        name: "Práctica de Escritura"
                    }
                ]
            },
            {
                id: 203,
                title: "Talking About the Past: Past Simple",
                status: "locked",
                description: "Aprende a hablar sobre eventos pasados usando el tiempo pasado simple.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example23",
                resources: [
                    {
                        id: 71,
                        name: "Lista de Verbos en Pasado"
                    },
                    {
                        id: 72,
                        name: "Práctica de Oraciones en Pasado"
                    },
                    {
                        id: 73,
                        name: "Ejercicio de Escritura"
                    },
                    {
                        id: 74,
                        name: "Actividad de Historias Cortas"
                    },
                    {
                        id: 75,
                        name: "Hoja de Trabajo: Pasado Simple"
                    }
                ]
            },
            {
                id: 204,
                title: "Expressing Plans and Intentions: Going to and Will",
                status: "locked",
                description: "Domina cómo expresar planes e intenciones futuras usando 'going to' y 'will'.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example24",
                resources: [
                    {
                        id: 76,
                        name: "Ejercicio de Frases Futuras"
                    },
                    {
                        id: 77,
                        name: "Hoja de Trabajo: Going to y Will"
                    },
                    {
                        id: 78,
                        name: "Práctica de Conversaciones"
                    },
                    {
                        id: 79,
                        name: "Juego de Planes Futuros"
                    },
                    {
                        id: 80,
                        name: "Actividad de Escritura"
                    }
                ]
            },
            {
                id: 205,
                title: "Giving Directions and Talking About Places",
                status: "locked",
                description: "Aprende a dar direcciones claras y hablar sobre lugares específicos.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example25",
                resources: [
                    {
                        id: 81,
                        name: "Mapa Interactivo"
                    },
                    {
                        id: 82,
                        name: "Ejercicios de Direcciones"
                    },
                    {
                        id: 83,
                        name: "Práctica de Mapas"
                    },
                    {
                        id: 84,
                        name: "Juego de Orientación"
                    },
                    {
                        id: 85,
                        name: "Actividad de Escenarios"
                    }
                ]
            },
            {
                id: 206,
                title: "Talking About Preferences and Opinions",
                status: "locked",
                description: "Domina cómo expresar tus preferencias y opiniones en inglés.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example26",
                resources: [
                    {
                        id: 86,
                        name: "Ejercicio de Preferencias"
                    },
                    {
                        id: 87,
                        name: "Hoja de Trabajo: Opiniones"
                    },
                    {
                        id: 88,
                        name: "Actividad de Debate"
                    },
                    {
                        id: 89,
                        name: "Juego de Frases de Opinión"
                    },
                    {
                        id: 90,
                        name: "Práctica de Conversaciones"
                    }
                ]
            },
            {
                id: 207,
                title: "Introduction to Present Perfect",
                status: "locked",
                description: "Familiarízate con el presente perfecto y cómo usarlo en tus conversaciones.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example27",
                resources: [
                    {
                        id: 91,
                        name: "Guía de Presente Perfecto"
                    },
                    {
                        id: 92,
                        name: "Ejercicios de Frases"
                    },
                    {
                        id: 93,
                        name: "Práctica de Conversaciones"
                    },
                    {
                        id: 94,
                        name: "Hoja de Trabajo: Presente Perfecto"
                    },
                    {
                        id: 95,
                        name: "Actividad de Escritura"
                    }
                ]
            },
            {
                id: 208,
                title: "Making Comparisons",
                status: "locked",
                description: "Aprende a hacer comparaciones usando adjetivos y estructuras comunes.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example28",
                resources: [
                    {
                        id: 96,
                        name: "Ejercicio de Comparaciones"
                    },
                    {
                        id: 97,
                        name: "Hoja de Trabajo: Adjetivos Comparativos"
                    },
                    {
                        id: 98,
                        name: "Práctica de Escritura"
                    },
                    {
                        id: 99,
                        name: "Juego de Comparaciones"
                    },
                    {
                        id: 100,
                        name: "Actividad de Parejas"
                    }
                ]
            },
            {
                id: 209,
                title: "Phrasal Verbs for Daily Life",
                status: "locked",
                description: "Domina los phrasal verbs más comunes para la vida diaria.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example29",
                resources: [
                    {
                        id: 101,
                        name: "Lista de Phrasal Verbs"
                    },
                    {
                        id: 102,
                        name: "Ejercicio de Frases"
                    },
                    {
                        id: 103,
                        name: "Práctica de Conversaciones"
                    },
                    {
                        id: 104,
                        name: "Hoja de Trabajo: Phrasal Verbs"
                    },
                    {
                        id: 105,
                        name: "Actividad de Escritura"
                    }
                ]
            },
            {
                id: 210,
                title: "Talking About Places and Directions",
                status: "locked",
                description: "Refuerza tus habilidades para describir lugares y dar direcciones.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example30",
                resources: [
                    {
                        id: 106,
                        name: "Mapa Interactivo"
                    },
                    {
                        id: 107,
                        name: "Ejercicio de Direcciones"
                    },
                    {
                        id: 108,
                        name: "Práctica de Mapas"
                    },
                    {
                        id: 109,
                        name: "Juego de Escenarios"
                    },
                    {
                        id: 110,
                        name: "Actividad de Escritura"
                    }
                ]
            },
            {
                id: 211,
                title: "Handling Real-Life Scenarios",
                status: "locked",
                description: "Practica cómo manejar situaciones reales en inglés.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example31",
                resources: [
                    {
                        id: 111,
                        name: "Ejercicio de Escenarios Reales"
                    },
                    {
                        id: 112,
                        name: "Hoja de Trabajo: Escenarios"
                    },
                    {
                        id: 113,
                        name: "Práctica de Conversaciones"
                    },
                    {
                        id: 114,
                        name: "Juego de Roles"
                    },
                    {
                        id: 115,
                        name: "Actividad de Escritura"
                    }
                ]
            },
            {
                id: 212,
                title: "Final Review: Integration and Practice",
                status: "locked",
                description: "Integra todo lo aprendido en una revisión final y práctica intensiva.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example32",
                resources: [
                    {
                        id: 116,
                        name: "Práctica Integrada"
                    },
                    {
                        id: 117,
                        name: "Hoja de Trabajo: Revisión Final"
                    },
                    {
                        id: 118,
                        name: "Ejercicio de Escenarios"
                    },
                    {
                        id: 119,
                        name: "Actividad de Escritura"
                    },
                    {
                        id: 120,
                        name: "Evaluación Final"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Intermedio - Avanzado",
        subtitle: "(Explorers) B1 – B1+",
        progress: 0,
        modules: [
            {
                id: 301,
                title: "Mastering Past Tenses: Past Simple vs. Present Perfect",
                status: "locked",
                description: "Aprende la diferencia entre el pasado simple y el presente perfecto y cuándo usarlos.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example41",
                resources: [
                    {
                        id: 121,
                        name: "Ejercicios de Pasado Simple y Presente Perfecto"
                    },
                    {
                        id: 122,
                        name: "Hoja de Trabajo: Uso de los Tiempos"
                    },
                    {
                        id: 123,
                        name: "Práctica de Conversaciones"
                    },
                    {
                        id: 124,
                        name: "Juego de Diferencias"
                    },
                    {
                        id: 125,
                        name: "Actividad de Escritura"
                    }
                ]
            },
            {
                id: 302,
                title: "Talking About Future Plans: Future Simple and Going to",
                status: "locked",
                description: "Domina cómo hablar de planes futuros con 'will' y 'going to'.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example42",
                resources: [
                    {
                        id: 126,
                        name: "Ejercicio de Planes Futuros"
                    },
                    {
                        id: 127,
                        name: "Práctica de Conversaciones"
                    },
                    {
                        id: 128,
                        name: "Hoja de Trabajo: Futuro Simple"
                    },
                    {
                        id: 129,
                        name: "Juego de Escenarios Futuros"
                    },
                    {
                        id: 130,
                        name: "Actividad de Escritura"
                    }
                ]
            },
            {
                id: 303,
                title: "Expanding Vocabulary: Describing People, Places, and Things",
                status: "locked",
                description: "Enriquece tu vocabulario con palabras para describir personas, lugares y objetos.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example43",
                resources: [
                    {
                        id: 131,
                        name: "Guía de Descripción Avanzada"
                    },
                    {
                        id: 132,
                        name: "Ejercicios de Expresión"
                    },
                    {
                        id: 133,
                        name: "Juego de Descripciones"
                    },
                    {
                        id: 134,
                        name: "Práctica de Escritura"
                    },
                    {
                        id: 135,
                        name: "Hoja de Trabajo: Vocabulario"
                    }
                ]
            },
            {
                id: 304,
                title: "Expressing Opinions and Preferences",
                status: "locked",
                description: "Aprende cómo dar opiniones y expresar preferencias con mayor fluidez.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example44",
                resources: [
                    {
                        id: 136,
                        name: "Ejercicio de Opiniones"
                    },
                    {
                        id: 137,
                        name: "Hoja de Trabajo: Expresión de Preferencias"
                    },
                    {
                        id: 138,
                        name: "Actividad de Debate"
                    },
                    {
                        id: 139,
                        name: "Juego de Opiniones"
                    },
                    {
                        id: 140,
                        name: "Práctica de Conversaciones"
                    }
                ]
            },
            {
                id: 305,
                title: "Handling Uncertainty: Modal Verbs for Possibility and Advice",
                status: "locked",
                description: "Descubre cómo usar los verbos modales para expresar posibilidad y dar consejos.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example45",
                resources: [
                    {
                        id: 141,
                        name: "Guía de Verbos Modales"
                    },
                    {
                        id: 142,
                        name: "Ejercicio de Consejos"
                    },
                    {
                        id: 143,
                        name: "Hoja de Trabajo: Posibilidades"
                    },
                    {
                        id: 144,
                        name: "Práctica de Escenarios"
                    },
                    {
                        id: 145,
                        name: "Juego de Frases Modales"
                    }
                ]
            },
            {
                id: 306,
                title: "Everyday Situations: Roleplays and Real-Life Scenarios",
                status: "locked",
                description: "Practica situaciones cotidianas con simulaciones de conversaciones reales.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example46",
                resources: [
                    {
                        id: 146,
                        name: "Ejercicio de Roleplay"
                    },
                    {
                        id: 147,
                        name: "Hoja de Trabajo: Conversaciones"
                    },
                    {
                        id: 148,
                        name: "Práctica de Escenarios"
                    },
                    {
                        id: 149,
                        name: "Juego de Situaciones"
                    },
                    {
                        id: 150,
                        name: "Actividad de Parejas"
                    }
                ]
            },
            {
                id: 307,
                title: "Talking About Health and Emergencies",
                status: "locked",
                description: "Aprende el vocabulario y frases necesarias para hablar de salud y emergencias.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example47",
                resources: [
                    {
                        id: 151,
                        name: "Guía de Vocabulario Médico"
                    },
                    {
                        id: 152,
                        name: "Ejercicio de Emergencias"
                    },
                    {
                        id: 153,
                        name: "Práctica de Conversaciones"
                    },
                    {
                        id: 154,
                        name: "Hoja de Trabajo: Situaciones de Salud"
                    },
                    {
                        id: 155,
                        name: "Actividad de Escritura"
                    }
                ]
            },
            {
                id: 308,
                title: "Making Requests and Giving Directions",
                status: "locked",
                description: "Aprende a hacer solicitudes y dar direcciones de manera efectiva.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example48",
                resources: [
                    {
                        id: 156,
                        name: "Ejercicio de Pedidos y Direcciones"
                    },
                    {
                        id: 157,
                        name: "Hoja de Trabajo: Frases Comunes"
                    },
                    {
                        id: 158,
                        name: "Práctica de Conversaciones"
                    },
                    {
                        id: 159,
                        name: "Juego de Simulación"
                    },
                    {
                        id: 160,
                        name: "Actividad de Escritura"
                    }
                ]
            },
            {
                id: 309,
                title: "Cultural Insights: Talking About Traditions and Celebrations",
                status: "locked",
                description: "Aprende sobre las festividades y tradiciones en países de habla inglesa.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example49",
                resources: [
                    {
                        id: 161,
                        name: "Guía de Celebraciones"
                    },
                    {
                        id: 162,
                        name: "Ejercicio de Festividades"
                    },
                    {
                        id: 163,
                        name: "Práctica de Descripción Cultural"
                    },
                    {
                        id: 164,
                        name: "Juego de Trivialidades"
                    },
                    {
                        id: 165,
                        name: "Hoja de Trabajo: Comparaciones Culturales"
                    }
                ]
            },
            {
                id: 310,
                title: "Reading Comprehension and Discussion: Articles and Short Stories",
                status: "locked",
                description: "Mejora tu comprensión lectora con artículos y relatos cortos.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example50",
                resources: [
                    {
                        id: 166,
                        name: "Artículo de Lectura"
                    },
                    {
                        id: 167,
                        name: "Ejercicio de Comprensión"
                    },
                    {
                        id: 168,
                        name: "Hoja de Trabajo: Preguntas"
                    },
                    {
                        id: 169,
                        name: "Actividad de Discusión"
                    },
                    {
                        id: 170,
                        name: "Práctica de Resumen"
                    }
                ]
            },
            {
                id: 311,
                title: "Advanced Pronunciation: Intonation and Stress",
                status: "locked",
                description: "Perfecciona tu pronunciación con técnicas avanzadas de entonación y acento.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example51",
                resources: [
                    {
                        id: 171,
                        name: "Guía de Pronunciación"
                    },
                    {
                        id: 172,
                        name: "Ejercicio de Entonación"
                    },
                    {
                        id: 173,
                        name: "Práctica de Acentuación"
                    },
                    {
                        id: 174,
                        name: "Actividad de Escucha"
                    },
                    {
                        id: 175,
                        name: "Hoja de Trabajo: Fonética"
                    }
                ]
            },
            {
                id: 312,
                title: "Final Review and Practice: Mixed Scenarios",
                status: "locked",
                description: "Pon a prueba tu nivel con ejercicios integrados y escenarios combinados.",
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example52",
                resources: [
                    {
                        id: 176,
                        name: "Práctica de Escenarios"
                    },
                    {
                        id: 177,
                        name: "Evaluación Final"
                    },
                    {
                        id: 178,
                        name: "Ejercicio de Resumen"
                    },
                    {
                        id: 179,
                        name: "Actividad de Escritura"
                    },
                    {
                        id: 180,
                        name: "Hoja de Trabajo: Integración"
                    }
                ]
            }
        ]
    }
];
const __TURBOPACK__default__export__ = levels;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/(with-sidebar)/progress/components/ModuleCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
const ModuleCard = ({ id, title, status })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const moduleUrl = status === "locked" ? "#" : `/progress/module/${id}`;
    // 🎨 **Clases CSS según el estado del módulo**
    const statusClass = {
        completed: "module-card-completed",
        active: "module-card-active",
        locked: "module-card-locked cursor-not-allowed opacity-60"
    };
    // 🔹 **Íconos según el estado y tema (light/dark)**
    const statusIcons = {
        completed: theme === "dark" ? "/assets/dark/check.svg" : "/assets/light/check.svg",
        active: theme === "dark" ? "/assets/dark/lock-open.svg" : "/assets/light/lock-open.svg",
        locked: theme === "dark" ? "/assets/dark/lock.svg" : "/assets/light/lock.svg"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: moduleUrl,
        passHref: true,
        legacyBehavior: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `module p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 flex justify-between items-center ${statusClass[status]}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/app/(with-sidebar)/progress/components/ModuleCard.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "module-icon",
                    src: statusIcons[status],
                    alt: status,
                    width: 24,
                    height: 24
                }, void 0, false, {
                    fileName: "[project]/app/(with-sidebar)/progress/components/ModuleCard.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(with-sidebar)/progress/components/ModuleCard.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(with-sidebar)/progress/components/ModuleCard.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ModuleCard;
}}),
"[project]/app/(with-sidebar)/progress/components/Levelprogressbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const LevelProgressBar = ({ progressState })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])(); // 🌙 Detectar si el usuario está en modo oscuro o claro
    // 📌 Ruta de la imagen según el tema
    const imagePath = `/assets/${theme === "dark" ? "dark" : "light"}/${progressState}.png`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex justify-center w-full max-w-3xl p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: imagePath,
            alt: `Progreso: ${progressState}`,
            width: 737,
            height: 103,
            className: "rounded-lg"
        }, void 0, false, {
            fileName: "[project]/app/(with-sidebar)/progress/components/Levelprogressbar.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(with-sidebar)/progress/components/Levelprogressbar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LevelProgressBar;
}}),
"[project]/app/(with-sidebar)/progress/components/UserProgress.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$components$2f$Levelprogressbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(with-sidebar)/progress/components/Levelprogressbar.tsx [app-ssr] (ecmascript)");
;
;
const UserProgress = ({ username, progressState })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold text-center",
                children: "Bienvenido(a) (Welcome)"
            }, void 0, false, {
                fileName: "[project]/app/(with-sidebar)/progress/components/UserProgress.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-extrabold text-center",
                children: username
            }, void 0, false, {
                fileName: "[project]/app/(with-sidebar)/progress/components/UserProgress.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$components$2f$Levelprogressbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                progressState: progressState
            }, void 0, false, {
                fileName: "[project]/app/(with-sidebar)/progress/components/UserProgress.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(with-sidebar)/progress/components/UserProgress.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = UserProgress;
}}),
"[project]/app/(with-sidebar)/exams/components/ExamButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
const ExamButton = ({ isDisabled, moduleId, children, variant = "primary" })=>{
    const buttonClass = isDisabled ? "button--disabled cursor-not-allowed" : variant === "primary" ? "button--primary" : "button--secondary";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: isDisabled ? "#" : `/exams/${moduleId}`,
        passHref: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            disabled: isDisabled,
            "aria-disabled": isDisabled,
            className: buttonClass,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/(with-sidebar)/exams/components/ExamButton.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(with-sidebar)/exams/components/ExamButton.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ExamButton;
}}),
"[project]/app/(with-sidebar)/exams/components/LevelCompletionModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const LevelCompletionModal = ({ level, username, onClose })=>{
    // Mapear íconos y textos según el nivel
    const levelData = {
        Principiante: {
            title: `¡Felicidades, ${username}!`,
            description: "Has completado el Nivel Principiante.",
            icon: "/assets/level-1-completed.png"
        },
        Intermedio: {
            title: `¡Felicidades, ${username}!`,
            description: "Has completado el Nivel Intermedio.",
            icon: "/assets/level-2-completed.png"
        },
        Avanzado: {
            title: `Congratulations, ${username}!`,
            description: "You’ve completed the Advanced Level.",
            icon: "/assets/level-3-completed.png"
        }
    };
    const { title, description, icon } = levelData[level];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-4 right-4 text-neutral-600 hover:text-primary",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/app/(with-sidebar)/exams/components/LevelCompletionModal.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: icon,
                            alt: `Nivel ${level} completado`,
                            className: "w-24 h-24"
                        }, void 0, false, {
                            fileName: "[project]/app/(with-sidebar)/exams/components/LevelCompletionModal.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "H32 text-primary-900",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/(with-sidebar)/exams/components/LevelCompletionModal.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "P16 text-neutral-600",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/app/(with-sidebar)/exams/components/LevelCompletionModal.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>alert("Navegar al certificado"),
                            className: "button--secondary mt-4",
                            children: "Ver Certificado"
                        }, void 0, false, {
                            fileName: "[project]/app/(with-sidebar)/exams/components/LevelCompletionModal.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(with-sidebar)/exams/components/LevelCompletionModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(with-sidebar)/exams/components/LevelCompletionModal.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(with-sidebar)/exams/components/LevelCompletionModal.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LevelCompletionModal;
}}),
"[project]/app/(with-sidebar)/progress/components/ProgressBar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ProgressBar = ({ progress })=>{
    // 🛠️ Asegurar que el progreso mínimo sea al menos visible
    const adjustedProgress = progress < 5 && progress > 0 ? 5 : progress;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-600 font-medium",
                        children: "Tu progreso:"
                    }, void 0, false, {
                        fileName: "[project]/app/(with-sidebar)/progress/components/ProgressBar.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-primary-600 font-semibold",
                        children: [
                            progress.toFixed(0),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(with-sidebar)/progress/components/ProgressBar.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(with-sidebar)/progress/components/ProgressBar.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full bg-gray-200 h-3 rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: `${adjustedProgress}%`
                    },
                    className: "h-full bg-primary-600 transition-all duration-500 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/app/(with-sidebar)/progress/components/ProgressBar.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(with-sidebar)/progress/components/ProgressBar.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(with-sidebar)/progress/components/ProgressBar.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ProgressBar;
}}),
"[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$module$2f5b$id$5d2f$data$2f$modules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(with-sidebar)/progress/module/[id]/data/modules.ts [app-ssr] (ecmascript)"); // ✅ Asegúrate de que la ruta es correcta
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$components$2f$ModuleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(with-sidebar)/progress/components/ModuleCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$components$2f$UserProgress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(with-sidebar)/progress/components/UserProgress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$exams$2f$components$2f$ExamButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(with-sidebar)/exams/components/ExamButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$exams$2f$components$2f$LevelCompletionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(with-sidebar)/exams/components/LevelCompletionModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(with-sidebar)/progress/components/ProgressBar.tsx [app-ssr] (ecmascript)"); // ✅ Importamos la barra de progreso
"use client";
;
;
;
;
;
;
;
;
const ProgressPage = ()=>{
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentLevel, setCurrentLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Principiante");
    const [isExamCompleted, setIsExamCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ✅ Función para determinar el estado del progreso del usuario
    const getProgressState = ()=>{
        const completedLevels = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$module$2f5b$id$5d2f$data$2f$modules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((level)=>level.modules.every((module)=>module.status === "completed")).length;
        if (completedLevels === 0) return "pre-principiante";
        if (completedLevels === 1) return "principiante-completado";
        if (completedLevels === 2) return "intermedio-completado";
        return "avanzado-completado";
    };
    const handleExamCompletion = (levelTitle)=>{
        setCurrentLevel(levelTitle);
        setShowModal(true);
        setIsExamCompleted(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$components$2f$UserProgress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                username: "Camila Gómez",
                progressState: getProgressState()
            }, void 0, false, {
                fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$module$2f5b$id$5d2f$data$2f$modules$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map((level)=>{
                    const completedModules = level.modules.filter((module)=>module.status === "completed").length;
                    const totalModules = level.modules.length;
                    const progressPercentage = totalModules > 0 ? completedModules / totalModules * 100 : 0; // 📊 Calculamos el progreso
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 card-level",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "heading-level",
                                children: level.title
                            }, void 0, false, {
                                fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "subtitle-level",
                                children: level.subtitle
                            }, void 0, false, {
                                fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$components$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                progress: progressPercentage
                            }, void 0, false, {
                                fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: level.modules.map((module)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$components$2f$ModuleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        id: module.id,
                                        title: module.title,
                                        status: module.status
                                    }, module.id, false, {
                                        fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
                                        lineNumber: 57,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "p16 text-neutral-600 mb-4",
                                        children: completedModules === totalModules ? `Avanza al examen del nivel ${level.title}` : `Inicia el examen del nivel ${level.title}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$exams$2f$components$2f$ExamButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        isDisabled: completedModules !== totalModules || isExamCompleted,
                                        onClick: ()=>handleExamCompletion(level.title),
                                        children: "Comenzar examen"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this)
                        ]
                    }, level.id, true, {
                        fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$exams$2f$components$2f$LevelCompletionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                level: currentLevel,
                username: "Camila Gómez",
                onClose: ()=>setShowModal(false)
            }, void 0, false, {
                fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ProgressPage;
}}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/(with-sidebar)/page.tsx
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$pages$2f$ProgressPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(with-sidebar)/progress/pages/ProgressPage.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$with$2d$sidebar$292f$progress$2f$pages$2f$ProgressPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d94f5d24._.js.map