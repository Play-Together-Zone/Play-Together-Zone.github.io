module.exports = [
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/app/room/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-exclamation-point.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.mjs [app-ssr] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.mjs [app-ssr] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.mjs [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-exclamation-point.mjs [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.mjs [app-ssr] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.mjs [app-ssr] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.mjs [app-ssr] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$ChatBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/room/ChatBox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$QrCodeCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/room/QrCodeCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$games$2f$TicTacToeBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/games/TicTacToeBoard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$games$2f$CheckersBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/games/CheckersBoard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$games$2f$ChessBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/games/ChessBoard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$games$2f$LudoBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/games/LudoBoard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$games$2f$ColorRushBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/games/ColorRushBoard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$games$2f$TriviaBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/games/TriviaBoard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/registry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$trivia$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/trivia.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/network/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sync$2f$RoomSyncController$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sync/RoomSyncController.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/url.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function RoomWorkspace() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { profile, mounted, soundEnabled, recordResult, blockedIds, toggleBlockPlayer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppContext"])();
    const rawCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeRoomCode"])(searchParams.get('code') ?? '');
    const roomCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>rawCode || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRoomCode"])(5), [
        rawCode
    ]);
    const initialGameParam = searchParams.get('game') || 'tic-tac-toe';
    const isInitialHost = searchParams.get('host') === '1';
    const isSoloBot = searchParams.get('solo') === '1';
    const wantSpectate = searchParams.get('spectate') === '1';
    const initialStrategy = searchParams.get('strategy') || 'torrent';
    const [strategy, setStrategy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialStrategy);
    const [activeStrategy, setActiveStrategy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [passwordInput, setPasswordInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [activePassword, setActivePassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPasswordPrompt, setShowPasswordPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [connStatus, setConnStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('connecting');
    const [connError, setConnError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [snapshot, setSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copiedLink, setCopiedLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [turnTick, setTurnTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [triviaLoading, setTriviaLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const adapterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const syncRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastRecordedVersionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const prevVersionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((msg)=>{
        setToast(msg);
        setTimeout(()=>{
            setToast((prev)=>prev === msg ? null : prev);
        }, 3500);
    }, []);
    const teardown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        syncRef.current?.destroy();
        syncRef.current = null;
        if (adapterRef.current) {
            await adapterRef.current.disconnect();
            adapterRef.current = null;
        }
    }, []);
    const connectRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (chosenStrategy, roomPassword)=>{
        await teardown();
        setConnStatus('connecting');
        setConnError(null);
        try {
            const { adapter, strategy: used } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["connectWithFallback"])(roomCode, {
                strategy: chosenStrategy,
                password: roomPassword || undefined,
                autoFallback: chosenStrategy !== 'local'
            });
            adapterRef.current = adapter;
            setActiveStrategy(used);
            setConnStatus('connected');
            setShowPasswordPrompt(false);
            const initialEngine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGameEngine"])(initialGameParam);
            const controller = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sync$2f$RoomSyncController$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoomSyncController"]({
                roomCode,
                gameId: initialEngine.id,
                isInitialHost,
                self: {
                    playerId: profile.playerId,
                    displayName: profile.displayName,
                    avatar: profile.avatar,
                    wantSpectate
                },
                adapter,
                engine: initialEngine,
                reconstructFromView: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReconstructHook"])(initialEngine.id),
                callbacks: {
                    onSnapshot: (snap)=>{
                        setSnapshot(snap);
                        if (snap.version > prevVersionRef.current) {
                            if (snap.phase === 'playing' && prevVersionRef.current > 0) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playSound"])('move', soundEnabled);
                            }
                            prevVersionRef.current = snap.version;
                        }
                    },
                    onChat: (msg)=>{
                        setChatMessages((prev)=>[
                                ...prev.slice(-99),
                                msg
                            ]);
                        if (msg.senderPlayerId !== profile.playerId) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playSound"])('chat', soundEnabled);
                        }
                    },
                    onActionRejected: (reason)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playSound"])('error', soundEnabled);
                        showToast(`Move rejected: ${reason}`);
                    },
                    onError: (err)=>{
                        if (err.code === 'auth-failed') {
                            setShowPasswordPrompt(true);
                            setConnError('Password required or incorrect password.');
                        } else {
                            setConnError(err.message);
                        }
                    },
                    onHostMigrated: (newHostId)=>{
                        showToast(newHostId === profile.playerId ? 'Previous host left — you are now the room host!' : 'Host migrated to another player.');
                    }
                }
            });
            syncRef.current = controller;
            if (isInitialHost && isSoloBot && initialEngine.supportsBot) {
                await controller.addBot();
                await controller.startGame();
            }
        } catch (err) {
            setConnStatus('error');
            setConnError(err instanceof Error ? err.message : 'Unable to connect to room.');
        }
    }, [
        teardown,
        roomCode,
        initialGameParam,
        isInitialHost,
        isSoloBot,
        profile.playerId,
        profile.displayName,
        profile.avatar,
        wantSpectate,
        soundEnabled,
        showToast
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        let active = true;
        const timer = setTimeout(()=>{
            if (active) {
                void connectRoom(strategy, activePassword);
            }
        }, 0);
        return ()=>{
            active = false;
            clearTimeout(timer);
            void teardown();
        };
    // Only run on initial mount; explicit reconnects invoke connectRoom directly
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        mounted
    ]);
    // Keep engine synced on non-host clients when host changes gameId in lobby
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!snapshot || !syncRef.current) return;
        const engine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGameEngine"])(snapshot.gameId);
        syncRef.current.setEngine(engine, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReconstructHook"])(snapshot.gameId));
    }, [
        snapshot
    ]);
    // Record win/loss/draw once when a match finishes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!snapshot || snapshot.phase !== 'ended' || !snapshot.outcome) return;
        if (lastRecordedVersionRef.current === snapshot.version) return;
        const isSeated = snapshot.seats.some((s)=>s.playerId === profile.playerId);
        if (!isSeated) return;
        lastRecordedVersionRef.current = snapshot.version;
        const winners = snapshot.outcome.winnerIds;
        if (winners.length === 0) {
            recordResult(snapshot.gameId, 'draw');
        } else if (winners.includes(profile.playerId)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playSound"])('win', soundEnabled);
            recordResult(snapshot.gameId, 'win');
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playSound"])('lose', soundEnabled);
            recordResult(snapshot.gameId, 'loss');
        }
    }, [
        snapshot,
        profile.playerId,
        recordResult,
        soundEnabled
    ]);
    // Optional turn countdown display
    const activeVersion = snapshot?.version ?? 0;
    const activePhase = snapshot?.phase ?? 'lobby';
    const activeTurnTimerSec = snapshot?.settings.turnTimerSec ?? 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activePhase !== 'playing' || !activeTurnTimerSec) {
            return;
        }
        const id = setInterval(()=>{
            setTurnTick((prev)=>{
                const currentLeft = prev && prev.version === activeVersion ? prev.left : activeTurnTimerSec;
                return {
                    version: activeVersion,
                    left: currentLeft > 0 ? currentLeft - 1 : 0
                };
            });
        }, 1000);
        return ()=>clearInterval(id);
    }, [
        activeVersion,
        activePhase,
        activeTurnTimerSec
    ]);
    const turnSecondsLeft = activePhase === 'playing' && activeTurnTimerSec > 0 ? turnTick && turnTick.version === activeVersion ? turnTick.left : activeTurnTimerSec : null;
    const isHost = snapshot?.hostPlayerId === profile.playerId;
    const selfSeat = snapshot?.seats.find((s)=>s.playerId === profile.playerId);
    const isSpectator = !selfSeat;
    const shareUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildRoomShareUrl"])({
            code: roomCode,
            game: snapshot?.gameId ?? initialGameParam,
            strategy
        }), [
        roomCode,
        snapshot?.gameId,
        initialGameParam,
        strategy
    ]);
    const handleCopyLink = async ()=>{
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopiedLink(true);
            setTimeout(()=>setCopiedLink(false), 2000);
        } catch  {
            showToast('Copy failed — copy URL from address bar.');
        }
    };
    const handleOpenSecondTab = ()=>{
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withBasePath"])(`/room/?code=${encodeURIComponent(roomCode)}&game=${encodeURIComponent(snapshot?.gameId ?? initialGameParam)}&strategy=${encodeURIComponent(strategy)}&tabId=tab2`);
        window.open(url, '_blank', 'noopener');
    };
    const handleGameChange = (newGameId)=>{
        if (!syncRef.current || !isHost) return;
        const eng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGameEngine"])(newGameId);
        syncRef.current.setEngine(eng, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReconstructHook"])(newGameId));
        void syncRef.current.updateSettings({
            maxPlayers: eng.maxPlayers
        }, newGameId);
    };
    const handleAction = (action)=>{
        void syncRef.current?.sendGameAction(action);
    };
    const handleLoadTriviaPack = async (packId)=>{
        if (!syncRef.current || !isHost) return;
        setTriviaLoading(true);
        try {
            const pack = packId === 'opentdb' ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$trivia$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOpenTdbQuestions"])(8) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$trivia$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadStaticTriviaPack"])(packId);
            await syncRef.current.updateSettings({
                gameOptions: {
                    packId,
                    packTitle: pack.title,
                    questions: pack.questions
                }
            });
            showToast(`Loaded "${pack.title}" (${pack.questions.length} questions)`);
        } catch (err) {
            showToast(err instanceof Error ? err.message : 'Failed to load trivia pack.');
        } finally{
            setTriviaLoading(false);
        }
    };
    const handleStartMatch = async ()=>{
        if (!syncRef.current || !isHost || !snapshot) return;
        if (snapshot.gameId === 'trivia' && !Array.isArray(snapshot.settings.gameOptions.questions)) {
            await handleLoadTriviaPack('science-tech');
        }
        await syncRef.current.startGame();
    };
    const disconnectedSeats = snapshot?.seats.filter((s)=>!s.connected && !s.isBot) ?? [];
    const renderGameBoard = ()=>{
        if (!snapshot || !snapshot.gameView) return null;
        switch(snapshot.gameId){
            case 'tic-tac-toe':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$games$2f$TicTacToeBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TicTacToeBoard"], {
                    state: snapshot.gameView,
                    selfPlayerId: profile.playerId,
                    isSpectator: isSpectator,
                    onAction: handleAction
                }, void 0, false, {
                    fileName: "[project]/src/app/room/page.tsx",
                    lineNumber: 374,
                    columnNumber: 11
                }, this);
            case 'checkers':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$games$2f$CheckersBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckersBoard"], {
                    state: snapshot.gameView,
                    selfPlayerId: profile.playerId,
                    isSpectator: isSpectator,
                    onAction: handleAction
                }, void 0, false, {
                    fileName: "[project]/src/app/room/page.tsx",
                    lineNumber: 383,
                    columnNumber: 11
                }, this);
            case 'chess':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$games$2f$ChessBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChessBoard"], {
                    state: snapshot.gameView,
                    selfPlayerId: profile.playerId,
                    isSpectator: isSpectator,
                    onAction: handleAction
                }, void 0, false, {
                    fileName: "[project]/src/app/room/page.tsx",
                    lineNumber: 392,
                    columnNumber: 11
                }, this);
            case 'ludo':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$games$2f$LudoBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LudoBoard"], {
                    state: snapshot.gameView,
                    selfPlayerId: profile.playerId,
                    isSpectator: isSpectator,
                    onAction: handleAction
                }, void 0, false, {
                    fileName: "[project]/src/app/room/page.tsx",
                    lineNumber: 401,
                    columnNumber: 11
                }, this);
            case 'color-rush':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$games$2f$ColorRushBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorRushBoard"], {
                    view: snapshot.gameView,
                    selfPlayerId: profile.playerId,
                    isSpectator: isSpectator,
                    onAction: handleAction
                }, void 0, false, {
                    fileName: "[project]/src/app/room/page.tsx",
                    lineNumber: 410,
                    columnNumber: 11
                }, this);
            case 'trivia':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$games$2f$TriviaBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TriviaBoard"], {
                    view: snapshot.gameView,
                    selfPlayerId: profile.playerId,
                    isHost: isHost,
                    isSpectator: isSpectator,
                    onAction: handleAction,
                    onHostSystemAction: (act)=>syncRef.current?.applyHostSystemAction(act)
                }, void 0, false, {
                    fileName: "[project]/src/app/room/page.tsx",
                    lineNumber: 419,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500",
                    children: [
                        "Game module for ",
                        snapshot.gameId,
                        " is loading..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/room/page.tsx",
                    lineNumber: 432,
                    columnNumber: 11
                }, this);
        }
    };
    const renderMoveHistory = ()=>{
        if (!snapshot?.gameView) return [];
        const view = snapshot.gameView;
        if (!Array.isArray(view.history)) return [];
        return view.history.map((h, i)=>`${i + 1}. ${h.label ?? JSON.stringify(h)}`);
    };
    const currentCatalog = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAME_CATALOG"].find((g)=>g.id === (snapshot?.gameId ?? initialGameParam));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                className: "animate-pop fixed right-4 bottom-4 z-50 rounded-xl border border-amber-500/40 bg-slate-900 px-4 py-3 text-sm font-medium text-amber-300 shadow-xl",
                children: toast
            }, void 0, false, {
                fileName: "[project]/src/app/room/page.tsx",
                lineNumber: 453,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-lg bg-indigo-500/15 px-2.5 py-1 font-mono text-sm font-bold tracking-wider text-indigo-600 dark:text-indigo-300",
                                            children: roomCode
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/room/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-bold text-slate-900 dark:text-white",
                                            children: currentCatalog?.name ?? 'Game Room'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/room/page.tsx",
                                            lineNumber: 469,
                                            columnNumber: 15
                                        }, this),
                                        isSpectator && snapshot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-600 dark:text-amber-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/room/page.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 19
                                                }, this),
                                                "Spectating"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/room/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/room/page.tsx",
                                    lineNumber: 465,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-0.5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400",
                                    children: [
                                        connStatus === 'connected' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/room/page.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 19
                                                }, this),
                                                "Connected (",
                                                activeStrategy || strategy,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/room/page.tsx",
                                            lineNumber: 481,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1 text-amber-600 dark:text-amber-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/room/page.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 19
                                                }, this),
                                                connStatus
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/room/page.tsx",
                                            lineNumber: 486,
                                            columnNumber: 17
                                        }, this),
                                        snapshot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "· Sync v",
                                                snapshot.version
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/room/page.tsx",
                                            lineNumber: 491,
                                            columnNumber: 28
                                        }, this),
                                        turnSecondsLeft !== null && snapshot?.phase === 'playing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1 font-semibold text-indigo-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/room/page.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 19
                                                }, this),
                                                turnSecondsLeft,
                                                "s"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/room/page.tsx",
                                            lineNumber: 493,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/room/page.tsx",
                                    lineNumber: 479,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/room/page.tsx",
                            lineNumber: 464,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/room/page.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>void handleCopyLink(),
                                className: "flex items-center gap-1.5 rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
                                children: [
                                    copiedLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-3.5 w-3.5 text-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 509,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this),
                                    copiedLink ? 'Copied!' : 'Copy Invite Link'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleOpenSecondTab,
                                className: "flex items-center gap-1.5 rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
                                title: "Open second browser tab for local two-tab testing",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 13
                                    }, this),
                                    "Tab 2 Test"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 516,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowPasswordPrompt((p)=>!p),
                                className: "flex items-center gap-1.5 rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
                                title: "Room password",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this),
                                    "Password"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 526,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 540,
                                        columnNumber: 13
                                    }, this),
                                    "Leave"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 536,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/room/page.tsx",
                        lineNumber: 502,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/room/page.tsx",
                lineNumber: 462,
                columnNumber: 7
            }, this),
            (showPasswordPrompt || connError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm",
                children: [
                    connError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 flex items-center gap-2 font-medium text-amber-700 dark:text-amber-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 551,
                                columnNumber: 15
                            }, this),
                            connError
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/room/page.tsx",
                        lineNumber: 550,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: (e)=>{
                            e.preventDefault();
                            setActivePassword(passwordInput);
                            void connectRoom(strategy, passwordInput);
                        },
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                value: passwordInput,
                                onChange: (e)=>setPasswordInput(e.target.value),
                                placeholder: "Optional room password...",
                                "aria-label": "Room password",
                                className: "rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-950"
                            }, void 0, false, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 563,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: strategy,
                                onChange: (e)=>setStrategy(e.target.value),
                                "aria-label": "Signaling strategy",
                                className: "rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-950",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "torrent",
                                        children: "Torrent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "nostr",
                                        children: "Nostr"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 578,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "mqtt",
                                        children: "MQTT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 579,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "local",
                                        children: "Local Two-Tab"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 580,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 571,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "rounded-xl bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500",
                                children: "Reconnect"
                            }, void 0, false, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 582,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/room/page.tsx",
                        lineNumber: 555,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/room/page.tsx",
                lineNumber: 548,
                columnNumber: 9
            }, this),
            disconnectedSeats.length > 0 && snapshot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4",
                children: disconnectedSeats.map((seat)=>{
                    const eng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGameEngine"])(snapshot.gameId);
                    const voteState = snapshot.disconnectVotes[seat.playerId];
                    const myVote = voteState?.votes[profile.playerId];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-3 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 font-medium text-rose-700 dark:text-rose-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 605,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            seat.displayName,
                                            " left — waiting for reconnect..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 606,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 604,
                                columnNumber: 17
                            }, this),
                            !isSpectator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>void syncRef.current?.voteDisconnect(seat.playerId, 'end'),
                                        className: `rounded-lg px-3 py-1 text-xs font-semibold transition ${myVote === 'end' ? 'bg-rose-600 text-white' : 'border border-rose-500/40 text-rose-700 hover:bg-rose-500/20 dark:text-rose-200'}`,
                                        children: "Vote to End Match"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 612,
                                        columnNumber: 21
                                    }, this),
                                    eng.supportsBot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>void syncRef.current?.voteDisconnect(seat.playerId, 'replace_bot'),
                                        className: `rounded-lg px-3 py-1 text-xs font-semibold transition ${myVote === 'replace_bot' ? 'bg-indigo-600 text-white' : 'border border-indigo-500/40 text-indigo-700 hover:bg-indigo-500/20 dark:text-indigo-200'}`,
                                        children: "Vote to Replace with Bot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 629,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 611,
                                columnNumber: 19
                            }, this)
                        ]
                    }, seat.playerId, true, {
                        fileName: "[project]/src/app/room/page.tsx",
                        lineNumber: 600,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/room/page.tsx",
                lineNumber: 594,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5 lg:col-span-2",
                        children: [
                            !snapshot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "h-7 w-7 animate-spin text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 659,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm font-medium text-slate-700 dark:text-slate-300",
                                        children: isInitialHost ? 'Initializing host room...' : `Connecting to room ${roomCode}...`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 660,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-slate-500",
                                        children: [
                                            "Waiting for host state snapshot via ",
                                            strategy,
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 665,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 658,
                                columnNumber: 13
                            }, this) : snapshot.phase === 'lobby' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-start justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold text-slate-900 dark:text-white",
                                                        children: "Match Lobby"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 673,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500 dark:text-slate-400",
                                                        children: "Share the code or QR link. Host can adjust rules, add bots, or start the match."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 676,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 672,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$QrCodeCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QrCodeCard"], {
                                                url: shareUrl
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 681,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 671,
                                        columnNumber: 15
                                    }, this),
                                    isHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs font-bold tracking-wide text-slate-600 uppercase dark:text-slate-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 687,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Host Settings"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 686,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-3 sm:grid-cols-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "host-game-select",
                                                                className: "mb-1 block text-xs text-slate-500",
                                                                children: "Game"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                id: "host-game-select",
                                                                value: snapshot.gameId,
                                                                onChange: (e)=>handleGameChange(e.target.value),
                                                                className: "w-full rounded-xl border border-slate-300 bg-white px-2.5 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-900",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GAME_CATALOG"].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: g.id,
                                                                        children: g.name
                                                                    }, g.id, false, {
                                                                        fileName: "[project]/src/app/room/page.tsx",
                                                                        lineNumber: 705,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "host-max-players",
                                                                className: "mb-1 block text-xs text-slate-500",
                                                                children: "Max Players"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 713,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "host-max-players",
                                                                type: "number",
                                                                min: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGameEngine"])(snapshot.gameId).minPlayers,
                                                                max: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGameEngine"])(snapshot.gameId).maxPlayers,
                                                                value: snapshot.settings.maxPlayers,
                                                                onChange: (e)=>void syncRef.current?.updateSettings({
                                                                        maxPlayers: Number(e.target.value)
                                                                    }),
                                                                className: "w-full rounded-xl border border-slate-300 bg-white px-2.5 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-900"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 719,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "host-turn-timer",
                                                                className: "mb-1 block text-xs text-slate-500",
                                                                children: "Turn Timer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 735,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                id: "host-turn-timer",
                                                                value: snapshot.settings.turnTimerSec,
                                                                onChange: (e)=>void syncRef.current?.updateSettings({
                                                                        turnTimerSec: Number(e.target.value)
                                                                    }),
                                                                className: "w-full rounded-xl border border-slate-300 bg-white px-2.5 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 0,
                                                                        children: "No limit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/room/page.tsx",
                                                                        lineNumber: 751,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 15,
                                                                        children: "15 seconds"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/room/page.tsx",
                                                                        lineNumber: 752,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 30,
                                                                        children: "30 seconds"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/room/page.tsx",
                                                                        lineNumber: 753,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 60,
                                                                        children: "60 seconds"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/room/page.tsx",
                                                                        lineNumber: 754,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 734,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 690,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-4 pt-1 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: snapshot.settings.chatEnabled,
                                                                onChange: (e)=>void syncRef.current?.updateSettings({
                                                                        chatEnabled: e.target.checked
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 761,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Enable room chat"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: snapshot.settings.allowSpectators,
                                                                onChange: (e)=>void syncRef.current?.updateSettings({
                                                                        allowSpectators: e.target.checked
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 773,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Allow spectators"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 772,
                                                        columnNumber: 21
                                                    }, this),
                                                    snapshot.gameId === 'chess' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Chess Clock:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 786,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: Number(snapshot.settings.gameOptions.clockMinutes ?? 0),
                                                                onChange: (e)=>void syncRef.current?.updateSettings({
                                                                        gameOptions: {
                                                                            clockMinutes: Number(e.target.value)
                                                                        }
                                                                    }),
                                                                className: "rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 0,
                                                                        children: "Untimed"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/room/page.tsx",
                                                                        lineNumber: 796,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 3,
                                                                        children: "3 min"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/room/page.tsx",
                                                                        lineNumber: 797,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 5,
                                                                        children: "5 min"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/room/page.tsx",
                                                                        lineNumber: 798,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 10,
                                                                        children: "10 min"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/room/page.tsx",
                                                                        lineNumber: 799,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 787,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 785,
                                                        columnNumber: 23
                                                    }, this),
                                                    snapshot.gameId === 'trivia' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Question Pack:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 805,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                disabled: triviaLoading,
                                                                value: String(snapshot.settings.gameOptions.packId ?? 'science-tech'),
                                                                onChange: (e)=>void handleLoadTriviaPack(e.target.value),
                                                                className: "rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-900",
                                                                children: [
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$trivia$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TRIVIA_PACK_META"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: p.id,
                                                                            children: p.title
                                                                        }, p.id, false, {
                                                                            fileName: "[project]/src/app/room/page.tsx",
                                                                            lineNumber: 813,
                                                                            columnNumber: 29
                                                                        }, this)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "opentdb",
                                                                        children: "Open Trivia DB (Live Fetch)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/room/page.tsx",
                                                                        lineNumber: 817,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 806,
                                                                columnNumber: 25
                                                            }, this),
                                                            triviaLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-indigo-500",
                                                                children: "Loading..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 820,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 804,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 759,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 685,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3 pt-1",
                                        children: [
                                            selfSeat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>void syncRef.current?.toggleReady(!selfSeat.ready),
                                                className: `flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${selfSeat.ready ? 'bg-emerald-600 text-white hover:bg-emerald-500' : 'border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 21
                                                    }, this),
                                                    selfSeat.ready ? 'Ready!' : 'Mark Ready'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 830,
                                                columnNumber: 19
                                            }, this),
                                            isHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGameEngine"])(snapshot.gameId).supportsBot && snapshot.seats.length < snapshot.settings.maxPlayers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>void syncRef.current?.addBot(),
                                                        className: "flex items-center gap-1.5 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 853,
                                                                columnNumber: 27
                                                            }, this),
                                                            "Add Bot"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 848,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        disabled: triviaLoading || snapshot.seats.length < (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGameEngine"])(snapshot.gameId).minPlayers,
                                                        onClick: ()=>void handleStartMatch(),
                                                        className: "flex items-center gap-1.5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 866,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Start Match"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 857,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 845,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 828,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 670,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900",
                                children: [
                                    snapshot.phase === 'playing' && (()=>{
                                        const viewObj = snapshot.gameView;
                                        const turnId = viewObj?.currentTurnPlayerId;
                                        const turnPlayer = snapshot.seats.find((s)=>s.playerId === turnId);
                                        if (!turnPlayer) return null;
                                        const isMine = turnId === profile.playerId && !isSpectator;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center justify-between rounded-xl px-3.5 py-2 text-xs font-bold ${isMine ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-800/70 dark:text-slate-300'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isMine ? 'Your turn — make your move!' : `${turnPlayer.avatar} ${turnPlayer.displayName}'s turn`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/room/page.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[11px] opacity-75",
                                                    children: currentCatalog?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/room/page.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/room/page.tsx",
                                            lineNumber: 882,
                                            columnNumber: 19
                                        }, this);
                                    })(),
                                    snapshot.phase === 'ended' && snapshot.outcome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-pop flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-base font-bold text-emerald-700 dark:text-emerald-300",
                                                        children: "Match Complete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 904,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-700 dark:text-slate-300",
                                                        children: snapshot.outcome.reason
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 907,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 903,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>void syncRef.current?.requestRematch(false),
                                                        className: "flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 917,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Rematch"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 912,
                                                        columnNumber: 21
                                                    }, this),
                                                    isHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>void syncRef.current?.requestRematch(true),
                                                        className: "rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
                                                        children: "Back to Lobby"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 921,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 911,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 902,
                                        columnNumber: 17
                                    }, this),
                                    renderGameBoard()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 874,
                                columnNumber: 13
                            }, this),
                            snapshot && snapshot.phase !== 'lobby' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold tracking-wide text-slate-500 uppercase",
                                        children: "Move History"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 940,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex max-h-28 flex-wrap gap-1.5 overflow-y-auto",
                                        children: renderMoveHistory().length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400",
                                            children: "No moves yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/room/page.tsx",
                                            lineNumber: 945,
                                            columnNumber: 19
                                        }, this) : renderMoveHistory().map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300",
                                                children: entry
                                            }, idx, false, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 948,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 943,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 939,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/room/page.tsx",
                        lineNumber: 656,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "flex items-center justify-between text-xs font-bold tracking-wide text-slate-600 uppercase dark:text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 966,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Players (",
                                                    snapshot?.seats.length ?? 0,
                                                    "/",
                                                    snapshot?.settings.maxPlayers ?? 2,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 965,
                                                columnNumber: 15
                                            }, this),
                                            snapshot && snapshot.spectators.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-medium text-slate-400",
                                                children: [
                                                    "+",
                                                    snapshot.spectators.length,
                                                    " watching"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 971,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 964,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 space-y-2",
                                        children: snapshot?.seats.map((seat)=>{
                                            const isSeatHost = seat.playerId === snapshot.hostPlayerId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-xs dark:border-slate-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex min-w-0 items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-base",
                                                                children: seat.avatar
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 986,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate",
                                                                                children: seat.displayName
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                                lineNumber: 989,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            isSeatHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                                                                className: "h-3.5 w-3.5 shrink-0 text-amber-500",
                                                                                "aria-label": "Room host"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                                lineNumber: 991,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/room/page.tsx",
                                                                        lineNumber: 988,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-[10px] ${seat.connected ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'}`,
                                                                        children: seat.isBot ? 'AI Bot' : seat.connected ? seat.ready ? 'Connected · Ready' : 'Connected' : 'Disconnected'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/room/page.tsx",
                                                                        lineNumber: 997,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 987,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 985,
                                                        columnNumber: 21
                                                    }, this),
                                                    isHost && seat.isBot && snapshot.phase === 'lobby' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>void syncRef.current?.removeBot(seat.playerId),
                                                        className: "rounded-lg px-2 py-1 text-[11px] text-rose-500 hover:bg-rose-500/10",
                                                        children: "Remove"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 1016,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, seat.playerId, true, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 981,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 977,
                                        columnNumber: 13
                                    }, this),
                                    snapshot && snapshot.spectators.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 border-t border-slate-200 pt-2.5 dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold text-slate-500",
                                                children: "Spectators (Read-Only)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 1031,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1.5 flex flex-wrap gap-1.5",
                                                children: snapshot.spectators.map((sp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1 text-[11px] text-slate-700 dark:bg-slate-800 dark:text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: sp.avatar
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 1040,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: sp.displayName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/room/page.tsx",
                                                                lineNumber: 1041,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, sp.playerId, true, {
                                                        fileName: "[project]/src/app/room/page.tsx",
                                                        lineNumber: 1036,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/room/page.tsx",
                                                lineNumber: 1034,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/room/page.tsx",
                                        lineNumber: 1030,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 963,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$room$2f$ChatBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatBox"], {
                                messages: chatMessages,
                                chatEnabled: snapshot?.settings.chatEnabled ?? true,
                                selfPlayerId: profile.playerId,
                                isHost: Boolean(isHost),
                                mutedPlayerIds: snapshot?.mutedPlayerIds ?? [],
                                blockedPlayerIds: blockedIds,
                                onSend: (text)=>void syncRef.current?.sendChat(text),
                                onToggleMute: (pid)=>void syncRef.current?.toggleMutePlayer(pid),
                                onToggleBlock: toggleBlockPlayer
                            }, void 0, false, {
                                fileName: "[project]/src/app/room/page.tsx",
                                lineNumber: 1049,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/room/page.tsx",
                        lineNumber: 962,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/room/page.tsx",
                lineNumber: 655,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/room/page.tsx",
        lineNumber: 451,
        columnNumber: 5
    }, this);
}
function RoomPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center text-sm text-slate-500",
            children: "Loading room..."
        }, void 0, false, {
            fileName: "[project]/src/app/room/page.tsx",
            lineNumber: 1070,
            columnNumber: 9
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoomWorkspace, {}, void 0, false, {
            fileName: "[project]/src/app/room/page.tsx",
            lineNumber: 1075,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/room/page.tsx",
        lineNumber: 1068,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/games/CheckersBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckersBoard",
    ()=>CheckersBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.mjs [app-ssr] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$checkers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/checkers.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function CheckersBoard({ state, selfPlayerId, isSpectator, onAction }) {
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const myColor = state.colors[selfPlayerId];
    const flipped = myColor === 'b';
    const legalActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>isSpectator ? [] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$checkers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkersEngine"].getLegalActions(state, selfPlayerId), [
        state,
        selfPlayerId,
        isSpectator
    ]);
    const effectiveSelected = state.mustContinueFrom !== null ? state.mustContinueFrom : selected;
    const targetSquares = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (effectiveSelected === null) return new Set();
        return new Set(legalActions.filter((a)=>a.from === effectiveSelected).map((a)=>a.to));
    }, [
        legalActions,
        effectiveSelected
    ]);
    const movableFromSquares = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Set(legalActions.map((a)=>a.from)), [
        legalActions
    ]);
    const isMyTurn = !isSpectator && !state.outcome && state.currentTurnPlayerId === selfPlayerId;
    const displayOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const indices = Array.from({
            length: 64
        }, (_, i)=>i);
        return flipped ? indices.reverse() : indices;
    }, [
        flipped
    ]);
    const handleSquareClick = (idx)=>{
        if (!isMyTurn) return;
        if (effectiveSelected !== null && targetSquares.has(idx)) {
            onAction({
                type: 'move',
                playerId: selfPlayerId,
                from: effectiveSelected,
                to: idx
            });
            setSelected(null);
            return;
        }
        if (movableFromSquares.has(idx)) {
            setSelected(idx === selected ? null : idx);
            return;
        }
        setSelected(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-3",
                children: state.players.map((p)=>{
                    const color = state.colors[p.id];
                    const active = !state.outcome && state.currentTurnPlayerId === p.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${active ? 'border-amber-500 bg-amber-500/10 ring-2 ring-amber-500/30' : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-4 w-4 rounded-full border-2 ${color === 'r' ? 'border-rose-300 bg-rose-600' : 'border-slate-500 bg-slate-900'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/CheckersBoard.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: p.avatar
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/CheckersBoard.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: p.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/CheckersBoard.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/components/games/CheckersBoard.tsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/games/CheckersBoard.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            state.mustContinueFrom !== null && isMyTurn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-lg bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-300",
                children: "Multi-jump available! Continue capturing with the highlighted piece."
            }, void 0, false, {
                fileName: "[project]/src/components/games/CheckersBoard.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "grid",
                "aria-label": "Checkers board",
                className: "grid w-full max-w-[440px] grid-cols-8 overflow-hidden rounded-2xl border-4 border-slate-800 shadow-xl",
                children: displayOrder.map((idx)=>{
                    const r = Math.floor(idx / 8);
                    const c = idx % 8;
                    const isDark = (r + c) % 2 === 1;
                    const piece = state.board[idx];
                    const isSelected = effectiveSelected === idx;
                    const isTarget = targetSquares.has(idx);
                    const canSelect = isMyTurn && movableFromSquares.has(idx);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>handleSquareClick(idx),
                        disabled: !isDark,
                        "aria-label": `Square ${String.fromCharCode(65 + c)}${8 - r}${piece ? `, ${piece}` : ''}`,
                        className: `relative flex aspect-square items-center justify-center transition ${isDark ? isSelected ? 'bg-amber-600' : 'bg-slate-700 hover:bg-slate-600' : 'bg-amber-100 dark:bg-amber-200/80'}`,
                        children: [
                            isTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-4 w-4 rounded-full bg-emerald-400/90 ring-4 ring-emerald-400/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/CheckersBoard.tsx",
                                lineNumber: 148,
                                columnNumber: 17
                            }, this),
                            piece && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex h-[74%] w-[74%] items-center justify-center rounded-full border-2 shadow-md transition ${piece === 'r' || piece === 'R' ? 'border-rose-300 bg-gradient-to-br from-rose-500 to-rose-700 text-amber-200' : 'border-slate-500 bg-gradient-to-br from-slate-800 to-slate-950 text-amber-300'} ${canSelect ? 'ring-2 ring-amber-400/70' : ''}`,
                                children: (piece === 'R' || piece === 'B') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                    className: "h-4 w-4 sm:h-5 sm:w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/games/CheckersBoard.tsx",
                                    lineNumber: 159,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/CheckersBoard.tsx",
                                lineNumber: 151,
                                columnNumber: 17
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/components/games/CheckersBoard.tsx",
                        lineNumber: 131,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/games/CheckersBoard.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/games/CheckersBoard.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/games/ChessBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChessBoard",
    ()=>ChessBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/chess.js/dist/esm/chess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.mjs [app-ssr] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.mjs [app-ssr] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-exclamation-point.mjs [app-ssr] (ecmascript) <export default as ShieldAlert>");
'use client';
;
;
;
;
const PIECE_UNICODE = {
    wp: '♙',
    wn: '♘',
    wb: '♗',
    wr: '♖',
    wq: '♕',
    wk: '♔',
    bp: '♟',
    bn: '♞',
    bb: '♝',
    br: '♜',
    bq: '♛',
    bk: '♚'
};
function formatClock(ms) {
    const totalSec = Math.max(0, Math.ceil(ms / 1000));
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
}
function ChessBoard({ state, selfPlayerId, isSpectator, onAction }) {
    const [selectedSquare, setSelectedSquare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingPromotion, setPendingPromotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nowMs, setNowMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Date.now());
    const myColor = state.colors[selfPlayerId];
    const flipped = myColor === 'b';
    const isMyTurn = !isSpectator && !state.outcome && state.currentTurnPlayerId === selfPlayerId;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!state.clock.enabled || state.outcome || state.clock.lastTickAt === null) {
            return;
        }
        const id = setInterval(()=>setNowMs(Date.now()), 250);
        return ()=>clearInterval(id);
    }, [
        state.clock.enabled,
        state.clock.lastTickAt,
        state.outcome
    ]);
    const chess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chess"](state.fen), [
        state.fen
    ]);
    const verboseMoves = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!isMyTurn) return [];
        return chess.moves({
            verbose: true
        });
    }, [
        chess,
        isMyTurn
    ]);
    const targetsForSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedSquare) return new Map();
        const map = new Map();
        for (const m of verboseMoves){
            if (m.from === selectedSquare) {
                map.set(m.to, Boolean(m.promotion));
            }
        }
        return map;
    }, [
        verboseMoves,
        selectedSquare
    ]);
    const boardRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const raw = chess.board();
        const rows = raw.map((row, rIdx)=>row.map((cell, cIdx)=>{
                const sq = `${String.fromCharCode(97 + cIdx)}${8 - rIdx}`;
                return {
                    sq,
                    cell,
                    isLight: (rIdx + cIdx) % 2 === 0
                };
            }));
        if (!flipped) return rows;
        return [
            ...rows
        ].reverse().map((row)=>[
                ...row
            ].reverse());
    }, [
        chess,
        flipped
    ]);
    const getDisplayClock = (color)=>{
        if (!state.clock.enabled) return null;
        const base = state.clock.remainingMs[color];
        const activeColor = state.colors[state.currentTurnPlayerId];
        if (!state.outcome && state.clock.lastTickAt !== null && activeColor === color) {
            return formatClock(base - Math.max(0, nowMs - state.clock.lastTickAt));
        }
        return formatClock(base);
    };
    const handleSquareClick = (sq)=>{
        if (!isMyTurn) return;
        if (selectedSquare && targetsForSelected.has(sq)) {
            const needsPromo = targetsForSelected.get(sq);
            if (needsPromo) {
                setPendingPromotion({
                    from: selectedSquare,
                    to: sq
                });
                setSelectedSquare(null);
                return;
            }
            onAction({
                type: 'move',
                playerId: selfPlayerId,
                from: selectedSquare,
                to: sq
            });
            setSelectedSquare(null);
            return;
        }
        const hasMovesFromSq = verboseMoves.some((m)=>m.from === sq);
        if (hasMovesFromSq) {
            setSelectedSquare(sq === selectedSquare ? null : sq);
        } else {
            setSelectedSquare(null);
        }
    };
    const activeDrawOfferFromOther = state.drawOfferBy && state.drawOfferBy !== selfPlayerId && !isSpectator;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full max-w-[480px] flex-wrap items-center justify-between gap-2",
                children: state.players.map((p)=>{
                    const color = state.colors[p.id];
                    const active = !state.outcome && state.currentTurnPlayerId === p.id;
                    const clockText = getDisplayClock(color);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition ${active ? 'border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-500/30' : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: color === 'w' ? '♔' : '♚'
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ChessBoard.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: p.avatar
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ChessBoard.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: p.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ChessBoard.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this),
                            clockText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 rounded bg-slate-900 px-2 py-0.5 font-mono text-white dark:bg-slate-800",
                                children: clockText
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ChessBoard.tsx",
                                lineNumber: 159,
                                columnNumber: 17
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/components/games/ChessBoard.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/games/ChessBoard.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            state.inCheck && !state.outcome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 rounded-xl bg-rose-500/15 px-3 py-1 text-xs font-bold text-rose-600 dark:text-rose-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/ChessBoard.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    "Check!"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/ChessBoard.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this),
            activeDrawOfferFromOther && !state.outcome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3.5 py-2 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold",
                        children: "Opponent offered a draw."
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/ChessBoard.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onAction({
                                type: 'respond_draw',
                                playerId: selfPlayerId,
                                accept: true
                            }),
                        className: "rounded-lg bg-emerald-600 px-2.5 py-1 font-bold text-white",
                        children: "Accept"
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/ChessBoard.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onAction({
                                type: 'respond_draw',
                                playerId: selfPlayerId,
                                accept: false
                            }),
                        className: "rounded-lg bg-slate-200 px-2.5 py-1 font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-200",
                        children: "Decline"
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/ChessBoard.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/ChessBoard.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "grid",
                "aria-label": "Chess board",
                className: "grid w-full max-w-[460px] grid-cols-8 overflow-hidden rounded-2xl border-4 border-slate-800 shadow-xl",
                children: boardRows.flat().map(({ sq, cell, isLight })=>{
                    const isSelected = selectedSquare === sq;
                    const isTarget = targetsForSelected.has(sq);
                    const pieceChar = cell ? PIECE_UNICODE[`${cell.color}${cell.type}`] : null;
                    const lastMove = state.history[state.history.length - 1];
                    const isLastMoveSq = lastMove && (lastMove.from === sq || lastMove.to === sq);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>handleSquareClick(sq),
                        "aria-label": `Square ${sq}${cell ? `, ${cell.color} ${cell.type}` : ''}`,
                        className: `relative flex aspect-square items-center justify-center text-2xl transition select-none sm:text-3xl ${isSelected ? 'bg-emerald-500' : isLastMoveSq ? isLight ? 'bg-amber-200' : 'bg-amber-500/70' : isLight ? 'bg-stone-200 hover:bg-stone-300' : 'bg-emerald-800 hover:bg-emerald-700'}`,
                        children: [
                            isTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `pointer-events-none absolute rounded-full ${cell ? 'inset-1 border-4 border-amber-400/90' : 'h-3.5 w-3.5 bg-slate-900/35'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ChessBoard.tsx",
                                lineNumber: 234,
                                columnNumber: 17
                            }, this),
                            pieceChar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: cell?.color === 'w' ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]' : 'text-slate-950 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]',
                                children: pieceChar
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ChessBoard.tsx",
                                lineNumber: 243,
                                columnNumber: 17
                            }, this)
                        ]
                    }, sq, true, {
                        fileName: "[project]/src/components/games/ChessBoard.tsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/games/ChessBoard.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            pendingPromotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pop flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-white p-3 shadow-lg dark:bg-slate-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold",
                        children: "Promote pawn to:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/ChessBoard.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this),
                    [
                        'q',
                        'r',
                        'b',
                        'n'
                    ].map((promo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                onAction({
                                    type: 'move',
                                    playerId: selfPlayerId,
                                    from: pendingPromotion.from,
                                    to: pendingPromotion.to,
                                    promotion: promo
                                });
                                setPendingPromotion(null);
                            },
                            className: "rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-bold text-white uppercase hover:bg-indigo-500",
                            children: promo
                        }, promo, false, {
                            fileName: "[project]/src/components/games/ChessBoard.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/ChessBoard.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this),
            !isSpectator && !state.outcome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: Boolean(state.drawOfferBy),
                        onClick: ()=>onAction({
                                type: 'offer_draw',
                                playerId: selfPlayerId
                            }),
                        className: "flex items-center gap-1.5 rounded-xl border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ChessBoard.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this),
                            state.drawOfferBy === selfPlayerId ? 'Draw Offered' : 'Offer Draw'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/games/ChessBoard.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onAction({
                                type: 'resign',
                                playerId: selfPlayerId
                            }),
                        className: "flex items-center gap-1.5 rounded-xl border border-rose-500/40 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-500/10 dark:text-rose-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ChessBoard.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this),
                            "Resign"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/games/ChessBoard.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/ChessBoard.tsx",
                lineNumber: 286,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/games/ChessBoard.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/games/ColorRushBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorRushBoard",
    ()=>ColorRushBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-exclamation-point.mjs [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left-right.mjs [app-ssr] (ecmascript) <export default as ArrowLeftRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.mjs [app-ssr] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sprout.mjs [app-ssr] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves-horizontal.mjs [app-ssr] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$colorRush$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/colorRush.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const SUIT_META = {
    coral: {
        label: 'Coral',
        bg: 'from-orange-500 to-rose-600',
        border: 'border-orange-300',
        pill: 'bg-orange-500 text-white'
    },
    teal: {
        label: 'Teal',
        bg: 'from-cyan-500 to-teal-700',
        border: 'border-cyan-300',
        pill: 'bg-cyan-600 text-white'
    },
    plum: {
        label: 'Plum',
        bg: 'from-purple-500 to-violet-800',
        border: 'border-purple-300',
        pill: 'bg-purple-600 text-white'
    },
    lime: {
        label: 'Lime',
        bg: 'from-lime-500 to-emerald-700',
        border: 'border-lime-300',
        pill: 'bg-lime-600 text-slate-950'
    },
    prism: {
        label: 'Prism',
        bg: 'from-fuchsia-600 via-indigo-600 to-cyan-500',
        border: 'border-white/70',
        pill: 'bg-slate-900 text-white'
    }
};
function SuitGlyph({ suit, className = 'h-4 w-4' }) {
    switch(suit){
        case 'coral':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                className: className
            }, void 0, false, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 69,
                columnNumber: 14
            }, this);
        case 'teal':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                className: className
            }, void 0, false, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 71,
                columnNumber: 14
            }, this);
        case 'plum':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                className: className
            }, void 0, false, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 73,
                columnNumber: 14
            }, this);
        case 'lime':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"], {
                className: className
            }, void 0, false, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 75,
                columnNumber: 14
            }, this);
        case 'prism':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                className: className
            }, void 0, false, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 77,
                columnNumber: 14
            }, this);
    }
}
function formatCardLabel(value) {
    switch(value){
        case 'skip':
            return 'SKIP';
        case 'flip':
            return 'FLIP';
        case 'plus2':
            return '+2';
        case 'prism':
            return 'PRISM';
        case 'prism4':
            return 'PRISM +4';
        default:
            return value;
    }
}
function RushCardButton({ card, playable, onClick }) {
    const meta = SUIT_META[card.suit];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        disabled: !playable || !onClick,
        onClick: onClick,
        "aria-label": `${meta.label} ${formatCardLabel(card.value)}`,
        className: `relative flex h-32 w-22 shrink-0 flex-col justify-between rounded-2xl border-2 bg-gradient-to-br p-2.5 text-white shadow-md transition sm:h-36 sm:w-24 ${meta.bg} ${meta.border} ${playable ? 'cursor-pointer hover:-translate-y-2 hover:shadow-xl ring-2 ring-white/80' : 'opacity-65'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-xs font-extrabold",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: formatCardLabel(card.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SuitGlyph, {
                        suit: card.suit,
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SuitGlyph, {
                        suit: card.suit,
                        className: "h-6 w-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right text-[10px] font-bold tracking-wider uppercase opacity-90",
                children: meta.label
            }, void 0, false, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function ColorRushBoard({ view, selfPlayerId, isSpectator, onAction }) {
    const [prismCardId, setPrismCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const isMyTurn = !isSpectator && !view.outcome && view.currentTurnPlayerId === selfPlayerId;
    const myHand = view.myHand ?? [];
    const canCallLastCard = !isSpectator && !view.outcome && myHand.length >= 1 && myHand.length <= 2 && !view.players.find((p)=>p.id === selfPlayerId)?.calledLastCard;
    const catchablePlayers = !isSpectator && !view.outcome ? view.players.filter((p)=>p.id !== selfPlayerId && p.handCount === 1 && !p.calledLastCard) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-2.5",
                children: view.players.map((p)=>{
                    const active = !view.outcome && view.currentTurnPlayerId === p.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition ${active ? 'border-rose-500 bg-rose-500/10 ring-2 ring-rose-500/30' : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: p.avatar
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: p.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-md bg-slate-900 px-2 py-0.5 font-mono text-white dark:bg-slate-800",
                                children: [
                                    p.handCount,
                                    " ",
                                    p.handCount === 1 ? 'card' : 'cards'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this),
                            p.calledLastCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-md bg-amber-500 px-1.5 py-0.5 text-[10px] font-black text-slate-950",
                                children: "LAST!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 184,
                                columnNumber: 17
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                        lineNumber: 170,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            catchablePlayers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$exclamation$2d$point$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "h-4 w-4 text-amber-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    catchablePlayers.map((target)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onAction({
                                    type: 'catch_uncalled',
                                    playerId: selfPlayerId,
                                    targetPlayerId: target.id
                                }),
                            className: "rounded-lg bg-amber-500 px-3 py-1 font-bold text-slate-950 hover:bg-amber-400",
                            children: [
                                "Catch ",
                                target.name,
                                " (+2 penalty)!"
                            ]
                        }, target.id, true, {
                            fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-slate-200 bg-slate-100/70 p-6 dark:border-slate-800 dark:bg-slate-950/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: !isMyTurn,
                        onClick: ()=>onAction({
                                type: 'draw_card',
                                playerId: selfPlayerId
                            }),
                        className: `flex h-36 w-24 flex-col items-center justify-center rounded-2xl border-2 border-slate-600 bg-gradient-to-br from-slate-800 to-slate-950 text-white shadow-lg transition ${isMyTurn ? 'cursor-pointer hover:-translate-y-1 hover:border-cyan-400' : 'opacity-70'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                className: "h-7 w-7 text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-2 text-xs font-bold",
                                children: "DRAW"
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-400",
                                children: [
                                    view.drawPileCount,
                                    " left"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RushCardButton, {
                                card: view.topCard,
                                playable: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Active Suit:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${SUIT_META[view.activeSuit].pill}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SuitGlyph, {
                                                suit: view.activeSuit,
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, this),
                                            SUIT_META[view.activeSuit].label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2 text-xs text-slate-600 dark:text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 font-semibold dark:border-slate-700 dark:bg-slate-900",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    view.direction === 1 ? 'Clockwise' : 'Counter-Clockwise'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            canCallLastCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onAction({
                                        type: 'call_last_card',
                                        playerId: selfPlayerId
                                    }),
                                className: "flex items-center gap-1.5 rounded-xl bg-amber-500 px-3.5 py-2 text-xs font-black text-slate-950 shadow-md hover:bg-amber-400 animate-pulse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this),
                                    "Call Last Card!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            prismCardId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pop flex flex-wrap items-center justify-center gap-2 rounded-xl border border-indigo-500/40 bg-white p-3 shadow-md dark:bg-slate-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold",
                        children: "Choose active suit:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$colorRush$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RUSH_SUITS"].map((suit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                onAction({
                                    type: 'play_card',
                                    playerId: selfPlayerId,
                                    cardId: prismCardId,
                                    chosenSuit: suit
                                });
                                setPrismCardId(null);
                            },
                            className: `flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold ${SUIT_META[suit].pill}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SuitGlyph, {
                                    suit: suit,
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this),
                                SUIT_META[suit].label
                            ]
                        }, suit, true, {
                            fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                            lineNumber: 275,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 272,
                columnNumber: 9
            }, this),
            isSpectator ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-xs text-slate-500",
                children: "Spectator mode: players' private hands are hidden."
            }, void 0, false, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 298,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Your Private Hand (",
                                    myHand.length,
                                    " cards)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isMyTurn ? 'Your turn — play a matching card or draw' : 'Waiting for active player'
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2.5 overflow-x-auto pb-2 pt-2",
                        children: myHand.map((card)=>{
                            const playable = isMyTurn && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$colorRush$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCardPlayable"])(card, view.topCard, view.activeSuit);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RushCardButton, {
                                card: card,
                                playable: playable,
                                onClick: ()=>{
                                    if (card.suit === 'prism') {
                                        setPrismCardId(card.id);
                                    } else {
                                        onAction({
                                            type: 'play_card',
                                            playerId: selfPlayerId,
                                            cardId: card.id
                                        });
                                    }
                                }
                            }, card.id, false, {
                                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                                lineNumber: 313,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/ColorRushBoard.tsx",
                lineNumber: 302,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/games/ColorRushBoard.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/games/LudoBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LudoBoard",
    ()=>LudoBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dices.mjs [app-ssr] (ecmascript) <export default as Dices>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$ludo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/ludo.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// 52 outer track coordinates [row, col] on a 15x15 grid (0-indexed)
// Red starts top-left (6,1) moving clockwise; Green top-right (1,8);
// Yellow bottom-right (8,13); Blue bottom-left (13,6)
const OUTER_COORDS = [
    // 0..4: Red arm top row moving right
    [
        6,
        1
    ],
    [
        6,
        2
    ],
    [
        6,
        3
    ],
    [
        6,
        4
    ],
    [
        6,
        5
    ],
    // 5..10: Top arm left col moving up
    [
        5,
        6
    ],
    [
        4,
        6
    ],
    [
        3,
        6
    ],
    [
        2,
        6
    ],
    [
        1,
        6
    ],
    [
        0,
        6
    ],
    // 11..12: Top bridge
    [
        0,
        7
    ],
    [
        0,
        8
    ],
    // 13..17: Top arm right col moving down (13 = Green start)
    [
        1,
        8
    ],
    [
        2,
        8
    ],
    [
        3,
        8
    ],
    [
        4,
        8
    ],
    [
        5,
        8
    ],
    // 18..23: Right arm top row moving right
    [
        6,
        9
    ],
    [
        6,
        10
    ],
    [
        6,
        11
    ],
    [
        6,
        12
    ],
    [
        6,
        13
    ],
    [
        6,
        14
    ],
    // 24..25: Right bridge
    [
        7,
        14
    ],
    [
        8,
        14
    ],
    // 26..30: Right arm bottom row moving left (26 = Yellow start)
    [
        8,
        13
    ],
    [
        8,
        12
    ],
    [
        8,
        11
    ],
    [
        8,
        10
    ],
    [
        8,
        9
    ],
    // 31..36: Bottom arm right col moving down
    [
        9,
        8
    ],
    [
        10,
        8
    ],
    [
        11,
        8
    ],
    [
        12,
        8
    ],
    [
        13,
        8
    ],
    [
        14,
        8
    ],
    // 37..38: Bottom bridge
    [
        14,
        7
    ],
    [
        14,
        6
    ],
    // 39..43: Bottom arm left col moving up (39 = Blue start)
    [
        13,
        6
    ],
    [
        12,
        6
    ],
    [
        11,
        6
    ],
    [
        10,
        6
    ],
    [
        9,
        6
    ],
    // 44..49: Left arm bottom row moving left
    [
        8,
        5
    ],
    [
        8,
        4
    ],
    [
        8,
        3
    ],
    [
        8,
        2
    ],
    [
        8,
        1
    ],
    [
        8,
        0
    ],
    // 50..51: Left bridge
    [
        7,
        0
    ],
    [
        6,
        0
    ]
];
const HOME_STRETCH_COORDS = {
    red: [
        [
            7,
            1
        ],
        [
            7,
            2
        ],
        [
            7,
            3
        ],
        [
            7,
            4
        ],
        [
            7,
            5
        ]
    ],
    green: [
        [
            1,
            7
        ],
        [
            2,
            7
        ],
        [
            3,
            7
        ],
        [
            4,
            7
        ],
        [
            5,
            7
        ]
    ],
    yellow: [
        [
            7,
            13
        ],
        [
            7,
            12
        ],
        [
            7,
            11
        ],
        [
            7,
            10
        ],
        [
            7,
            9
        ]
    ],
    blue: [
        [
            13,
            7
        ],
        [
            12,
            7
        ],
        [
            11,
            7
        ],
        [
            10,
            7
        ],
        [
            9,
            7
        ]
    ]
};
const YARD_SLOTS = {
    red: [
        [
            1.5,
            1.5
        ],
        [
            1.5,
            3.5
        ],
        [
            3.5,
            1.5
        ],
        [
            3.5,
            3.5
        ]
    ],
    green: [
        [
            1.5,
            10.5
        ],
        [
            1.5,
            12.5
        ],
        [
            3.5,
            10.5
        ],
        [
            3.5,
            12.5
        ]
    ],
    yellow: [
        [
            10.5,
            10.5
        ],
        [
            10.5,
            12.5
        ],
        [
            12.5,
            10.5
        ],
        [
            12.5,
            12.5
        ]
    ],
    blue: [
        [
            10.5,
            1.5
        ],
        [
            10.5,
            3.5
        ],
        [
            12.5,
            1.5
        ],
        [
            12.5,
            3.5
        ]
    ]
};
const FINISH_COORDS = {
    red: [
        7,
        6.1
    ],
    green: [
        6.1,
        7
    ],
    yellow: [
        7,
        7.9
    ],
    blue: [
        7.9,
        7
    ]
};
const COLOR_STYLES = {
    red: {
        bg: 'bg-rose-500',
        token: 'bg-rose-600 border-rose-200 text-white',
        border: 'border-rose-500',
        badge: 'bg-rose-500/15 text-rose-600 dark:text-rose-300'
    },
    green: {
        bg: 'bg-emerald-500',
        token: 'bg-emerald-600 border-emerald-200 text-white',
        border: 'border-emerald-500',
        badge: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300'
    },
    yellow: {
        bg: 'bg-amber-400',
        token: 'bg-amber-500 border-amber-100 text-slate-950',
        border: 'border-amber-500',
        badge: 'bg-amber-500/15 text-amber-600 dark:text-amber-300'
    },
    blue: {
        bg: 'bg-sky-500',
        token: 'bg-sky-600 border-sky-200 text-white',
        border: 'border-sky-500',
        badge: 'bg-sky-500/15 text-sky-600 dark:text-sky-300'
    }
};
function tokenGridCoord(color, tokenIndex, progress) {
    if (progress === -1) {
        return YARD_SLOTS[color][tokenIndex];
    }
    if (progress === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$ludo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LUDO_HOME_GOAL"]) {
        return FINISH_COORDS[color];
    }
    if (progress >= 51) {
        return HOME_STRETCH_COORDS[color][progress - 51];
    }
    const trackIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$ludo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOuterTrackIndex"])(color, progress);
    return OUTER_COORDS[trackIdx];
}
function LudoBoard({ state, selfPlayerId, isSpectator, onAction }) {
    const myColor = state.playerColors[selfPlayerId];
    const isMyTurn = !isSpectator && !state.outcome && state.currentTurnPlayerId === selfPlayerId;
    const canRoll = isMyTurn && state.turnStep === 'roll';
    const movableTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!isMyTurn || state.turnStep !== 'move' || state.diceValue === null || !myColor) {
            return new Set();
        }
        const set = new Set();
        state.tokens[myColor].forEach((pos, idx)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$ludo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canMoveLudoToken"])(pos, state.diceValue)) set.add(idx);
        });
        return set;
    }, [
        isMyTurn,
        state.turnStep,
        state.diceValue,
        state.tokens,
        myColor
    ]);
    // Map outer/stretch cell backgrounds
    const cellLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        OUTER_COORDS.forEach(([r, c], idx)=>{
            let bg = 'bg-white dark:bg-slate-900';
            if (idx === 0) bg = 'bg-rose-500/80';
            else if (idx === 13) bg = 'bg-emerald-500/80';
            else if (idx === 26) bg = 'bg-amber-400/85';
            else if (idx === 39) bg = 'bg-sky-500/80';
            map.set(`${r},${c}`, {
                bg,
                safe: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$ludo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LUDO_SAFE_INDICES"].has(idx)
            });
        });
        Object.keys(HOME_STRETCH_COORDS).forEach((color)=>{
            const tint = color === 'red' ? 'bg-rose-400/60' : color === 'green' ? 'bg-emerald-400/60' : color === 'yellow' ? 'bg-amber-300/70' : 'bg-sky-400/60';
            HOME_STRETCH_COORDS[color].forEach(([r, c])=>{
                map.set(`${r},${c}`, {
                    bg: tint
                });
            });
        });
        return map;
    }, []);
    // Group tokens sharing the same coordinates to offset them cleanly
    const renderedTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const list = [];
        const buckets = new Map();
        for (const color of state.activeColors){
            state.tokens[color].forEach((progress, tokenIndex)=>{
                const coord = tokenGridCoord(color, tokenIndex, progress);
                const key = `${coord[0]},${coord[1]}`;
                const count = buckets.get(key) ?? 0;
                buckets.set(key, count + 1);
                const offsets = [
                    [
                        0,
                        0
                    ],
                    [
                        0.18,
                        -0.18
                    ],
                    [
                        -0.18,
                        0.18
                    ],
                    [
                        0.18,
                        0.18
                    ],
                    [
                        -0.18,
                        -0.18
                    ]
                ];
                const [ox, oy] = offsets[count % offsets.length];
                list.push({
                    color,
                    tokenIndex,
                    progress,
                    coord,
                    offsetX: ox,
                    offsetY: oy
                });
            });
        }
        return list;
    }, [
        state.activeColors,
        state.tokens
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: state.players.map((p)=>{
                            const color = state.playerColors[p.id];
                            const active = !state.outcome && state.currentTurnPlayerId === p.id;
                            const finishedCount = state.tokens[color].filter((x)=>x === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$ludo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LUDO_HOME_GOAL"]).length;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-semibold transition ${active ? `${COLOR_STYLES[color].border} ${COLOR_STYLES[color].badge} ring-2 ring-current/25` : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `h-3 w-3 rounded-full ${COLOR_STYLES[color].bg}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/games/LudoBoard.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: p.avatar
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/games/LudoBoard.tsx",
                                        lineNumber: 239,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: p.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/games/LudoBoard.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] opacity-75",
                                        children: [
                                            "(",
                                            finishedCount,
                                            "/4)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/games/LudoBoard.tsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/components/games/LudoBoard.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/LudoBoard.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            state.diceValue !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-300 bg-white font-mono text-lg font-black text-slate-900 shadow-xs dark:border-slate-700 dark:bg-slate-950 dark:text-white",
                                children: state.diceValue
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/LudoBoard.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: !canRoll,
                                onClick: ()=>onAction({
                                        type: 'roll_dice',
                                        playerId: selfPlayerId
                                    }),
                                className: "flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__["Dices"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/games/LudoBoard.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    canRoll ? 'Roll Dice' : isMyTurn && state.turnStep === 'move' ? 'Select a Token' : 'Waiting...'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/games/LudoBoard.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/games/LudoBoard.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/LudoBoard.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square w-full max-w-[480px] overflow-hidden rounded-2xl border-4 border-slate-800 bg-slate-200 shadow-xl dark:bg-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid h-full w-full grid-cols-15 grid-rows-15",
                        children: Array.from({
                            length: 225
                        }, (_, i)=>{
                            const r = Math.floor(i / 15);
                            const c = i % 15;
                            // Corner Yards
                            const inRedYard = r < 6 && c < 6;
                            const inGreenYard = r < 6 && c > 8;
                            const inBlueYard = r > 8 && c < 6;
                            const inYellowYard = r > 8 && c > 8;
                            const inCenter = r >= 6 && r <= 8 && c >= 6 && c <= 8;
                            if (inRedYard || inGreenYard || inBlueYard || inYellowYard) {
                                const yardBg = inRedYard ? 'bg-rose-500' : inGreenYard ? 'bg-emerald-500' : inYellowYard ? 'bg-amber-400' : 'bg-sky-500';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: yardBg
                                }, i, false, {
                                    fileName: "[project]/src/components/games/LudoBoard.tsx",
                                    lineNumber: 291,
                                    columnNumber: 22
                                }, this);
                            }
                            if (inCenter) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-slate-400/20 bg-gradient-to-br from-indigo-500/30 to-amber-500/30"
                                }, i, false, {
                                    fileName: "[project]/src/components/games/LudoBoard.tsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, this);
                            }
                            const cell = cellLookup.get(`${r},${c}`);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center justify-center border border-slate-300/70 dark:border-slate-700/70 ${cell?.bg ?? 'bg-white dark:bg-slate-900'}`,
                                children: cell?.safe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    className: "h-3 w-3 text-slate-600/70 dark:text-slate-200/80"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/games/LudoBoard.tsx",
                                    lineNumber: 312,
                                    columnNumber: 19
                                }, this)
                            }, i, false, {
                                fileName: "[project]/src/components/games/LudoBoard.tsx",
                                lineNumber: 305,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/LudoBoard.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute top-[6.67%] left-[6.67%] h-[26.67%] w-[26.67%] rounded-xl bg-white/95 shadow-inner dark:bg-slate-950/90"
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/LudoBoard.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute top-[6.67%] right-[6.67%] h-[26.67%] w-[26.67%] rounded-xl bg-white/95 shadow-inner dark:bg-slate-950/90"
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/LudoBoard.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute bottom-[6.67%] left-[6.67%] h-[26.67%] w-[26.67%] rounded-xl bg-white/95 shadow-inner dark:bg-slate-950/90"
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/LudoBoard.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute right-[6.67%] bottom-[6.67%] h-[26.67%] w-[26.67%] rounded-xl bg-white/95 shadow-inner dark:bg-slate-950/90"
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/LudoBoard.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    renderedTokens.map(({ color, tokenIndex, coord, offsetX, offsetY })=>{
                        const isMovable = color === myColor && movableTokens.has(tokenIndex);
                        const topPct = (coord[0] + 0.5 + offsetY) / 15 * 100;
                        const leftPct = (coord[1] + 0.5 + offsetX) / 15 * 100;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: !isMovable,
                            onClick: ()=>onAction({
                                    type: 'move_token',
                                    playerId: selfPlayerId,
                                    tokenIndex
                                }),
                            "aria-label": `${color} token ${tokenIndex + 1}`,
                            style: {
                                top: `${topPct}%`,
                                left: `${leftPct}%`,
                                transform: 'translate(-50%, -50%)'
                            },
                            className: `absolute flex h-[5.4%] w-[5.4%] items-center justify-center rounded-full border-2 text-[10px] font-black shadow-md transition-all duration-200 ${COLOR_STYLES[color].token} ${isMovable ? 'z-20 scale-125 cursor-pointer ring-4 ring-white animate-bounce' : 'z-10'}`,
                            children: tokenIndex + 1
                        }, `${color}-${tokenIndex}`, false, {
                            fileName: "[project]/src/components/games/LudoBoard.tsx",
                            lineNumber: 334,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/LudoBoard.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/games/LudoBoard.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/games/TicTacToeBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TicTacToeBoard",
    ()=>TicTacToeBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function TicTacToeBoard({ state, selfPlayerId, isSpectator, onAction }) {
    const isMyTurn = !isSpectator && !state.winnerIds && !state.isDraw && state.currentTurnPlayerId === selfPlayerId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-3",
                children: state.players.map((p)=>{
                    const mark = state.marks[p.id];
                    const active = !state.winnerIds && !state.isDraw && state.currentTurnPlayerId === p.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${active ? 'border-sky-500 bg-sky-500/10 text-sky-700 ring-2 ring-sky-500/30 dark:text-sky-300' : 'border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: p.avatar
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/TicTacToeBoard.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: p.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/TicTacToeBoard.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `ml-1 rounded-md px-2 py-0.5 font-mono text-xs font-bold ${mark === 'X' ? 'bg-sky-500 text-white' : 'bg-rose-500 text-white'}`,
                                children: mark
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/TicTacToeBoard.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/components/games/TicTacToeBoard.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/games/TicTacToeBoard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "grid",
                "aria-label": "Tic-Tac-Toe board",
                className: "grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-slate-100 p-4 shadow-inner dark:border-slate-800 dark:bg-slate-950",
                children: state.board.map((cell, idx)=>{
                    const isWinCell = state.winningLine?.includes(idx) ?? false;
                    const canClick = isMyTurn && cell === null;
                    const row = Math.floor(idx / 3) + 1;
                    const col = [
                        'A',
                        'B',
                        'C'
                    ][idx % 3];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: !canClick,
                        onClick: ()=>onAction({
                                type: 'place',
                                playerId: selfPlayerId,
                                cell: idx
                            }),
                        "aria-label": `Square ${col}${row}, ${cell ?? 'empty'}`,
                        className: `flex h-24 w-24 items-center justify-center rounded-2xl border text-4xl font-black transition sm:h-28 sm:w-28 ${isWinCell ? 'border-emerald-500 bg-emerald-500/20 text-emerald-500 shadow-lg' : cell === 'X' ? 'border-sky-500/30 bg-white text-sky-500 dark:bg-slate-900' : cell === 'O' ? 'border-rose-500/30 bg-white text-rose-500 dark:bg-slate-900' : canClick ? 'cursor-pointer border-slate-200 bg-white hover:border-sky-400 hover:bg-sky-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-500 dark:hover:bg-slate-800' : 'border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900/70'}`,
                        children: cell && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "animate-pop",
                            children: cell
                        }, void 0, false, {
                            fileName: "[project]/src/components/games/TicTacToeBoard.tsx",
                            lineNumber: 89,
                            columnNumber: 24
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/src/components/games/TicTacToeBoard.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/games/TicTacToeBoard.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/games/TicTacToeBoard.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/games/TriviaBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TriviaBoard",
    ()=>TriviaBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-ssr] (ecmascript) <export default as XCircle>");
'use client';
;
;
;
function TriviaBoard({ view, selfPlayerId, isHost, isSpectator, onAction, onHostSystemAction }) {
    const [secondsLeft, setSecondsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(view.durationSec);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (view.outcome || view.phase !== 'question') return;
        const update = ()=>{
            const elapsed = (Date.now() - view.questionStartedAt) / 1000;
            const rem = Math.max(0, Math.ceil(view.durationSec - elapsed));
            setSecondsLeft(rem);
            if (rem === 0 && isHost) {
                onHostSystemAction({
                    type: 'reveal_question',
                    playerId: selfPlayerId
                });
            }
        };
        const id = setInterval(update, 250);
        queueMicrotask(update);
        return ()=>clearInterval(id);
    }, [
        view.questionIndex,
        view.phase,
        view.questionStartedAt,
        view.durationSec,
        view.outcome,
        isHost,
        selfPlayerId,
        onHostSystemAction
    ]);
    const sortedBoard = [
        ...view.players
    ].sort((a, b)=>(view.scores[b.id] ?? 0) - (view.scores[a.id] ?? 0));
    const hasAnswered = view.answeredPlayerIds.includes(selfPlayerId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-semibold dark:bg-slate-950",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-lg bg-indigo-500/15 px-2.5 py-1 text-indigo-600 dark:text-indigo-300",
                                children: view.packTitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Question ",
                                    view.questionIndex + 1,
                                    " / ",
                                    view.totalQuestions
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Answered: ",
                                    view.answeredPlayerIds.length,
                                    "/",
                                    view.players.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            view.phase === 'question' && !view.outcome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex items-center gap-1 rounded-lg px-2.5 py-1 font-mono font-bold ${secondsLeft <= 5 ? 'bg-rose-500 text-white' : 'bg-slate-900 text-white dark:bg-slate-800'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    secondsLeft,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-bold tracking-wider text-indigo-500 uppercase",
                        children: view.currentQuestion.category
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1.5 text-lg font-bold text-slate-900 dark:text-white",
                        children: view.currentQuestion.prompt
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-3 sm:grid-cols-2",
                        children: view.currentQuestion.choices.map((choice, idx)=>{
                            const isMine = view.myChoiceIndex === idx;
                            const isCorrect = view.phase === 'reveal' && view.currentQuestion.correctIndex === idx;
                            const isWrongMine = view.phase === 'reveal' && isMine && view.currentQuestion.correctIndex !== idx;
                            const canClick = !isSpectator && !view.outcome && view.phase === 'question' && !hasAnswered;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: !canClick,
                                onClick: ()=>onAction({
                                        type: 'submit_answer',
                                        playerId: selfPlayerId,
                                        choiceIndex: idx
                                    }),
                                className: `flex items-center justify-between gap-2 rounded-xl border p-3.5 text-left text-sm font-semibold transition ${isCorrect ? 'border-emerald-500 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300' : isWrongMine ? 'border-rose-500 bg-rose-500/15 text-rose-700 dark:text-rose-300' : isMine ? 'border-indigo-500 bg-indigo-500/15 text-indigo-700 dark:text-indigo-200' : canClick ? 'cursor-pointer border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 dark:border-slate-800 dark:hover:border-indigo-500 dark:hover:bg-slate-800' : 'border-slate-200 opacity-75 dark:border-slate-800'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 font-mono text-xs opacity-60",
                                                children: [
                                                    String.fromCharCode(65 + idx),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this),
                                            choice
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    isCorrect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-4 w-4 shrink-0 text-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                        lineNumber: 143,
                                        columnNumber: 31
                                    }, this),
                                    isWrongMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                        className: "h-4 w-4 shrink-0 text-rose-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    isHost && !view.outcome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex justify-end gap-2",
                        children: view.phase === 'question' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onAction({
                                    type: 'reveal_question',
                                    playerId: selfPlayerId
                                }),
                            className: "flex items-center gap-1.5 rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this),
                                "Reveal Now"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/games/TriviaBoard.tsx",
                            lineNumber: 154,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onAction({
                                    type: 'next_question',
                                    playerId: selfPlayerId
                                }),
                            className: "flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-500",
                            children: [
                                view.questionIndex + 1 >= view.totalQuestions ? 'Finish & Final Scores' : 'Next Question',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/games/TriviaBoard.tsx",
                            lineNumber: 165,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "flex items-center gap-1.5 text-xs font-bold tracking-wide text-slate-500 uppercase",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "h-3.5 w-3.5 text-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            "Live Scoreboard"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2.5 grid gap-2 sm:grid-cols-2",
                        children: sortedBoard.map((p, rank)=>{
                            const sub = view.revealedSubmissions?.[p.id];
                            const answered = view.answeredPlayerIds.includes(p.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-xs dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-bold text-slate-400",
                                                children: [
                                                    "#",
                                                    rank + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: p.avatar
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                                lineNumber: 202,
                                                columnNumber: 19
                                            }, this),
                                            view.phase === 'question' && answered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] text-emerald-600 dark:text-emerald-300",
                                                children: "Locked"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                                lineNumber: 204,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 font-mono font-bold",
                                        children: [
                                            sub && sub.pointsAwarded > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-500",
                                                children: [
                                                    "+",
                                                    sub.pointsAwarded
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    view.scores[p.id] ?? 0,
                                                    " pts"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/games/TriviaBoard.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/games/TriviaBoard.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/games/TriviaBoard.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/room/ChatBox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatBox",
    ()=>ChatBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.mjs [app-ssr] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square-off.mjs [app-ssr] (ecmascript) <export default as MessageSquareOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-ssr] (ecmascript) <export default as VolumeX>");
'use client';
;
;
;
function ChatBox({ messages, chatEnabled, selfPlayerId, isHost, mutedPlayerIds, blockedPlayerIds, onSend, onToggleMute, onToggleBlock }) {
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const selfMuted = mutedPlayerIds.includes(selfPlayerId);
    const visibleMessages = messages.filter((m)=>!blockedPlayerIds.includes(m.senderPlayerId));
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!text.trim() || !chatEnabled || selfMuted) return;
        onSend(text.trim());
        setText('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": "Room chat",
        className: "flex h-72 flex-col rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-slate-200 px-3.5 py-2.5 dark:border-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold tracking-wide text-slate-600 uppercase dark:text-slate-300",
                        children: "Room Chat"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/ChatBox.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    !chatEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareOff$3e$__["MessageSquareOff"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/room/ChatBox.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            "Disabled by host"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/room/ChatBox.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/ChatBox.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-2 overflow-y-auto p-3 text-sm",
                children: !chatEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500 dark:text-slate-400",
                    children: "Chat is turned off for this room."
                }, void 0, false, {
                    fileName: "[project]/src/components/room/ChatBox.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this) : visibleMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500 dark:text-slate-400",
                    children: "No messages yet. Say hello!"
                }, void 0, false, {
                    fileName: "[project]/src/components/room/ChatBox.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this) : visibleMessages.map((m)=>{
                    const isSelf = m.senderPlayerId === selfPlayerId;
                    const isMuted = mutedPlayerIds.includes(m.senderPlayerId);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex items-start justify-between gap-2 rounded-xl bg-slate-50 px-2.5 py-1.5 dark:bg-slate-800/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: m.senderAvatar
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/room/ChatBox.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: m.senderName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/room/ChatBox.tsx",
                                                lineNumber: 82,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-normal text-slate-400",
                                                children: new Date(m.timestamp).toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/room/ChatBox.tsx",
                                                lineNumber: 83,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/room/ChatBox.tsx",
                                        lineNumber: 80,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 break-words text-xs text-slate-700 dark:text-slate-300",
                                        children: m.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/ChatBox.tsx",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/ChatBox.tsx",
                                lineNumber: 79,
                                columnNumber: 17
                            }, this),
                            !isSelf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex shrink-0 items-center gap-1 opacity-75 group-hover:opacity-100",
                                children: [
                                    isHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onToggleMute(m.senderPlayerId),
                                        className: `rounded p-1 text-xs transition ${isMuted ? 'bg-amber-500/20 text-amber-500' : 'text-slate-400 hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-700'}`,
                                        title: isMuted ? 'Unmute in room' : 'Mute in room',
                                        "aria-label": isMuted ? 'Unmute player' : 'Mute player',
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/room/ChatBox.tsx",
                                            lineNumber: 109,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/ChatBox.tsx",
                                        lineNumber: 98,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onToggleBlock(m.senderPlayerId),
                                        className: "rounded p-1 text-slate-400 transition hover:bg-rose-500/15 hover:text-rose-500",
                                        title: "Block messages from this player",
                                        "aria-label": `Block ${m.senderName}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/room/ChatBox.tsx",
                                            lineNumber: 119,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/room/ChatBox.tsx",
                                        lineNumber: 112,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/room/ChatBox.tsx",
                                lineNumber: 96,
                                columnNumber: 19
                            }, this)
                        ]
                    }, m.id, true, {
                        fileName: "[project]/src/components/room/ChatBox.tsx",
                        lineNumber: 75,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/room/ChatBox.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "flex items-center gap-2 border-t border-slate-200 p-2.5 dark:border-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: text,
                        onChange: (e)=>setText(e.target.value),
                        disabled: !chatEnabled || selfMuted,
                        maxLength: 300,
                        placeholder: !chatEnabled ? 'Chat disabled' : selfMuted ? 'You are muted by host' : 'Type a message...',
                        "aria-label": "Chat message",
                        className: "min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs focus:border-indigo-500 focus:outline-none disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950"
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/ChatBox.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: !chatEnabled || selfMuted || !text.trim(),
                        "aria-label": "Send message",
                        className: "rounded-xl bg-indigo-600 p-2 text-white transition hover:bg-indigo-500 disabled:opacity-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/room/ChatBox.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/room/ChatBox.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/room/ChatBox.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/ChatBox.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/room/QrCodeCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QrCodeCard",
    ()=>QrCodeCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode/lib/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function QrCodeCard({ url }) {
    const [dataUrl, setDataUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let active = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].toDataURL(url, {
            width: 168,
            margin: 1,
            color: {
                dark: '#0f172a',
                light: '#ffffff'
            }
        }).then((res)=>{
            if (active) setDataUrl(res);
        }).catch(()=>{
            if (active) setDataUrl('');
        });
        return ()=>{
            active = false;
        };
    }, [
        url
    ]);
    if (!dataUrl) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex flex-col items-center rounded-xl border border-slate-200 bg-white p-2.5 shadow-xs dark:border-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: dataUrl,
                alt: "QR code to join room",
                width: 136,
                height: 136,
                className: "rounded-lg"
            }, void 0, false, {
                fileName: "[project]/src/components/room/QrCodeCard.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1.5 text-[11px] font-medium text-slate-600",
                children: "Scan to join"
            }, void 0, false, {
                fileName: "[project]/src/components/room/QrCodeCard.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/room/QrCodeCard.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/games/checkers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkersEngine",
    ()=>checkersEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/types.ts [app-ssr] (ecmascript)");
;
function pieceColor(p) {
    if (!p) return null;
    return p === 'r' || p === 'R' ? 'r' : 'b';
}
function isKing(p) {
    return p === 'R' || p === 'B';
}
function rc(idx) {
    return [
        Math.floor(idx / 8),
        idx % 8
    ];
}
function toIdx(r, c) {
    return r * 8 + c;
}
function inBounds(r, c) {
    return r >= 0 && r < 8 && c >= 0 && c < 8;
}
function sqLabel(idx) {
    const [r, c] = rc(idx);
    const col = String.fromCharCode(65 + c);
    return `${col}${8 - r}`;
}
function getMoveDirs(piece) {
    if (isKing(piece)) {
        return [
            [
                -1,
                -1
            ],
            [
                -1,
                1
            ],
            [
                1,
                -1
            ],
            [
                1,
                1
            ]
        ];
    }
    return piece === 'r' ? [
        [
            -1,
            -1
        ],
        [
            -1,
            1
        ]
    ] : [
        [
            1,
            -1
        ],
        [
            1,
            1
        ]
    ];
}
function getPieceCaptures(board, from, color) {
    const piece = board[from];
    if (!piece || pieceColor(piece) !== color) return [];
    const [r, c] = rc(from);
    const out = [];
    for (const [dr, dc] of getMoveDirs(piece)){
        const mr = r + dr;
        const mc = c + dc;
        const lr = r + dr * 2;
        const lc = c + dc * 2;
        if (!inBounds(lr, lc)) continue;
        const midIdx = toIdx(mr, mc);
        const landIdx = toIdx(lr, lc);
        const mid = board[midIdx] ?? null;
        if (mid && pieceColor(mid) !== color && board[landIdx] === null) {
            out.push({
                from,
                to: landIdx,
                captured: midIdx
            });
        }
    }
    return out;
}
function getPieceQuietMoves(board, from, color) {
    const piece = board[from];
    if (!piece || pieceColor(piece) !== color) return [];
    const [r, c] = rc(from);
    const out = [];
    for (const [dr, dc] of getMoveDirs(piece)){
        const nr = r + dr;
        const nc = c + dc;
        if (!inBounds(nr, nc)) continue;
        const landIdx = toIdx(nr, nc);
        if (board[landIdx] === null) {
            out.push({
                from,
                to: landIdx,
                captured: null
            });
        }
    }
    return out;
}
function getAllLegalMovesForColor(board, color, mustContinueFrom) {
    if (mustContinueFrom !== null) {
        return getPieceCaptures(board, mustContinueFrom, color);
    }
    const captures = [];
    const quiet = [];
    for(let i = 0; i < 64; i++){
        const p = board[i] ?? null;
        if (!p || pieceColor(p) !== color) continue;
        captures.push(...getPieceCaptures(board, i, color));
        if (captures.length === 0) {
            quiet.push(...getPieceQuietMoves(board, i, color));
        }
    }
    // Forced capture rule
    return captures.length > 0 ? captures : quiet;
}
function createInitialBoard() {
    const board = Array(64).fill(null);
    for(let r = 0; r < 8; r++){
        for(let c = 0; c < 8; c++){
            if ((r + c) % 2 === 1) {
                if (r < 3) board[toIdx(r, c)] = 'b';
                else if (r > 4) board[toIdx(r, c)] = 'r';
            }
        }
    }
    return board;
}
const checkersEngine = {
    id: 'checkers',
    name: 'Checkers',
    minPlayers: 2,
    maxPlayers: 2,
    supportsBot: true,
    init (players) {
        if (players.length !== 2) {
            throw new Error('Checkers requires exactly 2 players.');
        }
        const sorted = [
            ...players
        ].sort((a, b)=>a.seatIndex - b.seatIndex);
        const p0 = sorted[0];
        const p1 = sorted[1];
        return {
            board: createInitialBoard(),
            players: sorted,
            colors: {
                [p0.id]: 'r',
                [p1.id]: 'b'
            },
            currentTurnPlayerId: p0.id,
            mustContinueFrom: null,
            pliesWithoutCaptureOrAdvance: 0,
            outcome: null,
            history: []
        };
    },
    getLegalActions (state, playerId) {
        if (state.outcome || state.currentTurnPlayerId !== playerId) return [];
        const color = state.colors[playerId];
        if (!color) return [];
        return getAllLegalMovesForColor(state.board, color, state.mustContinueFrom).map((m)=>({
                type: 'move',
                playerId,
                from: m.from,
                to: m.to
            }));
    },
    applyAction (state, action) {
        if (state.outcome) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Match is already over.');
        }
        if (action.type !== 'move') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Invalid action type for Checkers.');
        }
        if (action.playerId !== state.currentTurnPlayerId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Not your turn.');
        }
        const color = state.colors[action.playerId];
        if (!color) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Player is not in this match.');
        }
        const legal = getAllLegalMovesForColor(state.board, color, state.mustContinueFrom);
        const matched = legal.find((m)=>m.from === action.from && m.to === action.to);
        if (!matched) {
            const hasForcedCapture = legal.some((m)=>m.captured !== null);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"](hasForcedCapture ? 'Illegal move: a capture jump is mandatory.' : 'Illegal checkers move.');
        }
        const nextBoard = [
            ...state.board
        ];
        const movingPiece = nextBoard[matched.from];
        nextBoard[matched.from] = null;
        if (matched.captured !== null) {
            nextBoard[matched.captured] = null;
        }
        const [destRow] = rc(matched.to);
        const shouldPromote = !isKing(movingPiece) && (color === 'r' && destRow === 0 || color === 'b' && destRow === 7);
        const placedPiece = shouldPromote ? color === 'r' ? 'R' : 'B' : movingPiece;
        nextBoard[matched.to] = placedPiece;
        // Multi-jump check: only if this move was a capture and the piece did NOT just promote
        const followUpCaptures = matched.captured !== null && !shouldPromote ? getPieceCaptures(nextBoard, matched.to, color) : [];
        const continuesTurn = followUpCaptures.length > 0;
        const otherPlayer = state.players.find((p)=>p.id !== action.playerId);
        const nextTurnPlayerId = continuesTurn ? action.playerId : otherPlayer.id;
        const nextColor = state.colors[nextTurnPlayerId];
        const pliesReset = matched.captured !== null || !isKing(movingPiece);
        const nextPlies = pliesReset ? 0 : state.pliesWithoutCaptureOrAdvance + 1;
        let outcome = null;
        if (!continuesTurn) {
            const oppMoves = getAllLegalMovesForColor(nextBoard, nextColor, null);
            if (oppMoves.length === 0) {
                const winner = state.players.find((p)=>p.id === action.playerId);
                outcome = {
                    winnerIds: [
                        action.playerId
                    ],
                    reason: `${winner?.name ?? 'Player'} won — opponent has no legal moves.`
                };
            } else if (nextPlies >= 80) {
                outcome = {
                    winnerIds: [],
                    reason: '40 moves without capture or pawn advance — Draw.'
                };
            }
        }
        const moveLabel = `${sqLabel(matched.from)}${matched.captured !== null ? '×' : '→'}${sqLabel(matched.to)}${shouldPromote ? ' (King)' : ''}`;
        return {
            ...state,
            board: nextBoard,
            currentTurnPlayerId: nextTurnPlayerId,
            mustContinueFrom: continuesTurn ? matched.to : null,
            pliesWithoutCaptureOrAdvance: nextPlies,
            outcome,
            history: [
                ...state.history,
                {
                    playerId: action.playerId,
                    from: matched.from,
                    to: matched.to,
                    captured: matched.captured,
                    promoted: shouldPromote,
                    label: moveLabel
                }
            ]
        };
    },
    isGameOver (state) {
        return state.outcome;
    },
    getView (state) {
        return state;
    },
    chooseBotAction (state, botPlayerId) {
        const legal = this.getLegalActions(state, botPlayerId);
        if (legal.length === 0) return null;
        let best = legal[0];
        let bestScore = -Infinity;
        const botColor = state.colors[botPlayerId];
        for (const act of legal){
            const next = this.applyAction(state, act);
            let score = 0;
            if (next.outcome?.winnerIds.includes(botPlayerId)) score += 1000;
            const lastEntry = next.history[next.history.length - 1];
            if (lastEntry?.captured !== null) score += 25;
            if (lastEntry?.promoted) score += 20;
            if (next.mustContinueFrom !== null) score += 15;
            // Penalize landing on a square immediately capturable if opponent moves next
            if (next.currentTurnPlayerId !== botPlayerId) {
                const oppColor = botColor === 'r' ? 'b' : 'r';
                const oppMoves = getAllLegalMovesForColor(next.board, oppColor, null);
                if (oppMoves.some((m)=>m.captured !== null)) {
                    score -= 18;
                }
            }
            // Small positional preference for center columns
            const [, c] = rc(act.to);
            score += 3 - Math.abs(3.5 - c);
            if (score > bestScore) {
                bestScore = score;
                best = act;
            }
        }
        return best;
    }
};
}),
"[project]/src/lib/games/chess.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chessEngine",
    ()=>chessEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/chess.js/dist/esm/chess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/types.ts [app-ssr] (ecmascript)");
;
;
function loadChess(state) {
    const chess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chess"]();
    if (state.pgn.trim()) {
        try {
            chess.loadPgn(state.pgn);
            return chess;
        } catch  {
        // Fallback to FEN if PGN empty/unparseable
        }
    }
    chess.load(state.fen);
    return chess;
}
function pieceValue(t) {
    switch(t){
        case 'p':
            return 1;
        case 'n':
        case 'b':
            return 3;
        case 'r':
            return 5;
        case 'q':
            return 9;
        case 'k':
            return 100;
    }
}
const chessEngine = {
    id: 'chess',
    name: 'Chess',
    minPlayers: 2,
    maxPlayers: 2,
    supportsBot: true,
    init (players, options) {
        if (players.length !== 2) {
            throw new Error('Chess requires exactly 2 players.');
        }
        const sorted = [
            ...players
        ].sort((a, b)=>a.seatIndex - b.seatIndex);
        const p0 = sorted[0];
        const p1 = sorted[1];
        const chess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chess$2e$js$2f$dist$2f$esm$2f$chess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chess"]();
        const clockMinutes = Number(options?.clockMinutes ?? 0);
        const initialMs = clockMinutes > 0 ? clockMinutes * 60 * 1000 : 0;
        return {
            fen: chess.fen(),
            pgn: '',
            players: sorted,
            colors: {
                [p0.id]: 'w',
                [p1.id]: 'b'
            },
            currentTurnPlayerId: p0.id,
            inCheck: false,
            drawOfferBy: null,
            outcome: null,
            clock: {
                enabled: initialMs > 0,
                initialMs,
                remainingMs: {
                    w: initialMs,
                    b: initialMs
                },
                lastTickAt: initialMs > 0 ? Date.now() : null
            },
            history: []
        };
    },
    getLegalActions (state, playerId) {
        if (state.outcome) return [];
        const playerColor = state.colors[playerId];
        if (!playerColor) return [];
        const actions = [
            {
                type: 'resign',
                playerId
            }
        ];
        if (state.drawOfferBy && state.drawOfferBy !== playerId) {
            actions.push({
                type: 'respond_draw',
                playerId,
                accept: true
            }, {
                type: 'respond_draw',
                playerId,
                accept: false
            });
        } else if (!state.drawOfferBy) {
            actions.push({
                type: 'offer_draw',
                playerId
            });
        }
        if (state.currentTurnPlayerId !== playerId) {
            return actions;
        }
        const chess = loadChess(state);
        const verboseMoves = chess.moves({
            verbose: true
        });
        for (const m of verboseMoves){
            actions.push({
                type: 'move',
                playerId,
                from: m.from,
                to: m.to,
                ...m.promotion ? {
                    promotion: m.promotion
                } : {}
            });
        }
        return actions;
    },
    applyAction (state, action) {
        if (state.outcome) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Chess match is already over.');
        }
        const actorColor = state.colors[action.playerId];
        if (!actorColor) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Player is not seated in this chess match.');
        }
        const opponent = state.players.find((p)=>p.id !== action.playerId);
        if (action.type === 'resign') {
            const actor = state.players.find((p)=>p.id === action.playerId);
            return {
                ...state,
                outcome: {
                    winnerIds: [
                        opponent.id
                    ],
                    reason: `${actor?.name ?? 'Player'} resigned.`
                }
            };
        }
        if (action.type === 'offer_draw') {
            return {
                ...state,
                drawOfferBy: action.playerId
            };
        }
        if (action.type === 'respond_draw') {
            if (!state.drawOfferBy || state.drawOfferBy === action.playerId) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('No pending draw offer to respond to.');
            }
            if (!action.accept) {
                return {
                    ...state,
                    drawOfferBy: null
                };
            }
            return {
                ...state,
                drawOfferBy: null,
                outcome: {
                    winnerIds: [],
                    reason: 'Draw agreed by mutual consent.'
                }
            };
        }
        if (action.type === 'flag_timeout') {
            if (!state.clock.enabled || state.clock.lastTickAt === null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Chess clock is not enabled.');
            }
            const turnColor = state.colors[state.currentTurnPlayerId];
            const elapsed = Date.now() - state.clock.lastTickAt;
            const rem = state.clock.remainingMs[turnColor] - elapsed;
            if (rem > 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Active player still has time on the clock.');
            }
            const winner = state.players.find((p)=>p.id !== state.currentTurnPlayerId);
            const loser = state.players.find((p)=>p.id === state.currentTurnPlayerId);
            return {
                ...state,
                clock: {
                    ...state.clock,
                    remainingMs: {
                        ...state.clock.remainingMs,
                        [turnColor]: 0
                    }
                },
                outcome: {
                    winnerIds: [
                        winner.id
                    ],
                    reason: `${loser?.name ?? 'Player'} ran out of time.`
                }
            };
        }
        if (action.type !== 'move') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Unsupported chess action.');
        }
        if (state.currentTurnPlayerId !== action.playerId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Not your turn.');
        }
        const now = Date.now();
        let updatedRemaining = {
            ...state.clock.remainingMs
        };
        if (state.clock.enabled && state.clock.lastTickAt !== null) {
            const spent = Math.max(0, now - state.clock.lastTickAt);
            const nextRem = Math.max(0, updatedRemaining[actorColor] - spent);
            updatedRemaining = {
                ...updatedRemaining,
                [actorColor]: nextRem
            };
            if (nextRem <= 0) {
                return {
                    ...state,
                    clock: {
                        ...state.clock,
                        remainingMs: updatedRemaining
                    },
                    outcome: {
                        winnerIds: [
                            opponent.id
                        ],
                        reason: 'Time expired before move completion.'
                    }
                };
            }
        }
        const chess = loadChess(state);
        let moved;
        try {
            moved = chess.move({
                from: action.from,
                to: action.to,
                promotion: action.promotion ?? 'q'
            });
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"](`Illegal chess move: ${action.from} to ${action.to}.`);
        }
        const nextTurnColor = chess.turn();
        const nextPlayer = Object.entries(state.colors).find(([, c])=>c === nextTurnColor)?.[0] ?? opponent.id;
        let outcome = null;
        if (chess.isCheckmate()) {
            const winner = state.players.find((p)=>p.id === action.playerId);
            outcome = {
                winnerIds: [
                    action.playerId
                ],
                reason: `Checkmate! ${winner?.name ?? 'Player'} wins.`
            };
        } else if (chess.isStalemate()) {
            outcome = {
                winnerIds: [],
                reason: 'Draw by stalemate.'
            };
        } else if (chess.isThreefoldRepetition()) {
            outcome = {
                winnerIds: [],
                reason: 'Draw by threefold repetition.'
            };
        } else if (chess.isInsufficientMaterial()) {
            outcome = {
                winnerIds: [],
                reason: 'Draw by insufficient material.'
            };
        } else if (chess.isDraw()) {
            outcome = {
                winnerIds: [],
                reason: 'Draw by 50-move rule.'
            };
        }
        return {
            ...state,
            fen: chess.fen(),
            pgn: chess.pgn(),
            currentTurnPlayerId: nextPlayer,
            inCheck: chess.inCheck(),
            drawOfferBy: null,
            outcome,
            clock: {
                ...state.clock,
                remainingMs: updatedRemaining,
                lastTickAt: state.clock.enabled && !outcome ? now : null
            },
            history: [
                ...state.history,
                {
                    playerId: action.playerId,
                    color: actorColor,
                    from: moved.from,
                    to: moved.to,
                    san: moved.san,
                    label: moved.san
                }
            ]
        };
    },
    isGameOver (state) {
        return state.outcome;
    },
    getView (state) {
        return state;
    },
    chooseBotAction (state, botPlayerId) {
        if (state.outcome || state.currentTurnPlayerId !== botPlayerId) {
            return null;
        }
        const chess = loadChess(state);
        const moves = chess.moves({
            verbose: true
        });
        if (moves.length === 0) return null;
        let bestMove = moves[0];
        let bestScore = -Infinity;
        for (const m of moves){
            let score = Math.random() * 0.25;
            if (m.captured) {
                score += pieceValue(m.captured) * 10 - pieceValue(m.piece);
            }
            if (m.promotion) {
                score += pieceValue(m.promotion) * 8;
            }
            chess.move(m);
            if (chess.isCheckmate()) score += 10000;
            else if (chess.inCheck()) score += 3;
            else if (chess.isStalemate()) score -= 50;
            chess.undo();
            if ([
                'd4',
                'd5',
                'e4',
                'e5'
            ].includes(m.to)) {
                score += 1.5;
            }
            if (score > bestScore) {
                bestScore = score;
                bestMove = m;
            }
        }
        return {
            type: 'move',
            playerId: botPlayerId,
            from: bestMove.from,
            to: bestMove.to,
            ...bestMove.promotion ? {
                promotion: bestMove.promotion
            } : {}
        };
    }
};
}),
"[project]/src/lib/games/colorRush.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RUSH_SUITS",
    ()=>RUSH_SUITS,
    "buildColorRushDeck",
    ()=>buildColorRushDeck,
    "colorRushEngine",
    ()=>colorRushEngine,
    "isCardPlayable",
    ()=>isCardPlayable,
    "reconstructColorRushFromView",
    ()=>reconstructColorRushFromView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/types.ts [app-ssr] (ecmascript)");
;
const RUSH_SUITS = [
    'coral',
    'teal',
    'plum',
    'lime'
];
function nextRng(seed) {
    return Math.imul(seed, 1664525) + 1013904223 >>> 0;
}
function shuffleWithSeed(items, seed) {
    const arr = [
        ...items
    ];
    let s = seed >>> 0;
    for(let i = arr.length - 1; i > 0; i--){
        s = nextRng(s);
        const j = s % (i + 1);
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return {
        shuffled: arr,
        nextSeed: s
    };
}
function buildColorRushDeck() {
    const deck = [];
    let seq = 1;
    for (const suit of RUSH_SUITS){
        deck.push({
            id: `c-${seq++}`,
            suit,
            value: '1'
        });
        const numbers = [
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9'
        ];
        for (const v of numbers){
            deck.push({
                id: `c-${seq++}`,
                suit,
                value: v
            });
            deck.push({
                id: `c-${seq++}`,
                suit,
                value: v
            });
        }
        for (const act of [
            'skip',
            'flip',
            'plus2'
        ]){
            deck.push({
                id: `c-${seq++}`,
                suit,
                value: act
            });
            deck.push({
                id: `c-${seq++}`,
                suit,
                value: act
            });
        }
    }
    for(let i = 0; i < 4; i++){
        deck.push({
            id: `c-${seq++}`,
            suit: 'prism',
            value: 'prism'
        });
        deck.push({
            id: `c-${seq++}`,
            suit: 'prism',
            value: 'prism4'
        });
    }
    return deck;
}
function isCardPlayable(card, topCard, activeSuit) {
    if (card.suit === 'prism') return true;
    if (card.suit === activeSuit) return true;
    if (card.value === topCard.value) return true;
    return false;
}
function drawCards(drawPile, discardPile, count, seed) {
    let pile = [
        ...drawPile
    ];
    let discards = [
        ...discardPile
    ];
    let s = seed;
    const drawn = [];
    for(let i = 0; i < count; i++){
        if (pile.length === 0) {
            if (discards.length <= 1) break;
            const top = discards[discards.length - 1];
            const rest = discards.slice(0, -1);
            const res = shuffleWithSeed(rest, s);
            pile = res.shuffled;
            s = res.nextSeed;
            discards = [
                top
            ];
        }
        const card = pile.pop();
        if (card) drawn.push(card);
    }
    return {
        drawn,
        drawPile: pile,
        discardPile: discards,
        nextSeed: s
    };
}
function advanceSeat(players, currentPlayerId, direction, steps = 1) {
    const idx = players.findIndex((p)=>p.id === currentPlayerId);
    const len = players.length;
    const target = ((idx + direction * steps) % len + len) % len;
    return players[target];
}
const colorRushEngine = {
    id: 'color-rush',
    name: 'Color Rush',
    minPlayers: 2,
    maxPlayers: 6,
    supportsBot: true,
    init (players, options) {
        if (players.length < 2 || players.length > 6) {
            throw new Error('Color Rush supports 2 to 6 players.');
        }
        const sorted = [
            ...players
        ].sort((a, b)=>a.seatIndex - b.seatIndex);
        const seed = typeof options?.seed === 'number' ? options.seed >>> 0 : (Date.now() ^ 0x9e3779b9) >>> 0;
        const { shuffled, nextSeed } = shuffleWithSeed(buildColorRushDeck(), seed);
        const deck = [
            ...shuffled
        ];
        const hands = {};
        const calledLastCard = {};
        for (const p of sorted){
            hands[p.id] = deck.splice(0, 7);
            calledLastCard[p.id] = false;
        }
        // Pick a non-prism starter card
        let starterIdx = deck.findIndex((c)=>c.suit !== 'prism');
        if (starterIdx === -1) starterIdx = 0;
        const [starterCard] = deck.splice(starterIdx, 1);
        const topCard = starterCard;
        const activeSuit = topCard.suit === 'prism' ? 'coral' : topCard.suit;
        return {
            players: sorted,
            hands,
            calledLastCard,
            drawPile: deck,
            discardPile: [
                topCard
            ],
            activeSuit,
            currentTurnPlayerId: sorted[0].id,
            direction: 1,
            rngState: nextSeed,
            outcome: null,
            history: [
                {
                    playerId: sorted[0].id,
                    label: `Match started (${activeSuit} ${topCard.value})`
                }
            ]
        };
    },
    getLegalActions (state, playerId) {
        if (state.outcome) return [];
        const actions = [];
        const myHand = state.hands[playerId] ?? [];
        if (myHand.length <= 2 && myHand.length >= 1 && !state.calledLastCard[playerId]) {
            actions.push({
                type: 'call_last_card',
                playerId
            });
        }
        // Any player can catch an opponent who has 1 card and forgot to call Last Card
        for (const p of state.players){
            if (p.id === playerId) continue;
            if ((state.hands[p.id]?.length ?? 0) === 1 && !state.calledLastCard[p.id]) {
                actions.push({
                    type: 'catch_uncalled',
                    playerId,
                    targetPlayerId: p.id
                });
            }
        }
        if (state.currentTurnPlayerId !== playerId) {
            return actions;
        }
        const topCard = state.discardPile[state.discardPile.length - 1];
        for (const card of myHand){
            if (isCardPlayable(card, topCard, state.activeSuit)) {
                if (card.suit === 'prism') {
                    for (const suit of RUSH_SUITS){
                        actions.push({
                            type: 'play_card',
                            playerId,
                            cardId: card.id,
                            chosenSuit: suit
                        });
                    }
                } else {
                    actions.push({
                        type: 'play_card',
                        playerId,
                        cardId: card.id
                    });
                }
            }
        }
        actions.push({
            type: 'draw_card',
            playerId
        });
        return actions;
    },
    applyAction (state, action) {
        if (state.outcome) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Match is already over.');
        }
        const actor = state.players.find((p)=>p.id === action.playerId);
        if (!actor) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Player is not seated in this match.');
        }
        if (action.type === 'call_last_card') {
            const hand = state.hands[action.playerId] ?? [];
            if (hand.length > 2 || hand.length === 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('You can only call Last Card when holding 1 or 2 cards.');
            }
            return {
                ...state,
                calledLastCard: {
                    ...state.calledLastCard,
                    [action.playerId]: true
                },
                history: [
                    ...state.history,
                    {
                        playerId: action.playerId,
                        label: `${actor.name} called Last Card!`
                    }
                ]
            };
        }
        if (action.type === 'catch_uncalled') {
            const targetHand = state.hands[action.targetPlayerId];
            const targetPlayer = state.players.find((p)=>p.id === action.targetPlayerId);
            if (!targetHand || targetHand.length !== 1 || state.calledLastCard[action.targetPlayerId]) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Target player cannot be caught right now.');
            }
            const res = drawCards(state.drawPile, state.discardPile, 2, state.rngState);
            return {
                ...state,
                hands: {
                    ...state.hands,
                    [action.targetPlayerId]: [
                        ...targetHand,
                        ...res.drawn
                    ]
                },
                drawPile: res.drawPile,
                discardPile: res.discardPile,
                rngState: res.nextSeed,
                history: [
                    ...state.history,
                    {
                        playerId: action.playerId,
                        label: `${actor.name} caught ${targetPlayer?.name ?? 'opponent'} (+2 cards)!`
                    }
                ]
            };
        }
        if (action.playerId !== state.currentTurnPlayerId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Not your turn.');
        }
        if (action.type === 'draw_card') {
            const res = drawCards(state.drawPile, state.discardPile, 1, state.rngState);
            const currentHand = state.hands[action.playerId] ?? [];
            const nextPlayer = advanceSeat(state.players, action.playerId, state.direction, 1);
            return {
                ...state,
                hands: {
                    ...state.hands,
                    [action.playerId]: [
                        ...currentHand,
                        ...res.drawn
                    ]
                },
                calledLastCard: {
                    ...state.calledLastCard,
                    [action.playerId]: false
                },
                drawPile: res.drawPile,
                discardPile: res.discardPile,
                rngState: res.nextSeed,
                currentTurnPlayerId: nextPlayer.id,
                history: [
                    ...state.history,
                    {
                        playerId: action.playerId,
                        label: `${actor.name} drew a card`
                    }
                ]
            };
        }
        if (action.type === 'play_card') {
            const myHand = state.hands[action.playerId] ?? [];
            const cardIndex = myHand.findIndex((c)=>c.id === action.cardId);
            if (cardIndex === -1) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Card is not in your hand.');
            }
            const card = myHand[cardIndex];
            const topCard = state.discardPile[state.discardPile.length - 1];
            if (!isCardPlayable(card, topCard, state.activeSuit)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Card does not match the active suit or rank.');
            }
            if (card.suit === 'prism' && !action.chosenSuit) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Must choose an active suit for Prism card.');
            }
            const remainingHand = myHand.filter((_, i)=>i !== cardIndex);
            const nextSuit = card.suit === 'prism' ? action.chosenSuit : card.suit;
            let nextDirection = state.direction;
            let nextDrawPile = state.drawPile;
            let nextDiscardPile = [
                ...state.discardPile,
                card
            ];
            let nextSeed = state.rngState;
            const nextHands = {
                ...state.hands,
                [action.playerId]: remainingHand
            };
            const nextCalled = {
                ...state.calledLastCard,
                [action.playerId]: remainingHand.length === 1 ? Boolean(state.calledLastCard[action.playerId]) : false
            };
            // Check win immediately
            if (remainingHand.length === 0) {
                return {
                    ...state,
                    hands: nextHands,
                    calledLastCard: nextCalled,
                    discardPile: nextDiscardPile,
                    activeSuit: nextSuit,
                    outcome: {
                        winnerIds: [
                            action.playerId
                        ],
                        reason: `${actor.name} emptied their hand and won Color Rush!`
                    },
                    history: [
                        ...state.history,
                        {
                            playerId: action.playerId,
                            label: `${actor.name} played final card (${nextSuit} ${card.value})!`
                        }
                    ]
                };
            }
            let steps = 1;
            let extraNote = '';
            if (card.value === 'skip') {
                steps = 2;
                extraNote = ' (Skip)';
            } else if (card.value === 'flip') {
                if (state.players.length === 2) {
                    steps = 2; // In 2-player mode, Reverse Flow acts as Skip Next
                } else {
                    nextDirection = state.direction * -1;
                }
                extraNote = ' (Reverse)';
            } else if (card.value === 'plus2' || card.value === 'prism4') {
                const penalty = card.value === 'plus2' ? 2 : 4;
                const victim = advanceSeat(state.players, action.playerId, nextDirection, 1);
                const res = drawCards(nextDrawPile, nextDiscardPile, penalty, nextSeed);
                nextDrawPile = res.drawPile;
                nextDiscardPile = res.discardPile;
                nextSeed = res.nextSeed;
                nextHands[victim.id] = [
                    ...nextHands[victim.id] ?? [],
                    ...res.drawn
                ];
                nextCalled[victim.id] = false;
                steps = 2;
                extraNote = ` (+${penalty} to ${victim.name})`;
            }
            const nextTurnPlayer = advanceSeat(state.players, action.playerId, nextDirection, steps);
            return {
                ...state,
                hands: nextHands,
                calledLastCard: nextCalled,
                drawPile: nextDrawPile,
                discardPile: nextDiscardPile,
                activeSuit: nextSuit,
                direction: nextDirection,
                currentTurnPlayerId: nextTurnPlayer.id,
                rngState: nextSeed,
                history: [
                    ...state.history,
                    {
                        playerId: action.playerId,
                        label: `${actor.name} played ${card.suit === 'prism' ? `${card.value} → ${nextSuit}` : `${card.suit} ${card.value}`}${extraNote}`
                    }
                ]
            };
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Unsupported Color Rush action.');
    },
    isGameOver (state) {
        return state.outcome;
    },
    /**
   * Strictly strips opponents' cards so each client only receives their own hand.
   * Spectators (playerId === null) receive myHand: null.
   */ getView (state, playerId) {
        const topCard = state.discardPile[state.discardPile.length - 1];
        return {
            players: state.players.map((p)=>({
                    id: p.id,
                    name: p.name,
                    avatar: p.avatar,
                    seatIndex: p.seatIndex,
                    isBot: p.isBot,
                    handCount: state.hands[p.id]?.length ?? 0,
                    calledLastCard: Boolean(state.calledLastCard[p.id])
                })),
            myHand: playerId && state.hands[playerId] ? [
                ...state.hands[playerId]
            ] : null,
            topCard,
            activeSuit: state.activeSuit,
            currentTurnPlayerId: state.currentTurnPlayerId,
            direction: state.direction,
            drawPileCount: state.drawPile.length,
            discardCount: state.discardPile.length,
            outcome: state.outcome,
            history: state.history
        };
    },
    chooseBotAction (state, botPlayerId) {
        const legal = this.getLegalActions(state, botPlayerId);
        if (legal.length === 0) return null;
        // Bot calls Last Card when holding 2 cards before playing
        const callAct = legal.find((a)=>a.type === 'call_last_card');
        if (callAct && (state.hands[botPlayerId]?.length ?? 0) <= 2) {
            return callAct;
        }
        // Prefer non-prism playable cards first, then prism, then draw
        const playNonPrism = legal.find((a)=>a.type === 'play_card' && !a.chosenSuit);
        if (playNonPrism) return playNonPrism;
        const myHand = state.hands[botPlayerId] ?? [];
        const suitCounts = {
            coral: 0,
            teal: 0,
            plum: 0,
            lime: 0
        };
        for (const c of myHand){
            if (c.suit !== 'prism') suitCounts[c.suit] += 1;
        }
        const favoriteSuit = Object.entries(suitCounts).sort((a, b)=>b[1] - a[1])[0]?.[0] ?? 'coral';
        const playPrism = legal.find((a)=>a.type === 'play_card' && a.chosenSuit === favoriteSuit);
        if (playPrism) return playPrism;
        return legal.find((a)=>a.type === 'draw_card') ?? legal[0] ?? null;
    }
};
function reconstructColorRushFromView(rawView, seats) {
    const view = rawView;
    const fullDeck = buildColorRushDeck();
    const usedIds = new Set([
        view.topCard.id,
        ...(view.myHand ?? []).map((c)=>c.id)
    ]);
    const pool = fullDeck.filter((c)=>!usedIds.has(c.id));
    const selfSeat = seats.find((s)=>view.players.some((vp)=>vp.id === s.playerId) && view.myHand !== null);
    // Find which player owns myHand by matching handCount when ambiguous, or seat 0 fallback
    const hands = {};
    const calledLastCard = {};
    let assignedMyHand = false;
    for (const vp of view.players){
        calledLastCard[vp.id] = vp.calledLastCard;
        if (!assignedMyHand && view.myHand !== null && vp.handCount === view.myHand.length && selfSeat) {
            // Prefer assigning myHand to matching seat
            hands[vp.id] = [
                ...view.myHand
            ];
            assignedMyHand = true;
        }
    }
    for (const vp of view.players){
        if (!hands[vp.id]) {
            hands[vp.id] = pool.splice(0, vp.handCount);
        }
    }
    return {
        players: view.players.map((vp)=>({
                id: vp.id,
                name: vp.name,
                avatar: vp.avatar,
                seatIndex: vp.seatIndex,
                isBot: vp.isBot
            })),
        hands,
        calledLastCard,
        drawPile: pool,
        discardPile: [
            view.topCard
        ],
        activeSuit: view.activeSuit,
        currentTurnPlayerId: view.currentTurnPlayerId,
        direction: view.direction,
        rngState: Date.now() >>> 0,
        outcome: view.outcome,
        history: view.history
    };
}
}),
"[project]/src/lib/games/ludo.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LUDO_COLORS",
    ()=>LUDO_COLORS,
    "LUDO_HOME_GOAL",
    ()=>LUDO_HOME_GOAL,
    "LUDO_SAFE_INDICES",
    ()=>LUDO_SAFE_INDICES,
    "LUDO_START_INDEX",
    ()=>LUDO_START_INDEX,
    "canMoveLudoToken",
    ()=>canMoveLudoToken,
    "getOuterTrackIndex",
    ()=>getOuterTrackIndex,
    "ludoEngine",
    ()=>ludoEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/types.ts [app-ssr] (ecmascript)");
;
const LUDO_COLORS = [
    'red',
    'green',
    'yellow',
    'blue'
];
const LUDO_START_INDEX = {
    red: 0,
    green: 13,
    yellow: 26,
    blue: 39
};
const LUDO_SAFE_INDICES = new Set([
    0,
    8,
    13,
    21,
    26,
    34,
    39,
    47
]);
const LUDO_HOME_GOAL = 56;
function nextRandomInt1to6(seed) {
    // Deterministic LCG (Numerical Recipes)
    const nextSeed = Math.imul(seed, 1664525) + 1013904223 >>> 0;
    const value = nextSeed % 6 + 1;
    return {
        value,
        nextSeed
    };
}
function getOuterTrackIndex(color, progress) {
    if (progress < 0 || progress > 50) return null;
    return (LUDO_START_INDEX[color] + progress) % 52;
}
function canMoveLudoToken(progress, diceValue) {
    if (progress === -1) return diceValue === 6;
    if (progress >= 0 && progress < LUDO_HOME_GOAL) {
        return progress + diceValue <= LUDO_HOME_GOAL;
    }
    return false;
}
function getMovableTokenIndices(tokens, diceValue) {
    const out = [];
    for(let i = 0; i < tokens.length; i++){
        if (canMoveLudoToken(tokens[i], diceValue)) {
            out.push(i);
        }
    }
    return out;
}
function assignColors(count) {
    if (count === 2) return [
        'red',
        'yellow'
    ]; // opposite corners
    if (count === 3) return [
        'red',
        'green',
        'yellow'
    ];
    return [
        'red',
        'green',
        'yellow',
        'blue'
    ];
}
const ludoEngine = {
    id: 'ludo',
    name: 'Ludo',
    minPlayers: 2,
    maxPlayers: 4,
    supportsBot: true,
    init (players, options) {
        if (players.length < 2 || players.length > 4) {
            throw new Error('Ludo supports 2 to 4 players.');
        }
        const sorted = [
            ...players
        ].sort((a, b)=>a.seatIndex - b.seatIndex);
        const assigned = assignColors(sorted.length);
        const playerColors = {};
        const tokens = {
            red: [
                -1,
                -1,
                -1,
                -1
            ],
            green: [
                -1,
                -1,
                -1,
                -1
            ],
            yellow: [
                -1,
                -1,
                -1,
                -1
            ],
            blue: [
                -1,
                -1,
                -1,
                -1
            ]
        };
        sorted.forEach((p, idx)=>{
            playerColors[p.id] = assigned[idx];
        });
        const initialSeed = typeof options?.seed === 'number' ? options.seed >>> 0 : (Date.now() ^ 0x5f3759df) >>> 0;
        return {
            players: sorted,
            playerColors,
            tokens,
            activeColors: assigned,
            currentTurnPlayerId: sorted[0].id,
            turnStep: 'roll',
            diceValue: null,
            consecutiveSixes: 0,
            rngState: initialSeed,
            outcome: null,
            history: []
        };
    },
    getLegalActions (state, playerId) {
        if (state.outcome || state.currentTurnPlayerId !== playerId) return [];
        if (state.turnStep === 'roll') {
            return [
                {
                    type: 'roll_dice',
                    playerId
                }
            ];
        }
        if (state.turnStep === 'move' && state.diceValue !== null) {
            const color = state.playerColors[playerId];
            if (!color) return [];
            return getMovableTokenIndices(state.tokens[color], state.diceValue).map((tokenIndex)=>({
                    type: 'move_token',
                    playerId,
                    tokenIndex
                }));
        }
        return [];
    },
    applyAction (state, action) {
        if (state.outcome) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Ludo match is already over.');
        }
        if (action.playerId !== state.currentTurnPlayerId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Not your turn.');
        }
        const color = state.playerColors[action.playerId];
        if (!color) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Player is not seated in this match.');
        }
        const currentSeatIdx = state.players.findIndex((p)=>p.id === action.playerId);
        const nextSeatPlayer = state.players[(currentSeatIdx + 1) % state.players.length];
        if (action.type === 'roll_dice') {
            if (state.turnStep !== 'roll') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('You must move a token before rolling again.');
            }
            const { value: roll, nextSeed } = nextRandomInt1to6(state.rngState);
            const nextSixes = roll === 6 ? state.consecutiveSixes + 1 : 0;
            // Three consecutive 6s forfeits turn
            if (nextSixes >= 3) {
                return {
                    ...state,
                    diceValue: roll,
                    consecutiveSixes: 0,
                    turnStep: 'roll',
                    currentTurnPlayerId: nextSeatPlayer.id,
                    rngState: nextSeed,
                    history: [
                        ...state.history,
                        {
                            playerId: action.playerId,
                            color,
                            label: `${color}: rolled 6 (3rd 6 — turn lost)`
                        }
                    ]
                };
            }
            const movable = getMovableTokenIndices(state.tokens[color], roll);
            if (movable.length === 0) {
                return {
                    ...state,
                    diceValue: roll,
                    consecutiveSixes: 0,
                    turnStep: 'roll',
                    currentTurnPlayerId: nextSeatPlayer.id,
                    rngState: nextSeed,
                    history: [
                        ...state.history,
                        {
                            playerId: action.playerId,
                            color,
                            label: `${color}: rolled ${roll} (no legal move)`
                        }
                    ]
                };
            }
            return {
                ...state,
                diceValue: roll,
                consecutiveSixes: nextSixes,
                turnStep: 'move',
                rngState: nextSeed
            };
        }
        if (action.type === 'move_token') {
            if (state.turnStep !== 'move' || state.diceValue === null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Roll the dice before moving a token.');
            }
            const { tokenIndex } = action;
            const myTokens = [
                ...state.tokens[color]
            ];
            const currentProgress = myTokens[tokenIndex];
            if (currentProgress === undefined || !canMoveLudoToken(currentProgress, state.diceValue)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Selected token cannot make that move.');
            }
            const nextProgress = currentProgress === -1 ? 0 : currentProgress + state.diceValue;
            myTokens[tokenIndex] = nextProgress;
            const nextTokens = {
                ...state.tokens,
                [color]: myTokens
            };
            // Check capture on unsafe outer track square
            let capturedCount = 0;
            const landingTrack = getOuterTrackIndex(color, nextProgress);
            if (landingTrack !== null && !LUDO_SAFE_INDICES.has(landingTrack)) {
                for (const oppColor of state.activeColors){
                    if (oppColor === color) continue;
                    const oppArr = [
                        ...nextTokens[oppColor]
                    ];
                    let changed = false;
                    for(let i = 0; i < oppArr.length; i++){
                        const oppTrack = getOuterTrackIndex(oppColor, oppArr[i]);
                        if (oppTrack === landingTrack) {
                            oppArr[i] = -1;
                            capturedCount += 1;
                            changed = true;
                        }
                    }
                    if (changed) {
                        nextTokens[oppColor] = oppArr;
                    }
                }
            }
            const finishedMatch = myTokens.every((pos)=>pos === LUDO_HOME_GOAL);
            const actor = state.players[currentSeatIdx];
            const outcome = finishedMatch ? {
                winnerIds: [
                    action.playerId
                ],
                reason: `${actor?.name ?? color} brought all 4 tokens home!`
            } : null;
            const bonusTurn = !finishedMatch && (state.diceValue === 6 || capturedCount > 0 || nextProgress === LUDO_HOME_GOAL);
            const moveDesc = currentProgress === -1 ? `${color}: rolled 6, deployed token #${tokenIndex + 1}` : nextProgress === LUDO_HOME_GOAL ? `${color}: rolled ${state.diceValue}, token #${tokenIndex + 1} reached Home!` : `${color}: rolled ${state.diceValue}, moved token #${tokenIndex + 1}${capturedCount > 0 ? ' (Capture!)' : ''}`;
            return {
                ...state,
                tokens: nextTokens,
                turnStep: 'roll',
                currentTurnPlayerId: bonusTurn ? action.playerId : nextSeatPlayer.id,
                consecutiveSixes: bonusTurn ? state.consecutiveSixes : 0,
                outcome,
                history: [
                    ...state.history,
                    {
                        playerId: action.playerId,
                        color,
                        label: moveDesc
                    }
                ]
            };
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Unsupported Ludo action.');
    },
    isGameOver (state) {
        return state.outcome;
    },
    getView (state) {
        return state;
    },
    chooseBotAction (state, botPlayerId) {
        const legal = this.getLegalActions(state, botPlayerId);
        if (legal.length === 0) return null;
        if (legal[0]?.type === 'roll_dice') return legal[0];
        const color = state.playerColors[botPlayerId];
        let best = legal[0];
        let bestScore = -Infinity;
        for (const act of legal){
            if (act.type !== 'move_token') continue;
            const prevTokens = state.tokens[color];
            const next = this.applyAction(state, act);
            let score = 0;
            if (next.outcome?.winnerIds.includes(botPlayerId)) score += 1000;
            const newPos = next.tokens[color][act.tokenIndex];
            const oldPos = prevTokens[act.tokenIndex];
            if (oldPos === -1 && newPos === 0) score += 35; // deploy from yard
            if (newPos === LUDO_HOME_GOAL) score += 60; // finish token
            if (newPos >= 51) score += 25; // safe home stretch
            if (next.history.at(-1)?.label.includes('Capture!')) score += 50;
            const trackIdx = getOuterTrackIndex(color, newPos);
            if (trackIdx !== null && LUDO_SAFE_INDICES.has(trackIdx)) score += 15;
            score += newPos * 0.3;
            if (score > bestScore) {
                bestScore = score;
                best = act;
            }
        }
        return best;
    }
};
}),
"[project]/src/lib/games/registry.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGameEngine",
    ()=>getGameEngine,
    "getReconstructHook",
    ()=>getReconstructHook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$ticTacToe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/ticTacToe.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$checkers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/checkers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$chess$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/chess.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$ludo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/ludo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$colorRush$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/colorRush.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$trivia$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/trivia.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const ENGINE_MAP = {
    'tic-tac-toe': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$ticTacToe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ticTacToeEngine"],
    checkers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$checkers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkersEngine"],
    chess: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$chess$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chessEngine"],
    ludo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$ludo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ludoEngine"],
    'color-rush': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$colorRush$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorRushEngine"],
    trivia: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$trivia$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["triviaEngine"]
};
function getGameEngine(gameId) {
    return ENGINE_MAP[gameId] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$ticTacToe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ticTacToeEngine"];
}
function getReconstructHook(gameId) {
    if (gameId === 'color-rush') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$colorRush$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reconstructColorRushFromView"];
    }
    return undefined;
}
}),
"[project]/src/lib/games/ticTacToe.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ticTacToeEngine",
    ()=>ticTacToeEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/types.ts [app-ssr] (ecmascript)");
