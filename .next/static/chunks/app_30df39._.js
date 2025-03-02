(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_30df39._.js", {

"[project]/app/progress/components/BackButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const BackButton = ({ onClick, label = "Volver a Niveles", theme })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentTheme, setCurrentTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(theme || "light"); // Por defecto, modo claro
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackButton.useEffect": ()=>{
            if (!theme) {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setCurrentTheme(prefersDark ? "dark" : "light");
            }
        }
    }["BackButton.useEffect"], [
        theme
    ]);
    const handleBack = ()=>{
        if (onClick) {
            onClick(); // Si se pasa una función personalizada, se ejecuta
        } else {
            router.back(); // Si no, vuelve a la página anterior
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleBack,
        className: "flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium p-2 transition duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: `/assets/${currentTheme}/arrow-left.svg`,
                alt: "Volver",
                width: 20,
                height: 20
            }, void 0, false, {
                fileName: "[project]/app/progress/components/BackButton.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/app/progress/components/BackButton.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(BackButton, "V9VDU0z/A/7EbLAg9b8/8gSnUfQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BackButton;
const __TURBOPACK__default__export__ = BackButton;
var _c;
__turbopack_refresh__.register(_c, "BackButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/progress/components/VideoPlayer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const VideoPlayer = ({ videoUrl })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
        src: videoUrl,
        title: "Video",
        className: "w-full h-64 lg:h-96 rounded-lg shadow-md",
        allowFullScreen: true
    }, void 0, false, {
        fileName: "[project]/app/progress/components/VideoPlayer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
_c = VideoPlayer;
const __TURBOPACK__default__export__ = VideoPlayer;
var _c;
__turbopack_refresh__.register(_c, "VideoPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/progress/components/ModuleInfo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const ModuleInfo = ({ title, subtitle, description })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "h32 mb-4 text-left",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/progress/components/ModuleInfo.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "P16 mb-4 text-left",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/app/progress/components/ModuleInfo.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/progress/components/ModuleInfo.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_c = ModuleInfo;
const __TURBOPACK__default__export__ = ModuleInfo;
var _c;
__turbopack_refresh__.register(_c, "ModuleInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/progress/components/ResourcesList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
const ResourcesList = ({ resources })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 border rounded-lg shadow-md bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-lg text-neutral-700",
                children: "Recursos"
            }, void 0, false, {
                fileName: "[project]/app/progress/components/ResourcesList.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-4",
                children: resources.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-gray-200 rounded"
                            }, void 0, false, {
                                fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold text-neutral-700",
                                        children: resource.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-neutral-500",
                                        children: resource.description || "Sin descripción"
                                    }, void 0, false, {
                                        fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    resource.path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: resource.path,
                                        className: "text-primary hover:underline text-sm",
                                        children: "Ir al recurso →"
                                    }, void 0, false, {
                                        fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                        lineNumber: 27,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-neutral-400 text-sm",
                                        children: "Recurso no disponible"
                                    }, void 0, false, {
                                        fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, resource.id, true, {
                        fileName: "[project]/app/progress/components/ResourcesList.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/progress/components/ResourcesList.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/progress/components/ResourcesList.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_c = ResourcesList;
const __TURBOPACK__default__export__ = ResourcesList;
var _c;
__turbopack_refresh__.register(_c, "ResourcesList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/exams/data/questions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const questionsData = {
    101: [
        {
            question: "What is the first letter of the English alphabet?",
            options: [
                "A",
                "B",
                "C",
                "D"
            ],
            correctAnswer: "A"
        },
        {
            question: "What is 2 + 2?",
            options: [
                "3",
                "4",
                "5",
                "6"
            ],
            correctAnswer: "4"
        },
        {
            question: "Which of these is an even number?",
            options: [
                "1",
                "3",
                "5",
                "2"
            ],
            correctAnswer: "2"
        },
        {
            question: "How many vowels are in the English alphabet?",
            options: [
                "5",
                "6",
                "4",
                "7"
            ],
            correctAnswer: "5"
        }
    ],
    // 📌 Módulo 102: Greetings and Basic Politeness
    102: [
        {
            question: "How do you say 'hello' in English?",
            options: [
                "Hola",
                "Hello",
                "Bonjour",
                "Ciao"
            ],
            correctAnswer: "Hello"
        },
        {
            question: "Which phrase is polite?",
            options: [
                "Give me that",
                "Please, may I have that?",
                "Move!",
                "Do it now"
            ],
            correctAnswer: "Please, may I have that?"
        },
        {
            question: "What do you say when you meet someone for the first time?",
            options: [
                "See you!",
                "What's up?",
                "Nice to meet you",
                "Bye"
            ],
            correctAnswer: "Nice to meet you"
        }
    ],
    // 📌 Módulo 103: Introducing Yourself and Others
    103: [
        {
            question: "How do you introduce yourself?",
            options: [
                "I'm name",
                "My name is...",
                "I name...",
                "Call me is..."
            ],
            correctAnswer: "My name is..."
        },
        {
            question: "Which question is used to ask about someone's name?",
            options: [
                "How are you?",
                "What is your name?",
                "Where are you from?",
                "How old are you?"
            ],
            correctAnswer: "What is your name?"
        },
        {
            question: "How do you respond to 'Nice to meet you'?",
            options: [
                "Me too",
                "You too",
                "Nice to meet you too",
                "Goodbye"
            ],
            correctAnswer: "Nice to meet you too"
        }
    ],
    // 📌 Módulo 104: The Verb to Be in Depth
    104: [
        {
            question: "'I ___ a student.' What is the correct verb?",
            options: [
                "is",
                "are",
                "am",
                "be"
            ],
            correctAnswer: "am"
        },
        {
            question: "'She ___ happy today.' What is the correct verb?",
            options: [
                "am",
                "is",
                "are",
                "be"
            ],
            correctAnswer: "is"
        },
        {
            question: "Which sentence is correct?",
            options: [
                "They am friends",
                "He is my brother",
                "She are a teacher",
                "I be tired"
            ],
            correctAnswer: "He is my brother"
        }
    ],
    // 📌 Módulo 105: Everyday Objects and Basic Adjectives
    105: [
        {
            question: "Which is an adjective?",
            options: [
                "Run",
                "Happy",
                "Table",
                "Speak"
            ],
            correctAnswer: "Happy"
        },
        {
            question: "What is the opposite of 'big'?",
            options: [
                "Small",
                "Fast",
                "Round",
                "Heavy"
            ],
            correctAnswer: "Small"
        },
        {
            question: "Which of these is an object?",
            options: [
                "Angry",
                "Chair",
                "Running",
                "Quickly"
            ],
            correctAnswer: "Chair"
        }
    ],
    // 📌 Módulo 106: Talking About Places and Directions
    106: [
        {
            question: "Which of these is a place?",
            options: [
                "Dog",
                "Park",
                "Happy",
                "Run"
            ],
            correctAnswer: "Park"
        },
        {
            question: "What is the opposite of 'left'?",
            options: [
                "Up",
                "Down",
                "Right",
                "Straight"
            ],
            correctAnswer: "Right"
        },
        {
            question: "How do you say 'gira a la derecha' in English?",
            options: [
                "Turn right",
                "Go left",
                "Turn up",
                "Go down"
            ],
            correctAnswer: "Turn right"
        }
    ],
    // 📌 Módulo 107: Colors, Numbers (21-100), and Dates
    107: [
        {
            question: "What color is the sky?",
            options: [
                "Red",
                "Blue",
                "Green",
                "Yellow"
            ],
            correctAnswer: "Blue"
        },
        {
            question: "What number comes after 29?",
            options: [
                "28",
                "31",
                "30",
                "32"
            ],
            correctAnswer: "30"
        },
        {
            question: "Which of these is a date?",
            options: [
                "Red",
                "Friday",
                "21st September",
                "Hot"
            ],
            correctAnswer: "21st September"
        }
    ],
    // 📌 Módulo 108: Describing People and Things
    108: [
        {
            question: "Which word describes a person?",
            options: [
                "Table",
                "Kind",
                "Walk",
                "Jump"
            ],
            correctAnswer: "Kind"
        },
        {
            question: "What is the opposite of 'tall'?",
            options: [
                "Short",
                "Fast",
                "Thin",
                "Dark"
            ],
            correctAnswer: "Short"
        },
        {
            question: "Which of these words describes a thing?",
            options: [
                "Soft",
                "Quickly",
                "Think",
                "Loudly"
            ],
            correctAnswer: "Soft"
        }
    ],
    // 📌 Módulo 109: Talking About Your Routine
    109: [
        {
            question: "What do you say when you wake up?",
            options: [
                "Good night",
                "Good morning",
                "Good evening",
                "Goodbye"
            ],
            correctAnswer: "Good morning"
        },
        {
            question: "Which activity is part of a daily routine?",
            options: [
                "Sleeping",
                "Flying",
                "Painting",
                "Hiking"
            ],
            correctAnswer: "Sleeping"
        },
        {
            question: "What do people usually do before sleeping?",
            options: [
                "Eat lunch",
                "Watch TV",
                "Go to school",
                "Go to bed"
            ],
            correctAnswer: "Go to bed"
        }
    ],
    // 📌 Módulo 110: Practical Phrases: Shopping and Ordering Food
    110: [
        {
            question: "How do you ask for the price of something?",
            options: [
                "What is the cost?",
                "Where is the price?",
                "Can I have this?",
                "How much is this?"
            ],
            correctAnswer: "How much is this?"
        },
        {
            question: "What do you say when ordering food?",
            options: [
                "Give me this",
                "I want food",
                "I'd like a burger, please",
                "This is mine"
            ],
            correctAnswer: "I'd like a burger, please"
        },
        {
            question: "What do you say when paying?",
            options: [
                "Here's my money",
                "I take this",
                "Can I pay with card?",
                "Put it on my bill"
            ],
            correctAnswer: "Can I pay with card?"
        }
    ],
    // 📌 Módulo 111: Common Questions and Responses
    111: [
        {
            question: "How do you ask someone’s name?",
            options: [
                "What is your name?",
                "How old are you?",
                "Where are you?",
                "Who is that?"
            ],
            correctAnswer: "What is your name?"
        },
        {
            question: "What is a common response to 'How are you'?",
            options: [
                "Yes",
                "I'm fine, thanks",
                "Go away",
                "What's up"
            ],
            correctAnswer: "I'm fine, thanks"
        },
        {
            question: "Which is a polite question?",
            options: [
                "Give me that",
                "Can you help me, please?",
                "Do this now",
                "Move"
            ],
            correctAnswer: "Can you help me, please?"
        }
    ]
};
const __TURBOPACK__default__export__ = questionsData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/exams/components/ExamQuestion.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const ExamQuestion = ({ question, options, selectedAnswer, onSelectAnswer })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 border rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-lg",
                children: question
            }, void 0, false, {
                fileName: "[project]/app/exams/components/ExamQuestion.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-2 space-y-2",
                children: options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSelectAnswer(option),
                            className: `w-full p-2 border rounded ${selectedAnswer === option ? "bg-blue-500 text-white" : "bg-gray-100"}`,
                            children: option
                        }, void 0, false, {
                            fileName: "[project]/app/exams/components/ExamQuestion.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/exams/components/ExamQuestion.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/exams/components/ExamQuestion.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/exams/components/ExamQuestion.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_c = ExamQuestion;
const __TURBOPACK__default__export__ = ExamQuestion;
var _c;
__turbopack_refresh__.register(_c, "ExamQuestion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/exams/components/ExamModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$data$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/exams/data/questions.ts [app-client] (ecmascript)"); // 📌 Ajusta la ruta según sea necesario
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$components$2f$ExamQuestion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/exams/components/ExamQuestion.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const ExamModal = ({ isOpen, onClose, moduleId })=>{
    _s();
    if (!isOpen) return null;
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExamModal.useEffect": ()=>{
            console.log("📌 Buscando preguntas para moduleId:", moduleId);
            console.log("📌 Datos de questionsData:", __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$data$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            if (moduleId && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$data$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][moduleId]) {
                setQuestions(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$data$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][moduleId]);
                setLoading(false);
            } else {
                console.error(`❌ No se encontraron preguntas para el módulo ${moduleId}`);
                setQuestions([]); // 🔥 Evita que `questions` sea undefined
                setLoading(false);
            }
        }
    }["ExamModal.useEffect"], [
        moduleId
    ]);
    const handleAnswer = (selectedOption)=>{
        setAnswers((prev)=>({
                ...prev,
                [currentQuestion]: selectedOption
            }));
    };
    const handleNext = ()=>{
        if (!answers[currentQuestion]) {
            alert("Por favor, selecciona una respuesta.");
            return;
        }
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmit();
        }
    };
    const handlePrevious = ()=>{
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };
    const handleSubmit = ()=>{
        let correctCount = 0;
        questions.forEach((question, index)=>{
            if (answers[index] === question.correctAnswer) {
                correctCount += 1;
            }
        });
        const finalScore = correctCount / questions.length * 10;
        setScore(finalScore);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl h-full overflow-auto relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-4 right-4 text-gray-500 text-lg",
                    children: "✖"
                }, void 0, false, {
                    fileName: "[project]/app/exams/components/ExamModal.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full bg-gray-200 h-2 rounded-full mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-pink-500 h-2 rounded-full transition-all",
                        style: {
                            width: `${(currentQuestion + 1) / questions.length * 100}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/exams/components/ExamModal.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/exams/components/ExamModal.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-center mt-4",
                    children: "Desafío de Conocimiento"
                }, void 0, false, {
                    fileName: "[project]/app/exams/components/ExamModal.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-500",
                    children: "Cargando preguntas..."
                }, void 0, false, {
                    fileName: "[project]/app/exams/components/ExamModal.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this) : questions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-red-500",
                    children: "⚠️ No hay preguntas disponibles para este módulo."
                }, void 0, false, {
                    fileName: "[project]/app/exams/components/ExamModal.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-600",
                            children: questions[currentQuestion]?.title || "Pregunta sin título"
                        }, void 0, false, {
                            fileName: "[project]/app/exams/components/ExamModal.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-right text-gray-500",
                            children: [
                                "Pregunta ",
                                currentQuestion + 1,
                                " de ",
                                questions.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/exams/components/ExamModal.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$components$2f$ExamQuestion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            index: currentQuestion,
                            question: questions[currentQuestion],
                            selectedAnswer: answers[currentQuestion] || "",
                            onSelectAnswer: handleAnswer
                        }, void 0, false, {
                            fileName: "[project]/app/exams/components/ExamModal.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePrevious,
                                    disabled: currentQuestion === 0,
                                    className: "px-4 py-2 border rounded",
                                    children: "Anterior Pregunta"
                                }, void 0, false, {
                                    fileName: "[project]/app/exams/components/ExamModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleNext,
                                    className: "px-4 py-2 bg-pink-500 text-white rounded",
                                    children: currentQuestion === questions.length - 1 ? "Finalizar" : "Siguiente"
                                }, void 0, false, {
                                    fileName: "[project]/app/exams/components/ExamModal.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/exams/components/ExamModal.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/app/exams/components/ExamModal.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/exams/components/ExamModal.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
};
_s(ExamModal, "wqkJwO/R43NJ9qHMW/Zt9aQmOJ4=");
_c = ExamModal;
const __TURBOPACK__default__export__ = ExamModal;
var _c;
__turbopack_refresh__.register(_c, "ExamModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/exams/components/ExamButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$components$2f$ExamModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/exams/components/ExamModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const ExamButton = ({ isDisabled, moduleId, children })=>{
    _s();
    const [isExamOpen, setIsExamOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: isDisabled,
                onClick: ()=>setIsExamOpen(true),
                className: `primary-button ${isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary-dark text-white"}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/app/exams/components/ExamButton.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            isExamOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$components$2f$ExamModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isExamOpen,
                onClose: ()=>setIsExamOpen(false),
                moduleId: moduleId
            }, void 0, false, {
                fileName: "[project]/app/exams/components/ExamButton.tsx",
                lineNumber: 28,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true);
};
_s(ExamButton, "DLuGmYecVVhuxPr/PUkudThPhK8=");
_c = ExamButton;
const __TURBOPACK__default__export__ = ExamButton;
var _c;
__turbopack_refresh__.register(_c, "ExamButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/progress/module/[id]/data/modules.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
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
                subtitle: "No",
                videoUrl: "https://www.youtube.com/embed/example1",
                resources: [
                    {
                        id: 1,
                        name: "Ejercicio del Alfabeto",
                        path: "/resources/1",
                        component: "AlphabetExercise"
                    },
                    {
                        id: 2,
                        name: "Práctica de Números",
                        path: "/resources/2",
                        component: "NumbersPractice"
                    },
                    {
                        id: 3,
                        name: "Guía Básica de Pronunciación",
                        path: "/resources/3",
                        component: "PronunciationGuide"
                    },
                    {
                        id: 4,
                        name: "Hoja de Trabajo: Letras"
                    },
                    {
                        id: 5,
                        name: "Juego de Vocabulario"
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/progress/module/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$BackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/progress/components/BackButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$VideoPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/progress/components/VideoPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$ModuleInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/progress/components/ModuleInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$ResourcesList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/progress/components/ResourcesList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$components$2f$ExamButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/exams/components/ExamButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$components$2f$ExamModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/exams/components/ExamModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$module$2f5b$id$5d2f$data$2f$modules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/progress/module/[id]/data/modules.ts [app-client] (ecmascript)"); // 📌 Ajusta la importación según tu estructura
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
const ModulePage = ()=>{
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const moduleId = Number(id);
    const [isExamOpen, setIsExamOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [module, setModule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModulePage.useEffect": ()=>{
            console.log("🔍 Buscando módulo con ID:", moduleId);
            console.log("📌 Datos de levels:", __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$module$2f5b$id$5d2f$data$2f$modules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$module$2f5b$id$5d2f$data$2f$modules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$module$2f5b$id$5d2f$data$2f$modules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].length === 0) {
                console.error("❌ Error: levels está vacío o no se cargó correctamente.");
                return;
            }
            const allModules = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$module$2f5b$id$5d2f$data$2f$modules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flatMap({
                "ModulePage.useEffect.allModules": (level)=>level.modules
            }["ModulePage.useEffect.allModules"]);
            console.log("📌 Todos los módulos disponibles:", allModules);
            const foundModule = allModules.find({
                "ModulePage.useEffect.foundModule": (m)=>m.id === moduleId
            }["ModulePage.useEffect.foundModule"]);
            if (!foundModule) {
                console.error(`❌ Error: No se encontró el módulo con ID ${moduleId}`);
            }
            setModule(foundModule || null);
        }
    }["ModulePage.useEffect"], [
        moduleId
    ]);
    if (!module) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-red-500",
            children: "⚠️ Módulo no encontrado"
        }, void 0, false, {
            fileName: "[project]/app/progress/module/[id]/page.tsx",
            lineNumber: 41,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 lg:p-8 flex flex-col gap-8 bg-background min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$BackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: ()=>window.history.back()
            }, void 0, false, {
                fileName: "[project]/app/progress/module/[id]/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$ModuleInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: module?.title || "Cargando...",
                                subtitle: module?.subtitle || "",
                                description: module?.description || ""
                            }, void 0, false, {
                                fileName: "[project]/app/progress/module/[id]/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$VideoPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                videoUrl: module?.videoUrl || ""
                            }, void 0, false, {
                                fileName: "[project]/app/progress/module/[id]/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/progress/module/[id]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$components$2f$ExamButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                isDisabled: false,
                                moduleId: moduleId,
                                children: "Comenzar Examen"
                            }, void 0, false, {
                                fileName: "[project]/app/progress/module/[id]/page.tsx",
                                lineNumber: 61,
                                columnNumber: 9
                            }, this),
                            Array.isArray(module?.resources) && module.resources.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$ResourcesList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                resources: module.resources
                            }, void 0, false, {
                                fileName: "[project]/app/progress/module/[id]/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-neutral-500 text-sm",
                                children: "No hay recursos disponibles."
                            }, void 0, false, {
                                fileName: "[project]/app/progress/module/[id]/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/progress/module/[id]/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/progress/module/[id]/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            isExamOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$components$2f$ExamModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isExamOpen,
                onClose: ()=>setIsExamOpen(false),
                moduleId: moduleId
            }, void 0, false, {
                fileName: "[project]/app/progress/module/[id]/page.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/progress/module/[id]/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
_s(ModulePage, "0DufeDvJ3RpEl2docxkxpFIxGPg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ModulePage;
const __TURBOPACK__default__export__ = ModulePage;
var _c;
__turbopack_refresh__.register(_c, "ModulePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/progress/module/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_30df39._.js.map