// 全站版本號集中管理
// sw.js 用 importScripts('./version.js') 讀,index.html / mnemonics.html 用 <script src="version.js"></script> 讀
// 每次部署只要改這一行
const APP_VERSION = "v504";
const APP_VERSION_TAG = "google-auto-select-skip-pin";
if (typeof self !== "undefined") self.APP_VERSION = APP_VERSION;
if (typeof window !== "undefined") window.APP_VERSION = APP_VERSION;
