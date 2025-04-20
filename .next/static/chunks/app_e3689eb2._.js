(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/progress/components/BackButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
__turbopack_context__.k.register(_c, "BackButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/progress/components/VideoPlayer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const VideoPlayer = ({ videoUrl })=>{
    const isEmbed = videoUrl.includes("youtube") || videoUrl.includes("vimeo");
    if (!videoUrl) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full aspect-video bg-black rounded-lg shadow-md overflow-hidden",
        children: isEmbed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: videoUrl,
            title: "Video",
            className: "w-full h-full",
            allowFullScreen: true
        }, void 0, false, {
            fileName: "[project]/app/progress/components/VideoPlayer.tsx",
            lineNumber: 13,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            src: videoUrl,
            className: "w-full h-full",
            controls: true,
            preload: "metadata",
            controlsList: "nodownload",
            onContextMenu: (e)=>e.preventDefault()
        }, void 0, false, {
            fileName: "[project]/app/progress/components/VideoPlayer.tsx",
            lineNumber: 20,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/progress/components/VideoPlayer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = VideoPlayer;
const __TURBOPACK__default__export__ = VideoPlayer;
var _c;
__turbopack_context__.k.register(_c, "VideoPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/progress/components/ModuleInfo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
__turbopack_context__.k.register(_c, "ModuleInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/progress/components/ResourcesList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ResourcesList = ({ resources })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResourcesList.useEffect": ()=>{
            setMounted(true);
        }
    }["ResourcesList.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "resource-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "resource-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: `/assets/${theme === "dark" ? "dark" : "light"}/resources-icon.svg`,
                                alt: "Icono recursos",
                                width: 32,
                                height: 32
                            }, void 0, false, {
                                fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "resource-title",
                                children: "Recursos"
                            }, void 0, false, {
                                fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/progress/components/ResourcesList.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "#",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "resource-link",
                            children: "Ver todo"
                        }, void 0, false, {
                            fileName: "[project]/app/progress/components/ResourcesList.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/progress/components/ResourcesList.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/progress/components/ResourcesList.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "resource-list",
                children: resources.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "resource-item",
                        children: resource.path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: resource.path,
                            className: "flex gap-3 no-underline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "resource-thumbnail",
                                    children: resource.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: resource.image,
                                        alt: resource.name,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                        lineNumber: 51,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 bg-gray-300 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                        lineNumber: 57,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                    lineNumber: 49,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "resource-name",
                                            children: resource.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "resource-description",
                                            children: resource.description || "Sin descripción"
                                        }, void 0, false, {
                                            fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/progress/components/ResourcesList.tsx",
                            lineNumber: 48,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "resource-thumbnail",
                                    children: resource.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: resource.image,
                                        alt: resource.name,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                        lineNumber: 72,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 bg-gray-300 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                        lineNumber: 78,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "resource-name",
                                            children: resource.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "resource-description",
                                            children: resource.description || "Sin descripción"
                                        }, void 0, false, {
                                            fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/progress/components/ResourcesList.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/progress/components/ResourcesList.tsx",
                            lineNumber: 69,
                            columnNumber: 15
                        }, this)
                    }, resource.id, false, {
                        fileName: "[project]/app/progress/components/ResourcesList.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/progress/components/ResourcesList.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/progress/components/ResourcesList.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
_s(ResourcesList, "oSt1G6qmSQxWcV8OIqjpLRFbJ0c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ResourcesList;
const __TURBOPACK__default__export__ = ResourcesList;
var _c;
__turbopack_context__.k.register(_c, "ResourcesList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/exams/components/ExamButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
const ExamButton = ({ isDisabled, moduleId, children, variant = "primary" })=>{
    const buttonClass = isDisabled ? "button--disabled cursor-not-allowed" : variant === "primary" ? "button--primary" : "button--secondary";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: isDisabled ? "#" : `/exams/${moduleId}`,
        passHref: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            disabled: isDisabled,
            "aria-disabled": isDisabled,
            className: buttonClass,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/exams/components/ExamButton.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/exams/components/ExamButton.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
_c = ExamButton;
const __TURBOPACK__default__export__ = ExamButton;
var _c;
__turbopack_context__.k.register(_c, "ExamButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/progress/module/[id]/data/modules.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/progress/module/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$BackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/progress/components/BackButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$VideoPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/progress/components/VideoPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$ModuleInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/progress/components/ModuleInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$ResourcesList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/progress/components/ResourcesList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$components$2f$ExamButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/exams/components/ExamButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$module$2f5b$id$5d2f$data$2f$modules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/progress/module/[id]/data/modules.ts [app-client] (ecmascript)"); // 📌 Ajusta si la ruta es distinta
;
var _s = __turbopack_context__.k.signature();
"use client";
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
            lineNumber: 40,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 lg:p-6 xl:p-8 flex flex-col gap-6 bg-background min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$BackButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: ()=>window.history.back()
            }, void 0, false, {
                fileName: "[project]/app/progress/module/[id]/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$ModuleInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: module?.title || "Cargando...",
                        subtitle: module?.subtitle || "",
                        description: module?.description || ""
                    }, void 0, false, {
                        fileName: "[project]/app/progress/module/[id]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$exams$2f$components$2f$ExamButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isDisabled: false,
                        moduleId: moduleId,
                        children: "Presenta el test del módulo"
                    }, void 0, false, {
                        fileName: "[project]/app/progress/module/[id]/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/progress/module/[id]/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-2/3 flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$VideoPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                videoUrl: module?.videoUrl || ""
                            }, void 0, false, {
                                fileName: "[project]/app/progress/module/[id]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-sm text-neutral-700",
                                        children: "📚 Recursos adicionales para tu aprendizaje"
                                    }, void 0, false, {
                                        fileName: "[project]/app/progress/module/[id]/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-neutral-600",
                                        children: "A continuación encontrarás materiales complementarios que te ayudarán a reforzar lo aprendido en este módulo. Puedes descargarlos y usarlos para practicar en cualquier momento."
                                    }, void 0, false, {
                                        fileName: "[project]/app/progress/module/[id]/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    Array.isArray(module.extraText?.downloads) && module.extraText.downloads.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 space-y-1",
                                        children: module.extraText.downloads.map((res, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: res.url,
                                                    className: "text-pink-600 text-sm underline hover:text-pink-800",
                                                    download: true,
                                                    children: res.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/progress/module/[id]/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 9
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/app/progress/module/[id]/page.tsx",
                                                lineNumber: 80,
                                                columnNumber: 7
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/progress/module/[id]/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 3
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/progress/module/[id]/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/progress/module/[id]/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-1/3",
                        children: Array.isArray(module?.resources) && module.resources.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$progress$2f$components$2f$ResourcesList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            resources: module.resources
                        }, void 0, false, {
                            fileName: "[project]/app/progress/module/[id]/page.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-neutral-500 text-sm",
                            children: "No hay recursos disponibles."
                        }, void 0, false, {
                            fileName: "[project]/app/progress/module/[id]/page.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/progress/module/[id]/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/progress/module/[id]/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            isExamOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExamModal, {
                isOpen: isExamOpen,
                onClose: ()=>setIsExamOpen(false),
                moduleId: moduleId
            }, void 0, false, {
                fileName: "[project]/app/progress/module/[id]/page.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/progress/module/[id]/page.tsx",
        lineNumber: 44,
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
__turbopack_context__.k.register(_c, "ModulePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_e3689eb2._.js.map