;
const WIN_LINES = [
    [
        0,
        1,
        2
    ],
    [
        3,
        4,
        5
    ],
    [
        6,
        7,
        8
    ],
    [
        0,
        3,
        6
    ],
    [
        1,
        4,
        7
    ],
    [
        2,
        5,
        8
    ],
    [
        0,
        4,
        8
    ],
    [
        2,
        4,
        6
    ]
];
function evaluateWinner(board) {
    for (const line of WIN_LINES){
        const [a, b, c] = line;
        const m = board[a];
        if (m && m === board[b] && m === board[c]) {
            return {
                mark: m,
                line: [
                    ...line
                ]
            };
        }
    }
    return null;
}
function cellLabel(cell) {
    const row = Math.floor(cell / 3) + 1;
    const col = [
        'A',
        'B',
        'C'
    ][cell % 3] ?? '?';
    return `${col}${row}`;
}
const ticTacToeEngine = {
    id: 'tic-tac-toe',
    name: 'Tic-Tac-Toe',
    minPlayers: 2,
    maxPlayers: 2,
    supportsBot: true,
    init (players) {
        if (players.length !== 2) {
            throw new Error('Tic-Tac-Toe requires exactly 2 players.');
        }
        const sorted = [
            ...players
        ].sort((a, b)=>a.seatIndex - b.seatIndex);
        const p0 = sorted[0];
        const p1 = sorted[1];
        return {
            board: Array(9).fill(null),
            players: sorted,
            marks: {
                [p0.id]: 'X',
                [p1.id]: 'O'
            },
            currentTurnPlayerId: p0.id,
            winnerIds: null,
            winningLine: null,
            isDraw: false,
            history: []
        };
    },
    getLegalActions (state, playerId) {
        if (state.winnerIds || state.isDraw) return [];
        if (state.currentTurnPlayerId !== playerId) return [];
        const actions = [];
        for(let i = 0; i < 9; i++){
            if (state.board[i] === null) {
                actions.push({
                    type: 'place',
                    playerId,
                    cell: i
                });
            }
        }
        return actions;
    },
    applyAction (state, action) {
        if (state.winnerIds || state.isDraw) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Match is already over.');
        }
        if (action.type !== 'place') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Unsupported Tic-Tac-Toe action.');
        }
        if (action.playerId !== state.currentTurnPlayerId) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Not your turn.');
        }
        if (!Number.isInteger(action.cell) || action.cell < 0 || action.cell > 8) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Cell index out of bounds.');
        }
        if (state.board[action.cell] !== null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Cell is already occupied.');
        }
        const mark = state.marks[action.playerId];
        if (!mark) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Player is not seated in this match.');
        }
        const nextBoard = [
            ...state.board
        ];
        nextBoard[action.cell] = mark;
        const win = evaluateWinner(nextBoard);
        const filled = nextBoard.every((c)=>c !== null);
        const otherPlayer = state.players.find((p)=>p.id !== action.playerId);
        return {
            ...state,
            board: nextBoard,
            currentTurnPlayerId: win || filled ? state.currentTurnPlayerId : otherPlayer?.id ?? action.playerId,
            winnerIds: win ? [
                action.playerId
            ] : null,
            winningLine: win ? win.line : null,
            isDraw: !win && filled,
            history: [
                ...state.history,
                {
                    playerId: action.playerId,
                    mark,
                    cell: action.cell,
                    label: `${mark} → ${cellLabel(action.cell)}`
                }
            ]
        };
    },
    isGameOver (state) {
        if (state.winnerIds) {
            const winner = state.players.find((p)=>p.id === state.winnerIds?.[0]);
            return {
                winnerIds: state.winnerIds,
                reason: `${winner?.name ?? 'Player'} aligned 3 in a row!`
            };
        }
        if (state.isDraw) {
            return {
                winnerIds: [],
                reason: 'Board full — Draw!'
            };
        }
        return null;
    },
    getView (state) {
        return state;
    },
    chooseBotAction (state, botPlayerId) {
        const legal = this.getLegalActions(state, botPlayerId);
        if (legal.length === 0) return null;
        const myMark = state.marks[botPlayerId];
        const oppMark = myMark === 'X' ? 'O' : 'X';
        // 1. Take immediate winning cell
        for (const act of legal){
            const copy = [
                ...state.board
            ];
            copy[act.cell] = myMark ?? 'O';
            if (evaluateWinner(copy)) return act;
        }
        // 2. Block opponent winning cell
        for (const act of legal){
            const copy = [
                ...state.board
            ];
            copy[act.cell] = oppMark;
            if (evaluateWinner(copy)) return act;
        }
        // 3. Prefer center, then corners
        const priority = [
            4,
            0,
            2,
            6,
            8,
            1,
            3,
            5,
            7
        ];
        for (const cell of priority){
            const found = legal.find((a)=>a.cell === cell);
            if (found) return found;
        }
        return legal[0] ?? null;
    }
};
}),
"[project]/src/lib/games/trivia.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BUILTIN_FALLBACK_QUESTIONS",
    ()=>BUILTIN_FALLBACK_QUESTIONS,
    "TRIVIA_PACK_META",
    ()=>TRIVIA_PACK_META,
    "fetchOpenTdbQuestions",
    ()=>fetchOpenTdbQuestions,
    "loadStaticTriviaPack",
    ()=>loadStaticTriviaPack,
    "triviaEngine",
    ()=>triviaEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/url.ts [app-ssr] (ecmascript)");
