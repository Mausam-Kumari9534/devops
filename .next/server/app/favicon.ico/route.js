"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 2196:
/***/ ((module) => {

module.exports = require("next/dist/compiled/ua-parser-js");

/***/ }),

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 4970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata
var favicon_next_metadata_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_namespaceObject);
__webpack_require__.d(favicon_next_metadata_namespaceObject, {
  "GET": () => (GET),
  "dynamic": () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(4664);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5Csaura%5CDownloads%5CSmartCV-Resume-main%5CSmartCV-Resume-main%5Csrc%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: favicon_next_metadata_namespaceObject,
    pathname: "/favicon.ico",
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!C:\\Users\\saura\\Downloads\\SmartCV-Resume-main\\SmartCV-Resume-main\\src\\app\\favicon.ico?__next_metadata",
    nextConfigOutput: "standalone",
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [405,572], () => (__webpack_exec__(4970)));
module.exports = __webpack_exports__;

})();