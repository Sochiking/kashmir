module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/data/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "products",
    ()=>products
]);
const products = [
    {
        id: '1',
        slug: 'nova-x-pro-5g',
        name: 'Nova X Pro 5G',
        category: 'Phones',
        price: 485000,
        oldPrice: 520000,
        badge: 'Best Seller',
        rating: 4.8,
        image: '/products/phone-blue.svg',
        description: 'A premium 5G smartphone with a vivid display, powerful camera system and all-day battery life.',
        features: [
            '6.7-inch AMOLED display',
            '256GB storage',
            '50MP triple camera',
            '5000mAh battery'
        ]
    },
    {
        id: '2',
        slug: 'pulse-buds-pro',
        name: 'Pulse Buds Pro',
        category: 'Earbuds',
        price: 38500,
        badge: 'New Arrival',
        rating: 4.7,
        image: '/products/earbuds.svg',
        description: 'Wireless earbuds with clear calls, rich bass and a compact charging case.',
        features: [
            'Active noise reduction',
            '30-hour total battery',
            'USB-C charging',
            'Low-latency mode'
        ]
    },
    {
        id: '3',
        slug: 'swiftcharge-45w',
        name: 'SwiftCharge 45W Adapter',
        category: 'Chargers',
        price: 18500,
        rating: 4.6,
        image: '/products/charger.svg',
        description: 'Fast and reliable charging for supported smartphones, tablets and accessories.',
        features: [
            '45W fast charging',
            'USB-C output',
            'Heat protection',
            'Compact design'
        ]
    },
    {
        id: '4',
        slug: 'orbit-watch-s2',
        name: 'Orbit Watch S2',
        category: 'Smartwatches',
        price: 72500,
        oldPrice: 80000,
        badge: 'Hot Deal',
        rating: 4.5,
        image: '/products/watch.svg',
        description: 'A stylish smartwatch with fitness tracking, notifications and long battery life.',
        features: [
            'Heart-rate tracking',
            'AMOLED display',
            'Multiple sports modes',
            'Up to 7 days battery'
        ]
    },
    {
        id: '5',
        slug: 'powermax-20000',
        name: 'PowerMax 20,000mAh',
        category: 'Power Banks',
        price: 29500,
        rating: 4.7,
        image: '/products/powerbank.svg',
        description: 'A high-capacity power bank designed for travel, work and everyday backup power.',
        features: [
            '20,000mAh capacity',
            'Dual USB output',
            'LED power display',
            'Fast recharge'
        ]
    },
    {
        id: '6',
        slug: 'shieldcase-clear',
        name: 'ShieldCase Clear',
        category: 'Cases',
        price: 7500,
        badge: 'Popular',
        rating: 4.4,
        image: '/products/case.svg',
        description: 'A slim protective case that shows off your phone while guarding against scratches and drops.',
        features: [
            'Shock-absorbing corners',
            'Raised camera edge',
            'Crystal-clear back',
            'Wireless-charging compatible'
        ]
    },
    {
        id: '7',
        slug: 'flex-cable-2m',
        name: 'FlexCable 2m USB-C',
        category: 'Cables',
        price: 6500,
        rating: 4.5,
        image: '/products/cable.svg',
        description: 'A durable braided cable for fast charging and dependable data transfer.',
        features: [
            '2-metre length',
            'Braided finish',
            'Fast charging support',
            'Reinforced connectors'
        ]
    },
    {
        id: '8',
        slug: 'mini-boom-speaker',
        name: 'Mini Boom Speaker',
        category: 'Speakers',
        price: 26500,
        badge: 'New Arrival',
        rating: 4.6,
        image: '/products/speaker.svg',
        description: 'Portable wireless audio with punchy sound and a compact, travel-friendly design.',
        features: [
            'Bluetooth connectivity',
            '10-hour battery',
            'Built-in microphone',
            'Compact body'
        ]
    }
];
const categories = [
    'All',
    'Phones',
    'Earbuds',
    'Chargers',
    'Smartwatches',
    'Power Banks',
    'Cases',
    'Cables',
    'Speakers'
];
}),
"[project]/app/product/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-rsc] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-rsc] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-rsc] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const money = (value)=>new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        maximumFractionDigits: 0
    }).format(value);
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].map((product)=>({
            slug: product.slug
        }));
}
async function ProductPage({ params }) {
    const { slug } = await params;
    const product = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].find((item)=>item.slug === slug);
    if (!product) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const message = encodeURIComponent(`Hello Kashmir Global, I am interested in ${product.name} listed at ${money(product.price)}.`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "product-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "simple-header container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-mark",
                                children: "KG"
                            }, void 0, false, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 118
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Kashmir ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Global"
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[slug]/page.tsx",
                                        lineNumber: 16,
                                        columnNumber: 170
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 156
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/product/[slug]/page.tsx",
                        lineNumber: 16,
                        columnNumber: 85
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "back-link",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 234
                            }, this),
                            " Back to shop"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/product/[slug]/page.tsx",
                        lineNumber: 16,
                        columnNumber: 197
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/product/[slug]/page.tsx",
                lineNumber: 16,
                columnNumber: 41
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container detail-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-image",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: product.image,
                                alt: product.name,
                                width: 650,
                                height: 590
                            }, void 0, false, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 358
                            }, this),
                            product.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge",
                                children: product.badge
                            }, void 0, false, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 448
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/product/[slug]/page.tsx",
                        lineNumber: 16,
                        columnNumber: 328
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "product-category",
                                children: product.category
                            }, void 0, false, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 530
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 590
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rating large",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        size: 17,
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[slug]/page.tsx",
                                        lineNumber: 16,
                                        columnNumber: 643
                                    }, this),
                                    " ",
                                    product.rating,
                                    " customer rating"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 613
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "detail-price",
                                children: [
                                    money(product.price),
                                    " ",
                                    product.oldPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("del", {
                                        children: money(product.oldPrice)
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[slug]/page.tsx",
                                        lineNumber: 16,
                                        columnNumber: 793
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 719
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: product.description
                            }, void 0, false, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 836
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feature-list",
                                children: product.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[slug]/page.tsx",
                                                lineNumber: 16,
                                                columnNumber: 946
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: feature
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[slug]/page.tsx",
                                                lineNumber: 16,
                                                columnNumber: 964
                                            }, this)
                                        ]
                                    }, feature, true, {
                                        fileName: "[project]/app/product/[slug]/page.tsx",
                                        lineNumber: 16,
                                        columnNumber: 927
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 864
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "whatsapp-large",
                                href: `https://wa.me/2348130963475?text=${message}`,
                                target: "_blank",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {}, void 0, false, {
                                        fileName: "[project]/app/product/[slug]/page.tsx",
                                        lineNumber: 16,
                                        columnNumber: 1099
                                    }, this),
                                    " Order on WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 1000
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "Confirm availability, delivery fee and payment details with our team."
                            }, void 0, false, {
                                fileName: "[project]/app/product/[slug]/page.tsx",
                                lineNumber: 16,
                                columnNumber: 1137
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/product/[slug]/page.tsx",
                        lineNumber: 16,
                        columnNumber: 501
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/product/[slug]/page.tsx",
                lineNumber: 16,
                columnNumber: 285
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/product/[slug]/page.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/product/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/product/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1bc7ev1._.js.map