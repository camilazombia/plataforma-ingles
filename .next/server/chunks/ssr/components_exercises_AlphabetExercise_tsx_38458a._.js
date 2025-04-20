module.exports = {

"[project]/components/exercises/AlphabetExercise.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const letterAudioList = [
    {
        letter: "t",
        file: "y-21.mp3"
    },
    {
        letter: "n",
        file: "y-14.mp3"
    },
    {
        letter: "j",
        file: "y-10.mp3"
    },
    {
        letter: "o",
        file: "y-16.mp3"
    },
    {
        letter: "a",
        file: "y-01.mp3"
    },
    {
        letter: "f",
        file: "y-06.mp3"
    },
    {
        letter: "v",
        file: "y-23.mp3"
    },
    {
        letter: "b",
        file: "y-02.mp3"
    },
    {
        letter: "y",
        file: "y-26.mp3"
    },
    {
        letter: "i",
        file: "y-09.mp3"
    },
    {
        letter: "h",
        file: "y-08.mp3"
    },
    {
        letter: "w",
        file: "y-24.mp3"
    },
    {
        letter: "d",
        file: "y-04.mp3"
    },
    {
        letter: "e",
        file: "y-05.mp3"
    },
    {
        letter: "k",
        file: "y-11.mp3"
    },
    {
        letter: "c",
        file: "y-03.mp3"
    },
    {
        letter: "s",
        file: "y-20.mp3"
    },
    {
        letter: "x",
        file: "y-25.mp3"
    },
    {
        letter: "z",
        file: "y-27.mp3"
    },
    {
        letter: "l",
        file: "y-12.mp3"
    },
    {
        letter: "m",
        file: "y-13.mp3"
    },
    {
        letter: "g",
        file: "y-07.mp3"
    },
    {
        letter: "r",
        file: "y-19.mp3"
    },
    {
        letter: "q",
        file: "y-18.mp3"
    },
    {
        letter: "u",
        file: "y-22.mp3"
    },
    {
        letter: "p",
        file: "y-17.mp3"
    }
];
const AlphabetExercise = ()=>{
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Array(letterAudioList.length).fill(""));
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Array(letterAudioList.length).fill(null));
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const playAudio = (file)=>{
        const audio = new Audio(`/assets/audio/${file}`);
        audio.play();
    };
    const handleChange = (index, value)=>{
        const updatedAnswers = [
            ...answers
        ];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
        if (submitted) {
            const isCorrect = value.toLowerCase() === letterAudioList[index].letter;
            const updatedFeedback = [
                ...feedback
            ];
            updatedFeedback[index] = isCorrect;
            setFeedback(updatedFeedback);
        }
    };
    const handleSubmit = ()=>{
        const newFeedback = answers.map((val, i)=>val.toLowerCase() === letterAudioList[i].letter);
        setFeedback(newFeedback);
        setSubmitted(true);
    };
    const handleReset = ()=>{
        setAnswers(Array(letterAudioList.length).fill(""));
        setFeedback(Array(letterAudioList.length).fill(null));
        setSubmitted(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkshopLayout, {
        title: "Ejercicio del Alfabeto",
        description: "Presiona el botón para escuchar una letra y escribe la letra correspondiente.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4",
                children: letterAudioList.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>playAudio(item.file),
                                className: "hover:opacity-80",
                                "aria-label": `Reproducir letra ${index + 1}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: `/assets/${theme === "dark" ? "dark" : "light"}/play.svg`,
                                    alt: "Reproducir",
                                    width: 24,
                                    height: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/exercises/AlphabetExercise.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/exercises/AlphabetExercise.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                maxLength: 1,
                                value: answers[index],
                                onChange: (e)=>handleChange(index, e.target.value),
                                className: "border rounded-md px-2 py-1 text-center w-10",
                                "aria-label": `Respuesta letra ${index + 1}`
                            }, void 0, false, {
                                fileName: "[project]/components/exercises/AlphabetExercise.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            feedback[index] !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: `/assets/${theme === "dark" ? "dark" : "light"}/${feedback[index] ? "correct.svg" : "wrong.svg"}`,
                                alt: feedback[index] ? "Correcto" : "Incorrecto",
                                width: 20,
                                height: 20
                            }, void 0, false, {
                                fileName: "[project]/components/exercises/AlphabetExercise.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/exercises/AlphabetExercise.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/exercises/AlphabetExercise.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSubmit,
                        className: "button--primary button",
                        children: "Revisar"
                    }, void 0, false, {
                        fileName: "[project]/components/exercises/AlphabetExercise.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleReset,
                        className: "button--secondary button",
                        children: "Reiniciar"
                    }, void 0, false, {
                        fileName: "[project]/components/exercises/AlphabetExercise.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/exercises/AlphabetExercise.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/exercises/AlphabetExercise.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AlphabetExercise;
}}),

};

//# sourceMappingURL=components_exercises_AlphabetExercise_tsx_38458a._.js.map