;
;
const BUILTIN_FALLBACK_QUESTIONS = [
    {
        id: 'fb-1',
        category: 'Computing',
        prompt: 'What does P2P stand for in WebRTC multiplayer networking?',
        choices: [
            'Peer-to-Peer',
            'Port-to-Port',
            'Packet-to-Packet',
            'Proxy-to-Proxy'
        ],
        correctIndex: 0
    },
    {
        id: 'fb-2',
        category: 'Games',
        prompt: 'How many squares are on a standard Tic-Tac-Toe grid?',
        choices: [
            '6',
            '8',
            '9',
            '12'
        ],
        correctIndex: 2
    },
    {
        id: 'fb-3',
        category: 'Science',
        prompt: 'Water freezes at what temperature in degrees Celsius at standard pressure?',
        choices: [
            '-10°C',
            '0°C',
            '32°C',
            '100°C'
        ],
        correctIndex: 1
    }
];
const TRIVIA_PACK_META = [
    {
        id: 'science-tech',
        title: 'Science & Computing (CC0)'
    },
    {
        id: 'world-history',
        title: 'World & Geography (CC0)'
    },
    {
        id: 'pop-logic',
        title: 'Games, Logic & Arts (CC0)'
    }
];
async function loadStaticTriviaPack(packId) {
    const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withBasePath"])(`/trivia/${encodeURIComponent(packId)}.json`));
    if (!res.ok) {
        throw new Error(`Unable to load trivia pack "${packId}"`);
    }
    const data = await res.json();
    return data;
}
function decodeHtmlEntities(input) {
    const entities = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
        '&apos;': "'",
        '&ldquo;': '“',
        '&rdquo;': '”',
        '&rsquo;': '’',
        '&lsquo;': '‘',
        '&ndash;': '–',
        '&mdash;': '—'
    };
    return input.replace(/&(amp|lt|gt|quot|#039|apos|ldquo|rdquo|rsquo|lsquo|ndash|mdash);/g, (m)=>entities[m] ?? m);
}
async function fetchOpenTdbQuestions(amount = 8) {
    const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple`);
    if (!res.ok) {
        throw new Error('Failed to fetch from Open Trivia Database.');
    }
    const payload = await res.json();
    if (payload.response_code !== 0 || !Array.isArray(payload.results)) {
        throw new Error('Open Trivia Database returned no questions.');
    }
    const questions = payload.results.map((r, idx)=>{
        const correct = decodeHtmlEntities(r.correct_answer);
        const all = [
            correct,
            ...r.incorrect_answers.slice(0, 3).map(decodeHtmlEntities)
        ];
        // Shuffle choices
        for(let i = all.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = all[i];
            all[i] = all[j];
            all[j] = tmp;
        }
        const correctIndex = all.indexOf(correct);
        return {
            id: `otdb-${Date.now()}-${idx}`,
            category: decodeHtmlEntities(r.category),
            prompt: decodeHtmlEntities(r.question),
            choices: [
                all[0] ?? '',
                all[1] ?? '',
                all[2] ?? '',
                all[3] ?? ''
            ],
            correctIndex
        };
    });
    return {
        title: 'Open Trivia Database (Live Fetch)',
        questions
    };
}
function computePoints(isCorrect, answeredAt, startedAt, durationSec) {
    if (!isCorrect) return 0;
    const elapsedSec = Math.max(0, (answeredAt - startedAt) / 1000);
    const ratioRemaining = Math.max(0, 1 - elapsedSec / Math.max(1, durationSec));
    return Math.round(500 + 500 * ratioRemaining);
}
const triviaEngine = {
    id: 'trivia',
    name: 'Trivia Blitz',
    minPlayers: 2,
    maxPlayers: 8,
    supportsBot: true,
    init (players, options) {
        if (players.length < 2 || players.length > 8) {
            throw new Error('Trivia Blitz supports 2 to 8 players.');
        }
        const sorted = [
            ...players
        ].sort((a, b)=>a.seatIndex - b.seatIndex);
        const questions = options?.questions && options.questions.length > 0 ? options.questions : BUILTIN_FALLBACK_QUESTIONS;
        const durationSec = Number(options?.durationSec ?? 15);
        const scores = {};
        for (const p of sorted)scores[p.id] = 0;
        return {
            players: sorted,
            hostPlayerId: sorted[0].id,
            packTitle: options?.packTitle ?? 'Quick Pack',
            questions,
            questionIndex: 0,
            phase: 'question',
            durationSec: durationSec > 0 ? durationSec : 15,
            questionStartedAt: Date.now(),
            submissions: {},
            scores,
            outcome: null,
            history: []
        };
    },
    getLegalActions (state, playerId) {
        if (state.outcome) return [];
        const isSeated = state.players.some((p)=>p.id === playerId);
        if (!isSeated) return [];
        if (state.phase === 'question') {
            if (state.submissions[playerId]) {
                return playerId === state.hostPlayerId ? [
                    {
                        type: 'reveal_question',
                        playerId
                    }
                ] : [];
            }
            const acts = [
                0,
                1,
                2,
                3
            ].map((choiceIndex)=>({
                    type: 'submit_answer',
                    playerId,
                    choiceIndex
                }));
            if (playerId === state.hostPlayerId) {
                acts.push({
                    type: 'reveal_question',
                    playerId
                });
            }
            return acts;
        }
        if (state.phase === 'reveal' && playerId === state.hostPlayerId) {
            return [
                {
                    type: 'next_question',
                    playerId
                }
            ];
        }
        return [];
    },
    applyAction (state, action) {
        if (state.outcome) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Trivia match has already finished.');
        }
        const actor = state.players.find((p)=>p.id === action.playerId);
        if (!actor) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Player is not seated in this Trivia match.');
        }
        const q = state.questions[state.questionIndex];
        if (action.type === 'submit_answer') {
            if (state.phase !== 'question') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Question is no longer accepting answers.');
            }
            if (state.submissions[action.playerId]) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('You already answered this question.');
            }
            if (!Number.isInteger(action.choiceIndex) || action.choiceIndex < 0 || action.choiceIndex > 3) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Choice index out of bounds.');
            }
            const answeredAt = action.timestamp ?? Date.now();
            const pointsAwarded = computePoints(action.choiceIndex === q.correctIndex, answeredAt, state.questionStartedAt, state.durationSec);
            const nextSubmissions = {
                ...state.submissions,
                [action.playerId]: {
                    choiceIndex: action.choiceIndex,
                    answeredAt,
                    pointsAwarded
                }
            };
            // Auto-reveal if every player has answered
            const allAnswered = state.players.every((p)=>Boolean(nextSubmissions[p.id]));
            if (allAnswered) {
                const nextScores = {
                    ...state.scores
                };
                for (const p of state.players){
                    nextScores[p.id] = (nextScores[p.id] ?? 0) + (nextSubmissions[p.id]?.pointsAwarded ?? 0);
                }
                return {
                    ...state,
                    phase: 'reveal',
                    submissions: nextSubmissions,
                    scores: nextScores,
                    history: [
                        ...state.history,
                        {
                            playerId: action.playerId,
                            label: `Q${state.questionIndex + 1} revealed (Answer: ${q.choices[q.correctIndex]})`
                        }
                    ]
                };
            }
            return {
                ...state,
                submissions: nextSubmissions
            };
        }
        if (action.type === 'reveal_question') {
            if (state.phase !== 'question') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Question is already revealed.');
            }
            const nextScores = {
                ...state.scores
            };
            for (const p of state.players){
                nextScores[p.id] = (nextScores[p.id] ?? 0) + (state.submissions[p.id]?.pointsAwarded ?? 0);
            }
            return {
                ...state,
                phase: 'reveal',
                scores: nextScores,
                history: [
                    ...state.history,
                    {
                        playerId: action.playerId,
                        label: `Q${state.questionIndex + 1} revealed (Answer: ${q.choices[q.correctIndex]})`
                    }
                ]
            };
        }
        if (action.type === 'next_question') {
            if (state.phase !== 'reveal') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Reveal the current question first.');
            }
            const nextIdx = state.questionIndex + 1;
            if (nextIdx >= state.questions.length) {
                const maxScore = Math.max(...Object.values(state.scores));
                const winnerIds = state.players.filter((p)=>(state.scores[p.id] ?? 0) === maxScore).map((p)=>p.id);
                const winnerNames = state.players.filter((p)=>winnerIds.includes(p.id)).map((p)=>p.name).join(', ');
                return {
                    ...state,
                    outcome: {
                        winnerIds: winnerIds.length === state.players.length && maxScore === 0 ? [] : winnerIds,
                        reason: winnerIds.length > 1 ? `Tie between ${winnerNames} with ${maxScore} pts!` : `${winnerNames} wins Trivia Blitz with ${maxScore} pts!`,
                        scores: {
                            ...state.scores
                        }
                    }
                };
            }
            return {
                ...state,
                questionIndex: nextIdx,
                phase: 'question',
                questionStartedAt: action.timestamp ?? Date.now(),
                submissions: {}
            };
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"]('Unsupported Trivia action.');
    },
    isGameOver (state) {
        return state.outcome;
    },
    getView (state, playerId) {
        const q = state.questions[state.questionIndex];
        const isReveal = state.phase === 'reveal';
        return {
            players: state.players,
            hostPlayerId: state.hostPlayerId,
            packTitle: state.packTitle,
            questionIndex: state.questionIndex,
            totalQuestions: state.questions.length,
            phase: state.phase,
            durationSec: state.durationSec,
            questionStartedAt: state.questionStartedAt,
            currentQuestion: {
                id: q.id,
                category: q.category,
                prompt: q.prompt,
                choices: q.choices,
                correctIndex: isReveal ? q.correctIndex : null
            },
            answeredPlayerIds: Object.keys(state.submissions),
            myChoiceIndex: playerId && state.submissions[playerId] ? state.submissions[playerId].choiceIndex : null,
            revealedSubmissions: isReveal ? state.submissions : null,
            scores: state.scores,
            outcome: state.outcome,
            history: state.history
        };
    },
    chooseBotAction (state, botPlayerId) {
        if (state.outcome || state.phase !== 'question') return null;
        if (state.submissions[botPlayerId]) return null;
        const q = state.questions[state.questionIndex];
        const correct = Math.random() < 0.7;
        const choiceIndex = correct ? q.correctIndex : (q.correctIndex + 1) % 4;
        return {
            type: 'submit_answer',
            playerId: botPlayerId,
            choiceIndex
        };
    }
};
}),
"[project]/src/lib/network/broadcastAdapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BroadcastChannelAdapter",
    ()=>BroadcastChannelAdapter
]);
function makePeerId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return `tab-${crypto.randomUUID().slice(0, 8)}`;
    }
    return `tab-${Math.random().toString(36).slice(2, 10)}`;
}
class BroadcastChannelAdapter {
    transportName = 'local-broadcast';
    selfPeerId;
    _status = 'disconnected';
    channel = null;
    peers = new Set();
    password;
    pendingPings = new Map();
    messageHandlers = new Set();
    joinHandlers = new Set();
    leaveHandlers = new Set();
    errorHandlers = new Set();
    statusHandlers = new Set();
    beforeUnloadHandler = null;
    constructor(peerId){
        this.selfPeerId = peerId ?? makePeerId();
    }
    get status() {
        return this._status;
    }
    setStatus(status) {
        this._status = status;
        for (const h of this.statusHandlers)h(status);
    }
    async connect(roomCode, options) {
        if (typeof BroadcastChannel === 'undefined') {
            const err = {
                code: 'transport-error',
                message: 'BroadcastChannel is not available in this environment.'
            };
            this.setStatus('error');
            for (const h of this.errorHandlers)h(err);
            throw new Error(err.message);
        }
        await this.disconnect();
        this.setStatus('connecting');
        this.password = options?.password || undefined;
        const channel = new BroadcastChannel(`p2p-arcade-room:${roomCode}`);
        this.channel = channel;
        channel.onmessage = (event)=>{
            const frame = event.data;
            if (!frame || frame.fromPeerId === this.selfPeerId) return;
            if (frame.targetPeerId && frame.targetPeerId !== this.selfPeerId) return;
            if (frame.kind === 'hello' || frame.kind === 'hello-ack') {
                if (this.password && frame.passwordHash !== this.password) {
                    for (const h of this.errorHandlers){
                        h({
                            code: 'auth-failed',
                            message: 'Room password mismatch with local peer.'
                        });
                    }
                    return;
                }
                const isNew = !this.peers.has(frame.fromPeerId);
                if (isNew) {
                    this.peers.add(frame.fromPeerId);
                    for (const h of this.joinHandlers)h(frame.fromPeerId);
                }
                if (frame.kind === 'hello') {
                    this.post({
                        kind: 'hello-ack',
                        fromPeerId: this.selfPeerId,
                        targetPeerId: frame.fromPeerId,
                        passwordHash: this.password
                    });
                }
                return;
            }
            if (frame.kind === 'bye') {
                if (this.peers.delete(frame.fromPeerId)) {
                    for (const h of this.leaveHandlers)h(frame.fromPeerId);
                }
                return;
            }
            if (frame.kind === 'ping' && frame.pingId) {
                this.post({
                    kind: 'pong',
                    fromPeerId: this.selfPeerId,
                    targetPeerId: frame.fromPeerId,
                    pingId: frame.pingId,
                    sentAt: frame.sentAt
                });
                return;
            }
            if (frame.kind === 'pong' && frame.pingId) {
                const pending = this.pendingPings.get(frame.pingId);
                if (pending) {
                    this.pendingPings.delete(frame.pingId);
                    pending.resolve(Math.max(1, Math.round(performance.now() - pending.startedAt)));
                }
                return;
            }
            if (frame.kind === 'data' && frame.envelope) {
                for (const h of this.messageHandlers){
                    h(frame.envelope, frame.fromPeerId);
                }
            }
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        this.setStatus('connected');
        this.post({
            kind: 'hello',
            fromPeerId: this.selfPeerId,
            passwordHash: this.password
        });
    }
    post(frame) {
        this.channel?.postMessage(frame);
    }
    async disconnect() {
        if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && this.beforeUnloadHandler) //TURBOPACK unreachable
        ;
        if (this.channel) {
            try {
                this.post({
                    kind: 'bye',
                    fromPeerId: this.selfPeerId
                });
            } catch  {
            // Ignore if channel already closed
            }
            this.channel.close();
            this.channel = null;
        }
        this.peers.clear();
        for (const [, pending] of this.pendingPings){
            pending.reject(new Error('Disconnected'));
        }
        this.pendingPings.clear();
        this.setStatus('disconnected');
    }
    async send(type, payload, targetPeerId) {
        if (!this.channel || this._status !== 'connected') {
            throw new Error('Local broadcast adapter is not connected');
        }
        const envelope = {
            type,
            payload,
            senderPeerId: this.selfPeerId,
            timestamp: Date.now()
        };
        this.post({
            kind: 'data',
            fromPeerId: this.selfPeerId,
            targetPeerId,
            envelope
        });
    }
    async ping(peerId) {
        if (!this.peers.has(peerId)) {
            throw new Error(`Peer ${peerId} is not connected`);
        }
        const pingId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        return new Promise((resolve, reject)=>{
            const timer = setTimeout(()=>{
                this.pendingPings.delete(pingId);
                reject(new Error('Ping timeout'));
            }, 4000);
            this.pendingPings.set(pingId, {
                startedAt: performance.now(),
                resolve: (rtt)=>{
                    clearTimeout(timer);
                    resolve(rtt);
                },
                reject: (err)=>{
                    clearTimeout(timer);
                    reject(err);
                }
            });
            this.post({
                kind: 'ping',
                fromPeerId: this.selfPeerId,
                targetPeerId: peerId,
                pingId
            });
        });
    }
    getConnectedPeers() {
        return Array.from(this.peers);
    }
    onMessage(handler) {
        this.messageHandlers.add(handler);
        return ()=>this.messageHandlers.delete(handler);
    }
    onPeerJoin(handler) {
        this.joinHandlers.add(handler);
        return ()=>this.joinHandlers.delete(handler);
    }
    onPeerLeave(handler) {
        this.leaveHandlers.add(handler);
        return ()=>this.leaveHandlers.delete(handler);
    }
    onError(handler) {
        this.errorHandlers.add(handler);
        return ()=>this.errorHandlers.delete(handler);
    }
    onStatusChange(handler) {
        this.statusHandlers.add(handler);
        return ()=>this.statusHandlers.delete(handler);
    }
}
}),
"[project]/src/lib/network/ice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_ICE_SERVERS",
    ()=>DEFAULT_ICE_SERVERS,
    "getIceServers",
    ()=>getIceServers
]);
const DEFAULT_ICE_SERVERS = [
    {
        urls: 'stun:stun.l.google.com:19302'
    },
    {
        urls: 'stun:stun1.l.google.com:19302'
    },
    {
        urls: 'stun:stun.cloudflare.com:3478'
    }
];
function getIceServers() {
    const raw = process.env.NEXT_PUBLIC_ICE_SERVERS;
    if (!raw || !raw.trim()) {
        return DEFAULT_ICE_SERVERS;
    }
    try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
            return DEFAULT_ICE_SERVERS;
        }
        const valid = parsed.filter((item)=>typeof item === 'object' && item !== null && 'urls' in item && (typeof item.urls === 'string' || Array.isArray(item.urls)));
        return valid.length > 0 ? valid : DEFAULT_ICE_SERVERS;
    } catch  {
        return DEFAULT_ICE_SERVERS;
    }
}
}),
"[project]/src/lib/network/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FALLBACK_STRATEGY_ORDER",
    ()=>FALLBACK_STRATEGY_ORDER,
    "connectWithFallback",
    ()=>connectWithFallback,
    "createNetworkAdapter",
    ()=>createNetworkAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$broadcastAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/network/broadcastAdapter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$trysteroAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/network/trysteroAdapter.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const FALLBACK_STRATEGY_ORDER = [
    'torrent',
    'nostr',
    'mqtt'
];
function createNetworkAdapter(strategy = 'torrent') {
    if (strategy === 'local') {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$broadcastAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BroadcastChannelAdapter"]();
    }
    if (strategy === 'mock') {
        throw new Error('Use new MockNetworkAdapter(bus) directly in tests.');
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$trysteroAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrysteroAdapter"](strategy);
}
async function connectWithFallback(roomCode, options = {}) {
    const requested = options.strategy ?? 'torrent';
    if (requested === 'local') {
        const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$broadcastAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BroadcastChannelAdapter"]();
        options.onAttempt?.('local');
        await adapter.connect(roomCode, options);
        return {
            adapter,
            strategy: 'local'
        };
    }
    const candidates = options.autoFallback ? [
        requested === 'torrent' || requested === 'nostr' || requested === 'mqtt' ? requested : 'torrent',
        ...FALLBACK_STRATEGY_ORDER.filter((s)=>s !== requested)
    ] : [
        requested === 'torrent' || requested === 'nostr' || requested === 'mqtt' ? requested : 'torrent'
    ];
    let lastError;
    for (const strategy of candidates){
        const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$trysteroAdapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrysteroAdapter"](strategy);
        options.onAttempt?.(strategy);
        try {
            await adapter.connect(roomCode, {
                ...options,
                strategy
            });
            return {
                adapter,
                strategy
            };
        } catch (err) {
            lastError = err;
            await adapter.disconnect().catch(()=>{});
        }
    }
    throw lastError instanceof Error ? lastError : new Error('Unable to connect with any WebRTC signaling strategy.');
}
}),
"[project]/src/lib/network/trysteroAdapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_TRYSTERO_APP_ID",
    ()=>DEFAULT_TRYSTERO_APP_ID,
    "TrysteroAdapter",
    ()=>TrysteroAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$ice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/network/ice.ts [app-ssr] (ecmascript)");
;
const DEFAULT_TRYSTERO_APP_ID = 'playtogether-p2p-v1';
async function loadStrategyJoinRoom(strategy) {
    switch(strategy){
        case 'torrent':
            {
                const mod = await __turbopack_context__.A("[project]/node_modules/@trystero-p2p/torrent/dist/index.mjs [app-ssr] (ecmascript, async loader)");
                return mod.joinRoom;
            }
        case 'nostr':
            {
                const mod = await __turbopack_context__.A("[project]/node_modules/@trystero-p2p/nostr/dist/index.mjs [app-ssr] (ecmascript, async loader)");
                return mod.joinRoom;
            }
        case 'mqtt':
            {
                const mod = await __turbopack_context__.A("[project]/node_modules/@trystero-p2p/mqtt/dist/index.mjs [app-ssr] (ecmascript, async loader)");
                return mod.joinRoom;
            }
    }
}
function mapRoomError(err) {
    switch(err.code){
        case 'decrypt-failed':
            return {
                code: 'auth-failed',
                message: 'Room password mismatch with peer.',
                cause: err
            };
        case 'relay-failed':
            return {
                code: 'relay-failed',
                message: err.message || 'Signaling relay connection failed.',
                cause: err
            };
        case 'peer-connect-failed':
            return {
                code: 'peer-connect-failed',
                message: err.message || 'WebRTC peer connection failed (NAT/firewall).',
                cause: err
            };
        default:
            return {
                code: 'transport-error',
                message: err.message || 'WebRTC transport error.',
                cause: err
            };
    }
}
class TrysteroAdapter {
    strategy;
    _selfPeerId;
    _status = 'disconnected';
    room = null;
    action = null;
    unsubscribers = [];
    peers = new Set();
    messageHandlers = new Set();
    joinHandlers = new Set();
    leaveHandlers = new Set();
    errorHandlers = new Set();
    statusHandlers = new Set();
    constructor(strategy = 'torrent'){
        this.strategy = strategy;
        this._selfPeerId = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function' ? `rtc-${crypto.randomUUID().slice(0, 8)}` : `rtc-${Math.random().toString(36).slice(2, 10)}`;
    }
    get transportName() {
        return `trystero:${this.strategy}`;
    }
    get selfPeerId() {
        return this._selfPeerId;
    }
    get status() {
        return this._status;
    }
    setStatus(status) {
        this._status = status;
        for (const h of this.statusHandlers)h(status);
    }
    async connect(roomCode, options) {
        await this.disconnect();
        if (options?.strategy === 'torrent' || options?.strategy === 'nostr' || options?.strategy === 'mqtt') {
            this.strategy = options.strategy;
        }
        this.setStatus('connecting');
        try {
            const joinRoom = await loadStrategyJoinRoom(this.strategy);
            const iceServers = options?.iceServers ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$ice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIceServers"])();
            const config = {
                appId: options?.appId ?? DEFAULT_TRYSTERO_APP_ID,
                password: options?.password || undefined,
                rtcConfig: {
                    iceServers
                },
                ...options?.relayUrls?.length ? {
                    relayConfig: {
                        urls: options.relayUrls
                    }
                } : {}
            };
            const room = joinRoom(config, roomCode);
            this.room = room;
            const msgAction = room.makeAction('arcade-msg');
            this.action = msgAction;
            this.unsubscribers.push(room.onPeerJoin(({ peerId })=>{
                this.peers.add(peerId);
                for (const h of this.joinHandlers)h(peerId);
            }), room.onPeerLeave(({ peerId })=>{
                this.peers.delete(peerId);
                for (const h of this.leaveHandlers)h(peerId);
            }), room.onError((roomErr)=>{
                const mapped = mapRoomError(roomErr);
                for (const h of this.errorHandlers)h(mapped);
            }), msgAction.onMessage((data, ctx)=>{
                if (data && typeof data === 'object' && !Array.isArray(data)) {
                    const raw = data;
                    if (typeof raw.type === 'string') {
                        const envelope = {
                            type: raw.type,
                            payload: raw.payload,
                            senderPeerId: typeof raw.senderPeerId === 'string' ? raw.senderPeerId : ctx.peerId,
                            timestamp: typeof raw.timestamp === 'number' ? raw.timestamp : Date.now()
                        };
                        for (const h of this.messageHandlers){
                            h(envelope, ctx.peerId);
                        }
                    }
                }
            }));
            // Resolve Trystero's assigned peerId with a bounded wait so UI doesn't stall
            await Promise.race([
                room.getSelf().then((info)=>{
                    if (info?.peerId) {
                        this._selfPeerId = info.peerId;
                    }
                }),
                new Promise((resolve)=>setTimeout(resolve, 3000))
            ]);
            await Promise.race([
                room.ready,
                new Promise((_, reject)=>setTimeout(()=>reject(new Error(`${this.strategy} signaling relay timeout`)), 9000))
            ]);
            this.setStatus('connected');
        } catch (err) {
            await this.disconnect();
            this.setStatus('error');
            const netErr = {
                code: 'relay-failed',
                message: err instanceof Error ? err.message : `Failed to connect using ${this.strategy}`,
                cause: err
            };
            for (const h of this.errorHandlers)h(netErr);
            throw err;
        }
    }
    async disconnect() {
        for (const unsub of this.unsubscribers){
            try {
                unsub();
            } catch  {
            // Ignore cleanup errors
            }
        }
        this.unsubscribers = [];
        this.action = null;
        this.peers.clear();
        if (this.room) {
            const r = this.room;
            this.room = null;
            try {
                await r.leave();
            } catch  {
            // Ignore leave errors
            }
        }
        this.setStatus('disconnected');
    }
    async send(type, payload, targetPeerId) {
        if (!this.action || this._status !== 'connected') {
            throw new Error('TrysteroAdapter is not connected');
        }
        const envelope = {
            type,
            payload,
            senderPeerId: this._selfPeerId,
            timestamp: Date.now()
        };
        await this.action.send(envelope, targetPeerId ? {
            target: targetPeerId
        } : undefined);
    }
    async ping(peerId) {
        if (!this.room) {
            throw new Error('Not connected to a room');
        }
        return this.room.ping(peerId);
    }
    getConnectedPeers() {
        if (!this.room) return [];
        const fromRoom = Object.keys(this.room.getPeers());
        return fromRoom.length > 0 ? fromRoom : Array.from(this.peers);
    }
    onMessage(handler) {
        this.messageHandlers.add(handler);
        return ()=>this.messageHandlers.delete(handler);
    }
    onPeerJoin(handler) {
        this.joinHandlers.add(handler);
        return ()=>this.joinHandlers.delete(handler);
    }
    onPeerLeave(handler) {
        this.leaveHandlers.add(handler);
        return ()=>this.leaveHandlers.delete(handler);
    }
    onError(handler) {
        this.errorHandlers.add(handler);
        return ()=>this.errorHandlers.delete(handler);
    }
    onStatusChange(handler) {
        this.statusHandlers.add(handler);
        return ()=>this.statusHandlers.delete(handler);
    }
}
}),
"[project]/src/lib/sound.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "playSound",
    ()=>playSound
]);
let audioCtx = null;
function getAudioContext() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function playTone(freq, durationSec, type = 'sine', gainValue = 0.08, delaySec = 0) {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime + delaySec;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(gainValue, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + durationSec + 0.02);
}
function playSound(effect, enabled) {
    if (!enabled) return;
    try {
        switch(effect){
            case 'move':
                playTone(440, 0.08, 'triangle', 0.07);
                break;
            case 'capture':
                playTone(320, 0.07, 'sawtooth', 0.06, 0);
                playTone(220, 0.1, 'sawtooth', 0.06, 0.06);
                break;
            case 'dice':
                playTone(500, 0.04, 'square', 0.04, 0);
                playTone(620, 0.04, 'square', 0.04, 0.05);
                playTone(760, 0.06, 'square', 0.05, 0.1);
                break;
            case 'win':
                playTone(523.25, 0.12, 'triangle', 0.08, 0);
                playTone(659.25, 0.12, 'triangle', 0.08, 0.1);
                playTone(783.99, 0.22, 'triangle', 0.09, 0.2);
                break;
            case 'lose':
                playTone(349.23, 0.14, 'sine', 0.07, 0);
                playTone(293.66, 0.22, 'sine', 0.07, 0.12);
                break;
            case 'chat':
                playTone(660, 0.06, 'sine', 0.05);
                break;
            case 'tick':
                playTone(880, 0.04, 'sine', 0.04);
                break;
            case 'error':
                playTone(190, 0.14, 'sawtooth', 0.06);
                break;
        }
    } catch  {
    // Ignore audio errors if user hasn't interacted yet
    }
}
}),
"[project]/src/lib/sync/RoomSyncController.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoomSyncController",
    ()=>RoomSyncController,
    "selectNextHostPlayerId",
    ()=>selectNextHostPlayerId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/games/types.ts [app-ssr] (ecmascript)");
;
function defaultSettingsForEngine(engine, overrides) {
    return {
        maxPlayers: overrides?.maxPlayers ?? engine.maxPlayers,
        chatEnabled: overrides?.chatEnabled ?? true,
        allowSpectators: overrides?.allowSpectators ?? true,
        turnTimerSec: overrides?.turnTimerSec ?? 0,
        gameOptions: overrides?.gameOptions ?? {}
    };
}
function selectNextHostPlayerId(seats) {
    const candidates = seats.filter((s)=>s.connected && !s.isBot).sort((a, b)=>a.seatIndex !== b.seatIndex ? a.seatIndex - b.seatIndex : a.playerId.localeCompare(b.playerId));
    return candidates[0]?.playerId ?? null;
}
class RoomSyncController {
    roomCode;
    adapter;
    engine;
    reconstructFromView;
    self;
    callbacks;
    version = 0;
    hostPlayerId;
    gameId;
    phase = 'lobby';
    settings;
    seats = [];
    spectators = [];
    fullState = null;
    lastGameView = null;
    outcome = null;
    disconnectVotes = {};
    mutedPlayerIds = new Set();
    peerToPlayerId = new Map();
    clientSeq = 0;
    unsubscribers = [];
    botTimer = null;
    constructor(opts){
        this.roomCode = opts.roomCode;
        this.adapter = opts.adapter;
        this.engine = opts.engine;
        this.reconstructFromView = opts.reconstructFromView;
        this.self = opts.self;
        this.callbacks = opts.callbacks;
        this.gameId = opts.gameId;
        this.settings = defaultSettingsForEngine(opts.engine, opts.initialSettings);
        this.hostPlayerId = opts.isInitialHost ? opts.self.playerId : '';
        if (opts.isInitialHost) {
            this.seats = [
                {
                    playerId: opts.self.playerId,
                    peerId: opts.adapter.selfPeerId,
                    displayName: opts.self.displayName,
                    avatar: opts.self.avatar,
                    seatIndex: 0,
                    ready: true,
                    connected: true,
                    isBot: false
                }
            ];
            this.version = 1;
        }
        this.unsubscribers.push(this.adapter.onMessage((msg, fromPeerId)=>{
            this.handleMessage(msg, fromPeerId);
        }), this.adapter.onPeerJoin((peerId)=>{
            void this.sendHello(peerId);
        }), this.adapter.onPeerLeave((peerId)=>{
            this.handlePeerLeave(peerId);
        }), this.adapter.onError((err)=>{
            this.callbacks.onError(err);
        }));
        if (opts.isInitialHost) {
            this.emitLocalSnapshot();
        } else {
            void this.sendHello();
        }
    }
    get isHost() {
        return this.hostPlayerId === this.self.playerId;
    }
    getSnapshot() {
        return this.buildSnapshotFor(this.self.playerId);
    }
    destroy() {
        if (this.botTimer) {
            clearTimeout(this.botTimer);
            this.botTimer = null;
        }
        for (const unsub of this.unsubscribers){
            unsub();
        }
        this.unsubscribers = [];
    }
    setEngine(engine, reconstructFromView) {
        this.engine = engine;
        this.gameId = engine.id;
        this.reconstructFromView = reconstructFromView;
    }
    async sendHello(targetPeerId) {
        const payload = {
            playerId: this.self.playerId,
            displayName: this.self.displayName,
            avatar: this.self.avatar,
            wantSpectate: this.self.wantSpectate
        };
        try {
            await this.adapter.send('hello', payload, targetPeerId);
        } catch  {
        // Peer may have disconnected
        }
    }
    async toggleReady(ready) {
        if (this.isHost) {
            this.applyReady(this.self.playerId, ready);
        } else {
            await this.adapter.send('player_ready', {
                playerId: this.self.playerId,
                ready
            });
        }
    }
    async updateSettings(partial, newGameId) {
        if (!this.isHost) return;
        if (newGameId) {
            this.gameId = newGameId;
        }
        const maxP = Math.max(this.engine.minPlayers, Math.min(this.engine.maxPlayers, partial.maxPlayers ?? this.settings.maxPlayers));
        this.settings = {
            ...this.settings,
            ...partial,
            maxPlayers: maxP,
            gameOptions: partial.gameOptions ? {
                ...this.settings.gameOptions,
                ...partial.gameOptions
            } : this.settings.gameOptions
        };
        this.bumpAndBroadcast();
    }
    async addBot() {
        if (!this.isHost || !this.engine.supportsBot || this.phase !== 'lobby') return;
        if (this.seats.length >= this.settings.maxPlayers) return;
        const botIndex = this.seats.filter((s)=>s.isBot).length + 1;
        const botId = `bot-${Date.now().toString(36)}-${botIndex}`;
        this.seats.push({
            playerId: botId,
            peerId: null,
            displayName: `Bot ${botIndex}`,
            avatar: '🤖',
            seatIndex: this.seats.length,
            ready: true,
            connected: true,
            isBot: true
        });
        this.bumpAndBroadcast();
    }
    async removeBot(botPlayerId) {
        if (!this.isHost || this.phase !== 'lobby') return;
        this.seats = this.seats.filter((s)=>!(s.isBot && s.playerId === botPlayerId)).map((s, idx)=>({
                ...s,
                seatIndex: idx
            }));
        this.bumpAndBroadcast();
    }
    async startGame() {
        if (!this.isHost) return;
        if (this.seats.length < this.engine.minPlayers) {
            this.callbacks.onActionRejected(`Need at least ${this.engine.minPlayers} players to start ${this.engine.name}.`);
            return;
        }
        const players = this.seats.map((s)=>({
                id: s.playerId,
                name: s.displayName,
                avatar: s.avatar,
                isBot: s.isBot,
                seatIndex: s.seatIndex
            }));
        this.fullState = this.engine.init(players, this.settings.gameOptions);
        this.outcome = this.engine.isGameOver(this.fullState);
        this.phase = this.outcome ? 'ended' : 'playing';
        this.disconnectVotes = {};
        this.bumpAndBroadcast();
        this.scheduleBotTurnIfNeeded();
    }
    async sendGameAction(action) {
        this.clientSeq += 1;
        const seq = this.clientSeq;
        if (this.isHost) {
            this.processActionOnHost(this.self.playerId, action, seq, this.adapter.selfPeerId);
        } else {
            const payload = {
                playerId: this.self.playerId,
                action,
                clientSeq: seq
            };
            await this.adapter.send('game_action', payload, this.getHostPeerId());
        }
    }
    async requestRematch(backToLobby = false) {
        if (!this.isHost) {
            await this.adapter.send('rematch', {
                backToLobby
            }, this.getHostPeerId());
            return;
        }
        if (backToLobby) {
            this.phase = 'lobby';
            this.fullState = null;
            this.lastGameView = null;
            this.outcome = null;
            this.disconnectVotes = {};
            this.seats = this.seats.map((s)=>({
                    ...s,
                    ready: s.isBot || s.playerId === this.hostPlayerId
                }));
            this.bumpAndBroadcast();
            return;
        }
        await this.startGame();
    }
    async sendChat(text) {
        if (!this.settings.chatEnabled) return;
        if (this.mutedPlayerIds.has(this.self.playerId)) return;
        const trimmed = text.trim().slice(0, 300);
        if (!trimmed) return;
        const msg = {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            senderPlayerId: this.self.playerId,
            senderName: this.self.displayName,
            senderAvatar: this.self.avatar,
            text: trimmed,
            timestamp: Date.now()
        };
        this.callbacks.onChat(msg);
        await this.adapter.send('chat_message', msg);
    }
    async toggleMutePlayer(targetPlayerId) {
        if (!this.isHost || targetPlayerId === this.hostPlayerId) return;
        if (this.mutedPlayerIds.has(targetPlayerId)) {
            this.mutedPlayerIds.delete(targetPlayerId);
        } else {
            this.mutedPlayerIds.add(targetPlayerId);
        }
        this.bumpAndBroadcast();
    }
    async voteDisconnect(targetPlayerId, choice) {
        if (this.isHost) {
            this.applyDisconnectVote(this.self.playerId, targetPlayerId, choice);
        } else {
            await this.adapter.send('disconnect_vote', {
                targetPlayerId,
                choice
            }, this.getHostPeerId());
        }
    }
    /**
   * Used by Trivia or timed host ticks to advance state deterministically.
   */ applyHostSystemAction(action) {
        if (!this.isHost || this.phase !== 'playing' || !this.fullState) return;
        try {
            this.fullState = this.engine.applyAction(this.fullState, action);
            this.outcome = this.engine.isGameOver(this.fullState);
            if (this.outcome) {
                this.phase = 'ended';
            }
            this.bumpAndBroadcast();
            this.scheduleBotTurnIfNeeded();
        } catch  {
        // Ignore stale system tick
        }
    }
    getHostPeerId() {
        const hostSeat = this.seats.find((s)=>s.playerId === this.hostPlayerId);
        return hostSeat?.peerId ?? undefined;
    }
    handleMessage(msg, fromPeerId) {
        switch(msg.type){
            case 'hello':
                {
                    const hello = msg.payload;
                    if (!hello?.playerId) return;
                    this.peerToPlayerId.set(fromPeerId, hello.playerId);
                    if (this.isHost) {
                        this.handleHostJoinOrReconnect(hello, fromPeerId);
                    }
                    break;
                }
            case 'room_snapshot':
                {
                    const snapshot = msg.payload;
                    if (!snapshot || typeof snapshot.version !== 'number') return;
                    // Ordering guard: accept snapshot if newer version or initial join
                    if (snapshot.version < this.version && snapshot.hostPlayerId === this.hostPlayerId) {
                        return;
                    }
                    this.applyRemoteSnapshot(snapshot);
                    break;
                }
            case 'player_ready':
                {
                    if (!this.isHost) return;
                    const p = msg.payload;
                    const senderPlayerId = this.peerToPlayerId.get(fromPeerId);
                    if (senderPlayerId && senderPlayerId === p.playerId) {
                        this.applyReady(p.playerId, Boolean(p.ready));
                    }
                    break;
                }
            case 'game_action':
                {
                    if (!this.isHost) return;
                    const p = msg.payload;
                    const senderPlayerId = this.peerToPlayerId.get(fromPeerId);
                    if (!senderPlayerId || senderPlayerId !== p.playerId) {
                        void this.adapter.send('action_rejected', {
                            reason: 'Sender identity mismatch.',
                            clientSeq: p?.clientSeq ?? 0
                        }, fromPeerId);
                        return;
                    }
                    this.processActionOnHost(senderPlayerId, p.action, p.clientSeq, fromPeerId);
                    break;
                }
            case 'action_rejected':
                {
                    const p = msg.payload;
                    this.callbacks.onActionRejected(p?.reason ?? 'Illegal move.');
                    break;
                }
            case 'chat_message':
                {
                    if (!this.settings.chatEnabled) return;
                    const chat = msg.payload;
                    const senderPlayerId = this.peerToPlayerId.get(fromPeerId);
                    if (!chat || !senderPlayerId || chat.senderPlayerId !== senderPlayerId) {
                        return;
                    }
                    if (this.mutedPlayerIds.has(senderPlayerId)) return;
                    this.callbacks.onChat(chat);
                    break;
                }
            case 'disconnect_vote':
                {
                    if (!this.isHost) return;
                    const p = msg.payload;
                    const senderPlayerId = this.peerToPlayerId.get(fromPeerId);
                    if (senderPlayerId && p?.targetPlayerId && p?.choice) {
                        this.applyDisconnectVote(senderPlayerId, p.targetPlayerId, p.choice);
                    }
                    break;
                }
            case 'rematch':
                {
                    if (!this.isHost) return;
                    const p = msg.payload;
                    void this.requestRematch(Boolean(p?.backToLobby));
                    break;
                }
        }
    }
    handleHostJoinOrReconnect(hello, fromPeerId) {
        // 1. Check if returning seated player (reconnect!)
        const existingSeat = this.seats.find((s)=>s.playerId === hello.playerId);
        if (existingSeat) {
            existingSeat.peerId = fromPeerId;
            existingSeat.connected = true;
            existingSeat.displayName = hello.displayName;
            existingSeat.avatar = hello.avatar;
            delete this.disconnectVotes[hello.playerId];
            this.bumpAndBroadcast();
            return;
        }
        // 2. Check if already spectator
        const existingSpec = this.spectators.find((s)=>s.playerId === hello.playerId);
        if (existingSpec) {
            existingSpec.peerId = fromPeerId;
            existingSpec.displayName = hello.displayName;
            existingSpec.avatar = hello.avatar;
            this.bumpAndBroadcast();
            return;
        }
        // 3. New joiner: seat if lobby has space and not requesting spectate
        const canTakeSeat = this.phase === 'lobby' && !hello.wantSpectate && this.seats.length < this.settings.maxPlayers;
        if (canTakeSeat) {
            this.seats.push({
                playerId: hello.playerId,
                peerId: fromPeerId,
                displayName: hello.displayName,
                avatar: hello.avatar,
                seatIndex: this.seats.length,
                ready: false,
                connected: true,
                isBot: false
            });
            this.bumpAndBroadcast();
            return;
        }
        // 4. Otherwise add as read-only spectator if allowed
        if (this.settings.allowSpectators) {
            this.spectators.push({
                playerId: hello.playerId,
                peerId: fromPeerId,
                displayName: hello.displayName,
                avatar: hello.avatar
            });
            this.bumpAndBroadcast();
        }
    }
    handlePeerLeave(peerId) {
        const leavingPlayerId = this.peerToPlayerId.get(peerId);
        if (!leavingPlayerId) return;
        let changed = false;
        const seat = this.seats.find((s)=>s.playerId === leavingPlayerId);
        if (seat) {
            seat.connected = false;
            seat.peerId = null;
            changed = true;
        }
        const beforeSpecCount = this.spectators.length;
        this.spectators = this.spectators.filter((s)=>s.playerId !== leavingPlayerId);
        if (this.spectators.length !== beforeSpecCount) {
            changed = true;
        }
        // Host migration: if the leaving peer was the host, run deterministic election
        if (leavingPlayerId === this.hostPlayerId) {
            const nextHostId = selectNextHostPlayerId(this.seats);
            if (nextHostId) {
                this.hostPlayerId = nextHostId;
                this.callbacks.onHostMigrated(nextHostId);
                if (nextHostId === this.self.playerId) {
                    // Promoted to host: restore authoritative state from last synced state
                    if (this.phase !== 'lobby' && this.lastGameView !== null) {
                        this.fullState = this.reconstructFromView ? this.reconstructFromView(this.lastGameView, this.seats) : this.lastGameView;
                    }
                    this.bumpAndBroadcast();
                    this.scheduleBotTurnIfNeeded();
                    return;
                }
            }
        }
        if (changed && this.isHost) {
            this.bumpAndBroadcast();
        } else if (changed) {
            this.emitLocalSnapshot();
        }
    }
    applyReady(playerId, ready) {
        if (this.phase !== 'lobby') return;
        const seat = this.seats.find((s)=>s.playerId === playerId);
        if (!seat) return;
        seat.ready = ready;
        this.bumpAndBroadcast();
    }
    applyDisconnectVote(voterPlayerId, targetPlayerId, choice) {
        const targetSeat = this.seats.find((s)=>s.playerId === targetPlayerId && !s.connected && !s.isBot);
        const voterSeat = this.seats.find((s)=>s.playerId === voterPlayerId && s.connected && !s.isBot);
        if (!targetSeat || !voterSeat) return;
        if (choice === 'replace_bot' && !this.engine.supportsBot) return;
        const current = this.disconnectVotes[targetPlayerId] ?? {
            targetPlayerId,
            votes: {}
        };
        current.votes[voterPlayerId] = choice;
        this.disconnectVotes[targetPlayerId] = current;
        const activeHumans = this.seats.filter((s)=>s.connected && !s.isBot);
        const needed = Math.floor(activeHumans.length / 2) + 1;
        const endCount = Object.values(current.votes).filter((v)=>v === 'end').length;
        const botCount = Object.values(current.votes).filter((v)=>v === 'replace_bot').length;
        if (endCount >= needed) {
            this.phase = 'ended';
            this.outcome = {
                winnerIds: [],
                reason: `${targetSeat.displayName} disconnected — match ended by vote.`
            };
            delete this.disconnectVotes[targetPlayerId];
            this.bumpAndBroadcast();
            return;
        }
        if (botCount >= needed && this.engine.supportsBot) {
            targetSeat.isBot = true;
            targetSeat.connected = true;
            targetSeat.displayName = `${targetSeat.displayName} (Bot)`;
            targetSeat.avatar = '🤖';
            delete this.disconnectVotes[targetPlayerId];
            this.bumpAndBroadcast();
            this.scheduleBotTurnIfNeeded();
            return;
        }
        this.bumpAndBroadcast();
    }
    processActionOnHost(actorPlayerId, action, clientSeq, replyPeerId) {
        if (this.phase !== 'playing' || !this.fullState) {
            this.reject(replyPeerId, clientSeq, 'Game is not currently active.');
            return;
        }
        if (!action || action.playerId !== actorPlayerId) {
            this.reject(replyPeerId, clientSeq, 'Action playerId does not match sender.');
            return;
        }
        try {
            const nextState = this.engine.applyAction(this.fullState, action);
            this.fullState = nextState;
            this.outcome = this.engine.isGameOver(nextState);
            if (this.outcome) {
                this.phase = 'ended';
            }
            this.bumpAndBroadcast();
            this.scheduleBotTurnIfNeeded();
        } catch (err) {
            const reason = err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$games$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IllegalMoveError"] ? err.message : err instanceof Error ? err.message : 'Illegal move.';
            this.reject(replyPeerId, clientSeq, reason);
        }
    }
    reject(peerId, clientSeq, reason) {
        if (peerId === this.adapter.selfPeerId) {
            this.callbacks.onActionRejected(reason);
            return;
        }
        void this.adapter.send('action_rejected', {
            reason,
            clientSeq
        }, peerId);
    }
    scheduleBotTurnIfNeeded() {
        if (this.botTimer) {
            clearTimeout(this.botTimer);
            this.botTimer = null;
        }
        if (!this.isHost || this.phase !== 'playing' || !this.fullState) return;
        if (!this.engine.chooseBotAction) return;
        const botSeats = this.seats.filter((s)=>s.isBot);
        for (const bot of botSeats){
            const botAction = this.engine.chooseBotAction(this.fullState, bot.playerId);
            if (botAction) {
                this.botTimer = setTimeout(()=>{
                    this.botTimer = null;
                    if (!this.isHost || this.phase !== 'playing' || !this.fullState) return;
                    try {
                        this.fullState = this.engine.applyAction(this.fullState, botAction);
                        this.outcome = this.engine.isGameOver(this.fullState);
                        if (this.outcome) {
                            this.phase = 'ended';
                        }
                        this.bumpAndBroadcast();
                        this.scheduleBotTurnIfNeeded();
                    } catch  {
                    // Bot move became stale
                    }
                }, 420);
                break;
            }
        }
    }
    applyRemoteSnapshot(snapshot) {
        this.version = snapshot.version;
        this.hostPlayerId = snapshot.hostPlayerId;
        this.gameId = snapshot.gameId;
        this.phase = snapshot.phase;
        this.settings = snapshot.settings;
        this.seats = snapshot.seats;
        this.spectators = snapshot.spectators;
        this.lastGameView = snapshot.gameView;
        this.outcome = snapshot.outcome;
        this.disconnectVotes = snapshot.disconnectVotes ?? {};
        this.mutedPlayerIds = new Set(snapshot.mutedPlayerIds ?? []);
        for (const seat of this.seats){
            if (seat.peerId) {
                this.peerToPlayerId.set(seat.peerId, seat.playerId);
            }
        }
        for (const spec of this.spectators){
            this.peerToPlayerId.set(spec.peerId, spec.playerId);
        }
        this.callbacks.onSnapshot(snapshot);
    }
    buildSnapshotFor(viewerPlayerId) {
        const view = this.fullState !== null ? this.engine.getView(this.fullState, viewerPlayerId) : null;
        return {
            version: this.version,
            roomCode: this.roomCode,
            hostPlayerId: this.hostPlayerId,
            gameId: this.gameId,
            phase: this.phase,
            settings: this.settings,
            seats: this.seats.map((s)=>({
                    ...s
                })),
            spectators: this.spectators.map((s)=>({
                    ...s
                })),
            gameView: view,
            outcome: this.outcome,
            disconnectVotes: structuredClone(this.disconnectVotes),
            mutedPlayerIds: Array.from(this.mutedPlayerIds)
        };
    }
    emitLocalSnapshot() {
        const selfIsSeat = this.seats.some((s)=>s.playerId === this.self.playerId);
        const snap = this.buildSnapshotFor(selfIsSeat ? this.self.playerId : null);
        this.lastGameView = snap.gameView;
        this.callbacks.onSnapshot(snap);
    }
    bumpAndBroadcast() {
        this.version += 1;
        this.emitLocalSnapshot();
        // Send personalized view to each connected seated player (protects hidden hands!)
        for (const seat of this.seats){
            if (!seat.connected || seat.isBot || !seat.peerId) continue;
            if (seat.playerId === this.self.playerId) continue;
            const snap = this.buildSnapshotFor(seat.playerId);
            void this.adapter.send('room_snapshot', snap, seat.peerId);
        }
        // Send spectator view (null playerId = all hidden hands stripped)
        for (const spec of this.spectators){
            const snap = this.buildSnapshotFor(null);
            void this.adapter.send('room_snapshot', snap, spec.peerId);
        }
    }
}
}),
"[project]/src/lib/url.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildRoomShareUrl",
    ()=>buildRoomShareUrl,
    "generateRoomCode",
    ()=>generateRoomCode,
    "getBasePath",
    ()=>getBasePath,
    "normalizeRoomCode",
    ()=>normalizeRoomCode,
    "withBasePath",
    ()=>withBasePath
]);
const rawBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').trim();
function getBasePath() {
    if (!rawBasePath) return '';
    const withLeading = rawBasePath.startsWith('/') ? rawBasePath : `/${rawBasePath}`;
    return withLeading.replace(/\/+$/, '');
}
function withBasePath(path) {
    const base = getBasePath();
    const normalized = path.startsWith('/') ? path : `/${path}`;
    return `${base}${normalized}`;
}
function buildRoomShareUrl(params) {
    const search = new URLSearchParams();
    search.set('code', params.code.toUpperCase());
    if (params.game) search.set('game', params.game);
    if (params.strategy && params.strategy !== 'torrent') {
        search.set('strategy', params.strategy);
    }
    if (params.localTest) {
        search.set('local', '1');
    }
    const relative = withBasePath(`/room/?${search.toString()}`);
    if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.location?.origin) //TURBOPACK unreachable
    ;
    return relative;
}
const ROOM_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
function generateRoomCode(length = 5) {
    const bytes = new Uint8Array(length);
    if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
        crypto.getRandomValues(bytes);
    } else {
        for(let i = 0; i < length; i++){
            bytes[i] = Math.floor(Math.random() * 256);
        }
    }
    let out = '';
    for(let i = 0; i < length; i++){
        const b = bytes[i] ?? 0;
        out += ROOM_ALPHABET[b % ROOM_ALPHABET.length];
    }
    return out;
}
function normalizeRoomCode(raw) {
    return raw.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1qzwa6oq5tu7u._.js.map